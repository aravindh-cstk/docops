import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { checkImagePath, rewriteMarkdownImages } from "./assets.js";
import type { ContentstackClient } from "./contentstack.js";

// ── Test runner ───────────────────────────────────────────────────────────────

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

function test(id: string, scenario: string, fn: () => Promise<string | void> | string | void): Promise<void> {
  process.stdout.write(`[${id}] ${scenario}... `);
  return Promise.resolve()
    .then(fn)
    .then((notes) => {
      results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
      console.log(`PASS${notes ? ` (${notes})` : ""}`);
    })
    .catch((err) => {
      const msg = err instanceof Error ? err.message : String(err);
      results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
      console.log(`FAIL\n     ${msg.slice(0, 300)}`);
    });
}
function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

// ── Part A: checkImagePath ────────────────────────────────────────────────────

function run(): Promise<void> {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), "imgrw-"));
  const docDir = path.join(repo, "cs-docs", "launch");
  fs.mkdirSync(path.join(docDir, "images"), { recursive: true });
  const okImg = path.join(docDir, "images", "ok.png");
  fs.writeFileSync(okImg, "\x89PNG\r\n"); // dummy png bytes
  const docRel = "cs-docs/launch/x.md";
  const resolve = (ref: string) => path.normalize(path.resolve(docDir, ref.split("#")[0] ?? ref));

  const chain = test("p1", "absolute path is rejected with a clear message", () => {
    const e = checkImagePath(repo, docRel, "/Users/x/foo.png", "/Users/x/foo.png");
    ok(!!e && /absolute path/.test(e), `expected absolute-path error, got: ${e}`);
    return "absolute-path error";
  })
    .then(() =>
      test("p2", "outside-project path is rejected with a clear message", () => {
        const ref = "../../../outside.png";
        const e = checkImagePath(repo, docRel, ref, resolve(ref));
        ok(!!e && /outside the project directory/.test(e), `expected outside-project error, got: ${e}`);
        return "outside-project error";
      }),
    )
    .then(() =>
      test("p3", "missing in-repo image reports missing", () => {
        const ref = "./images/missing.png";
        const e = checkImagePath(repo, docRel, ref, resolve(ref));
        ok(!!e && /missing image/.test(e), `expected missing-image error, got: ${e}`);
        return "missing-image error";
      }),
    )
    .then(() =>
      test("p4", "valid relative in-repo image passes", () => {
        const ref = "./images/ok.png";
        const e = checkImagePath(repo, docRel, ref, resolve(ref));
        ok(e === null, `expected no error, got: ${e}`);
        return "valid image OK";
      }),
    )
    // ── Part B: rewriteMarkdownImages ──────────────────────────────────────────
    .then(() =>
      test("r1", "local image is uploaded and rewritten; CDN ref untouched", async () => {
        const docPath = path.join(docDir, "x.md");
        const body =
          "See ![Save button](./images/ok.png) and existing " +
          "![Old](https://images.contentstack.io/v3/assets/a/b/h/old.png).";
        fs.writeFileSync(docPath, `---\ntitle: x\n---\n\n${body}\n`);

        const uploaded: string[] = [];
        const fakeClient = {
          findAssetByFilename: async () => null,
          uploadAsset: async (abs: string) => {
            uploaded.push(path.basename(abs));
            return { url: `https://images.contentstack.io/v3/assets/APIKEY/bltNEW/hash/${path.basename(abs)}`, uid: "bltNEW" };
          },
        } as unknown as ContentstackClient;

        const res = await rewriteMarkdownImages(fs.readFileSync(docPath, "utf8"), docPath, fakeClient);
        ok(uploaded.length === 1 && uploaded[0] === "ok.png", `expected 1 upload of ok.png, got ${JSON.stringify(uploaded)}`);
        ok(res.uploaded.length === 1, `expected 1 uploaded record, got ${res.uploaded.length}`);
        ok(res.markdown.includes("![Save button](https://images.contentstack.io/v3/assets/APIKEY/bltNEW/hash/ok.png)"),
          `local ref not rewritten — got:\n${res.markdown}`);
        ok(res.markdown.includes("![Old](https://images.contentstack.io/v3/assets/a/b/h/old.png)"),
          `existing CDN ref should be untouched — got:\n${res.markdown}`);
        ok(res.markdown.includes("title: x"), "frontmatter should be preserved");
        ok(res.uploaded[0]!.resolved === okImg, `resolved path should point at the local file, got ${res.uploaded[0]!.resolved}`);
        return "uploaded + rewrote local, kept CDN + frontmatter";
      }),
    )
    .then(() =>
      test("r2", "dry-run uploads/writes nothing and leaves markdown unchanged", async () => {
        const docPath = path.join(docDir, "y.md");
        const before = `---\ntitle: y\n---\n\n![Save button](./images/ok.png)\n`;
        fs.writeFileSync(docPath, before);
        let uploads = 0;
        const fakeClient = {
          findAssetByFilename: async () => { uploads++; return null; },
          uploadAsset: async () => { uploads++; return { url: "x", uid: "y" }; },
        } as unknown as ContentstackClient;

        const res = await rewriteMarkdownImages(before, docPath, fakeClient, { dryRun: true });
        ok(uploads === 0, `dry-run should not call the client, got ${uploads} calls`);
        ok(res.markdown === before, "dry-run should not change the markdown");
        ok(res.uploaded.length === 1, `dry-run should still report the ref that would upload, got ${res.uploaded.length}`);
        return "dry-run is side-effect free";
      }),
    )
    .then(() => {
      fs.rmSync(repo, { recursive: true, force: true });
      const passed = results.filter((r) => r.status === "PASS").length;
      const failed = results.filter((r) => r.status === "FAIL").length;
      console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
      if (failed > 0) process.exit(1);
    });

  return chain;
}

run();
