---
title: "Creating a Flow"
description: "This guide walks you through creating a complete flow from start to finish, focusing on the creation workflow and essential concepts."
url: /lytics/flows-creation
uid: blt4e3cb802b4822a22
---

# Creating a Flow

## Creating a Flow

This guide walks you through creating a complete flow from start to finish, focusing on the creation workflow and essential concepts.

### Planning Your Flow

Before building, consider these key questions:

-   **Who should enter this flow?** (Define your audience)
-   **What actions should they receive?** (Email, webhook, etc.)
-   **When should things happen?** (Timing and delays)
-   **How should users progress?** (Linear or branching paths)

### Step-by-Step Flow Creation

#### Step 1: Create a New Flow

1.  From the Flows dashboard, click **Create New**
2.  Choose either:
    -   **Template**: Start with a pre-built flow
    -   **Build Your Own**: Start with a blank canvas
3.  Enter a descriptive name for your flow
4.  Click **Create flow**

![6265f37734beee66e191a6260a97f54aa587b397f99321ecfe33f9a1303d901e-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb74bfaf22691380a/8280be6bc7c0e533930e254c/6265f37734beee66e191a6260a97f54aa587b397f99321ecfe33f9a1303d901e-image.png)

#### Step 2: Configure the Trigger Step

The trigger step is automatically created and defines who enters your flow.

![c14d2d4665d7cf91ffffa72c37b80d24c1eb2cc95c3ea5e1bae70df23d09c1c1-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb5b946edb0ab43b4/3f795a13ecc4a5d93b5df339/c14d2d4665d7cf91ffffa72c37b80d24c1eb2cc95c3ea5e1bae70df23d09c1c1-image.png)

1.  Click on the trigger step to open the sidebar
2.  **Select your audience**: Choose from existing audiences in your account
3.  **Set entry conditions**: Choose how users enter:
    -   **Added to**: Only new additions to the audience trigger entry (recommended for most flows)
    -   **Member of**: All current members plus future additions enter
4.  **Configure re-entry** if users should be able to go through the flow multiple times

**Note:** For detailed trigger configuration options, see [Flow Steps - Trigger Step](/docs/lytics/flows-managing-steps).

#### Step 3: Add Flow Steps

Add steps by clicking the **+** button after any existing step. Each step type serves a specific purpose:

-   **Wait Steps**: Control timing and enable personalization
-   **Export Steps**: Send user data to external systems
-   **Conditional Splits**: Create branching paths based on user attributes

**Note:** For detailed configuration of each step type, see [Flow Steps](/docs/lytics/flows-managing-steps).

![87b84844333e8fa52da3ce2fd0e0d88eb94927574e9dda0fb0ab14aa59ac2a7f-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfce7742888b356a8/273c8edc856a2d45ad30008b/87b84844333e8fa52da3ce2fd0e0d88eb94927574e9dda0fb0ab14aa59ac2a7f-image.png)

#### Step 4: Build Your Complete Flow

##### Example: Welcome Series Flow

Here's a complete welcome series flow structure:

![0f602f67399845c9ac941b31b4f1a2efc8540a729d6985714b28a789d125f418-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am44de35363be7fb47/dcf391b06baddc65e3b83941/0f602f67399845c9ac941b31b4f1a2efc8540a729d6985714b28a789d125f418-image.png)

1.  **Trigger**: When added to "Has Email Address" audience
2.  **Export**: Send welcome email immediately
3.  **Wait**: 1 day delay
4.  **Export**: Send product tour email
5.  **Wait**: 3 days delay
6.  **Conditional Split**: Check if user has made a purchase
    -   **Yes path**: Exit Flow
    -   **No path**: Send discount offer email

##### Naming Your Steps

Give descriptive names to each step for better organization:

-   "Welcome Email"
-   "Product Tour Delay"
-   "Purchase Check"
-   "New Customer Thank You"

Names appear in the flow canvas, user profiles, and metrics reporting.

#### Step 5: Validate Your Flow

Before publishing, ensure your flow is properly configured:

![11c8c22222406aa7fcfa1f946fb2b75767c11b4b4b0a9896bd01a3ae5b82c352-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4357306444fbe42d/a933c033b70d9c09aee3529d/11c8c22222406aa7fcfa1f946fb2b75767c11b4b4b0a9896bd01a3ae5b82c352-image.png)

**Common Validation Issues:**

-   Wait steps without time or condition specified
-   Export steps not properly configured
-   Conditional splits without rules defined
-   Missing connections between steps

**Validation Process:**

1.  Click **Publish** in the action menu
2.  Review any validation errors
3.  Fix issues before proceeding
4.  Activate any draft export jobs

### Advanced Configuration Tips

#### Using Personalization Keys

Personalization keys enable real-time website customization:

```
// Example: Check if user is in a specific flow step
jstag.call("entityReady", (profile) => {
  const targetKey = "welcome-series-delay";
  let isInWelcomeSeries = false;

  try {
    const activeSteps = profile?.data?.user?.flows_step_slugs || {};
    const personalizationKeys = Object.values(activeSteps).flat();
    if (personalizationKeys.includes(targetKey)) {
      isInWelcomeSeries = true;
    }
  } catch (error) {
    console.warn("Error checking for active steps:", error);
  }

  if (isInWelcomeSeries) {
    // Show welcome banner or special offer
    document.getElementById("welcome-banner").style.display = "block";
  }

  console.log(`User ${isInWelcomeSeries ? "is" : "is not"} in welcome series`);
});
```

#### Best Practices

**Flow Structure:**

-   Keep flows focused on single objectives
-   Use conditional splits sparingly
-   Document complex flows with step names

### Next Steps

Once your flow is created:

1.  Learn about [Publishing and Managing Flows](/docs/lytics/flows-publishing)
2.  Understand [Monitoring and Metrics](/docs/lytics/flows-metrics)
