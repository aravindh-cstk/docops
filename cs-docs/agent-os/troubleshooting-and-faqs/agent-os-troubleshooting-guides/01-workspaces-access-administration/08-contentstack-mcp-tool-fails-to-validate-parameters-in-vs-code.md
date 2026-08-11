---
title: "Contentstack MCP Tool Fails to Validate Parameters in VS Code"
description: "Contentstack MCP Tool Fails to Validate Parameters in VS Code"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/08-contentstack-mcp-tool-fails-to-validate-parameters-in-vs-code
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: cs8c55d2582276799d
---

# Contentstack MCP Tool Fails to Validate Parameters in VS Code

When using the Contentstack MCP tool in VS Code, tool calls fail with a parameter validation error, and the tool cannot fetch entries or content models as expected.

**Root Cause**

The error stems from how environment variables are handled when the MCP tool is configured through the VS Code extension, rather than through a dedicated per-stack configuration file.

**Resolution**

1.  Create a custom mcp.json configuration file inside your project’s .vscode folder to define stack-specific environment variables explicitly, instead of relying on global environment variable handling.
2.  Uninstall the MCP extension through the VS Code UI.
3.  Reinstall the MCP extension through the VS Code UI.
4.  Reload the VS Code window.
5.  Retry the operation that previously failed (for example, fetching entries or content models) to confirm the parameter validation error is gone.

The MCP tool fetches entries and content models as expected, with no parameter validation errors.
