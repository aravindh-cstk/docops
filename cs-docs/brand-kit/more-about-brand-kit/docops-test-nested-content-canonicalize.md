---
title: "DocOps Test Nested Content Canonicalize"
url: /brand-kit/docops-test-nested-content-canonicalize
description: "Internal test article with deeply nested tables, images, and sections used to verify the Prod to GitHub docs sync pipeline behavior."
---

# DocOps Test Nested Content Canonicalize

This paragraph was edited directly in Production for scenario 1 of the sync test drill (body-only edit).

## Configuration Options

The table below lists sample configuration fields used only for this test.

| **Field** | **Type** | **Default** | **Notes** |
| --- | --- | --- | --- |
| Retry Count | Number | 3 | Applies per request |
| Timeout | Seconds | 30 | Configurable per environment |
| Cache Mode | String | standard | One of standard, aggressive, off |

## Setup Steps

Follow these steps to configure the test fixture:

1. Open the settings panel and select the **Advanced** tab.
2. Locate the **Sync Options** section.
3. Enable the toggle shown below.

![Sample Settings Toggle](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2886f3dfad3dbfd7/665649ffe4a73248f49778fa/5-Edit-Stack-Details.png)

4. Save your changes and confirm the banner shows **Saved**.
5. If it does not, retry once before escalating.

## Regional Availability

| **Region** | **Status** | **Rollout Phase** |
| --- | --- | --- |
| US | Available | Phase 1 |
| EU | Available | Phase 1 |
| Asia Pacific | In progress | Phase 2 |

### Notes on Regional Rollout

- Phase 1 regions are fully supported.
- Phase 2 regions are being validated.
- Asia Pacific rollout depends on the Phase 1 results.
- No fixed date has been committed for Asia Pacific availability.

## Related Resource

- [Brand Kit Limitations](/docs/brand-kit/limitations)
