---
title: "Fixing syntax errors in DAM boilerplate app SDK initialization"
description: "Fixing syntax errors in DAM boilerplate app SDK initialization"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/03-custom-app-development-extensions/03-fixing-syntax-errors-in-dam-boilerplate-app-sdk-initialization
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: csaf4041754d9cbb56
---

# Fixing syntax errors in DAM boilerplate app SDK initialization

Integrating a DAM boilerplate app may result in syntax errors during initialization when the target origin is not properly configured. This prevents the app from communicating with the Contentstack UI.

**Root Cause**

The application SDK uses a placeholder string for the target origin URL in its postMessage configuration, which the browser fails to validate as a legitimate domain.

**Resolution**

1.  Open the source code where the @contentstack/ui-extensions-sdk is initialized.
2.  Locate the configuration object or initialization function containing the target origin parameter.
3.  Replace the placeholder text "YOUR CUSTOM FIELD DOMAIN URL" with the specific Contentstack app domain URL (e.g., [app.contentstack.com](https://app.contentstack.com/)).
4.  Save the changes and rebuild the application.

After replacing the placeholder URL, open the DAM app within the Contentstack environment.

If the syntax error no longer appears in the console and the app loads correctly, the SDK is properly initialized.
