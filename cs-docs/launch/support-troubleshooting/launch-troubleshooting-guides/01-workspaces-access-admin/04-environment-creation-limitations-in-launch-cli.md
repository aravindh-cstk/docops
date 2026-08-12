---
title: "Environment Creation Limitations in Launch CLI"
description: "Environment Creation Limitations in Launch CLI"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/01-workspaces-access-admin/04-environment-creation-limitations-in-launch-cli
doc_type: faq
_cms_section_uid: cscf1f73b7ae7fb2cf
_cms_faq_uid: csbf2efffa805574e3
---

# Environment Creation Limitations in Launch CLI

Attempts to create a new environment via the Launch Command Line Interface (CLI) fail because the functionality is currently restricted. This limitation requires an alternative workflow to establish new environments before they can be managed via terminal commands.

**Root Cause**

Creating new environments is currently a UI-only feature in Launch. While CLI support for this action is on the product roadmap, it is not supported in the current version of the tool.

**Resolution**

1.  Manually create the new environment through the Launch user interface.
2.  Once the environment is established in the UI, use the Launch CLI for subsequent tasks such as deployments and configuration management.
3.  Monitor official release notes for updates regarding expanded CLI capabilities for environment creation.

After manual creation in the UI, use the Launch CLI to list or manage the environment. The issue is resolved when the CLI successfully recognizes and interacts with the newly created environment.
