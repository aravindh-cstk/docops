---
title: "Zapier"
description: "Zapier"
url: /lytics/zapier
---

# Zapier

## Zapier

## Overview

Zapier is an automation tool that lets you move data between multiple systems. It provides an easy-to-use UI that guides you through the process of connecting different systems and mapping data between them. Connecting your Lytics data to Zapier can be used to export data, or trigger alerts based on user activity to other systems.

### Before You Begin

You will need to following information to set up this integration:

-   **Zapier account** - Zapier offers a free tier of service that you can use if you are new to the product.
-   **API token for Lytics** - An administrator for your Lytics account can generate an API token for you. This token generated should have administrator rights.

### The Lytics app for Zapier

In addition, the Lytics has built an app that allows Zapier to interact with Lytics. For more information on triggers, actions, and workflows see the [Zapier](https://zapier.com/learn/getting-started-guide/what-is-zapier/) documentation. The Lytics app supports the following functionality:

-   **Trigger**: Lytics user enters an audience
-   **Trigger**: Lytics user exits an audience
-   **Action**: Ability to load user data into Lytics

Zapier supports public and private apps. Currently, the Lytics app is a private app. In order to get access to it, you must be invited. Contact your Lytics representative to get an invitation.

#### Getting access to the Lytics app

This section describes how to log into Zapier and get access to the Lytics app.

1.  Request an invitation from your Lytics representative to use the Lytics app. Your Lytics representative will need your email address.
2.  You will receive the invitation by email. Click the link in the email to accept the invitation.
3.  A browser window will open with a prompt to log into Zapier. If you have a Google account you can log in with that. Otherwise, you will need to create a new Zapier account by clicking the _Sign Up_ link.

![getting-access-03](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2986bb1e276f6366/650b7347a3a7af1f2c07cbf9/img-0361.png)

1.  Click **Accept Invite & Build a Zap**.

![getting-access-04](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7217ce56f545b12e/f84d946390998c7c5f97958f/img-0362.png)

### Connecting Zapier to Lytics

In order for Zapier to interact with Lytics, a _connected account_ must be configured in Zapier.

1.  In Lytics UI, create a new API token with administrator rights. Information on how to generate an API token is available [here](https://learn.lytics.com/understanding/product-docs/account-management/managing-api-tokens).
2.  In Zapier, navigate to **Connected Accounts**.

![connect-02](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6b1d21305dbcee7f/a69c5cb8658fac424356f3ab/img-0363.png)

1.  In the dropdown select the Lytics app.

![connect-03](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am67a158b709b5db4f/0f7465944868d264cd832564/img-0364.png)

1.  Enter your Lytics API token and click **Yes, Continue**.

![connect-04](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am76b563eeebbf5df6/f172abb0dc9e9ae98d3d8627/img-0365.png)

1.  The connection will appear in the section **My Connections**. You will see the Lytics account name and the Lytics AID value (4-digit number).

![connect-05](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf59994b54add1bf2/6676ed837126b08c650e1f10/img-0366.png)

### Using the Lytics triggers

The Lytics app provides triggers for when Lytics users enter and exit Lytics audiences. These triggers can be used in any zap you create.

The following instructions demonstrate how to create a new zap that starts with a Lytics user enters an audience, and sends you an email notification when that happens.

1.  In Zapier, navigate to **Zaps**.

![trigger-01](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am658bc51e6c019009/10bb1467bf0500be9e69aa28/img-0367.png)

1.  Click **Make a New Zap**.
2.  Click the Lytics app.

![trigger-03](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd06b8886ece92a06/f008ad50369acb4844dc0628/img-0368.png)

1.  Click **User Entered Segment**.

![trigger-04](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4b5514cc8da14192/0ad6d5ceac71742a389b2799/img-0369.png)

1.  Click **Save + Continue**.
2.  The Lytics connection you configured earlier will be selected by default. Click **Save + Continue**.

![trigger-06](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf310b68094f174cf/38f93b0d81e554b272a0ea85/img-0370.png)

1.  Enter the following values and click **Continue**.

| Field | Value | Description |
| --- | --- | --- |
| Subscription description | `New users for Zapier` | The Lytics app creates a new [subscription](https://learn.lytics.com/understanding/integrations/webhooks) in Lytics to monitor audience membership. This value is used to identify the subscription in Lytics. |
| Segments | `Lytics New` | You can select 1 or more audiences to monitor. Any time a user enters one of the selected audiences, this trigger will |
| Fields | `User Agent` `Timezome` | When a user enters one of the selected audiences, Lytics sends data to Zapier. The user fields selected here will be included in that data. This makes it possible to use the user profile data in subsequent steps of the zap. Since the audience you are monitoring is the audience for new users, you may not have a lot of information about the user. |

![trigger-07](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am94b8209d785078ea/907d5b950008074dae670a75/img-0371.png)

1.  Click **Continue**.

![trigger-08](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am90e83ef05ad59de5/97959bece90eafd8a910c592/img-0372.png)

1.  Zapier will tell you that your zap is missing an action step. Click **\+ Add a Step**.

![trigger-09](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9a3b98df047fc3e8/1ccea1c96322a72f8fb27769/img-0373.png)

1.  Click **Action/Search**.

![trigger-10](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3361f5685d2ad54d/06d8e821b97a44efaa4494de/img-0374.png)

1.  Click **Email**.

![trigger-11](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1b7a0299e62b9dc5/6fd204b3a8b2543759b0e0f6/img-0375.png)

1.  Click **Save + Continue**.

![trigger-12](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8994a5d5041ead38/76bf780bc2bd5a2cbdcbc655/img-0376.png)

1.  In the field **To**, enter your email address.
2.  In the field **Subject**, enter: "New Lytics User Created!"
3.  In the field **Body**, enter: "New visitor browser: "
4.  Click the button **Insert a Field**.

![trigger-16](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5f2328ebd4f942e4/8ad0cf0e4b4683cad802fc56/img-0377.png)

1.  Select **User Agent**.

![trigger-17](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1869b051528771e7/eee5bb2a799432ae0102ae71/img-0378.png)

1.  Scroll down and click **Continue**.
2.  You can see the information that will be used to send an email. The email body includes values from Lytics. Click **Skip Test**.

![trigger-19](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am940aef739a3d6ef8/fe4229e336b780f13e501d90/img-0379.png)

1.  Click **Finish**.
2.  In the field for the name, enter: "Send Email Notification for New Lytics Users"

![trigger-21](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame484dc236be2f917/ac99593b67dfe8d37efa20a5/img-0380.png)

1.  If you want to enable the zap, click the toggle **OFF**.

### Using the Lytics "add user data" action

The Lytics app provides an action that lets you add user data to Lytics. This action can be used in any zap you create.

The following instructions demonstrate how to create a new zap that writes some hard-coded data to Lytics. This is not a very useful example, but it allows you to configure the action without having to set up connections to any other systems. Just imagine that the hard-coded data is coming from one of your own systems.

1.  In Zapier, make a new zap.
2.  For the trigger select the app **Code**.

![add-data-02](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4781bd5038fa4a76/e7a5b7e94315ab40d2c6fc9e/img-0381.png)

1.  Select **Run Javascript** and click **Save + Continue**.

![add-data-03](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am84129d28afdecd6b/38b783d7c9635c7e93d69a03/img-0382.png)

1.  In the field **Code**, enter the following. This code represents the data that would be provided from

```
//
// This code represents the data that will be made
// available to the step that will upload data to
// Lytics. 
//
// In a real-world example, this data would come
// from the trigger of another Zapier app. For 
// example, there is a Zapier app for Salesforce
// that includes a trigger for when a new contact
// is created. The data from that trigger 
output = [{
    email_address: "erin@email.com",
    given_name: "Erin", 
    surname: "Wilson", 
    employer: "Corpcom", 
    city: "Portland"
}];  ```
5. Click **Continue**.
6. When prompted to pick a sample, click **Continue**.

![add-data-06](//images.ctfassets.net/p3327y1wyjsx/5va5brmN20Msuw4uyQYiou/26168567094f343f5e814e9fc68ad7ab/add-data-05.png)

7. Click **+ Add a Step**.

![add-data-07](//images.ctfassets.net/p3327y1wyjsx/2Vs1qi67R6e8uo86u8iSMy/12712a81c470dd9a9bb6e80509d200f4/add-data-07.png)

8. Click **Action/Search**.

![add-data-08](//images.ctfassets.net/p3327y1wyjsx/56mU6DlzQQ6is0YMEM2ESo/4d0771a2312ae7664528f264d7bc48e8/add-data-08.png)

9. Click **Lytics**.

![add-data-09](//images.ctfassets.net/p3327y1wyjsx/7eCoZfbivKKKaQksAyOCk/bf5d8e60030f10e1b05074c845e998ca/add-data-09.png)

10. Click **Save + Continue**.

![add-data-10](//images.ctfassets.net/p3327y1wyjsx/3oRFIKTewMokwg6scaKcqY/305b5fd9cb8db3a7ad0d22e85c8965db/add-data-10.png)

11. Click **Save + Continue**.

![add-data-11](//images.ctfassets.net/p3327y1wyjsx/2mou4ABglCE0sEKY8CIuyc/13c52af135d9a9f313f5299b0772b834/add-data-11.png)

12. A list of fields is displayed. This list of fields comes from a Lytics query named `zapier_user`. If this query does not already exist in your Lytics account, the query will be created automatically. 

The purpose of this form is to specify how to map data from earlier steps in the workflow to the Lytics user profile. 

Any time data is sent to Lytics, at least one identifier value must be specified. If one is not specified, Lytics will report an error. 

Multiple identifiers may be defined in Lytics. You do not have to provide values for every identifier. You can, but only one is required.

But Zapier does not provide a way to specify that at least one of a set of fields must have a value. Zapier lets you specify whether a field is required or not. Therefore another approach must be used in order to ensure the person configuring the action maps at least one identifier. 

The purpose of the field *Identifier Field*. It is used to specify which of the identifier fields listed before will satisfy the Lytics requirement that at least one identifier value is provided. By selecting an identifier field from the dropdown list, you are telling Lytics that the field you selected will be mapped in the form.

Note that Zapier provides no way to ensure that you have actually mapped the field you select from the dropdown. If you fail to map at least one identifier field, an error will occur when the action tries to upload data to Lytics.

For the field *Identifier Field*, select **Email Address**.

![add-data-12](//images.ctfassets.net/p3327y1wyjsx/1WG7OLKhTWsyO4oM4aeyKC/20906261e01c32c5619fc342c89eae39/add-data-12.png)

13. The rest of the fields in the form represent fields on the Lytics user profile that can be mapped. These fields are defined in the Lytics query `zapier_user`. You can add/remove fields from this query in order to configure other options.

For the field *City*, click the button **Insert a Field**.

![add-data-13](//images.ctfassets.net/p3327y1wyjsx/ODsLMc3qc6mMCqgiqqMCe/1f382a8fb0bc6b3618b712033ccfd718/add-data-13.png)

14. Click **City**.

![add-data-14](//images.ctfassets.net/p3327y1wyjsx/6nemdUsu5i4wWosAGSyIwY/97b47363f0fe3a66a054926d4cc1a26c/add-data-14.png)

15. For the field *Company* select **Employer**.
16. For the field *Email Address* select **Email Address**.
17. For the field *First Name* select **Given Name**.
18. For the field *Last Name* select **Surnames**.
19. Scroll to the bottom of the form and click **Continue**.
20. A summary of the mapped and unmapped fields is displayed. Click **Send Test To Lytics**.
21. A message will tell you the test was successful. Zapier will display a sample of the kind of data Lytics will return after the action runs (i.e. user data is submitted to Lytics).

Click **Finish**.

![add-data-21](//images.ctfassets.net/p3327y1wyjsx/2s9X7R7huUOy4IU6C2aQqS/c1817ea53c12a6894e21533d24c0b05a/add-data-21.png)

22. In the field for the name, enter: `Add Data from Javascript Code`

![add-data-22](//images.ctfassets.net/p3327y1wyjsx/37PoWhz6jYeuGuWMSOum2w/b687ca3919038372ccef1e433fdd3e28/add-data-22.png)

23. If you want to enable the zap, click the toggle button to turn it on.
```
