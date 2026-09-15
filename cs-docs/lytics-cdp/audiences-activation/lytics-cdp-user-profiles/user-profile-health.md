---
title: "Understanding Profile Health"
description: "Because Lytics user profiles are created by stitching data across sources the stability of a given profile depends on the quality and quantity of data…"
url: /lytics/user-profile-health
uid: blt5b833a94e09532f1
---

# Understanding Profile Health

## Understanding Profile Health

## User Profile Health

Because Lytics user profiles are created by stitching data across sources the stability of a given profile depends on the quality and quantity of data used to create it. Lytics is now surfacing the "health" of user profiles to improve your account performance and reliability.

-   **Healthy profiles** are stable and actionable, with strong identifiers connecting data fragments across sources to the right user.
-   **Unhealthy profiles** are unstable and not actionable, as they are either missing entirely or missing a subset of data.

Lytics is providing visibility into user profile health to facilitate the resolution of various issues caused by unhealthy profiles, which can include missing data, inconsistent audience counts between Lytics and other tools, and duplicate profiles in audience exports/triggers.

### Unhealthy Profiles

A user profile is considered unhealthy if the traversal through all data fragments fails for any reason. Unhealthy profiles are mostly commonly hitting one of the following limitations:

-   Max Neighbors
-   Max Traversals
-   Profile size is too large

Unhealthy profiles in Lytics are no longer processed for audience evaluations, audience exports or triggers, and enrichment processes, including behavioral scoring and content affinity calculations. Because unhealthy profiles are unusable in Lytics or any of your connected marketing tools, this change will reduce latencies and ensure that only valid user profiles are surfaced for activations.

#### What information is contained for unhealthy profiles?

Unhealthy profiles only contain unique identifiers (“by fields”) and meta fields such as profile size, an indication of why the profile is unhealthy, the data stream names, etc.

##### Meta Fields that remain on Unhealthy Profiles

-   \_num\_aliases
-   \_num\_events
-   \_num\_streams
-   \_num\_days
-   \_num\_conflicts
-   \_conflicts
-   \_num\_max\_neighbors
-   \_max\_traversals
-   \_num\_nested\_values
-   \_total\_sz
-   \_cust\_sz
-   \_internal\_sz
-   \_elasticsearch\_size
-   \_streamnames
-   \_profile\_processing\_failure
-   \_broken\_profile\_broke\_max\_size
-   \_broken\_profile\_broke\_max\_fragment\_size
-   \_broken\_profile\_max\_neighbors
-   \_broken\_profile\_nested\_count

**Tip:** Lytics is not destroying or losing any data about your users. Rather, unhealthy profiles simply no longer surface the portion of a profile that can be retrieved as it may result in inaccurate audience counts and activations.

#### How can I identify unhealthy profiles?

A new, predefined audience called "Unhealthy Profiles'' will be made available in all accounts. If user profiles become unhealthy, then we should see an increase in this audience at the same rate that we see a decrease in other audiences.

#### Will other audiences be affected by this change?

The only fields that we drop from the profiles when they become unhealthy are the non-"by fields." So an audience that only has conditions on those "by fields" will not be affected.

For example, Filter Exists email wouldn't be affected, but the audience Filter Exists email AND State=WA would be affected. The latter would be affected because Lytics will drop the state field for the unhealthy profiles.

#### How can I resolve unhealthy profiles?

Contact your Lytics Account Manager to discuss a strategy to resolve or reduce the number of unhealthy profiles. The approach will vary depending on your identity resolution strategy and the requirements of your marketing use cases.

#### Can I export unhealthy profiles?

Yes, the "Unhealthy Profiles" audience can be exported via BigQuery, SFTP or S3. However, unhealthy profiles cannot be exported to other provider tools for activations since they are excluded from the audience evaluation process.

### Profile Limits

User profiles become unhealthy by hitting one or more of the following limits.

#### Max Neighbors

“Max neighbors” refers to the number of edges associated with a node. A node is created in Lytics' graph when an identifier is introduced to a user profile.

**Audience Impact**: From an activation perspective, this means that what would have been one user profile in the audience is now increased to how many fragmented nodes there were.\\ ![Lytics Graph max neighbors limit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7ff671e5a82eb64c/152e6c25d9d2e7966aea8c9e/Lytics_Graph_max_neighbors_limit.png)

Above is an example of when max neighbors could impact a profile. The profile on the left has one email and many web cookies. Each time a user gets a new web cookie and they are logged into the site, Lytics will update the graph with a new node. Over time, the node with an email will have more and more cookies associated with it until it hits the max neighbors limit. Once the profile hits max traversals, the email node will drop off. Then, instead of having one user profile in the Lytics audience builder, there will be as many profiles as there are fragmented nodes off the original (four in this example).

#### Max Traversals

“Max Traversals” refers to the number of edges that need to be traversed in order to retrieve the user profile for the audience. Once this hits the limit specified on the account, the profile will no longer update.

**Audience Impact**: If a user hits max traversals, their profile will no longer be updated for audience building and will fall into a “stale state.” See the following examples:

1.  If a user has opted out for emails and they hit max traversals, they will not be opted out even if the event is received to opt them out. They will be stuck in that audience unless the criteria changes and they no longer qualify.
2.  If a user has opted out for an email and they do not qualify for the audience originally but eventually opt in, that will not be reflected on the profile in the audience builder.

#### Profile Size

When a profile becomes too large, it cannot be pulled in for audience building at all. At this point the profile is unusable. There are a few different points in our pipeline which can trigger a profile to be marked unhealthy due to size:

1.  If a single node in the graph becomes too large to write to the underlying data structure for our graph, we mark that node as unhealthy (subsequently marking any profile built from that node in the graph as unhealthy). This particular size limit leads to data loss, as we could not write updated attribution to the node in the graph, and cannot guarantee profile accuracy. This particular instance of size check can be resolved by addressing the root source contributing to the size of data attempting to be written (i.e. place a cap on the number of values retained in some set / map fields), and replaying the account.
2.  If the traversal of the graph builds a complete profile that is too large to write to the underlying data structure for our entity storage, we mark the profile as unhealthy. This can typically be resolved without requiring a replay, as there has been no potential data loss in the graph, and often involves addressing the root source contributing and simply re-evaluating the profile impacted (this re-evaluation can occur by receiving new events for that profile, or during our natural cadence of re-scoring profiles).
3.  If a full profile is not too large for our key indexed profile storage, but is too large to write to our fully indexed (used for bulk exports / ad-hoc audience scans) profile storage, this is treated equally to (2) and the profile is marked unhealthy with equal resolution strategy.
