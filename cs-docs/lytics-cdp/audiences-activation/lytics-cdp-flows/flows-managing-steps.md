---
title: "Managing Steps"
description: "Flow steps are the building blocks of your user journeys. Each step type serves a specific purpose and offers unique configuration options. This guide…"
url: /lytics/flows-managing-steps
uid: blta46185f5cec6ce25
---

# Managing Steps

## Managing Steps

Flow steps are the building blocks of your user journeys. Each step type serves a specific purpose and offers unique configuration options. This guide covers all available step types and their detailed settings.

### Overview of Step Types

Flows support four main step types:

-   **Trigger**: Entry point for users (required, cannot be deleted)
-   **Wait & Personalize**: Control timing and enable personalization
-   **Export**: Send data to external systems
-   **Conditional Split**: Create branching paths based on conditions

![f0c31699f27fabeacfcad746efa6b342a3681775ee81047163c4c903c553611d-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc2decb3666a6312c/e23783ab81530469b672f02f/f0c31699f27fabeacfcad746efa6b342a3681775ee81047163c4c903c553611d-image.png)

### Trigger Step

The trigger step is the entry point for every flow and cannot be deleted. It defines when and how users enter your workflow.

![cb252ffdc1d789bdf46bb30ad48468e00bcf95b279977ed9fb24e665ff3707fe-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame5a2199995c40524/c3d6a4a7aca0393bc0eb4435/cb252ffdc1d789bdf46bb30ad48468e00bcf95b279977ed9fb24e665ff3707fe-image.png)

#### Configuration Options

**Audience Selection**

-   Any valid Audience can be used as the entry trigger

**Entry Type Options**

| Option | Description | Best For |
| --- | --- | --- |
| **Added to** | Only new additions to the audience trigger entry | Welcome series, cart abandonment, event-triggered flows |
| **Member of** | All current members plus future additions enter | Evergreen campaigns, promotions, existing customer outreach |

#### Re-entry Settings

Control whether users can go through the flow multiple times:

![553ae586e930ad92b33aa52869d8ca880dd846ccd3d36064a0187f66b24967d6-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8a699e6881c2b0d8/2343caa1be47a23b2baa81e7/553ae586e930ad92b33aa52869d8ca880dd846ccd3d36064a0187f66b24967d6-image.png)

**Allow Re-entry**

-   No
    -   Users can only enter the flow once
    -   Simplest option for one-time campaigns
-   Yes
    -   Users can go through the flow multiple times
    -   Great for a number of evergreen campaigns (e.g. cart abandon)
    -   Presents a variety of configuration to control re-entry

**Re-entry Condition**

-   Enters the audience again
    -   This option assumes you have time based logic or some other rule built in to cause members to exit your audience. Upon re-entry, they'll be entered into the flow multiple times
-   Enters or remains in the audience
    -   This assumes an audience member has stayed in the audience for a period of time, see re-entry delay below
-   Re-entry delay
    -   Minimum time between flow entries
    -   Default: 1 hour
    -   Range: 1 hour to 365 days
    -   Required when using "enters or remains" option

#### Examples

**Cart Abandonment Trigger**

```
Audience: "Added item to cart in last 24 hours AND no purchase in last 48 hours"
Entry Type: Added to
Re-entry: Enters audience again
Re-entry Delay: 24 hours
```

**Monthly Newsletter Trigger**

```
Audience: "Subscribed to newsletter"
Entry Type: Member of
Re-entry: Enters or remains in audience
Re-entry Delay: 30 days
```

### Wait & Personalize Step

Wait steps control timing in your flows and enable personalization opportunities.

![d2c271fe376e63b35168258dc798f6c3190183a9ee67dccc34418e8c002d3c7e-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am79844f18d656e02a/25fac2bba7e46b83d377fe74/d2c271fe376e63b35168258dc798f6c3190183a9ee67dccc34418e8c002d3c7e-image.png)

#### Configuration Options

Choose a wait mode from the **Configuration** dropdown:

![21d12aa53c9fc289fbf59d0877f52a4cce0612ced63aff777bc7d1bf244343d2-delay-1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0001249de3c44187/3fe56da891847293cc7e76cf/21d12aa53c9fc289fbf59d0877f52a4cce0612ced63aff777bc7d1bf244343d2-delay-1.png)

##### Time-Based Wait

Set a fixed duration for all users:

