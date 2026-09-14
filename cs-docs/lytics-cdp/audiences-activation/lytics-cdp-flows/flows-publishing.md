---
title: "Publishing & Editing"
description: "This guide covers the complete lifecycle of flows, from initial creation through publishing, version management, and ongoing maintenance."
url: /lytics/flows-publishing
---

# Publishing & Editing

## Publishing & Editing

This guide covers the complete lifecycle of flows, from initial creation through publishing, version management, and ongoing maintenance.

### Flow States

Flows exist in three distinct states throughout their lifecycle. Understanding these states is crucial for proper flow management.

![8110759d5a49a9b6195afaa1e454dac9b17e416d6e86fed3b2238ba8983e9943-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf6d3ab88c36b4ece/7a91097fe646eb40c697b688/8110759d5a49a9b6195afaa1e454dac9b17e416d6e86fed3b2238ba8983e9943-image.png)

#### Draft State

**Characteristics:**

-   Flow is being configured and is not active
-   No users are processed through the flow
-   All exports remain in draft state
-   Indicated by gray status bar in the interface

**Capabilities:**

-   Add, remove, and modify any steps freely
-   Configure and reconfigure exports
-   Test configurations without impact
-   Save progress without publishing

**Limitations:**

-   No user processing, metrics generation, or export data transmission occurs

#### Running State

**Characteristics:**

-   Flow is live and actively processing users
-   Users enter based on trigger conditions
-   All exports are active and sending data
-   Indicated by green status bar with "Running" label
-   Metrics are collected and updated daily

**Capabilities:**

-   View real-time metrics and user progression
-   Monitor step-by-step performance
-   Access detailed user flow state on profiles

**Limitations:**

-   Cannot modify the running flow directly
-   Must create new version to make changes

#### Draining State

**Characteristics:**

-   Flow has stopped accepting new users but existing users continue through remaining steps
-   Trigger no longer processes new entries
-   Indicated by orange status bar with "Draining" label

**Capabilities:**

-   Monitor existing users completing the flow
-   View metrics for users still in progress

**Occurs When:**

-   A new version is published (previous versions drains)

### Publishing Process

Publishing transforms a draft flow into a running flow. This process involves validation and export activation.

![fc7e7c9cef024f142baa993531e10154bc1ea552b6f499cf35d7541e0e40a724-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am449d40d823dc39f9/fa1fbaf0d2adedb3d485c048/fc7e7c9cef024f142baa993531e10154bc1ea552b6f499cf35d7541e0e40a724-image.png)

#### Step 1: Flow Validation

Before publishing, we'll help you validate your entire flow:

**Validation Requirements:**

-   All steps have required configurations
-   Export steps are properly configured
-   Wait steps have time or condition values
-   Conditional splits have defined conditions

**Results:**

-   ✅ **Valid**: Flow is ready to publish
-   ❌ **Invalid**: Specific errors must be resolved (see common errors below)

![c7e4e8c300fc85ce37d15a81a641b16d40e465f9a937b4a77eff57b4a0ba8301-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0003483606a56198/927c10061bf60935cc5901f7/c7e4e8c300fc85ce37d15a81a641b16d40e465f9a937b4a77eff57b4a0ba8301-image.png)

**Common Validation Errors:**

```
Wait and Personalize: Please provide a valid delay value or condition
Export: Please configure export settings
Conditional Split: Please define split conditions
```

#### Step 2: Export Activation

Exports within flows start in draft state and must be activated before publishing:

![7e21cd123a0bbf11e3a5ce11900afdb2ee1d6871b795c6c7176a49f45f28f503-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambe9de84f3f44224e/9e75d8c72ee9dd244f1d19c7/7e21cd123a0bbf11e3a5ce11900afdb2ee1d6871b795c6c7176a49f45f28f503-image.png)

**Process:**

1.  Click **Publish** in the action menu
2.  Review exports that need activation
3.  Click **Activate** for each export
4.  System verifies connectivity and authentication
5.  Exports transition from draft to active state

**Activation validates configuration, establishes connections, and enables real-time data transmission.**

#### Step 3: Final Publishing

Once validation passes and exports are activated:

![4feb75dca3fd5b1937aa62e787b901e69ea9b2b04a99d258d9fb6eb988097025-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am461c82ade33340eb/0f06322839dec6826369b6d7/4feb75dca3fd5b1937aa62e787b901e69ea9b2b04a99d258d9fb6eb988097025-image.png)

1.  Click **Publish** button
2.  System performs final checks
3.  Flow transitions to running state
4.  Status bar turns green
5.  Celebratory confetti appears!
6.  Flow begins processing users immediately

### Version Management

Flows use a versioning system that allows safe iteration while protecting running workflows.

![8110759d5a49a9b6195afaa1e454dac9b17e416d6e86fed3b2238ba8983e9943-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf6d3ab88c36b4ece/7a91097fe646eb40c697b688/8110759d5a49a9b6195afaa1e454dac9b17e416d6e86fed3b2238ba8983e9943-image.png)

#### Understanding Versions

**Version Numbering:**

-   Starts at Version 0 for first published flow
-   Increments by 1 for each new version

**Version States:**

-   **Draft**: Being edited, not published (only one draft version per flow)
-   **Running**: Currently active and processing users (only one running version per flow)
-   **Draining**: Previous version finishing existing users

#### Creating New Versions

You cannot edit running flows directly. To make changes:

![2e8b6f02da779d7f9a3327e383c2a2c8eee41faafd0d6df47fe238b8e9ec0b25-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2e8562301f065ceb/f776b02ebd006b654650813b/2e8b6f02da779d7f9a3327e383c2a2c8eee41faafd0d6df47fe238b8e9ec0b25-image.png)

**Process:**

1.  Access the action menu in the top-right
2.  Select **Edit Flow** or **Create New Version**
3.  Confirm you want to create a new version
4.  We'll copy all current configurations to your new version
5.  New draft version opens for editing

**What Transfers:**

-   All step configurations and connections
-   Step names and descriptions
-   Trigger settings and audience selections
-   Export configurations (but exports return to draft state for reconfiguration)

### Flow Management Operations

#### Accessing Flow Details

The details panel provides comprehensive flow information:

**Information Available:**

-   Flow ID (unique identifier)
-   Current version number and status
-   Creation and modification dates
-   Creator and last editor information

#### Deletion Operations

**Deleting Versions:**\\ You can delete specific versions when they're no longer needed:

![961332f6940c873a03f5fa09e6536049987a4bbc1e7a8a72c8954f9978e2725a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2da9f94b91b0a91f/550f0d53d61bd43d45fd5051/961332f6940c873a03f5fa09e6536049987a4bbc1e7a8a72c8954f9978e2725a-image.png)

**Deleting Entire Flows:**\\ Remove flows completely when they're no longer needed:

![d1d5773f012e7701856748457571feddd36ec205beba30f55c7cd18c8e012212-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am51a2d3caed072f95/6201b01831fa207018aceabe/d1d5773f012e7701856748457571feddd36ec205beba30f55c7cd18c8e012212-image.png)

**General Process:**

1.  Access version details panel or flow details
2.  Click action menu in the appropriate location
3.  Select **Delete Version** or **Delete Flow**
4.  Confirm deletion
5.  Item is permanently removed

### Next Steps

Now that you understand flow management:

1.  Learn about [Monitoring and Metrics](/docs/lytics/flows-metrics)
2.  Explore [Templates](/docs/lytics/flows-templates)
