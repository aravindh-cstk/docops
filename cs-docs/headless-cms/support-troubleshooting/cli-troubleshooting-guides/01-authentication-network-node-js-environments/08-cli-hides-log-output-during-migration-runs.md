---
title: "CLI Hides Log Output During Migration Runs"
description: "CLI Hides Log Output During Migration Runs"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/08-cli-hides-log-output-during-migration-runs
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs8dd054c0662ac3ce
---

# CLI Hides Log Output During Migration Runs

Console log output was not visible while a migration was running.

**Root Cause**

The migration command uses an interactive display that redraws progress in place in a terminal session. console.log output written during that time can be overwritten by the next redraw. This only happens in an interactive terminal; piped or redirected output switches the CLI to plain, non-redrawing mode automatically. Error-level entries are also written to migration-logs/error.logs regardless of terminal mode, but this does not capture arbitrary console.log calls.

**Resolution**

1.  Redirect the command's output to a file or run it in a non-interactive context, for example: csdx cm:stacks:migration --file-path <path> -k <api-key> > migration.log. This is the reliable fix, since it changes the output mode rather than racing the display.
2.  If redirection isn't an option, add a leading newline to console.log statements in the migration script, for example: console.log('\\nMigration started...'). This reduces, but does not eliminate, the chance of output being overwritten.
3.  Check migration-logs/error.logs in the working directory for error-level entries as a partial fallback; it does not capture custom console.log output.
