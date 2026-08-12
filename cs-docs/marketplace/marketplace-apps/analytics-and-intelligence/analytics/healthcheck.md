---
title: "Healthcheck App Installation Guide"
description: "Examine the health of your stacks and access health metrics, personalized insights, and proactive health tips."
url: /marketplace/healthcheck
---

# Healthcheck App Installation Guide

## Healthcheck App Installation Guide

The Healthcheck app is an examining tool that provides a comprehensive view of your stack's health and performance. Its insights and tracking of key metrics, such as security vulnerabilities, publishing workflows, and content operations, alert you to any issues or bottlenecks.

By installing the Healthcheck app from the Contentstack Marketplace, you can easily analyze the health and performance of your stacks in Contentstack.

**Note:** The Healthcheck app supports up to **100,000 entries**.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin)
-   [Full Page UI Location](/docs/developer-hub/full-page-location/)

Let's follow the step-by-step guide to install and configure the Healthcheck app within your stack.

## Steps for Execution

1.  [Install and configure the Healthcheck app in Marketplace](#install-and-configure-the-healthcheck-app-in-marketplace)
2.  [Use the Healthcheck app within your Stack](#use-the-healthcheck-app-within-your-stack)

1.  ## Install and Configure the Healthcheck App in Marketplace
    
    To install this app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Healthcheck** app and click **Install**.![Healthcheck-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10be685350dd1820/69370d80bcf42989b41ff803/Healthcheck-App.png)
    4.  In the pop-up window, select the stack where you want to install the Healthcheck app, accept the **Terms of Service**, and click the **Install** button.![Healthcheck-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9c2cc86ec017b55/69370d7f538145f4e45eebce/Healthcheck-App-Install.png)
    5.  On the **Configuration** screen, perform the following steps:
        
        1.  Select the **Branch** and **Environment** from their respective drop-down menus.
        2.  Enable the **Healthcheck Report Download** toggle to allow users to download health check reports using the **Download PDF** button on the **Overview** page.
            
            **Note:** Disabling this setting will also disable the **Download PDF** button.
            
        3.  Enable the **Healthcheck Email Notifications** toggle to send email notifications when required.
        4.  After configuring the settings, click **Authorize**.![Healthcheck-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1345e7a1219504c8/69d4e9e6a01174e4256a412b/Healthcheck-Configuration.png)
        5.  The app displays the organization's entities. Scroll down and click the **Authorize** button again to complete the OAuth authorization.![Healthcheck-Configuration-Authorize-For-OAuth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9db9967cf77be6ef/6658ce6a2da50d5d1747500f/5-Healthcheck-Configuration-Authorize-For-OAuth.png)
        
        **Additional Resource:** For more information, refer to the [Branches](/docs/headless-cms/about-branches), [Environments](/docs/headless-cms/about-environments), and [Contentstack OAuth](/docs/developer-hub/contentstack-oauth) documentation.
        
    6.  Click the **Save** button to save the configuration.
    7.  On the **UI Locations** tab, you can see the predefined app location. As the Healthcheck app is a Full Page Location app, the only UI location available is Full Page, as shown below.![6-Healthcheck-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23b67532bfc157dc/6658ce6aeb026d7b9a5eb90f/6-Healthcheck-UI-Locations.png)
        
        **Additional Resource:** For more information, refer to the [Full Page Location](/docs/developer-hub/full-page-location/) documentation.
        
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information, on UI locations and webhooks, refer to the [Installed Apps](/docs/marketplace/installed-apps#viewedit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the Healthcheck app.
2.  ## Use the Healthcheck App within your Stack
    
    To use the Healthcheck app in your stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the stack dashboard, click **Apps** from the header, and select the **Healthcheck** app.![Healthcheck-Full-Page-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea47ac3752aba8fe/69370d8dd2dab9fe13f566cc/Healthcheck-Full-Page-App.png)
    2.  You can view the Healthcheck app within your CMS. To check the health of your stack using the Healthcheck app, click **Customize and Run**.![Healthcheck-Customize-And-Run](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt860d1942becc0952/69370d80d2dab9e5bbf566c8/Healthcheck-Customize-And-Run.png)
    3.  In the **Healthcheck Configuration** modal, all relevant checks are pre-selected by default. You can enable or disable individual items or the entire category, then click **Run Healthcheck** again to begin the analysis.
        
        Click the **Clear All** button to disable and reset all selections.
        
        ![Healthcheck-Run-Healthcheck-In-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt986bdc335527462d/69370d8d4f5fb07ee92db8c2/Healthcheck-Run-Healthcheck-In-Modal.png)
    4.  You can view the health check progress in the **Running Healthcheck** modal. It displays a progress bar, a timestamp, a **View Details** section with real-time logs, and the **Cancel** button.![Healthcheck-Running-Status-Progress-Bar](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12e402869c38a6b4/69370ebb43c2f8fd1053dec9/Healthcheck-Running-Status-Progress-Bar.png)
        
        If you want to stop the healthcheck run, click **Cancel**.
        
        ![Healthcheck-Running-Cancel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2043ab749674b17e/69370d8d53814577c35eebda/Healthcheck-Running-Cancel.png)
        
        A confirmation dialog appears. Click **Yes** to cancel the check, or **No** to keep it running.
        
        ![Healthcheck-Running-Cancel-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1bbf37fbe16bff66/69370d8d53814524685eebd8/Healthcheck-Running-Cancel-Modal.png)
        
        If cancelled, the status updates to **Terminated**, and the app redirects you to the welcome screen.
        
        ![Healthcheck-Failed](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd6a8a2f01f9e48b/69370ebabed167420d0f8497/Healthcheck-Failed.png)
    5.  After the app finishes examining your stack, on the selected entities, it displays a comprehensive dashboard of its overall health.![Healthcheck-Full-Page-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83adbb60b6a83f80/69d4e9e6e94b487f735ef8f6/Healthcheck-Full-Page-App.png)
        
        The dashboard displays a summary of your stack’s health, including the number of actions required, opportunities, and strengths, along with a bar graph. It shows the total number of checks performed and skipped, represented in a pie chart. It also renders a list of unused platform applications like Launch, Personalize etc.
        
        **Note:** If the Healthcheck app is not updated to the latest version, the app displays the current running version and instructs you to update to the latest version to access full functionality.
        
        The top right corner contains two buttons:
        
        -   **Download PDF**: You can download the summary of the Healthcheck report by clicking this button.
            
            **Note:** Ensure to enable the **Healthcheck Report Download** toggle during app configuration in [step 1](#install-and-configure-the-healthcheck-app-in-marketplace).
            
        -   **Run Healthcheck**: Click the **Run Healthcheck** button to customize selections and run the health check again.
            
            **Note:** When the run on healthcheck is cancelled, the status updates to **Terminated**, and the app redirects to the previous report.
            
        
        The left navigation panel displays the **Overview**, **Security**, **Content Modeling**, **Content**, **Other Configurations**, **Usage Checks**, and **Logs** sections.
        
        ![Healthcheck-Full-Page-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde2ef71fe4c8d4ef/69d4e9e72507692f08007431/Healthcheck-Full-Page-Dashboard.png)
    
    Let's discuss the left-navigation options in detail.
    
    ### Overview
    
    Overview is the default view that appears after a Healthcheck is completed. It provides a clear summary of your stack’s overall health, including high-level insights, check results, and visual indicators to help you quickly assess areas that require attention.
    
    #### Healthcheck Summary
    
    At the top of the dashboard, the **Healthcheck Summary** displays three key result categories:
    
    -   **Actions Required**: This Indicates issues in your stack that need immediate attention. These may include missing descriptions, unused content types or global fields, token or configuration concerns, security risks, outdated content, or other factors that may impact stability or performance.
        
    -   **Overall Opportunities**: This highlights potential improvements or refinements that can help optimize content modeling, security, governance, asset usage, and editorial workflows. These items are not critical, but addressing them contributes to a better-structured and more efficient stack.
        
    -   **Strengths**: This represents the areas where your stack meets best practices. This may include strong content modeling, clean configurations, effective asset organization, appropriate field usage, and well-maintained content structures.
        
    
    Each category card shows the number of checks that fall under that result type.
    
    ![Healthcheck-Overview-Summary](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf4aa80a40be8b34/69d4e9e678b2b14e2f76e89b/Healthcheck-Overview-Summary.png)
    
    #### Total Number of Checks
    
    To the right of the summary cards, a pie chart displays the total number of checks executed during the Healthcheck. The results are grouped into two segments:
    
    -   **Performed**: Total checks that were run based on your configuration.
    -   **Skipped**: Checks not applicable or intentionally excluded before running the Healthcheck.
    
    This visualization provides a quick breakdown of execution coverage across your selected categories.
    
    #### Category-Level Breakdown
    
    Below the summary, the dashboard displays bar graphs for Actions Required, Overall Opportunities, and Strengths. Each graph shows how the checks in that result type are distributed across categories such as Security, Content Modeling, Content, and Other Configurations.
    
    These visual breakdowns make it easier to identify which areas need attention, where improvements can be made, and where your stack already aligns with best practices.
    
    #### Unused Features Display
    
    The Overview page now lists the unused Contentstack platform applications (such as Launch or Personalize) to help users identify potential areas for integration.
    
    ### Security
    
    Under the **Security** tab, the Contentstack Healthcheck app examines potential security vulnerabilities or issues that could affect the stack's integrity and safety.
    
    For example, expiring or excessive unwanted tokens, delivery token and management token usage, access controls (single sign-on authentication and two-factor authentication), or insecure webhooks.
    
    The Healthcheck app can analyze security-related metrics to help identify and address security concerns and keep the Contentstack platform secure and protected.
    
    The **Security** section shows three categories:
    
    -   **Actions Required**:
        
        ![Healthcheck-Security-Actions-Required](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2910c05931fb99b8/69370da6d2dab9d65ef566d0/Healthcheck-Security-Actions-Required.png)
    -   **Areas of Opportunities**:
        
        ![Healthcheck-Security-Areas-Of-Opportunities](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteadf941c2e84a1e3/69370da6a8606c735d96626d/Healthcheck-Security-Areas-Of-Opportunities.png)
    -   **Strengths**:
        
        ![Healthcheck-Security-Strengths](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa657ff75e53d2c1/69370da5e61ed45788f8b2b0/Healthcheck-Security-Strengths.png)
    
    You can click **View Details** to view the security issue in detail. Then, you can edit and resolve the issue by clicking the respective row or using the **edit** icon, which will take you to the respective settings section.
    
    You can download a detailed .xlsx report for the **Security** category by clicking the **Export XLSX** button.
    
    **Additional Resource:** For more information, refer to the [Invite Users and Assign Roles](/docs/headless-cms/about-stack-users) documentation.
    
    ### Content Modeling
    
    Under the **Content Modeling** tab, the Healthcheck app displays the assessment results related to the integrity and structure of your content model.
    
    This includes checking for naming standards, unused or rarely used content types and global fields, global field redundancy, missing descriptions, help and instruction texts, exceeding nesting levels in groups and reference fields, and validation rules and messages.
    
    These checks help identify problems with how your content is structured and organized within the stack.
    
    The Healthcheck app **Content Modeling** section results in three categories:
    
    -   **Actions Required**:
        
        ![Healthcheck-Content-Modeling-Actions-Required](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92cc8d34aa232b35/69370d808e8cd919092d8858/Healthcheck-Content-Modeling-Actions-Required.png)
    -   **Areas of Opportunities**:
        
        ![Healthcheck-Content-Modeling-Areas-Of-Opportunities](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt96683d687de5e1f8/69370d81f27a3849caf5840b/Healthcheck-Content-Modeling-Areas-Of-Opportunities.png)
    -   **Strengths**:
        
        ![Healthcheck-Content-Modeling-Strengths](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20e138b5ff3225c7/69370d81f703ce2db7b61038/Healthcheck-Content-Modeling-Strengths.png)
    
    You can click **View Details** to view the content type, field, and global field related issues in detail. Then, you can edit and resolve the issue by clicking the respective row or using the **edit** icon, which will take you to the content type, field, and global field editing page, respectively.
    
    You can download a detailed .xlsx report for the **Content Modeling** category by clicking the **Export XLSX** button.
    
    **Additional Resource:** For more information, refer to the [Content Modeling](/docs/headless-cms/about-content-modeling) and [Content Types](/docs/headless-cms/about-content-types) documentation.
    
    ### Content
    
    Under the **Content** tab, you will see the assessment results for Entries and Assets. The Healthcheck app is designed to thoroughly evaluate the health and integrity of the entries content and digital assets managed within the stack.
    
    This includes checks for examining unused entries, test entries, image size optimization, unused digital assets, folders, and uploaded template files (i.e. .md, .css, etc) in assets.
    
    By performing these content-centric checks, the Healthcheck app provides valuable insights, empowering users and administrators to identify and address any issues or discrepancies that may arise. This helps maintain the reliability, consistency, and performance of your stack.
    
    The Healthcheck app **Content** section results in three categories:
    
    -   **Actions Required**:
        
        ![Healthcheck-Content-Actions-Required](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt099d722dc8226df8/69370d806c1b3b068318a1f7/Healthcheck-Content-Actions-Required.png)
    -   **Areas of Opportunities**:
        
        ![Healthcheck-Content-Areas-Of-Opportunities](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fbead097bc0ec1a/69370d807a210b705ed9a35e/Healthcheck-Content-Areas-Of-Opportunities.png)
    -   **Strengths**:
        
        ![Healthcheck-Content-Strengths](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98407d379c01de45/69370d81f15790f23561fd0e/Healthcheck-Content-Strengths.png)
    
    You can click **View Details** to view the entries and assets issue in detail. Then, you can edit and resolve the issue by clicking the respective row or using the **edit** icon, which will take you to your stack settings.
    
    You can download a detailed .xlsx report for the **Content** category by clicking the **Export XLSX** button.
    
    **Additional Resource:** For more information, refer to the [Entries](/docs/headless-cms/about-entries) and [Assets](/docs/headless-cms/about-assets) documentation.
    
    ### Other Configurations
    
    Under the **Other Configurations** tab, the Healthcheck app also checks for configurations related to Webhooks, Environments, Workflows, Releases, Locales, Users, Custom User Roles, Extensions, and more. These additional checks help ensure your stack's overall performance and proper functioning.
    
    The Healthcheck app **Other Configurations** section results in three categories:
    
    -   **Actions Required**:
        
        ![Healthcheck-Other-Configurations-Actions-Required](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc21d86cc12306592/69370d8d538145244d5eebd2/Healthcheck-Other-Configurations-Actions-Required.png)
    -   **Areas of Opportunities**:
        
        ![Healthcheck-Other-Configurations-Areas-Of-Opportunities](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f2a1f48a3a63208/69370d8de3ec9dd89265261b/Healthcheck-Other-Configurations-Areas-Of-Opportunities.png)
    -   **Strengths**:
        
        ![Healthcheck-Other-Configurations-Strengths](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5cc7a7b9f5e212e/69370d8de3ec9dc59d652619/Healthcheck-Other-Configurations-Strengths.png)
    
    You can click **View Details** to view the issue in detail. Then, you can edit and resolve the issue by clicking the respective row or using the **edit** icon, which will take you to your stack settings.
    
    You can download a detailed .xlsx report for the **Other Configurations** category by clicking the **Export XLSX** button.
    
    **Additional Resource:** For more information, refer to the [Contentstack](https://www.contentstack.com/docs/) documentation.
    
    ### Usage Checks
    
    Under the **Usage Checks** tab, you can view the detailed analytics on bandwidth usage, top API URLs, status codes, and API activity across GraphQL, CDN, Assets, Images, and CMA. These insights help teams monitor traffic patterns, identify high-volume endpoints, review response behavior, and understand how different services are being used over time.
    
    The Healthcheck app represents the following statistics:
    
    -   **Bandwidth Usage**:
        
        ![Healthcheck-Usage-Checks-Bandwidth-Usage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8ba1d53f580957c/69370da664580921d62a3d41/Healthcheck-Usage-Checks-Bandwidth-Usage.png)
    -   **Top URLs**:
        
        ![Healthcheck-Usage-Checks-Top-URLs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c30e6382878493b/69370da6b48b45061d3fe63c/Healthcheck-Usage-Checks-Top-URLs.png)
    -   **Status Code**:
        
        ![Healthcheck-Usage-Checks-Status-Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1a571a817220bdf/69370da58fe24b05a379b408/Healthcheck-Usage-Checks-Status-Code.png)
    -   **API Usage**:
        
        ![Healthcheck-Usage-Checks-API-Usage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb2e183adc72714e/69370da68e8cd97ab22d885c/Healthcheck-Usage-Checks-API-Usage.png)
    
    ### Logs
    
    Under the **Logs** tab, the Healthcheck app records events and system activities related to the health and performance of your stack. These logs can help users and administrators identify and troubleshoot issues within the Contentstack environment.
    
    ![Healthcheck-Logs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b80ade04db2c78b/69370d8df27a3861ebf5840f/Healthcheck-Logs.png)
    
    The **Info** tab displays all logs (along with the number of logs), whereas the **Skipped** tab shows the skipped logs.
    

**Note**:

-   The actual count depends on the number and complexity of content types and the number of entries associated with them. For further details, please contact [tso-healthcheck@contentstack.com](<mailto: tso-healthcheck@contentstack.com>).
-   It is recommended to perform the health check during off-peak hours to minimize potential rate-limit issues. The process utilizes your Content Management API (CMA) bandwidth, so scheduling it during quieter times ensures seamless and uninterrupted operations.
