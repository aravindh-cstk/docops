---
title: "[Solution Guides Articles] - Cache Invalidation for the Website Using Automate"
description: Invalidate cached content when an entry is published or unpublished to reflect the updated data on the client side and always return the updated content.
url: https://www.contentstack.com/docs/headless-cms/cache-invalidation-for-the-website-using-automate
product: Contentstack
doc_type: solution-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Cache Invalidation for the Website Using Automate

This page explains how to invalidate cached content for a Contentstack-powered website using Automate when an entry is published or unpublished. It is intended for developers setting up automation workflows to ensure client-side content reflects the latest updates.

## Cache Invalidation for the Website Using Automate

Invalidate cached content when an entry is published or unpublished to reflect the updated data on the client side and always return the updated content.

## Diagram Walkthrough

Here's a diagrammatic representation of a Contentstack-powered website.

## Tactical Rundown

First, let's set up an Automation Trigger for entry publish and unpublish events.

Steps to create automation for entry publish/unpublish events:
- Go to Automate, create a new project, and create an Automation.
- Configure Automation TriggerChoose **Contentstack** as a trigger connector.
- Select **Entry Trigger**.
- In the next step, add/select your **Account**, select the **Entry Publish/Unpublish** event, and your **Stack**.
- Test Trigger, Save and Exit![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94b600e4f6b9f892/65faa520173215142fd2d463/image5.png)
- Configure Action StepPrerequisites: Set up lambda function for invalidation using Cloudfront, which will be used in the HTTP connector.
Lambda code:

```
const AWS = require('aws-sdk');

                        exports.handler = async (event) => {

                        const { body, headers } = event;

                        const cloudfront_distribution_id = headers.cloudfront_distribution_id || '';

                        let idArray = cloudfront_distribution_id.split(',');

                        const responses = [];

                        for (const id of idArray) {

                        if (id !== '') {

                        const url = body && body.entry && body.entry.url;

                        const cloudfront = new AWS.CloudFront();

                        const params = {

                        DistributionId: id,

                        InvalidationBatch: {

                        CallerReference: Date.now().toString(),

                        Paths: {

                        Quantity: 1,

                        Items: [url],

                        },

                        },

                        };

                        try {

                        const data = await cloudfront.createInvalidation(params).promise();

                        responses.push({ message: `Cache cleared for Distribution ID: ${id}`, statusCode: 200 });

                        } catch (err) {

                        responses.push({ message: err.message, statusCode: 500 });
      }

                        }

                        }

                        return {

                        statusCode: 200,

                        body: JSON.stringify(responses),

                        };

                        };
```
- Create an Action Step
Choose “HTTP” connector
- Select HTTP Requests as an action event.
- Configure the action events as required:Set your lambda url as a request url in the URL field.
- Choose “POST” as a method of your request.
- Add #root object in the request’s body.
- Toggle Advanced options and set the following headers:Content-Type: application/json
- CLOUDFRONT_DISTRIBUTION_UID : <<distibution_uid>>
- Test action and save and exit![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdaaa489d9b914d6d/65faa52017321553f8d2d45f/image2.png)

Activate Automation to run in a live environment.

**Related guides:**
- [Automate Guides](https://www.contentstack.com/docs/developers/automation-hub-guides)
- [Updating existing content with a CloudFront distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/UpdatingExistingObjects.html)
- [Layered Diagram](../architecture-diagrams/contentstack-powered-website-layered-architecture.md)

## Common questions

### What events does this automation use?
Entry publish and unpublish events.

### What connector is used to trigger the automation?
Choose **Contentstack** as a trigger connector and select **Entry Trigger**.

### What connector is used to perform the cache invalidation request?
Choose “HTTP” connector and select HTTP Requests as an action event.

### What headers are set for the HTTP request?
Content-Type: application/json and CLOUDFRONT_DISTRIBUTION_UID : <<distibution_uid>>

<!-- filename: solution-guides-articles-cache-invalidation-for-the-website-using-automate.md -->