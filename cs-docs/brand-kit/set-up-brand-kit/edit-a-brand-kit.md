---
title: "Edit a Brand Kit"
description: "Edit your Brand Kit by updating the name or description, adding stacks, or unlinking them within Contentstack."
url: /brand-kit/edit-a-brand-kit
---

# Edit a Brand Kit

## Edit a Brand Kit

You can edit certain details of a Brand Kit from the Brand Kit settings page.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
    
    **Note:** Organization **Owner** and **Admin** can edit Brand Kits, whereas Organization **Member** can view the associated Brand Kits.
    
-   An existing [Brand Kit](/docs/brand-kit/create-a-brand-kit)

## Steps for Execution

To edit a Brand Kit, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to App Switcher in the top-right corner and select **Brand Kit**.
2.  Select the **Brand Kit** that you want to edit.
3.  Click the Brand Kit **Settings**.
4.  On the **Settings** page, inside **General**, you can edit the **Brand Kit Details**, such as its name and description. Once you have done that, click **Save**.![4-Edit-Brand-Kit-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf686735aa4b3504/665649fa0d6347585a7a0010/4-Edit-Brand-Kit-Details.png)
5.  On the same page, under the **Stack Details** section, you can add multiple stacks or unlink the already added stack to the Brand Kit.
    
    1.  To add more stacks, click the **\+ Add Stacks**.![5-Edit-Stack-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2886f3dfad3dbfd7/665649ffe4a73248f49778fa/5-Edit-Stack-Details.png)
        
        From the dropdown that opens, select the desired stack and click **Save**.
        
        ![6-Edit-Add-Stack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41a3b7ef16fac15d/66564a04672d19fd12dc9079/6-Edit-Add-Stack.png)
    2.  To unlink an added stack from the Brand Kit, click the **Unlink** icon as shown in the screenshot below, and click **Save**.![7-Edit-Unlink-Stack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt646cf9900c60221f/66564a09e429493e47a7867b/7-Edit-Unlink-Stack.png)
    
    **Note**:
    
    -   At least one stack should be linked to the Brand Kit at any given time.
    -   If you have only one stack linked to the Brand Kit, the **Unlink** icon will not be visible.
    
6.  In the **API Key Details** section, you can select how you want to configure Brand Kit settings. Below are the two ways in which you can configure:
    1.  **Managed by Contentstack**: You can configure the app using the Contentstack-powered API keys.![8-Brand-Kit-API-Key-Details-Managed-By-Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta102702a540f4684/672cc98077c00da55da12c0d/8-Brand-Kit-API-Key-Details-Managed-By-Contentstack.png)
    2.  **Custom Credentials**: You can configure the app using third-party API credentials. Select the **API Key Provider** from the available options (**OpenAI**, **Azure OpenAI Service**, **AWS Bedrock**, or **Google Vertex AI**.), provide the required credentials, and click the **Save Custom Credentials** button to save the settings.![9-Brand-Kit-API-Key-Details-Custom-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0610c166a26e7a9c/672cc98090cfa3614cfd8cf0/9-Brand-Kit-API-Key-Details-Custom-Credentials.png)
        
        While switching from **Custom Credentials** to **Managed by Contentstack**, the credentials will be removed. Click **Proceed** to change the API Key configuration settings.
        
        ![10-Brand-Kit-API-Key-Details-Manage-API-Keys.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b807450f8fb0939/672ccd6acc425110d2a22950/10-Brand-Kit-API-Key-Details-Manage-API-Keys.png)

## Related Resource

-   [Brand Kit Management API: Update Brand Kit](/docs/developers/apis/brand-kit-management-api/brand-kit#update-brand-kit)
