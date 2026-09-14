---
title: "Meta Fields"
description: "Meta Fields"
url: /lytics/meta-fields
---

# Meta Fields

## Meta Fields

A meta field is a field that has been automatically been added to your Schema by Lytics.

Meta fields are not integration specific. For lists of fields created for specific integrations, reference the documentation for the tool of interest.

## Meta Fields

| Field ID | Short Description | Data Type | Summary |
| --- | --- | --- | --- |
| `_created` | Created Timestamp | date | The earliest historic timestamp found across all data sources |
| `_id` | Lytics ID | string | Canonical identifier from Lytics identity resolution |
| `_last_scored` | Last Scored Timestamp | date | Timestamp indicating when the profile was last scored |
| `_modified` | Modified Timestamp | date | Timestamp indicating when the profile was last modifed |
| `_segments` | Segment Membership | \\\[\]string | All of the segments to which a profile currently belongs |
| `_segs` | Computed Traits | membership | Segment history (shows in and out times for segment membership) |
| `_split` | Random Split 1 | int | Random profile partitions (0 - 99) |
| `_split2` | Random Split 2 | int | Random profile partitions (0 - 99) |
| `_num_aliases` | -- | int | The number of identifiers in the profile |
| `_num_events` | -- | int | The number of total user events |
| `_num_streams` | -- | int | The number of streams where the user has been seen |
| `_num_days` | -- | int | The number of days where there has been a stream event associated with the user |
| `_num_conflicts` | -- | int | The number of merge conflicts encountered on the traversal (artifact of traversal before indexing) |
| `_conflicts` | -- | map\\\[string\]int | The number of conflicts per identifier field |
| `_num_max_neighbors` | -- | int | The number of fragments skipped in traversal due to max neighbors |
| `_max_traversals` | -- | bool | Indicates the profile has hit the maximum number of traversals |
| `_num_nested_values` | -- | int | The number of values in "nested" field types on an entity (profile) |
| `_total_sz` | -- | int | The total byte size of all fields on the profile |
| `_cust_sz` | -- | int | The total byte size of all non-meta fields on the profile |
| `_internal_sz` | -- | int | The total byte size of all _meta_ fields on the profile |
| `_elasticsearch_size` | -- | int | The total byte size attempted to write to Elasticsearch, but failed |
| `_streamnames` | Stream Names | \\\[\]string | All the streams that have been seen on each profile |
| `_broken_profile_broke_max_size` | -- | bool | If true, indicates that this is the reason for the profile's unhealthy state |
| `_broken_profile_broke_max_fragment_size` | -- | bool | If true, indicates that this is the reason for the profile's unhealthy state |
| `_broken_profile_max_neighbors` | -- | bool | If true, indicates that this is the reason for the profile's unhealthy state |
| `_broken_profile_nested_count` | -- | bool | If true, indicates that this is the reason for the profile's unhealthy state |

On Unhealthy Profiles, only some Meta fields will continue to be surfaced. View the these fields in our [Understanding Profile Health documentation](/docs/lytics/user-profile-health)

### ML Powered Meta Fields

These meta fields are the result of Lytics machine learning algorithms.

| Field ID | Short Description | Data Type | Description |
| --- | --- | --- | --- |
| `lytics_content` | Content Topics | map\\\[string\]number | Raw topic interests from Lytics Affinity Engine |
| `lytics_content_inferred` | Inferred Content Topics | map\\\[string\]number | Inferred topic interests from Lytics Affinity Engine |
| `lytics_rollup` | Content Affinities | map\\\[string\]number | Content affinities from Lytics Affinity Engine |
| `score_consistency` | Score Consistency | int | Behavior based score ([Consistency](/docs/lytics/behavioral-scores-1)) |
| `score_frequency` | Score Frequency | int | Behavior based score ([Frequency](/docs/lytics/behavioral-scores-1)) |
| `score_intensity` | Score Intensity | int | Behavior based score ([Intensity](/docs/lytics/behavioral-scores-1)) |
| `score_maturity` | Score Maturity | int | Behavior based score ([Maturity](/docs/lytics/behavioral-scores-1)) |
| `score_momentum` | Score Momentum | int | Behavior based score ([Momentum](/docs/lytics/behavioral-scores-1)) |
| `score_propensity` | Score Propensity | int | Behavior based score ([Propensity](/docs/lytics/behavioral-scores-1)) |
| `score_quantity` | Score Quantity | int | Behavior based score ([Quantity](/docs/lytics/behavioral-scores-1)) |
| `score_recency` | Score Recency | int | Behavior based score ([Recency](/docs/lytics/behavioral-scores-1)) |
| `score_volatility` | Score Volatility | int | Behavior based score ([Volatility](/docs/lytics/behavioral-scores-1)) |
| `segment_prediction` | Lookalike Model Predictions | map\\\[string\]number | Scores from Lytics Lookalike and SegmentML models |
| `segment_prediction_percentile` | Lookalike Model Percentiles | map\\\[string\]int | Percentiles of scores from Lytics Lookalike and SegmentML models |
| `deliver_day` | deliver day | map\\\[string\]int | The predicted best day to communicate with the user based on their next predicted event. |
| `deliver_hour` | deliver hour | map\\\[string\]int | The predicted best time to communicate with the user based on their next predicted event. |

If you have turned on Scoring by Stream, you will see additional sets of Score fields containing the stream name for each stream being individually scored.

### Orchestration Meta Fields

These fields will only be available when orchestration has been turned on in an account.

|  |  |  |  |
| --- | --- | --- | --- |
| `holdout_groups` | -- | map\\\[string\]bool | Membership of holdout group by experience for orchestration simulation |
| `picked_experiences` | picked experiences | \\\[\]string | IDs of out-of-the-box integration experiences that leverage delivery optimization and have been selected at one point for the user. |
| `needs_message` | Needs Message Score | map\\\[string\]number | Score that represents the user's need for a message in a specific stream based on the relative distance to or from the predicted next event in the same stream. |
| `next_event` | Next Event Prediction | map\\\[string\]time | The predicted timestamp an event is expected in a specific stream based on interaction patterns of the user in the same stream. |
| `next_event_low` | -- | map\\\[string\]time | Next Event Prediction (Lower Bound) |
| `next_event_upper` | -- | map\\\[string\]time | Next Event Prediction (Upper Bound) |
| `decision_ttl` | -- | date | Approximate time that decisioning for the profile will be reevaluated |
