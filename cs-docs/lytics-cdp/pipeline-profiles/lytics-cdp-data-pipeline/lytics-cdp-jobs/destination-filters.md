---
title: "Destination Filters"
description: "Destination filters are a powerful feature that allows you to exclude specific audiences from workflows, effectively creating suppression lists for your…"
url: /lytics/destination-filters
---

# Destination Filters

## Destination Filters

## Destination Filters

Destination filters are a powerful feature that allows you to exclude specific audiences from workflows, effectively creating suppression lists for your data exports.

### Overview

When configuring export workflows, you may need to exclude certain users from being sent to destinations. Common use cases include:

-   **Suppression Lists**: Exclude users who have opted out of marketing communications
-   **Compliance**: Exclude users from specific regions due to data privacy regulations
-   **Segmentation**: Exclude internal employees or test users from customer campaigns
-   **Campaign Management**: Exclude users who have already converted or are in other active campaigns

Destination filters provide a flexible way to handle these scenarios without modifying your primary audience segments.

### How Destination Filters Work

Destination filters operate as exclusion lists that are applied during the export process. When a workflow runs:

1.  The primary audience is selected based on your segment configuration
2.  Destination filters are applied to exclude users who match the filter criteria
3.  Only users who pass through all filters are sent to the destination

The filtering happens at export time, ensuring that your base segments remain unchanged while giving you granular control over which users reach each destination.

### Configuration

#### Basic Setup

Destination filters are configured within individual workflow setup. The filter configuration appears as an extra feature when managing a workflow.

To add a destination filter follow the following steps.

-   Navigate to **Data Pipeline > Jobs**, then click on **\+ Create New Job**.
-   Find the workflow you'd like to add the destination filter to, click the **...** and then click on **Manage Integration**.

![2e03d6511ea6d1e2910e764a4895fd8247dddeb5b3f48007bdf8aed423521e3b-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am59ba8f9be38d9f67/fdd2b4f641a91f7285c08b15/2e03d6511ea6d1e2910e764a4895fd8247dddeb5b3f48007bdf8aed423521e3b-image.png)

-   Click to **Exclude specific audience from being delivered by this integration**.

![108886bab6a6b591373511859229de7537fb5ce4ca6e30fd28673e13c9f1db36-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am57ab616d0f585154/9806f1becc38150259e85ede/108886bab6a6b591373511859229de7537fb5ce4ca6e30fd28673e13c9f1db36-image.png)

-   Choose the audience to use as a destination filter.

![5a8b80a13c810ef8a6931d433f2ba141d7f15ed8d3436a1c733e44ebb8d5e49f-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3b3cd82330b49513/63e36a9c0598e063a2626aa8/5a8b80a13c810ef8a6931d433f2ba141d7f15ed8d3436a1c733e44ebb8d5e49f-image.png)

-   Finally, click **Save Changes** to save the destation filter audience.

![ad7a87712075e887295d985bfcbff7c56ce560b7063f79ca0eb00d243ec5e7c1-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambed5a13b636aad19/1a45fcbb63ff216c0d68b997/ad7a87712075e887295d985bfcbff7c56ce560b7063f79ca0eb00d243ec5e7c1-image.png)



#### Filter Logic

Destination filters use **exclusion logic**:

-   If a user exists in ANY of the selected filter audiences, they will be excluded from the export
-   Multiple filters are combined with OR logic (user excluded if they match any filter)
-   Filters are applied after the primary audience selection

#### Example Configuration

For a Facebook Audience Export with destination filters:

1.  **Primary Audience**: "High-Value Customers" (1,000 users)
2.  **Destination Filters**:
    -   "Opted Out Users" (50 users)
    -   "Internal Employees" (25 users)
    -   "Recent Converters" (100 users)

**Result**: The export would send approximately 825-875 users (depending on overlap between filter segments) to Facebook, excluding anyone who appears in any of the filter audiences.

### Supported Workflows

Destination filters are available in workflows that export a Lytics audience.

Common workflows that support destination filters include:

-   Facebook Audience Export
-   Google Ads Customer Match
-   Braze Export
-   HubSpot Export
-   Salesforce Export
-   And many other audience export integrations

### Best Practices

#### 1\. Naming Convention

Use clear, descriptive names for your filter audiences:

-   ✅ "Email Unsubscribed Users"
-   ✅ "GDPR Opt-Out - EU"
-   ✅ "Employees and Test Accounts"
-   ❌ "Filter 1"
-   ❌ "Exclusions"

#### 2\. Segment Maintenance

-   Regularly review and update your filter segments
-   Ensure filter segments are actively maintained and current
-   Document the purpose and criteria for each filter segment

#### 3\. Filter Overlap

-   Consider overlap between multiple filters to avoid over-exclusion
-   Use segment analysis tools to understand the combined impact of multiple filters
-   Test filters with smaller audiences before applying to large campaigns

#### 4\. Compliance Filters

For compliance-related filters:

-   Create dedicated segments for regulatory opt-outs (GDPR, CCPA, etc.)
-   Implement automated processes to keep compliance filters up-to-date
-   Document the legal basis for each compliance filter

#### 5\. Performance Considerations

-   Keep filter segments optimized for performance
-   Avoid using overly complex filter segments that might slow export processing
-   Monitor export job performance when using multiple filters

### Troubleshooting

#### Common Issues

##### 1\. Unexpected Export Sizes

**Symptom**: Export contains fewer users than expected\\ **Cause**: Destination filters may be excluding more users than anticipated\\ **Solution**:

-   Review filter segment definitions and sizes
-   Check for unintended overlap between primary audience and filters
-   Verify filter segment criteria are correct

##### 2\. Users Still Receiving Communications

**Symptom**: Users who should be excluded are still receiving messages\\ **Cause**: Filter segments may not be up-to-date or properly configured\\ **Solution**:

-   Verify filter segments are actively maintained
-   Check that the export workflow is properly configured with filters
-   Ensure filter segments include the problematic users

##### 3\. Export Job Failures

**Symptom**: Export jobs fail when filters are applied\\ **Cause**: Filter segments may be invalid or too large\\ **Solution**:

-   Verify all filter segments exist and are accessible
-   Check filter segment sizes and complexity
-   Review export job logs for specific error messages

#### Validation

Before deploying destination filters in production:

1.  **Test with Small Audiences**: Validate filter behavior with small test segments
2.  **Verify Exclusions**: Manually verify that known test users are properly excluded
3.  **Monitor Initial Runs**: Closely monitor the first few production exports
4.  **Validate Metrics**: Ensure export metrics align with expectations
