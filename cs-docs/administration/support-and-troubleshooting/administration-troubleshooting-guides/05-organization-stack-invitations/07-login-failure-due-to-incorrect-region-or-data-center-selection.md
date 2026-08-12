---
title: "Login Failure Due to Incorrect Region or Data Center Selection"
description: "Login Failure Due to Incorrect Region or Data Center Selection"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/05-organization-stack-invitations/07-login-failure-due-to-incorrect-region-or-data-center-selection
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: csb13cee7e2cdf3378
---

# Login Failure Due to Incorrect Region or Data Center Selection

Login attempts may fail or return incorrect-password errors when the wrong regional login URL is used (for example, an Azure-Europe link for an account hosted on AWS-Europe, or an EU link for an NA-hosted account), even when the credentials themselves are correct.

**Root Cause**

Contentstack credentials and SSO configurations are tied to the specific region and data center where the account was created (such as AWS NA, AWS EU, Azure EU, or GCP NA). Attempting to authenticate through a different region's URL causes the login to fail even when the credentials are correct. For more detail on how regions work, see the Contentstack documentation on regions (https://www.contentstack.com/docs/administration/about-regions).

**Resolution**

1.  Confirm which region and data center the organization is hosted in.
2.  Use the corresponding regional login URL (for example, https://eu-app.contentstack.com/#!/login for AWS EU, or https://gcp-na-app.contentstack.com/#!/login for GCP NA).
3.  Retry login or SSO authentication using the correct regional endpoint.

After switching to the correct regional login URL, attempt to log in again to verify that authentication completes without password or redirect errors.
