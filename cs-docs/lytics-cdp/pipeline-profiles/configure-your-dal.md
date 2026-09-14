---
title: "Configure Data & Insights"
description: "Now that you’ve accessed Data & Insights, it’s time to connect the dots between your website, Contentstack, and Personalize . This part of the setup…"
url: /lytics/configure-your-dal
---

# Configure Data & Insights

## Configure Data & Insights

Now that you’ve accessed Data & Insights, it’s time to connect the dots between your website, Contentstack, and [Personalize](https://www.contentstack.com/docs/personalize/about-personalize/). This part of the setup ensures your content is properly classified, your audience data flows seamlessly, and your site is ready for real-time personalization.

It’s a quick process, and once it’s in place, Data & Insights will continuously enrich visitor profiles and power dynamic experiences across channels.

## 1\. Access Data & Insights

To access Data & Insights, open the app switcher in the top-right corner and select Lytics.

![ebb0ee61128bdc4420592a64f730002f763ac81e9c3805849a486c72f6d5379b-image.png](https://files.readme.io/ebb0ee61128bdc4420592a64f730002f763ac81e9c3805849a486c72f6d5379b-image.png)

The first time you access Data & Insights, you’ll need to configure shared authorization. Start by selecting the Data & Insights account you want to access, as shown below.

![img-0053.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdb944f9481e65a85/4fea701fdacf2bc238288661/img-0053.png)

When the OAuth modal appears, confirm the organization you want to access by clicking the link shown below.

![img-0054.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e0949478ca44458/ab88ca498e6e9057f06fbb7e/img-0054.png)

Finally, click **Authorize** to complete the setup. You’ll only need to do this the first time you access Data & Insights.

![img-0055.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4e32c1ced3e1ab3d/02be48036f4bb5f5fa1c57d2/img-0055.png)

## 2\. Configure content classification

After successful authorization, you’ll be redirected to your Data & Insights (Lytics) dashboard. The first time you access it, a brief onboarding will guide you through setup to ensure a personalized and efficient experience.

![47757cb03c7ff23d41e32d85dd2e34c5d743f0df41247143e496750c7ea2f22e-image.png](https://files.readme.io/47757cb03c7ff23d41e32d85dd2e34c5d743f0df41247143e496750c7ea2f22e-image.png)

When prompted, verify the domain(s) you want classified. This step is important—it tells Data & Insights where to access your website so it can associate content interactions with your visitors.

![img-0056.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb4d4ba3b66032844/15bb6bddebd0591ddda95d15/img-0056.png)

## 3\. Configure Data & Insights ↔ Contentstack Sync

The final setup step is to create the synchronization between your real-time data activation layer and your various Contentstack instances. This involves completing three tasks:

\* \[ \] Step 1: Synchronize your Stack entries with Data & Insights

\* \[ \] Step 2: Synchronize your visitors interests & audience membership with Personalize via the web

### Step 1: Sync CMS Entries → Data & Insights

To get the most out of Data & Insights' content classification service, it’s important to sync all of your entries directly to Data & Insights. This is done by creating a **Job**—a one-time setup that continuously keeps your entries in sync as they evolve.

To configure it, go to Jobs under the Data Pipeline section in the Data & Insights sidebar, as shown below.

![img-0057.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3ef40ca9b9902a98/8dcd3f0c021985e209e1b73c/img-0057.png)

To locate the Contentstack job options, enter "Contentstack" in the search bar and click the branded tile.

You’ll be prompted to select the job type, authorization method, and configuration options. For detailed guidance, refer to the following documentation:

-   [Authorization](/docs/lytics/contentstack)
-   [Entry Import](/docs/lytics/contentstack)

### Step 2: Sync Data & Insights Profiles → Personalize

Finally, you’ll need to install Data & Insights JavaScript Tag on your website. This enables two key operations:

1.  **Behavior Tracking** As visitors engage with your site, their behavior is automatically captured. This data is used to build cross-channel profiles that continuously improve over time.

1.  **Real-Time Personalization** For each visitor, the Data & Insights tag identifies who they are and returns relevant information to the browser (and to Personalize), such as audience membership, attributes, and more — all in real-time.

This setup enables hyper-targeted content and campaign personalization.

For detailed guidance, refer to the following documentation:

-   [Activating real-time profile sync from Data & Insights → Personalize](/docs/lytics/contentstack)
-   [Installing the Data & Insights JavaScript Tag](/docs/developers/sdks/lytics/web/lytics-javascript-tag)
-   Already using Launch? Automatically [install the tag via Launch](https://www.contentstack.com/docs/developers/launch/event-tracking-in-contentstack-launch).
