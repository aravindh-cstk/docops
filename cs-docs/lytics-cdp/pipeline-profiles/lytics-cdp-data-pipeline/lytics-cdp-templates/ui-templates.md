---
title: "Creating Templates Using the UI"
description: "Clicking the + Create New button will open a wizard that will guide you through creating a new Template. The first step involves selecting a Name…"
url: /lytics/ui-templates
---

# Creating Templates Using the UI

## Creating Templates Using the UI

## Creating Templates

Clicking the **\+ Create New** button will open a wizard that will guide you through creating a new Template. The first step involves selecting a Name, Description, Data-Type, and Template-Type. The Data-Type allows you to select the type of data used by the Template, either **User** or **Event** (the default option is **User** ). The Template-Type configures the type of templating language used by the Template, either [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) , [Jsonnet](https://jsonnet.org/), or [Handlebars.js](https://handlebarsjs.com/).

![cc4e9b9-Screenshot_2024-04-15_at_4.54.21_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9c6d12ea63ddafa9/ccdd284293e6cdd8bcd0f2b9/cc4e9b9-Screenshot_2024-04-15_at_4.54.21_PM.png)

After clicking **Next**, you will be guided to the Template configuration page where you must first select the type of **Sample Data** used by the Template. If the **User** data-type was selected, you will see a dummy user comprised of all of the fields in the user schema, or the option to search for a user.

![5636cb0-Screenshot_2024-04-15_at_4.55.25_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd6d9828d9758394c/a016a1a8f9a4c4b6c75f9dcd/5636cb0-Screenshot_2024-04-15_at_4.55.25_PM.png)

If the **Event** data-type was selected in the previous step, the **Sample Data** will be populated by a recent event from the selected stream.

![1eaef26-Screenshot_2024-04-16_at_10.21.31_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am81ea732c8de3084d/8b91a65326e091742299652a/1eaef26-Screenshot_2024-04-16_at_10.21.31_AM.png)

Once the **Sample Data** has been selected, Step 2 involves specifying your desired JSON structure for your destination in the **Template Co-Pilot** text box. Consider the example below where we specify the structure of our JSON payload, with fields such as \_uid, last\_active\_ts, last\_name, and pillowcase\_affinity(derived from the lytics\_content field). We are also using the **Find a User** feature to populate the Sample Data. Note: this example is using the **Additional Prompt** text box to assist the Co-Pilot in generating the template. Here we are instructing the Co-Pilot to use the lytics\_content field to derive the pillowcase\_affinity template field.

![9094cf2-Screenshot_2024-04-18_at_10.14.11_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7a118d1320dcd58c/2153d293d38ee3b32d7c3d34/9094cf2-Screenshot_2024-04-18_at_10.14.11_AM.png)

Once **Generate Template** has been clicked, the text box in **(3)** will populate with the template. With the previous example, the following template has been generated:

![2e735a8-Screenshot_2024-04-18_at_10.14.22_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31f78b5daaf552ad/3999fe5c4b0ab9bb9c52e341/2e735a8-Screenshot_2024-04-18_at_10.14.22_AM.png)

The Template contains all of the data specified in Step 2, and the **Output** to the right shows the Template applied to the Sample Data. We can see that the pillowcase\_affinity was derived from the lytics\_content field, as well as the other fields specified in the Template.

## Duplicating an Existing Template

To create a new Template based on one you already have, open the Template's detail page, click the **...** menu, and select **Duplicate**. This opens the creation wizard pre-populated with the source Template's name (suffixed with "Duplicate"), description, data-type, target, and script definition. Adjust anything you like and save — Lytics creates a brand-new Template and leaves the original unchanged.

**Note:** The **Duplicate** action is only available to users with permission to create Templates.
