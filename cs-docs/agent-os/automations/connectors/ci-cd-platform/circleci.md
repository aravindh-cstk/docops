---
title: "CircleCI"
description: "CircleCI"
url: /agent-os/circleci
uid: blt7dbefb65f5c3b06e
---

# CircleCI

## CircleCI

The CircleCI action connector allows you to configure and integrate the CircleCI services to your project.

CircleCI is a CI/CD delivery platform that provides services to implement DevOps practices. It automates the process of creating the build and deploying the project to CI/CD pipeline.

## Set up the CircleCI action Connector

Follow the given instructions to set up the CI/CD action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the Configure Action Step, click the **CircleCI** connector.  
    ![Select_the_Connector_Circleci.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fd181090e8704dd/6527c9d57986d470318f3834/Select_the_Connector_Circleci.png)  

4.  Under **Choose an Action** tab, select the Trigger a Pipeline action.  
    ![Select_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7923445dbf251200/63db55bc2d94ad4c89edca29/Select-Action.png)
5.  In the **Configure Action** tab, click **\+ Add New Account** to add your CircleCI account.  
    ![Add_New_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt069683a6baea4735/63db55bcddb7a921030a7f07/Add-New-Account.png)
6.  Enter the **Title** and **API Token**. Once done, click **Authorize**.  
    ![Authorize_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39a6f0e37311aba1/63db55bc0cf395166a6e24cb/Authorize-Account.png)
7.  To generate the API Token for your CircleCI account, follow these steps:

    1.  Navigate to your CircleCI console and click **User Settings**.![User_Setting](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf75d3aeb81dc2458/63db56ffc73e0910c5408c8f/User-Setting.png)  


    2.  Click the **Personal API Tokens** tab, then click **Create New Token**.  
        ![Personal_API_Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb521cdbebf9214ae/63db56ffffb41a7454dbfa00/Personal_API_Token.png)  


        **Additional Resource:** For more information, refer to the [Managing API’s](https://circleci.com/docs/guides/toolkit/managing-api-tokens/) doc.

8.  Select the **VCS type** textbox and select the repo type from the drop-down.  
    ![Select_VCS_type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2f216818a956d0e/63db55bd5e9f5911307af893/Select-VCS-type.png)
9.  Enter details such as **Organization name**, **Repository name**, **Branch/Tag**, and **Branch/Tag** name in their respective fields. Once done, click **Proceed**.![Select_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt881f4c136879824a/63db55bc9c202c10ccaf622f/Select-Fields.png)
10.  Click **Test Action**.  
     ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32cfef9f9cbdb0d1/63db55bc771d7f10c63c3205/Test-Action.png)
11.  You should see the output as follows. If all looks good, click **Save and Exit** to finish the process.  
     ![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86817aa04518c9c2/63db55bde480c910d1acbd56/Save-Exit.png)

This sets your **CircleCI** action connector.
