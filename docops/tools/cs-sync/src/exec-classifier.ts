import type { DocStep, ParsedSteps } from "./exec-parser.js";

export type StepClass = "TESTABLE" | "SKIP";

export type StepIntent =
  | "create-stack"
  | "create-content-type"
  | "add-field"
  | "create-entry"
  | "create-entry-invalid"
  | "publish-entry"
  | "unpublish-entry"
  | "create-environment"
  | "create-release"
  | "add-to-release"
  | "deploy-release"
  | "create-workflow"
  | "set-workflow-stage"
  | "create-webhook"
  | "create-token"
  | "create-role"
  | "create-taxonomy"
  | "enable-ab-test"
  | "create-variant"
  | "create-audience"
  | "attempt-publish-expect-error"
  | "check-webhook-delivery"
  | "assert-api-response"
  | "import-conflicting-schema"
  | "navigate-ui"
  | "api-call"
  | "unknown";

export interface ClassifiedStep extends DocStep {
  classification: StepClass;
  skipReason?: string;
  intent: StepIntent;
  expectFailure?: boolean;
}

export interface ClassifiedSteps {
  docPath: string;
  execTestType: "procedural" | "troubleshooting";
  steps: ClassifiedStep[];
}

const EXTERNAL_URL_RE = /https?:\/\/(?!app\.contentstack\.com|contentstack\.com)/i;

const CS_CONCEPTS_RE =
  /\b(stack|content\s+type|field|entry|entries|environment|publish|workflow|taxonomy|branch|a\/b\s+test|ab\s+test|variant|audience|personalize|personali[sz]ation|release|global\s+field|extension|webhook|management\s+token|delivery\s+token|api\s+key|role|user|locale|asset|folder)\b/i;

const HTTP_METHOD_RE = /\b(GET|POST|PUT|PATCH|DELETE)\b|api\s+call|api\s+request|curl\b|endpoint\b/i;

const CONCEPTUAL_RE =
  /\b(understand|note\s+that|keep\s+in\s+mind|learn\s+about|overview|introduction|what\s+is|concept|background|refer\s+to|see\s+the|read\s+more|for\s+more\s+information)\b/i;

const INTENT_PATTERNS: Array<[RegExp, StepIntent]> = [
  [/\bcreate\b.*\bstack\b|\bnew\s+stack\b/i, "create-stack"],
  [/\bcreate\b.*\bcontent\s*type\b|\badd.*\bcontent\s*type\b/i, "create-content-type"],
  [/\badd.*\bfield\b|\bcreate.*\bfield\b|\bnew\s+field\b/i, "add-field"],
  [/\bcreate\b.*\bentry\b|\badd.*\bentry\b|\bnew\s+entry\b/i, "create-entry"],
  [/\bpublish\b.*\bentry\b|\bentry\b.*\bpublish\b|\bpublish\b/i, "publish-entry"],
  [/\bunpublish\b/i, "unpublish-entry"],
  [/\bcreate\b.*\benvironment\b|\badd.*\benvironment\b/i, "create-environment"],
  [/\bcreate\b.*\brelease\b|\bnew\s+release\b/i, "create-release"],
  [/\badd.*\bto\s+(the\s+)?release\b|\brelease\b.*\badd\b/i, "add-to-release"],
  [/\bdeploy\b.*\brelease\b|\brelease\b.*\bdeploy\b/i, "deploy-release"],
  [/\bcreate\b.*\bworkflow\b|\badd.*\bworkflow\b/i, "create-workflow"],
  [/\bstage\b.*\bworkflow\b|\bworkflow\s+stage\b|\bset\s+stage\b/i, "set-workflow-stage"],
  [/\bcreate\b.*\bwebhook\b|\badd.*\bwebhook\b|\bset\s+up.*\bwebhook\b/i, "create-webhook"],
  [/\bcreate\b.*\btoken\b|\bgenerate\b.*\btoken\b|\bmanagement\s+token\b|\bdelivery\s+token\b/i, "create-token"],
  [/\bcreate\b.*\brole\b|\badd.*\brole\b/i, "create-role"],
  [/\bcreate\b.*\btaxonomy\b|\badd.*\btaxonomy\b/i, "create-taxonomy"],
  [/\ba\/b\s+test\b|\bab\s+test\b|\bpersonali[sz]e\b.*\btest\b|\bexperiment\b/i, "enable-ab-test"],
  [/\bcreate\b.*\bvariant\b|\badd.*\bvariant\b/i, "create-variant"],
  [/\bcreate\b.*\baudience\b|\badd.*\baudience\b/i, "create-audience"],
  [/\bimport\b.*\bcontent\s*type\b|\bimport\b.*\bschema\b/i, "import-conflicting-schema"],
];

