/**
 * Unit tests for release-manager.ts, specifically the find-or-create Release
 * behavior that prevents multiple entries from the same PR racing on the same
 * Release name and only the first one landing in the bundle.
 *
 * No credentials needed — the Contentstack client is faked in-memory.
 *
 * Run: npm run test:release-manager
 */

import assert from "node:assert/strict";
import { createReleaseForPromotion } from "./lib/release-manager.js";
import type { ProdPromoteClient } from "./lib/prod-promote-client.js";
import type { ContentstackEntry } from "./lib/entry-content.js";

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void | Promise<void>): Promise<void> {
  return Promise.resolve()
    .then(fn)
    .then(() => {
      passed++;
      console.log(`  ✓ ${name}`);
    })
    .catch((error) => {
      failed++;
      console.log(`  ✗ ${name}`);
      console.log(`      ${error instanceof Error ? error.message : error}`);
    });
}

/**
 * In-memory stand-in for ProdPromoteClient, covering only the methods
 * createReleaseForPromotion calls. Releases are stored by name so
 * findReleaseByName can behave like the real paginated-list-then-filter
 * implementation, just without the HTTP round trip.
 */
class FakeStack {
  releases = new Map<string, { uid: string; name: string }>();
  addedItems: Array<{ releaseUid: string; items: Array<{ uid: string; contentTypeUid: string; version: number }> }> = [];
  createReleaseCalls = 0;
  private nextUid = 1;

  asClient(): ProdPromoteClient {
    return this as unknown as ProdPromoteClient;
  }

  async findReleaseByName(name: string): Promise<{ uid: string; name: string } | null> {
    return this.releases.get(name) ?? null;
  }

  async createRelease(name: string, _description: string): Promise<{ uid: string; name: string }> {
    this.createReleaseCalls++;
    const release = { uid: `release${this.nextUid++}`, name };
    this.releases.set(name, release);
    return release;
  }

  async getEntryOfType(_contentTypeUid: string, uid: string): Promise<ContentstackEntry | null> {
    return { uid, _version: 3 } as unknown as ContentstackEntry;
  }

  async addItemsToRelease(
    releaseUid: string,
    items: Array<{ uid: string; contentTypeUid: string; version: number }>,
  ): Promise<void> {
    this.addedItems.push({ releaseUid, items });
  }
}

async function main(): Promise<void> {
  console.log("\nrelease-manager\n");

  // createReleaseForPromotion looks up the PR title via a real GitHub API
  // call on the create branch (release-manager.ts calls getPullRequestTitle).
  // Stub fetch so these tests run offline and don't depend on a real PR
  // existing; the lookup is already wrapped in .catch(() => null) in the
  // code under test, so a failing fetch is exactly what it's built to handle.
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () => new Response("", { status: 404 })) as typeof fetch;

  await test("empty items returns null and makes no client calls", async () => {
    const stack = new FakeStack();
    const result = await createReleaseForPromotion(stack.asClient(), 405, []);
    assert.equal(result, null);
    assert.equal(stack.createReleaseCalls, 0);
  });

  await test("first entry for a PR creates the release", async () => {
    const stack = new FakeStack();
    const release = await createReleaseForPromotion(stack.asClient(), 405, [
      { uid: "beta1", contentTypeUid: "docs_article" },
    ]);
    assert.equal(stack.createReleaseCalls, 1);
    assert.equal(release?.name, "PR #405");
    assert.equal(stack.addedItems.length, 1);
    assert.equal(stack.addedItems[0].items[0].uid, "beta1");
  });

  await test("second entry from the same PR in the same run reuses the existing release instead of racing on create", async () => {
    // This is the exact Alpha/Beta regression: Beta processed first creates
    // "PR #405", Alpha processed second must land in that same release
    // instead of failing to create its own and being dropped.
    const stack = new FakeStack();
    const betaRelease = await createReleaseForPromotion(stack.asClient(), 405, [
      { uid: "beta1", contentTypeUid: "docs_article" },
    ]);
    const alphaRelease = await createReleaseForPromotion(stack.asClient(), 405, [
      { uid: "alpha1", contentTypeUid: "docs_article" },
    ]);

    assert.equal(stack.createReleaseCalls, 1, "createRelease should only be called once for the PR");
    assert.equal(alphaRelease?.uid, betaRelease?.uid, "both entries should land in the same release");
    assert.equal(stack.addedItems.length, 2, "each call should still add its own items");
    assert.equal(stack.addedItems[1].items[0].uid, "alpha1");
    assert.equal(stack.addedItems[1].releaseUid, betaRelease?.uid);
  });

  await test("entries from different PRs get different releases", async () => {
    const stack = new FakeStack();
    const release405 = await createReleaseForPromotion(stack.asClient(), 405, [
      { uid: "beta1", contentTypeUid: "docs_article" },
    ]);
    const release406 = await createReleaseForPromotion(stack.asClient(), 406, [
      { uid: "gamma1", contentTypeUid: "docs_article" },
    ]);

    assert.equal(stack.createReleaseCalls, 2);
    assert.notEqual(release405?.uid, release406?.uid);
  });

  globalThis.fetch = originalFetch;

  console.log(`\n${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

main();
