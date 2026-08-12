---
title: "Get Started With Building a Website"
description: "Learn to build a website by integrating Contentstack and React. This beginner-friendly guide includes step-by-step instructions, prerequisites, and examples for a seamless setup and deployment."
url: /headless-cms/get-started-with-building-a-website
---

# Get Started With Building a Website

## Get Started With Building a Website

This guide will lead you through the process of integrating Contentstack, a headless Content Management System (CMS), with a React application.

It is designed for users with no prior experience in Contentstack or React integration, breaking down the process into clear, actionable steps with explanations and code examples along the way.

## Prerequisites

-   [Contentstack Account](https://www.contentstack.com/login) (with Admin access to your Org)
-   [Node.js version 18 or later](https://nodejs.org/en/download/)
-   [Git](https://github.com/git-guides/install-git)
-   [GitHub account](https://github.com/) ([Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) configured in Local)
-   [VS code](https://code.visualstudio.com/) (preferred) or any code editor

## Steps To Be Followed

You need to perform the following steps to get started:

1.  [Set up Contentstack](#set-up-contentstack)
    1.  [Create a New Stack](#create-a-new-stack)
    2.  [Import Content Types](#import-content-types)
    3.  [Create Environment and Delivery Token](#create-environment-and-delivery-token)
    4.  [Create Entries](#create-entries) (For “Header,” “Footer,” and the “Page” content types)
2.  [Set Up The Starter App](#set-up-the-starter-app)
    1.  [Fork the Starter App Repository](#fork-the-starter-app-repository)
    2.  [Install the Dependencies](#install-the-dependencies)
    3.  [Configure Contentstack](#configure-contentstack)
    4.  [Run the Application](#run-the-application)
3.  [Deploy and host the application using Launch](#deploy-and-host-the-application-using-launch)

Your final web page will look like below:  

![01. Final Webpage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5f197695ee47a2b/66a3469c02bf27acef3ba9eb/1._Final_Webpage.png)

Let’s get started!

## Set Up Contentstack

This section will guide you through the process of [creating a new stack](/docs/headless-cms/create-a-new-stack) in Contentstack, which will function as the central repository for your website's content.

### Create a New Stack

**Note:** If you are using a trial account with a sample stack, you can select that stack and move on to the next step.

Perform the steps given below to start creating your stack:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login) and navigate to the organization in which you want to create a stack.
2.  Click on either the **\+ New Stack** button located at the top-right corner or in the middle of the page, and select **Create New**.
3.  In the **Create New Stack** dialog box that appears, enter the following details:
    -   **Name** (mandatory): Enter a name for the stack
    -   **Description** (optional): Enter a relevant description for the stack
    -   **Set Master Language** (mandatory): Select a [master language](/docs/headless-cms/set-the-master-language) that you want to set as the primary language of the stack
4.  Click on **Create**.

Congratulations! You've successfully created a new stack in Contentstack. You will be redirected to the [Stack Dashboard](/docs/headless-cms/about-stack-dashboard).

The next step will be exploring Contentstack's content modeling features to define the structure of your website's content.

### Import Content Types

In this section, we will import four content types - “Dishes,” “Header,” “Footer,” and “Page.”

1.  Download and extract this [.zip file](<https://assets.contentstack.io/v3/assets/bltb07d61d76cca54b3/bltb306b4d973df13f0/Stack Data.zip>) that contains folders with the required **Assets** (images) and **Content Types** (JSON files) for this application.
2.  Go to your stack where you want to create a content type, and click on the “Content Models” icon on the left navigation panel (or press “C”).
3.  Click on the **Import Content Type** button.
4.  In the **Import Content Type** modal, click on the **Choose a file** button and select the dishes.json file under the **Dishes** folder from the downloaded file.![04. Select the dishes.json file under the Dishes folder.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2205cb13142099b6/66a349028cc80a2dd3a944ba/4._Select_the_dishes.json_file_under_the_Dishes_folder.png)
5.  Once your file is selected, click on **Import** and the Content Type is Imported into your stack.
6.  Similarly, import the other Content Types namely **Header**, **Footer**, and **Page** in the same order.

After importing all the Content Types, you will see them in your Stack as follows:

![05. Imported Content Types in your Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfa4fdfba63e284b/66a3469a4a3601fc417c13b3/5._Imported_Content_Types_in_your_Stack.png)

### Create Environment and Delivery Token

To fetch content from Contentstack for your website/app via Contentstack APIs, create an environment and generate a Delivery Token.

First, perform the steps in the [create an environment](/docs/headless-cms/add-an-environment) guide. In the **Create Environment** modal, enter the following details, and click on **Create**:

-   **Name**: development
-   **Base URL**: http://localhost:3000/

Here's how the modal will look like:

  
![06. Create the development environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b4864566b501276/66a3469a1b1b45043aeec476/6._Create_the_development_environment.png)

Next, perform the steps in the [generate a Delivery Token](/docs/headless-cms/create-a-delivery-token) guide. In the **Create New Delivery Token** page, enter/select the following values for these fields:

-   **Name**: Enter “PlateStack”
-   **Description**: Enter “A Delivery Token Created to fetch the Content for the PlateStack Restaurant Website”
-   **Branch**: Select **main** from the dropdown
-   **Publishing Environments**: Select **development**

After entering these details, click on **Generate Token** and save your **Stack API Key**, **Delivery Token**, and **Publishing Environment** from the token details section. You’ll need to use these variables later in the code repository, in the [Configure Contentstack](#configure-contentstack) section.

Click on **Save** to save the Delivery token.

### Create Entries

Let’s start creating the entries for the Header, Footer, and Page Content Types.

#### Create Entries for the “Header” Content Type

To create an entry, perform the following steps:

1.  Click on the “Entries” icon (press “E”) on the left navigation panel.
2.  Click on the **\+ New Entry** button on the top, select the content type (in our case, **Header**), and click on **Proceed**.![08. Select the Header Content Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d0609d36c622566/66a3469a9cd6fd6c03f25792/8._Select_the_Header_Content_Type.png)
3.  Within the Entry Editor page, enter/select the following content against the respective fields:
    -   **Title**: Enter “Header.”
    -   **Logo** : To upload the logo, perform the following set of actions:
        
        1.  Click on **Upload a new file**.![09. Click on Upload a new file under Logo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c1f92a66c4bca7e/66a346999625015f21b51fba/9._Click_on_Upload_a_new_file_under_Logo.png)
        2.  Click on **Choose files** and select the desired asset file (in our case, select the Assets/Header/Header Logo.png), then click on **Open**.![10. Select the Header Logo file.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1488e33669bd5387/66a3469a7749f51f323b2236/10._Select_the_Header_Logo_file.png)
        
        This uploads and successfully adds the asset uploaded into your entry.
        
        **Note:** This guide uses relative paths to reference asset files within the downloaded asset folder. To ensure proper functionality, you'll need to add these same files as assets within the corresponding entries.
        
    -   **Navigation Links**: You will need to add multiple instances for this field with the values mentioned below.
        
        **Note:** If an entry field is designated as “Multiple,” you will see the Add “+” icon located beside the existing instance.
        
        ![11.  Click on Add “+” icon beside the existing instance of the Link field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc84eecd6d1bd4e12/66a346a81cbda83427869066/11._Click_on_Add_“_”_icon_beside_the_existing_instance_of_the_Link_field.png)
        
        Here are the instances you need to add:
        
        -   Instance 1: (**Title**: Home, **URL**: /)
        -   Instance 2: (**Title**: Menu, **URL**: /menu)
        -   Instance 3: (**Title**: About us, **URL**: /about-us)
        -   Instance 4: (**Title**: Contact, **URL**: /contact)
4.  After successfully entering the details of the entry, click on **Publish**.
5.  Select the **development** environment and click on **Send**.![12. Select development and click on Send.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0623248d39d3ed20/66a346a84e822dcc820e4c62/12._Select_development_and_click_on_Send.png)
6.  You need to publish this entry along with its references, i.e., the Asset file. So, click on **Send With References.**![13. Click on Send with References to publish all referenced entries.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt762b4cec4ffa948a/66a346a94252d519acebb14e/13._Click_on_Send_with_References_to_publish_all_referenced_entries.png)
    
    **Note:** By clicking on **Send with References**, you can publish all referenced entries along with their parent entry, all at once. For more information, you can read our guides on [publishing referenced entries](/docs/headless-cms/publish-an-entry#publish-referenced-entries) and [publishing nested references](/docs/headless-cms/publish-an-entry#publish-entries-with-nested-references).
    

#### Create Entries for the “Footer” Content Type

Similarly, to create an entry for the “Footer” content type, you need to follow the same process as performed in **step 2** of the [Create Entries for the “Header” Content Type](#create-entries-for-the-header-content-type) section.

Here, when selecting the content type, you need to select **Footer** and click on **Proceed**.

![14. Select the Footer Content Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ebd2d25dcbce72c/66a346a91b1b4592f0eec47a/14._Select_the_Footer_Content_Type.png)

Within the Entry Editor page, enter/select the following content against the respective fields:

-   **Title**: Enter “Footer.”
-   **Navigation Links**: You will need to add the values mentioned below.
    -   **Title**: Enter “Links”
    -   **Link**: Add multiple instances for this field with the values mentioned below.
        
        **Note:** If an entry field is designated as “Multiple,” you will see the Add “+” icon located beside the existing instance.
        
        ![15.  Click on Add “+” icon beside the existing instance of the Link field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e98234a92557f68/66a346a9e91a176c00159e2f/15._Click_on_Add_“_”_icon_beside_the_existing_instance_of_the_Link_field.png)
        
        Here are the instances you need to add:
        
        -   Instance 1: (**Title**: Home, **URL**: /)
        -   Instance 2: (**Title**: Menu, **URL**: /menu)
        -   Instance 3: (**Title**: About us, **URL**: /about-us)
        -   Instance 4: (**Title**: Contact, **URL**: /contact)
-   **Information Section**: You will need to add the values mentioned below.
    -   **Logo**: To upload the logo, perform the following set of actions (refer [About File Field](/docs/headless-cms/file))
        1.  Click on **Upload a new file**.![16. Click on Upload a new file under Information Section.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt285d6fdebc94a3ae/66a346a99cd6fd3c29f25796/16._Click_on_Upload_a_new_file_under_Information_Section.png)
        2.  Click on **Choose files** and select the desired asset file (in our case, select the Assets/Footer/Footer Logo.png), then click on **Open**.
    -   **Description**: Enter “At PlateStack, we’ve got great food and a better experience.”
    -   **Timings**: Enter “Tue - Sun ( 16:00 - 22:00 )”
    -   **Holiday**: Enter “Closed on Monday”
    -   **Copyright**: Enter “Copyright © PlateStack 2024. All rights reserved.”

After entering the data, publish the entry to the **development** environment as we did in **step 3** of the [Create Entries for the “Header” Content Type](#create-entries-for-the-header-content-type) section.

#### Create Entries for the “Page” Content Type

Similarly, to create an entry for the “Footer” content type, you need to follow the same process as performed in step 2 of the [Create Entries for the “Header” Content Type](#create-entries-for-the-header-content-type) section.

Here, when selecting the content type, you need to select **Page** and click on **Proceed**.

![17. Select the Header Content Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt057265b8d9d8ea9f/66a346a929dc3c665e4aac97/17._Select_the_Header_Content_Type.png)

Within the Entry Editor page, enter the following content against the respective fields:

-   **Title**: Enter “Home”
-   **URL**: Enter “/”
-   **Home**: Add the “Home” block by clicking on **\+ Home** and add the following details:
    -   **Hero Section**:
        -   **Banner**: Perform the same set of steps followed to upload the Logo in Step 3 of the [Create Entries for the “Header” Content Type](#create-entries-for-the-header-content-type) section. Here, you need to upload the Assets/Page - Home/Banner.jpeg file.![18. Select the Banner file.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a8d1714eac320da/66a34c675c5264c4d22707bf/18._Select_the_Banner_file.png)
        -   **Heading**: Enter “Journey into flavor”
        -   **Description**: Enter “Indulge in a gastronomic journey where every dish is a culinary masterpiece, crafted with ultra precision.”
        -   **Primary CTA**: Enter “/menu”

After entering this data, publish the entry to the **development** environment as we did in **step 3** of the [Create Entries for the “Header” Content Type](#create-entries-for-the-header-content-type) section.

**Note:** The URL for the Home page will be empty after publishing. So you need to update the URL with “/” and publish again. This is a bug that will be fixed soon.

## Set Up The Starter App

To set up your starter app, you need to integrate the Contentstack APIs with your React application. You need to perform the following set of steps:

1.  [Fork the Starter App Repository](#fork-the-starter-app-repository)
2.  [Install the Dependencies](#install-the-dependencies)
3.  [Configure Contentstack](#configure-contentstack)
4.  [Run the Application](#run-the-application)

Let’s look at each of the steps in detail.

### Fork the Starter App Repository

To fork the GitHub repository of the starter app into your account, perform the following set of steps:

1.  Login to [Github](https://github.com/), and visit the [GitHub repository](https://github.com/contentstack/contentstack-getting-started-react-app) of the starter React app.
2.  Click on the **Fork** button (highlighted in the below screenshot).![19. Click on the Fork button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ff0745dbf4801e1/66a34ce0cc9175c19d2ee335/19._Click_on_the_Fork_button.png)
3.  Ensure to uncheck the **Copy the main branch only** checkbox and click on **Create fork**.![20. Uncheck Copy the main branch only checkbox and click on Create fork.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d0eb6d956bf4287/66a34ce04e822d227e0e4c9a/20._Uncheck_Copy_the_main_branch_only_checkbox_and_click_on_Create_fork.png)
    
    The repository is now forked, and you should see it in your personal GitHub account.
    
4.  Now, open **VS code** and click on **Open Folder** select **Open** from the **File** menu, or simply press. You can also use shortcut key _command_ + _O_ (Mac OS) or _ctrl_ + _O_ (Windows).
5.  In the “Open” dialog box, choose the directory (in our case, contentstack-react) to clone the repository. And click on **Open**.
    
    **Note:** The directory name can be anything of your choice.
    
    ![21. Open the directory.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87bebbe3f4a75bea/66a346b91b1b452c97eec480/21._Open_the_directory.png)
6.  Open a new terminal (Press _control_ + _shift_ + _\`_ or click on **Terminal** > **New Terminal**) and run the below command to clone your forked repository:
    
    ```
    git clone https://github.com/your-username/your-repo-name.git
    ```
    
    **Note:** Make sure to replace placeholders such as your-username and your-repo-name in the above code snippets with your actual values.
    

Now you should be able to see the repository code in the directory as follows:

![22. See the repository code in the directory.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ee5f2a0c6862b78/66a346ba8cc80a1fe4a944ac/22._See_the_repository_code_in_the_directory.png)

### Install the Dependencies

Next we need to install the dependencies for your repository. To do so, perform the following steps:

1.  Navigate to the root directory of the cloned repository. You can do this using the command:
    
    ```
    cd contentstack-getting-started-react-app/
    ```
    
2.  Run the following command to install dependencies using npm:
    
    ```
    npm install
    ```
    
    **Note:** The command result may differ for different versions.  
    
    -   You might get npm ERR! in this step, if you haven’t installed Node.js version 18 or later.
    -   In case of access related error, try running with the command sudo npm install.
    

### Configure Contentstack

To configure Contentstack details into your app, perform the following set of steps:

1.  Locate the .env.sample file in the root directory and rename it to .env
2.  Update the .env file with your configuration details as follows:

In the above code snippet, make sure to replace placeholders such as YOUR\_STACK\_API\_KEY, YOUR\_DELIVERY\_TOKEN, YOUR\_ENVIRONMENT, and YOUR\_STACK\_REGION with the respective values related to your stack. You will find these details are under the Delivery Token that you created in step [Create Environment and Delivery Token](#create-environment-and-delivery-token) of your Contentstack account.

For YOUR\_STACK\_REGION, you can pass the respective region code of one of our supported regions:

-   For AWS North America, set region as US
-   For AWS Europe, set region as EU
-   For Azure North America, set region as AZURE\_NA
-   For Azure Europe, set the region as AZURE\_EU
-   For GCP, set the region as GCP\_NA

### Run the Application

Lastly, you can run the app locally, use the following command:

```
npm start
```

You should see the message “No issues found” on your terminal and see the app running locally at [http://localhost:3000](http://localhost:3000).

Congratulations! You've successfully run the starter application in your local machine. The next step is to deploy your application using Launch.

## Deploy and Host the Application Using Launch

To deploy your app using Launch, you need to first [create a project in Launch and link your GitHub repository](/docs/launch/import-project-using-github#connect-your-github-account-to-launch-and-deploy-a-project) to it.

To do so, perform the following set of steps:

1.  Go to [Launch](https://app.contentstack.com/#!/launch) and click on **\+ New Project** and select **Import from a Git Repository**.
    
    **Note:** Connecting your Git repository with Launch provides various benefits like easy tracking and auto deployment.
    
2.  Click on **Connect Account** and enter login credentials of your GitHub account.
3.  Select **Only select repositories** and then on **Save**.
4.  In the **Install & Authorize** Contentstack Launch modal, select the contentstack-getting-started-react-app repository from the dropdown menu and then on **Install & Authorize.**![23. Install & Authorize Contentstack Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce2a9fa802ac0fb5/66a346bacc917516762ee2df/23._Install_&_Authorize_Contentstack_Launch.png)
5.  You will be redirected to Contentstack Launch with the **Create New Project** pop up open. Enter the following details:
    
    -   **Repository**: Select the **contentstack-getting-started-react-app** repository from dropdown menu
    -   **Git Branch**: Select **main**
    -   **Project Name**: Enter “contentstack-getting-started-react-app”
    -   **Environment name:** Enter “development”
    -   **Build and Output Settings:** Details in this section will be auto generated. It can be the same as seen below.
    
    This is how your details will look like:
    
    ![24. Create New Project Modal Details.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0afff9cd99efa5ed/66a346ba4d4229faa58f0884/24._Create_New_Project_Modal_Details.png)
6.  Now, to run our application we need the following four environment variables that you need to add to your .env file:
    -   REACT\_APP\_CONTENTSTACK\_API\_KEY=STACK\_API\_KEY
    -   REACT\_APP\_CONTENTSTACK\_DELIVERY\_TOKEN=STACK\_DELIVERY\_TOKEN
    -   REACT\_APP\_CONTENTSTACK\_ENVIRONMENT=STACK\_ENVIRONMENT\_NAME
    -   REACT\_APP\_CONTENTSTACK\_REGION=STACK\_REGION\_CODE
7.  Scroll a little bit down and under the **Environment Variables** section, Click on **\+ Add Environment Variable** and add these variables with their values one by one. Or, you can go to the **Bulk Edit** tab and copy paste the content of the .env file and proceed.
8.  After adding these variables your screen should look like below. Now, click on **Deploy**.  
    ![25. Create New Project Modal - Environment Details.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt240c498987b595d2/66a346ba7749f50cca3b223b/25._Create_New_Project_Modal_-_Environment_Details.png)
    
    **Note:** We need to add the four environment variables highlighted in the above image during the project creation manually.
    
    Once done, you will be redirected to the **Deployment Information** page as follows:  
    
    ![26. Deployment Information page of Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77745af2dc4fb788/66a346bae91a172470159e3a/26._Deployment_Information_page_of_Project.png)
    
      
    
    Once the deployment is complete, you will be able to see the snapshot of the application as follows:
    
    ![27. Snapshot of the application post deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb802221e41cb9e73/66a346ba0570203ef6cad7f6/27._Snapshot_of_the_application_post_deployment.png)
9.  Click on the URL displayed on the page. You will be redirected to the application deployed using Launch.![28. Redirected to application deployed using Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3d5ec1b15a09798/66a346bc9625011f7fb51fbf/28._Redirected_to_application_deployed_using_Launch.png)

Congratulations! You have successfully connected your Github repository with Launch and deployed your application. Your application is live and it can be viewed anywhere with the generated URL.

Since you have linked your GitHub repository with Launch, whenever new code changes are pushed to the main branch, Launch will automatically detect and redeploy the new changes to keep your application up-to-date. You can disable this in Settings if you prefer not to automatically redeploy.

## Next Steps

[Project Structure of Getting Started With Building Your Sample Website](/docs/headless-cms/project-structure-of-getting-started-with-building-your-sample-website/)
