---
title: [Personalize] - Google Tag Manager Integration With Personalize
description: Streamline your personalization campaigns and enhance user experiences through Contentstack's integration with Google Tag Manager.
url: https://www.contentstack.com/docs/personalize/google-tag-manager-integration-with-personalize
product: Personalize
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-03-25
filename: google-tag-manager-integration-with-personalize.md
---

# [Personalize] - Google Tag Manager Integration With Personalize

This page explains [Personalize] - Google Tag Manager Integration With Personalize for Personalize. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Google Tag Manager Integration

Integrating Personalize with **Google Tag Manager (GTM)** allows you to unlock advanced personalization features while streamlining your tracking and data collection process. GTM simplifies the implementation of tracking codes and event triggers, and when paired with Personalize, it helps deliver highly personalized content based on user behavior.

This guide provides step-by-step instructions to add the Personalize Edge SDK to your website using the [Contentstack Personalize Actions GTM Template](https://tagmanager.google.com/gallery/#/owners/contentstack/templates/personalize-actions-gtm-template).

For an example Stack, Personalize project, and GTM container, see the [Reference Project section](./google-tag-manager-integration-with-personalize.md#reference-project) at the bottom of this page.

### Prerequisites

* [Contentstack account](https://www.contentstack.com/login/)
* Access to the Contentstack Organization that has Personalize enabled
* Access to a project in Personalize
* [Event created](./create-event.md) in your Personalize project
* [Attribute created](./create-custom-attribute.md) in your Personalize project
* Access to your [Google Tag Manager](https://tagmanager.google.com/#/home) account

### Steps for Execution

1. [Create an GTM Account, Container and Install a Web Container](#create-an-gtm-account-container-and-install-a-web-container)
2. [Set up and Manage Tags in Google Tag Manager](#set-up-and-manage-tags-in-google-tag-manager)
3. [Preview and Publish your GTM Tags](#preview-and-publish-your-gtm-tags)
4. [Preview and Publish your GTM Tags](#troubleshooting)

1. ## Create an GTM Account, Container and Install a Web Container

   To get started with Google Tag Manager, you first need to create a Google Tag Manager account that will serve as the topmost level of organization for your company. Then, create one Tag Manager container for each of your company's websites and apps. Please refer to the official GTM documentation to [create an account and container.](https://support.google.com/tagmanager/answer/14842164)

   **Note**: Before you begin, ensure you have access to your website code to add the code snippets.

   After you have created your account and container, follow these steps to install the necessary code snippets for your website's Google Tag Manager container:

   1. In the **Install Google Tag Manager** dialog, there are instructions to be followed (mentioned in the following screenshot) for all pages of your website.![Install_Google_Tag_Manager.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d8b170e26b0f45f/69c3df9588484666a734e1f9/Install_Google_Tag_Manager.png)
   2. Copy the first block of code and paste it in the <head> tag of all your pages. For example, in the following sample HTML code, you would paste your first Google Tag Manager code snippet after the opening <head> HTML tag. Note that the following example uses 'GTM-N2\*\*\*\*\*G,' but you must replace the ID with [your container ID](https://support.google.com/tagmanager/answer/14842866).

      ```
      <!DOCTYPE html>
        <html lang="en">
          <head>
             <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':<p></p>
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],<p></p>
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=<p></p>
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);<p></p>
      })(window,document,'script','dataLayer',''GTM-N2*****G');</script><p></p>
      <!-- End Google Tag Manager -->
             <title>Example Webpage</title><p></p>
          </head>
          <body>
              <!-- Content of your website -->
              <h1>Welcome to My Website</h1>
              <p>This is a sample paragraph on my webpage.
          </body> 
       </html>
      ```
   3. Copy the second block of code and paste it immediately after the <body> opening tag. For example, in the following sample HTML code, you would paste your second Google Tag Manager code snippet immediately after the opening <body> HTML tag. Note that the following example uses 'GTM-N2\*\*\*\*\*G,' but you must replace the ID with your container ID.

      ```
      <!DOCTYPE html>
        <html lang="en">
         <head>
              <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',''GTM-N2*****G');</script>
      <!-- End Google Tag Manager -->
             <title>Example Webpage</title>
         </head>
         <body>
               <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id="GTM-N2*****G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
               <!-- Content of your website -->
               <h1>Welcome to My Website</h1>
               <p>This is a sample paragraph on my webpage.</p>
         </body>
       </html>
      ```
   4. (Optional) Test your website by entering your website's link and then clicking **Test**.
   5. Then click the **OK** button.

   **Note:** If you are using a web framework, there may be an easier way to install the GTM tag. For example, [Next.js](http://Next.js) provides a custom integration for GTM: [Google Tag Manager.](https://nextjs.org/docs/app/guides/third-party-libraries#google-tag-manager)

   This adds the code snippets to your website. Next, we use Google Tag Manager to set up and manage tags.
2. ## Set up and Manage Tags in Google Tag Manager

   For this guide, we will be creating 5 tags for the Trigger Impressions, Trigger Event, Set Attributes, Set UserId, and the Initialize actions:

   * **Initialize**: Set up the Personalize Edge SDK for your website to enable dynamic personalization.
   * **Trigger Impressions**: Captures and tracks when a personalized experience is displayed to users.
   * **Trigger Event**: Records specific user interactions, such as clicks or conversions, to inform personalization strategies.
   * **Set Attributes**: Sends user attributes to Personalize, allowing for tailored content based on user profiles.
   * **Set UserId**: Associates a unique identifier when an unknown user becomes a known user after logging in with a user.

   ### Set up the tag for Initialize action

   Use the following steps to set up the tag for the Initialize action in GTM.

   1. In the **Workspace** tab, click **Tags** to open the dashboard.
   2. In the **Tags** section, click the **New** button to create a new tag.
   3. Replace Untitled Tag with the name of your tag (for example, 'Initialization Tag').
   4. In the **Tag Configuration** section,
      1. Click the **Choose a tag type to begin setup** area.![Initialization_Tag.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0651479595e34b2/69c3dfd302cb98639c1d6375/Initialization_Tag.png)
      2. Click **Discover more tag types in the Community Template Gallery** to open the **Import Tag Template** page.
      3. From the **Community Template Gallery**, search and select **Contentstack Personalize Actions** template.![Import_Tag_Template.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt829315f5500765ef/69c3e04902cb9873f11d6379/Import_Tag_Template.png)
      4. Click the **Add to workspace** button and then click the **Add** button.![Add_To_Workspace.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f3d4ff259909438/69c3e08d02cb9801621d637d/Add_To_Workspace.png)
      5. In the **Action Type** drop-down list, select **Initialize**.
      6. Enter your **Personalize Project UID** fetched from the Projects **Settings** page.
      7. The **Personalize SDK URL** will be prefilled. Unless you are hosting a version of the Personalize Edge SDK yourself, leave this field **unchanged**.
      8. Enter your **Edge API URL**. By default, the AWS NA URL is added. You can choose to update this to the URL of other data centers and regions.
      9. In the **Advanced Settings**, configure the **Tag Sequencing**. Tag Sequencing is used to specify tags to fire immediately before or after the current tag.![](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fb9f4ec0c2dd892/688aeaff755af22ab709d3e4/image.png)
   5. Click **Save**.

   ### Set up the tag for Trigger Impressions action

   Use the following steps to set up the tag for the **Trigger Impressions** action in GTM.

   1. In the **Workspace** tab, click **Tags** to open the dashboard.
   2. In the **Tags** section, click the **New** button to create a new tag.
   3. Replace Untitled Tag with the name of your tag (for example, 'Headline Test Impression Tag').
   4. In the **Tag Configuration** section,
      1. Click the **Choose a tag type to begin setup** area.
      2. Click **Discover more tag types in the Community Template Gallery** to open the **Import Tag Template** page.
      3. From the **Community Template Gallery**, search and select **Contentstack Personalize Actions** template.
      4. In the **Action Type** drop-down list, select **Trigger Impressions**.
      5. To add your Experiences Short UID, obtained from the **Experiences** landing page in Personalize, click the **Add Row** button and enter the Short UID in the **ShortUID** field and then click the **Add** button.![New_Row.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe1eac1f40a9828e/69c3e1768b8bd32c524489ff/New_Row.png)
      6. In the **Advanced Settings**, under **Tag firing options**, select **Once per page**.
      7. Configure the **Tag Sequencing**. Tag Sequencing is used to specify tags to fire immediately before or after the current tag. Here, mark the checkbox for **Fire a tag before Headline Test Impression Tag fires**.
      8. Click **Select tag** and select the previously created **Initialization tag** and mark the checkbox for **Don't fire Headline Test Impression Tag if Initialization Tag fails or is paused**.![Tag_Sequencing.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt822108a6962f91e8/69c3e19b97d77afb7175b4bc/Tag_Sequencing.png)
   5. In the **Triggering** section, configure an event/trigger for which you want the tag to be executed.
      1. Click the **Choose a trigger to make this tag fire** area.![Triggering.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb883531e2cdc170f/69c3e1c44e28d19e90ec4c9e/Triggering.png)
      2. On the **Choose a trigger** modal, click the **New trigger** button.
      3. Replace Untitled Trigger with the name of your trigger (for example, 'Home Page Trigger').
      4. In the **Trigger Configuration** section,
         1. Click the **Choose a trigger type to begin setup** area.
         2. Click the **Page View** trigger type.
         3. Configure the trigger as shown in the screenshot below and then click the **Save** button to save the trigger configuration.![Home_Page_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb75818826fc0fc23/69c3e201c55edc7fa08d5cfb/Home_Page_Trigger.png)
   6. Click the **Save** button to save the tag configuration.

   ### Set up the tag for Trigger Event action

   Use the following steps to set up the tag for the **Trigger Event** action in GTM.

   1. In the **Workspace** tab, click **Tags** to open the dashboard.
   2. In the **Tags** section, click the **New** button to create a new tag.
   3. Replace Untitled Tag with the name of your tag (for example, 'Read More Conversion Tag').
   4. In the **Tag Configuration** section,
      1. Click the **Choose a tag type to begin setup** area.
      2. Click **Discover more tag types in the Community Template Gallery** to open the **Import Tag Template** page.
      3. From the **Community Template Gallery**, search and select **Contentstack Personalize Actions** template.
      4. In the **Action Type** drop-down list, select **Trigger Event**.
      5. To add your Event Key, obtained from the **Events** landing page in Personalize, click the **Event Key** field and enter the event key.![Tag_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt027bbad4adc760f4/69c3e23e9125f635c69f7e7d/Tag_Configuration.png)
      6. In the **Advanced Settings**, under **Tag firing options**, select **Once per event**.
      7. Configure the **Tag Sequencing**. Tag Sequencing is used to specify tags to fire immediately before or after the current tag. Here mark the checkbox for **Fire a tag before Read More Conversion Tag fires**.
      8. Click **Select tag** and select the previously created Initialization tag and mark the checkbox for **Don't fire Read More Conversion Tag if Initialization Tag fails or is paused**.![Select_Tag.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb32a1b2fac0ae039/69c3e26f735fd3253479e891/Select_Tag.png)
   5. In the **Triggering** section, configure an event/trigger for which you want the tag to be executed.
      1. Click the **Choose a trigger to make this tag fire** area.
      2. On the **Choose a trigger** modal, click the **New trigger** button.
      3. Replace Untitled Trigger with the name of your trigger (for example, 'Click - Read More’').
      4. In the **Trigger Configuration** section,
         1. Click the **Choose a trigger type to begin setup** area.
         2. In the **Choose trigger type** modal under the **Click** section, click the **All Elements** trigger type.
         3. Configure the trigger as follows:

            **This trigger fires on**: Select **Some Clicks**.
         4. For the conditions, click the first drop-down list field and select **Choose Built-In Variable > Click ID**. Select the **equals** operator and then enter **read-more** for the criteria.![All_Elements.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf908edd498318bb4/69c3e2bf7dde022048d318b3/All_Elements.png)
         5. Then click the **Save** button to save the trigger configuration.
   6. Click the **Save** button to save the tag configuration.

   This adds your tag for the **Trigger Event** action in GTM.

   ### Set up the tag for Set UserId action

   Use the following steps to set up the tag for the **Set UserId** action in GTM.

   1. In the **Workspace** tab, click **Tags** to open the dashboard.
   2. In the **Tags** section, click the **New** button to create a new tag.
   3. Replace Untitled Tag with the name of your tag (for example, 'Set UserId Tag').
   4. In the **Tag Configuration** section,
      1. Click the **Choose a tag type to begin setup** area.
      2. Click **Discover more tag types in the Community Template Gallery** to open the **Import Tag Template** page.
      3. From the **Community Template Gallery**, search and select **Contentstack Personalize Actions** template.
      4. In the **Action Type** drop-down list, select **Set UserId**.
      5. Mark the checkbox for **Preserve User Attributes**.![Preserve_User_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab4ef9d9a89daff2/69c3e3319a52944814e1ca27/Preserve_User_Attributes.png)
      6. In the **Advanced Settings**, under **Tag firing options**, select **Once per event**.
      7. Configure the **Tag Sequencing**. Tag Sequencing is used to specify tags to fire immediately before or after the current tag. Here mark the checkbox for **Fire a tag before Set UserId Tag fires**.
   5. Click **Select tag** and select the previously created **Initialization tag** and mark the checkbox for **Don't fire Set UserId Tag if Initialization Tag fails or is paused**.img src="https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18969151adecbc45/69c3e38816a1f889281c682c/Don\_t\_Fire\_Set\_User\_ID\_Tag.png" alt="Don\_t\_Fire\_Set\_User\_ID\_Tag.png" height="auto" />
   6. In the **Triggering** section, configure an event/trigger for which you want the tag to be executed.
      1. Click the **Choose a trigger to make this tag fire** area.
      2. On the **Choose a trigger** modal, click the **New trigger** button.
      3. Replace Untitled Trigger with the name of your trigger (for example, 'LoggedInEventTrigger').
      4. In the **Trigger Configuration** section,
         1. Click the **Choose a trigger type to begin setup** area.
         2. In the **Choose trigger type** modal under the **Other** section, click the **Custom Event** trigger type.
         3. Enter ***is\_logged\_in*** in the **Event name** field.![Custom_Event.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c1ebf1b873e5b80/69c3e3db191b6b098b7c8242/Custom_Event.png)
         4. Then click the **Save** button to save the trigger configuration.
   7. Click the **Save** button to save the tag configuration.

   This adds your tag for the **Set UserId** action in GTM.

   ### Set up the tag for Set Attributes action

   Use the following steps to set up the tag for the Set Attributes action in GTM.

   1. In the **Workspace** tab, click **Tags** to open the dashboard.
   2. In the **Tags** section, click the **New** button to create a new tag.
   3. Replace Untitled Tag with the name of your tag (for example, 'Rewards Program Tag').
   4. In the **Tag Configuration** section,
      1. Click the **Choose a tag type to begin setup** area.
      2. Click **Discover more tag types in the Community Template Gallery** to open the **Import Tag Template** page.
      3. From the **Community Template Gallery**, search and select **Contentstack Personalize Actions** template.
      4. In the **Action Type** drop-down list, select **Set Attributes**.
      5. In the **Attributes** field, define the key-value pairs to set. The keys should match an attribute key you have defined in the personalize project.
      6. In the **Advanced Settings**, under **Tag firing options**, select **Once per event**.
      7. Configure the **Tag Sequencing**. Tag Sequencing is used to specify tags to fire immediately before or after the current tag. Here mark the checkbox for **Fire a tag before Rewards Program Tag fires**.
      8. Click **Select tag** and select the previously created **Initialization tag** and mark the checkbox for **Don't fire Rewards Program Tag if Initialization Tag fails or is paused**.
   5. In the **Triggering** section, configure an event/trigger for which you want the tag to be executed.
      1. Click the **Choose a trigger to make this tag fire** area.
      2. On the **Choose a trigger** modal, click the **New trigger** button.
      3. Replace Untitled Trigger with the name of your trigger (for example, 'Subscribe Trigger').
      4. In the **Trigger Configuration** section,
         1. Click the **Choose a trigger type to begin setup** area.
         2. In the **Choose trigger type** modal under the **Click** section, click the **All Elements** trigger type.
         3. Configure the trigger as follows:

            **This trigger fires on**: Select **Some Clicks**.
         4. For the conditions, click the first drop-down list field and select **Choose Built-In Variable > Click ID**. Select the **equals** operator and then enter **subscribe** for the criteria.
         5. Then click the **Save** button to save the trigger configuration.
   6. Click the **Save** button to save the tag configuration.
3. ## Preview and Publish your GTM Tags

   After setting up your GTM Tags, you can preview and test your container configuration before publishing. Google Tag Manager’s preview and debug mode lets you test a container configuration on a site before publishing. It connects to Tag Assistant, allowing you to see which tags fired and their order. Please refer to the official GTM documentation for more information on [Preview and Debug Mode](https://support.google.com/tagmanager/answer/6107056).

   After previewing and ensuring everything is working as expected, navigate back to your **Workspace** where we created the **Container** and then click the **Submit** button to publish a container with the tags you created.

   ![Tag_Manager.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt05550a87f96f2e4a/69c3e4ad1f33fd157c600311/Tag_Manager.png)

   This completes the set up for the GTM integration for Personalize.

   **Additional Resource**: For more information on the Publishing, versions, and approvals, please refer to the official GTM [documentation](https://support.google.com/tagmanager/answer/6107163).
4. ## Troubleshooting

   **Common Issues**

   1. **Tags Not Firing**: Ensure that triggers are correctly set up and that your conditions are properly defined.
   2. **Data Not Sent to Personalize**: Double-check API keys and ensure that all required fields are correctly configured.

   **Debugging Tips**

   * Use GTM’s “Preview” mode to test tags in real-time and ensure they are fired as expected.
   * Check your browser’s developer console for any error messages related to the tag execution.
   * Check your browser’s developer console for network calls via the Network tab in Google Chrome (**Inspect Element** > **Network**) for any error messages related to the tag execution. The following network call shows the user attributes being set on the edge API from GTM:![API.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccb4de787334aaee/69c3e4bbc8f83a0170dce541/API.png)

For further assistance, refer to the [Google Tag Manager documentation](https://tagmanager.google.com/gallery/#/owners/contentstack/templates/personalize-actions-gtm-template) or contact support.

### Reference Project

You can refer to the following project for a reference implementation: <https://github.com/contentstack-personalize-examples/nextjs-example-launch-gtm>. It is built using the Next.js framework and is hosted on Contentstack Launch here: <https://personalize-demo-with-gtm.contentstackapps.com>.

You can find the Google Tag Manager container available in the GitHub repository as the gtm-container.json file. You can import the same into your Tag Manager account to get started with the same example.

## Common questions
### What is covered in [Personalize] - Google Tag Manager Integration With Personalize?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Personalize] - Google Tag Manager Integration With Personalize?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
