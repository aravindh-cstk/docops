---
title: "Other Frameworks on Launch"
description: "Host projects using the “Other” framework option in Contentstack Launch with flexible configuration and deployment support."
url: /launch/other-frameworks-on-launch
uid: blt4dacb7653289fae5
---

# Other Frameworks on Launch

## Other Frameworks on Launch

Contentstack Launch lets you host any SSR framework sites, cloud functions, or static sites using the Other option under the Framework Preset field inside the Build and Output Settings while setting up the project. This is managed through different combinations of values entered in the Build and Output Settings while creating a new project or environment.

## What You Will Learn

-   How to host a pre-built static site on Launch.

-   How to host a site built by a Static Site Generator (SSG).

-   How to host Cloud Functions.

-   How to host an unsupported SSR framework site that runs a Node.js server.


1.  ## Hosting a Static Site on Launch

    Contentstack Launch allows you to host pre-built static sites on Launch by importing projects from Git repositories or by uploading a zip file.

    By using the steps mentioned in this guide, you will be able to host a static site on Launch.

    **Note:** A static site does not require a build step since we're trying to host an already built website and its assets.

    ### Prerequisites

    -   [Contentstack account](https://www.contentstack.com/login/)
    -   Launch-enabled Organization

    ### Steps to Host a Static Site

    Follow the steps given below to host a static site on Launch.

    1.  [Log in to your Contentstack account](https://www.contentstack.com/login/) and click **Launch** from the dashboard.
    2.  Click the **\+ New Project** button.
    3.  To host a static site project, select [Import from a Git Repository](/docs/launch/import-project-using-github/) or [Upload a file](/docs/launch/import-project-using-file-upload/) as usual from the **Create New Project** modal.
    4.  In the **Build and Output Settings**, leave the Build Command field blank.  
        When a Build Command is not passed while creating a project or an environment, Launch assumes it as a static type and skips the build step.![Launch_Other_Framework_CreateModal_HostStaticSite.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b903bc3ab73c56b/6628d740ac4b008938c42caa/Launch_Other_Framework_CreateModal_HostStaticSite.png)
    5.  Click the **Deploy** button.  
        ![Launch_Static_Site.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf95c3c53ed156500/6605002f407aec6c2a6c39a8/Launch_Static_Site.png)

    With these steps, you have successfully deployed and hosted a static site on Launch.

2.  ## Hosting a Site Built by a Static Site Generator (SSG)

    Contentstack Launch allows you to host sites built using Static Site Generators on Launch by importing projects from Git repositories or by uploading a zip file.

    ### Prerequisites

    -   [Contentstack account](https://www.contentstack.com/login/)
    -   Launch-enabled Organization

    ### Steps to Host a Site Built by SSG

    Follow the steps given below to host an SSG site on Launch.

    1.  [Log in to your Contentstack account](https://www.contentstack.com/login/) and click **Launch** from the dashboard.
    2.  Click the **\+ New Project** button.
    3.  To host an SSG site, select [Import from a Git Repository](/docs/launch/import-project-using-github/) or [Upload a file](/docs/launch/import-project-using-file-upload/) from the **Create New Project** modal as usual.
    4.  In the **Build and Output Settings**, enter the Build Command field to build your site.

        **Note:** Find the Build Command by going through your relevant framework documentation. Be sure to choose the build command suitable for deploying to production.

    5.  Click the **Deploy** button.![Launch_OtherFramework_SSGSite.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83f6ed2834cc9729/66278f24b05441364199ef64/Launch_OtherFramework_SSGSite.png)

    With these steps, you have successfully deployed and hosted an SSG site on Launch.

3.  ## Hosting Cloud Functions

    Contentstack Launch cloud functions are a mechanism for you to provide backend functionality on your sites and enable you to write, deploy, and run server-side code on-demand as API endpoints. [Click here](/docs/launch/cloud-functions) to learn more about hosting Cloud Functions.

4.  ## Hosting an SSR Framework Site

    In addition to the supported SSR (Server Side Rendered) frameworks, namely [NextJS](/docs/launch/nextjs-on-launch/), [Gatsby](/docs/launch/gatsby-on-launch/), and [Angular-SSR](/docs/launch/angular-on-launch#server-side-rendering-ssr), Contentstack Launch also facilitates the deployment of projects built on frameworks that are not supported by Launch, as long as it runs a Node.js server.

    **Note:** Although Launch is built to support a wide array of Javascript frameworks, Contentstack may be limited to providing troubleshooting guidance for your specific application code. Please review our documentation carefully.

    By using the steps mentioned in this guide, you will be able to host any SSR (Server Side Rendered) framework built on NodeJS.

    ### Prerequisites

    -   [Contentstack account](https://www.contentstack.com/login/)
    -   Launch-enabled Organization

    ### Steps to Host an SSR Framework Site

    Follow the steps given below to host an SSR site on Launch:

    1.  [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard.
    2.  On the **Launch Projects** screen, click the **\+ New Project** button to initiate the project creation process.
    3.  Select [Import from a Git Repository](/docs/launch/import-project-using-github/) or [Upload a file](/docs/launch/import-project-using-file-upload/) as usual from the Create New Project modal.
    4.  In the **Create New Project** modal, add the following details:

        1.  **Repository** (Mandatory): Select the repo that contains the app that you want to deploy.

            **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.

        2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.

            **Note:** This field will be displayed only if you choose [Import from a Git Repository](/docs/launch/import-project-using-github/) to deploy your project.

        3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
        4.  **Environment Name** (Mandatory): Enter the name of the environment.
        5.  **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the selected framework, as discussed above. Update the fields to the following:

            1.  **Framework Preset** (Mandatory): Select **Other** as the framework from the dropdown.
            2.  **Build Command** (Mandatory): Enter a command to build the project.  
                For example, npm run build.
            3.  **Output Directory** (Mandatory): Enter a directory path to store the project’s build output files. For example, ./build.
            4.  **Server Command** (Mandatory): A command required to start the SSR server.  
                For example, npm run start.

                **Note:** This is the same command you would use locally to start a production-ready server. Please ensure you do not use a command that starts the framework in developer mode, as this will impact its performance.


            ![Launch_OtherFramework_SSR_CreateModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf33f3c71ec74727f/662a2e68a02ad7f2f3eea811/Launch_OtherFramework_SSR_CreateModal.png)

            **Note:** Launch expects the framework to use the environment variable PORT for determining the port on which the server should start.

        6.  **Environment Variables** (Optional):

            1.  Enter the key and value of one or more environment variables.
            2.  You can also add the key-value pairs in bulk in the **Bulk Edit** section.

            **Note:** Click **Back** to revert the changes and re-enter details.

    5.  Once ready, click **Deploy** to save and deploy the project.

    Upon successful deployment, you will see the following screen.

    ![Launch_SSR-Framework_Deployed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ac2c7b6af9a4bfe/660e90d6c095f89951c67fc2/Launch_SSR-Framework_Deployed.png)


## Caching

By default, all the pages are cached on the Launch’s CDN when you deploy an SSR site using the Other framework. This means the subsequent requests to the same page will be cached, and the page will not be regenerated.

You can configure this behavior by returning appropriate cache headers from your server-side response. In the following example, we modify the Express.js server that handles template engine requests in routes.js to regenerate the page every 5 minutes:

```
router.get('/', function(req, res, next) {
res.header({'cache-control': 'max-age=0, s-maxage=300'}); 
res.render('index', { title: 'Hello World!' }); 
});
```

## Cache Revalidation

You can also leverage [Launch’s cache revalidation feature](/docs/launch/revalidate-cdn-cache) to render new content updates on demand.

**Note:**

-   You can use Cache Revalidation only for SSR frameworks since static sites do not have the runtime server necessary to generate a new version of the page.
-   Please ensure that you also revalidate the cache for the data endpoint, backing the content in addition to the page URL. This is important if you have cached API endpoints delivering data for the page.

## Launch Other SSR Server Configuration

Refer to the [Server Configuration](/docs/launch/server-configuration) document to learn about the Other SSR server configuration.
