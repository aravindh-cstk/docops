---
title: "What are the measures taken for disaster recovery?"
description: "What are the measures taken for disaster recovery?"
url: /administration/support-and-troubleshooting/administration-faqs/06-security-faqs/06-what-are-the-measures-taken-for-disaster-recovery
doc_type: faq
_cms_section_uid: csb595f068173450ae
_cms_faq_uid: csbb6131085962ab4b
---

# What are the measures taken for disaster recovery?

For any enterprise, data is of utmost importance and it's crucial to protect it. So, it's very important to have a proper disaster recovery plan in place to cover all contingencies. To do so, it's imperative that we set in place a system that will considerably reduce the damages caused by a fire, theft, flooding, etc, by backing up our data at appropriate locations.

Apart from natural disasters, backing up files can protect your content against accidental loss of user data, database corruption, and hardware failures. It’s our job as service providers to make sure that backups are performed and in a secure location.

We have taken this into account and have come up with the required measures to create the right plan for you.

Let’s see them in detail.

-   **Region and Availability Zones**
-   We leverage AWS to deploy Contentstack in multiple availability zones so that if one of the instances in an availability zone fails, the requests will be routed to one of the healthy instances. If an availability zone fails altogether, the requests will be routed to the working availability zones. Contentstack won't face any downtime.
-   **Highly Available Architecture**
-   Contentstack has a network architecture that is designed for maximum reliability and uptime, and offers up to 99.95% Service Level Agreement (SLA) for its services, just as promised. The infrastructure consisting of highly-available, redundant number of data centers ensures minimum service interruption due to natural disasters, hardware failures, or other incidents.
-   **CDN and Caching**
-   Our highly efficient [CDN](/docs/administration/cdn-and-caching/what-is-cdn-and-how-it-works) ensures faster delivery of content irrespective of the destination with the help of nodes that are spread all around the world. Also, it allows caching – keeping copies of content that were requested earlier thus making it available for future requests.
-   **Data is constantly backed up**
-   We use a Cloud-based backup solution to backup our database. For every request made, your data is constantly backed up.
