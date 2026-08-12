---
title: "Contact Us Page"
description: "The Contact Us content model is structured to provide information about a website's 'Contact Us' page, such as name, address, phone, email, and social links."
url: /headless-cms/contact-us-page
---

# Contact Us Page

## Contact Us Page

A "Contact Us" page on a website provides visitors with a way to contact the website owner or operator. It typically includes the website owner's or operator's name, address, phone number, email address, and social media handles. Some Contact Us pages also include a contact form that visitors can fill out to send a message to the website owner or operator.

Furthermore, the "Contact Us" page serves as a platform where visitors to the website can gain insight into the company's core values, priorities, and its overall approach to conducting business.

Here are some of the elements that a Contact Us page should typically include:

-   The website owner's or operator's name, address, phone number, and email address
-   A contact form
-   Social media handles
-   A brief message about the website or organization  
    

Let’s understand how this model will assist you create your company’s “Contact Us” page.

1.  ## Analyzing Requirements for the Contact Us Page
    
    The Contact Us content model contains the following main sections:
    
    -   The “Primary Contact Details” Group Field
    -   The “Other Locations” section for address of the organization
    -   The “Section with HTML Code” Global Field
    -   The “Contact Us form” in case the user has any message/feedback.
    
    Here’s how our “Contact Us” page will look like on your website
    
    ![Analyzing_Requirements_for_the_Contact_Us_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt091a26919c107c2e/65360bc559c1b948d3ddfdf8/Analyzing_Requirements_for_the_Contact_Us_Page.png)
2.  ## Identifying Content Model
    
    Let's identify the fields that build up your Contact Us Page content type that you see in the above step.
    
    ![Identifying_Content_Model_for_the_Contact_Us_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt571cd3f64f53d863/65360bc53775885f0f648b08/Identifying_Content_Model_for_the_Contact_Us_Page.png)
3.  ## Developing Content Type
    
    The “Contact Us Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.
    
    **Contact Us Page** Content Type:
    
    -   **Title**: The [Title](/docs/headless-cms/title) field is where you will provide your webpage a unique name. It should be clear and concise, and accurately reflect the contents of the webpage. The title field is a required field.
    -   **Primary Contact Details**: This is the first section on your webpage which contains the contact details of the owner/administrator of the webpage. It is a [Reference](/docs/headless-cms/reference) field that refers to the **Contact** content type as explained in the section below.
    -   **Page Components**: This content type hosts different sections that you see in your webpage. The field is a [Modular Block](/docs/headless-cms/modular-blocks/) that contains three other Modular Blocks. Let’s take a closer look at each one.
        -   **Other Location**: This is the first of the three subblocks and hosts the location details. It includes the following fields:
            -   **Other Locations**: In this [Group](/docs/headless-cms/group/) field you will find the following information:
                -   **City/Country:** This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field designated for city or country name.
                -   **Address**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field designated for the full address of the organization.
                -   **Location Image**: This [File](/docs/headless-cms/file/) field allows you to select an image of the location and add it to the entry. The ideal file size for the location image is less than 100 KB and the file format should be PNG.
                -   **Maps Location**: This [Link](/docs/headless-cms/link/) field allows you to add a location name as a title and URL for redirection.
        -   **Section with HTML Code**: This is the second block that contains **Section with HTML Code** [Global](/docs/headless-cms/global/) field which includes the following components:
            -   **Title**: This is a [Title](/docs/headless-cms/title) field designated for the title of this specific section.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field for the detailed description of the HTML code.
            -   **HTML Code**: This is a [Custom](/docs/headless-cms/custom/) field with [Ace Editor](/docs/marketplace/ace-editor/) as an extension.
            -   **Is HTML Code Left Aligned?**: This is a [Boolean](/docs/headless-cms/boolean/) field indicating whether the HTML Code is left aligned or right aligned.
        -   **Contact Us Form**: The Contact Us Form is where the user will put in the details with a feedback/request for the owner/administrator. This is the third and last block that has the following components:
            -   **Contact Fields**: This is a [Group](/docs/headless-cms/group/) field with the following information:
                -   **Title:** This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that displays the group title for the contact field. This title can be "First Name," "Last Name," "Email," or other relevant descriptors.
                -   **Placeholder Text:** This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field where you can input the placeholder text for the contact field. Here is where you will provide details associated with the title.
            -   **Short Detailed Message**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field designed to store user messages, which may include requests or feedback that the user intends to convey to the owner or administrator.
            -   **Submit**: This is a [Link](/docs/headless-cms/link/) field that allows you to specify the title and URL for the submission button.
    -   **SEO**: This is the [Global](/docs/headless-cms/global/) field with the following components:
        -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that allows you to enter the meta title of your webpage, which should be between 120 and 160 characters.
        -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field that allows you to add the meta description of your webpage.
        -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that allows you to add the meta keywords of your webpage.
        -   **Enable Search Indexing**: This is a [Boolean](/docs/headless-cms/boolean/) field that allows you to enable or disable search indexing for your webpage.
    
    **Contact** Content Type:
    
    The **Contact** content type holds the contact information for the user. It is referenced in the **Contact Us** content Type as **Primary Contact Details.** Let us take a closer look at what fields are used in this content type:
    
    -   **Title**: This is a [Title](/docs/headless-cms/title) field where you will provide a unique name for your contact entry. It is a mandatory field and must be clear and concise.
    -   **Address**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field where you will provide the full address of the company.
    -   **Contact Number**: This is a [Number](/docs/headless-cms/number) field where you can store the contact numbers of the organization. You can enter multiple contact numbers here.
    -   **Email Address**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field where you enter the company’s email Id.
    

This completes the creation of the “Contact Us Page" content model.

![contact-us-page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90b80c0cb1a485c0/65ea8db39a2912b263ce5d3d/contact-us-page.png)

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
