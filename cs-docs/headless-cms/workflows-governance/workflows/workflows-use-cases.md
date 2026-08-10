---
title: "Workflows Use Cases"
description: "Workflows Use Cases"
url: /headless-cms/workflows-use-cases
---

# Workflows Use Cases

## Workflows Use Cases

Now that you have read through the workflow document, let’s see workflows in action with the help of some real-world use cases. In this section, we will look at a couple of scenarios (requirements) and learn how to achieve them using workflows in Contentstack.

## Use case 1

Given below is a content creation and publishing process of a typical media company. Let’s look at what the process is and then we will go about creating a corresponding workflow in Contentstack.

### Requirements to implement a workflow

-   The content writer creates the first draft of an article.
-   When she feels it is ready, she sends it to a reviewer for content review.
-   The reviewer reviews the content and either tells the content writer it needs more edits or it’s ‘good to go’.
-   Once the entry is good to go, it goes to the SEO team, where the SEO tags are added.
-   The SEO team says the content is ready for publishing and sends it back to the content writer.
-   The content writer can then publish the entry.

### Conditions to publish content

-   Content writers can send an entry for review to the reviewer. But they cannot send it directly to the SEO team for SEO tagging, nor mark it as ready for publishing. 
-   The reviewer can send the entry back to content writers for changes, or send it to the SEO team. But the reviewer cannot mark the entry as ready for publishing.  
-   Content cannot be published until the SEO team signs off and marks it as ready for publishing.

Let’s put the above scenario in a flowchart:

![Workflow_usecase_1.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0f5cd173dae7eab1/5d650e52c48d0a23b7a7f9e0/Wofkflow_usecase_1.png)

For this scenario, we will first define the workflow. And then we will add publish rules to apply the conditions.

### Add a workflow to define process

Carry out the following steps:

1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and select the relevant stack. 
2.  Click the “Settings” icon on the left navigation panel and select **Workflows**.
3.  You will see a screen that has 2 options: **Workflows** and **Publish Rule**. By default, **Workflows** is selected. Click on **\+ New Workflow**.
4.  In the page that opens, enter the **workflow name** and **description**.
5.  In the **Scope** field, select content types for which you want to apply this workflow.

We will create all the required stages first, then we will apply stage transition rules.

#### **“Draft” stage for first draft**

1.  Click on **\+**  to add **Workflow Stages**.
2.  In the **Name** text box, enter **Draft** and in **Description**, enter **This is the first draft stage**.
3.  The color label is blue by default. This can be changed. But leave it as is for now.

#### **“Ready for Review” stage for editor’s review**

1.  Click on **\+**  to add **Workflow Stages**.
2.  In the **Name** text box, enter **Ready for Review** and in **Description**, enter **This is the review stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

#### **“Needs Changes” stage if changes are required**

1.  Click on **\+**  to add **Workflow Stages**.
2.  In the **Name** text box, enter **Needs Changes** and in **Description**, enter **This is the second draft stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

#### **“SEO Tagging” stage for the SEO team**

1.  Click on **+** to add **Workflow Stages**.
2.  In the **Name** text box, enter **SEO Tagging** and in **Description**, enter **This is the SEO tagging stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

#### **“Complete” stage to mark the entry as ready for publishing**

1.  Click on **+** to add **Workflow Stages**.
2.  In the **Name** text box, enter **Complete** and in **Description**, enter **This is the complete stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

### Add stage transition rules to move content through stages 

We will now add the stage transition rules as follows:

#### **Edit the Draft stage**

1.  Click on the “Edit” icon of the **Draft** stage and click on **Stage transition rules**. 
2.  In the **Next available stages** option, select **Specific stages** and enter **Ready for Review** in the textbox.
3.  Then, select **Specific users/roles** and inside **Roles**, select **Content Writer**.
4.  Click on **Done**.

#### **Edit the Review stage**

1.  Click on the “Edit” icon of the **Ready for Review** stage and click on **Stage transition rules**.
2.  In the **Next available stages** option, select **Specific stages** and enter **Draft**, **Needs Changes** and **SEO Tagging** in the textbox.
3.  Select **Specific users/roles** and inside **Roles**, select **Reviewer**.
4.  Click on **Done**.

#### **Edit the Needs Changes Stage**

1.  Click on the “Edit” icon of the **Needs Changes** stage and click on **Stage transition rules**.
2.  In the **Next available stages** option, select **Specific stages** and enter **Ready for Review** in the textbox.
3.  Select **Specific users/roles** and inside **Roles**, select **Content Writer**.
4.  Click on **Done**.

#### **Edit the SEO Tagging Stage**

1.  Click on the “Edit” icon of the **SEO Tagging** stage and click on **Stage transition rules**.
2.  In the **Next available stages** option, select **Specific stages** and enter **Complete** in the textbox.
3.  Select **Specific users/roles** and inside **Roles**, select **SEO Team**.
4.  Click on **Done**.

#### **Edit the Complete Stage**

1.  Click on the “Edit” icon of the **Complete** stage and click on **Stage transition rules**.
2.  In the **Next available stages** option, select **All stages**.
3.  Select **All users/roles**.
4.  Click on **Done**.
5.  Select the **Enable Workflow Stages** checkbox and click on **Save**.

