---
title: "Impact of Browser Tracking Changes"
description: "Impact of Browser Tracking Changes"
url: /lytics/impact-of-browser-tracking-changes
---

# Impact of Browser Tracking Changes

## Impact of Browser Tracking Changes

## Impact of Browser Tracking Changes

Announcements about browsers changing their cookie tracking policies have created tremendous concern and confusion within marketing and advertising industries, and rightfully so. These changes represent dramatic shifts in how users and their activity are tracked across the web.

Browsers are removing third-party cookies and altering the default behavior of first-party cookies, which makes first-party data mission-critical for marketers more than ever before. The following explains how current and upcoming browser changes will impact your web tracking involving Lytics.

### Overall impact

The blocking of third-party cookies, whether by browser default or user choice, will significantly impact the effectiveness, if not viability, of ad targeting, retargeting, attribution, and measurement efforts dependent on the use of third-party cookies. In addition, Apple’s ITP 2.2 impacts certain marketing use cases.

For Safari users, cookies get cleared after seven days if there is no activity. So if a user visits a site once and returns eight days later, their cookie will be gone. However, if that user returns every day for eight days, their cookie will remain intact.

This can skew analytics, impact personalization efforts for anonymous users, and affect conversion attribution. But put it in perspective, while Safari accounts for over half of mobile web traffic in the US for non-mobile and worldwide browser usage, Safari’s market share is around 20 percent as of January 2020.

More importantly, these browser changes continue the trend of giving individuals more control over what brands/entities they want to engage with and transparency in that regard. They point to the need for brands to maximize relevant content or offerings for a site visitor in real-time, which can lead to registration or other means of establishing a known, first-party relationship. These browser changes reflect the change from a model that exploits third-party data outside an established relationship to transparently establishing and cultivating a relationship with the consumer for mutual benefit.

### Impact on Lytics

The good news is Lytics was designed to help companies establish first-party relationships with their customers and implement intelligent identity resolution strategies. Lytics enables you to collect and leverage first-party data in various ways, such as: acquiring new customers, serving ads on-site with highly targeted audiences, and promoting relevant content to users based on their interests.

Onto the technical details. To understand how these browser changes will impact the Lytics JavaScript tag (aka Tracking Tag) you must first understand the core mechanics of how Lytics builds profiles for your anonymous visitors.

It all begins with Lytics’ unique client-side identifier, which is referred to as the UID or `_uid`. When a user visits your web property for the first time, the Lytics tag generates a unique value for this UID and stores it as a browser cookie. This UID is then appended to any behavioral data collected from their visit. Typically when a user returns after a subsequent visit, this UID persists since it has been stored as a cookie.

The impact of cookie changes on this process will vary by browser. In the case of Safari, for example, it means that if a user does not return within seven days, that particular identifier will be deleted. As such, it will become imperative to double down on your identity resolution strategies and ensure that efforts are being made to associate first-party anonymous cookies with other known identifiers that can persist, such as user IDs upon login.

In addition, some customers leverage the `loadid` parameter as part of their tag configuration. Historically, this has enabled a simple method for resolving identities across web properties. This `loadid` method relies on third-party cookies, which are impacted heavily by these cookie changes. Like the first-party implications above, cross-domain identity resolution strategies become more important.

To date, efforts have been made to rely less on browser cookies, given their uncertain nature. Version 3 of the Lytics JavaScript tag was built to be more secure and flexible\\_\\_, allowing Lytics to respond to these types of changes more efficiently. At the end of the day, however, restricting or removing cookies, in general, will affect the way that you, the marketer, use and monitor the web. Focusing on safe, secure, and transparent resolution strategies is at the core of the Lytics platform, and we believe will allow any marketer to overcome these changes in the future.

**Q. What cookies are issued in connection with the Lytics tag?**

By default, Lytics sets a cookie `seerid` that is used to identify a user. This is then surfaced in a users profile as `_uid`. Out of the box, this is what our JavaScript tag uses for web-based identity resolution.

**Q. Are Lytics’ cookies first-party cookies or third-party cookies?**

When issued by the client website domain on which they run, Lytics’ cookies are treated by browsers as first-party cookies. This is the case for all of our clients. In some cases, clients have established separate top-level domains for two or more of their brands. In these cases, many have leveraged an optional identity resolution aid that allows Lytics to store the same identifier as a third-party cookie. This allows for a hands-off approach to resolve identities across domains but in no way impacts the nature of our first-party cookies described above.

#### Stale cookie removal feature

Lytics has enabled a “cookie culling” feature that prevents “stale” (old) cookies from being used as identifiers to stitch the user profile fragments. Given the browser cookie limits mentioned above, this ensures only valid identifiers will be used to build your Lytics user profiles, which helps keep them clean and consolidated.

For example, if a Safari user visits your site once and doesn’t return within two months, Lytics can remove this cookie from their first visit as it has become “stale.” There is no reason to keep this cookie as an identifier because it can’t be used for personalization. Lytics recommends opting for a maximum of 60 days to keep cookies, but this setting can be customized according to your needs. Don't hesitate to contact your Lytics Account Manager if you are interested in enabling this cookie-culling feature.

Once Lytics removes cookies after your specified time frame, not only the “stale” cookies are removed, but any other profile fragments attached to those cookies will be omitted from the stitching process. As a result, any associated data with the old cookies will not be included on user profiles _unless_ that data can be matched to some other identifier (e.g., an email or user ID). However, the data lost from turning on cookie culling can be found again if the feature is turned off or if the time range is shortened so that the cookie associated with the missing data is no longer skipped.

### Cookie changes per browser

The following information has been updated as of January 31, 2020.

Cookies are used for persistent login, preference storage, and tracking across websites. Google, Apple, and other browser providers have deployed functionality that can block the tracking of users across websites. This functionality is promoted as privacy-enhancing by giving a user greater control to prevent website tracking. The technology generally focuses on third-party cookies, but Apple’s technology also focuses on certain first-party cookies.

#### Apple

Apple introduced its Intelligent Tracking Protection (ITP) functionality in 2017 to block the use of cookies deployed on sites not belonging to the party issuing the cookie. You can track Safari ITP changes on Apple’s [WebKit](https://webkit.org/) website. Generally, Safari has set a 7-day expiration period on first-party cookies but a shorter 1-day setting on certain cookies used with link decoration. This means for users that don’t revisit a site within seven days to extend their expiration, the cookie will be deleted, and these users will get new identifiers the next time they visit the site.

#### Firefox

Like Safari, Firefox blocks third-party cookies by default through [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop).

#### Google

In 2019 Google [announced](https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html) it was changing its approach to third-party cookies by not blocking them by default and recommending cookie developers use [SameSite attributes](https://web.dev/samesite-cookies-explained/). Chrome [gives users options](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop\&hl=en) to block the cookies they want to block and to delete cookies after a session (fingerprinting out as well).

In mid-January of 2020, [Google announced](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html?mkt_tok=eyJpIjoiWXpJd016TTRPRGxqWlRkaSIsInQiOiJaSjhCYVhwd3lhaER0R2JNMlQ2eVNkVzRlNTZQbGk4Z3hrTUZKbWdUMmhTNmlVUlFoMjgyRjdYMHJFUERQeW05WHRjeFhCNlBkcW9KSzByb2JTRnI3M2tHWXhVc0lSOGg5aWNQb2pBNzkyM0N3bFJkRFg5UmFLcUJNN0Z3TEZLRSJ9) its intent to phase out support for third-party cookies in Chrome by 2022.
