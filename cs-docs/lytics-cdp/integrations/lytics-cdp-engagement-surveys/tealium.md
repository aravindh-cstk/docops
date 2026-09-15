---
title: "Tealium"
description: "Tealium"
url: /lytics/tealium
uid: bltf38fd116174a686c
---

# Tealium

## Tealium

## How to Integrate Tealium with Lytics

1.  After logging into your Tealium account, navigate to the **Tags** tab and select **\+ Add Tag**. ![tags](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9cd0fdf27c5ff4f0/e6860104a1b4ad0af25822ad/img-0325.png)

1.  Search for Lytics and select **\+ Add**. ![add](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcf9f38f3c0eaa1a7/8b824ed2a9de1b0f3c7da8c8/img-0326.png)

1.  **Tag Configuration**:
2.  Enter your Customer ID number, which can be found in the admin section of your Lytics account: Account -> Manage Accounts. ![account-settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am750291f7124d54d2/e44c252cde1a828f25bf8db6/img-0327.png)
3.  Cookie Name: Optional
4.  Advanced Settings:
5.  Send Flag: Yes
6.  Wait Flag: Yes
7.  Synchronous Load: No
8.  Custom Script Source: Optional
9.  Publish to Dev: Yes
10.  Publish to QA: Yes
11.  Publish to Prod: Yes

1.  **Load Rules**: Load the tag on all pages. ![rules](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am195774ad4c0deac7/cd373279189ab08bd56bfa52/img-0328.png)

1.  **Data Mappings**: Select **Define and Map New Data Source** to add any custom variable that you would like to pass to Lytics. You can also see our suggested variables under **Select Destination**. Click **Apply** when you are done adding variables. **Note:** Failing to specify a set of fields to pass to Lytics will result in all of them being sent. This can be a very large number of fields which might impair performance. ![data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am48336659c914321a/6bbbc253c0ef3059fb88ab7c/img-0329.png) Suggested Variables:
2.  User ID (user\\\_id)
3.  First Name (first\\\_name)
4.  Last Name (last\\\_name)
5.  Username (username)
6.  Email (email)
7.  Campaign ID (campaign\\\_id)
8.  Product ID (prod\\\_id)
9.  Transaction ID (transaction\\\_id)
10.  Facebook ID (fbid)
11.  Twitter Handle (twitter\\\_handle)
12.  Order Total (order\\\_total)

1.  Click **Save and Publis**h" to finish. ![publish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am837d69f3ab7c9b1e/4f8cf152d1bfebb7af792df6/img-0330.png)

Data will now be flowing into Lytics in real-time. Monitor incoming data on the [Data Streams](/docs/lytics/data-streams) page.
