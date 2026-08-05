---
title: "[Automations guides and connectors] - Gmail"
description: Use the Gmail connector to send emails using your own Gmail account.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/gmail
product: Automations
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Gmail

This page explains how to use and set up the Gmail connector in Automations to send emails from your own Gmail account. It is intended for developers and automation builders configuring email-sending actions, and should be used when you need to authorize a Gmail account and test sending an email through an automation.

## Gmail

You can use the **Gmail** connector to send emails using your own Gmail account.

## Set Up Gmail

Perform the following steps to set up the Gmail action connector:
- In the **Configure Action** section, select the **Gmail connector**.![1.Select_Gmail_Connector.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt79e5b6bde4514b3c/629940e7bf05100f50a8c63d/1.Select_Gmail_Connector.png)
- Select the **Send Email** action.![2.Select_Send_Email_Action.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt464875348bf99701/629940e636712c4150de0891/2.Select_Send_Email_Action.png)
- Click the **+ Add New Account** button to select your Gmail account.![3.Click_Add_New_Account.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaad5a1cd9b1259ba/629940e6d0f3ca0f53e0a162/3.Click_Add_New_Account.png)
- Select the necessary permissions and click **Authorize**.![Gmail_Authorize.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltec366c50e65d5131/62a04fc20d3e0c2148fe67d4/Gmail_Authorize.png)
- Select the Gmail address (account) from where you want to send the email.![5.Choose_an_Account.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3eb1ee71e6189116/629940e7c040564c45853a6c/5.Choose_an_Account.png)
- Click the **Allow** button to give permissions to the Automations app.![6.Click_Allow.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdf721f4546b26a9b/629940e7a3e9730f695d0283/6.Click_Allow.png)
- You can enter an account name in the Automations app (for example, the account name can be “Testing from Gmail”).![7.Set_Account_Name.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte94891a0587c54d6/629940e61a5eff4c4c379657/7.Set_Account_Name.png)
- On the actions page, enter the **To** email address, the **Subject** line, and the **Body** of the email. The **Show optional fields** toggle switch allows you to enter the “CC” and “BCC” email addresses.![8.Configure_Action.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt29ea9a2c0c0f0f35/629940e7dd28e20f45d625f8/8.Configure_Action.png)
- Click **Proceed** after entering the details.
- Click on **Test Action** to send the email using the Gmail account.![9.Click_Test_Action.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5867cdb65d3c729b/629940e724e98e0f7a830534/9.Click_Test_Action.png)
- Once set, click on **Save and Exit**.![10.Click_Save&Exit.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltad773934d1a6a8b0/629940e7b86a794d785d43b3/10.Click_Save&Exit.png)
- You can check the email in the receiver’s email account sent by your Gmail email address.![11.Check_Receiver_email.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt04961a18ea2a4c51/62994109dd28e20f45d625fc/11.Check_Receiver_email.png)

This sets up the Gmail action connector.

## Common questions

**How do I add a Gmail account to the connector?**  
Use **+ Add New Account**, select your Gmail account, choose permissions, and click **Authorize**, then **Allow**.

**Can I send CC and BCC emails with this connector?**  
Yes. Use the **Show optional fields** toggle switch to enter the “CC” and “BCC” email addresses.

**How do I verify the connector is working?**  
Click on **Test Action** to send the email using the Gmail account, then check the email in the receiver’s email account.

**What information is required to send an email?**  
Enter the **To** email address, the **Subject** line, and the **Body** of the email.