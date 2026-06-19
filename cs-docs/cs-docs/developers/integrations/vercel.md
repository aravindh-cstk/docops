---
title: "[Integrations] - Contentstack's Integration with Vercel"
description: Contentstack's Integration with Vercel
url: https://www.contentstack.com/docs/developers/integrations/vercel
product: Contentstack
doc_type: integration-guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Integrations] - Contentstack's Integration with Vercel

This page explains how to install and use Contentstack’s integration with Vercel to connect Vercel projects with Contentstack stacks and environments, and use the resulting environment variables in your Vercel project. It is intended for developers setting up deployments for Contentstack-powered sites on Vercel and should be used when configuring or managing the Contentstack + Vercel integration.

## Contentstack's Integration with Vercel

[Vercel](https://vercel.com/) is a cloud-based platform for static sites and frontend frameworks that enables developers to build, host, and instantly deploy Jamstack websites or frontend apps. Vercel seamlessly integrates with Contentstack offering frictionless developer experience and enhancing end-user performance.

The Contentstack Vercel integration lets you easily deploy your Contentstack-powered website using Vercel.

The integration helps you link your Contentstack’s stacks with the Vercel project allowing you to instantly fetch, create or update data of your Contentstack project in Vercel.

Now lets understand in detail how to install and use this integration.

## Steps for Installation

Firstly, login to Vercel, goto [Vercel’s Integrations Marketplace](https://vercel.com/integrations) and navigate to [Contentstack’s integration](https://vercel.com/integrations/contentstack) page.  
Now, follow the instructions given below to use the Contentstack + Vercel integration.

- On the Contentstack’s integration page click the **Add Integration** button.
- Select a **Vercel scope** for your integration from the pop-up window and click **Continue**.
- Now, select the Vercel projects that will be integrated. Here, you can either choose the **Al**l** Projects **to select all your Vercel projects or some **Specific Projects **to be integrated.  
  Select the required projects to be integrated if you choose the **Specific Projects** option and click the **ADD INTEGRATION **button.
- As shown below, a new window will appear, where you can select your data center:
- Login to your [Contentstack account](https://www.contentstack.com/login/) and choose the Contentstack [organization](/docs/owners-and-admins/about-organizations) that you will be connecting with Vercel to link your projects.
- After selecting the organization, proceed to link Vercel projects with your [stacks](/docs/developers/set-up-stack/about-stack) and [environments](/docs/developers/set-up-environments/about-environments).  
  From the Vercel projects dropdown, select a project and map it with a stack from your organization. From the list of environments associated with your stack, select one as shown below:
- Alternatively, you can add a new project by clicking on the **+ Add another Vercel Project **button or delete your linked projects if you no longer need them.  
  **Note:** When selecting Vercel projects in step 3, you must select the** All Projects **option in order to add multiple projects.
- Finally, click** + Add Integration **to complete the configuration.

This will successfully install the Contentstack integration for Vercel.  
In case you want to configure your integration’s settings, you can click the **Configuration **button on the [integration’s](https://vercel.com/integrations/contentstack) page or click the **Manage access** button to configure access settings.

## Usage

Once the integration is completed, you can find your project’s information used as [environment variables](https://vercel.com/docs/concepts/projects/environment-variables) in Vercel.

In our case, the following environment variables are used in Vercel’s project as shown below:

```
CONTENTSTACK_API_KEY
CONTENTSTACK_DELIVERY_TOKEN
CONTENTSTACK_ENVIRONMENT
CONTENTSTACK_API_HOST
```

## Example

Here is an example of our SDK function. This function will help you to fetch data from Contentstack to render the Starter Apps pages on Vercel.

```
import * as contentstack from "contentstack";
import * as Utils from "@contentstack/utils";
const Stack = contentstack.Stack({
api_key: process.env.CONTENTSTACK_API_KEY,
delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
environment: process.env.CONTENTSTACK_ENVIRONMENT,
});
export default {
/**
*
* fetches all the entries from specific content-type
* @param {* content-type uid} contentTypeUid
* @param {* reference field name} referenceFieldPath
* @param {* Json RTE path} jsonRtePath
*
*/
getEntry({ contentTypeUid, referenceFieldPath, jsonRtePath }) {
return new Promise((resolve, reject) => {
const query = Stack.ContentType(contentTypeUid).Query();
if (referenceFieldPath) query.includeReference(referenceFieldPath);
query
.includeOwner()
.toJSON()
.find()
.then(
(result) => {resolve(result);
},
(error) => {
reject(error);
}
);
});
},
```

**Additional Resource**: Read in detail about [installing Contentstack integration on Vercel](https://vercel.com/integrations/contentstack).

## Common questions

### Where do I find the Contentstack + Vercel integration?

You can access it from [Vercel’s Integrations Marketplace](https://vercel.com/integrations) and the [Contentstack’s integration](https://vercel.com/integrations/contentstack) page.

### What environment variables does the integration provide in Vercel?

The page lists these environment variables:
- `CONTENTSTACK_API_KEY`
- `CONTENTSTACK_DELIVERY_TOKEN`
- `CONTENTSTACK_ENVIRONMENT`
- `CONTENTSTACK_API_HOST`

### Can I link multiple Vercel projects to Contentstack?

**Note:** When selecting Vercel projects in step 3, you must select the** All Projects **option in order to add multiple projects.

### Where can I configure integration settings after installation?

You can click the **Configuration **button on the [integration’s](https://vercel.com/integrations/contentstack) page or click the **Manage access** button to configure access settings.