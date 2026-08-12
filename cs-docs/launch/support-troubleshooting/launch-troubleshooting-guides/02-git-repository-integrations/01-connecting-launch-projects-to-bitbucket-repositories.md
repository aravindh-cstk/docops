---
title: "Connecting Launch Projects to Bitbucket Repositories"
description: "Connecting Launch Projects to Bitbucket Repositories"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/02-git-repository-integrations/01-connecting-launch-projects-to-bitbucket-repositories
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: cs4116f44a9bc456ab
---

# Connecting Launch Projects to Bitbucket Repositories

The absence of a configured connection between a Launch project and a Bitbucket Cloud repository prevents the establishment of automated deployment pipelines, requiring a guided setup of the necessary integration protocols and environment configurations.

**Root Cause**

Establishing a new project connection involves specific prerequisite steps, including organizational-level app installation and OAuth authorization.

**Resolution**

To integrate Bitbucket Cloud with Launch, you must complete the following configuration steps:

1.  **Install the Bitbucket Cloud Marketplace App**: Access the Contentstack Marketplace at the organization level to install the Bitbucket Cloud app, which establishes the necessary OAuth permissions for secure communication between the platforms.
2.  **Connect Bitbucket Cloud to Launch**: Create a new project within the Launch dashboard and select Bitbucket as your Git provider; this allows the platform to import your specific repository and branch for the initial deployment.
3.  **Configure and Deploy**: Define the project’s build commands and the output directory (e.g., dist or build) within the environment settings to ensure the platform correctly compiles and serves your source code.
4.  **Refer to Documentation**: Consult the official Contentstack Launch documentation for detailed troubleshooting and advanced environment variable configurations.

The issue is resolved when the user can successfully create the Launch project and confirm that the repository is connected and building correctly.
