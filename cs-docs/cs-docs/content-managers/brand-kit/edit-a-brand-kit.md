---
title: [Brand Kit] - Edit a Brand Kit
description: Edit your Brand Kit by updating the name or description, adding stacks, or unlinking them within Contentstack.
url: https://www.contentstack.com/docs/content-managers/brand-kit/edit-a-brand-kit
product: Contentstack
doc_type: documentation
audience:
  - content-managers
version: v1
last_updated: 2024-11-07
filename: edit-a-brand-kit.md
---

# [Brand Kit] - Edit a Brand Kit

This page explains [Brand Kit] - Edit a Brand Kit for Contentstack. It is intended for content managers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Edit a Brand Kit

You can edit certain details of a Brand Kit from the Brand Kit settings page.

### Prerequisites

* [Contentstack account](https://www.contentstack.com/login/)
* Access to Organization that has Brand Kit enabled
* Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin)

**Note**: Only Organization [Owners](/docs/developers/organization/organization-roles#organization-owner) and [Admins](/docs/developers/organization/organization-roles#organization-admin) can view and edit Brand Kits, whereas Organization [Members](/docs/developers/organization/organization-roles#organization-member) can only view their respective Brand Kits.

### Steps for Execution

**Note**: For this guide, we have assumed that you have already created a Brand Kit. Refer to the [Create a Brand Kit](/docs/content-managers/brand-kit/create-a-brand-kit) document.

To edit a Brand Kit, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. On the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/6656329d02c997c334b84fcb/1-Brand-Kit-Icon.png)
2. Select the **Brand Kit** that you want to edit.![2-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbbadd20a5d68e86f/665649ec3a936475778c8d87/2-Select-Brand-Kit.png)
3. Click the Brand Kit **Settings** icon from the left navigation panel.![3-Brand-Kit-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5210215973ba209e/665649f340a36d6667dbec88/3-Brand-Kit-Settings.png)
4. On the **Settings** page, inside **General**, you can edit the **Brand Kit Details**, such as its name and description. Once you have done that, click **Save**.![4-Edit-Brand-Kit-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf686735aa4b3504/665649fa0d6347585a7a0010/4-Edit-Brand-Kit-Details.png)
5. On the same page, under the **Stack Details** section, you can add multiple stacks or unlink the already added stack to the Brand Kit.
   1. To add more stacks, click the **+ Add Stacks**.![5-Edit-Stack-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2886f3dfad3dbfd7/665649ffe4a73248f49778fa/5-Edit-Stack-Details.png)

      From the dropdown that opens, select the desired stack and click **Save**.

      ![6-Edit-Add-Stack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41a3b7ef16fac15d/66564a04672d19fd12dc9079/6-Edit-Add-Stack.png)
   2. To unlink an added stack from the Brand Kit, click the **Unlink** icon as shown in the screenshot below, and click **Save**.![7-Edit-Unlink-Stack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt646cf9900c60221f/66564a09e429493e47a7867b/7-Edit-Unlink-Stack.png)

   **Note**:

   * At least one stack should be linked to the Brand Kit at any given time.
   * If you have only one stack linked to the Brand Kit, the **Unlink** icon will not be visible.
6. In the **API Key Details** section, you can select how you want to configure Brand Kit settings. Below are the two ways in which you can configure:
   1. **Managed by Contentstack**: You can configure the app using the Contentstack-powered API keys.![8-Brand-Kit-API-Key-Details-Managed-By-Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta102702a540f4684/672cc98077c00da55da12c0d/8-Brand-Kit-API-Key-Details-Managed-By-Contentstack.png)
   2. **Custom Credentials**: You can configure the app using third-party API credentials. Select the **API Key Provider** from the available options (**OpenAI**, **Azure OpenAI Service**, **AWS Bedrock**, or **Google Vertex AI**.), provide the required credentials, and click the **Save Custom Credentials** button to save the settings.![9-Brand-Kit-API-Key-Details-Custom-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0610c166a26e7a9c/672cc98090cfa3614cfd8cf0/9-Brand-Kit-API-Key-Details-Custom-Credentials.png)

      While switching from **Custom Credentials** to **Managed by Contentstack**, the credentials will be removed. Click **Proceed** to change the API Key configuration settings.

      ![10-Brand-Kit-API-Key-Details-Manage-API-Keys.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b807450f8fb0939/672ccd6acc425110d2a22950/10-Brand-Kit-API-Key-Details-Manage-API-Keys.png)

## Common questions
### What is covered in [Brand Kit] - Edit a Brand Kit?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Brand Kit] - Edit a Brand Kit?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
