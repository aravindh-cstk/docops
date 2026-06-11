# Changelog

## **Changelog**

| Version | Date | Description |
| :---: | :---: | ----- |
| 1.0.0 | July 10, 2025 | Initial version introduced to the team |
| 1.0.1 | September 9, 2025 | Added [highlight box](#annotations-and-highlights) details in Visuals and Media Updated the [What’s New](#what’s-new-message-template) message template in Templates and Examples |
| 1.0.2 | September 24, 2025 | Updated the [headings](#writing-clear-titles-and-headings) section in Structuring Technical Documentation |
| 1.0.3 | November 5, 2025 | Updated the [Creating a Documentation Plan / Scope](#creating-a-documentation-plan-/-scope) section with content to Include the “Why” and “When” — Not Just “How” in Structuring Technical Documentation  |

# Introduction

# Contentstack Technical Documentation Style Guide

## **Introduction**

Effective documentation ensures users can fully leverage Contentstack’s platform. This guide provides clear rules and best practices to create consistent, high-quality content that aligns with Contentstack’s brand and engages its audience.

Whether you're an experienced technical writer or a first-time contributor, this guide provides the rules and best practices needed to deliver exceptional content that aligns with Contentstack's mission and vision.

### **Purpose of This Style Guide**

The **Contentstack Technical Documentation Style Guide** is designed to establish consistent standards for creating clear, concise, and user-focused technical documentation. It serves as a comprehensive resource for writers, editors, and contributors, ensuring that all content aligns with Contentstack's brand identity, tone, and quality expectations. By adhering to this guide, teams can produce documentation that is not only accurate and accessible but also enhances the overall user experience.

**This guide aims to**:

* Ensure consistency across all technical documentation.

* Support writers in effectively communicating complex concepts to diverse audiences.

* Promote best practices in technical writing, accessibility, and SEO.

### **Scope and Audience**

This style guide is intended for all individuals involved in the creation, editing, or review of Contentstack technical documentation. This includes:

* Technical writers

* Team Leads

* Marketing teams

The primary audience for this guide is internal teams responsible for delivering user-centric documentation that supports Contentstack’s enterprise and developer users. 

### **Relationship to Other Style Guides**

While the Contentstack Technical Documentation Style Guide is tailored to meet the unique needs of Contentstack, it draws on widely recognized editorial standards, including:

* The **Chicago Manual of Style** for detailed grammar and style principles.

* **Associated Press (AP) Stylebook** for clarity, brevity, and journalistic integrity.

This guide takes precedence in areas where Contentstack-specific standards or preferences are outlined. By combining established best practices with Contentstack’s unique voice, this guide ensures that documentation is both professional and brand-aligned.

# Brand Voice and Tone

## **Brand Voice and Tone**

At Contentstack, our voice is the embodiment of who we are—innovative, approachable, and credible. It ensures consistency across all communications, making our documentation not just informative but also reflective of our brand’s values. By adapting our tone to resonate with diverse audiences, we aim to engage, educate, and empower readers effectively.

### **Contentstack Brand Overview**

Contentstack is a leader in Agile Content Management, trusted by global enterprises to deliver dynamic digital experiences. Our brand represents innovation, reliability, and thought leadership in the headless CMS space. Every piece of documentation reflects our commitment to empowering marketers and developers to collaborate effectively, driving exceptional customer journeys. As a founding member of the MACH Alliance, Contentstack champions open, composable technology built on the MACH principles: Microservices-based, API-first, Cloud-native SaaS, and Headless.

Our documentation aims to showcase these values by being clear, professional, and solution-oriented. Readers should feel confident in the information provided, knowing it aligns with our mission of delivering "Care Without Compromise™."

### **Voice Principles (Professional, Friendly, Cutting-edge)**

Our voice embodies the essence of Contentstack’s brand, striking a balance between authority and approachability. Here are the key principles guiding our voice:

* **Professional**:  
  We maintain a formal, polished tone that demonstrates our expertise in the CMS space. However, we avoid unnecessary jargon, ensuring clarity for technical and non-technical audiences alike.

  **✅ Do:** “You can configure roles and permissions to manage access at both the stack and organization levels.”

  **❌ Don’t:** “Utilize hierarchical authorization layers to provision user-level access control paradigms.”


* **Friendly**:  
  Our tone is welcoming and engaging. While professional, we strive to make our content accessible and easy to understand, offering assistance without being patronizing.

  **✅ Do:** “Need help getting started? Follow these quick steps to launch your first stack.”

  **❌ Don’t:** “This should be obvious, but here’s how you create a stack.”

* **Cutting-edge**:  
  Contentstack is at the forefront of innovation. Our voice reflects this by embracing modern, forward-thinking language that positions us as leaders in the digital content space.

  **✅ Do:** “Leverage our headless CMS to power seamless digital experiences across any channel.”

  **❌ Don’t:** “Our CMS is good for websites and apps.”

In all communications, we prioritize the reader's experience, ensuring content is not only informative but also enjoyable to read.

### **Tone Variations for Different Audiences**

Contentstack communicates with diverse audiences, including enterprise marketers, IT professionals, developers, and content managers. While our voice remains consistent, the tone is adapted to suit specific audience needs.

1. **For Enterprise Marketers**:

   * **Tone**: Strategic and results-driven.

   * **Focus**: Highlight the business impact of using Contentstack, such as faster time to market, omnichannel reach, and simplified workflows.

   * **Style**: Use language that conveys Return on Investment (ROI), efficiency, and ease of use.

   * **Example**: *Streamline your marketing operations and deliver superior customer experiences effortlessly with Contentstack's modular content approach.*

2. **For IT Professionals**:

   * **Tone**: Technical, precise, and solutions-oriented.

   * **Focus**: Address integration capabilities, system reliability, scalability, and enterprise-grade security, ensuring confidence in Contentstack's architecture and performance.

   * **Style**: Use direct, jargon-minimized language, presenting technical details in a way that underscores efficiency and ease of use.

   * **Example**: *Leverage Contentstack’s API-first architecture to integrate effortlessly with your tech stack, ensuring enterprise-grade performance and unmatched scalability.*

3. **For Developers**:

   * **Tone**: Collaborative and empowering.

   * **Focus**: Emphasize flexibility, developer autonomy, and cutting-edge features.

   * **Style**: Use concise, straightforward language with code samples or technical insights where appropriate.

   * **Example**: *With Contentstack’s robust APIs and SDKs, you can build dynamic, scalable digital experiences without constraints.*

4. **For Content Managers**:

   * **Tone**: Supportive and practical.

   * **Focus**: Highlight ease of use, efficiency, and the ability to manage complex content workflows effortlessly.

   * **Style**: Use straightforward, instructional language, focusing on features that simplify daily tasks like content creation, localization, and approvals.

   * **Example**: *Easily manage multi-regional content and streamline approval workflows with Contentstack’s intuitive interface and smarter workflows.*

By tailoring our tone to each audience, we ensure all users—from decision-makers to hands-on practitioners—feel informed, supported, and empowered to maximize the value of Contentstack.

# Structuring Technical Documentation

## **Structuring Technical Documentation**

A well-structured document ensures that readers can quickly find the information they need while maintaining clarity and consistency. This section provides guidelines for organizing technical documentation effectively.

### **Creating a Documentation Plan / Scope** {#creating-a-documentation-plan-/-scope}

Before writing, develop a structured documentation plan. A good plan ensures consistency, accuracy, and ease of navigation. Follow these steps:

1. **Conduct a Demo Call with the Dev Team**

   1. Connect with the developer to understand the feature and discuss complete working and flow of the feature.

   2. Check if API/SDK docs are needed.

   3. **Identify the Target Audience**

      1. Define whether the content is for developers, content managers, system administrators, or business users.

      2. Adjust tone, examples, and technical depth accordingly.

   4. Check for the release date.

2. **Determine the Scope**

   1. Outline what the feature/product documentation will cover. Refer to the [Scope](https://docs.google.com/spreadsheets/d/1fq_J0C-IcJgMYqXEbcO8wURu98KPjuyOk5CT5hsoYbo/edit?gid=1177478891#gid=1177478891) template.

   2. Define each article’s objective—the points to be covered.

3. **Include the “Why” and “When” — Not Just “How”**

   1. Clearly state:

      1. Why the feature exists and what problem it solves

      2. When a user should use it (vs. alternatives)

      3. Common use cases in production environments

   2. This builds trust and helps users choose the right approach for their scenario.

   **Tip**: Use a “Use Case” or “When to Use This” subheading at the start or end of the document.

4. **Choose the Right Structure**

   1. Use a modular approach (reusable, independent, and well-structured sections) to allow easy updates and scalability.

   2. Follow a logical sequence, such as an introduction, steps, key benefits (optional), conclusion.

   3. Refer to the [Templates and Examples](#templates-and-examples) section for more information.

   **Suggested flow:**

1. **Introduction** – What the feature is and why it matters

2. **Use Cases** (recommended) – When and where to use it

3. **Prerequisites** – Roles, permissions, setup required

4. **Step-by-step instructions** – Clear and concise guidance

5. **Code Samples** – Accurate, copy-paste-ready, and contextual

6. **API Reference (if applicable)** – Link to parameter-level details

7. **Next Steps / Additional Resources** – Further reading or related guides

### **Organizing Sections and Subsections**

Proper organization improves readability and allows readers to navigate content effortlessly. Follow these best practices:

1. **Logical Flow of Information**

   1. Start with broad concepts before moving into details (e.g., Introduction → Steps → Configuration → Advanced Use Cases)

   2. Follow a hierarchical structure:

      1. **H1:** Document Title

      2. **H2:** Major Sections

      3. **H3:** Subsections

      4. **H4:** Nested Details (if necessary)

2. **Standard Documentation Sections**

   Most Contentstack technical documents should follow this structure:

   1. **Introduction:** Overview and  purpose

   2. **Prerequisites** *(optional)***:** Any software, permissions, or configurations needed

   3. **Step-by-Step Instructions:** Clear and concise steps to perform the action (CRUD operations)

   4. **Code Samples** *(optional)***:** Well-formatted and tested code snippets

   5. **API References** *(if exists)*: Add API request links

   6. **Additional Resources:** Further reading or related guides

3. **Avoiding Section Overload**

   1. Keep sections manageable (3-7 subsections per major heading)

   2. Avoid excessive nesting (prefer H3 over deep H4 or H5)

   3. Use **tables of contents** (listing all major steps) for longer documents

### **Writing Clear Titles and Headings** {#writing-clear-titles-and-headings}

1. **Title Best Practices**

   1. Titles should be **descriptive yet concise** (max 60 characters)

   2. Avoid vague phrases like "Understanding" or "Guide to"—opt for direct wording.

   3. **Example**:

      1. ❌ *Understanding How to Use the API*

      2. ✅ *Using the Contentstack API*

2. **Heading Formatting**

   1. **H1** and **H2** headings **must** be in **Title Case**

   2. Use **Sentence case** for **H3** and **lower-level headings (H4, H5, etc.)**.

   3. **Example**:

      1. H2: Setting Up a Workflow

      2. H3: Choose the workflow type

      3. H4: Select a trigger condition

   4. **Why Not All Headings Should Be Title Case**

      1. Using **Title Case for every heading** (including H3–H5) can make the page feel visually cluttered and harder to scan.

      2. Sentence case for lower-level headings aligns with:

         1. Contentstack's voice (friendly yet professional)

         2. Web readability standards

         3. Leading tech documentation practices (e.g., GitHub, Google Developer Docs)

3. **Avoiding Unnecessary Headings**

   1. If a section contains only a single paragraph, consider merging it into the parent section.

   2. Do not use headings solely for visual styling—headings should reflect the document’s hierarchy.

### **Formatting Lists**

#### **Ordered vs. Unordered Lists**

1. Use **ordered lists** for steps or sequential tasks for example:

   1. Click **Settings**.

      2. Select **API Keys**.

      3. Copy the generated key.

   2. Use **unordered lists** for non-sequential information for example:

      * Features include:

        * API-first architecture

        * Flexible content modeling

        * Omnichannel delivery

   3. Do **not** use an ordered list when there is no inherent sequence.

      1. Content modeling

      2. API-first architecture

      3. Omnichannel delivery  
         *(No natural order exists here—use an unordered list instead.)*

#### **Capitalization and Punctuation in Lists**

1. **Capitalization Rules**

if an item in a list forms a complete sentence, it should follow standard sentence rules:

* The letter of the first word should be capitalized (as in any sentence).

* It should end with a period (.)

  **Examples:**

  ✅ **Correct (Full sentences in a list)**

* Contentstack enables developers to integrate third-party services.

* It provides a seamless content experience.

* Users can manage multiple environments efficiently.

2. **When This Rule Does NOT Apply**

   If the list contains **short phrases, commands, or single words that are not full sentences**, capitalization and punctuation are not required.

   ✅ **Correct (Short phrases that are not full sentences):**

* API-first

* Cloud-native

* Headless CMS

  ❌ **Incorrect (Unnecessarily capitalized and punctuated short phrases):**

* API-First.

* Cloud-Native.

* Headless CMS.

### **🎯 Key Takeaway**

Don’t just tell users **how** to do something. Tell them:

* **Why** they’d do it

* **When** it applies

* **What** real-world scenarios it helps with

This bridges the gap between **documentation** and **user enablement**.

# UI Texts and Error Messages

## **Best Practices for UI Texts and Error Messages**

When users engage with the product, they can perform several actions. From the end user’s perspective, it is important to keep them informed about the status of their actions.

These messages are important for users, and as Technical Writers, the onus is on us to ensure this is communicated to them in **simple**, **clear**, and **precise** texts.

## UI Tooltips

In **UI tooltips**, **sentence case** is the recommended standard in most modern design systems (e.g., Material Design, Apple Human Interface Guidelines, Microsoft Fluent).

So, you should use:

✅ Cancel schedule (sentence case)

❌ Cancel Schedule (title case)

**Reason:**

Sentence case improves readability and creates a more natural, conversational feel. It’s also more consistent with action buttons and status labels commonly seen across modern platforms.

## Casings

Maintain consistent casing styles across all UI elements to improve readability and reinforce Contentstack’s visual language.

| UI Element Type | Casing Style | Example |
| ----- | ----- | ----- |
| **CTA buttons** | Title Case | Save, Create New Rule |
| **Dropdown actions** | Title Case | Delete Rule, Edit |
| **Form field options** (e.g., conditions in dropdowns) | Sentence case | Matches, Starts with |
| **Tooltips** | Sentence case | Open in new tab |
| **Modal titles and section headings** | Title Case | Field Visibility Rules |

**✅ Guidelines for Consistency**

* Use **Title Case** for:

  * CTA buttons

  * Dropdown menu items that **trigger actions**

  * Modal titles and section headings

* Use **Sentence case** for:

  * Inline dropdowns related to form logic (e.g., condition builders)

  * Tooltips and helper text

## When and Why Messages Are Needed

When a user performs any action in our products, the following states can require communication:

* **Success**: To confirm an action was completed.

* **Error**: To explain what went wrong and how to fix it.

* **Confirmation/Warning**: To ensure users understand the consequences of a significant or irreversible action.

* **Waiting**: To inform users of ongoing background processes.

## General Messaging Guidelines

Effective UI/UX messaging bridges the gap between system and user, offering clarity, reassurance, and direction. What elevates a message from functional to *great* is its ability to inform, guide, and comfort the user while maintaining brand tone.

**Every message should aim to:**

* Be **specific** about the situation.  
* Use the **right tone**—conversational yet professional.  
* Offer **next steps**, where applicable.

## Structure of an Effective Message

* **Headline**: Summarizes the message or issue. Use sentence-style capitalization (capitalize only the first word and any proper nouns) for all UI text unless you’re using a proper name or product title.

  **Example**: *“Failed to update Content Type”* or *“Request in progress”*

* **Body**: Explains the context, cause, and resolution. 

  **Example**: *“We couldn’t publish your changes because another team member is editing this entry. Please try again later.”*

* **Call to Action (CTA)**: Offers the next step. 

  **Example**: *“Try Again”or “Go to Settings”*

## Crafting with Clarity

### Do’s

* Use **simple, inclusive language**

* Avoid jargon and abstract messages

* Provide actionable guidance

### Don’ts

* Don’t blame the user

* Don’t overwhelm with technical detail

* Don’t use ALL CAPS or exclamation overloads

* Don’t use vague, generic phrasing like “Something went wrong.”

## UI / UX Messages by Scenario

### Success Messages

These messages should appear when the user completes an action successfully. For example, content type created successfully, webhook is now enabled, and so on.

A post-action success message lets the user know that they have achieved their goal. **Your message should clearly indicate the user that the intended action was a success.**

**Example**:

*“Your entry has been queued for publishing. You can view it under the Publishing Queue.”*

#### Do’s

* Be clear and celebratory without being overly casual.

* Offer logical next steps if relevant.

#### Don’ts

* **Avoid being overly vague**: Task is complete

* **Don’t overload with info**: Your project was saved, data updated, logs recorded…

* **Avoid unnecessary noise**: Yay\! Everything is awesome\!\!\!

### Error Messages

Best error messages are the ones that never show up. However, as users interact with the product, errors are inevitable and eventually they will show up when the user is unable to complete the action.

This could be due to an error at the user, app, or the server end. For users, errors are annoying and poorly written error messages can annoy them even further, so keep them **short**, **simple**, and **clear**.

**Examples**:

* *“The API request failed because your API key is invalid. Please check and re-enter your key.”*

* *“User details not available. Please contact support.”*

#### Edge Case Message

**When no specific error detail is available***:*

*“Something went wrong. Please try again later or contact support if the issue persists.”*

#### Do’s

* Be specific about the error.

* Provide actionable next steps.

* Use plain, respectful language.

#### Don’ts

* Don’t say “Something went wrong” with no context.

* Don’t blame the user.

* Don’t include raw error codes.

### Confirmation and Warning Messages

When the user performs an action which will be irreversible a confirmation/warning message should be displayed to avoid giving any unpleasant surprises to users.

Your message should clearly convey the consequences of the action the user is about to perform.  For irreversible, mention clearly that it cannot be undone.

The thumb rule for confirmation and warning messages should be that:

1. The headline asks about a specific action in a clear way.

2. The explanation (body) tells the users what are the consequences of their action.

**Example**:

*\[Headline\]* “Delete Entry”

*\[Body\]* “This will permanently delete the entry. This action cannot be undone.”

*\[CTA\]* “Cancel” | “Delete Entry”

#### Do’s

* Be clear about what’s happening and the impact.

* Use descriptive CTA labels like “*Delete*”, “*Cancel*”.

#### Don’ts

* Avoid “Are you sure?” without context.

* Avoid emotional or anxiety-triggering prompts.

* Avoid overly technical impact statements like “This triggers a cascading action…”

### Waiting Messages

When the user is waiting for the operation to complete when he has initiated an action, a waiting message should appear.

**Examples**:

* “Please wait while we upload your assets.”

* “We’re importing your content types. This may take a moment.”

#### Do’s

* Inform users of what’s happening and manage expectations.

#### Don’ts

* Don’t leave users unsure if the system is working.

## Phrasing Tips for Inclusive, Clear Messaging

* **Use simple, conversational language**

  * ✅ *“App details saved successfully”*

  * ❌ *“Installation complete”*

* **Avoid blame and negativity**

  * ✅ *“Please enter a name for the app.”*

  * ❌ *“You did not enter the app name.”*

  * ✅ *“Please provide valid API parameters.”*

  * ❌ *“The API parameters you provided contain errors.”*

* **Be concise and helpful**

  * ✅ *“Please use the email address in format yourname@example.com.”*

  * ❌ *“The email address you provided doesn’t meet the required format…”*

  * ✅ *“An app with the same name already exists. Please use a different name and try again."*

  * ❌ *“Cannot rename the app. Use a different name."*

## Additional Best Practices

* Never use **ALL CAPS** in messages.

* Avoid **emojis**, **exclamatory text**, and **overly casual tone**.

* Use **specific headlines** for confirmations (not just “Are you sure?” or “Do you want to?”).

* Avoid punctuation in CTA labels (e.g., use *“Create Action”*, not *“+ Create Action”*).

* Always suggest next steps in case of failure.

* Review message placement with UX—clarity is lost if messages are hidden or poorly positioned.

# Writing Conventions

## **Writing Conventions** {#writing-conventions}

### **General Grammar Rules**

1. #### **Active vs. Passive Voice**

   Use an active voice whenever possible. It improves clarity and keeps content engaging and easy to understand. Passive voice can obscure meaning and add unnecessary complexity.

* ✅ **Active**: “Developers configure the webhook.”

* ❌ **Passive**: “The webhook is configured by developers.”

  Use passive voice only when the actor is unknown, irrelevant, or better left unstated.

2. #### **Gender-Neutral Language**

   Avoid gendered language unless gender is relevant to the context. Use singular “they,” “them,” and “their” when the subject’s gender is unknown or generic.

* ✅ Use: “Each user must update their profile.”

* ❌ Avoid: “Each user must update his profile.”

  Use terms like “chairperson” instead of “chairman” and “server administrator” instead of “server guy.”

3. #### **“On” or “In” left navigation panel**

   In technical documentation, “in the left navigation panel” is generally preferred because it accurately conveys that the item is located within the panel, not on its surface. This phrasing aligns with standard UX terminology and is widely recognized by users interacting with software interfaces.

   1. **Example**:

      1. **Correct**: Click the Assets icon in the left navigation panel.

      2. **Incorrect**: Click the Assets icon on the left navigation panel.

   2. Use “on” only when referring to something that appears on the surface of a visible element, such as:

      1. Click the button on the toolbar.

      2. Click the link on the page.

   3. For navigation panels, “in” is the most appropriate choice.

### **Punctuation Guidelines**

1. #### **Use of Serial (Oxford) Comma**

   Always use the Oxford comma for clarity, especially in complex lists.

* ✅ “The API supports create, update, and delete operations.”

* ❌ “The API supports create, update and delete operations.”

2. #### **Bullet Points**

   To ensure consistency and readability in bulleted lists, apply the following punctuation rules:

1. **If all bullet points are single-line phrases or fragments**, **do not** use periods at the end.

   	✅ Correct:

* API-first

* Cloud-native

* Modular content

2. **If even one bullet point contains two sentences or a complete sentence**, **use periods for all bullet points** in that list.

   ✅ Correct:

   * Contentstack enables developers to integrate third-party services.

   * It supports omnichannel delivery.

   * Users can localize content with minimal effort.

   * Avoid mixing formats in the same list.

   **Note**: Never mix sentence fragments and complete sentences in the same list without aligning their punctuation.

   This rule helps maintain visual harmony and sets user expectations as they read through the list.

3. #### **Em Dash, En Dash, and Hyphen Usage**

* **Em dash (—)**: Use to emphasize a break in thought. **Do not** leave spaces around the em dash. Use sparingly to avoid choppy flow.

  * Example: “This option—though rarely used—can be helpful.”

		**Note**: Use sparingly. Can be replaced with a comma. **DO NOT use it in UI Texts**\!

* **En dash (–)**: Use to indicate ranges (dates, numbers).

  * Example: “2021–2025”, “Steps 1–3”

* **Hyphen (-)**: Use to join compound words and modifiers.

  * Example: “real-time updates”, “role-based access”

  * When using hyphenated words, keep the second letter in lowercase. For example: “How-To guides” must be “How-to guides”

  ![][image1]

4. #### **Quotation Marks and Nested Quotes**

   Use smart quotes (“ ”) throughout documentation content for consistency, readability, and professionalism. For example, 

   **Example**: Click the “Submit” icon to continue. (Part of the UI or not a visible button)

   **In American English**:

* Commas and periods go **inside** quotation marks.

* Colons and semicolons go **outside** quotation marks.

* Question marks and exclamation points go **inside** if part of the quote, otherwise **outside**.

  Use straight quotes (" and ') exclusively in code blocks, inline code, command-line input/output, and code samples.

  **Note**: Smart quotes break code syntax and may cause copy-paste errors.

  **Example**: Type console.log("Hello, world\!") in the terminal.

**Exception**: You can use Single smart quotes inside another quoted phrase:

**Example**: A warning appears: “You are about to delete ‘Project Alpha’. This action cannot be undone.”

### **Spelling and Capitalization**

1. #### **Preferred Spelling (e.g., “email,” “web”)**

   Follow American English spellings and refer to the [Merriam-Webster Dictionary](https://www.merriam-webster.com/) as the authoritative source.

   **Preferred terms for Contentstack include**:

* email (not e-mail)

* web, internet, online (lowercase)

* CMSs (plural of CMS)

* plugin (not plug-in)

* add-on

* FinTech, FinServ

* ebook (lowercase, except at sentence start or in title case)

  **Avoid**:

* “+” to mean “and” or “more than”

* “X” to mean “times” (use “three times,” not “3X”)

2. #### **Title Case and Sentence Case Usage**

* Avoid capitalizing:

  * Articles (*a*, *an*, *the*)

  * Short prepositions (*in*, *of*, *for*)

  * Conjunctions of three or fewer letters (*and*, *or*, *but*)

  * Use tools like [Title Case Converter](https://titlecaseconverter.com/) with the Chicago style option.

* Use **sentence case** for:

  * Alt text

  * Image captions

  * Table descriptions

  * Notes and inline phrases

3. #### **Capitalization in Titles and Section Headings**

   **General Rule**: Use **Title Case** capitalization for all document titles, headings, and subheadings, unless otherwise specified.

   Capitalize the first element of hyphenated compounds in titles. Capitalize subsequent elements unless they are articles, short prepositions (fewer than four letters), or coordinating conjunctions.

   ##### Title Case Guidelines

   In title case, capitalize the following:

* **First and last words**

  *Example*: Getting Started with Contentstack

* **Major words (nouns, pronouns, verbs, adjectives, and adverbs)**

  *Example*: Manage Your Content Efficiently

* **Prepositions and conjunctions of four or more letters (e.g., “From,” “With,” “Over,” “Between”)**

  *Example*: Integration Between Frontend and Backend Systems

* **Verbs, including short ones (“Is,” “Are,” “Do,” “Be,” “Has”)**

  *Example*: How to Be Successful Using Plugins

* **All parts of hyphenated words in titles (except articles, prepositions, conjunctions)**

  Examples: Real-Time Notifications, State-of-the-Art Technology, Well-Known Author

  ##### Lowercase in Title Case

  Always use lowercase for:

* **Articles (“a,” “an,” “the”), unless it's the first or last word**

  **Example**: Creating an Entry in the CMS

* **Short preposition**s (fewer than four letters, e.g., “in,” “on,” “at,” “to”), unless first or last word

  **Example**: Logging in to Contentstack

* **Short conjunctions (“and,” “or,” “nor,” “but,” “for,” “yet,” “so”) unless first or last word**

  **Example**: Collaboration Tools for Writers and Developers

* Use tools like [Title Case Converter](https://titlecaseconverter.com/) with the Chicago style option.

  **Special Cases**

  * **Brand names**: Follow official capitalization (e.g., Contentstack, GitHub, eBay).

  * **Acronyms**: Capitalize acronyms entirely (CMS, API, JSON).

    ***Example***: Understanding JSON Structure in APIs

| Word Type | Title Case Capitalization? |
| :---- | :---- |
| First and Last Words | ✅ Yes |
| Major words (nouns, verbs, adjectives) | ✅ Yes |
| Short verbs (is, be, are, do) | ✅ Yes |
| Short conjunctions (and, or, but) | ❌ No |
| Short prepositions (in, on, at) | ❌ No |
| Articles (a, an, the) | ❌ No |
| Prepositions (four or more letters) | ✅ Yes |

### **Avoiding Jargon and Idioms**

Avoid technical jargon, idioms, cultural expressions, and slang unless the term is essential and well-known in the field. Provide definitions or links for niche terms on first use.

❌ Don’t write: “Let’s double down on microservices.”

✅ Write: “You can expand your microservice-based architecture using these tools.”

Avoid idioms like:

* “Out of the box”

* “Boil the ocean”

* “Move the needle”

If you’re unsure whether a phrase is clear or translatable, simplify it.

### **Voice and Tone**

Explain how the content should sound:

* **Voice**: Clear, professional, and easy to understand.

  * **Tone**: Friendly and helpful. Stay calm and neutral, especially in error or warning messages.

  Adjust the tone depending on the type of content—more welcoming in onboarding guides, more direct in troubleshooting docs.

  * **Avoid using “please”**: It can come off as overly polite or indirect in technical instructions. Be polite through clarity and helpfulness instead.

    * ❌ Please click the Save button.

    * ✅ Click the Save button.

    * ✅ Click Save.

  * **Avoid using “will”**: It suggests future actions, which can confuse users about when things happen. Stick to present tense to keep instructions immediate and clear.

    * ❌ The system will display a message.

    * ✅ The system displays a message.

  * Don’t copy-paste content directly from AI tools (e.g., ChatGPT)—even if the content seems accurate. There’s a risk of subtle inaccuracies, outdated references, or generic tone.

    * If the content is valid, rephrase and humanize it to align with our documentation style and voice.

    * Watch out for signs of AI tone: overly formal phrasing, unnatural structure, or generic enthusiasm (e.g., “With this powerful tool, users can effortlessly…”).

### **Writing Guidelines**

1. #### **Highlighting Limits**

Highlight both **number and text** when specifying limits to ensure **clarity and visibility**.

* **Numbers** catch the eye quickly for precision.

* **Text** provides context for what the limit applies to.

  **Example:** You can upload up to **5 files** per session.

2. #### **Use Horizontal Ellipsis or Vertical Ellipsis instead of “three dots”**

   * **Clarity**: Clearly identifies the specific UI icon (e.g., horizontal ⋯ vs. vertical ⋮).

   * **Precision**: Avoids ambiguity about orientation or purpose in the interface.

   * **Professionalism**: Aligns with standard UI terminology used in design and documentation.

   Always match the term to the icon's orientation.

3. #### **Common terms in docs**

   * Contentstack (one word)

   * add-ons

   * plugins

   * frontend

   * backend

   * email, online, internet, and web are all one word with no capitalization

   * with this exception (so far): Internet of Things (IoT)

   * CMSs is the plural, not CMSes  
     ebook (capitalize when using title case or when appearing as the first word in a sentence)

   * FinTech, FinServ

   * Use “times” instead of “X” (Example: use “three times” instead of “3X”)

   * Don’t use the “+” symbol in any context, including to indicate “more than”

   * dropdown

     * Use “dropdown” as a noun when referring to the element itself.   
       **For example:** In the entry editor, you will see a dropdown menu labeled “Base Entry”. Click this dropdown.

   * checkbox

     * Use “checkbox” as a noun when referring to the element itself.  
       **For example:**  You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response.

   For spelling questions, use the online [Merriam-Webster Dictionary](https://www.merriam-webster.com/). Use the first spelling presented, and note that word presentations in the dictionary supersede the AP Style.

4. #### **Usage of “i.e.” vs. “that is,” “e.g.” vs. “for example,” “like” vs. “such as,” and “etc.” vs. “and so on”**

   * “i.e.” vs. “e.g.”

     * **i.e.** (Latin *id est*, meaning “that is”):

       1. **Usage:** Clarifies or rephrases the preceding statement.

       2. **AP Style:** Always follow “i.e.” with a comma.

       3. **Example:** The event is scheduled for the weekend, i.e., Saturday and Sunday.

     * **e.g.** (Latin *exempli gratia*, meaning “for example”):

       1. **Usage:** Introduces one or more examples.

       2. **AP Style:** Always follow “e.g.” with a comma.

       3. **Example:** She enjoys outdoor activities, e.g., hiking, biking, and kayaking.

     **Recommendation:** While “i.e.” and “e.g.” are acceptable in AP style, consider using “that is” and “for example” in general text for clarity, reserving the abbreviations for parenthetical statements or notes.

   * “Like” vs. “Such as”

     * **Like:**

       1. **Usage:** Indicates similarity or comparison.

       2. **Example:** She sings like a professional.

     * **Such as:**

       1. **Usage:** Introduces specific examples.

       2. **Example:** He enjoys playing sports such as soccer and tennis.

     **Recommendation:** Use “such as” when listing specific examples to enhance clarity.

   * “Etc.” vs. “and so on”

* **Etc.** (Latin *et cetera*, meaning “and other things”):

  * **Usage:** Indicates the continuation of a list of similar items.

  * **AP Style:** Avoid using “etc.” in formal writing; instead, specify all items or use a phrase like “and so on” if necessary.

  **Recommendation:** In professional writing, it's preferable to explicitly mention all relevant items or use “and so on” sparingly. However, overuse of “and so on” can be vague; providing specific examples is clearer.

### **Responsible Use of AI-Generated Content**

While AI-powered writing tools can help speed up certain tasks, Contentstack's documentation must always reflect thoughtful, human judgment. Writers may consult AI tools for idea generation or alternative phrasing but must not use AI-generated content as-is.

#### **Why?**

AI-generated content often:

* Sounds overly formal, robotic, or unnaturally enthusiastic.

* Contains subtle inaccuracies or outdated product details.

* Fails to match Contentstack’s tone of credibility, clarity, and reader-centered empathy.

* AI should assist—not author.

#### **Acceptable Uses of AI Tools**

✅ **Writers may use AI to**:

* Draft outlines or break down complex topics.

* Suggest alternative phrasings or sentence rewrites.

* Identify minor grammar issues.

* All AI-generated output must be thoroughly reviewed, verified, and rewritten in the writer’s voice.

❌ **Prohibited Uses**:

* Copying large AI-generated text blocks directly into documentation.

* Relying on AI for factually accurate technical content without validation.

* Allowing AI-generated hyperbole or marketing-style phrasing to remain.

**Examples**:

❌ “With this powerful tool, users can effortlessly scale their omnichannel success story.”

✅ “Use Contentstack’s modular blocks to structure and deliver content across multiple channels.”

#### **Quick Review Questions**

1. Does this sound natural in a conversation with a developer or marketer?

2. Is the language factual, helpful, and free from exaggerated enthusiasm?

3. Have I confirmed technical details and ensured product accuracy?

**Note**: Content containing obvious AI-generated phrasing may negatively impact search rankings, as search engines increasingly detect and demote low-value, AI-heavy content.

#### **Tip for Reviewers**

When reviewing drafts, watch for phrases like:

* “effortlessly streamline”

* “with this robust platform”

* “powerful capabilities”

* “next-level experience”

These are typical AI-flavored phrases that require rewriting.

# Cross Referencing and Linking

## **Cross Referencing and Linking**

Effective cross-referencing and linking improve usability, enhance content discoverability, and prevent duplication. This section provides best practices for adding internal and external links, cross-referencing related documentation, and integrating glossary terms.

### **Hyperlink Best Practices**

Hyperlinks should provide **clear, descriptive, and meaningful** navigation for readers. Follow these best practices when inserting links:

1. **Choosing Link Text**

* Use descriptive and contextual link text rather than generic terms like “click here” or “learn more.”

   **❌ Incorrect:** Click here to view API documentation.

   **✅ Correct:** Refer to the API Reference Guide for implementation details.

* Keep link text concise and relevant.

* If linking to an external source, ensure it is credible and authoritative.

	**⚠️ Exception**

It is acceptable to link directly to a term like **“guide”** or **“documentation”** only if:

* The context already makes the subject clear, and  
* The page being linked to is a general or definitive reference.

**Examples:**

* ✅ Refer to the \[API documentation\] for complete parameter details.  
* ✅ See the \[Integration guide\] for step-by-step setup instructions.

**Avoid**:

* ❌ *Click here for the documentation.*  
* ❌ *Learn more about it in this guide.*

2. **Placement of Links**

* Place links within the flow of the sentence instead of as standalone elements.

   **❌ Incorrect:** More details can be found at this link.

   **✅ Correct:** See the Contentstack JSON RTE Guide for details on supported formats.

* Avoid hyperlinking punctuation marks (e.g., periods, commas).

3. **Linking Strategy**

* **First Mention Rule:** Only hyperlink the first occurrence of a term or reference within a section.

* **Internal Linking:** Prefer linking to Contentstack’s own documentation over external sources whenever possible.

* **External Links:** If linking to third-party documentation, ensure the link opens in a new tab.

4. **Formatting and Styling**

* Use markdown or HTML for links as appropriate for the publishing platform.

* External links should always include a trailing slash (e.g., https://developer.mozilla.org/).

* Avoid embedding URLs directly in the text.  
   **❌ Incorrect:** Visit https://www.contentstack.com/docs.  
   **✅ Correct:** Visit the [Contentstack Documentation](https://www.contentstack.com/docs).

### **Cross-Referencing Related Topics**

Cross-referencing helps readers navigate between related content efficiently. Use cross-references to avoid content duplication while ensuring accessibility to additional information.

1. **When to Use Cross-References**

   1. When **explaining a term or concept** that has already been covered in another section or document.

   2. When referring to **related features or modules** in the Contentstack ecosystem. Link the About document.

   3. When providing **context** for a process that involves multiple steps across different guides.

2. **Cross-Referencing Format**

   1.  **Using relative links**

      1. It is useful when linking **within the same website**, making the link adaptable if the domain changes.

      2. This only includes the path (/docs/authentication/) without the full domain name (https://www.contentstack.com).

      3. **Example:** \[Authentication Guide\](/docs/authentication/)

   2. **Using absolute links**

      1. This includes the **full website URL**

      2. It is necessary when linking to **external sites** or ensuring a direct, fixed path

   3. Use **inline references** for minor details and **standalone cross-references** for major topics

      1. **Inline Reference:** For details on API authentication, refer to the Authentication Guide

      2. **Standalone Cross-Reference:** Use Additional Resource info panel. Refer to the example below:

         **Additional Resource:** For a complete overview of Contentstack’s APIs, refer to our Contentstack API Reference documentation.

3. **Avoiding Redundant Cross-References**

   1. Do not overuse cross-references. If a link has already been provided, avoid repeating it unnecessarily.

   2. Ensure the linked content is **updated and relevant** to avoid broken or outdated references.

# Visuals and Media

## **Visuals and Media**

### **Screenshot Tools**

* **Documentation Screenshots**: Use **Snagit**. Raise a ticket via [Lumos](https://app.lumosidentity.com/app_store?domainAppId=1273630).

* **GIF Creation**: Use **Snagit** and a reliable GIF converter such as [Video to GIF](https://ezgif.com/video-to-gif)

### **Guidelines for Images**

#### **Screenshot Placement and Usage**

* Insert each screenshot **directly below** the relevant procedural step.

* Screenshots **must support** — not replace — the instructional text. Ensure visual and written instructions align.

* Avoid placing **text blocks (e.g., notes or tips)** between the content and its screenshot.

#### **File Naming Conventions**

Use clear, descriptive filenames to improve SEO and file traceability.

* **Format**: doc-name\_section-heading\_action.png

* **Example**: Launch-Create-a-project\_Connecting-your-GitHub-account.png

**Note**: Avoid using "Image A," "First image," etc. This is a mandatory step for SEO. This affects the page ranking.

#### **Alt Text Standards**

* Always provide **alt attributes** for accessibility and SEO.

* The Contentstack docs platform auto-generates alt text from filenames — ensure filenames are descriptive.

* Use **sentence case** in alt text.

**Example**:

\<img src="Create-Project-Select-Stack.png" alt="Create project by selecting the required stack option"\>

#### **Screenshot Formatting Best Practices**

* Save images as **.png**

* Keep each image **≤ 100 KB** in size

  **Note**: Use [Tinypng.com](http://Tinypng.com) can be used for compressing. 

* Capture all screenshots for a given module **in the same session** for visual consistency

* Focus on the **relevant UI element**, including only enough surrounding context

* **Resize** your browser to eliminate unnecessary whitespace

* **Remove or mask** all personal or sensitive data:

  * API keys

  * Email addresses

  * Org/user IDs

* Prefer **real-world examples** over generic or placeholder content like “Sample Project”

#### **Annotations and Highlights** {#annotations-and-highlights}

1. **Highlight Boxes**

   1. Use **red rectangular box** to draw attention to specific CTAs or sections

   2. **Line Width**: 5 pt

   3. **Color**: \#FF594B

      ![][image2]

2. **Highlights**

   1. Use **yellow** to draw attention to specific UI elements

      ![][image3]

3. **Callouts**

   1. Use **numbered callouts** (Snagit Step Tool) styled in **Golden Yellow** \#FBBA00

   2. Avoid inserting text inside the screenshot. Add explanations **below** the image.

      ![][image4]

4. **Snagit Settings for Callouts**:

   1. **Shape**: Circle

   2. **Font**: System default, 14pt

   3. **Border**: Solid

   4. **Fill**: \#FBBA00 *(Default color in Snagit for the Step option)*

   5. **Text Color:** Black

      ![][image5]

#### **When to Avoid Screenshots**

Avoid screenshots when:

* Showing **code blocks** (use \<pre\>\<code\> instead)

* Documenting **frequently changing UI**

* Displaying simple dialogs or standard confirmation boxes

* Referencing a previously shown screen (use: *“See step 2.5”*)

* The screenshot involves a **third-party UI** unless:

* It is **critical** to the user’s task

* The interface is **unlikely to change often**

### **Using GIFs and Videos**

####  **GIF Guidelines**

* Record screen actions using **Snagit**

* Trim unnecessary segments in the **Snagit Editor**

* Convert using [Video to GIF](https://ezgif.com/video-to-gif)

* Ideal duration: **10–15 seconds**

* Should be under **1 MB**

* Keep file size optimized for web load performance

**Note**: Use GIFs only when required. Use video instead.

####  **Video Guidelines**

##### Using Existing Videos

1. **Search the Academy**

   1. Before adding a video to documentation, search the Contentstack Academy to check if a relevant video tutorial already exists.

2. **Request the Embed Link**

   1. If the video exists, contact **Janice Rodrigues** to obtain the official embed link.

3. **Embed the Video**

   1. Add the embed link directly under the appropriate section in the documentation, using the subheading **“Tutorial Video”**.

##### Requesting a New Video

If no existing video covers the needed topic:

	•	Submit a request to the **Academy team**

	•	Point of contact: **Matthew Pizzi**

Include the following in your request:

	•	Feature or process to be recorded

	•	Key points to highlight

	•	Expected timeline (if urgent)

# Code and Syntax Highlighting

## **Code and Syntax Highlighting**

Technical documentation often includes code snippets, commands, and configuration settings. Proper formatting ensures readability, consistency, and accessibility. This section provides guidelines for inline code formatting, block code presentation, and contextual handling of code snippets.

### **Inline Code Formatting**

Inline code refers to short code elements, such as function names, variable names, or commands, that appear within sentences. Use inline code formatting when referring to code-related elements inside a paragraph.

**Guidelines:**

* Wrap inline code with the \<span class="code"\> tags when working in HTML-based RTE.

* Avoid formatting punctuation adjacent to the inline code unless it is part of the code.

* Do not use inline code formatting for UI elements like button names (use bold instead).

**Examples:**  
✅ **Correct Usage:**

* Use the console.log() function to print messages in JavaScript.

* The variable user\_id stores the user’s unique identifier.

❌ **Incorrect Usage:**

* Click Save to store the file. (*Use* **Save** *instead of inline code for UI elements.*)

### **Block Code Presentation**

Block code refers to multi-line code snippets that should be displayed separately from the surrounding text. Block formatting improves readability, especially for structured code like JSON, JavaScript, Python, or configuration files.

**Guidelines:**

* Use \<pre\> tags in HTML-based RTE.

* Indent code consistently to enhance readability.

* Include syntax highlighting by specifying the language.

* Avoid using screenshots of code unless necessary (e.g., UI tool output).

* Do not break long lines manually; allow the user’s browser or editor to wrap lines as needed.

**Examples:**

✅ **Correct Usage**:

\<pre\>  
{  
  "name": "Contentstack",  
  "type": "CMS",  
  "features": \["Headless", "API-first", "Cloud-native"\]  
}  
\</pre\>

❌ **Incorrect Usage:** *(Missing proper JSON structure)*

{name: Contentstack, type: CMS, features: \[Headless, API-first, Cloud-native\]}

### **Handling Code Snippets in Context**

Proper placement and explanation of code snippets help users understand **when**, **where**, and **how** to use the code effectively. These guidelines ensure snippets are accessible, relevant, and not overwhelming.

**Guidelines:**

1. **Introduce Before You Show**

   Always add a brief introduction before displaying a code snippet. Explain:

   1. What the snippet does

   2. Why it’s needed in the current context

   3. Where it should be used (e.g., in a terminal, CMS UI, integration script)

2. **Keep It Concise**

   Avoid long code blocks that stretch across multiple pages. Break down long examples into smaller, functional chunks with separate explanations if necessary. Ideally, a single code block should not exceed 30–40 lines. If the use case is complex:

   1. Provide a summarized snippet inline

   2. Link to the full code in GitHub or an appendix

3. **Highlight User Input Areas**

   If a snippet contains fields the user must modify—such as API keys, access tokens, or URLs:

   1. Add inline comments within the code

   2. Reinforce those details in the surrounding explanatory text, even if mentioned in comments

      ✅ *“In the snippet below, replace \<your\_api\_key\> with the API key from your stack settings.”*

4. **Use Comments Strategically**

   Include clear and minimal comments to help users understand each section:

   // Initialize the Contentstack SDK

   const Stack \= contentstack.Stack(...);

   

   // Fetch entry from the 'blog' content type

   Avoid over-commenting or repeating what’s already explained in the surrounding text.

5. **Show Expected Output (When Applicable)**

   Especially for CLI commands or API responses, show what users should expect:

   $ npm install contentstack

   \# Output:

   \# \+ contentstack@2.0.0 added

**Examples:**

✅ **Correct Usage (With Explanation & Output)**:

To retrieve an entry in the Contentstack CMS using the API, use the following GET request:

curl \-X GET "https://api.contentstack.io/v3/content\_types/blog/entries" \\  
  \-H "api\_key: YOUR\_API\_KEY" \\  
  \-H "authorization: YOUR\_AUTH\_TOKEN"

📌 **Expected Output:**

{  
  "entries": \[  
    {  
      "title": "How to Use Contentstack",  
      "author": "Tech Writer",  
      "published": true  
    }  
  \]  
}

✅ **Correct Usage (With Comments in Code)**:

// Initialize Contentstack SDK  
const Stack \= require('contentstack');

// Connect to API  
const stack \= Stack({  
  api\_key: "YOUR\_API\_KEY",  
  access\_token: "YOUR\_ACCESS\_TOKEN"  
});

// Fetch all entries  
stack.ContentType("blog").Entry().Query().find()  
  .then(response \=\> console.log(response))  
  .catch(error \=\> console.error(error));

❌ **Incorrect Usage:** (*Lacks comments, has inconsistent variable naming, and does not handle errors.*)

Stack \= require('contentstack')  
stack \= Stack({api\_key: "", access\_token: ""})  
entries \= stack.ContentType("blog").Entry().Query().find()

# Tips, Warnings, and Notes

## **Tips, Warnings, and Notes**

Tips, warnings, and notes are essential elements in technical documentation that help guide users, highlight critical information, and enhance their understanding. By presenting key details in a structured and visually distinct format, these elements ensure clarity and reduce the likelihood of errors. This section outlines the best practices for using these info panels consistently in Contentstack documentation.

### **Standard Formatting Styles**

Contentstack documentation uses info panels to highlight specific types of information in a clear and consistent manner. Below are the styles and examples for each type of info panel:

1. #### **Note**

   **Purpose**: Highlight important content, such as limitations or special setups.

   **HTML Tag**:

   \<p class="note"\>\<strong\>Note\</strong\>: Text\</p\>

   **Usage Example**:

   \<p class="note"\>\<strong\>Note\</strong\>: Ensure that the API key is valid before proceeding.\</p\>

   **Multi-point Notes**:

   \<div class="note"\>

       \<strong\>Note\</strong\>: Limitations:

       \<ul\>

           \<li\>

               API keys must be refreshed every 30 days.

           \</li\>

           \<li\>

               Maximum request size is 1 MB.

           \</li\>

       \</ul\>

   \</div\>

2. #### **Tip**

**Purpose**: Provide useful information or alternative methods for better efficiency.

**HTML Tag**:

\<p class="tip"\>\<strong\>Tip\</strong\>: Text\</p\>

**Usage Example**:

\<p class="tip"\>\<strong\>Tip\</strong\>: Use the bulk import feature to save time when uploading multiple assets.\</p\>

3. #### **Additional Resource**

   **Purpose**: Link to related documentation or external resources for more information.

**HTML Tag**:

\<p class="add-resource"\>\<strong\>Additional Resource\</strong\>: Text\</p\>

**Usage Example**:

\<p class="add-resource"\>\<strong\>Additional Resource\</strong\>: For a detailed guide on JSON RTE, visit \<a href="https://www.contentstack.com/docs"\>our documentation\</a\>.\</p\>

4. #### **Warning**

   **Purpose**: Provide cautionary information to avoid errors or highlight deprecated features.

**HTML Tag**:

\<p class="warning"\>\<strong\>Warning\</strong\>: Text\</p\>

**Usage Example**:

\<p class="warning"\>\<strong\>Warning\</strong\>: This feature is deprecated and will be removed in the next release.\</p\>

### **Class Naming Conventions**

To maintain uniformity and simplify code maintenance, adhere to these class naming conventions for info panels:

* Use lowercase letters and hyphens (\-) to separate words in class names.

* Class names for specific panels:

  * **Note**: note

  * **Tip**: tip

  * **Additional Resource**: add-resource

  * **Warning**: warning

**Example 1**:

\<p class="note"\>\<strong\>Note\</strong\>: Only administrators can delete stacks.\</p\>

**Example 2**:

\<p class="tip"\>\<strong\>Tip\</strong\>: Use keyboard shortcuts for faster navigation.\</p\>

### **Placement and Usage**

Proper placement ensures the content remains clear and logical. Follow these guidelines to place and use info panels effectively:

1. **Avoid Consecutive Panels**:

   * Do not stack multiple info panels back-to-back. Instead, integrate them into the narrative or group related content logically.

2. **Context-Specific Placement**:

   * Place **Notes** directly after the statement or step they clarify.

   * Use **Tips** after procedures to offer suggestions or alternative methods.

   * Position **Warnings** prominently before actions that could lead to errors or risks.

   * Add **Additional Resources** at the end of a section to point readers to related content.

3. **Verify with Developers**:

   * Before using info panels, confirm with the development team to ensure accuracy and relevance, particularly for warnings or technical limitations.

# Writing for the Web

## **Writing for the Web**

Effective web writing is clear, concise, and structured for easy scanning. Since web users tend to skim rather than read in detail, technical documentation should be formatted in a way that enhances readability while maintaining clarity. 

This section provides best practices for optimizing web content, improving SEO, and ensuring a smooth reading experience.

### **SEO Best Practices**

Search Engine Optimization (SEO) helps ensure that Contentstack’s technical documentation is easily discoverable by search engines and ranks higher for relevant queries. Follow these guidelines to optimize content:

* **Use Keywords Naturally:** Incorporate primary and secondary keywords where appropriate, but avoid keyword stuffing.

* **Place Keywords Strategically:** Include them in titles, subheadings, introductory paragraphs, alt text for images, and metadata.

* **Write Meaningful Meta Descriptions:** Each page should have a concise summary (**under 160 characters**) that clearly explains what the page covers.

* **Use Proper Anchor Text for Links:** Instead of “click here,” use descriptive text like “Learn more about modular content.”

* **Avoid Duplicate Content:** Ensure each page has unique and valuable content to avoid search engine penalties.

* **Optimize for Mobile:** Ensure text is broken into readable chunks and pages load quickly on all devices.

**Note**: Refer to the [Swiftype Bot](https://chatgpt.com/g/g-67581461e82081918c1f747cc963245e-swiftype-document-optimizer) to draft SEO descriptions as per our standards.

#### **Optimizing Headings and Content**

Headings and content structure play a crucial role in readability and SEO. Follow these best practices:

##### Headings

* Use **H1 for page titles**, **H2** for **main sections**, H3 for subsections, and H4 for deeper subheadings.

* Keep headings **concise and informative** (e.g., “Setting Up Webhooks” instead of “How to Set Up Webhooks in Contentstack”).

* Ensure headings **include relevant keywords** but remain natural.

* Do not use vague headings like **“More Information”**—be specific.

##### Content

* **Follow an Inverted Pyramid Structure**: Start with the most important information first, followed by details.

* **Use Short Paragraphs** (**2-3 sentences per paragraph**) to improve readability.

* **Use Active Voice** for clarity (e.g., “Click the Save button” instead of “The Save button should be clicked”).

* **Break Up Long Sections** with bullet points, numbered lists, or tables to improve scannability.

* **Write with the User’s Goal in Mind** by phrasing instructions around user intent, not system behavior.

  **Example**:

  ❌ “The system will prompt you to select an option.”

  ✅ “Select your preferred option when prompted.”

* **Add Outcome-Oriented Statements** that help users understand what happens next or why something matters.

  **Example**: Click **Save** to apply your changes and exit the form.

#### **Descriptive URLs**

URLs should be clean, readable, and reflect the content of the page. Follow these best practices:

1. **Use Hyphens (-) Instead of Underscores (\_) in URLs**

   1. ✅ example.com/content-modeling-guide

   2. ❌ example.com/content\_modeling\_guide

2. **Keep URLs Short and Meaningful**

   1. ✅ example.com/api-reference

   2. ❌ example.com/technical-documentation-api-reference-page

3. **Avoid Unnecessary Parameters or Numbers**

   1. ✅ example.com/workflows

   2. ❌ example.com/workflows?id=12345

4. **Use Lowercase Letters Only**

   URLs are case-sensitive, and uppercase letters can cause confusion.

   ✅ example.com/content-modeling-guide

   ❌ example.com/Content\_Modeling\_Guide

5. **Reflect the Hierarchy of Information**

   1. **Example**: example.com/docs/api/webhooks (good structure)

### **Creating Skimmable Content**

Web users typically **scan** content rather than reading it word-for-word. 

To enhance readability:

* **Use Clear Subheadings** (every 3-4 paragraphs) to divide content into digestible chunks.

* **Use Bullet Points and Lists** instead of large blocks of text.

* **Highlight Important Words and Phrases** using **bold** or *italics* sparingly.

* **Use Tables and Visuals** to present structured data.

* **Write Concise Sentences** (aim for 15-20 words per sentence).

### **Example of Skimmable Content:**

❌ **Before:**  
Content modeling in Contentstack allows users to create structures for their content. The platform offers various options such as modular blocks, reference fields, and global fields to organize data efficiently.

✅ **After:**  
**Content Modeling in Contentstack**

Content modeling in Contentstack allows users to create structures for their content. The platform offers various options such as:

* **Modular Blocks**: Reusable content blocks for flexibility.

* **Reference Fields**: Link entries from one content type to another.

* **Global Fields**: Share fields across multiple content types.

### **Avoiding Overuse of Rhetorical Questions**

While rhetorical questions can engage readers, overusing them can create confusion. Instead, **state facts directly**.

* ❌ “Have you ever wondered why modular content is useful?”

* ✅ “Modular content improves flexibility and reduces redundancy in content creation.”

### **Best Practices:**

* **Use Rhetorical Questions Sparingly.** If used, provide an immediate answer.

* **Avoid Leading Questions.** Instead of “Do you want to improve efficiency?”, say “Here’s how to improve efficiency with Contentstack.”

* **Replace with Direct Statements.** Instead of asking “What is an API call?”, simply define it.

# Content Localization

## **Content Localization**

Content localization ensures that technical documentation is accessible, accurate, and culturally appropriate for global audiences. At Contentstack, we serve enterprise users across regions and industries—clear, adaptable, and consistent localization practices are key to improving the usability and reach of our documentation.

### **Adapting for Global Audiences**

When writing documentation for a global user base, apply these principles:

* **Avoid cultural references**: Do not use idioms, metaphors, regional jokes, pop culture references, or analogies that may not translate well.

* **Use universal examples**: Favor generic examples like dates, currencies, or systems over location-specific ones. If geography is relevant, note region-specific functionality (e.g., “This feature is only available for users in the EU.”).

* **Support localization in UI references**: Refer to interface elements exactly as they appear in the product UI. Keep terminology consistent to ensure alignment across translations.

* **Use ISO date format when needed**: Prefer unambiguous formats like YYYY-MM-DD for dates.

* **Avoid phrasal verbs**: Replace phrases like “set up,” “log in,” or “bring up” with more universal alternatives like “configure,” “sign in,” or “display.”

### **Simplified English Principles**

Writing in Simplified English improves clarity and translation accuracy. It’s especially important when your audience includes non-native English speakers or when content will be machine-translated.

* **Write short sentences**: Aim for 20 words or fewer per sentence.

* **Use one idea per sentence**: Avoid combining multiple concepts in one line.

* **Prefer common words**: Use “use” instead of “utilize,” “start” instead of “initiate,” and so on.

* **Be literal and precise**: Avoid figurative language. Choose terms with one meaning.

* **Avoid ambiguous modifiers**: Words like “quickly,” “easily,” or “soon” are subjective and should be clarified or omitted.

* **Be consistent**: Use the same terms for the same concepts. Avoid unnecessary synonyms that could confuse readers or translators.

**Example**:

❌ *Once you’ve set things up, you’ll be good to go.*

✅ *After configuration, the system is ready to use.*

### **Managing Translations**

Effective translation workflows begin with clear source content and are supported by collaboration and process discipline. Follow these best practices:

* **Use localization-ready formats**: Avoid hardcoded strings in visuals or inline HTML. Instead, separate UI strings and keep text editable in the source.

* **Leverage a glossary and term base**: Ensure consistency across translated documents by referencing the Contentstack Glossary. If you introduce new terms, add them to the glossary with a definition.

* **Add localization context in comments**: For ambiguous words or phrases, provide translator notes (e.g., clarify noun vs. verb usage).

* **Maintain structural consistency**: Avoid shifting sentence order or format between similar documents to make translation memory tools more effective.

* **Plan for post-translation review**: Involve regional reviewers or QA testers who can validate the accuracy and cultural appropriateness of translated content.

# Style for Specific Contexts

## **Style for Specific Contexts**

### **Documentation vs. Marketing Content**

While both types of content should align with Contentstack’s brand voice—professional, helpful, and cutting-edge—**technical documentation** and **marketing content** serve different purposes and follow different stylistic approaches.

| Aspect | Documentation | Marketing Content |
| :---: | ----- | ----- |
| **Purpose** | To inform, instruct, and support users in using Contentstack features effectively. | To attract, persuade, and convert prospects by highlighting product benefits. |
| **Tone** | Formal, clear, neutral, and instructional. Avoids unnecessary promotion. | More conversational, assertive, and benefit-driven. May use emotional triggers. |
| **Voice** | Direct, authoritative, and factual. Focused on task completion and clarity. | Inspirational, visionary, and persuasive. Focused on storytelling and outcomes. |
| **Language** | Uses precise, action-based language and second person (“you”) to guide users. | Often uses third person (“businesses,” “enterprises”) and sometimes first person (“we”). |
| **Content Structure** | Follows a logical, modular structure (step-by-step instructions, reference tables). | Organized around narrative flow, value propositions, and CTAs. |
| **Promotion** | Neutral. Product mentions only as needed for context. | Promotional. Product is central to the message. |
| **Examples** | “To configure a webhook, go to Settings \> Webhooks and click Add Webhook.” | “Empower your teams to build dynamic digital experiences—faster—with Contentstack.” |

When in doubt, **prioritize the user’s informational needs** in documentation and the product’s strategic value in marketing content.

### **Writing for Enterprise vs. Developer vs. Content Editor Audiences**

Contentstack serves a diverse range of enterprise users. Tailoring language, structure, and tone to the audience improves usability and satisfaction.

#### **Enterprise Decision-Makers (Marketing and IT Executives)**

* **Tone**: Formal, confident, and strategic.

* **Focus**: ROI, scalability, security, governance, integrations.

* **Style Tips**:

  * Highlight business impact and outcomes.

  * Avoid technical jargon unless it’s necessary and well-defined.

  * Use terminology like “digital transformation,” “enterprise readiness,” and “omnichannel strategy.”

#### **Developers**

* **Tone**: Technical, precise, and task-oriented.

* **Focus**: APIs, SDKs, integrations, error handling, deployment workflows.

* **Style Tips**:

  * Use active voice and second person (“you”) to guide actions.

  * Provide code examples, inline references, and clear parameter descriptions.

  * Avoid marketing fluff—clarity and completeness matter more than persuasion.

#### **Content Editors / Marketers**

* **Tone**: Clear, supportive, and instructional.

* **Focus**: UI walkthroughs, workflows, localization, and publishing content.

* **Style Tips**:

  * Focus on what users can *see and do* in the UI.

  * Break tasks into clear steps with screenshots or videos as needed.

  * Use everyday language over technical terminology where possible.

### **Summary**

Different contexts and personas require different approaches. Adapting your writing ensures that:

* Documentation stays helpful and usable.

* Marketing content remains persuasive and goal-driven.

* Each audience feels understood and empowered.

When writing, ask:

**“Who am I speaking to, and what do they need from this content?”**

Let the answer guide your tone, language, and structure.

# Review and Approval Processes

## **Review and Approval Processes**

A structured review and approval workflow ensures that Contentstack’s technical documentation meets high-quality standards. This process ensures accuracy, consistency, and adherence to the brand’s voice, style, and formatting guidelines.

### **Self-Review**

Before forwarding a document for internal review, authors must perform a **thorough self-review** to ensure it is free of errors and properly formatted.

**Note**: Use the [**Ninjas ReviewMate GPT bot**](https://chatgpt.com/g/g-684187bacff88191a0d03996ab87c8bb-ninjas-reviewmate)—to assist with your self-review. It is trained on this style guide and will help enforce consistency in tone, structure, and formatting.

#### **Self-Review Checklist**

1. **Content and Grammar Check**

   1. Use **ChatGPT** or Grammarly to **rephrase content** and fix grammatical issues.

   2. Review the **entire document**, not just the sections you've edited.

2.  **Voice and Style**

   1. Always use **active voice** unless passive voice is explicitly required.

   2. Ensure the writing aligns with Contentstack’s voice—professional, helpful, and clear. Refer to the [Writing Conventions](#writing-conventions) section.

3. **Document Structure**

   1. Use **H1** for the document title.

   2. Use **H2, H3, etc.** for subsections, maintaining a logical hierarchy.

#### **Attention to Detail**

* **Check for missing formatting options**: bold text, code blocks, commas, articles, bullet points, indentations.

* Use the **Oxford Comma** for lists:

  * ✅ **Correct:** Item 1, Item 2, and Item 3\.

  * ❌ **Incorrect:** Item 1, Item 2 and Item 3\.

* Remove **double spaces** and ensure **no spaces after a forward slash.**

* In lists, **bold only the list items, not the commas** (e.g., **Item 1**, **Item 2**, and **Item 3**).

* Ensure **proper indentation** for:

  * Points and sub-points

  * Screenshots

  * Notes, tips, and additional resources

#### **Google Doc Updates**

1. Ensure the **Google Doc always reflects the latest version** before sending it for review.

2. **Formatting must be accurate**, as this affects the final upload.

3. Review **demo calls** if needed.

4. Draft content based on **all available references** and clarify functionality with developers.

5. **Resolve all queries and comments** before forwarding for review.

### **Internal Review Process**

After the **self-review**, the document proceeds to **internal review**, which should be **limited to two rounds** to avoid unnecessary back-and-forth.

#### **Review Cycle**

1. **Self-Review** → Ensure clarity, accuracy, and formatting compliance

2. **Internal Review** → Another technical writer or team lead checks the technicality, structure, and style

3. **Tech Review** → A Subject Matter Expert (Dev Team) validates technical accuracy

4. **Finalization** → The internal reviewer implements last changes before approval

#### **Collaboration and Tracking**

* **JIRA Tickets**

  * Leave a comment in **JIRA** for the reviewer with:

    * The **document link**

    * A **summary of key areas** needing attention.

* **Slack Communication**

  * Post a message in the **POD’s common Slack group** to notify stakeholders

### **Technical Testing and Validation**

Once the Google Doc is finalized, it must undergo **technical testing** to confirm accuracy and completeness.

#### **Testing Process**

1. **Assigned Tester:**

   * **Priyal** is responsible for **technical validation** of finalized documents

2. **Identifying Errors:**

   * If discrepancies, errors, or missing steps are found, they must be documented in the Google Doc

3. **Updating Documentation:**

   * Errors must be **rectified in the Google Doc** before proceeding to the approval stage

4. **Clean Up the Google Doc** before finalizing:

   * **Accept changes** and delete **resolved comments**

   * Ensure the **production version matches the latest Google Doc**

### **Approvals and Publishing Workflows**

Once a document passes internal review and technical validation, it moves to **final approval** before publication.

#### **Approval Workflow**

1. **Final SME Approval**

   * The **Subject Matter Expert (SME)** verifies technical accuracy

2. **Technical Writing Lead Approval**

   * A senior technical writer or team leads reviews for clarity, structure, and compliance with Contentstack’s guidelines

3. **Stakeholder Sign-Off** *(optional)*

   * If necessary, **marketing, legal, or compliance teams** approve content for external use

# Uploading Documents

## **Uploading Documents**

### **Stack and Content Type Guidelines**

* **Feature and Product Documentation**

  * **Organization**: Contentstack Docs

  * **Stack**: Contentstack Docs \- 2023 stack

  * **Content type**: Docs Article

* **API Documentation**

  * **Organization**: Contentstack Docs

  * **Stack**: Contentstack API Docs \- 2023 stack

  * **Relevant APIs**: CDA, CMA, GraphQL API, Image API, SCIM API

* **What’s New Messages**

  * **Organization**: Contentstack Product organization

  * **Stack**: cs-product updates

  * **Content type**: Releases

### **Document Entry Formatting**

#### **Titles and Modules**

* **Entry title should follow this format**: \[Module Name\] Entry Title

* **Example**:

  * \[JSON RTE\] About Slash Command

  * \[Java Delivery SDK\] Get Started with Java Delivery SDK

#### **URLs and Breadcrumbs**

* URLs must start from the breadcrumb level after /docs.

* **Examples**:

  * /developers/branches/about-branches

  * /content-managers/taxonomy/taxonomy-based-content-filtering-on-entry-list-page

* Use the **Breadcrumb** field to add referenced entries for hierarchy.

  * **Example**: *Developers* → *Branches*

### **Article Content Formatting**

* Within the **Article Content** section:

  * Select the **Article Section** block

  * Enter the **Heading** (page title)

  * Add body content into the **Content (RTE)** field using HTML view

**Importing Content**

1. Use the *Docs to Markdown* GDocs extension.

2. Go to: Extensions \> Docs to Markdown \> Convert

   1. Check Use reckless mode (no alerts)

   2. Click HTML, copy body content, and paste into the HTML RTE.

**Note**: Do **not** insert images in the GDoc itself — use //ss as a placeholder.

### **HTML Tag Conventions**

* For special formatting, refer to the **Tags for HTML-based Rich Text Editor** document

* Use step-sec class to link related steps

* Use semantic HTML tags for tips, warnings, and notes:

  \<p class="tip"\>\<strong\>Tip\</strong\>: content here\</p\>

  \<p class="note"\>Note content here\</p\>

  \<p class="warning"\>Warning content here\</p\>

### **Image Upload Guidelines**

* Upload images to the appropriate **Assets** folder **before** embedding

* Use the **Embed Asset** option in the RTE

* Add **alt-text** using the **Edit** icon:

* Use sentence case

* Avoid generic alt text like “Image A” — describe the content purpose

### **Link Handling**

| Type of Link | URL Format | Open in New Tab |
| ----- | ----- | :---: |
| Internal CS Docs | Starts with /docs/... | ❌ |
| Third-party and What’s New Messages (CS Product Stack) | Full URL | ✅ |
| In-page anchor | \#anchor-name | ❌ |
| Heading on another page | /docs/path/\#heading-name | ❌ |

**Important**: Never include Google Docs links in entries.

### **Embedding Videos**

* Check for videos on Academy

* Ask Janice for the embed link

* Add embed link to the entry as shared

### **More Articles and Related Content**

* Use the **More Articles** content type for related content

* In the **Related Articles** section, reference the actual entry — avoid manually entering title \+ URL

### **SEO Section Requirements**

* **Meta Title**:

  * **Format**: Entry Title | Contentstack

* **Meta Description**:

  * Keep ***under 160 characters***. Include key terms relevant to the content.

### **Landing Page Integration**

To add your entry to a landing page:

1. Create a **Second level navigation** entry in the Docs Article content type:

   1. Title: \[Second level navigation\] \- Entry Title

   2. URL: Match your documentation path

   3. Add appropriate breadcrumbs

2. Within the **Article Content** section:

   1. Use the **Listing Page** block

   2. Set the **Heading** and **Introduction**

   3. In **Links Section**, add links to the relevant documentation entries

### **Homepage Feature Highlighting**

**Major new features** should be added to the What’s New section of the Homepage content type.

### **Important Pointers**

✅ Always double-check **publish status** and **version history** before editing or publishing.

❌ Do not save or update versions until the entry is complete.

# Templates and Examples

## **Templates and Examples** {#templates-and-examples}

1. **Font**: Candara

2. **Font Size**: 12

3. **Spacing**: 

   Select the whole doc and check **1.15** and **Add space before and after paragraph/list item**

   ![][image6]

---

### **Technical Article Outline**

* **SEO Title**: {Doc Title} | Contentstack  
* **SEO Description**: {SEO description under 160 characters}  
* **Page URL**: {Mention complete URL}

# Title \[H1 — clear and concise\]

**Introduction**: Brief context of the topic

**Quick Reference** *(optional)*: Bulleted summary of what's covered

## **Body \[Subsections \- H2\]**

* Subsection 1 \[H2\]  
* Subsection 2 \[H2\]  
  * Details or subpoints \[H3/H4\]

**Info Panels**: Use Notes/Warnings/Tips as and when applicable within the body. Refer to the [Frequently Used HTML Tags](#frequently-used-html-tags) section for the tags.

**Next Steps**: Optional CTA or link to related content via Additional Resource

**Conclusion**

---

### **About Article Template**

* **SEO Title**: {Doc Title} | Contentstack  
* **SEO Description**: {SEO description under 160 characters}  
* **Page URL**: {Mention complete URL}

# Title \[H1 — clear and concise\]

**Introduction**: Brief context of the topic

## **Key Benefits/Features \[H2 — subsequent heading\]**

**Context**: Add benefits or features for the introduced module.

---

### **CRUD Article Template**

* **SEO Title**: {Doc Title} | Contentstack  
* **SEO Description**: {SEO description under 160 characters}  
* **Page URL**: {Mention complete URL}

# Title \[H1 — clear and concise\]

**Introduction**: Brief context of the topic

To \[action\], log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1. Go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) and click the “Entries” icon on the left navigation panel. You can also use the shortcut key “E” (for both Windows OS and Mac OS users) to access Entries.  
2. Use the checkboxes to select the entries you want to add to a release.

   //SS

   **Note**: You can select a maximum of **10** entries at once.

3. ……

**Conclusion**: Brief ending of the topic 

## **API Reference \[H2 — subsequent heading\]**

**Context**: Add reference to API requests for the CRUD operations.

---

### **What’s New Message [Template](https://docs.google.com/document/d/1Rx61HtDqti7Yx0mb3jJOCs0CHIgepLlPeUhtaeLW9Hw/edit?usp=sharing)** {#what’s-new-message-template}

# Post title

*This should either be the feature name or a short action statement that begins with a verb and explains in the simplest way possible what the feature/update does. For new Marketplace apps, the title should be “New Marketplace App: \[App Name\]”.*

# Release date

May 11, 2023

# Post type

New feature

# Post body

*This should answer the following 3 questions using clear and concise language; no jargon or buzzwords.*

1. *What is it? What's new or changed? What does it do or allow users to do?*

2. *Why does it matter? What is the impact or value add for the user? Is there a relevant example of how it might be used that we can include? (include a screenshot or GIF)*

3. *How do users learn more or get help? (include docs link, support contact, or other relevant resource)*

# Product(s)

- [ ] CMS

- [ ] Visual Builder

- [ ] Personalize

- [ ] AI

- [ ] Automate

- [ ] Launch

- [ ] Marketplace

- [ ] SDK

- [ ] CLI

- [ ] APIs

# Plan(s)

- [ ] Start

- [ ] Grow

- [ ] Scale

- [ ] Add-on

# User role(s)/persona(s)

- [ ] Content Manager

- [ ] Developer

- [ ] Admin

# Publication channel(s)

- [ ] Documentation Site | Changelog

- [ ] In-app | What's New? Modal

- [ ] Community | Product News

Widget Description (under 160 characters)

*A short statement under 160 characters explaining what’s new. This will appear in the stack dashboard.*

---

### **API Reference Template**

**Topic**: For new sections (H3)

**Topic Description**: Brief context of the topic

**Title**: Title of API Request (H4)

**Description**: The ‘Title of API Request’ request retrieves all the entries that satisfy the condition.

**URL**: {{api\_server}}/v3/{enter the URL here}

**Method**: GET

**Request URL Parameters**:

* **param**: Enter the description for the param.

**Request Query Parameters**:

* **param** (datatype): Enter the description for the param.

**Request Headers**:

* **authtoken**(required): Enter your authtoken.

  **Example**: your\_authtoken

*OR*

**authorization**(required): Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).

**Example**: \[Bearer \<OAuth token\>\] or \[your\_management\_token\]

* **api\_key**(required): Enter the API key of your stack.

  **Example**: your\_api\_key

* **Content-Type**(required): Pass application/json value.

**Example**: application/json

* **branch** *(optional)*: Enter your branch unique ID.

**Example:** main

**Response Status**: 200 for GET and 201 

**Request Body**: N/A for GET and DELETE requests

**Success Response**: Add the response in “Courier” font

### **Frequently Used HTML Tags** {#frequently-used-html-tags}

1. #### **Inline code**

   \<span class="code"\>text\</span\>

   **Note**: For API docs inline code use the shortcut in RTE

   When using span class code tags, if you have a URL with "\<" and "\>", instead of "\<" use \&lt; and instead of "\>" use \&gt;

2. #### **Code block**

   \<pre\>  
   {  
       "roles": \[  
           "role\_uid"  
       \]  
   }  
   \</pre\>

   If you have parameters with "\<" and "\>", instead of "\<" use \&lt; and instead of "\>" use \&gt;

3. #### **When referring to lower headings within a doc**

\<h4 id="section-name"\>Section Name\</h4\>

4. #### **Notes**

\<p class="note"\>\<strong\>Note\</strong\>: Text\</p\>

5. #### **Adding bullets within “Note”** 

Use a \<div\> tag instead of \<p\> tag

\<div class="note"\>  
    \<strong\>Note\</strong\>:  
    \<ul\>  
        \<li\>  
            List 1  
        \</li\>  
        \<li\>  
            List 2  
        \</li\>  
    \</ul\>  
\</div\>

6. #### **Warnings**

\<p class="warning"\>\<strong\>Warning\</strong\>: Text\</p\>

7. #### **Additional Resource**

   \<p class="add-resource"\>\<strong\>Additional Resource\</strong\>: Text\</p\>

8. #### **Tips**

\<p class="tip"\>\<strong\>Tip\</strong\>: Text\</p\>

9. #### **Section Listing**

   The step section tag must be applied for steps that are lengthy.

   \<ol class="step-sec"\>\<li\>list\</li\>

   \<li\>step 2\</li\>

   \<li\>step 3

   //screenshot

   \<p class="note"\>\<strong\>Note:\</strong\> Text\</p\>\</li\>

   \<li\>step 4\</li\>

   \<li\>step 5\</li\>

   \</ol\>

10. #### **Table structure in RTE**

    \<div className="cs-table-wrapper"\>  
        \<div className="cs-table"\>  
            \<table\>  
                \<thead\>  
                    \<tr\>  
                        \<th\>Headless CMS Benefits\</th\>  
                        \<th\>Explanation\</th\>  
                    \</tr\>  
                \</thead\>  
      
                \<tbody\>  
                    \<tr\>  
                        \<td\>\<strong\>Omnichannel Content Delivery\</strong\>\</td\>  
                        \<td\>\<p\>Headless CMS can power touchpoints across any channel or device. From websites to mobile apps, email marketing, voice-activated digital assistants, Apple Watch, AR/VR, and more. Content lives in a cloud-first content hub, and deployment is simple \-- nothing to install or manage.\</p\>\</td\>  
                    \</tr\>  
                    \<tr\>  
                        \<td\>\<strong\>Rapid Content Deployment (via API)\</strong\>\</td\>  
                        \<td\>\<p\>A headless CMS like Contentstack offers an API-first approach that makes it lightning-fast for developers to pipe in content. Using our Content-as-a-Service (CaaS) architecture, you can quickly scale or deploy new channels in an afternoon.\</p\>\</td\>  
                    \</tr\>  
                    \<tr\>  
                        \<td\>\<strong\>Modular Content and Assets\</strong\>\</td\>  
                        \<td\>\<p\>Because the content that lives in your headless CMS isn\&apos;t dependent on any specific front-end display, content becomes modular; it can be managed and deployed across any relevant touchpoint without being duplicated or reformatted.\</p\>\</td\>  
                    \</tr\>  
                    \<tr\>  
                        \<td\>\<strong\>Limitless Integrations that Power Next-Level Digital Experiences\</strong\>\</td\>  
                        \<td\>\<p\>The headless CMS allows you to connect content to a nearly infinite array of outside services and software. Your content is no longer siloed from systems like CRM, AI/ML, personalization tools, or localization platforms.\</p\>\</td\>  
                    \</tr\>  
                \</tbody\>  
            \</table\>  
        \</div\>  
    \</div\>

[image1]: <data:image/png;base64,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EfqiqFAQwrjJSxPWR3DSZUluyaK24ceNEyOPaFRgW3+5KFR4KUp6qPBSlKuE20hJ+INkRAkvRVEUpeyhwktRrgKjJywu0oPgosJLURSlfKDCS1GuAi+8U5hehWTMRaHCS1EUpXygwktRcsyFC5fivF3pDM5W4aUoilI+UOGlKDmmz4BpxepmBBVeiqIo5QMVXoqSY86cOR+aGwAzFURND9dLcx1FURSl9KHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHKHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHKHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHKHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHKHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHKHCS1EURVEUJUeo8FIURVEURckRKrwURVEURVFyhAovRVEURVGUHFFs4fXbb79ZS/b9aluujiVX+1FLbdm4D1HbKC5R6/vTUllxl8+V5ftxZXM/2dxWJuYfh/87mWWCv618tny8HuX9nItL2sKLjV++jF02Fy9esnYhsEuXLttPjGnyW5bht5g7XdaJ3gafrBO/rKwr0/x5fHJ8/vL+d3d/8fuNnVvUvpIt55t/bO45+Nv215XtuvMvOvtiWzErvJbup7vtQostm+rc5HvUfXCPz11e5vnbSDgO55z8bUXtN9m2+JR7m2xdfx/+dpPtw/3OPlivOBVKlnXrhrttKQOR99eZ7h+Lf6yyfZnmLiPbSLYPf3tR+3Lvqb8N/zpLuZLfdr+XYtcuar98d+smy7nl2D/e2Dajt8Onf62j9pns/rvH6O7PXSa2/+hz8ZeL2oa/njs/7h55903mu9fnkrNdsajnirtt9zj83/699K9TqmPmuqfT4LjLsI7UK38//rG5+3LNX9c/fnc7yc7B/+5O8/dl74uzXXdd9/jcZ6Rfz/39yDkUbifxmJOtX7gPp7wU7M81d1l3m+48//5HHWPUvt1jS1b++O7Xc/kdXjfn+vlWuF7h+lHLxC+beP/9dWUdfzl++/vw56fahqybbr0QihResiF2sOnCGTW1vLBfAnMrlI9byc6dv2h2HPtNTS0v7OBpE9fQ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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACWCAYAAACcnhkMAAA4n0lEQVR4Xu19B5cVR5am+lfMnjl7ds7Zs2fOTqunt6dXYyT19ABSq1fICwojARLeeyM8CIT3CChAQGELJxC2oApPURSuClRAUfjCQxVWDuHqbnw3IjIjzXsvX76XNEIvz/leZEZG3LgR+eXNm2HyvfDjTz/TntITVFRaQUWHT9Cew+V8vAf7peUyTp9DPNLqfU4vzql4eazzpkOmTGuBZarz6hjpY5YfhcyU6xSFzBTrFIXMlOuUvMyDx07TZ599Rl988QVNmTKFXmBy68wqkRRUbhVSaCgiK1ThLJTjyqViSsF0yJR57HRW3GFVITO9T/lRyLTzhKtTFDJlHjtdsnWKQqadJ/k6hZW5v+wU9e3bl0aOHEkTJ06U5GZBnBh3DYTKium70zrWhWtFTCVNcPo0yORKQY7Mz3n4vKwU9q3K+5UfhUyuQwp1ikJmCnWKQmbKdQop84Ait9NyawFKuBmame1Kq+MjumCVXt9RxmMjJZkqlHlkGsgutMpTclV5fuUnklm3cQt6q3FzerNRc6rbqIWtawyZb4r08eqkZcSqE85LNKf8wgOcduSXc+jDT9vHlGnJjSHTXaek2ikKmTo/zut0lixVlorzKz+szP1HT1H//v2Z3NOmTVOWWyWwzDxn1IWaRFGPCVUojguR57CRTymQDpnyDrYbVsYhrVE5zuNffiKZIPX6bUUOmSAdZNUV50ZNncvnvpgym8mF828hFLL6DBvPaSCrdc8Bal+Sf/mGbXzTuMufvWQVy3mnSWtasXG7peewidlWuXm79ysio9yZ4qaT+7r8gWOmWkRv2KarLFfs6zwFRYdUXPraKUzbp3Ltw8o8cOwMW+7hw4fT5MmTnZZbVwSZ7AroCspju8K6AAV1B5qNkKpMq/ER6vx83qygTuNffjyZ9Zt3kiQ8LEmtLSrSIb5px9587v1mbQVp7XjEfdSumyBeS5Y1Z9laJj3LEed37C9jUsLKmeWb1nf99r2WzM8nzuB8up0GjJ5MDVp1sWRChnwiVIhyu9MHn7bj+MKScpo6N1fqsHSNTFsqn0bB2ym6trfikrz2YWUeEJa7X79+TsutK2RWzN6Hj6OFmufMOxAF6H1V+TTI5BcPndaQo/MzEpYfXGZ+4SFpmRPKtPMlW6cgMrcVH1aWOpjMeHVK1E5RyPSrk70frE5hZB44dprJPWLECJo+fbpJbiTA3YBHkCFIF6TSyMeVLBQh+2AOZUwlUpNpVlg3LFfGOo/QFecoPwqZqdUpCpkp1SkKmYwU6hRS5qHjZ9nnHjNmDE2YMEF3BaIQJFB3pS5QF4BHEYcQbBYmK66V048vjkuLTKm0hhXnqBgapdy//ChkplynKGSGr1MUMlOvUziZJeVnLbfE2c/tgM4oBVoClEK2QIlCXbClsMqXokxZMVkZv3zyvNPCOMqPQqYDydcpCpkp1SkKmSqNjeTqFFbmQfFC2adPH7bcDnJfv/NTBhn8olF19z6TG5bbGsTJkDuD5wEgt69b4k74S0Jp+Tl68JjowROih48l+NhCjbWvzz9EnEqP8ziWkHIePFJ53DJxDsePlAwrvYaU4dTBLj8KmanUKQqZfnUqPXEueJ3iyHRfexOa3KNGjTL6uX/h5D584rzdoGg4bhB5EfSFclwwblicM4jkaGTXRTJk6v0HTwzZVpxKh3MGUc3yo5CZSp2ikOlXJyZ3EnWKJdN97R24/QMP4oDcoS135bU7NC1nqXX8XtM2njRPE9oqPORG0xfDtAw13G/84SftOew9dLR9cbhx3fv2xVy5frO/TG70Gs6jZemLIIkh05ny+ALF0zOkTBmndDbSxaqTWX4UMv3qZD1dtQyjTm3btvWFn0z3tTdRdfcnnhUYGblBHh1u21vCMON0uhFTZnM4ZNyXnvQft+vhKTMeDgtyc0PynQ4C6QZB40nrI0cfJWbMz7UbWjTu3kPf0t3v7tPmHXto1YYtjoszfvpc+vH+Q9q4bRfH37h513GR5CNUlmGTRMfb5TtI4dLTypOKTEd+GSdvEpnOQTiz/DTJxKgoRmVj1UmS21snTeSJEydZ5ZsEd7eT+9qbqL53ny03ektCuyVByD18EuZLSDJtLz7sOAeMnOoktz6vgeMmHXrSGEEud/lugNxWg8KK8IVyXiRTdtP2Pfgc9hu07EQ9Bo6gO9/fp/OXrnEc6jNzwTKWCXJDJuLfbdKGQ/vCyka3fETrovmQxLB2bj2dZElepkSNTTyOd+f3Lz8KmX51KjlxNmad3Bbbstw+Mt3X3gTIjUEczC2ZOnVqOHI/a9CPPOsimRfoibYU+kLqhtJpVYPzRVSNaTW+V6ZlVdVFl+ftxpfxhhxX+VHITKVOUcj0qxOuUdA6xZPpvvYmQG68UGI+93ND7pLy87IxVYNZF041lhWHhsMjWTWcdROY+YzQT6bDD9SNbsmw5fOj36f8KGSmVKcoZPrUqRTXyJKRqE7+Mn8SB+5rb0L73KNHjzbmlvzCyZ1BBgC6Aj3LzNyJMsjgWcW1a9fowYMH9PDhQwuPHj3i8Pbt295lZm4Bbly7/SNdufUDXbn5vcB3keOywLkrN6m49BidrLxKV0W5bp0y+HVCkxvYvXs3o7CwkMl969Yt7zIztwBLkCD1ycpr1GDsXmoo0GCcwNgiFQLFKpTnG44rch6L80ADxDP0OZkvlsysMXvo/7zVkX4434xyZjegdwdvpC8W7acL1257dDR1xU3gvlGixfd0Vdz0bl38gHRPyzhooD2C6Pe0jZdGUP0cuipya2K7ye1ZZuYWoAEF9h46yqR7vf9autmqPl1s/j49vnaFdmX9lR6dPUkPjx2mx5cv0OMbV6k6bw3dbF2fbrXKomoRAji+2boe3WqdpUJ5LOPrs8yv6/4n/Vj5iUAzGZ5HKAGC/3AB59R5cbzh6150ufo7S0800pZde6nry9Op6yvTqYtA15dnyGMVh7DLK9Pk/iszOOzG+ypOp7Mg0rxqx5syu7AsGd/3wxl0ShgAEMTdfhoXrt+h4bkLqX7+QsraLMLNC3i/Pu8r8PEiR3w9HYd9feyXb5NKD7nmOYHc1evoktFWbkDvw8dOE+37C93bVpu+E7i3rRbD3LeOt4v9rXbcva0ij8BdK642x8k0RnqF7ziPnW756jVx9XMjHrnv3LnjXWbmFqABchcdLGNy1+mzksn46MJZJvT9a1cpL+sd2iSwun5d+q78qMAxOvRJAyoROPSpAvYZDUV8QxGXRSVmvNjf9dEH1Off/0j/8ff/je6dbWoR+QcRAprw//TbF+mDrIa0eXuhw1WBnuvztytSTmMCtv/PMdThz+Opw3+Ns8L2CHXcfyEcTx3FfkcOBWqpuFqI09BpkF/K6vLKl1xGN1FWr/enUvnZS3HJXXn1Ng2c95UgJ8i3iOqtyKb6y2dQlgDCerw/nfcl5Hk+t0yEy7JliDgdcpps+lAcAyxPhPWWTlM3hbwh5i5eRpeq7nl00oDeB46UC3K/rkhZm86urk0VX/+FTq6SOMHh63RSxFV8/TpV4PhreXxiJeLeoBN8Tp7X+TivOMY5PhZh+crXrBsFN8T8xblx9XMjEbkxK3Ds2LE0adKk4OR+TZAb1vde6QG6d6iY6nSaTRuKT1PljR/orc+WUd0ei+jSzZ/YvbBdlCLperjQ0HJP5L4OP/h8M3348Tu2xT7vJPncBUvp4g1vQ2hyd4FlVVZ29YZ867GXLuDRffTUBepWe5ooaxo/CXq8OzkwuTXhBs2aSWcuVXnkpwq0Q8HOIsrKl9YeVj0Qub89IckNwgksmT0kUv2+344ngnwqpJvcnmVmbgEamtwNx9iWm92LVvXoje4Lqbj8Kt24c58W5JeLNEWStNp31j42yKv9aoYkPmTa/rnwwUX+f284kP6j1r/R6//w32nUK/9ChxrVpaF/+Qv9j395g/7uf/2R3vvgAyo7WekhksNyvywt9zcbC7hB3XVKBSj3+BlFbr6JYLmnJEHuBRa5z16u9qRLFdo9q6/JnazlVm4GyB2lft+B3Oyi1BbkXhJXPzfikfvevXveZWZuARq25S5iy22Tuz69+dlK2xqPUy+WbIWNl0XrRRHEN/YV0fULpSS3lFV/5C4606qxKAs+en3Kb91axO3k9N9WnPPtObHIDWKzWzKD1uRtiY7ctbQfP4N6vhfccoPYINyQr2ZFSp6sAtvnnrsoMbkPllUQFUtyfydIt3TO0Ej1+97w2+cvSi+5PfO53QI0/Mit4SC34WJY1lmRW7snVhrznLVvg8nd+iP5MtpGkjsL5Bayj5+56Esi03LrF71IyV1bvoSiLJC74txlX700mNw5ktxPz3Iv4BfNQJYbbgnILQgHP3jxVxFbbn6ZlE+JdFpu7XM7lpm5BWhYbokg3Wu9V1jEviUsd92+ityW66HdErt70LbmJrllt6C1bxAe+esJIoPcuqz8Vq2k5Q5A7m7cswF/OGK3pBaIPYMBcsfSS8MkN0gXNbmz+IVS9pzMXbw0LnncPjesadRuCVtu1bOSTnJjEMezzMwtQMOy3OPkC6XsupPdeSC36Xo4LLI61vH6BtBuiUV6Pt7L/jbnEcgaBcvdWHUj1hOWu5Ug/C5OF4tETssN0kVL7q7aLRGAzx3Ecg+YO9tyFaJ2S2yfe0EwcsPnFpabu+kE4XIjdktkF6N+oUwvuZN2S0A6Jncru3+a3RImrE1up0uCEAM4LmLrG8Eit012dktG7aTTgtxwSVBOgbbcAcjN/diqDzpKt6THa6qP/OXgXYED5ghyc1egcEtmR2y5C0xyB3BL+IUSXXSyK3BJxG6J1VsSQVegZ5mZW4CG6ZagtwTuCLslbQxyM4mdpLYIaxLdIreP/62JPk6SW7ol8kYqaCVfKHE+EblhSbu9HK3lPna6knrUBrllOUHJbb1Q5ku3BNML3OlShcfnzg9uuWv2/YUHY7RbEqV+dm9Jei33zZs3vcvM3AI0HD638UIJkmtySyusLTKG20FSGWq3wyS9tvAecqsQ5D4LcrfR5BZuiYjDDZSI3PC5NemiJHdXfqGU3YEgdxC3BD63Hl0cNCs7UvLUL9CjmwFfKJncr3MfN1yGqMktfW5pvdNpueGWeJaZuQVoOC33CvaD4W+D3H/l3hL1EmkRVZNcd/fhnCK6ugm0Py7JrNIb5P5g5A5Jbr6RsqTlHhXQLeHhdtmTsWTFN3T0ZCUdPX0hbTh2qpL2lpSJF8ovZVlJWO5B82yfu++XU6jk6Ck6eiq9+pWdPE/frC8Q5IbllkP5gSy3fqHkofRaNG9av0j1Y8sdgc+th98dy8zcAjTsrkBB7t6qn5v97npMcDlPRIF9ZPRNy/5pTU79AlotwmpYY7g2yr2xnwQxZAoUiBfKIORel79D9T3ruSCy10QeS19cvwTKOSfT1NwSM8481vNQnDLttHI0NPALJZN7gZxb4jc/BOEm95wTDPrAT3fNGcmXg0EyrXEu35xfEry3ZL96odQDKxq6u07OObH7puU5Sc67/BKq5o3g5lCkteaacGint9KqMCfN5PYsM3ML0MBj5NC3FWxVP/g8n2q3z6b/ajVZYBLVao1wMtXCMfYF/izi+XzrKeo8jgVaAzqNAI5Vvj8rObFkvtl7KTUYU8g6VJy/6ksiuB+Hj5+hufNz6cuZc2lq9hyakv2VA4jTcMebx5NnzI6Z14z7cuYcmj4rhzYW7KTKOLMVAcy22164n6bPnpdSmfo4Vrw77qv5i2n/4XKeNuDWyQSG2pevXi/y+Mv7W+tnIhG5PcvM3AJMgDjnrlTT4fIzVFxyjC350wJmJO47fJwfaRdu3PUldga/LsQjt/a5HcvM3AIyyOBZRTxyw3I/88vMYKExR/rr1Qt4NY7ffJIMfp2IR249iINZgQlfKMMAxIQrg6VicCWwegYvVPBLcYxFBvCx3C4GjjmvIHJZxXlq0qwRz+O+dbIJrd20jSe06zTuMpNBWP2eFnQboL4Xr99lvaDfhWt3eLpvMqt/osDfWr945E5qmVkQoCKo3K69B+lK+49VV6EayXT0iqhVOGrk8ZY4rhLnt+RvpS7de9N35/S8bWMVjrUax57X/eOFZtTwo6biDTvY6g1cCDwFdhYdpO61s4lX2KieEXNFjb1Kx45DL8vmgiJ+kUWPjFt2qgBR0FNw/PRFWlhQoGbzyV4O3RsiV+DIARkrns8tom4bllLpsVN07uqtpF7KgsLUb+eWZfT9DrvHBH3iuq/a6jFRvSfoCUGvyclNbdKuXyJyB15mFguo9Hmh8NbdxXSnTQOj+68e3RH7ZS3rU/+WLahP/0E0dMQYGjF2Ag0bNY4+GzCYurdrRwdb1KN7bRsw+XU3YFnjt+jjl/+N/vc//Y4ttrkKB+E7b/9fqvP6G5SzeDkPMMSzrFq/aSOWqy49TVx0/2XzSpwWH3f11a91yy7UrtYo6v7qLCa/ORlrVMcFfKFTdZPwdCg9fpoac9ef7P6TXXiLqOHOFdRw1jhq17Er9R8ynL4YPZ5GCv2GDh9NPfr0o48G96N6a+cYXX8A+rQX0eotO/jlP17bBIHWr3rLG3b3HaM2PSp6nXbOqRtTv0lDG9G1PJv4kvy1uW87f2t+yvrFI3dSy8z8gIrDD77Txib0zVZZ1KNzd1q+egN31PPjST3a3UC8tAYX6JsNBdS730D6ThAdVv1Ek7dpwZA/SYstrHXu7DfpJ2vt5CfcfeS3EsdPP5BYL1zo/mo2dezYK7R+ILrZBz51WC53nyV7kfCUO3bqAn2ywWmF623IESSZQPk7iuj0heuiDvc4rVs3xOHGgit18NsK+mr+EmoyfKDLqi+gneIpmqid/KD1u7L5PaN/uzZVba4dWr/pXzRWfdvSwsOqh9UPSETuwMvMHEKF8mcu3qCiYQOkeyEIjYUL/foNoH2CTGEfO2iQ0xevU86SZTTi5T/Qn//+76jFb/8nFbxfhzZt203rN2+nNu070Uv/+u/01jvvCItyxpdUWr8vOs5RAy0YZMmmabPm0omzl1PWb/6SFby0DMP7kN/9T7Po4JHywFac++LLzzAJs5Tr0eirCVw/PGX86hQEKB+P/mEjx8phd2XJm6/JoVPCnQrq/14UN3Te1h2S0GrgZce8d9Oq33fb1aCPIPqp9fWT0k8jEbkDLzMzcVY8TnZ+PsBa2f5D+4aUu3JN3M8tJAM0Am6SBV07KP88i24L/xx96yAmWwVlLdx5Aeg3vNNX1sSpHn/6igr3Hw5MvkSADuhz7/7JCCY3SA5Av0QXCDp/e+KcGoGUxP58zHgqh4uTIG9Q4GV49fp8arA91xqhbCUIjhs+Vptp4H0CLub3anQRfvXIMaMj0e/n3XWkuyLKOLm+YSD9TMQjd1LLzDRwYfcIonzP7kMWvxROnjaTzqV5WiSIuGPPAbrOQ/b1+CbaMmwQWw53WhNavx7CfdATp6Bful8CtX6dsfpdTZz6ouushPrhEZy9bLk1tP7Rill0pPxs2oijAUMzb5EsBxOnsgoW09ZdxdyD4U6rAWIdP3OJzq2ra02cOrH67Uj10/PGf9hRO6F+biQid+D53BoofEP+TqunA5Z15do8x7dD0gG2cBXCJ26LNZSyt6Wka+uYw+4aWj9zHgj0S/fF0fp1q6XmjQv0+uDLhPqhu2wQZgUqH7v/zOnss7vTpQrcfJu27lLzueW8lJzclXF7lqA3Jk7VFMtZgSDd4lkDItVPzueWT4hFS5fH1c+NeOROapmZBpTasrOYfhSuiCb3/NnzEs6pSBawwHsPlcmXVdWLsmTIEDqboKG1fj2FK6JXpc/IXpg2l0RD64eXVf60gyD3kB5TE+qHR/K0OfOVPyx87Q3z6dhp/0lgqQAvwivWbGDXBxO0srbm0jrhM8d7gkEHvGQf/fp9Nc+6Nl3f/Eak+umuwh93vpZQPzfikTupZWaWQFHJU+IteerQzxW567M/vF08opOZ0RUPKANTRys6fyp7YARuiHLw2EpEUq3f4P7jrD5quCdHTqTv0ar16/WW/GYJuyWvTgukH3QoLjlKDdagC0/63COXL+HVLukiEJ5emI+TtXWJ1XPSfvrEmDMpTWBAJvfrtewm6JmBeStGRaLfT7tsn3t5dptA+plIRO6k3RIWeltO1B87eIhFcBBw/9B+CR/L8YB8sGyF+0rpTlv5yTXIrhYuyYaCHYHvaq3fwH4jjUGY6UKGnLWXDv26vTrTkgurnYx+uAG27t5HDbbJFz7dDXjo6CkeLXWnDwrZm3ODxq5abrk9QKcJo7mXIujNXSneG+YtXkb3QT7VDQjXIV36bVk9VroiTOzaNGdih6T004hH7qSWmbmBC31SEHnK9Fl0lwdv5EgjfOP8dRt5JBAXOxGRcB4XG5XeVrif7jKp7dHMOR3bcl9osj69qV+3VyQR5aKCGbR69ZbQ+nUXpObRTOXPd/54SCj9IHPVunxqsGKmtVKGkTefSYTBqSBdltAPfioGlCasX22PWm7CS+QiGjNhcqieDrz4Qr9Tq/8qv/GnXjBvF9QOrd/uDRPUjSK/Kfi9eDqE1Y9lxyF3UsvMYgFK4XEyc84C2t+iIb9o6tXqICd85qsdPqKyEQNp5+IltG3tRtqdu5QOj/6cLnZqZg3aWINAIj96Yvr0G0Q7ilJ3dbR+w0aMpV5/miP9Y+NlE8TvXiebxnRaSAtmbaTVq7ZR7rw8Gtd9MfV6I5t6vIKbQ1t/ObqJnph06IcLj96VNXkF1HbQANuKg5iKpA13LqOWmxbTF3nf0MItW2jZ1u00PX8jdc9bZvWEWIsV9P6q2TRZ3NTwnxO5SfFg6jd6cBuHtdWr1h/tqUMXt2RRyeZhtGvrMtqxbQ0VFWTT6fy2Mj1/dEekVStu8KJ6YW2d9OgXh9xJLTNLBDQERquwHClbvDB91qkzXfKsppErbOxjOfgDa9+/Q3uakj2b+6PPC6sQ5k6OB8i7KFwK+LvQr0O7XsJPnsIDPKbr4lyBg0EaOf+kbcuekeoHP/TMxetUsH0PjR43mZoO7Mvdd/XyF1lE5w9nahKztZfD9fVzplCPvgNo0bJVPDikJ5a5y0gFbv3GDfpY+uXKopsrdbQbwz67IPXBRX+lPn37pV2/eOROaplZMuBHOcgkrBqGaDE3YbfwUzFkm7dlF+WLBtq5t4RKjp7kD8pfuH7XGgJ3y4oCvwj9BJkwCQ0vrvuPHOc+9fxthbRp627aIl5ciw4c4U/KwV0CWdJ9s8XDs6JfInLDco8bNy695M4gg6eBROROaplZBhk8S4hH7swyswx+0YhH7pSXmcHvwuRz9G2Xn7mUdpw4d4V9YnRLhfF3n3X9kgFe6M5eruJZjW49EgF68ktwCj0TifC30C8euUMvM8NAyKbV6zzfFbG/H6gGXzzxErqHRKczV+nEklnVphHPpgvyYgL9VizPlz0e+C8bQP+vDcfZnx2WceoD8jrtq3Iqq5XfDB0yZV7I7v7n7MD6JQPcNCfOXaaP12HIHiOawHwZ8v/fiP38+TzL0DqPGYc65JmHMs/yiOYAQb9LeW+rHhLVc6K6DBGH6a3ub5X49a58vXZ9UvrFI3eoZWa4u7bsLHJMnBoyfKRQbBN/cHJtPGzaKuEX7wrRtzpnfi5daC0HiHADlHZvw5YynpXU+pmkhH6YYukp140Q+nX58xTrRvms3rSE+iUD9NBg5K7hjqVM4HqCoFnr59KsnEVcvkdPA2s2FPCCDrlcTeZN9FGeZKH1e1go/9sGqNpUJyn9zIlT6fziVKhlZvpzZbZ1rcekRh+3O20qAEEwhH6xXWNr4tShzi0Sfq7M+pzaq5JwmPMB/aKwqNBP/m2IfBIE+WeFoEA9du8rUYsOhFUW5P5kxvjA89L5Jt9VJMiNiVNyDkuibwUmA60fRhn1usn1sxolrR++FagHhNL5rcBQy8xscusBGUnuoPMqggIEwSeCL3f4SK32qUelXVolJI/Wz3I9Xn1KnzB+JdgnjIMAddhVXMJWF6SGe9FkzkRewBGEOIAkj/7bEOmWpIvcWr8flNXFUPrWnPqh9IvyE8ZJLzMzya2td1TkhmW8oOZzg+DJWG57IXB0/4nDX3mthRmB0v1Jh+XG/1SuWJenCClJ2Xv0aDqKoeok6qDJo78hCOufDrcE+n2zbj0TUi40qEUTxvQLrZ/+ECaG5dPploRaZmaT257gFCW5L7eHWyLLKe3aMiF5bLfE/qu+KMnd4zX7MxBB/s0sFpAHq5lGLMc0VfXSKF4Gx0+Zzus2Y8mE34sXulW7C2nK5vU0ZdN6mpy3jiZtXEuDF+eouSdwa1Ijt9avYOUIx8vhhID67du9jvblTxGYSsWbp9DevMm0MXew8UKZXnKHW2ZmWu420qLi+9dRkftSB3yfW5L7YJfmCcnjcEvUS2WU3+fu/prde9Lj/UkJ9fMD0qO78tN1ObLHQ7ghDbYupoXLvubpp+70Zr6yk5XU8Js5slckX/WYbJI3hu4p4RfRbUtozcatoaasav0q8z5QLkRt+mlnncD6Va570zFxSs4Tlz0qel4K5nYnq18icic9n1uTR/rB0fvccEv054xhuRN9Ith2S+zekqgst/1vZjOo26tYZpb4E8ZuIC1uiI8FseVEqAXUcEcuLVz6NbsA7vTuvFjq1kiTW5C4ec5Uytu2m3YUHWK/GCg6eIT/EDbMNdL6XUZXn+q6e1hYJyn9Kte/KS29IPGuhQ3Tpl88codaZqbJgwUE+M42CB4tuT/ivyapRm9JEpZbLzHDnz5FS+7pTGyU1zNJyw2dDh8/LVep6/7ojfNpo9A/iAVDOVi8y5Zb+ehtF89M+P/zQaH1e1D4mrKwtelmQZ2k9TsPy61ujL1Lm6ZNv3jkDrXMzHZLYLXlYEz0XYHyCZHcCyWstvS7oyK37Aq0B3OSeaGEPoXFpfKfD9idQFffOCrcfyRwjwNbxhPnpOVW5G6TJnKjHaHfDzvs3oz1M9HVl7x+lev/nxy0EdZ779JmadGP5Scgd2puieoOjMrnBlHk6nfZMwOfO9E6O9vnBrnly15UPjf0Y7dE+fc93k/8P5QAdMHfmKAPWo4szqdmcybxguOgxAFMckMG3BKQGyuQEukQDzBUO4sP0Q/GyOK2nPqh9QO55Qd4alGRIHeq+lnyA5I78KxAVG7z9j3G6nfpD1d2/ZQudG1OF7u2oItdPqWL3ZrTBUHGi4A4x/E436WFiEcauc9xfL45XcJ+NykDss51bGIRG9Z75aD+dObSDY9Ofvr1+s/ZxjD5DPrs7Vn0Wd2Z9Nlbs6ivCPu+LfbrYl9AxCGeUVeC47H/lsyDkNNBjkrb4w1jyF7cREO6TkmoH3oPDn57QrzgLbZ87KzVc6jpugX06caF1HzjYvo0b6HYXyTCRdRc4NNNcl/GLVSQcc02LKR6eXI4HgRvvSg7JcuIeTJruKtPDaELXFz3F7qU9x5dyX+fruV/SFdFeDX/A8a1AhFqiOMrvP++FXd58/t0q0Bafsjck9skJf1MxCN36GVmuLOxwHVwz150R/WY6NFKx5IxRXwJY36JOZdE7VvzUNpksY+tz0N+WatGNDtnUeChba1f964DqNuf5JwS+MUgIA+4aEIaxLR6V6xjSVyd3pqH8qp8edRpIL9TnfGB9UNX11c5iylry2I5J0QRXLsV6O3IUnNCrLki+Qspy0hj5eP0aqAH+YSLg7/hCPvvY9AdK6l2Lm7CPrbux9ZuieztkP8Jz/sqRE+IndYF3W3Iaybr0LTsWaH1cyMeuVNeZobGwGwwLADFHX/pxt30QhABLy5hXQpTP4/sdCCkfkiPfOlsM8gKo4sf8HThb24/o/ppaHKDzBqPHj1yDL+nfZlZBhk8DSQid2aZWQa/WCQid2aZWQa/WMQjd6hlZvCZ0N31mxd+Qy+88EIMiHO/cce9IPLoUOb9zW/sOKSPK1Ocf+nf/oP/e8Wtk59+MbcadwQ2RDpP+Cbz3ey8t+99n1A/+J2z5i2kF3/3e/qn375Iv33xdwr/LEMVp8+9qOMNOPO5j//ZkUef+90//4H2Hz6esCsPL3t3796jG1Xipe9GFVVVVYv9ahHe5PBGlYzDuRvVOl6fk9DnGIjDsT5ffdOQhbQyrL55h782kEg/E/HIHWqZGciDUScHkQ3immR0Elrv+6d3Hvun+cMfX0r4wU2tXzx6eqlsRFgnarxpPDE1jqibt+WfHrl1MoHPIbRs08Fqj1TbJHZ6L/BHpvEmJuEFnP8e26ieIwzRJkE3ZMnJxVdeY+vnRjxyh1pmZpPbZWVdVtjZsEZaF+md8XFkCvxLUuR2NpwZ+m84604R+0LZ0Xaam7fvJNSPyd22g1Wn5q3aUdGBb+lQWQVbLh2WlCmofb/z1r6BUpUGfenLVq1ztGUgcuPvsY26LVi8LFL9zG3+kvSRO9wyM9Nya/KZZPYQG9Ck9bc+juM4MtNjuZ3Wx0FSv80RHSON2qqTIrdsC/xZEr6g6k6XKvR8abNtA5HbtNyivstWfhOpfroctOyCNJM76WVmkjznXKT0WlwPaX3h9bFjynwhGXKfM6+PY/Ozz4E2/zvC2GqCuyWG5e7QuVvaBjVMaPJYRgKWOycAuR2Wm2jFqjWR6idbTmL+4vSRO9QyM5AHy/FjERQviW5ScgMbLoYfgZ0vk/4y//jSv/InhN06+enHDVZjW2lfPsbbjAymDFOmuSHutngRS6QfXjjbdexitUvn7r3p3OUIyCPaAdNJzSfggiUr4q4uB7kxC9DcVq3dEKl+5pa7Yk1c/dxIRG7PMrM9pSccKDps7ldQEfYPy3j7XLkMcYx4a79c7qdBZiGHKq0hR+dnJCw/Cpl2vmTrFIXMVOoUhcx01CmMzAPHTnuXmclESCAAYUZGqyCVBhWW8VKZQjONUsxWIjWZZoV1w3JlrPMIXXGO8qOQmVqdopCZUp2ikMlIoU4hZR46fta7zMxSXlXEcRexAkZB6jwK0MIL+c6pUHc7AAXSIVOfU3mMyuh9WQ4q5y0/Cpmp1ykKmfqcypNEnaKQmWqdbt79gR4+JnrwuEaAeP+h2D8mXM94MmG5PbMCPYVBMV0pzmwqos7peNUYdqGonE8FQsjUjSTvdG8+ed5pYRzlq/jcdVtoqcCbjVtyuGzd1qRkTpi1iN5q1NLWV6Bjv2FUV8hbt20vdRs4UshuEahOvno6kLid6uqy0tFOMfRMSaZKk0ydsF95pYoePhKkFrh0rVqSWuxntehEJUdP0IMnkuyVV6t8ZR48dsa7zMz9CNKV5EcFV0ALMvw0LVxXEqF1TqZNVSZDn1OVgJVAGjy+zMb1K98ts27j5pZMECRnxQaOz11bQHUbtaBvthSKsLmV/k0Rt2Ljdpo4a6EilF1eJ5BbnO8qiI08kA0dB46ZysdaF4uIYr99n8EsD/k++KS9pSeOsf+WSLt84zZavgFpmlOXAcNp4OgvWQ+znUyZuk6Q0ahNV867RNUHad4UcgaP/TJmO0XV9rYsHCskuPYg9cMnsNgSC8XL5twlK1VcDRMdhH8kjv1kHjh62rvMzGQ/V4ArJzPynauVZkFaaa0gYDzGrAqmR6ZXLuJUAzni3OnUBTFk4oJrmVNzljFJPvi0PcePnzmf8yAOhEGcJt0Ei9x2nTr1Ha6IJeugy9fk1np83L4nH7/bpLVVPsvmclBGS3qvWVuWyTeKkNmiW18Ot+09zPL4qWC0E54Y+ibUMgtLjrO8xm27ifTNqUHLztxOuDHa9Bok6yTyedpJIYq2T/bar9641SI2SLxAkBt6S7dEkV4Q/BthAPxk6hdKxyCOqZh5p1r+E5TUjxuc0xVSQh0Kl+KxZlYgvEz7WObRFdIWQloPXUmf8qOQaaVDfPJ1QggS9hk+Pm0yU6pTFDINJFunDduL6OLVGxbBJdlr2OfeULCDz8eSCcvtWWYmE2uFzMeGqTiEyMcN371acasCsiCkK+S0qcvUjaxJYZWh81tplWxX+VHITLVOUchMpU5RyEy9TuFk7vv2lP8LpRbMmXCXKuH8EqQrqgqw9i1lZFqnAqnLdMdxOn1el2OV51N+FDKtfOHqFIVMd1xSdYpCppIh0yRfp7AyD5Sd8i4zQwb3SFAGGfzSUH3vvneZWYbcGTwPqBLk9iwzy5A7g+cBsNyeZWZRkPvIyUr+z0czrqjkOG0tKuF9HT4NoLvM77hV9/4cbty+l8NmnXpTi279HGmGTczmEP7c2x+34nrhGHVDN2LejmJPeanC1Dd3zWYOoVeTDj3pqyWr+Bgr/N9v1o6m5Szl416fj6G1Bbvpo3bdrbx7xXV95+PWVFF5zVNGMjD1adtrMIfocmzXewjNXbaWjzEzEjrOWLCcj89cqqamHXvx7MJ9357kuEmzF9GAUZN5f8SUWRwWlR4XaeSHNSfOXmiV816zDg50HzLGo5cbVXd/8i4ze1rkBqGfJXLrcN6yNRwePnHemn6pz3XuP4zDwkNHHfENWnX2lJMu5O3cZ+3r8vRNN3C0JIeOR/88wo/b9/DkWfLNJo/sMDDbb/n6LXxdG7fpxseDx0yVaRo353Dg6Ckcjp2ew2HltTu0v+wkd3+65cFYtNV98K5rpPFhi+DtXHVXuiWefm53wgx+WTDJ/WsFLLdnmVmG3Bk8D7hx50fvMrOg5MbEdkw4x+Tyi9fv0AXhZ0UJlAE3Af5lok+WuYH0T0tP4OKNu6H1RD7kd8uMAmgPtAuuYzK62l/yuvdU2jSMniC3Z5lZEHKjAFwAfK3T2hzLVexo32Ur7o3TqIR+eY24KzduCd/tFlfUrZcb+iLgzz+tzUemPrCi/Fbb+OkVbxNpUG4Qkvvq6bcl0U7J1AnXEdczkZ4A2h3tf+n6LXrwSM7Mk0PiaoicJzTJY+wfLD3qnA9izRdRU1hV+m8x0w+zALU83rflIE0yel4X5B40aBC7JfZKnADk1hfCvd5Ob0+ePKHq6mqqrqoSqObjJzVPeL+6uoqqBGoQp4DvYAD6WOdv23OAWzThilScu8JWI1ElcR53/rcV59xCeLM+2Kk+oq8/vqk/yskf6XT9ASxDx6kPdg5t2pTcjMcRykX54fX0ygy+OZfY+d0LesN1xPUMoifaHe3vIKqamqrngOg514g/WFJGD57YcSZhTRlHmNxy3oj7ZtDHWk/wz62bG3ih9C4zC0juM5eq+CMvjk21WpUg5mMXUe24x5LQguAcL24ATicqBeLjBkBaxLXrNdA0PXqH/4I5GXIfOeH81IMWhS/Pyq/S4s+r7D+wsr4yaxDbJL0bQ5s28RPP5SZDbq2nzO8lNmbyvdOkLb3btA2926QNvdO0rYDYR9hEhnyO4xU4XRtq2e0zW5Cx4RDXEdcziJ5od7Q/k05NSZVW1oS9sACW247Tll6TV8U9kuQ25cgbwE6PdFrPoOT2LjNLA7lBYklUWOlqtto1T2p4ny23JjSIXvOY4xEnrbkmf7WL3Lb8dJHbJrAk9qgpM40EXnLpLa+5/vtAmU9abr3ZecOS27tJmd0HfUFwL+w4Y/NpJ3Nr0bUPuU/oozDkNslpuQ7aej+RFhj72i3xEtxOAxKzW6JlKUvvlpkMuW9+/8C7zCwlcqsNBHZabumKyOMaO47Jr+OVhYcroyx3W5DbteGCpExutTkssrDWI6dk2yc9HLIf8yC3/mcJSe5mdmKDP+HI7WamLbMHyB1wQxZTUstufWPWKTy5JfnYbdAhW2LDcgu3pMHYIoG91FAA+w3H4diOA46U2eS2SG8eP0qO3HpuSdITpxzkNltQ7cMCM0mVjw3LDVIzmbV/zdZcWOnHyhdX1hx5ax5Ly83k1jLtUsKR20dPt9sxYtIMVyJ/ouU1b2S4M/VpSJOmRkqZBls4ctubW2b3gcMdsX51cmusNyZ3jDqFIbdpgRmWXy0tsX5RPFgqyD2umIlsYdxeajapmEuX5C6SbgnIbLgi9g0jZSZH7p99lpklS25uHvzYjaYtL4gLsvLLpSI5ux78cildFo4XcbD0THyOg39eQ+08L5TS0oQiN+fGj62ntr7Sl65HIyfPcBLKbxPRm5Rbov+L8/MmzdypeAtH7hjlkrTc7rPuOulYMwb7WNETS3Y4cpuuhiSy1UtiEPNgyVG20oNzj3JZIDa2IUuP8T4D5C6rsN0RfYPwsS0zGXLrF0rnMrMQ5HZ3M0lXQ7of7D8rIjOxHysrDheEgbTSz5aWXhH+8WOPW4IyUiG3W0/pkkiCYh+kzfu0MVtmuB4cWsd6vzGdatlA9rC0lr0nQ5uYPrfeakKS28ru2aTldm0+XXy6ncxN+tz+Wyhysy9suA+OY01Q7ZYol2RMEeWXXrdJrYiNEOQ2rbT75glDbt9lZu6EbnjIbWxoVBAYVlj2kuBFsUZZZuWWaMsOF6RGkx+ENvz0KvVCqWSaW2hyGxtkalKb/2PP/+uj4nVXoN39Z/So4MZoJf+Lc4iP5Yb8MORmYvoQFtv2wmLaVriXtu8u5v0dewR0uAfnRPwenNtrQZ8rPlTqFmc1bChyK5cDL4ywziCxvS9xQMQd4lDgUBmHVloRHiqVafSxBvJANs6bMpMh9w01/O5YZpYSuWtke6F/um3PgWx52/YeyCTluF5yXx4b+70GCBdEHRvxn4+fask0C0mZ3Epm4b6DtLv4gMB+DveI410iLOQ4CZlGnt9dLPZxLFCI/b0yDmnc8vEThtwxNyXTagw3+33aybHn47roIBy54XoYbohpcXWXnnArQFS3qyIHZXR6afVPnb1g+ekyvXoaGDKTIff12z+k/kIJG2M1m9F+ctd5JWbkLKEZ85bQdBFOn5drHbs3P5mmpDDkTiTTvPTQTes3PQehxN5DR1y5zNC7hSd3bJnmVnzoMLel3a656jjXU6dYG9KEJbeG7t2w3AoVJ33uMuNYvXwa53X8aZBbkZrPoztR3TzhfG455TUlcnubym/fub33Cebltud96xEc82p4I8OQ27l5ZcoYOx57E7JzWNfrVTcdqWJvSoqqU3hym5tTpl874d8J0J4TZ+Q44v3q5N1C9paoj+I4SS6ttWV9n5iDOAZx9XlYZcgRVvn0mQsuWcqqGzKTIXfoZWaYX3D+6k0qVV8E9Ws060LYQfxNZ0iQ5+yFy3TqwnWeSBPkYmDSzfHT8m9EYskMuiVbJ5SL8pPVM+4WsJ2CbsiP64jrGURPtDva/3Sl7OvWVpsJqd0NYx8+NZ8HQZ9ogtvElSSHW1JpDdiYBDdlaj2DzCtKaZkZCsAFQUVxUTAvApYnCkA2/k4aE2dQuSDE1tDW5mnoCZRVnOdPKGMORJCni1tP5EN+yHHLTifQDmgPtAuuYxDCaD3R/rgOuB64LlG2aVg907bMDBV+GnCXmyzc8qKEu+xk4JYVJdxlJwu3vKjgLjcRntoyswwyeNqo/u5nnluS9JTXDDJ41pFZZpbBc4uUlpllkMGzjNDLzDLI4NlHyGVmGWTwrCP0MrMMni+gqw197NerbzkGeB4/fkKnKq/F7FtGf7w1EuTZnJG+SWJu3olj7rITIfQysyiALzyZX0UyP3OGz211HzzSOtd/5CT+nJg+3ltaTm991JL2q091IQ++hgQZ2NefSsPXkYqPnKAL1+94yv+1AgMyGNpPtB0/Xenpb45F7s6dO9Mf/vAH6/gf//Ef6dHDRxxiu//Tffrwww9p8+bNVL9+fY77/e9/T1lZWSpHDQ0ZMsQh1q13IoReZhYFps9f5jjG32cgND+thX0QFGHPoWOsc5t37XfkdX8iDbhc/T3fAGY6E2Unz/Pw7uHyM78aoL4FO/VfVCfeMP/FbDOL3K4NpBwwYADvX7x4kW7elHNzSkpKxNPAJjnS6f2KigoqLCykbt268RnEr1mzls9hc1+vRAi9zOxpItZ345JFuuQ8b8BEpCDbo8eP+ZshZt7yM+ZcGHu+Cza8zOlt0aJFTNaCLVusuJdeeskiNjZkbdasmXX84osvUmlJqSXTrXcihF5mlsHzBZC2cJ/zr6rNrfTYKd+ZeOVn5d+Qe/wSxxbrHOLlDeErw3XoLjsRQi8zy+D5BUis4T73S0LoZWYZZPCsI/QyswwyeOYRdplZBhkA8Lm1bxzLs3ZsnMhysoPlUZu77EQIvczs1wo9txiDGvpzuu6+318Tjjt6S/w29aqolsihd0TDuXlpXrduXUe8u+xEgM89ePBgGj58ePQjlF/Oy3Uc67/g6DNsHL39USuq17wjHw8aM5X/QsLddefuu85euMJx3LHv5ywHf/9cUHiA3mvahv8//fzVW5wG/wej0zZo1cUhOxEwevfg4UO75V0bzvEIn0/e5xmyn1sT0B16N03q119/ncwF2ytXrKTHjx9bN4AO7a3GU3YipLTMLFnEIrf7/2V0eOZytUfG2OnzrDSDx37pmw8jkyA39kdPm+s4p/9DJihglU9fvGE0cvwNaX9NlhzkBhFj01ltyh0p3F3IpG3RooXjNMj9bVkZn7t8+TKnPXbsmIPg7rITIW3LzJ4HwPKWHD3JfboaON68vdC+Cgm23cWl/O1qrC183oB6ubsH2ecmp82O9UEhK87vJMWMtmS6r1ciZJaZBQDmXpw+W+luc8+GNEjrzp/B3waZZWZJAKN4mIux7+Bhun//PgP7iHMPS2fwt0dmmVkGzy0yy8wyeG7xq19mhhekh64uvlgvNt7N6CcI+Vce3i0dMg0ZRkzgzTdxKjJTr9OpC2H+0vsZWGa2evMOT1y6sGFbkSfOBBYt8BanrfUm42JcYN6pcZ92J/BsUci0Ntdpv9Te8v1SGVsomW6VE9ep5MhRerNxS+t0ydFTSXex/k2WmbkHZ/T/mCP+QNkp6jtiAp27cpOOn73Cfdl7So7RZ8PHO/J81K47Lz7AQI0pE4M2CI9UnBd3+w2rL31azjJrkYOZ3iI32e2L/yWHnLcaSSAt4mTYXDS6/G9yjTfdaXi/pR2n0UjkZcjjNyOSaclVcvS5QHWKQqaRz69O/puzO/FQWUUocj/1ZWaolHlsklvHweLuFXpMnbuEK+XO03PIaEce8zz2Zy36mvc1uQeMkoM3+njo+OkcgtxuI5KMIeNNWyMjcOw7ZMiDhGJTkenXz+wnI+4Wgcwk6oSbA9cRf0eIDeMNsdZxxsIztcwsHej9+VjKXbPZEx8LfpY73oY0sdPZZ/zT2LnheprX1D89tnAy9eY+9tu85Uch09yC1WnD5i2Wix6G3L+IZWZRAoMu+Obzzz//bDWrt8V9rrBrc5x2pXXL1McJRKZNpjutFeuJo2hkGpvjtCutW6Y+vnL1Bn/lNVm3JLPMLIPnFpllZhk8tzBHKDOWO4PnCpllZhk8v8gsM8vgeUVmmVkGzy2e6jKzDDJ4mnAvM/v/KU+OXTf9jb8AAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>