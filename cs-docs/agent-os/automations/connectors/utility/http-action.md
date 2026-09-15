---
title: "HTTP"
description: "HTTP"
url: /agent-os/http-action
uid: bltc55c27910704a890
---

# HTTP

## HTTP

The HTTP Action lets you make an HTTP call whenever a trigger event occurs.

## Set up the HTTP Action

Perform the following steps to set up the HTTP action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **HTTP** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6529d30e1c67850/66261b1b58ce88e9a8c2e83c/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **HTTP Request** action.![HTTP_Request_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88aa27e551072434/66261b1bac4b002794c411a6/HTTP_Request_Action.png)
5.  On the **HTTP Request Configure Action** page, enter the details given below:
    1.  Under the **Select Account** drop-down, select one of the accounts connected to your project. The sensitive information, such as access code, secret key, API key, etc., can be fetched from the selected account.

        **Note:** _Select Account_ is an optional field. You can still configure the action without selecting an account.

        ![Select_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte545bfd6620b5f19/66261b1bac4b00043cc411aa/Select_Account.png)
    2.  Enter the **URL** and select any HTTP methods: GET, POST, PUT, DELETE, or PATCH. For this example, we are choosing the **GET** HTTP method.  
        ![Enter_URL_Method.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7bd24ac80b6851e8/662f4d7c776d0c4c182501e6/Enter_URL_Method.png)
    3.  Optionally, enable the **Show Optional Fields** toggle button to enter the respective names and values for **Headers** and **Query Parameters**.
    4.  Provide a **Header Name** and a **Value** fetched from the **Account Data** drop-down. The **Account data** drop-down contains all the sensitive masked data retrieved from the selected account.
    5.  Click the **Throw error status** checkbox to throw an error in case the error status codes are between 4**-5**.  
        ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c7403fb48d6ab8c/662f4d7cbb6372346c1e212f/Show_Optional_Fields.png)

        **Note:** Throw an error will display an error message in the **Trigger output** and the **Execution Log** section.

6.  Click **Proceed**.
7.  Check if the details are correct. If yes, click **Test Action**.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c6a833a384e6b75/66261b1b700d6c3d3da66844/Test_Action.png)
8.  Once set, click **Save and Exit.** Hit the URL to find the header value in the output.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d46ba286f8ffd7b/66261b1ba02ad7538cee7d55/Save_Exit.png)

This sets the **HTTP** action connector.
