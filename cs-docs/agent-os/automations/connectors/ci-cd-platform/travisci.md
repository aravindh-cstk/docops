---
title: "TravisCI"
description: "TravisCI"
url: /agent-os/travisci
---

# TravisCI

## TravisCI

TravisCI is an integration service used to test the repositories hosted on GitHub or Bitbucket. When you integrate your GitHub or Bitbucket repositories with your TravisCI account, it checks for the configuration defined in the .travis.yml file (that you need to define) and notifies you with the output.

TravisCI is very helpful as it lets you test any kind of code break or redundancy in the master repository of your GitHub or Bitbucket accounts.

## Set up the TravisCI Connector

Perform the following steps to set up TravisCI action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **TravisCI** connector.  
    ![TransCI.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91c7cb303e5181dc/6527f8e1884a1a09d8df2db2/TransCI.png)  
    
4.  Under **Choose an Action** tab, select the **Trigger a Build** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc773a04a7433017a/63db8e6ecdef8636cd80b81a/Select-Action.png)
5.  In the **Configure Action** tab, click**\+ Add New Account** to add your TravisCI account.  
    ![Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8ac9c72c2011adc/63db8e6e260a9a2054c6c8a1/Add-New-Account.png)
6.  In the **Authorize** pop-up window, provide the **API Token**.
7.  To generate an API Token, log in to the TravisCI dashboard and perform the following steps:
    
    1.  Under User Settings, select **Settings**.
    2.  Under the **Settings** tab, copy the **Token** value.  
        ![API.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a5ad985110526f5/63db8e6eeace6a21b8fc1819/API.png)  
        
        **Additional Resource:** For more information, refer to the [Token](https://blog.travis-ci.com/2013-01-28-token-token-token/) document.
        
8.  Once done, click**Authorize**.  
    ![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d1a7f6b4f737588/63db8e6d4cd3b46624f76167/Authorize.png)
9.  Select a **Repository** from the **Lookup** list. You need to integrate your GitHub or Bitbucket repositories within TravisCI.
10.  Select a **Branch** from the **Lookup** list.  
     ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7bc68b2fec96be1f/63db8e6ed0a39b6b6a9bd87d/Select-Fields.png)
11.  Clicking the **Show optional field** toggle button lets you add the **Commit message** and **Configuration** fields.
12.  Provide a new **Commit message**. This will override any previous commit message.
13.  Provide additional configuration details (in JSON format only) in the **Configuration** field. This will get added into the .travis.yml file.  
     ![Show-Optional-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1e43ee42f78a029/63db8e6e4af9a97be711cab6/Show-Optional-Fields.png)
14.  Once done, click **Proceed**.
15.  Click **Test Action**.  
     ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3cb981d4ef0561e/63db8e6ebd97af5094b655e4/Test-Action.png)
16.  On successful configuration, you can see the below output. Click **Save and Exit**.  
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda19290cce573b52/63db8e6e3aa4a610530b9e77/Save-Exit.png)
17.  Navigate to TravisCI to check the progress. You should see the following output: ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f07bbf2d128c6ef/63db8e6e4af9a97be711cab2/Output.png)

This sets the **TravisCI** action connector.
