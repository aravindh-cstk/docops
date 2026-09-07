---
title: "Removing Stale Data from Targeting with Automate"
description: "This guide outlines the process of removing retired categories from entries using automation."
url: /headless-cms/removing-stale-data-from-targeting-with-automate
uid: blt3d3219b4da500d73
---

# Removing Stale Data from Targeting with Automate

## Removing Stale Data from Targeting with Automate

An automation, triggered by webhook or scheduler, queries for all entries that contain a stale term in the field representing the targeting data. The contents of the field are filtered to remove the term, and the entries are updated.

## Tactical Rundown

### Content Type Definition

The content type should contain at least one field that stores an array of some kind. In this simple example, the field will be represented as a Select field with multiple selections available. The data could just as easily be stored in a JSON structure in a custom or other field. In this customer’s specific implementation, and more likely for real-world usage, the data is stored in a custom field with options supplied by an internal API.

### Automation Definition

1.  The first step of the automation, the trigger, can be defined in various ways depending on the needs of the customer. It could be triggered by the Scheduler for regular maintenance or by the HTTP trigger for action-specific maintenance.  
    ![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt019e33b930b7c15f/65f9d03e039fddfac4338b56/image3.png)
2.  The automation needs to know which term to act on. A Scheduler-based automation would likely rely on the use of the HTTP action to fetch the term from an external API. An HTTP-based automation, like this example, can use a query parameter passed to the automation’s URL like so: [https://app.contentstack.com/automations-api/run/551238742dcb442786c47c078fb6cdde?term=stale\_category\_one\_stale\_category\_two](https://app.contentstack.com/automations-api/run/551238742dcb442786c47c078fb6cdde?term=stale_category_one_stale_category_two)

    **Note:** These query terms aren’t defined by the automation; they need to be specified in the usage of the webhook URL.

3.  Assuming that the automation should accept multiple terms, the automation uses a Transform step to split the query string into an array.  
    ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde81fbc24e458ed9/65f9d03da93acb401f313013/image5.png)
4.  The automation needs to find all entries with the stale terms (to avoid updating all entries in the content type). To construct the query to match terms in an array, it’s necessary to use a Transform action.  
    ![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdce448ea1d5b22bf/65f9d03eba94f0e7d37cffd0/image6.png)
5.  The **Get All Entries** action accepts the query defined previously and returns all entries with one or more of the stale entries.  
    ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ac2853f12583a8a/65f9d03e7a44b001ff54abe1/image4.png)
6.  A **Repeat Path** Action iterates over all entries returned by the **Get All Entries** step above.  
    ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4825a632968eba9b/65f9d03e39973e52786e99e4/image1.png)
7.  An **Update Entry** action uses the same query defined in the above **Transform** step, combined with the Content Management API’s special “PULL” operation for array-based field data, to remove the stale values.  
    ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8f13620300dbe44/65f9d03ed4e0c076462937bd/image2.png)