![9a2024784c786c794a3f898910b5c054e429e9596bebf5b0e8ed6ffd7ba55d27-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8339cd82802bc935/5948d9948c2c9a16ea362e3d/9a2024784c786c794a3f898910b5c054e429e9596bebf5b0e8ed6ffd7ba55d27-image.png)

**Use Cases:**

-   Drip campaign timing
-   Follow-up sequences
-   Cooling-off periods

##### Time-of-Day Wait

Hold users until a specific time of day, aligned to a calendar clock rather than a relative duration:

-   **Time** — the target time in 24-hour HH:MM format (e.g., 09:00)
-   **Timezone** — the IANA timezone the time is evaluated in (e.g., America/New\_York). Defaults to your browser's timezone.

![d113ee02fe3cd2003f8e3dfa8288af5dec1f32a16037fe2d4e92bc9003a73b2b-delay-2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1fa95b1fd7fffbfe/49a02fcbac8ecbcd79746337/d113ee02fe3cd2003f8e3dfa8288af5dec1f32a16037fe2d4e92bc9003a73b2b-delay-2.png)

Each user wakes at the next occurrence of that time in the chosen timezone. A user who enters the step at exactly the target time waits until the following day's occurrence.

**Use Cases:**

-   Send during business hours regardless of when a user enters the flow
-   Batch actions to a consistent send time

##### Day-of-Week Wait

Hold users until a specific weekday and time, aligned to the calendar:

-   **Day of week** — the target weekday (Sunday–Saturday)
-   **Time** — the target time in 24-hour HH:MM format
-   **Timezone** — the IANA timezone the day and time are evaluated in. Defaults to your browser's timezone.

![b2416d2b60d246facb58e947b1f708ac1f4f42d0600c3bb8e1f8cc9efef00135-delay-3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am54c484ec4dbc3ce0/b58e0ec642e88659792617a7/b2416d2b60d246facb58e947b1f708ac1f4f42d0600c3bb8e1f8cc9efef00135-delay-3.png)

Each user wakes at the next occurrence of that weekday and time in the chosen timezone. A user who enters at exactly that moment waits until the following week's occurrence.

**Use Cases:**

-   Weekly newsletter or digest sends
-   Aligning actions to a recurring weekly cadence

##### Condition-Based Wait

Wait until specific conditions are met:

![c98f260a34e3f6412296765665e2af47de776713b7a5536cf921d37868425ac6-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc69bb5f04902a2fe/72ad3d6efb91a938d83750c9/c98f260a34e3f6412296765665e2af47de776713b7a5536cf921d37868425ac6-image.png)

**How It Works:**

-   Uses the same audience builder as other Lytics features
-   Evaluates conditions as events stream into the system
-   Users progress when conditions are met
-   Maximum wait time prevents indefinite delays

**Condition Examples:**

-   Wait until user visits pricing page
-   Wait until user downloads a file
-   Wait until user's engagement score increases
-   Wait until specific custom events occur

**Maximum Wait Time:**

-   Set upper limit to prevent users from waiting indefinitely
-   Users progress after max time regardless of conditions
-   Recommended to always set a reasonable maximum

##### Personalization Keys

Enable real-time website personalization based on flow state:

![b297acc2f1542bb95b25d58c8df00ffb6f62e446a4a0c03852a3ded44a672f72-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd7f76359c2a982b1/ba1683b2534d6df0f1e48189/b297acc2f1542bb95b25d58c8df00ffb6f62e446a4a0c03852a3ded44a672f72-image.png)

**Key Requirements:**

-   Recommended to be unique across your account
-   Use descriptive names (e.g., "welcome-series-day-2")
-   No spaces or special characters (use hyphens or underscores)

**How Personalization Works:**

1.  User enters wait step with personalization key
2.  Key is added to user's profile
3.  Website JavaScript can check for the key
4.  Display personalized content based on flow state

### Export Step

Export steps send user data to external systems and are the primary action steps in flows.

![e578fa39e466fd93645b26ac0f48d520f9167da5280aac47136ace391961ae7e-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am73b973fd90494942/c44c19299cf3b68e6f98a114/e578fa39e466fd93645b26ac0f48d520f9167da5280aac47136ace391961ae7e-image.png)

#### Configuration Process

##### Step 1: Add Export Step

1.  Click **+** button to add new step
2.  Select **Export** from step types
3.  Click **Configure Export** button

##### Step 2: Choose Export Type

1.  Browse or search available export providers
2.  Select your desired destination
3.  Follow on-screen guidance to configure export (e.g., "Audience Trigger Webhook")

