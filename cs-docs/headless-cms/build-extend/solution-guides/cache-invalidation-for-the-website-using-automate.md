---
title: "Cache Invalidation for the Website Using Automate"
description: "This guide explains how to invalidate cached content to eliminate the risk of displaying outdated content."
url: /headless-cms/cache-invalidation-for-the-website-using-automate
uid: blt4ea561bb92e11010
---

# Cache Invalidation for the Website Using Automate

## Cache Invalidation for the Website Using Automate

Invalidate cached content when an entry is published or unpublished to reflect the updated data on the client side and always return the updated content.

## Diagram Walkthrough

Here's a diagrammatic representation of a Contentstack-powered website.

![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2f9a8c6557680d3/65faa520f2a2921080bf6506/image4.png)

## Tactical Rundown

First, let's set up an Automation Trigger for entry publish and unpublish events.

Steps to create automation for entry publish/unpublish events:

1.  Go to Automate, create a new project, and create an Automation.
2.  Configure Automation Trigger
    1.  Choose **Contentstack** as a trigger connector.
    2.  Select **Entry Trigger**.
    3.  In the next step, add/select your **Account**, select the **Entry Publish/Unpublish** event, and your **Stack**.
    4.  Test Trigger, Save and Exit  

        ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94b600e4f6b9f892/65faa520173215142fd2d463/image5.png)

3.  Configure Action Step
    1.  Prerequisites: Set up lambda function for invalidation using Cloudfront, which will be used in the HTTP connector.  
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

    2.  Create an Action Step  

        1.  Choose “HTTP” connector
        2.  Select HTTP Requests as an action event.
        3.  Configure the action events as required:
            1.  Set your lambda url as a request url in the URL field.
            2.  Choose “POST” as a method of your request.
            3.  Add #root object in the request’s body.

        ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea30ad9eee1d5b1b/65faa520a1e81502f2d5ce7e/image1.png)

    3.  Toggle Advanced options and set the following headers:
        -   Content-Type: application/json
        -   CLOUDFRONT\_DISTRIBUTION\_UID : <<distibution\_uid>>
4.  Test action and save and exit  

    ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdaaa489d9b914d6d/65faa52017321553f8d2d45f/image2.png)


Activate Automation to run in a live environment.

**Related guides:**

-   [Automate Guides](https://www.contentstack.com/docs/agent-os)
-   [Updating existing content with a CloudFront distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/UpdatingExistingObjects.html)
-   [Layered Diagram](https://www.contentstack.com/docs/headless-cms/contentstack-powered-website-layered-architecture)
