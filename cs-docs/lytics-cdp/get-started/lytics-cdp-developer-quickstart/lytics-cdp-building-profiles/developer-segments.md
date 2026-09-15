---
title: "Default Segments"
description: "Categorizing users based on their behaviors and characteristics is pivotal for effective audience targeting and personalization strategies. Lytics…"
url: /lytics/developer-segments
uid: blt5841b1728c4c48fc
---

# Default Segments

## Default Segments

Categorizing users based on their behaviors and characteristics is pivotal for effective audience targeting and personalization strategies. Lytics audience segmentation offers a powerful tool for organizing users into meaningful groups based on shared attributes or behaviors. This section provides a comprehensive overview of all audience segments that are provided out-of-the-box.

## Available Segments (Audiences)

**Tip:** Lytics audience segments apply predefined rules to each user profile as they update. Membership in these segments is maintained in real-time and can trigger subsequent actions when users enter or exit the segment.

The following audience segments are all available out of the box, with no customization necessary in all Lytics pricing tiers.



| Name | Slug | Description | Definition |
| --- | --- | --- | --- |
| All | all | Your entire user base, both anonymous and known. | FILTER \* |
| Anonymous Profiles - 30 days | anonymous\_profiles\_30\_days | Anonymous profiles older than 30 days | FILTER AND ( \_modified <= "now-30d", \_num\_aliases = 1, EXISTS '\_uids' ) FROM user ALIAS anonymous\_profiles\_30\_days |
| Anonymous Profiles - 60 days | anonymous\_profiles\_60\_days | Anonymous profiles older than 60 days | FILTER AND ( \_modified <= "now-60d", \_num\_aliases = 1, EXISTS '\_uids' ) FROM user ALIAS anonymous\_profiles\_60\_days |
| Anonymous Profiles - 90 days | anonymous\_profiles\_90\_days | Anonymous profiles older than 90 days | FILTER AND ( \_modified <= "now-90d", \_num\_aliases = 1, EXISTS '\_uids' ) FROM user ALIAS anonymous\_profiles\_90\_days |
| Anonymous Profiles | anonymous\_profiles | Anonymous Profiles | FILTER AND ( \_num\_aliases = 1, EXISTS '\_uids' ) FROM user ALIAS default\_anon\_seg |
| Connected Customers | connected\_customer\_segment | Connected Customer Segment: Users who are active on 2 or more channels | FILTER \_forceinvalidsegmentfield = 1 FROM user ALIAS connected\_customer\_segment |
| Unhealthy Profiles | default\_unhealthy\_profiles | Any user profile that is in an unhealthy state. Commonly caused by merge conflicts such as rules which conflict. | FILTER \_profile\_processing\_failure = true FROM user ALIAS default\_unhealthy\_profiles |
| Behavior: At Risk Users | ly\_at\_risk | People who's interaction behavior is changing for the worse. | FILTER AND (score\_momentum >= 10, score\_momentum <= 30) |
| Behavior: Binge Users | ly\_binge\_user | People who show a lot of activity when they do interact with your brand. | FILTER AND (score\_frequency <= 20, score\_intensity >= 50) |
| Engagement: Casual Visitors | ly\_casual\_visitor | People who show little activity when they do interact with your brand. | FILTER score\_intensity < 25 |
| Engagement: Deeply Engaged Users | ly\_deeply\_engaged\_users | People who show a lot of activity when they do interact with your brand. | FILTER score\_intensity > 75 |
| Engagement: First-time Visitors | ly\_first\_time\_visitor | People who are visited from the first time. | FILTER visitct = 1 |
| Behavior: Frequent Users | ly\_frequent\_user | People consistently interacting with your brand. | FILTER score\_frequency > 65 |
| Campaign Referral Interactions: Email | ly\_from\_email | People referred from email. | FILTER utm\_mediums INTERSECTS ( "email" ) |
| Campaign Referral Interactions: Paid | ly\_from\_paid | People referred from paid media. | FILTER utm\_mediums INTERSECTS ( "cpc", "ppc" ) |
| Campaign Referral Interactions: Social | ly\_from\_social | People referred from social media. | FILTER utm\_mediums INTERSECTS ( "social", "twitter", "facebook", "pinterest", "instagram" ) |
| Web Activity: Has Visited Mobile Web | ly\_has\_visited\_mobile\_web | People who have visited on mobile web. | FILTER EXISTS is\_mobile |
| Web Activity: Has Visited Web | ly\_has\_visited\_web | People who have visited on web. | FILTER channels INTERSECTS ( "web" ) |
| Behavior: Infrequent Users | ly\_infrequent\_user | People not interacting with your brand. | FILTER score\_frequency < 35 |
| Location: International Visitors | ly\_international\_visitor | People who have visited outside the US. | FILTER AND ( EXISTS visit\_country, visit\_country NOT IN ("US") ) |
| Email Capture Status: Known Email | ly\_known\_email | People who have a known email address. | FILTER EXISTS email |
| Engagement: Moderately Engaged Visitors | ly\_moderately\_engaged\_visitor | People who show average activity when they do interact with your brand. | FILTER AND (score\_intensity > 24, score\_intensity < 76) |
| Behavior: Moderately Frequent Users | ly\_moderately\_frequent\_user | People occasionally interacting with your brand. | FILTER AND (score\_frequency > 34, score\_frequency < 76) |
| Web Activity: Multi Session Visitor | ly\_multi\_session\_visitor | People who have visited multiple times. | FILTER visitct > 1 |
| Behavior: Perusers | ly\_peruser | People who visit often but rarely interact deeply with your brand. | FILTER AND (score\_frequency >= 70, score\_intensity <= 20) |
| Engagement: Repeat Visitors | ly\_repeat\_visitor | People who have visited multiple times. | FILTER visitct > 1 |
| Casual Visitors | ly\_reporting\_casual\_visitors | People who show little activity when they do interact with your brand. | FILTER score\_intensity < 25 |
| Deeply Engaged Users | ly\_reporting\_deeply\_engaged\_users | People who show a lot of activity when they do interact with your brand. | FILTER score\_intensity > 75 |
| Frequent Users | ly\_reporting\_frequent\_users | People who interact with your brand a lot. | FILTER score\_frequency > 65 |
| Email | ly\_reporting\_from\_email | People referred from email. | FILTER utm\_mediums intersects ( "email" ) |
| Facebook | ly\_reporting\_from\_facebook | People referred from Facebook. | FILTER utm\_sources intersects ("Facebook", "facebook") |
| Google | ly\_reporting\_from\_google | People referred from Google search. | FILTER utm\_sources intersects ("Google", "Google Search", "Google Ads", "gads", "google", "google-search") |
| Paid | ly\_reporting\_from\_paid | People referred from paid media. | FILTER utm\_mediums intersects ( "cpc", "ppc" ) |
| Social | ly\_reporting\_from\_social | People referred from social media. | FILTER utm\_mediums intersects ( "social", "twitter", "facebook", "pinterest", "instagram" ) |
| Has Visited Mobile Web | ly\_reporting\_has\_visited\_mobile\_web | People who have visited on mobile web. | FILTER EXISTS is\_mobile |
| Has Visited Web | ly\_reporting\_has\_visited\_web | People who have visited on web. | FILTER channels INTERSECTS ( "web" ) |
| Infrequent Users | ly\_reporting\_infrequent\_users | People who interact with your brand occasionally. | FILTER score\_frequency < 35 |
| Last Visit Within 3 Months | ly\_reporting\_last\_visit\_within\_3\_months | People who have visited within the last 3 months. | FILTER lastvisit\_ts > "now-3M" |
| Last Visit Within A Day | ly\_reporting\_last\_visit\_within\_day | People who have visited within the last day. | FILTER lastvisit\_ts > "now-1d" |
| Last Visit Within A Month | ly\_reporting\_last\_visit\_within\_month | People who have visited within the last month. | FILTER lastvisit\_ts > "now-1M" |
| Last Visit Within A Week | ly\_reporting\_last\_visit\_within\_week | People who have visited within the last week. | FILTER lastvisit\_ts > "now-1w" |
| Multi Session Visitor | ly\_reporting\_multi\_session\_visitor | People who have visited multiple times. | FILTER visitct > 1 |
| Single Page Visitor | ly\_reporting\_single\_page\_visitor | People who have only visited one time. | FILTER pageviewct = 1 |
| Web Activity: Single Page Visitor | ly\_single\_page\_visitor | People who have only visited one time. | FILTER pageviewct = 1 |
| Email Capture Status: Unknown Email | ly\_unknown\_email | People who do not have a known email address. | FILTER NOT EXISTS email |
| Location: US Visitors | ly\_us\_visitor | People who have visited from the US. | FILTER visit\_country IN ("US") |
| Browser / OS: Android | ly\_uses\_android | People who have used Android. | FILTER devices INTERSECTS ( "Android" ) |
| Browser / OS: Desktop | ly\_uses\_desktop | People who used a desktop. | FILTER devices INTERSECTS ( "desktop" ) |
| Browser / OS: iOS | ly\_uses\_ios | People who have used iOS. | FILTER devices INTERSECTS ( "IOS" ) |
| Browser / OS: Mobile | ly\_uses\_mobile | People who have used a mobile device. | FILTER devices INTERSECTS ( "Android", "Blackberry", "IOS", "WinMobile" ) |
| Browser / OS: Other | ly\_uses\_other | People who have used other devices. | FILTER devices INTERSECTS ( "Blackberry", "WinMobile", "other" ) |
| Lytics Currently Engaged | smt\_active | Users who are currently engaging with your brand. | FILTER AND ( score\_momentum > 10, EXISTS score\_momentum, \\\_created < "now-1w", NOT AND ( score\_frequency <= 5, score\_intensity == 0, score\_momentum == 0, score\_quantity <= 3 ), NOT AND ( score\_quantity >= 50, score\_frequency >= 50, score\_intensity >= 25, score\_momentum >= 40 ) ) FROM user |
| Lytics Disengaged | smt\_dormant | Users who show minimal or no activity for a prolonged period of time. | FILTER AND ( AND ( score\_frequency <= 5, score\_intensity == 0, score\_momentum == 0, score\_quantity <= 3 ), EXISTS score\_momentum, \\\_created < "now-1w" ) FROM user |
| Lytics Previously Engaged | smt\_inactive | Users who are currently disengaged with your brand, but had been previously. | FILTER AND ( score\_momentum <= 10, EXISTS score\_momentum, \\\_created < "now-1w", NOT AND ( score\_frequency <= 5, score\_intensity == 0, score\_momentum == 0, score\_quantity <= 3 ) ) FROM user |
| Lytics New | smt\_new | Users who are new to your audience within the last week. | FILTER \\\_created >= "now-1w" FROM user |
| Lytics Highly Engaged | smt\_power | Users who engage most frequently and consistently of your users. | FILTER AND ( AND ( score\_quantity >= 50, score\_frequency >= 50, score\_intensity >= 25, score\_momentum >= 40 ), EXISTS score\_momentum, \\\_created < "now-1w", NOT AND ( score\_frequency <= 5, score\_intensity == 0, score\_momentum == 0, score\_quantity <= 3 ), score\_momentum > 10 ) FROM user |
| Lytics Unscored | smt\_unscored | Users who have not registered enough activity to be scored by our behavioral algorithms. | FILTER AND ( NOT EXISTS score\_momentum, \_created < "now-1w" ) |
