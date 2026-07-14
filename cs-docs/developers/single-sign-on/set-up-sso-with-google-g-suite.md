---
title: "[SSO] - Set up SSO with Google G-Suite"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with Google G Suite as your SAML 2.0 identity Provider (IdP).
url: https://www.contentstack.com/docs/administration/set-up-sso-with-google-g-suite
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [SSO] - Set up SSO with Google G-Suite

This page explains how to configure Single Sign-On (SSO) for a Contentstack organization using Google G Suite as a SAML 2.0 identity provider (IdP). It is intended for developers and organization admins who need to set up and validate SSO access for users.

## Set up SSO with Google G-Suite

This step-by-step guide explains how to set up [Single Sign-On (SSO)](../single-sign-on.md) in Contentstack with Google G Suite as your SAML 2.0 identity Provider (IdP).

The integration with Google G Suite can be done in two easy steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Google G Suite for Contentstack](#configure-google-g-suite-for-contentstack)

Let’s see each of the steps in detail.

## Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the [**Organization Settings**](../organization/organization-settings-overview.md)** **page, and click on the **Single Sign-On** tab.![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3aca92bcd655acd7/60e3242161faef2008de28f9/Set_up_SSo_1_highlighted.png)

- Enter an **SSO Name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

Let's use “sso-test” as the **SSO Name**.

- This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes **and **NameID Format**. These details will be used in Step 2 for configuring the Contentstack app in Google G Suite.

Keep this window open, as you may need these details for setting up the Contentstack app in Google G Suite.

## Configure Google G Suite for Contentstack

Log in to your Google Admin account, click on to **Apps, **and select **SAML apps**.![1.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb7a911dd47fa510a/6387667e4005df1070b03d5b/1.jpg)

- Click on **Add a service/App to your domain**, or you can click on the yellow plus (**+**) icon in the right bottom corner.![2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt48f770fed1c50e2a/5d65144965cd852769378a75/2.png)
- This will open the **Enable SSO for SAML Application** window. Click on **SETUP MY OWN CUSTOM APP. ******![3.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt212e63b7ec42bf67/6387670b76567a10a7cbe7ae/3.jpg)
- Copy the link in the **SSO URL** field and paste it into the corresponding **Sign-On URL** field in Contentstack's Single Sign-On settings.
- Click on the **Download** button to download the Certificate and upload the downloaded certificate file in Contentstack’s SSO setting.![4.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt828aff1c2bf237f4/6387673d1da254109279d823/4.jpg)
- Next, you will see the **Basic information for your Custom App** window where you can provide an application name and upload a logo. Then, click **Next** to proceed further to SAML settings.![5.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt154358226b0fed05/63876753f33b43105dcdaab0/5.jpg)
- Now you will come to the **Service Provider Details** window where you need to provide the **ACS URL** and the **Entity ID** of your Contentstack application.![6.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf2676e91e660b57b/5d6513e35ab0281fbe5e1764/6.png)
- In the **Name ID** field, select **Basic information** and **Primary Email**. For the **Name ID Format** field, select **EMAIL**. Click on **Next.**********![7.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3e97433c9bc1a861/6387678ef9bf30104c6e3959/7.jpg)
- In the **Attribute Mapping** window, click on **ADD NEW MAPPING**.![8.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta65ef543f9a14a18/638767a87140e510ae4aba25/8.jpg)
- Enter “email,” and select **Basic information** and **Primary Email**; enter “first_name,” and select **Basic information** and **First Name**; and enter “last_name,” and select **Basic information** and **Last Name**.![9.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt735162fa4de82569/638767c1303d7a10a114a61d/9.jpg)
- On the following prompt, click on **OK**.![10.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0a6ba6362400d2c5/638767d307d496104f3925e0/10.jpg)
- Now, you will see your SAML app.![11.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3e6b37e5834cb010/638767ee12a129103e952504/11.jpg)
- Click the three dots at the top of the gray box. You will see three options: **On for everyone**, **OFF**, and **On for some organizations**.![12.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc38e3476ae5aa85e/638768059743b810a4de87ab/12.jpg)
- Select **On for some organizations** and click on **TURN ON FOR EVERYONE** to confirm.![13.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt10ba7faa020e7601/6387681b6237d71069351c37/13.jpg)
- Now you will see that your app has been turned on for everyone.![Screenshot 2017-11-17 16.29.18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1174f382c2493cad/63ea4ac5723591743bc4d2c9/Screenshot_2017-11-17_16.29.18.png)

With this, you are done with setting up the Contentstack app in Google G Suite. You can now proceed to configuring the remaining steps in Contentstack.

## Further steps

### User Management

In Contentstack, save your settings and go to **3. User Management**.

Enable [**Strict Mode**](./set-up-sso-in-contentstack.md#strict-mode)** **if you do not want any users to access the organization without SSO login.

[**Session Timeout**](./set-up-sso-in-contentstack.md#session-timeout)** **lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as per your requirement.

### Test & Enable

Go to **4. Test & Enable** in Contentstack.

Click the [**Test SSO**](./set-up-sso-in-contentstack.md#test-sso)** **button to check if your SSO settings have been configured properly. It is highly recommended that you test your settings before enabling SSO.

To enable SSO for your Contentstack organization, click on [**Enable SSO**](./set-up-sso-in-contentstack.md#enable-sso). Once this is enabled, users of this organization can access the organization through SSO.

You can then disable SSO from the same page when required.

## Common questions

### Do I need to keep the Contentstack SSO settings page open while configuring Google G Suite?
Keep this window open, as you may need these details for setting up the Contentstack app in Google G Suite.

### Which Contentstack values are required in Google G Suite Service Provider Details?
You need to provide the **ACS URL** and the **Entity ID** of your Contentstack application.

### What should I select for Name ID and Name ID Format in Google G Suite?
In the **Name ID** field, select **Basic information** and **Primary Email**. For the **Name ID Format** field, select **EMAIL**.

### What should I do after completing the Google G Suite SAML app setup?
You can now proceed to configuring the remaining steps in Contentstack.