const TROUBLESHOOT_EXPECT_ERROR_RE =
  /\b(422|400|403|404|500|error|fail|invalid|reject|cannot|unable)\b/i;

const TROUBLESHOOT_WEBHOOK_CHECK_RE = /\bwebhook\b.*\b(log|deliveri|fire|trigger|send)\b/i;

const NAVIGATE_UI_RE =
  /\b(click|go\s+to|navigate\s+to|open\s+the|select\s+from|from\s+the\s+(left|right|top|bottom)\s+(panel|menu|sidebar|bar)|in\s+the\s+(left|right|top|bottom))\b/i;

function classifyStep(
  step: DocStep,
  execTestType: "procedural" | "troubleshooting",
): { classification: StepClass; skipReason?: string; intent: StepIntent; expectFailure?: boolean } {
  const text = step.rawText;

  if (EXTERNAL_URL_RE.test(text)) {
    return { classification: "SKIP", skipReason: "references external URL", intent: "unknown" };
  }

  if (CONCEPTUAL_RE.test(text)) {
    return { classification: "SKIP", skipReason: "conceptual language", intent: "unknown" };
  }

  if (execTestType === "troubleshooting" && step.phase === "reproduce") {
    if (TROUBLESHOOT_EXPECT_ERROR_RE.test(text)) {
      const intent = resolveIntent(text, "create-entry-invalid");
      return { classification: "TESTABLE", intent, expectFailure: true };
    }
  }

  if (execTestType === "troubleshooting" && step.phase === "diagnose") {
    if (TROUBLESHOOT_WEBHOOK_CHECK_RE.test(text)) {
      return { classification: "TESTABLE", intent: "check-webhook-delivery" };
    }
    if (HTTP_METHOD_RE.test(text) || TROUBLESHOOT_EXPECT_ERROR_RE.test(text)) {
      return { classification: "TESTABLE", intent: "assert-api-response" };
    }
    if (NAVIGATE_UI_RE.test(text)) {
      return { classification: "SKIP", skipReason: "UI navigation (diagnose phase)", intent: "navigate-ui" };
    }
  }

  if (NAVIGATE_UI_RE.test(text) && !CS_CONCEPTS_RE.test(text) && !HTTP_METHOD_RE.test(text)) {
    return { classification: "SKIP", skipReason: "UI navigation without API equivalent", intent: "navigate-ui" };
  }

  if (CS_CONCEPTS_RE.test(text) || HTTP_METHOD_RE.test(text)) {
    const intent = resolveIntent(text, "unknown");
    return { classification: "TESTABLE", intent };
  }

  return { classification: "SKIP", skipReason: "no testable Contentstack operation detected", intent: "unknown" };
}

function resolveIntent(text: string, fallback: StepIntent): StepIntent {
  for (const [pattern, intent] of INTENT_PATTERNS) {
    if (pattern.test(text)) return intent;
  }
  if (HTTP_METHOD_RE.test(text)) return "api-call";
  return fallback;
}

export function classifySteps(parsed: ParsedSteps): ClassifiedSteps {
  const steps: ClassifiedStep[] = parsed.steps.map((step) => {
    const result = classifyStep(step, parsed.execTestType);
    return { ...step, ...result };
  });

  return {
    docPath: parsed.docPath,
    execTestType: parsed.execTestType,
    steps,
  };
}
