---
title: "[Data & Insights] - Privacy and Data Protection"
description: Privacy and data protection information for Lytics as a service provider and data processor, including GDPR and CCPA-related capabilities.
url: https://www.contentstack.com/docs/data-and-insights/privacy-and-data-protection
product: Lytics
doc_type: compliance-guide
audience:
  - developers
  - security
  - privacy
version: unknown
last_updated: 2026-03-25
---

# [Data & Insights] - Privacy and Data Protection

This page describes Lytics privacy and data protection capabilities and guidance for meeting privacy obligations (including GDPR and CCPA). It is intended for teams responsible for security, privacy, and data governance who need to understand how Lytics supports compliance-enabling workflows and controls.

## Privacy and Data Protection

As a service provider and data processor, Lytics assists its customers in enhancing security and meeting privacy and data protection obligations, including the European Union’s [General Data Protection Regulation](https://commission.europa.eu/law/law-topic/data-protection_en) (GDPR) and [California Consumer Privacy Act of 2018](https://oag.ca.gov/privacy/ccpa) (CCPA).

Listed below are the compliance-enabling functionalities Lytics provides. As used below, personally identifiable information (PII) has the same meaning in the CCPA and is meant to include “personal data” as defined in the GDPR. Please consult your company’s legal counsel or privacy professional about what privacy and data protection requirements your company must comply with.

Lytics recognizes that its customers are the data controllers of the PII, which Lytics processes on their behalf. Each Lytics customer maintains control over which PII sources and destinations to use with Lytics and the types and content of PII shared between its sources and destinations. Lytics does not sell PII or supplement its customers’ respective PII with third-party data except via customer-directed integrations.

## Access Control

Restrict access to personal information by role.

- **Role Based Access Controls** (RBAC): Account Admins can easily add and remove account users. Lytics has various defined user roles with respective permissions.
- **Single Sign On** (SSO): Add SSO to your user login process to enhance security.
- **Multi-factor authentication** (MFA): Add MFA to your user login process to enhance security.
- **Restrict access to PII: **You can indicate any user fields that contain PII via the private fields account setting. These fields will be hidden for anyone who does not have Admin, Data Manager, or User Search roles. You should verify with Lytics [support](mailto:support@lytics.com) that the field hiding in the segment scan is also enabled for your account to ensure these fields are also hidden there.

## Data Mapping

Map personal information processed by Lytics, including sources and destinations.

- **Audit your data schema: **Use the [Schema Audit](https://docs.lytics.com/docs/schema-audit#schema-audit) feature to see what user fields are being populated, the data contained, the source(s), and if that data is being used in audience definitions.
- **Determine third-party data sources: **You can see the third-party data sources from which you send data to Lytics using the Lytics UI by navigating to **Data > Data Streams**. The "default" stream will contain your web data unless otherwise configured. You will see your other integrations in the list of stream names using the drop-down menu at the top right. Each stream page will show you the last time Lytics received data.
- **Determine third-party data destinations: **You can view the activity history for a data destination using the Lytics UI by navigating to **Data > Integrations**. Click on the tile for the integration in question. If you're already running the integration, you will automatically be taken to the overview page that shows a list of running imports and exports and the history of events for those works.

## Notice and Consent

Manage user consent and preference data.

### Obtaining Customer Consent

Lytics customers are responsible for obtaining consent for collecting and transferring PII to Lytics for processing. You can use the Lytics JavaScript Tag to collect PII about customers' online behavior. One consent mechanism is to implement a custom tag and trigger in your Google Tag Manager account and assign that trigger to the Lytics JS tag. See how to manage consent with Google Tag Manager.

For sites not using Google Tag Manager, customer consent on the web can be managed in several ways. Consent triggers can be listened to by adding a snippet of custom JavaScript to your site. Another alternative is to use a cookie-consent solution, many of which exist. GitHub has documented a [free solution](https://github.com/osano/cookieconsent), including demos. The Lytics JS Tag can be configured to consume triggers from any of these solutions to manage consent for your customers.

- **Recording Proof of Consent: **Schema fields may be established for the purpose of storing customer consent.
- **Privacy Policy Notice: **When you use a Lytics modal to collect user information, you should include a link to your organization’s privacy policy regarding the treatment of the PII collected. A link can be added to any modal created using the Experience Editor.
- **Age Gating: **If you have collected accurate age data, you can build audiences that target or exclude certain ages.

## Responding to Consumer Requests

Respond to the data subject (consumer) requests in compliance with regional and state privacy and data protection requirements.

- **Personal Data Access: **Using the [find a user](https://docs.lytics.com/docs/finding-a-user) feature, enter the identifying details provided by the consumer to locate their profile. The profile "created" date refers to the earliest date Lytics collected any data on this user.
- **Personal Data Correction: **If user profile data requires correction, you must send the corrected data to Lytics, which will be remapped to convert the resulting user profile information.
- **Determining Categories of Personal Data Collected: **You can use the Lytics UI to obtain information about the categories and specific pieces of PII collected on a consumer in the past 12 months. Again using the find a user feature, you can view the fields of populated data and determine the appropriate consumer PII categories to disclose to a requesting data subject/consumer.
- **Personal Data Portability: **We support the export of profile information via the Lytics UI or APIs. An individual’s profile data from Lytics will be downloaded as a JavaScript Object Notation (JSON) file. JSON is a common, machine-readable file format.
- **Personal Data Deactivation/Suppression: **You can establish audiences to enforce consumer suppression and “do not market” choices and prioritize those choices when establishing marketing journeys for your consumers. These audiences can be exported from Lytics to your downstream tools or "data destinations."
- **Personal Data Deletion: **We provide a method for deleting users via the Lytics UI. Our API may also be used for this purpose. This will send a deletion request to the Lytics platform, which will process the request for the customer identifier provided.

## SOC 2 Audits

An independent auditor has examined Lytics platform controls and confirmed they are in accordance with the Service Organization Controls (SOC) 2 Type II Trust Services Principles for Security, Availability, and Confidentiality. You can learn more about our SOC 2 Type II examination in this [blog post](https://www.lytics.com/blog/passing-the-soc-2-audit-for-2021-lytics-helps-makes-sense-of-your-customer-data-and-your-legal-data-protection-obligations/).

Lytics will continue to engage independent auditors to conduct SOC 2 Type II audits regularly and make our audit report available to our customers and prospects under an NDA. In addition, we retain independent security firms to conduct regular penetration tests and vulnerability scans on our systems and code, respectively. Our underlying cloud services provider, Google, also submits to regular, multiple independent audits, including SOC 2 Type II audits.

## Safeguards and Transfers

**Lytics Data Protection Safeguards**

Lytics and its data hosting partner, Google, have implemented numerous safeguards to protect the PII that Lytics processes on its customers' behalf. External auditors audit these safeguards on an annual basis. For more information regarding these safeguards, please ask your Lytics account manager.

**Transfers of Personal Data from EU**

Lytics participates in the EU-US and Swiss-US Privacy Shield Frameworks regarding collecting, using, and retaining personal data from European Union member countries and Switzerland. We have certified with the U.S. Department of Commerce that we adhere to the [Privacy Shield Principles](https://www.dataprivacyframework.gov/). Please let your account manager know if your organization requires Lytics to enter into the EU Standard Contractual Clauses regarding data transfer from the EU to the U.S.

## Common questions

### Does Lytics sell PII or supplement customer PII with third-party data?
Lytics does not sell PII or supplement its customers’ respective PII with third-party data except via customer-directed integrations.

### How can access to PII be restricted in Lytics?
You can indicate any user fields that contain PII via the private fields account setting, and those fields will be hidden for anyone who does not have Admin, Data Manager, or User Search roles.

### How can I map what personal information is processed and where it goes?
Use the Schema Audit feature to see what user fields are being populated and navigate to **Data > Data Streams** for sources and **Data > Integrations** for destinations.

### How can Lytics help respond to consumer privacy requests?
Lytics supports workflows such as finding a user, exporting profile information, establishing suppression audiences, and deleting users via the UI or API.