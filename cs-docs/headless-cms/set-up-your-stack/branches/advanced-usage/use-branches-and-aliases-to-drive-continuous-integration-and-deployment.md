---
title: "Use Branches and Aliases to Drive Continuous Integration and Deployment"
description: "Learn how to drive continuous integration and deployment using branches and aliases in Contentstack's developer documentation. "
url: /headless-cms/use-branches-and-aliases-to-drive-continuous-integration-and-deployment
---

# Use Branches and Aliases to Drive Continuous Integration and Deployment

## Use Branches and Aliases to Drive Continuous Integration and Deployment

Continuous Integration and Continuous Delivery (CI/CD) is a set of tools that allows software development teams to automate code deployment activities right from application code building to testing and deployment.

In the CI/CD pipeline, many development teams use Git-based branching methods to maintain consistent code integration across the developer workflow. Once the integration is done, CD tools automate application code deployment to the desired environment (e.g., production).

To help integrate with this standard CI/CD practice, Contentstack provides **branches and aliases**. Developers can create branches to maintain copies of their content, work on changes, and test them. The frontend application code can assign an alias indicating which branch content needs to be rendered to the frontend media. This is a one-time activity.

You can copy the stack content to a new branch, and updates can be made wherever required. Once done, developers can use the Contentstack interface to make the alias point to the updated branch for rendering content. Alternatively, you can also run the Assign or Update an alias API request to update the target branch of an alias.

**Note:** An alias can only point to a single branch at a time.

With branches and aliases, developers can maintain production content across different branches without affecting live website data. Content managers can publish content changes to a website without the assistance of a development team to pull content from Contentstack and display it on a presentation layer.

Aliases can always point back to the previously referenced content branch in case of unintentional content deployment. This flexibility allows developers to roll back changes instantly. Here, CI/CD can integrate with the CMS to automate rollback for such content changes.

Let's consider a scenario where we need to make major and minor changes to production data for a live website. The following steps will help you understand how you can integrate Contentstack with your CI/CD strategies to facilitate consistent, hassle-free content deployment to the live website.

## Create a Branch for Production Changes

Contentstack allows you to create a copy of the main branch content in a separate branch to change your production data. The child branch you create inherits all of the content types, entries, assets, languages, extensions, releases, etc., that were part of the parent branch as it is.

**Note:** The main branch is the default branch for any stack.

To create a branch, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon on the left navigation panel, and select **Branches**.
2.  Click on **\+ New Branch**.
3.  In the **Create New Branch** form, add the following details:  
    -   **Branch ID:** Enter a unique ID for the branch, e.g., “development”
    -   **Source Branch:** Select a branch from the dropdown from which this new branch should inherit data, e.g., "main"
4.  Click on **Create** to save your branch.  
    ![Branches.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta756639478fccf8d/6329ba7c2975ce72ea2fe22b/Branches-1.gif)

With branches, developers and content managers can maintain and work on different versions of the production content within the same stack.

## Assign an Alias to the Production Branch

An alias is a pointer toward a particular branch. The targeted branch's content can then be fetched and displayed on the live website.

To assign an alias to the Production branch, perform the following steps:

1.  On the **Branches** home screen, click on the **Aliases** tab.
2.  Click on **\+ Assign Alias**.
3.  In the **Assign New Alias** form, add the following details:  
    -   **Alias ID:** Enter a name for the alias, e.g., “deploy.”
    -   **Target Branch:** Select the "production" branch from which you want to display content on your website.
4.  Click on **Save** to save your alias assignment update.
5.  ![aliases.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaadcf8548e6a3520/615a8671e289fa55888ed5c1/aliases.gif)
    

## Use Alias ID in Frontend Code

Developers can specify an alias ID in the frontend code against the branch key to tell the application from where it needs to fetch content. Whichever branch is associated with that alias ID then becomes the target branch for the production environment.

For instance, consider that you are using Contentstack's JavaScript SDK to render content to your live website. While initializing the SDK, pass the alias ID against the branch key in the SDK code. :

```
const Stack = Contentstack.Stack({ api_key: 'api_key', delivery_token: 'delivery_token', environment: 'environment', region: Contentstack.Region.EU , host: 'eu-cdn.contentstack.com', branch: 'deploy')
```

Here are the values for region and host depending on your region:

