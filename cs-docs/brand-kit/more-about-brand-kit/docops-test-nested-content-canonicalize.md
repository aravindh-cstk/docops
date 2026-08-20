---
title: "DocOps Test Nested Content Canonicalize"
description: "Internal test article with deeply nested tables, images, and sections used to verify the Prod to GitHub sync pipeline."
url: /brand-kit/docops-test-nested-content-canonicalize
---

# DocOps Test Nested Content Canonicalize

## Overview

This article is an internal test fixture for the Prod to GitHub sync pipeline. It exists to exercise the comparison logic that decides whether reordered but otherwise identical nested content counts as a real change.

## Configuration Options

The table below lists sample configuration fields used only for this test.

| **Field** | **Type** | **Default** | **Notes** |
| --- | --- | --- | --- |
| Retry Count | Number | 3 | Applies per request |
| Timeout | Seconds | 30 | Configurable per environment |
| Cache Mode | String | standard | One of standard, aggressive, off |

## Setup Steps

Follow these steps to configure the test fixture:

1.  Open the settings panel.
    1.  Select the **Advanced** tab.
    2.  Locate the **Sync Options** section.
2.  Enable the toggle shown below.

    ![Sample Settings Toggle](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2886f3dfad3dbfd7/665649ffe4a73248f49778fa/5-Edit-Stack-Details.png)

3.  Save your changes.
    -   Confirm the banner shows **Saved**.
    -   If it does not, retry once before escalating.

## Regional Availability

| **Region** | **Status** | **Rollout Phase** |
| --- | --- | --- |
| US | Available | Phase 1 |
| EU | Available | Phase 1 |
| APAC | In progress | Phase 2 |

### Notes on Regional Rollout

-   Phase 1 regions are fully supported.
-   Phase 2 regions are being validated.
    -   APAC rollout depends on the Phase 1 results.
    -   No fixed date has been committed for APAC availability.

## Related Resource

-   [Brand Kit Limitations](/docs/brand-kit/limitations)
