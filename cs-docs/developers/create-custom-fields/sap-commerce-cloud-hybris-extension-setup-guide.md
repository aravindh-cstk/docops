---
title: "[Extensions] - SAP Commerce Cloud (Hybris)"
description: Extension setup guide for integrating SAP Commerce Cloud (Hybris) with Contentstack using Kyma.
url: https://www.contentstack.com/docs/developers/create-custom-fields/sap-commerce-cloud-hybris-extension-setup-guide
product: Contentstack
doc_type: integration-guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - SAP Commerce Cloud (Hybris)

This page explains the legacy extensions-based approach for integrating SAP Commerce Cloud (Hybris) with Contentstack, including how Kyma can be used to connect events and APIs. It is intended for developers setting up or maintaining Hybris integrations and should be used when implementing or understanding the extension/connector flow between Hybris and Contentstack.

## SAP Commerce Cloud (Hybris)

**Note**: This documentation uses the legacy approach with extensions. We have launched SAP Commerce Cloud as a Marketplace App. For more information on SAP Commerce Cloud, please refer to the [SAP Commerce Cloud App Installation Guide](../marketplace-apps/sap-commerce-cloud.md).

[SAP Commerce Cloud](https://help.sap.com/viewer/product/SAP_COMMERCE_CLOUD/SHIP/en-US?task=discover_task) (Hybris) is one of the most efficient and flexible e-commerce project development platform. Specifically designed for B2B businesses and retailers, it offers unparalleled opportunities for digital transformation to these segments.

The new offerings of SAP Commerce Cloud enable marketers to create online offers on-the-fly for specific customers. SAP Commerce Cloud provides flexibility and adaptability to various business demands and helps in reducing dependency between different application modules.

## Integrating Hybris with Contentstack

The headless and modular architecture of SAP Commerce Cloud makes it easy to integrate with Contentstack. To do that, you can use an open source solution named [Kyma](https://kyma-project.io/docs/) that facilitates integration between the applications, that is, Contentstack and Hybris.

Kyma manages the flow of business events in an existing enterprise solution such as SAP Hybris which results in extension modules to execute inside Kyma but outside the legacy applications.

You can create an **application connector** for Kyma that registers Contentstack events, received through webhooks. This could be any event in Contentstack such as update content  (change in product description, and so on).

You'll also have to register the APIs in this connector and specify how the [authentication will happen](https://kyma-project.io/docs/components/security/#details-details). The application connector will then establish authentication through certificates between the two services. The exchange of information using certificates between Hybris and Contentstack through the application connector in Kyma is called a **handshake**.

To understand this process, let's assume that you have a content type named **Products** in Contentstack with an entry for each product. These products are mapped to products in SAP Hybris let's say through the product IDs.

Now when you make any change in the product in SAP Hybris, it should update the corresponding product entry in Contentstack.

For this, SAP Hybris, after updating a product, will issue a certificate to the application connector in Kyma. It verifies the certificates and if the request is from a valid source, it is passed to another service, such as AWS Lambda, to make the relevant changes in the corresponding entry of the Product content type in Contentstack.

## Common questions

### Is this guide for the Marketplace App or the legacy extensions approach?
This documentation uses the legacy approach with extensions, and it links to the SAP Commerce Cloud Marketplace App Installation Guide for the newer approach.

### What is Kyma used for in this integration?
Kyma facilitates integration between Contentstack and Hybris by managing the flow of business events and enabling extension modules to execute inside Kyma but outside the legacy applications.

### What does the “handshake” refer to?
The exchange of information using certificates between Hybris and Contentstack through the application connector in Kyma is called a **handshake**.

### What triggers updates from Hybris to Contentstack in the described example?
When a product is updated in SAP Hybris, it issues a certificate to the application connector in Kyma, which verifies the request and then passes it to another service (such as AWS Lambda) to update the corresponding Contentstack entry.