<table><tbody><tr><td><p>Region</p></td><td><p>Values for region and host</p></td></tr><tr><td><p>AWS Europe</p></td><td><pre>region: Contentstack.Region.EU, host: 'eu-cdn.contentstack.com'</pre></td></tr><tr><td><p>Azure NA</p></td><td><pre>region: Contentstack.Region.Azure-NA, host: 'azure-na-cdn.contentstack.com'</pre></td></tr><tr><td><p>Azure EU</p></td><td><pre>region: Contentstack.Region.Azure-EU, host: 'azure-eu-cdn.contentstack.com'</pre></td></tr><tr><td><p>GCP NA</p></td><td><pre>region: Contentstack.Region.GCP-NA, host: 'gcp-na-cdn.contentstack.com'</pre></td></tr><tr><td><p>GCP EU</p></td><td><pre>region: Contentstack.Region.GCP-EU, host: 'gcp-eu-cdn.contentstack.com'</pre></td></tr></tbody></table>

We pass deploy here to fetch data from the "production" branch.

**Tip:** If you update the alias ID mentioned in the above frontend code, the website begins to fetch data from the branch associated with the new alias ID.

## Make Changes to the Development Branch

Contentstack allows you to make changes to a stack that contains production content. You can change content types, entries, assets, etc., present on a branch (e.g., development) without affecting your "production" branch data.

The changes you make can be **minor** changes to the content model, e.g., adding additional fields or removing them. In another use case, the changes could also involve a **major** overhaul of the website design, e.g., adding or removing content types along with their entries.  

You can test the changes until they are ready to deploy to production.

## Apply Development Branch Changes to Production Branch

For major changes to the stack, e.g., redesigning the marketing website, you usually add or remove content types along with their entries. You will add or update content types or entries on the "development" or "redesign" branch.  

Once the "development" branch changes have been tested and are ready for production, you can use the [Contentstack interface](/docs/introducing-the-new-contentstack) or [Content Management API](/docs/developers/apis/content-management-api) to change the target branch that supplies data to the front-end application. You don't need to make changes to your code every time you have to update live data.

**Note:** Before you apply the content modeling changes to your production data, you need to ensure that your frontend website code is updated with the corresponding changes required for implementation. To ensure that you can revert to the original content model in case of any issues, you must ensure that the code is backward compatible.

Instead, you can change the target branch associated with the "deploy" alias to the "development" or "redesign" branch to make it the main branch for the production environment. Your frontend application will immediately start rendering content from the new target branch.

**Additional Resource:** Learn more about how you can update the target branch for aliases in the [Edit an Alias](/docs/headless-cms/edit-an-alias) section of our documentation. To update the target branch for an alias via API, refer to the [Assign or Update an Alias](/docs/developers/apis/content-management-api/aliases#assign-an-alias) API document.

Once you have applied the content schema changes to the production environment, content managers can begin adding and updating entries within the updated content types.

If something goes wrong during or after deployment, you can assign the "deploy" alias back to the original "production" branch to roll back the changes you made to your live website. With flexible release rollback capabilities, branches and aliases allow Contentstack to align with your CI/CD pipeline and strategies.

Branches and aliases help enhance the DevOps process and achieve Continuous Integration and Delivery (CI/CD). You can map your activities in Contentstack with the phases defined within the CI/CD pipeline. Here's a list of the activities you can automate along with their corresponding CI/CD stages:

<table><tbody><tr><td><p>Contentstack Activities</p></td><td><p>CI/CD Phases</p></td></tr><tr><td><ul><li>Fork out a development branch out of the "main" production branch</li><li>Change the content models as required</li></ul></td><td><p>Build</p></td></tr><tr><td><ul><li>Perform unit testing and quality analysis</li></ul></td><td><p>Test</p></td></tr><tr><td><ul><li>Update frontend code with the latest implementation</li><li>Apply the content modeling changes to the production branch</li></ul></td><td><p>Merge</p></td></tr><tr><td><ul><li>Deploy changes to the production environment</li></ul></td><td spellcheck="false"><p>Deploy</p></td></tr></tbody></table>

  

## Benefits of Integrating Contentstack with your CI/CD Pipeline

You can experience the following benefits when you use branches to manage content and aliases to facilitate content publishing:

-   You can maintain a fast-paced, continuous deployment rate for all your content changes across the website, keeping quality intact.
-   Content managers continue to make changes on their branches without development work impacting their changes.
-   Developers have a way to move code from development to production with ease and roll back any content deployments instantly on detecting a problem.
