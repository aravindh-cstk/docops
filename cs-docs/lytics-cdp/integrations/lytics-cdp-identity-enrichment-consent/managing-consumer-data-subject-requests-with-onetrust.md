---
title: "OneTrust"
description: "GDPR and CCPA have introduced consumer privacy requirements that are important to understand and have a strategy for."
url: /lytics/managing-consumer-data-subject-requests-with-onetrust
---

# OneTrust

## OneTrust

GDPR and CCPA have introduced consumer privacy requirements that are important to understand and have a strategy for.

In online and email marketing, the key regulations that have long influenced targeted advertising to consumers are obtaining consent for contact and the use of tracking cookies. Traditionally, this has been achieved through opt-in mechanisms during account registration for email newsletters or through website footers that disclose the use of cookies.

However, this has dramatically changed with the introduction of new consumer privacy regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). These regulations grant consumers additional rights to comprehend and govern the usage and tracking of their data for marketing and other purposes. These rights are commonly referred to as the Right of Access or Right to Know and the Right of Erasure or Right to Delete. They empower consumers to take actions such as requesting the removal of their personal information or requesting a report detailing the data known about them by the business.

To effectively manage these consumer privacy processes and ensure compliance with GDPR and CCPA requirements, many enterprises leverage the capabilities offered by Lytics and OneTrust. These tools provide valuable automation functionalities that streamline the necessary activities mandated by the regulations. Organizations already using OneTrust Privacy Rights Automation in their privacy compliance workflows can enhance their privacy management efforts and establish a robust framework for safeguarding consumer data by integrating with Lytics APIs to allow real-time compliance.

### Cookie Consent Management

When it comes to managing cookie consent primarily on the client side, the common approach is to use explicit opt-out methods. One popular tool for cookie consent management is OneTrust. By utilizing OneTrust's cookie consent management, you can configure it to read the consent opt-out and prevent loading any configured tags. This means that the Lytics tag, responsible for sending data downstream and storing cookies client side, will be effectively disabled.

To learn more about OneTrust's cookie consent management, visit their website: [OneTrust Cookie Consent](https://www.onetrust.com/products/cookie-consent/).

**For configuration purposes the Lytics cookie has flexibility in how is categorized depending on how the cookie is going to be used.**

#### JSTag OneTrust Consent Plugin

To ensure proper handling of user consent preferences, Lytics provides a JSTag plugin that integrates with OneTrust's cookie consent management. The onetrust.consent plugin checks for the user's consent status before enabling the Lytics tag. By default, this plugin can be configured to only allow tracking once the necessary consent categories have been accepted.

Here’s a sample configuration using the OneTrust consent plugin:

```
jstag.init({
    // Other Lytics configuration
    onetrust: {
        consent: {
            disabled: false,
            accept: ["1"]  // Lytics will load only if category "1" is accepted
        }
    }
});
```

In this example, the Lytics tag is disabled until consent for the specified category (e.g., "1") is granted by the user. This ensures that data collection adheres to the user's privacy preferences as defined in OneTrust.

### Customer Consent Management with Lytics

In addition to cookie consent management, Lytics offers a comprehensive platform for managing customer consent. Integrating Lytics with OneTrust can elevate your customer consent management to new heights. Lytics enables you to gather and handle customer consent data effectively, providing you with actionable insights and enabling personalized experiences while respecting consumer preferences.

To learn how to leverage Lytics for managing customer consent, we have created a dedicated resource: [Using Lytics to Manage Customer Consent](/docs/lytics/consent). This guide will walk you through the process of utilizing Lytics alongside OneTrust to ensure compliance and build stronger customer relationships.

### Privacy Rights Automation

As a consumer in California, you hold certain rights concerning your personal data, including the right to access and request the removal of information stored by companies. OneTrust offers efficient solutions for handling Data Subject Access Requests (DSARs), Data Erasure Requests, and automating privacy rights management.

Data Subject Access Requests can be sent from OneTrust to the Lytics [Get User API endpoint](https://docs.lytics.com/reference/get_user-id). This endpoint requires an API token to authorize the request and the by-field of the profile (typically email address). Any fields on the user profile can be returned and included in the reporting sent back to the consumer.

Requesting the deletion of a consumer profile in Lytics can be triggered through the Lytics [Delete User API endpoint](https://docs.lytics.com/reference/delete_user-id). This endpoint again requires an API token to authorize the deletion request, as well as the email address (or other appropriate by-field) of the consumer profile to identify what to delete. This process returns a deletion request ID, which can be used to monitor the process completion. As the deletion involves removals from data archives anywhere else that the data may be retained, this can take up to 14 days in some cases.

Here's an overview of how OneTrust handles DSARs:

1.  **DSAR Submission**
    1.  On your customer webpage, you can provide a URL link that directs users to a OneTrust-hosted web form dedicated to handling DSARs.
    2.  This web form, residing on a dedicated subdomain, allows individuals to submit their DSAR requests by providing their email addresses and indicating their preference for information deletion.
2.  **Request Processing**
    1.  OneTrust receives and queues DSAR requests, processing them in a systematic manner.
    2.  Once a request is processed, the OneTrust system can perform the following actions:
        1.  Submit deletion requests to Lytics and other connected systems and tools to ensure the removal of relevant information.
        2.  Retrieve information from various configured connections, such as Lytics, CRMs, and databases, to generate comprehensive reports for compliance purposes.

#### Integrating OneTrust with Lytics

To further enhance your privacy rights automation and consent management, OneTrust allows you to configure a custom webhook integration with Lytics. This integration enables seamless communication between the two platforms and streamlines the following key functions:

1.  **Delete Profile**
    1.  Endpoints: The Lytics [Delete User API endpoint](https://docs.lytics.com/reference/delete_user-id) can be used to send the profile deletion requests to Lytics from a OneTrust webhook.
    2.  Required fields: The Delete User Endpoint requires a profile identifier or by-field that Lytics uses to identify the profile being deleted. When integrating with OneTrust for privacy management automation, it is recommended to use email as the identifier.
    3.  API Key: Generated from the account settings in Lytics.
2.  **Verify Deletion Status**
    1.  This step is optional but can be set up to check the status of profile deletion.
    2.  The relevant endpoint and details can be found in the Lytics API Documentation for Profile Deletion.
3.  **Retrieve Profile**
    1.  Endpoint: The Lytics [Get User API endpoint](https://docs.lytics.com/reference/get_user-id\>) allows you to retrieve profile information from Lytics and include it in the DSAR reports generated in OneTrust.
    2.  Required fields: Similar to the delete profile configuration, the profile identifier or by field type and value should be specified (e.g., email).
    3.  API Key: Generated from the account settings in Lytics.
    4.  Optional fields: You can specify which fields you want to return when retrieving the profile information.

### Implementation Considerations:

Implementing automation of consumer profile reporting and privacy regulation management should be done with careful consideration of the entire environment and systems which consumer data may be retained or synced from. Timing of syncs between systems, availability of complete data for reporting, and archive retention periods are all important to keep in mind when planning, designing, and implementing these types of automations.
