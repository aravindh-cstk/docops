---
title: "Edit an Audience"
description: "Learn how to edit audiences in Contentstack Personalize to maintain accurate segmentation."
url: /personalize/edit-audience
uid: blt19aa88a239079b85
---

# Edit an Audience

## Edit an Audience

Contentstack Personalize empowers you to create tailored content for specific audiences. But as your user base evolves, so should your targeting. Regularly editing your audiences ensures that your content reaches the right people at the right time, maximizing the impact of your personalization efforts.

This guide provides a step-by-step walkthrough for editing audiences in Contentstack Personalize. Whether you're refining existing segments or adapting to new user behaviors, you'll learn how to keep your targeting strategies effective.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)

    **Note:** Users with **Owner** and **Member** access to a Personalize project can edit existing audiences.

-   Access to Personalize project

    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.

-   [Audience created](/docs/personalize/create-audience) in your Personalize project

## What You Will Learn

-   How to open an existing audience for editing in a Personalize project.

-   How to change an audience's Name, Description, Rules, and Groups.

-   What to check before editing an audience that is referenced in an experience.


## Steps for Execution

To edit an existing audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to edit an audience.
3.  Click the **Audiences** tab.![Audiences tab in a Personalize project](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSXPrxdt-g4okZcaEsGJqrE6FQfvzTb3X6Mok3vVrKMCsIiXbFGcLqL16YMMa32zKVXJphaLKzwSZr37PkQJ49OI6qyN4MMCckI11TYr_N900wpWaOZU8EuSnX0eL_r-HKESjsIQ?key=h_YECix84SV67aYin9Q_kA)
4.  You can edit an existing audience by clicking your audience to open it or by clicking the corresponding vertical ellipses under **Actions** and selecting **Edit**.![Edit option under the Actions column for an audience](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOmAAO29WnIHHJ3iNC8NO6usq_jDU1vVJZdTBnbbuO-5nk5yMmTpM-5TTYSdJpZVKT2shsyfIlS8MXgbXb04Vq3e7NjJ9edcgZtKs1xvwJyordFCeEOEe2lDZj2tdJ2QVymrVi?key=h_YECix84SV67aYin9Q_kA)
5.  On the **Audience** page, make the necessary changes to the **Name**, **Description**, **Rules** or **Groups**.![Audience page with editable Name, Description, Rules, and Groups](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchgrIeEwfwb2_VfbrrTQjCwXL5CBnEmVdGZbNsan0HdMETHyxsFRP5vsOoyAB_ryF7PNWPSNhfZDg_7wYskUfS9E1leeb7Nhck6VTImmaQUdOgPLTTThwnTLHk0OJY1lzR6j4G4zq-R_TSncQRJGUnzGc?key=Bl_5yk9uexRBMu63qKHM6A)
6.  Once you have done that, click the **Save** button to apply the changes.

You will get a success message after the audience has been successfully updated.

**Warning:** Editing an audience that is referenced in an experience might affect your active segmentation, A/B tests, and analytics. Ensure you update any references to the modified audience accordingly.

## Related Resource

-   [Personalize Management API: Update an audience](/docs/developers/apis/personalize-management-api/audiences#update-an-audience)
