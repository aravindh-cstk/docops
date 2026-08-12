---
title: "Fixing CLI Installation Errors Caused by the --before Flag"
description: "Fixing CLI Installation Errors Caused by the --before Flag"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/03-builds-deployments/05-fixing-cli-installation-errors-caused-by-the-before-flag
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cs14d1754a7fa67efc
---

# Fixing CLI Installation Errors Caused by the --before Flag

Deploying through the @contentstack/cli using the --before=<date> flag fails in a CI/CD environment (such as Jenkins) with the error TypeError: withDisabledDeprecations is not a function. Installing the CLI without this flag does not reproduce the error.

**Root Cause**

The --before flag instructs npm to install the latest version of the package available before a given date. In this case, that resolution method installed a CLI version in a way that triggered an incompatibility with the installed Node.js version, surfacing as the withDisabledDeprecations error.

**Resolution**

1.  Identify the exact CLI version being installed via the --before flag by checking the npm install logs in your CI/CD pipeline.
2.  Replace the --before flag installation with an explicit version pin, for example: npm install @contentstack/cli@<version> --save-dev.
3.  Update your CI/CD pipeline configuration (e.g., Jenkinsfile) to use the explicit version installation instead of the date-based flag.
4.  Re-run the pipeline to confirm the deployment completes successfully without the withDisabledDeprecations error.
5.  If a newer Node.js version is available and appropriate for your project, consider upgrading as an additional long-term stability measure, though it is not required to resolve this specific error.

The issue is resolved when the CI/CD pipeline installs the Contentstack CLI successfully via an explicit version pin and deployments complete without the withDisabledDeprecations error.
