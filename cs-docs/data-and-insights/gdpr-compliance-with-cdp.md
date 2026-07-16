---
title: "[Data & Insights] - GDPR Compliance with Lytics Customer Data Platform"
description: GDPR compliance guidance for using the Lytics Customer Data Platform, including consent, access/portability, and erasure.
url: https://www.contentstack.com/docs/data-and-insights/gdpr-compliance-with-cdp
product: Lytics Customer Data Platform
doc_type: guide
audience:
  - developers
  - data-privacy
  - administrators
version: unknown
last_updated: 2026-03-25
---

# [Data & Insights] - GDPR Compliance with Lytics Customer Data Platform

This page explains how Lytics customers can use the Lytics Customer Data Platform to support GDPR compliance efforts, including consent collection and Data Subject rights (access, portability, and erasure). It is intended for teams implementing or operating Lytics CDP who need to understand how GDPR-related requests and workflows map to Lytics capabilities.

## GDPR Compliance with Lytics CDP

The European Union General Data Protection Regulation (GDPR), first approved by the EU Parliament in April 2016 and set to go into effect May 25, 2018, was put in place to protect all EU citizens from privacy and data breaches in an increasingly data-driven world. Any company processing personal data related to the offering of goods and services to people in the EU are affected, and the fines for breaching GDPR are significant – up to 4% of annual company revenue or €20 Million (whichever is greater).

This document explains how Lytics customers can use the Lytics Customer Data Platform to support their GDPR compliance efforts.

There are three main players referred to in the regulations, and throughout this document:
- **Data Subject**: The “real person” whose personal data is being processed. This refers to your customers/website visitors.
- **Data Controller**: The entity that determines the purpose(s), conditions, and means of the processing of personal data. Your organization is the Data Controller.
- **Data Processor**: The entity that processes data on behalf of the data controller (does not include the controller’s own employees). Lytics is the Data Processor.

This document will answer questions about collecting consent, as well as how to use Lytics to support the following Rights of the Data Subject:
- Right of Access
- Right to Data Portability
- Right to Erasure (‘right to be forgotten’)

**Note:** Lytics cannot offer legal advice regarding GDPR compliance or answer specific questions related to the interpretation of the GDPR. We recommend you consult your organization’s legal counsel and/or privacy experts to determine what is required for your specific organization.

## Frequently Asked Questions

