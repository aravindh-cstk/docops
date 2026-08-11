---
title: "Automation Failure Due to 300-Second Code Block Execution Timeout"
description: "Automation Failure Due to 300-Second Code Block Execution Timeout"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/06-automation-failure-due-to-300-second-code-block-execution-timeout
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cscdd6c984d8914207
---

# Automation Failure Due to 300-Second Code Block Execution Timeout

Automations may fail at certain time windows when processing large datasets due to code block runtime constraints.

**Root Cause** Automation Hub enforces a **300-second execution timeout**, and the workload exceeded what could be completed in that window.

**Resolution**

1.  Reduce items processed per run (batching).
2.  Split into multiple executions:

-   Use pagination/skip/limit
-   Store cursor state externally

4.  Optimize code block performance:

-   Minimize sequential HTTP calls
-   Prefer bulk endpoints where possible

Run History shows successful completion within the timeout, with full workload processed across batches.
