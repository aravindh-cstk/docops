import type { ParsedDoc } from "./parser.js";

export interface DocStep {
  index: number;
  sectionHeading: string;
  rawText: string;
  subSteps: string[];
  phase?: "reproduce" | "diagnose" | "resolve";
}

export interface ParsedSteps {
  docPath: string;
  execTestType: "procedural" | "troubleshooting";
  steps: DocStep[];
}

const ACTION_HEADING_RE =
  /\b(create|configure|set\s+up|add|enable|disable|navigate|install|deploy|delete|remove|publish|update|import|export|connect|integrate|generate|run|execute|trigger|test|verify|troubleshoot|resolve|reproduce|diagnose|fix)\b/i;

const IMPERATIVE_START_RE =
  /^(go\s+to|click|select|enter|open|navigate|enable|disable|toggle|set|create|add|delete|remove|publish|unpublish|upload|download|copy|paste|fill\s+in|type|check|uncheck|save|submit|confirm|verify|ensure|make\s+sure|try|attempt|call|send|run|execute|install|deploy|import|export|connect|configure|update|use|open|close|expand|collapse)\b/i;

const SKIP_HEADING_RE =
  /\b(prerequisite|before\s+you\s+begin|next\s+step|related\s+article|overview|introduction|what\s+is|about|additional\s+resource|see\s+also)\b/i;

const TROUBLESHOOT_REPRODUCE_RE =
  /\b(reproduce|steps?\s+to\s+reproduce|how\s+to\s+reproduce)\b/i;
const TROUBLESHOOT_DIAGNOSE_RE = /\b(diagnos|symptom|error|issue|problem|check)\b/i;
const TROUBLESHOOT_RESOLVE_RE = /\b(resolv|fix|solution|workaround|correct)\b/i;

function inferPhase(
  heading: string,
  execTestType: "procedural" | "troubleshooting",
): "reproduce" | "diagnose" | "resolve" | undefined {
  if (execTestType !== "troubleshooting") return undefined;
  if (TROUBLESHOOT_REPRODUCE_RE.test(heading)) return "reproduce";
  if (TROUBLESHOOT_RESOLVE_RE.test(heading)) return "resolve";
  if (TROUBLESHOOT_DIAGNOSE_RE.test(heading)) return "diagnose";
  return undefined;
}

function isInsideCodeBlock(lines: string[], lineIdx: number): boolean {
  let insideCode = false;
  for (let i = 0; i < lineIdx; i++) {
    if (lines[i].trimStart().startsWith("```")) insideCode = !insideCode;
  }
  return insideCode;
}

function isInfoPanel(line: string): boolean {
  return /<p\s+class=["'](note|tip|warning|add-resource)["']/i.test(line);
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

export function parseSteps(doc: ParsedDoc): ParsedSteps {
  const execTestType = doc.frontMatter.exec_test_type ?? "procedural";
  const lines = doc.body.split("\n");
  const steps: DocStep[] = [];
  let stepIndex = 0;
  let currentHeading = "";
  let currentPhase: "reproduce" | "diagnose" | "resolve" | undefined;
  let insideInfoPanel = false;
  let skipSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (isInsideCodeBlock(lines, i)) continue;

    if (trimmed.startsWith("## ")) {
      currentHeading = trimmed.slice(3).trim();
      currentPhase = inferPhase(currentHeading, execTestType);
      skipSection = SKIP_HEADING_RE.test(currentHeading);
      insideInfoPanel = false;
      continue;
    }

    if (trimmed.startsWith("### ") || trimmed.startsWith("#### ")) {
      const subHeading = trimmed.replace(/^#{3,4}\s+/, "").trim();
      const subPhase = inferPhase(subHeading, execTestType);
      if (subPhase) currentPhase = subPhase;
      if (SKIP_HEADING_RE.test(subHeading)) skipSection = true;
      continue;
    }

    if (skipSection) continue;

    if (isInfoPanel(trimmed)) {
      insideInfoPanel = true;
      continue;
    }
    if (insideInfoPanel) {
      if (trimmed === "</p>") insideInfoPanel = false;
      continue;
    }

    if (!ACTION_HEADING_RE.test(currentHeading) && execTestType === "procedural") {
      if (IMPERATIVE_START_RE.test(trimmed)) {
        const raw = stripMarkdown(trimmed);
        if (raw.length > 5) {
          steps.push({
            index: ++stepIndex,
            sectionHeading: currentHeading,
            rawText: raw,
            subSteps: [],
            phase: currentPhase,
          });
        }
      }
      continue;
    }

    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
    if (orderedMatch) {
      const raw = stripMarkdown(orderedMatch[2]);
      const subSteps: string[] = [];
      let j = i + 1;
      while (j < lines.length) {
        const subLine = lines[j].trim();
        if (/^[-*]\s+/.test(subLine) && lines[j].match(/^\s{2,}/)) {
          subSteps.push(stripMarkdown(subLine.replace(/^[-*]\s+/, "")));
          j++;
        } else {
          break;
        }
      }
      steps.push({
        index: ++stepIndex,
        sectionHeading: currentHeading,
        rawText: raw,
        subSteps,
        phase: currentPhase,
      });
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.+)/);
    if (unorderedMatch && !lines[i].match(/^\s{2,}/)) {
      const raw = stripMarkdown(unorderedMatch[1]);
      if (IMPERATIVE_START_RE.test(raw)) {
        steps.push({
          index: ++stepIndex,
          sectionHeading: currentHeading,
          rawText: raw,
          subSteps: [],
          phase: currentPhase,
        });
      }
      continue;
    }

    if (IMPERATIVE_START_RE.test(trimmed)) {
      const raw = stripMarkdown(trimmed);
      if (raw.length > 5) {
        steps.push({
          index: ++stepIndex,
          sectionHeading: currentHeading,
          rawText: raw,
          subSteps: [],
          phase: currentPhase,
        });
      }
    }
  }

  return { docPath: doc.filePath, execTestType, steps };
}
