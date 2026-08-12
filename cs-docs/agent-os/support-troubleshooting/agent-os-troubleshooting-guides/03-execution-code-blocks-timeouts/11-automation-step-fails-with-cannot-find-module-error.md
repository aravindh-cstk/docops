---
title: "Automation Step Fails with “Cannot Find Module” Error"
description: "Automation Step Fails with “Cannot Find Module” Error"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/11-automation-step-fails-with-cannot-find-module-error
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs5a2c12b5b68e9c20
---

# Automation Step Fails with “Cannot Find Module” Error

Saving a trigger or running an automation step fails with an error similar to: Cannot find module /opt/automations-workflow-engine/connectors/<id>/<id>.js, pointing into the automations workflow engine’s internal file structure.

**Root Cause**

The step or trigger references a connector module path that is not present, or not generated, on the workflow engine, a stale or broken connector registration for that specific step.

**Resolution**

1.  Delete the failing step (or trigger) from the automation.
2.  Re-create the step using the same step type and configuration it had before.
3.  Re-run or re-save the automation to confirm the error no longer appears.
4.  If deleting and re-creating the step does not resolve the error, contact Contentstack Support with the automation ID, step ID, connector/account in use, and the timestamp of the failure so it can be investigated on the engine side.

The step saves and runs successfully after being deleted and re-created, with no “Cannot find module” error.