### Add publish rules to publish content

We need to create a rule that allows publishing on the **production** environment only if the workflow stage is **Complete**.

1.  In your stack, click the “Settings” icon on the left navigation panel, and then **Workflows**. 
2.  Click on the **Publish Rules** tab.
3.  Click the **\+ New Rule** button. 
4.  Under **Parameters**, first select the content types for which you want to apply this rule. Then, select **Language** (English - United States), **Action** (Publish) and **Environment** (Production).    
5.  Under **Conditions**, skip **Approvers** and go to **Workflow stage should be:**. Click the field and select **Complete**. 
6.  Save the rule.

With this, you are done with adding a workflow (and the required publish rule) for the given scenario.

## Use case 2

Let’s look at another use case. In this case, we will look at we will learn how to add more publish rules in order to get granular control over the publishing process.

### Requirements to add publish rules

-   A content writer creates the first draft of an article.
-   He then sends the entry to a proofreader.
-   The proofreader proofreads the entry and sends it to an Illustrator for adding relevant images.
-   The illustrator adds image(s) and marks the entry as complete, and sends it to John Smith for approval.

### Conditions

-   An entry cannot be published unless it is approved by **John Smith**. 
-   An entry cannot be published unless the **Complete** stage is reached.

Let’s put this in a flowchart:

![Workflow_usecase_2.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltba590fff43a3938b/5d650e4dbb33f50becd22cfa/Wofkflow_usecase_2.png)

Let’s first define the workflow. Then, we will add publish rules to apply the conditions.

### Add the workflow

Follow the steps:

1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and select the relevant stack. 
2.  Click the “Settings**”** icon on the left navigation panel and select **Workflows**.
3.  Click on **\+ New Workflow**.
4.  In the page that opens, enter a relevant **name** and **description** for the workflow. 
5.  In the **Scope** field, add content types to which you want to apply this workflow.

We will now add all the required stages first.

#### **“Draft” stage for the first draft**

1.  Click on **+** to add **Workflow Stages**.
2.  In the **Name** text box, enter **Draft** and in **Description**, enter **This is the first draft stage**.
3.  The color label is blue by default. This can be changed. But leave it as is for now.

#### **“Proofread” stage for proofreading the entry**

1.  Click on **+** to add **Workflow Stages**.
2.  In the **Name** text box, enter **Proofread** and in **Description**, enter **This is the proofread stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

#### **“Add Media Files” for adding images**

1.  Click on **+** to add **Workflow Stages**.
2.  In the **Name** text box, enter **Add Media Files** and in **Description**, enter **This is where you will add the required media files for the entry**.
3.  Change the default label color to any color of your choice, but it should be unique.

#### **“Complete” stage**

1.  Click on **\+**  to add **Workflow Stages**.
2.  In the **Name** text box, enter **Complete** and in **Description**, enter **This is the complete stage**.
3.  Change the default label color to any color of your choice, but it should be unique.

### Add the stage transition rules

We will now add the stage transition rules as follows:

#### **Edit the Draft stage**

1.  Click the Edit icon of the **Draft** stage and click **Stage transition rules**. 
2.  In the **Next available stages** option, select **Specific stages** and select **Proofread**.
3.  Then, select **Specific users/roles** and inside **Roles**, select **Content Writer**.
4.  Click **Done**.

#### **Edit the Proofread stage**

1.  Click the **Edit** icon of the Proofread stage and click Stage transition rules.
2.  In the **Next available stages** option, select **Specific stages** and select **Add Media Files**.
3.  Select **Specific users/roles** and inside **Roles**, select **Proofreader**.
4.  Click **Done**.

#### **Edit the Add Media Files Stage**

1.  Click the **Edit** icon of the Add Media Files stage and click Stage transition rules.
2.  In the **Next available stages** option, select **Specific stages** and select **Complete** in the textbox.
3.  Select **Specific users/roles** and inside **Roles**, select **Illustrator**.
4.  Click **Done**.

#### **Edit the Complete Stage**

1.  Click the **Edit** icon of the Complete stage and click Stage transition rules.
2.  In the **Next available stages** option, select **All stages**.
3.  Select **All users/roles**.
4.  Click **Done**.
5.  Select the **Enable Workflow Stages** checkbox and click **Save**.

\\With this, we have added the workflow stages and defined the stage transition rues. Let’s now add publish rules.

#### **Add publish rules**

1.  Now, we need to define rules that allow publishing only if the stage is ‘Complete’, and if the entry is approved by John Smith.
2.  Go to the stack, and click the “Settings” icon, and select Workflows.
3.  You will see a screen that has 2 options: Workflows and Publish Rule. By default, Workflows is selected. Click **Publish Rules**.
4.  Click the **\+ ADD RULE** button. In the screen that opens, you will see broad sections: Parameters and Conditions.
5.  Under Parameters, first select the content types for which you want to apply this rule. Then, select Language (English - United States), Action (Publish) and Environment (Production).
6.  Under Conditions, in Approver(s), select John Smith in Users.
7.  In **Workflow Stage**, select **Complete**.
8.  Click **Save**.

With this, you have created a workflow that satisfies the given scenario.
