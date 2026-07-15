import type { ExecutionReport } from "./exec-runner.js";

export function formatReport(report: ExecutionReport): string {
  if (report.overallStatus === "pass") return "";

  const failedSteps = report.steps.filter((s) => s.status === "fail");
  const skippedSteps = report.steps.filter((s) => s.status === "skip");

  const lines: string[] = [];

  lines.push("## Doc Execution Test — Advisory Warning");
  lines.push("");
  lines.push(`**File:** \`${report.docPath}\``);
  lines.push(`**Sandbox stack:** \`${report.sandboxStackUid}\` (deleted after run)`);
  lines.push("");

  if (failedSteps.length > 0) {
    lines.push("### Failed Steps");
    lines.push("");
    lines.push("| Step | Intent | Phase | Error |");
    lines.push("|------|--------|-------|-------|");
    for (const s of failedSteps) {
      const phase = s.phase ?? "—";
      const error = (s.errorMessage ?? "unknown error").replace(/\|/g, "\\|");
      lines.push(`| ${s.step} | \`${s.intent}\` | ${phase} | ${error} |`);
    }
    lines.push("");
  }

  if (skippedSteps.length > 0) {
    lines.push("### Skipped Steps (not testable via MCP)");
    lines.push("");
    for (const s of skippedSteps) {
      const reason = s.errorMessage ?? s.intent;
      lines.push(`- Step ${s.step}: ${s.rawText} *(${reason})*`);
    }
    lines.push("");
  }

  lines.push("### Summary");
  lines.push("");
  lines.push(
    `- Total testable: **${report.summary.total}** | Passed: **${report.summary.passed}** | Failed: **${report.summary.failed}** | Skipped: **${report.summary.skipped}**`,
  );
  lines.push("");
  lines.push(
    "> This is an advisory warning — the PR can still be merged. Fix the errors above to ensure the doc's instructions are accurate.",
  );

  return lines.join("\n");
}

export function formatStepSummary(reports: ExecutionReport[]): string {
  const lines: string[] = [];
  lines.push("## Doc Execution Test Results");
  lines.push("");

  for (const report of reports) {
    const icon = report.overallStatus === "pass" ? "✅" : "⚠️";
    lines.push(
      `${icon} \`${report.docPath}\` — ${report.summary.passed}/${report.summary.total} steps passed`,
    );
  }

  return lines.join("\n");
}
