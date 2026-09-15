---
title: "AI & Modeling Controls"
description: "Configuration options for the Data Science and AI related features."
url: /lytics/data-science-modeling
uid: bltedbb0923712c6e87
---

# AI & Modeling Controls

## AI & Modeling Controls

Configuration options for the Data Science and AI related features.

The following configuration options are available within the account settings [Data Science](https://app.lytics.com/vault/settings/data_science) section.

## EntQL Fields

|  |
| --- |
| ![0e652ea-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc0c6b4d60434788b/80b9c69baec1ce67ff8225f5/0e652ea-image.png) |
| List of fields to evaluate via EntQL in the merger, before indexing the entity |

## Enable Decisioning Triggers

|  |
| --- |
| ![81a8a1d-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1097f6e009522857/914145633706711e20274f59/81a8a1d-image.png) |
| When enabled, any Experiences configured to leverage decisioning will be automatically triggered. |

## Streams to Allow for Scoring

|  |
| --- |
| ![ff58738-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcd8c2e9d83604403/b6cc0ca03a4ffc067d4b3f22/ff58738-image.png) |
| Add any custom streams that contain behavioral signals that should contribute to the overall set of scores. |

## Enable Decisioning Scores

|  |
| --- |
| ![0939848-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame65e290c857a91a1/c377b19a7b70e23bcbd41fbd/0939848-image.png) |
| Each profile will be enriched with a score representing their overall need for a message (needs\\\_message) and the timestamp for the next predicted event in each stream (next\\\_event). The needs message is a numeric score representing the distance to or past the predicted event. A higher score signals that the activity is overdue. |

## Turn On Priority Only for Decisioning

|  |
| --- |
| ![209b443-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1da2d66055ef3e5a/9abdf3d3e4df8b14bf7ecfb1/209b443-image.png) |
| Automated Experience decisions will only leverage manual priority rather than full AI capabilities when enabled. |