##### Step 3: Configure Export Settings

Follow the standard Lytics export configuration wizard:

**Common Configuration Options:**

-   **Authentication**: API keys, OAuth tokens, connection strings
-   **Destination Settings**: Endpoints, database tables, list IDs
-   **Data Mapping**: Which profile attributes to send
-   **Formatting**: JSON, CSV, custom formats
-   **Frequency**: Real-time, batched, scheduled

##### Step 4: Export States in Flows

**Draft State:**

-   Export configuration is saved but not active
-   No data is sent while in draft
-   Allows review and refinement before activation

**Active State:**

-   Export is ready to receive and process users
-   Required before flow can be published
-   Achieved through the "Activate" button in the publish process

### Conditional Split Step

Conditional splits create branching paths in your flows based on user attributes or behaviors.

![b6c276c887d679aef215cab4bff7d57e9bca1a869e1dd885625d593a734d2fb8-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am02a26d1284666a92/e6c9fcec6f07dc1c70508eb1/b6c276c887d679aef215cab4bff7d57e9bca1a869e1dd885625d593a734d2fb8-image.png)

#### Configuration Options

**Condition Builder:**

-   Uses the same interface as Lytics audience builder
-   Supports all profile attributes
-   Can combine multiple conditions with AND/OR logic

#### Building Conditions

##### Simple Conditions

![a90922f492dffab453e95d85a6ba77366fbe4c55d228308f6aebbe70623d06a7-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb7c700f327af6da4/7ef540ea30622e66d434bf30/a90922f492dffab453e95d85a6ba77366fbe4c55d228308f6aebbe70623d06a7-image.png)

**Examples:**

-   Email domain contains "@company.com"
-   Location country equals "United States"
-   Last purchase date is within 30 days
-   Custom field "subscription\\\_type" equals "premium"

##### Complex Conditions

**Combining Rules:**

-   Use AND to require all conditions be met
-   Use OR to require any condition be met
-   Nest conditions for sophisticated logic

#### Path Behavior

**Yes Path (Left):**

-   Users who meet the defined conditions
-   Can connect to any subsequent step type

**No Path (Right):**

-   Users who don't meet the conditions
-   Can connect to any subsequent step type

**Path Merging:**

-   Path merging lower down in the flow is not currently supported

#### Use Cases

**Geographic Targeting:**

```
Condition: Location country equals "United Kingdom"
Yes Path: Send UK-specific promotional email
No Path: Send standard promotional email
```

**Engagement-Based Paths:**

```
Condition: Engagement score > 70
Yes Path: Send advanced feature email
No Path: Send basic tips email
```

**Purchase History Splits:**

```
Condition: Total purchases > 0
Yes Path: Customer retention flow
No Path: First-time buyer incentive flow
```

**Company vs Consumer:**

```
Condition: Email domain matches business domain list
Yes Path: B2B sales outreach
No Path: Consumer marketing campaign
```

### Step Management

#### Adding Steps

1.  Click the **+** button after any step
2.  Select the desired step type
3.  Configure the step settings
4.  Save to add to your flow

#### Deleting Steps

![9caf411eca8031cea2698c4eba0e04cf71044b2bd6db6aeb3928a605352b2e96-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0bd8747ca1799702/db4cee76f27268a80bd92125/9caf411eca8031cea2698c4eba0e04cf71044b2bd6db6aeb3928a605352b2e96-image.png)

1.  Click the action menu (⋮) on any step
2.  Select **Delete**
3.  Confirm deletion
4.  Flow connections automatically adjust

**Note:** The trigger step cannot be deleted.

#### Reordering Steps

Steps are connected in sequence and cannot be reordered directly. To change flow order:

1.  Delete steps you want to move
2.  Add new steps in the desired order
3.  Reconfigure the deleted steps

#### Step Validation

Before publishing, all steps are validated:

**Common Validation Errors:**

-   Wait steps without time or condition specified
-   Export steps not configured or activated
-   Conditional splits without conditions defined

**Validation Process:**

1.  Occurs automatically when attempting to publish
2.  Displays specific error messages
3.  Must resolve all errors before publishing
4.  Validation re-runs each time you attempt to publish

### Next Steps

Now that you understand all step types:

1.  Learn about [Publishing and Managing Flows](/docs/lytics/flows-publishing)
2.  Explore [Monitoring and Metrics](/docs/lytics/flows-metrics)
