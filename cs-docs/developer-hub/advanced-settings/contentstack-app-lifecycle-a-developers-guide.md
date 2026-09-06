---
title: "Contentstack App Lifecycle: A Developer's Guide"
description: "This guide walks you through the complete app lifecycle for Standard and Machine-to-Machine apps, from setup to deployment."
url: /developer-hub/contentstack-app-lifecycle-a-developers-guide
uid: bltcc2c328bf0e4d4e8
---

# Contentstack App Lifecycle: A Developer's Guide

## Contentstack App Lifecycle: A Developer's Guide

Contentstack applications offer powerful ways to extend the platform's functionality and customize your content management experience. This documentation will guide you through the lifecycle of your app, depending on whether you are building a Standard app or a Machine-to-Machine app.

## Standard App Lifecycle

1.  **Creation and Setup (Developer Hub):**
    1.  **App Definition:** Define your app's name, description, and scope.
    2.  **Development:** Using Contentstack's APIs and SDKs, you will build the core functionality of your app, design its user interface using the Venus design components, and integrate it with any necessary systems.
2.  **App Hosting (Developer Hub):**
    1.  **Hosting Options:** You can choose any hosting solution, but we recommend using Contentstack Launch for seamless integration with the Contentstack ecosystem.
        1.  You can also host your app locally during initial development or use your own hosting solution.
3.  **Installation and Testing (Developer Hub):**
    1.  **Installation:** Install your app within your organization from Developer Hub.
        1.  This requires Admin access to the Organization or Stack, depending on the app type.
    2.  **Testing:** Thoroughly test your app in a test stack to ensure it works as intended.

        **Note:** If you don’t plan to list your application publicly, then you can ignore the next step and use your app privately in your organization.

4.  **Public Listing and Release (Optional):**
    1.  **Public Listing Submission:** If you want to release your app publicly, you will need to submit it to Contentstack for review and approval. Contentstack's team will assess your app to ensure it meets their quality and functionality standards.
        1.  You can find details on the submission process here: [Submit your app for review](/docs/marketplace/app-submission-and-approval-guide/)
    2.  **Marketplace Discovery:** Once your app is approved and listed in the Marketplace, it becomes discoverable to all Contentstack users. Users can browse and find your app based on its category, features, or other criteria.
5.  **App Updates and Changes (Developer Hub):**
    1.  **Versioning and Updates:** As your app evolves and as you make changes to your app, new app Versions will be generated.
        1.  **Private apps** will have these versions immediately available to update your app.
        2.  **Public apps** will require you to submit your app for review for any changes you would like to make public.

## Machine to Machine App Lifecycle

1.  **Creation and Setup (Developer Hub):**
    1.  **App Definition:** Define your app's purpose and scope. You will be creating a Machine to Machine app that does not have a user interface.
    2.  **Development:** Using Contentstack's APIs and SDKs, you will build the core functionality of your app and integrate it with any necessary systems.
    3.  **App Configuration:** Set up your app's permissions and OAuth 2.0 integrations to define its access and behavior.
2.  **Authorization**:
    1.  **Authorization:** Contentstack admins can authorize the app to access their data or resources. This process typically involves authentication using OAuth 2.0.

## Important Considerations for All Apps

-   **Security:** Contentstack provides robust security measures, but developers should implement secure coding practices and handle sensitive data responsibly.
-   **Documentation:** Clear and concise documentation is crucial for both app developers and end users.
-   **Support:** Providing ongoing support for your app is crucial to ensure user satisfaction and maintain a positive experience.
