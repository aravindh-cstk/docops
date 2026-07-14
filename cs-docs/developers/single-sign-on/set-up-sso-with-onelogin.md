---
title: "[SSO] - Set up SSO with OneLogin"
description: Step-by-step guide to set up Single Sign-On (SSO) in Contentstack with OneLogin as your SAML 2.0 Identity Provider (IdP).
url: https://www.contentstack.com/docs/administration/set-up-sso-with-onelogin
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [SSO] - Set up SSO with OneLogin

This page explains how to configure Single Sign-On (SSO) for a Contentstack organization using OneLogin as the SAML 2.0 Identity Provider (IdP). It is intended for Contentstack organization owners/admins and OneLogin administrators who need to set up, test, and enable SSO (and optionally IdP Role Mapping) for their organization.

## Set up SSO with OneLogin

This step-by-step guide explains how to set up [Single Sign-On](../single-sign-on.md) in Contentstack with OneLogin as your SAML 2.0 Identity Provider (IdP).

To do so, this integration requires following steps:
- [Create SSO Name and ACS URL in Contentstack](#create-sso-name-and-acs-url-in-contentstack)
- [Configure Contentstack App in OneLogin](#configure-contentstack-app-in-onelogin)
- [Configure OneLogin details in Contentstack](#configure-onelogin-details-in-contentstack)
- [Manage users access control in OneLogin](#manage-users-access-control-in-onelogin)[Add application to users](#a-add-application-to-users)
- [Add application to user groups for IdP Role Mapping](#b-add-application-to-user-groups-for-idp-role-mapping)
- [Create Role Mappings in Contentstack](#create-role-mappings-in-contentstack)
- [Test and Enable SSO](#test-and-enable-sso)

Let us see each of the processes in detail.

## Create SSO Name and ACS URL in Contentstack

Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to the **Organization Settings** page, and click on the **Single Sign-On** tab.![Set_up_SSo_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7d698fba6693e892/60df360592aa422edd5e31cd/Set_up_SSo_1_highlighted.png)
- Enter an** SSO name** of your choice, and click **Create**. For example, if your company name is “Acme, Inc.” enter “acme” here. This name will be used as one of the login credentials by the organization users while signing in.**Note:** The SSO Name can contain only alphabets (in lowercase), numbers (0-9), and/or hyphens (-).

 Let's use “sso-test” as the **SSO Name**.
- This will generate **Assertion Consumer Service (ACS)** URL and other details such as **Entity ID**, **Attributes**** **and **NameID** Format. These details will be used in **Step 2** for configuring the Contentstack app in OneLogin.

Keep this window open, as you may need these details for setting up the Contentstack app in OneLogin.

## Configure Contentstack App in OneLogin

**Note:** You will need to be a OneLogin administrator to complete the below steps.

Log into your OneLogin Admin account, click on the **APPS** tab and click on the **ADD APP** button on the top right corner.
- From the applications displayed on the page, use the **SAML Test Connector (IdP)** application.![onelogin-add-app.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7a27f745cf5afb2b/5f467abfc0e5e047f9386ea8/onelogin-add-app.png)
- Set the **Display Name** for your Contentstack application, for example “Contentstack” and click **Save.**![onelogin-configuration-step-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9bc14deff336d42c/5f467abf2a722a66860bd9df/onelogin-configuration-step-1.png)
- Log into your Contentstack account as the Owner and get your “Single sign on URL” for OneLogin. In Contentstack, it’s called **Assertion Consumer URL** and you can find it in **Organization Settings** > **SINGLE SIGN-ON**.![ACS_URL.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbbd19c8098a9cc1f/63762ef176567a10a7cb82c1/ACS_URL.png)
- Now, click on the **Configuration** tab, opy the “ACS URL” from the above step and paste it into the **ACS (Consumer) URL Validator** field in OneLogin. Paste the same value into the **ACS (Consumer) URL** field as well.![onelogin-configuration-step-2-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltce0a3228389e0a86/5f467abfa5031b4a3bba8c94/onelogin-configuration-step-2-a.png)
- Go to the **Parameters** tab and add parameters. By default, the first parameter is **NameID**. We will set its value to **Email** by clicking on the parameter and selecting it from the dropdown.![onelogin-configuration-step-2-b.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7f98768306f8cba3/5f467abf3c3c0b6617212bcb/onelogin-configuration-step-2-b.png)
- Click on the **Add parameter** link, add a parameter named **first_name**, select the **Include in SAML assertion** checkbox, and click on **Save**.![onelogin-configuration-step-3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta025f3e144f1b114/5f467abf0341654a3a76ea8c/onelogin-configuration-step-3.png)
- Next, we will assign a value for the created field. Click on the **Value** dropdown, select **First Name**, and click on **Save**.![onelogin-configuration-step-3-a-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29a3d53c2a215324/5f467aeba5031b4a3bba8c9c/onelogin-configuration-step-3-a-1.png)
Similarly, we will add two more attributes. Add **last_name** and select **Last Name** as the value, and add **email **and select **Email** as the value. Finally, your attribute list will look as follows:![onelogin-configuration-step-3-b.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt28d684a86f17b70f/5d650d2dd84c39242e05d24e/Parameters.png)
- [***Optional Step***] If you want to map IdP roles to Contentstack roles, you need to add a new attribute called roles. Check the **Include in SAML assertion** and click on **Save**.
- Select **Users Roles** as the **Value **and click on **Save**.

**Note:** Perform steps 8 and 9 only if [IdP Role Mapping](./idp-role-mapping.md) is part of your Contentstack plan.

## Configure OneLogin details in Contentstack

Click on the **SSO** tab of your Contentstack application in OneLogin, you will see the **SAML 2.0 Endpoint (HTTP)** URL field.![onelogin-configuration-step-4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd497ac0e9582ee2b/5f467aeb70ca0f65ba109692/onelogin-configuration-step-4.png)
- Click on the “Copy to Clipboard” icon beside the **SAML 2.0 Endpoint (HTTP)** field or you can just manually copy the URL.
- Then, in the Contentstack **Single Sign-On** page, go to **2 IdP Configuration**, and paste the copied URL into the **Single Sign-on URL** field.![Set_up_SSo_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt18f2f24a0807ee73/60df36992eb77d200fac88ec/Set_up_SSo_4_highlighted.png)
- Now, in the **SSO** tab, click on **View Details** under the **X.509 Certificate** parameter.![onelogin-configuration-step-4-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5b625cec4322e1b5/5f467aeb2a722a66860bd9e3/onelogin-configuration-step-4-a.png)
- The **Standard Strength Certificate (2048-bit)** window displays the details of the certificate. Click on the **DOWNLOAD** button to download the certificate.![onelogin-configuration-step-4-1-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt728e1023fc5f2d2f/5f467aebfb60b1668c21d8db/onelogin-configuration-step-4-1-1.png)
- Upload the X.509 certificate that you downloaded into the **Certificate** field in Contentstack.

## Manage users access control in OneLogin

After setting the necessary configurations in Contentstack, you need to now assign the newly added application to your users.

### A - Add application to users

You can assign a single user under **Users** > **All Users**. OneLogin will automatically retrieve the list of potential users that are currently logged in to OneLogin based on the user’s email address.![onelogin-user-step-1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd58882a98939cf66/5f467aeba21dbd47faf25eeb/onelogin-user-step-1.png)
- Click on the **NEW USER** button at the top right corner to add new users to Contentstack. Add the user’s **Email** address, **First Name**, and **Last Name**.![onelogin-configuration-step-5.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0393f094f79ef0f4/5f467aebb008d84afeba6bcf/onelogin-configuration-step-5.png)
- Now, on the **Applications** tab, click on the **+** icon beside the **Applications** bar, and select your app in the **Select Application** dropdown. Then, click on **CONTINUE**![onelogin-configuration-step-5-a.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2c605b280c5416bf/5f467aebc0e5e047f9386eac/onelogin-configuration-step-5-a.png)You will be led to the **Edit Contentstack Login For Demo User** window where you can verify the details. Click on **Save**.

With this, you are done with setting up the Contentstack app in OneLogin. Proceed to configuring the remaining steps in Contentstack SSO in [Step 6](#test-and-enable-sso).

But, if you want to perform IdP Role Mapping and allow user groups to directly log in to your SSO-enabled organization (without invitation) with the assigned permissions through role mapping, perform **Step 4.B**.

### B - Add application to user groups for IdP Role Mapping

***Perform this step only if IdP Role Mapping is part of your Contentstack plan.***

This is an alternate way of managing users and permissions of your SSO-enabled organization. [IdP Role Mapping](./idp-role-mapping.md) allows you to map your IdP roles to Contentstack roles while configuring SSO for your organization.
- You can assign a role under **Users** > **Roles**. OneLogin will automatically retrieve the list of potential user roles that are currently in your OneLogin account.
- To add a new role, click on the **NEW ROLE** button located at the top right corner to add a new user role.![Click on](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc939934ac2ffe713/5d650d210d77ee2fe445edec/Role_list.png)
- You will be allowed to assign a role name. Provide a role name and click on the check (**✓**) icon.
- Select the apps that you want to assign the role under the **Select Apps to Add** section.![New_Role_and_Assign_Apps.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt93df320e4628b934/5f467abe185efb660c1ca5f9/New_Role_and_Assign_Apps.png)
- Click on **Save**.

You can now proceed to create role mappings in Contentstack for the IdP roles you created. Go to the **3. User Management** section of your Contentstack SSO settings and perform Step 5.

## Create Role Mappings in Contentstack

In the **User Management** section, you will see the following steps:

**Strict Mode**: Enable [**Strict Mode**](./set-up-sso-in-contentstack.md#strict-mode)** **if you do not want any users to access the organization without SSO login.
- **Session Timeout**: The [**Session Timeout**](./set-up-sso-in-contentstack.md#session-timeout)** **lets you define the session duration for a user signed in through SSO. While the default is set to 12 hours, you can modify it as needed.
- **Advanced Settings**: Click on [**Advanced Settings**](./set-up-sso-in-contentstack.md#advanced-settings) to expand the IdP Role Mapping section to map IdP roles to Contentstack.[/docs/developers/single-sign-on/set-up-sso-in-contentstack#advanced-settings](./set-up-sso-in-contentstack.md#advanced-settings)In the Add Role Mapping section, click on the **+ ADD ROLE MAPPING** link to add new IdP role mapping and enter the following details:**IdP Role Identifier**: Enter the IdP group/role identifier, for example, “Contentstack Developers.”
- **Organization Role**: Assign either the **ADMIN** or **MEMBER **role to the mapped group/role.
- **Stack Roles ***(optional)*: Assign [stacks](../set-up-stack/about-stack.md) as well as the corresponding stack-level roles to this role.![Set_up_SSo_7_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbcf531ce26d6093e/60df36c30f2b3833d0f68f26/Set_up_SSo_7_highlighted.png)

Likewise, you can add more role mappings for your Contentstack organization. To add a new Role mapping, click on **+ ADD ROLE MAPPING** and enter the details.- Enter **;** (semicolon) in the **Role Delimiter** textbox.
- Finally, check the **Enable IdP Role Mapping** checkbox to enable the feature.
- Click on **Next** to continue further.

While some details about these steps are given below, you can refer to our [general SSO guide](./about-single-sign-on-sso.md) for more information.

## Test and Enable SSO

Next, you can try out the “Test SSO” and “Enable SSO” steps in Contentstack.

### Test SSO

Before enabling SSO, it is recommended that you test the SSO settings configured so far. To do so, perform the following steps

Click on the **Test SSO** button and it will take you to Contentstack’s **Login Via SSO** page, where you need to specify your organization SSO name.
- Then, click on **Continue** to go to your IdP sign-in page.
- Sign in to your account. If you are able to sign in to your IdP, your test is successful. On successful connection, you will see a success message as follows:![Set_up_SSo_10_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0f47d82021908c2c/60df36d17c871833cab137b9/Set_up_SSo_10_no_highlight.png)
- If you have enabled IdP Role Mapping, you’ll find the following details in a new page:**SSO connection established successfully** - A success message is displayed.
- **IdP Roles received** - The list of all the roles assigned to you in your IdP.
- **Contentstack-IdP role mapping details** - The details of all the Contentstack Organization-specific and Stack-specific roles mapped to your IdP roles.
- Click on the **Close** button. Now, you can safely enable SSO for your organization.

**Note**: While testing SSO settings with IdP Role Mapping enabled, the test will be performed only for the IdP roles of the currently logged-in user (i.e., the Owner performing the test).

### Enable SSO

Once you have tested your SSO settings, click **Enable SSO** to enable SSO for your Contentstack organization.

Confirm your action by clicking on **Yes**.

Once this is enabled, users of this organization can access the organization through SSO. If needed, you can always disable SSO from this page as well.

## Common questions

### Do I need to be a OneLogin administrator to configure the OneLogin app?
Yes. The page states: **Note:** You will need to be a OneLogin administrator to complete the below steps.

### Where do I find the ACS URL in Contentstack?
It is generated after you create the SSO name in Contentstack under **Organization Settings** > **Single Sign-On**.

### When should I perform the IdP Role Mapping steps?
Only if [IdP Role Mapping](./idp-role-mapping.md) is part of your Contentstack plan.

### Can I disable SSO after enabling it?
Yes. The page states that you can always disable SSO from the same page.