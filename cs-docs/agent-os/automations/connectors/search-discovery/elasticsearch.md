---
title: "Elasticsearch"
description: "Elasticsearch"
url: /agent-os/elasticsearch
uid: blteac1a1d55fb04285
---

# Elasticsearch

## Elasticsearch

Elasticsearch is an open-source search-based platform for storing and retrieving valuable data. In order to store and search the data, you will need to create a deployment in Elasticsearch.

## Set up the Elasticsearch connector

Perform the following steps to set up the Elasticsearch action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Elasticsearch** connector.  
    ![Elasticsearch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f17505e3a72d3f/6527f8c87986d4db4d8f396d/Elasticsearch.png)  

4.  Under **Choose an Action** tab, select the **Index an Entry** action.  
    ![Elasticsearch-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta54c6fe9221540b0/63dc0cc73aa4a610530ba044/Elasticsearch-Action.png)  

5.  Click the **\+ Add New Account** button to set up your Elasticsearch account (see screenshot in next step).  
    ![Elasticsearch-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta68440647a557822/63dc0cc7f613db4bc7cb8be6/Elasticsearch-Add-New-Account.png)
6.  In the **Authorize** modal, enter the **Node URL**, **Username**, and **Password**.  

    To generate Node URL, Username, and Password, log in to the Elasticsearch dashboard and perform the following steps:
    1.  Navigate to your deployment page.
    2.  Under **Applications**, copy the endpoint for the Elasticsearch section. The copied endpoint is the **Node URL**..
    3.  You will get a **Username** and **Password** once you create a deployment.
    4.  ![Elasticseacrh-Dashboard.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte8582a7adc8be117/6305f68cc2bcbf7e723275dc/Elasticseacrh-Dashboard.png)

    Then, click **Authorize**.  

    9.  ![Elasticsearch-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68802a8ee917b4ad/63dc0cc70b6c394fa26b88a1/Elasticsearch-Authorize.png)
7.  On the **Configure Action** page, enter an **Index name** in which you want to store the data and provide the details in the **Body** field in JSON format.  
    ![Elasticsearch-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b90d996c981caab/63dc0cc7cdef8636cd80b9dc/Elasticsearch-Configure-Action.png)
8.  Click **Proceed**.
9.  You will see the input values which you have configured in the **Configure Action** modal.  
    ![Elasticsearch-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbab3f3a17bada606/63dc0cc7409fb73889c0e22b/Elasticsearch-Input.png)
10.  Check if the details are correct. If yes, click **Test Action**.  
     ![Elasticsearch-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc8ccde1bccbbbfc/63dc0cc78c69354d3e055194/Elasticsearch-Test-Action.png)  

11.  Once set, click **Save and Exit**.  
     ![Elasticsearch-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaa5e818aadbd926/63dc0cc7cdbe917d7abd8f3b/Elasticsearch-Output.png)  

12.  Navigate to the Elasticsearch dashboard. You will see the output if you search the index name in the API console section.  
     ![Elastic-Output.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7d5bedf27f4334bb/6305f68c27ca1b5cd53ec07b/Elastic-Output.png)

This sets up the **Elasticsearch** action connector.
