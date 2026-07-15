---
title: "[Contentstack Launch] - Instant Rollbacks on Launch"
description: Instant Rollbacks on Launch allow you to revert your application to a selected previous successful deployment without triggering a rebuild.
url: https://www.contentstack.com/docs/launch/instant-rollbacks
product: Contentstack Launch
doc_type: article
audience:
  - developers
  - devops
version: beta
last_updated: 2026-05-22
---

# [Contentstack Launch] - Instant Rollbacks on Launch

This page explains how Instant Rollbacks work in Contentstack Launch, including eligibility, retention windows, and the rollback process. It is intended for developers and DevOps teams who manage deployments and need a fast way to recover from problematic releases without rebuilding.

## Instant Rollbacks on Launch

Instant Rollbacks on Launch allow you to **revert your application to a selected previous successful deployment** without triggering a rebuild.

**Note:** The Instant Rollbacks feature is available as a ***beta*** release across all regions. During the beta period, the rollback retention window is limited to **1 deployment** across all plans. The full release with expanded retention windows is coming in the next few weeks.

Use Instant Rollbacks to:
- Recover quickly from problematic releases
- Reduce downtime
- Maintain application stability

## How Instant Rollbacks Work

Every deployment on Launch goes through the following lifecycle:
- **QUEUED → DEPLOYING → LIVE:** Normal deployment flow.
- **FAILED or CANCELLED:** Deployment did not complete successfully and **cannot be used for rollback**.
- **ARCHIVED:** When a new deployment goes LIVE, the previous LIVE deployment becomes ARCHIVED. These ARCHIVED deployments are the **only candidates for rollback**.

When a new deployment goes LIVE:
- The previous LIVE deployment becomes **ARCHIVED**.
- A limited number of recent **ARCHIVED **deployments are available for rollback.

## Rollback Eligibility

You can roll back only to deployments that meet all of the following conditions:

| Condition | Details |
|---|---|
| ARCHIVED state | Only previously LIVE deployments (now archived) can be used for rollback. |
| Within the retention window | Only a limited number of recent deployments are retained based on your plan. |
| Infrastructure is still available | The deployment's assets and resources must still exist. Older deployments may be cleaned up automatically. |

## Retention Window

Launch retains a limited number of previous deployments for rollback. Only deployments within this window are available for rollback.

The following Rollback Retention window tiers are available on Launch:

| Rollback Tier | Retention Window Count |
|---|---|
| Free (Default) | 1 |
| Self-Serve | 3 |
| Enterprise | 5 |

The Retention window starts with Free Tier by default, but you can request an upgrade in the plan as per the use case.

To request a tier change, contact our [Support](mailto:support@contentstack.com) team.

**Note:** After modifying the tier, the updated retention window takes effect starting from the next deployment. Contentstack does not retroactively adjust previously retained deployments.

## Performing a Rollback

To perform a rollback, follow the steps below:
- On your Deployments screen, click **Rollback Deployment**.
- In the modal that appears, select an eligible previous deployment and click **Review Rollback**.![Launch_Rollbacks_Select_and_Review.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5271ad10cc92175/6a01bb63129bb7b401f16160/Launch_Rollbacks_Select_and_Review.png)
- You can enter the reason for rollback, if any. Then click **Confirm & Roll Back** to proceed with the rollback.![Launch_Rollbacks_Confirm_Rollback.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdbb44a7617b42de0/6a01bb639b2d92c3764bf29a/Launch_Rollbacks_Confirm_Rollback.png)

You can find the rollback details as shown below:
- **Deployment History**![Launch_Rollbacks_DeploymentHistory.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd39b645811abec5f/6a01bb635e6fea642aba173c/Launch_Rollbacks_DeploymentHistory.png)
- **Current Deployment**![Launch_Rollbacks_DetailsCurrentLatestDeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta0220df6dfd5f766/6a01bb633d39f2f5f82a38e1/Launch_Rollbacks_DetailsCurrentLatestDeploy.png)
- **Rolled Back Deployment**![Launch_Rollbacks_DetailsPreviousLatestDeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8969c89dd33e30fe/6a01bb63f4dd122ce294fcf3/Launch_Rollbacks_DetailsPreviousLatestDeploy.png)

## What Happens During Rollback

- **Your application is restored to a previous working version:** The selected deployment becomes the active version of your site.
- **The current version is preserved:** The version you were using is not lost and can be accessed again if needed.
- **Traffic is redirected promptly:** Users start seeing the restored version within seconds.
- **Cached content is refreshed:** Any cached content is updated to ensure users see the correct version.

**Note:** Auto-deployments triggered by commits, webhooks, or automations continue to run during a rollback. We recommend disabling them before you begin to avoid unintended deployments.

## Failure Handling

The rollback process includes the following safeguards:
- **If the selected deployment is not eligible, the rollback does not start:**
This prevents switching to an invalid or incomplete version.
- **If something goes wrong during rollback, your site remains stable:**
Launch ensures that your application continues serving a consistent version and avoids partial or broken states.

## Common questions

### Does an Instant Rollback trigger a rebuild?
No. Instant Rollbacks on Launch allow you to revert your application to a selected previous successful deployment without triggering a rebuild.

### Which deployments can be used for rollback?
Only previously LIVE deployments (now archived) can be used for rollback, and they must be within the retention window and have infrastructure still available.

### When does a retention tier change take effect?
After modifying the tier, the updated retention window takes effect starting from the next deployment. Contentstack does not retroactively adjust previously retained deployments.

### Should I disable auto-deployments before rolling back?
Auto-deployments triggered by commits, webhooks, or automations continue to run during a rollback, and it is recommended to disable them before you begin to avoid unintended deployments.