---
title: "Clearwinner App Installation Guide"
description: "Save time with the ClearWinner app by automating A/B test cleanup. Efficiently identify winners, merge variants into baseline entries, and publish results in one click."
url: /marketplace/clear-winner
---

# Clearwinner App Installation Guide

## Clearwinner App Installation Guide

The **Clearwinner** Marketplace app in Contentstack automates the post-test cleanup process for [A/B test](/docs/personalize/create-ab-test-experience) experiences run through Contentstack Personalize.

When an A/B test concludes, In the traditional process, you must manually merge the variant changes into baseline entries, publishing updates, and archiving the test. Clearwinner eliminates this manual effort by identifying winning variants and executing a single-click merge and publish workflow.

## Key Benefits

-   **Efficiency**: Automatically merges winning content into baseline entries in the background.
-   **Accuracy**: Reduces human error by automating data cleanup and variant deletion.
-   **Streamlined Workflow**: Publishes updated entries to your live environment and archives the test in a single step.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)
-   At least one active A/B test experience set up in Contentstack Personalize

## Install and Configure Clearwinner in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://app.contentstack.com/) and follow the steps below:

1.  Navigate to the **App Switcher** icon in the top-right corner and click **Marketplace**.  
    ![Contentstack_Marketplace_Apswitcher.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt467504401942b0da/69f3223561d51ac98ddbf462/Contentstack_Marketplace_Apswitcher.png)  
    
2.  Click **Apps** from the left panel.
3.  Within the Marketplace, you can see the available apps. Hover over the **Clearwinner** app and click **Install**.
4.  In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click **Install**.
5.  On the **App Configuration** screen, click **Authorize** to allow Clearwinner to access your Contentstack data via the OAuth flow.  
    ![Contentstack_Marketplace_ClearWinner_Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d73bda285b5336b/69f32235a297c802248365df/Contentstack_Marketplace_ClearWinner_Authorize.png)  
    
6.  On the **UI Locations** tab, you can see the predefined app location ([Stack Dashboard Location](/docs/developer-hub/dashboard-location)). You can use the toggle button corresponding to enable or disable it based on your requirements.  
    ![Contentstack_Marketplace_ClearWinner_App_locations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1ee7b53a21abbfc/69f322358a644d0113a6d6a1/Contentstack_Marketplace_ClearWinner_App_locations.png)  
    
    **Additional Resource:**
    
    -   For more information on UI location, refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
    

**Note:** Authorization is performed once per organization. Once authorized, ClearWinner is accessible to all users in the organization and operates with the permissions of the authorizing user. There are no per-user permission controls at this time.

## Use Clearwinner within your Stack

To use the Clearwinner app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

1.  Navigate to the **App Switcher** icon in the top-right corner and click **Clearwinner**.  
    ![Contentstack_Marketplace_ClearWinner_.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f60a4c221a0f837/69f322358c2ce16bf7258b4b/Contentstack_Marketplace_ClearWinner_.png)  
    
2.  Use the dropdown menu to choose the **Personalize project** containing the A/B tests you want to manage.  
    ![Contentstack_Marketplace_ClearWinner_Personalise_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d5a72152baf191e/69f32236c58f745b67258043/Contentstack_Marketplace_ClearWinner_Personalise_Project.png)
3.  Review your A/B tests across the following three tabs on the dashboard:
    
    -   **Ready to merge**: Tests where Personalize has identified a winning variant.
    -   **Pending A/B tests**: Tests that are still running with insufficient data to determine a winner.
    -   **Merged A/B tests**: A read-only historical log of tests already processed by Clearwinner.
    
    For each test in the **Ready to merge** tab, the dashboard displays the test name, status, leading variant with its statistical confidence level, and the last modified date.
    
    Clearwinner surfaces the statistical confidence levels reported by Contentstack Personalize:
    
    -   **Has\_Won**: The variant has reached full statistical significance (strongest signal).
    -   **Leading Significantly:** The variant is substantially ahead but below the final threshold.
    -   **Leading**: The margin is currently ahead but not yet statistically significant.  
        ![Contentstack_Marketplace_ClearWinner_Leading_Variant_Status.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta75165de981828b1/69f32236cc157b3f0b21b317/Contentstack_Marketplace_ClearWinner_Leading_Variant_Status.png)
4.  Select one or more tests on the **Ready to merge** tab using the checkboxes and click **Review and merge**.
    
    **Note:**
    
    -   Only one merge job can run at a time. If a merge is already in progress, an error is displayed and you cannot start a new job until the current one completes.
    
    ![Contentstack_Marketplace_ClearWinner_Merge.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36bfe5e6f01e7f23/69f324b8700ea23a8258bd15/Contentstack_Marketplace_ClearWinner_Merge.png)
5.  Review the summary of tests, winning variants, and content types, then click **Merge**.  
    ![Contentstack_Marketplace_ClearWinner_Merge_Test.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ae3d00cc4cd4159/69f32236f2be51ef00864e95/Contentstack_Marketplace_ClearWinner_Merge_Test.png)  
    
6.  A final confirmation dialog appears, stating that the following actions occur:
    -   Winning variant content changes are merged into baseline entries.
    -   Updated entries are published to the live environment.
    -   The A/B test is archived in Personalize.
    -   All variant entries and variant groups are permanently deleted.
7.  In the final confirmation dialog, click **Confirm**.
    
    **Warning:** This action is irreversible. The variant data is permanently deleted once the merge completes.
    
    ![Contentstack_Marketplace_ClearWinner_Confirm_Merge.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4d38eef21d10097/69f32236b1ca70078f756204/Contentstack_Marketplace_ClearWinner_Confirm_Merge.png)
8.  Monitor the merge job's live progress via the indicator. You may navigate away; the background process continues.
    
    **Note:**
    
    -   Entries are merged one at a time. For tests with a large number of entries, the merge job may take several minutes.
    
9.  Verify completed merges in the **Merged A/B tests** tab, which provides a read-only record including:
    -   Test name
    -   The merged winning variant
    -   Number of entries updated
    -   Timestamp of the merge  
        ![Contentstack_Marketplace_ClearWinner_Merged_A:B_Tests.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88e918a9366a9f4a/69f322368a644d1d49a6d6a5/Contentstack_Marketplace_ClearWinner_Merged_A_B_Tests.png)

## Limitations

-   **Sequential Entry Processing**: Entries are merged one at a time. Tests with many variant entries will take longer to complete.
-   **Shared Authorization**: Once authorized, the app is available to all users in the organization and operates with the permissions of the user who performed the authorization.
-   **One Merge Job at a Time**: Only one merge job can run per project at a time. Attempting to start a second job while one is in progress will result in an error.

## Re-authorization

If you encounter an authorization error, navigate to **Settings > Apps > Clearwinner > App Configuration** and click **Authorize** again to refresh the OAuth token.
