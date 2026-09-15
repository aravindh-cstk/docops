---
title: "Salesforce Commerce Cloud"
description: "Use this connector to fetch product details stored in your Salesforce Commerce Cloud platform."
url: /agent-os/salesforce-commerce-cloud
uid: blt59282fedcbd5b634
---

# Salesforce Commerce Cloud

## Salesforce Commerce Cloud

Salesforce Commerce Cloud is a cloud-based platform that helps you with sales, marketing, and cloud services to enhance your customer experience.

This action connector lets you retrieve product details from your Salesforce Commerce Cloud platform.

## Set up the Salesforce Commerce Cloud Connector

Perform the following steps to set up the Salesforce Commerce Cloud action connector:

1.  Within the **Configure Action Step**, click the **Salesforce Commerce Cloud** connector.  
    ![Salesforce_commerce_cloud.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e7f898bee81587e/6527f8d6a0980fec28edeada/Salesforce_commerce_cloud.png)  

2.  Under **Choose an Action** tab, select the **Get Product Details** action.  
    ![Select_the_get_product_Details_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6952fe6eb70812c3/64e5dded0818cce6cc16117c/Select_the-Action.png)
3.  In the **Configure Action** tab, click **\+ Add New Account** to add your Salesforce Commerce Cloud account.  
    ![Add_New_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2dbee143bcb145e2/64e5ddec29a5142c2e94d6d0/Add_new_Account.png)
4.  In the **Authorize** pop-up window, provide the **Organization ID**, **Site ID**, **Short Code**, **Client ID**, and **Client Secret**.  
    To generate the above details, log in to the Salesforce Commerce Cloud dashboard and perform the following steps:
    1.  To generate Organization ID and Short Code, click **Administration** \-> **Site Development** \-> **Salesforce Commerce API Settings** -> Copy the Organization ID and Short Code.
    2.  To fetch the Site ID, click **Administration** \-> **Sites** \-> **Manage Sites** \-> Copy the Site ID of the respective site.
    3.  To generate the **Client ID** and **Client Secret**, refer to our [Salesforce Commerce](/docs/marketplace/salesforce-commerce#retrieve-your-client-credentials-from-salesforce-commerce) documentation.
5.  Once done, click **Authorize**.  
    ![Click_the_Authorize_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee66cc9e7d6c86ce/64e5ddec66f1ff32902f4ed7/Click_the_Authorize_button.png)

    **Note:** Contentstack Marketplace offers a [Salesforce Commerce](/docs/marketplace/salesforce-commerce) app for its users, so they can fetch the products into their Contentstack CMS entry. With the Salesforce Commerce Cloud connector, you can fetch the product details from your Salesforce Commerce Cloud account and use it within your entry.

6.  Select the **Product Category** based on your preferred site to fetch the product details.
7.  Select the **Product ID** to fetch the product details.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1e3c9247e5107c3/64e5ddec37cf46271213c2fd/Select_Different_Fields.png)
8.  Enable the **Show optional fields** toggle button to display the **Product Parameter(s)** field to fetch specific details of a product. Click the checkboxes to fetch the image model and the price details of the product.  

    The first checkbox will fetch the _Image Model_ for the product, i.e. the entire collection of the images for that product along with the details and the second checkbox will fetch the price for each product based on the price book.  

    **Note:** You can enter only predefined values in the Product Parameter(s) field. Refer to the [Reference](https://developer.salesforce.com/docs/commerce/commerce-api/references/shopper-products?meta=getProduct) document to learn more.

    ![Salesforce_SHow_optional_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a057aa5871f7d00/64f827e1dc21171643c2f070/Salesforce_SHow_optional_Field.png)
9.  Click the **Proceed** button.
10.  To execute and test the configured action, click the **Test Action** button.  
     ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt26aa8731d19b512b/64e5ddedae976690210cb8c0/Test_Action.png)
11.  On successful configuration, you can see the below output. Click the **Save and Exit** button.  
     ![save_and_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11cf70790487e255/64e5dded29a062c9aeb80281/Save_and_Exit.png)

This sets the **Salesforce Commerce Cloud** action connector.
