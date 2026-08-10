---
title: "Generate a Management Token"
description: "Learn how to generate and manage Contentstack's management tokens for secure content access. Configure permissions, expiry, and rate limits efficiently."
url: /headless-cms/generate-a-management-token
---

# Generate a Management Token

## Generate a Management Token

Contentstack allows you to generate a **management token** that provides secure **read-write access** to your stack's content through the **Content Management API**. Only the stack [Owner](/docs/headless-cms/types-of-roles#owner) or [Admin](/docs/headless-cms/types-of-roles#admin) has permission to create or view these tokens. Here's how to generate a management token and configure its access levels, expiry, and rate limits.

**Note:** Manage Rate Limits is a plan-based feature. For more details, contact our [support](mailto:support@contentstack.com) team.

To generate a management token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon.
2.  Select **Tokens** from the list.
3.  Navigate to the **Management Tokens** tab and click **\+ Management Token**.
4.  Provide a relevant **Name** and **Description** for the token.
5.  Under **Scope**:
    -   Choose the [branches](/docs/headless-cms/about-branches) to which you want the token to have access (e.g., All Branches or Specific Branch(es)).
    -   Choose the [aliases](/docs/headless-cms/about-aliases) to fetch or manage data from their associated branches.
        
        **Tip:** This option appears only if an alias exists for a branch.
        
    -   Select the stack-level permissions you want to assign to this token (e.g., Read and/or Write).
6.  Under **Expiry**, set an expiration limit for the token:
    -   Select **Never** if the token should not expire.
    -   Choose **Date (in UTC)** to set a specific expiration date. If selected, you can also enable **Notify via email** to receive a reminder **7 days** before expiry.
        
        **Note:** The management token expires at **midnight UTC** on the chosen date. When a management token expires, it becomes invalid and cannot be used to make any [Content Management API](/docs/developers/apis/content-management-api) calls.
        
        ![Management Token Expiry Setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bf53a4da6ea2dd1/67fe204f696c052f7d35a4eb/Generate_Mgmt_Token_aliases.png)
7.  In the **Manage Rate Limits** section, configure the token's rate limits within your organization's overall rate limit:
    -   **Use Organization Rate Limit (default):** The token will follow the default organization-wide rate limit.
    -   **Enforce Custom Rate Limit:** You can specify a custom rate limit for the token, within the organization’s overall rate limit.
        
        -   **Read Requests Per Second:** Enter the maximum number of GET requests allowed for the token.
        -   **Write Requests Per Second:** Enter the maximum number of POST, PUT, DELETE, or other requests allowed for the token.
        
        ![Custom Rate Limit Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfc6cfd28ad69e7c/67fe1f089dd5cf0bec99fdb1/Generate_Mgmt_Token_Rate_Limits.png)
        
        **Note:** Custom rate limits cap the number of requests per second, ensuring efficient usage within your organization’s allocation.
        
8.  Click **Generate Token**. A confirmation window displays the **Stack API Key** and the generated **Management Token**.  
    
    **Warning:** Make sure to copy the token now—once the window is closed, you won’t be able to view it again.
    
    ![Generate Management Token Confirmation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf123b87b92071b44/67f5c0eb1858947e0da0a9d4/Generate_Mgmt_Token_Confirmation.png)
9.  Click **Done** on the modal to finalize and activate the management token.

**Note:** You can generate up to **30 management tokens per stack** within your organization.