- **Consent:**
Although the GDPR states six legal grounds that can be used for processing personal data, for the purpose of this document, we will focus on consent. The GDPR requires that consent must be “freely given, specific, informed, and unambiguous.”
- **Do I need to ask for consent for every new user on my site?**
To be GDPR compliant, consent must be acquired from users visiting your site from inside the EU. However, you may also choose to offer a consistent experience to customers that are visiting from territories outside the EU.
- **When do I need to ask for consent?**
Consent does not need to be collected immediately but does need to be confirmed before you process any personal data that can be referenced back to the current user.
- **Does Lytics provide an out-of-the-box consent modal for my website?**
Lytics Personalize Campaigns can be configured to ask for Data Subject consent. Please refer to the online documentation, or contact your Customer Success manager for more information.
- **How does Lytics work with a Tag Manager for GDPR?**
There is no change to how Lytics works with Tag Managers for GDPR. The consent flag(s) available from the browser cookie will be read by your Tag Manager, and either allow the Lytics JS Tag to process data or not.
- **How does Lytics work with a Consent Manager?**
If you choose to use a Consent Manager on your site, you will need to test the consent experience for visitors to your site. The Lytics JS Tag will work in the same way it already does but the Consent Manager will decide if it loads/fires.
- **Does Lytics partner with any Consent Manager vendors?**
Lytics is actively pursuing partnerships with Consent Manager vendors and will announce any partnerships on [www.lytics.com](https://www.lytics.com).
- **Customers who choose not to give consent still access content on my site?**
Article 7(4) of the GDPR clearly states that provision of a service (e.g. access to a site) may not be made contingent upon consent to process personal data unless the data is necessary for the performance of the site. Lytics suggests you seek the advice of your legal counsel to interpret how this might impact your organization.
- **Right of Access and Right to Data Portability**
The GDPR offers Data Subjects the right to know if personal data is being processed on them, and if so, access to that personal data. Data Subjects also have the right to receive their personal data in a structured, commonly used and machine-readable format and have the right to transmit that personal data to another Data Controller. As Data Processor, Lytics fully supports your organization to comply with these regulations.
- **When is a customer profile created in Lytics?**
If you have the Lytics JS Tag on your website, Lytics will create a customer profile for any anonymous visitor that uses your site, using the cookie ID. If a customer identifier is pushed into Lytics through one of our integrations, it will be stored against an existing profile if the customer is known, otherwise, a new profile will be created.
- **Does Lytics manage the data access request process?**
Managing the request for access and the verification of the Data Subject’s identity is the responsibility of the Data Controller.
- **How do we download customer profile data from Lytics?**
Lytics supports two methods for downloading the customer profile data from the Customer Data Platform: via the Lytics User Interface or the Lytics API. In the Lytics User Interface, a “Download Profile” option is available via the Find a User screen. Please refer to the Lytics API Documentation for more information on downloading the customer profile data programmatically.
- **In what format is the customer profile data provided?**
The customer profile data from Lytics will be downloaded as a JavaScript Object Notation (JSON) file. JSON is a common, machine-readable file format that complies with the GDPR Right to Portability.
- **Right to Erasure (‘right to be forgotten’)**
The GDPR also grants the Data Subject the right to erasure of personal data without undue delay. Lytics, as a Data Processor, fully supports your organization’s ability to comply with this regulation.
- **How long is customer profile data stored in Lytics?**
Customer Profile data is stored in Lytics for as long as the data is required for decision-making and the event schema is valid. Every customer event for that profile is saved against the customer profile so that Lytics can rebuild the profile from historical data if the schema changes. During this rebuild, if there is a major change to the schema, any data that does not fit the new schema will be deleted.
- **How do we delete customer profile data from Lytics?**
Lytics supports two methods for deleting the customer profile data from the Customer Data Platform: via the Lytics User Interface or the Lytics API. In the Lytics User Interface, a “Delete Profile” option is available to users with the delete data permission via the Find a User screen. Please refer to the Lytics API Documentation for more information on downloading the customer profile data programmatically.
- **Is the deletion of customer profile data done in real-time?**
The deletion of customer profile data is an automated process, but it is not performed in real time. When a deletion request is received by the Lytics Customer Data Platform, a request ID is generated and returned to the requestor. The system then adds the request to the Delete Profile queue, which is processed in order. The system clears the associated customer profile data and any related behavior from the Graph Database, followed by Elastic Search, and then the Archive. Under the GDPR, data erasure requests must be fulfilled by the Data Controller within one month of receipt.
- **How will we know when the deletion is completed?**
The Lytics API can be queried with the request ID to get the status of any deletion request. A full audit report is also available. Please contact your Customer Success Manager to request access to the audit report.
- **Will Lytics also request customer profile data be removed from the downstream systems I have integrated with the Lytics Customer Data Platform?**
Lytics provides the means to remove the customer profile data from the Lytics Customer Data Platform. As the Data Controller, your organization will need to manage the requests with downstream systems independently from your Lytics request.
- **If I submit a request for a customer data profile to be forgotten, and then one of my integrations sends the customer data again, what happens?**
The Lytics Customer Data Platform will hard delete the customer profile data from Lytics. If an integration resends customer data after deletion, Lytics will recreate the customer data. Because of this, it’s important for you as the Data Controller to plan the proper order of operations for personal data erasure, based on your technology stack.

## Summary

Complying with GDPR will likely require organizations to rethink how they are managing the collection and processing of personal data. Lytics is committed to supporting our customers’ efforts to comply with the GDPR regulations. If after reading this document you still have questions, please contact your Lytics Customer Success Manager, or contact the [support team](mailto:support@lytics.com).

## Common questions

**How does this document define the roles in GDPR?**  
It defines Data Subject, Data Controller, and Data Processor, and states that your organization is the Data Controller and Lytics is the Data Processor.

**What Lytics options are mentioned for downloading a customer profile?**  
The Lytics User Interface (via the Find a User screen “Download Profile” option) and the Lytics API.

**What Lytics options are mentioned for deleting a customer profile?**  
The Lytics User Interface (via the Find a User screen “Delete Profile” option for users with delete data permission) and the Lytics API.

**What happens if an integration resends customer data after a profile is deleted?**  
The Lytics Customer Data Platform will recreate the customer data if an integration resends customer data after deletion.