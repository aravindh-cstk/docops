---
title: "[Taxonomy] - Import a Taxonomy"
description: Import a taxonomy from a CSV or JSON file into your stack.
url: https://www.contentstack.com/docs/headless-cms/import-a-taxonomy
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Import a Taxonomy

This page explains how to import a taxonomy into a Contentstack stack using a CSV or JSON file, and points to the API option for importing. It is intended for users who manage stacks and taxonomies and need to move or recreate taxonomy structures across stacks.

### Import a Taxonomy

You can import a taxonomy from a CSV or JSON file into your stack in easy steps.

Consider, you have a **Regions** taxonomy in one of your stacks structured as follows:

Now, to import this taxonomy into another stack. To achieve this, you will first need to export the **Regions** taxonomy in JSON format. Here's an example JSON structure for the Regions taxonomy:

```
{
   "taxonomy":{
      "uid":"regions",
      "name":"Regions",
      "description":"A Taxonomy which focuses on the categorization of various regions and its sub regions.",
      "locale": "en-us"
   },
   "terms":[
      {
         "uid":"amer",
         "name":"AMER",
         "parent_uid":null,
         "locale": "en-us"
      },
      {
         "uid":"emea",
         "name":"EMEA",
         "parent_uid":null,
         "locale": "en-us"
      },
      {
         "uid":"apac",
         "name":"APAC",
         "parent_uid":null,
         "locale": "en-us"
      },
      {
         "uid":"asia",
         "name":"Asia",
         "parent_uid":"apac",
         "locale": "en-us"
      },
      {
         "uid":"europe",
         "name":"Europe",
         "parent_uid":"emea",
         "locale": "en-us"
      },
      {
         "uid":"north_america",
         "name":"North America",
         "parent_uid":"amer",
         "locale": "en-us"
      },
      {
         "uid":"central_america",
         "name":"Central America",
         "parent_uid":"amer",
         "locale": "en-us"
      },
      {
         "uid":"middle_east",
         "name":"Middle East",
         "parent_uid":"emea",
         "locale": "en-us"
      },
      {
         "uid":"pacific",
         "name":"Pacific",
         "parent_uid":"apac",
         "locale": "en-us"
      },
      {
         "uid":"africa",
         "name":"Africa",
         "parent_uid":"emea",
         "locale": "en-us"
      },
      {
         "uid":"south_america",
         "name":"South America",
         "parent_uid":"amer",
         "locale": "en-us"
      },
      {
         "uid":"northeastern_asia",
         "name":"Northeastern Asia",
         "parent_uid":"asia",
         "locale": "en-us"
      },
      {
         "uid":"central_and_south_asia",
         "name":"Central and South Asia",
         "parent_uid":"asia",
         "locale": "en-us"
      },
      {
         "uid":"southeastern_asia",
         "name":"Southeastern Asia",
         "parent_uid":"asia",
         "locale": "en-us"
      },
      {
         "uid":"central_asia",
         "name":"Central Asia",
         "parent_uid":"central_and_south_asia",
         "locale": "en-us"
      },
      {
         "uid":"south_asia",
         "name":"South Asia",
         "parent_uid":"central_and_south_asia",
         "locale": "en-us"
      },
      {
         "uid":"india",
         "name":"India",
         "parent_uid":"south_asia",
         "locale": "en-us"
      },
      {
         "uid":"maharashtra",
         "name":"Maharashtra",
         "parent_uid":"india",
         "locale": "en-us"
      },
      {
         "uid":"mumbai",
         "name":"Mumbai",
         "parent_uid":"maharashtra",
         "locale": "en-us"
      }
   ]
}
```

**Additional Resource**:
- To import your taxonomy in the CSV format, refer to our [template](https://assets.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1adbffddd5548b76/Taxonomy_Sample_CSV_Format.csv).
- Refer to the [Restricted Keywords for UIDs](/docs/developers/create-content-types/restricted-keywords-for-uids) to avoid using reserved keywords.

To import a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to import a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Click the **Create New Taxonomy** button, then select **Import** from the drop-down menu.
- In the **Import Taxonomy** modal, either drag and drop your CSV or JSON file or click **Choose a File** to browse for it.
- To display your imported taxonomy at the top of the list, tick the box that says **Display this taxonomy at the top of the list**.
- Finally, click **Done **to add your taxonomy.

After successfully importing the taxonomy, you can start adding terms to it and associating it with content types.

## API Reference

To import a taxonomy via API, refer to the [Import a Taxonomy](/docs/developers/apis/content-management-api#import-a-taxonomy) request.

## Common questions

**Q: What file formats can I use to import a taxonomy?**  
A: You can import a taxonomy from a CSV or JSON file.

**Q: Where do I import a taxonomy from in the Contentstack UI?**  
A: Go to your stack, navigate to the “Settings” icon (press “S”), select **Taxonomy**, then click **Create New Taxonomy** and choose **Import**.

**Q: Can I import a taxonomy via API instead of the UI?**  
A: Yes. Refer to the [Import a Taxonomy](/docs/developers/apis/content-management-api#import-a-taxonomy) request.

**Q: Is there a CSV template available for taxonomy import?**  
A: Yes. Use the provided [template](https://assets.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1adbffddd5548b76/Taxonomy_Sample_CSV_Format.csv).