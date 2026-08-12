---
title: "Wordbee App Installation Guide"
description: "Translate and provide the localized versions of your Contentstack entries."
url: /marketplace/wordbee
---

# Wordbee App Installation Guide

## Wordbee App Installation Guide

Wordbee is a translation management system (TMS) designed to help organizations manage content translation and localization. With features such as translation workflow management, collaboration tools for translators, and integration with machine translation engines, it lets organizations reach international audiences effortlessly.

With the Contentstack Marketplace Wordbee app, you can easily translate your entries into multiple languages and provide localized versions within your Contentstack entries. You can translate entries using the Wordbee Full Page app and Sidebar Widget and view the translation status.

## Prerequisites

-   [Wordbee (Beebox) account](https://contentstack.beebox.wordbee.com/Home/Login)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Wordbee app within your stack.

## Steps for Execution

1.  [Retrieve Configuration Details from Wordbee](#retrieve-configuration-details-from-wordbee)
2.  [Install and Configure the Wordbee app in Marketplace](#install-and-configure-the-wordbee-app-in-marketplace)
3.  [Use the Wordbee app within your Stack](#use-the-wordbee-app-within-your-stack)

1.  ## Retrieve Configuration Details from Wordbee
    
    **Note:** Ensure you have an active Wordbee account. You can sign up for a trial or purchase a subscription.  
    Once you have set up your account, you will receive an email with your login details and a URL. Follow the instructions in the email to complete the account setup process.
    
    To get your configuration details for Wordbee, follow the steps given below:
    
    1.  Log in to the Wordbee (Beebox) account using your Wordbee account credentials.
    2.  On the Wordbee (Beebox) dashboard, choose your project and click **Select**.![Wordbee-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f4392b0d30f8770/652770f901a337c7e75eab2c/Wordbee-Project.png)
    3.  Go to **Settings** from the left navigation panel and click the **CMS Connector** tab to get the **API Url**, **API Project Key**, **API Login**, and **API Password** of your project.![Wordbee-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8d47e77cfd70c3e/6527b941bc22f47c71766c42/Wordbee-Credentials.png)
    4.  To get the **API Callback URL**, add your [Stack API Key](/docs/developers/apis/content-delivery-api#authentication) to the following link:
        
        ```
        https://wordbee.contentstackmarket.com/api/prod-marketplace-wordbee-consumer-api?api_key=<Your Stack API Key>
        ```
        
    5.  Copy and paste the information to your clipboard. We will need these details while configuring the Wordbee app in [Step 2](#install-and-configure-the-wordbee-app-in-marketplace).
    6.  In **Project settings**, verify if the **Rule name** under **Text extraction rules** is **JSON**.![Wordbee-Text-Extraction-Rule](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta88b42c53ea0bae2/6531281afe2d4bebd7b1c835/Wordbee-Text-Extraction-Rule.png)When the **Rule name** is not **JSON**, then click the **View all** button and copy the following rule:
        
        ```
        <?xml version="1.0" encoding="utf-8"?>
        <ParserConfigurations xmlns="http://www.wordbee.com/config">
        
            <ParserConfiguration xmlns="http://www.wordbee.com/config">
              <Name>JSON</Name>
              <Description>For translation of all JSON node values.</Description>
              <ParserDomain>JSON</ParserDomain>
              <EParser>34</EParser>
              <Implementation>v2</Implementation>
              <SegmentationMode>SRX</SegmentationMode>
              <SegmentationParameters>{}</SegmentationParameters>
              <SegmentationSplitAtNewlines>false</SegmentationSplitAtNewlines>
              <SegmentationSplitAtInlineTags>true</SegmentationSplitAtInlineTags>
              <SegmentationTrimWhitespaces>true</SegmentationTrimWhitespaces>
              <SegmentationTrimMarkup>false</SegmentationTrimMarkup>
              <SegmentationRulesEnabled>true</SegmentationRulesEnabled>
              <VersionPretranslation>CompareTexts</VersionPretranslation>
              <SubConfigurations>
                <SubConfiguration Key="HTML">
                  <ParserConfiguration>
                    <Name>Default</Name>
                    <Description>
          </Description>
                  <ParserDomain>HTML</ParserDomain>
                  <EParser>1</EParser>
                  <Implementation />
                  <SegmentationMode>SRX</SegmentationMode>
                  <SegmentationParameters>{}</SegmentationParameters>
                  <SegmentationSplitAtNewlines>false</SegmentationSplitAtNewlines>
                  <SegmentationSplitAtInlineTags>true</SegmentationSplitAtInlineTags>
                  <SegmentationTrimWhitespaces>true</SegmentationTrimWhitespaces>
                  <SegmentationTrimMarkup>false</SegmentationTrimMarkup>
                  <SegmentationRulesEnabled>true</SegmentationRulesEnabled>
                  <VersionPretranslation>CompareTexts</VersionPretranslation>
                  <CompactingOption xmlns="">0</CompactingOption>
                  <ModulesVersion />
                  <QA />
                  <TrimAsianSpacesOnBuild>false</TrimAsianSpacesOnBuild>
                  <AppendSpacesOnBuild>false</AppendSpacesOnBuild>
                  <HtmlConfiguration xmlns="http://www.wordbee.com/config/html">
                    <IncludeSpaces>false</IncludeSpaces>
                    <CompressSpaces>true</CompressSpaces>
                    <ConvertEntities>AllToCharacter</ConvertEntities>
                    <CompressNbsp>false</CompressNbsp>
                    <KeepInlineTags>false</KeepInlineTags>
                    <AttCompressSpaces>false</AttCompressSpaces>
                    <AttIncludeSpaces>false</AttIncludeSpaces>
                    <AttConvertEntities>AllToCharacter</AttConvertEntities>
                    <UseEntitiesForBadCharsInTarget>True</UseEntitiesForBadCharsInTarget>
                    <WebEncoding>utf-8</WebEncoding>
                    <DoNotSegment>false</DoNotSegment>
                    <ExcludeNoLetterDigit>false</ExcludeNoLetterDigit>
                    <ParseShortCodes>false</ParseShortCodes>
                    <TextPatterns />
                    <Code>
                      <CodeTags>
                        <Tag>script</Tag>
                        <Tag>style</Tag>
                      </CodeTags>
                      <IncludeSpaces>false</IncludeSpaces>
                      <CompressSpaces>false</CompressSpaces>
                      <ActiveParserVersion>750</ActiveParserVersion>
                      <FreeTextPatterns />
                      <QuotedTextPatterns DefaultTrans="true" />
                      <EnableNoTrans>True</EnableNoTrans>
                    </Code>
                    <InlineTags>
                      <Tag>a</Tag>
                      <Tag>acronym</Tag>
                      <Tag>b</Tag>
                      <Tag>big</Tag>
                      <Tag>blink</Tag>
                      <Tag>br</Tag>
                      <Tag>cite</Tag>
                      <Tag>code</Tag>
                      <Tag>dfn</Tag>
                      <Tag>em</Tag>
                      <Tag>font</Tag>
                      <Tag>i</Tag>
                      <Tag>iframe</Tag>
                      <Tag>img</Tag>
                      <Tag>kbd</Tag>
                      <Tag>s</Tag>
                      <Tag>small</Tag>
                      <Tag>span</Tag>
                      <Tag>strike</Tag>
                      <Tag>strong</Tag>
                      <Tag>small</Tag>
                      <Tag>sub</Tag>
                      <Tag>sup</Tag>
                      <Tag>tt</Tag>
                      <Tag>u</Tag>
                      <Tag>var</Tag>
                      <Tag>ruby</Tag>
                      <Tag>rt</Tag>
                      <Tag>rc</Tag>
                      <Tag>rp</Tag>
                      <Tag>rbc</Tag>
                      <Tag>rtc</Tag>
                      <Tag>asp:label</Tag>
                    </InlineTags>
                    <Attributes>
                      <Attribute Translatable="true" Visibility="Dynamic">
                        <Attribute Pattern="alt" IsRegex="false" />
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Dynamic">
                        <Attribute Pattern="title" IsRegex="false" />
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Dynamic">
                        <Attribute Pattern="placeholder" IsRegex="false" />
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Dynamic">
                        <Attribute Pattern="tooltip" IsRegex="false" />
                      </Attribute>
                      <Attribute Translatable="true" Visibility="NotVisible">
                        <Attribute Pattern="content" IsRegex="false" />
                        <Tag Pattern="meta" IsRegex="false" />
                        <Conditions>
                          <Condition>
                            <Attribute Pattern="name" IsRegex="false" />
                            <Value Pattern="keywords" IsRegex="false" />
                          </Condition>
                          <Condition>
                            <Attribute Pattern="name" IsRegex="false" />
                            <Value Pattern="description" IsRegex="false" />
                          </Condition>
                        </Conditions>
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Visible">
                        <Attribute Pattern="text" IsRegex="false" />
                        <Tag Pattern="asp:*" IsRegex="true" />
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Visible">
                        <Attribute Pattern="value" IsRegex="false" />
                        <Tag Pattern="input" IsRegex="false" />
                        <Conditions>
                          <Condition>
                            <Attribute Pattern="type" IsRegex="false" />
                            <Value Pattern="text" IsRegex="false" />
                          </Condition>
                          <Condition>
                            <Attribute Pattern="type" IsRegex="false" />
                            <Value Pattern="button" IsRegex="false" />
                          </Condition>
                          <Condition>
                            <Attribute Pattern="type" IsRegex="false" />
                            <Value Pattern="email" IsRegex="false" />
                          </Condition>
                          <Condition>
                            <Attribute Pattern="type" IsRegex="false" />
                            <Value Pattern="search" IsRegex="false" />
                          </Condition>
                          <Condition>
                            <Attribute Pattern="type" IsRegex="false" />
                            <Value Pattern="submit" IsRegex="false" />
                          </Condition>
                        </Conditions>
                      </Attribute>
                      <Attribute Translatable="true" Visibility="Visible">
                        <Attribute Pattern="text" IsRegex="false" />
                        <Tag Pattern="asp:.*" IsRegex="true" />
                      </Attribute>
                    </Attributes>
                    <PreTags>
                      <Tag>pre</Tag>
                      <Tag>script</Tag>
                      <Tag>style</Tag>
                    </PreTags>
                    <PseudoEndTags>
                      <Tag>head</Tag>
                      <Tag>body</Tag>
                      <Tag>table</Tag>
                      <Tag>p</Tag>
                    </PseudoEndTags>
                    <NoTemplateForReconstruction>false</NoTemplateForReconstruction>
                    <ActiveParserVersion>0</ActiveParserVersion>
                  </HtmlConfiguration>
                </ParserConfiguration>
              </SubConfiguration>
            </SubConfigurations>
            <CompactingOption xmlns="">0</CompactingOption>
            <ModulesVersion>
              <item key="HtmlWrapper" value="1" xmlns="" />
            </ModulesVersion>
            <QA>
              <ExcludeByLanguage>
                <AcceptanceRate>0</AcceptanceRate>
                <Enabled>false</Enabled>
                <AllowedLocales>
        </AllowedLocales>
            </ExcludeByLanguage>
          </QA>
          <TrimAsianSpacesOnBuild>false</TrimAsianSpacesOnBuild>
          <AppendSpacesOnBuild>false</AppendSpacesOnBuild>
          <JsonConfiguration xmlns="http://www.wordbee.com/config/json">
            <TrimWhitespaces>true</TrimWhitespaces>
            <ExcludeNoLetterDigit>false</ExcludeNoLetterDigit>
            <IndentJson>true</IndentJson>
            <IsMultilingual>false</IsMultilingual>
            <FileEncoding />
            <NodeSelectors>[{"path":"..*","includeChildren":false,"filterChildren":null,"ishtml":false,"ishtmlEncoded":false,"mappings":{"locales":[],"mapLocaleByDefault":true},"key":null,"min":null,"max":null,"cfs":null}]</NodeSelectors>
            <NodeLanguageMappings>{"locales":[],"mapLocaleByDefault":true}</NodeLanguageMappings>
            <TextPatterns />
          </JsonConfiguration>
        </ParserConfiguration>
        </ParserConfigurations>
        ```
        
2.  ## Install and Configure the Wordbee app in Marketplace
    
    To install the app in your stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all available apps. Hover over the **Wordbee** app and click **Install**.![5-Wordbee-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt295654d31c596798/68acc4f7b3421a7779096ef0/5-Wordbee-App.png)
    4.  In the pop-up window, select the stack where you want to install the Wordbee app, scroll down, accept the **Terms of Service**, and click the **Authorize & Install** button.![6-Wordbee-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40185bcc525382b9/666814beabe4398438d17c3f/6-Wordbee-App-Install.png)
    5.  On the **Configuration** screen, enter the following details:
        1.  **CMS Connector Credentials**:
            1.  Click the **\+ New Configuration** button to add new configuration details.![7-Wordbee-Configuration-Add-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5226b13c5197a05/666814befe5232ff802888e7/7-Wordbee-Configuration-Add-New-Configuration.png)
            2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![8-Wordbee-Config-Add-New-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccdfc8a0b04806b4/666814bec97e38cb7cf1750b/8-Wordbee-Config-Add-New-Project.png)
            3.  After adding the configuration, enter the following details:
                1.  Enter the **API URL**, **API Project Key**, **API Login**, and **API Password** of your Wordbee account retrieved in [Step 1](#retrieve-configuration-details-from-wordbee).
                2.  Click the **Verify Connection** button to authorize the access.![9-Wordbee-Configuration-Add-New-Project-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e08bd82d26777b4/666814be7f40f4b26f284b99/9-Wordbee-Configuration-Add-New-Project-Credentials.png)
                3.  After verifying the connection, you can see the Wordbee Project **Source Language** and **Target Language(s)**.
                4.  **Set as Default**: To set this configuration as the default, click this checkbox.![10-Wordbee-Configuration-Set-New-Project-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd305d952b22027a/666814be0695a9746ab209cc/10-Wordbee-Configuration-Set-New-Project-Settings.png)
                    
                    Alternatively, you can set a configuration as the default by clicking three dots on the top-right side of the configuration section and then selecting **Set as Default**.
                    
                    ![11-Wordbee-Configuration-Project-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9957d4e8875c7e7/666814be19465832724c8a91/11-Wordbee-Configuration-Project-Set-As-Default.png)
                    
                    **Note:** You must set at least one project configuration as the default.
                    
                5.  **Language Presets**: **Language Presets** are pre-configured sets of languages used for creating and managing multilingual content in a content management system.
                    
                    Select the existing **Preset Name** or **Create** the new preset, add the **Language(s)**, and click **Save** to save the language configurations.
                    
                    ![12-Wordbee-Configuration-Set-New-Project-Language-Presets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62996a39ba3091fa/666814bf491b813522505574/12-Wordbee-Configuration-Set-New-Project-Language-Presets.png)
                    
                    Similarly, you can add multiple configurations by following the steps discussed above.
                    
            4.  To delete the configuration, click the three dots and select **Delete Configuration**.![13-Wordbee-Configuration-Project-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95169f3c0dd77e12/666814bf19465869e64c8a95/13-Wordbee-Configuration-Project-Delete.png)
                
                In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
                
                ![14-Wordbee-Configuration-Project-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb27b545b74f7a3a4/666814bffe5232ff432888eb/14-Wordbee-Configuration-Project-Delete-Modal.png)
        2.  Click the **Next** button.
        3.  **Content Type Settings**:
            1.  In the **Exclude Field Types** drop-down, you can choose specific field types to exclude from translation.
            2.  Click the **Manage Fields** button to include or exclude the fields for translation.![15-Wordbee-Configuration-Content-Type-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf74846b279dfcc32/68ba010cbfa11f8973a16aa5/15-Wordbee-Configuration-Content-Type-Settings.png)
                
                In the **Content Type Settings** modal, select the content type. You will notice that all fields are selected by default. Deselect the fields you want to exclude from the translation and click **Save**.
                
                ![16-Wordbee-Configuration-Save-Content-Type-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18399a71dec96b7f/666814ce491b8188b2505578/16-Wordbee-Configuration-Save-Content-Type-Settings.png)
            3.  Also, click the **Enable to stop sending tags** checkbox to not send the tags.
        4.  Click the **Next** button.
        5.  **Additional Settings**:
            1.  **Roles**: Select the **Roles** from this dropdown who can initiate content translation. By default, the **Admin** role is selected. You can add **Content Managers** and/or **Developer** roles as well. However, only Admin can manipulate the app configuration settings.
            2.  **Publish Entry**: If you want to publish the entry automatically after the content has been translated, you can set the **Environment(s)** and **Content Type(s)** for publishing accordingly.![17-Wordbee-Configuration-Additional-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1789539dcdf435ef/666814ce19465868734c8a9b/17-Wordbee-Configuration-Additional-Settings.png)
            3.  **HTML Encode/Decode**: You can enable this toggle button to remove the HTML encoding and decoding for JSON RTE fields.![17-a-Wordbee-Configuration-Additional-Settings-HTML-Encode-Decode](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16d32b11f505553c/68acb13a7e8fa917421310f8/17-a-Wordbee-Configuration-Additional-Settings-HTML-Encode-Decode.png)
            4.  **Language Configuration**: In the **Language Configuration** section, define the content translation languages for Wordbee and Contentstack to avoid any mismatch between the language codes.
                
                All entries from Wordbee languages will be localized into Contentstack languages. For any target languages not selected, the app will use the default language code of the stack.
                
                **Note:** Wordbee supports **2:1 mapping**. You can map two Wordbee languages to a single Contentstack language.
                
                Click the **\+ Add Language** button to add a language.
                
                ![Wordbee-Configuration-Additional-Settings-Language-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56951a4f933e2421/67e0e183b1a1f33f4a3f0322/Wordbee-Configuration-Additional-Settings-Language-Configuration.png)
            5.  **Configure Trigger URL**: Provide the **Trigger URL** to send the entry details along with entry UID, link, translation status, and error, if any. You can use these details to frame it for sending emails.![19-Wordbee-Configuration-Additional-Settings-Configure-Trigger-URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2cf47d9459ac43b/666814ce491b81868d50557c/19-Wordbee-Configuration-Additional-Settings-Configure-Trigger-URL.png)
        6.  Once done, click the **Finish** button. If you want to reset the configuration, click the **Reset Configuration** button.
    6.  After configuring all the details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![20-Wordbee-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt235fe1cc368359ab/666814cf7f40f44cd8284ba2/20-Wordbee-UI-Locations.png)
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click the **Open Stack** button to start using the Wordbee app.
3.  ## Use the Wordbee App within your Stack
    
    To use the Wordbee app in your stack, you can use Full Page Location and Sidebar Widget.
    
    ### Using Wordbee as a Full Page Location App
    
    To use the Wordbee app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Go to the stack dashboard. On the left-hand side primary navigation, you will find the **Wordbee** app icon (as shown below).![21-Wordbee-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf939ad7de1bf8322/68acc65c471af64ba71e8b0e/21-Wordbee-App-Icon.png)
    2.  Click the app icon to view the Wordbee app within your CMS.![Wordbee-Full-Page-UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt753926689a9c667b/68acc4f8c53b046bfef92e7b/Wordbee-Full-Page-UI.png)
    3.  In the **Bulk Translate** page, select the **Content Type** and add entries for translation.![Wordbee-Select-Entries-From-Content-Type-1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9637a160bd93cf8/652770f8d8b0125e63e98a29/Wordbee-Select-Entries-From-Content-Type-1.png)
        
        **Note:** As of now you can add or select **10 entries** from different content types for translation.
        
        ![Wordbee-Select-Entries-From-Content-Type-2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ebb0ac693894556/652770f9580c6b6589ba5fdf/Wordbee-Select-Entries-From-Content-Type-2.png)
    4.  After adding the entries, you can click **Show Selected** to view all the entries added for translation.![Wordbee-Show-Selected-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc75de0c8174b146b/652770f901a3371d0a5eab28/Wordbee-Show-Selected-Entries.png)
    5.  To initiate the translation process, click **Translate**.![Wordbee-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt527998c87e7303d6/652771a3d8b01283b9e98a32/Wordbee-Translate.png)
    6.  In the **Confirm Translation** modal, fill in the details as follows:
        1.  Choose the translation project from the **Select Project** dropdown. You can see the project which is set as default at the time of app configuration in [step 2](#install-and-configure-the-wordbee-app-in-marketplace).
        2.  **Source Language** is by default selected. You can choose between the **Language** (Target Languages) or **Presets** (Language Presets) options.
        3.  Optionally, you can add **Job References** settings such as **Deadline Date**, **Job comments**, **Live Environment URL**, **Internal Comments**, and **Image Source File URL.**
            
            **Note:** The **Deadline Date** format is **mm:dd:yyyy**, and the time format is **hh:mm:ssZZ**, where ZZ refers to the time zone.
            
            ![confirm-translation-select-language-project-job-reference.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf169cb1c59feacb4/684806734799480276ba3152/confirm-translation-select-language-project-job-reference.png)
    7.  (Optional) Select the **Disable Pre-translated Content** checkbox to flag and prevent the use of any existing pre-translated content.![Wordbee-Full-Page-Disable-Pretranslated-Content-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2131432a2340fd3/68becef17823e2284537c3af/Wordbee-Full-Page-Disable-Pretranslated-Content-Translate.png)
    8.  Click the **Translate** button to start the translation.![Full-Page-Translate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c5e2e118e9cff84/68becd497461652d1fc32286/Full-Page-Translate.png)
        
        **Note:** You can translate up to **500 entries** (including the locale versions) at once.
        
    9.  To view the translation status of the entries, click **Job Status** from the left panel, and then choose the project from the **Select Project** drop down.![28-Wordbee-Job-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21431ac5ffda3740/666814ce134a34e29667b723/28-Wordbee-Job-Status.png)
        
        **Note**:
        
        -   You can also view the translation status in the Wordbee project dashboard.
        -   Once the translation status changes to Ready, you can retry the translation jobs.
        
    10.  Click **Error Logs** to view the error logs in detail.![Wordbee-Error-Logs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ca3c8666490abfe/652770f8580c6b18a4ba5fdb/Wordbee-Error-Logs.png)
         
         After successful translation, you can view the translated content in the entries.
         
    
    ### Using the Wordbee App as a Sidebar Widget
    
    To use the Wordbee app as a Sidebar Widget, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:
    
    1.  Go to the stack dashboard and navigate to the **Entries** page, then open the entry you want to translate. Click the **Apps** icon from the right navigation panel.![Wordbee-Sidebar-Apps-Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e76ca84b0d999e3/68becd495f1488b8fd08baa9/Wordbee-Sidebar-Apps-Icon.png)
    2.  Select **Wordbee** from the dropdown and fill in all the fields under the **Translate** tab.
        
        1.  Choose the translation project from the **Select Project** dropdown. You can see the project which is set as default at the time of app configuration in [Step 2](#install-and-configure-the-wordbee-app-in-marketplace).
        2.  **Source Language** is by default selected. You can choose between the **Language** (Target Languages) or **Presets** (Language Presets) options.
        3.  Optionally, you can add **Job References** settings such as **Deadline Date**, **Job comments**, **Live Environment URL**, **Internal Comments**, and **Image Source File URL**.
            
            **Note:** The **Deadline Date** format is **mm:dd:yyyy**, and the time format is **hh:mm:ssZZ**, where **ZZ** refers to the time zone.
            
        
        ![Wordbee Sidebar Widget Translate Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2be551acfa3c7c3/666814cfe8556538732b8d49/30-Wordbee-Sidebar-Widget-Translate-Fields.png)
    3.  (Optional) Select the **Disable Pre-translated Content** checkbox to flag and prevent the use of any existing pre-translated content.![Sidebar-Widget-Disable-Pretranslated-Content-Translate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt048983928abf56aa/68becd4911efa969a65c9859/Sidebar-Widget-Disable-Pretranslated-Content-Translate.png)
    4.  Click the **Manage Fields** button to include or exclude the fields for translation.![Sidebar-Widget-Manage-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4c5b5f99a1bbcd7/68becd493af6a33763b595f6/Sidebar-Widget-Manage-Fields.png)
    5.  In the **Manage Fields** modal, all fields are selected by default. Deselect the fields you want to exclude from the translation and click **Save**.
        
        The field types Reference, Select, Number, Date, Tags, and Taxonomy are not available for selection in the Manage Fields modal.
        
        **Note:** **Manage Fields** settings will be saved for only one instance.
        
        ![manage-fields-modal-selected-content-types-for-translation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9af60b948207b086/68488b4445f69a5b8f938fee/manage-fields-modal-selected-content-types-for-translation.png)
    6.  Click the **Translate** button to start the translation.![Wordbee-Sidebar-Widget-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14f0f7dcd1c2560d/68becef1c6351b2359142e58/Wordbee-Sidebar-Widget-Translate.png)
    7.  You can view the translation status under the **Status** tab by selecting a project using the **Select Project** drop down.![34-Wordbee-Sidebar-Widget-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt395531e9970f661a/666814db76fac400cdc0fe69/34-Wordbee-Sidebar-Widget-Status.png)
        
        After successful translation, you can view the translated content in the entries.
        
        **Note:** Once the translation status changes to Ready, you can retry the translation jobs.
        
    
    #### Project Naming Convention
    
    To ensure clear and consistent identification, each project name in the **SourceFile** follows a three-part structure: **Entry Title**, **Content Type UID**, and **Entry ID**.
    
    This structure makes it easier to identify and track files throughout the translation workflow, helping maintain consistency and efficiency across multiple localization projects.
    
    By default, only the **first 20 characters** of the Entry Title are shown in the project name. To display the full title, you need to perform the following steps in Wordbee:
    
    1.  Log in to the Wordbee (Beebox) account.
    2.  Go to **Settings** from the top navigation panel, search for **Custom Fields**, and click **Configure**.![Wordbee-Naming-Convention-Configure-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc719be8fe4be0ddd/67e0e182a6d88eb456053f50/Wordbee-Naming-Convention-Configure-Custom-Field.png)
    3.  In the **Jobs** tab, click the **Add** button, then enter **Contentstack Entry Title** as the **Field name**, select **Text field** as the **Type of field**, and click **OK**.![Wordbee-Naming-Convention-Contentstack-Entry-Title](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ebb490837fbfab2/67e0e183460eb4a2ca9482b5/Wordbee-Naming-Convention-Contentstack-Entry-Title.png)
    4.  In your Wordbee project under **Beebox**, go to **Job Custom Fields** and select **Contentstack Entry Title** next to **CustomStr1**.![Wordbee-Naming-Convention-Set-CustomStr1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9e2cfecc8bbf98b/67e0e183a6d88e1180053f54/Wordbee-Naming-Convention-Set-CustomStr1.png)
        
        **Note:** **CustomStr1** must be the Custom field ID.
        
    5.  Finally, click the **Edit View** option in the Jobs Dashboard and enable **Contentstack Entry Title**.![Wordbee-Naming-Convention-Customize-Columns](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80dec58afb55c4d8/67e0e18317f7b498810d0bf7/Wordbee-Naming-Convention-Customize-Columns.png)
    6.  Now you can view the full Entry Title in the Contentstack Entry Title custom field.![Wordbee-Naming-Convention-View-Full-Entry-Title](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2642415b87215be5/67e0e18320a3dc22d0f8325f/Wordbee-Naming-Convention-View-Full-Entry-Title.png)
