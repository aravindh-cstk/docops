#!/usr/bin/env node

/**
 * Alignment Verification Script
 *
 * Verifies that Prod CMS, Sandbox CMS, and Git repository are in sync:
 * - CS-Docs: 7,401 published entries expected
 * - API Docs: 837 published entries expected
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SandboxClient } from "./lib/sandbox-client.js";
import https from "node:https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface StackConfig {
  name: string;
  type: "apidocs" | "csdocs";
  expectedCount: number;
  contentTypeUid: string;
}

const STACKS: StackConfig[] = [
  { name: "CS-Docs", type: "csdocs", expectedCount: 7401, contentTypeUid: "docs_article" },
  { name: "API Docs", type: "apidocs", expectedCount: 837, contentTypeUid: "api_detail_page" },
];

async function getPublishedCount(apiKey: string, managementToken: string, contentTypeUid: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.contentstack.io",
      port: 443,
      path: `/v3/content_types/${contentTypeUid}/entries?query=${encodeURIComponent(JSON.stringify({ status: "published" }))}&locale=en-us&limit=1`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: apiKey,
        authorization: managementToken,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.entries?.length ?? 0);
          } catch {
            reject(new Error("Failed to parse response"));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on("error", reject);
    req.end();
  });
}

async function countGitFiles(docsPath: string): Promise<number> {
  let count = 0;

  function walkDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith(".md")) {
        count++;
      }
    }
  }

  if (fs.existsSync(docsPath)) {
    walkDir(docsPath);
  }
  return count;
}

async function main() {
  console.log("\n📊 ALIGNMENT VERIFICATION REPORT\n");
  console.log("=".repeat(80));

  const repoRoot = path.resolve(__dirname, "../../..");

  for (const stack of STACKS) {
    console.log(`\n🔍 ${stack.name}`);
    console.log("-".repeat(40));

    // Get credentials
    const envPrefix = stack.type.toUpperCase();
    const prodApiKey = process.env[`PROD_${envPrefix}_STACK_API_KEY`];
    const prodToken = process.env[`PROD_${envPrefix}_STACK_MANAGEMENT_TOKEN`];
    const sandboxApiKey = process.env[`${envPrefix}_SANDBOX_STACK_API_KEY`];
    const sandboxToken = process.env[`${envPrefix}_SANDBOX_MANAGEMENT_TOKEN`];

    if (!prodApiKey || !prodToken || !sandboxApiKey || !sandboxToken) {
      console.log(`❌ Missing credentials for ${stack.name}`);
      continue;
    }

    try {
      // Get counts from CMS
      console.log("Querying Production CMS...");
      const prodCount = await getPublishedCount(prodApiKey, prodToken, stack.contentTypeUid);

      console.log("Querying Sandbox CMS...");
      const sandboxCount = await getPublishedCount(sandboxApiKey, sandboxToken, stack.contentTypeUid);

      // Count Git files
      const docsPath = stack.type === "apidocs" ? "api-docs" : "cs-docs";
      const gitCount = await countGitFiles(path.join(repoRoot, docsPath));

      // Display results
      console.log(`\n  Production:  ${prodCount} published entries (expected: ${stack.expectedCount})`);
      console.log(`  Sandbox:     ${sandboxCount} published entries`);
      console.log(`  Git:         ${gitCount} markdown files`);

      // Alignment check
      const prodMatch = prodCount === stack.expectedCount;
      const sandboxMatch = sandboxCount === prodCount;
      const gitMatch = gitCount === prodCount;

      console.log(`\n  Status:`);
      console.log(`    ${prodMatch ? "✅" : "❌"} Production has expected count`);
      console.log(`    ${sandboxMatch ? "✅" : "❌"} Sandbox matches Production`);
      console.log(`    ${gitMatch ? "✅" : "❌"} Git matches Production`);

      if (!prodMatch) {
        console.log(`    ⚠️  Expected ${stack.expectedCount} but found ${prodCount}`);
      }
      if (!sandboxMatch) {
        console.log(`    ⚠️  Sandbox has ${sandboxCount}, Production has ${prodCount} (diff: ${Math.abs(sandboxCount - prodCount)})`);
      }
      if (!gitMatch) {
        console.log(`    ⚠️  Git has ${gitCount}, Production has ${prodCount} (diff: ${Math.abs(gitCount - prodCount)})`);
      }
    } catch (error) {
      console.log(`❌ Error: ${error instanceof Error ? error.message : error}`);
    }
  }

  console.log("\n" + "=".repeat(80) + "\n");
}

main().catch(console.error);
