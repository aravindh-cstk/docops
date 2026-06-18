import fs from "node:fs";
import path from "node:path";
import { parseDocFile } from "./parser.js";
import { parseSteps } from "./exec-parser.js";
import { classifySteps } from "./exec-classifier.js";
import { runExecution } from "./exec-runner.js";
import { formatReport, formatStepSummary } from "./exec-reporter.js";
import type { ExecutionReport } from "./exec-runner.js";

const REPO_ROOT = process.env.REPO_ROOT ?? path.resolve(process.cwd(), "../..");
const DOCS_ROOT = process.env.DOCS_ROOT ?? "docs";
const PR_NUMBER = parseInt(process.env.PR_NUMBER ?? "0", 10);
const EXEC_TEST_FILES = process.env.EXEC_TEST_FILES ?? "/tmp/exec-test-files.json";
const OUTPUT_FILE = process.env.EXEC_TEST_OUTPUT ?? "/tmp/exec-test-output.txt";
const STEP_SUMMARY_FILE = process.env.GITHUB_STEP_SUMMARY;

async function main() {
  let docPaths: string[];

  try {
    const raw = fs.readFileSync(EXEC_TEST_FILES, "utf8");
    docPaths = (JSON.parse(raw) as string[]).filter(Boolean);
  } catch (err) {
    console.error(`Could not read exec test file list from ${EXEC_TEST_FILES}: ${err}`);
    process.exit(1);
  }

  if (docPaths.length === 0) {
    console.log("No opt-in docs found — nothing to execute.");
    process.exit(0);
  }

  console.log(`Running execution test on ${docPaths.length} doc(s)...`);

  const reports: ExecutionReport[] = [];
  const failures: string[] = [];

  for (const docPath of docPaths) {
    console.log(`\nProcessing: ${docPath}`);

    let parsed;
    try {
      parsed = parseDocFile(REPO_ROOT, DOCS_ROOT, docPath);
    } catch (err) {
      console.error(`  Failed to parse ${docPath}: ${err}`);
      failures.push(`Parse error in ${docPath}: ${err}`);
      continue;
    }

    if (!parsed.frontMatter.exec_test) {
      console.log(`  Skipped — exec_test not set to true`);
      continue;
    }

    const parsedSteps = parseSteps(parsed);
    const classified = classifySteps(parsedSteps);

    const testableCount = classified.steps.filter((s) => s.classification === "TESTABLE").length;
    if (testableCount === 0) {
      console.log(`  No testable steps found — skipping execution`);
      continue;
    }

    console.log(`  Found ${classified.steps.length} steps (${testableCount} testable)`);

    let report: ExecutionReport;
    try {
      report = await runExecution(classified, PR_NUMBER);
    } catch (err) {
      const msg = `Sandbox unavailable for ${docPath}: ${err}`;
      console.error(`  ${msg}`);
      failures.push(msg);
      continue;
    }

    reports.push(report);

    const { summary, overallStatus } = report;
    console.log(
      `  Result: ${overallStatus} — ${summary.passed} passed, ${summary.failed} failed, ${summary.skipped} skipped`,
    );
  }

  const failedReports = reports.filter((r) => r.overallStatus === "fail");
  const hasFailures = failedReports.length > 0 || failures.length > 0;

  if (hasFailures) {
    const commentLines: string[] = [];

    for (const report of failedReports) {
      const md = formatReport(report);
      if (md) commentLines.push(md);
    }

    for (const msg of failures) {
      commentLines.push(`## Doc Execution Test Error\n\n${msg}`);
    }

    const output = commentLines.join("\n\n---\n\n");
    fs.writeFileSync(OUTPUT_FILE, output, "utf8");
    console.log(`\nFailures written to ${OUTPUT_FILE}`);
  }

  if (STEP_SUMMARY_FILE && reports.length > 0) {
    const summary = formatStepSummary(reports);
    fs.appendFileSync(STEP_SUMMARY_FILE, summary + "\n", "utf8");
  }

  if (hasFailures) {
    process.exit(1);
  } else {
    console.log("\nAll execution tests passed.");
    process.exit(0);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
