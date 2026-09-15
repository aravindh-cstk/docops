---
title: "Working with Web Data"
description: "Lytics provides two ways to onboard data from your website, email marketing, and online advertising. The Lytics JavaScript tag, once installed on your…"
url: /lytics/onboarding-web-data
uid: blt7ebbaa42ca0126da
---

# Working with Web Data

## Working with Web Data

## Onboarding Web Data

Lytics provides two ways to onboard data from your website, email marketing, and online advertising. The Lytics JavaScript tag, once installed on your website, will send user activity data. The Lytics pixel can be embedded in email or ads and configured to send user data back to Lytics on load.

### Lytics JavaScript Tag

The Lytics JavaScript tag sends page views and any custom events you have configured to the default stream (unless configured otherwise). This event data will be translated into user fields in the Lytics schema with predefined or custom mappings. For example, the following request would send a user's email address, first name, and last name to Lytics:

```
jstag.send({
  "email": "gump@hanks-roles.com",
  "first_name": "Forrest",
  "last_name": "Gump"
})
```

### Using a tag manager

Our tag can be installed manually or with a tag manager such as Google Tag Manager. If the Lytics JavaScript tag is installed using a tag manager, the jstag.send command may not be the correct function to call.

### Lytics Image Pixel

When the Lytics JavaScript tag cannot be installed, the Lytics Image Pixel can be used to onboard user data from any source that allows an image to be loaded, such as email and online ads.

#### Building the pixel

There are three key variables that need to be defined when sending information to Lytics using the Lytics Image Pixel. The account ID, the name of the receiving data stream, and the event data in the form of query parameters. For example, this pixel will send the user’s email address and Google Universal Tag Manager (UTM) medium and source variables to the default stream of account 24546133b65465413w9.

```
<img src="https://c.lytics.io/c/12324546133b65465413w9/default?email=woody@hanks-roles.com&&utm_medium=email&utm_source=welcome" />
```

This image tag can be inserted into any HTML document including advertisements and emails and will send the event data on load.

```
<html>
    <head />
    <body>
        <h1>Welcome to Hanks Roles!</h1>
        <p>Thanks for signing up for all the Tom Hanks news you handle.</p>

        <!-- lytics pixel at bottom of email -->
        <img src="https://c.lytics.io/c/12324546133b65465413w9/default?email=woody@hanks-roles.com&utm_medium=email&utm_source=welcome" />
    </body>
</html>
```

### Predefined user fields

Lytics does not have a fixed schema, any key-value pair can be passed using the JavaScript tag or pixel. However, only data which has been mapped to user fields will be available for use in audiences. Out of the box, the Lytics JavaScript Tag and Image Pixel have the ability to onboard the following information when using the default data stream:

#### General Visit Data

| Name | Identifier |
| --- | --- |
| Time of Last Visit | lastvist\_ts |
| Time of First Visit | firstvisit\_ts |
| Total Number of Visits | visitct |
| All Channels Used | channels |
| Web Events By Hour | hourly |
| Web Events By Week | weekly |
| Domains Visited | domains |
| Domains Referred From | refdomain |
| Devices Used | devices |
| Has Accessed Mobile Web | is\_mobile |
| Last Visit Country | visit\_country |
| Last Visit City | visit\_city |
| Last Visit State/Province | visit\_region |
| Timezone | timezone |
| User is a bot | is\_bot |
| User Agent | user\_agent |
| Hashed URLs Visited and Total View Count | hashurls |

#### User Identity

| Name | Identifier |
| --- | --- |
| Web Cookie ID | \_uid |
| User ID | user\_id |
| Full Name | name |
| First Name | first\_name |
| Last Name | last\_name |
| Email | email |
| Title | title |
| Company | company |
| Phone Number | phone |
| Cell Number | cell |
| Age | age |
| Gender | gender |
| City | city |
| State | state |
| Zip | zip |
| Country | country |
| Origin | origin |
| User Status | status |

#### Event Data

Events regarding specific user actions such as a CTA click can also be sent to Lytics. In addition to any of the parameters identified above you can append event specific data to the send request resulting in a few more fields on the profile:

| Name | Identifier |
| --- | --- |
| Total Pageview Count | pageviewct |
| Event First Time Seen | event\_first\_seen |
| Event Last Time Seen | event\_last\_seen |

#### Campaign Data (Google UTM)

Google UTM campaign parameters are automatically pulled in and added to profiles as well. For more details on Google UTM parameters and how to use them visit the [Google help docs](https://ga-dev-tools.appspot.com/campaign-url-builder/). The following fields will be added to the profile when UTM parameters are received:

| Name | Identifier |
| --- | --- |
| UTM Campaign Referred By | utm\_campaign |
| UTM Source Referred By | utm\_source |
| UTM Medium Referred By | utm\_medium |
| UTM Content Referred By | utm\_content |
| Last UTM Campaign Referred By | utm\_campaign\_last |
| Last UTM Source Referred By | utm\_source\_last |
| Last UTM Medium Referred By | utm\_medium\_last |
| Last UTM Contents Referred By | utm\_content\_last |

#### Form Data

In order to collect data entered on a form, you will need to use jstag.send() when a user submits that form. The fields below will be available as user fields if the form name is sent as form\_name, and any fields in the form need to start with formdata\_, for example formdata\_country.

| Name | Identifier |
| --- | --- |
| Last Time Web Form Submitted | last\_form\_submitted\_by\_date |
| Web Forms Submitted | form\_submitted |
| Web Form Data | form\_data |

#### Conversion Data

As a convenience, a standard conversion event has been defined in order to surface some useful conversion related aggregates such as most recent conversion value or the oldest conversion time. When passing conversion events, the event name must be "conversion" for the following mapping to occur:

| Name | Identifier |
| --- | --- |
| Most Recent Conversion Time | cvt\_last\_time |
| Oldest Conversion Time | cvt\_first\_time |
| Most Recent Campaign Attributed to Conversion | cvt\_last\_campaign |
| All Campaigns Converted From | cvt\_campaigns |
| Most Recent Variation Attributed to Conversion | cvt\_last\_variation |
| All Variations Converted From | cvt\_variations |
| Most Recent Currency Used | cvt\_currency |
| Most Recent Conversion Value | cvt\_value |
| Conversion Values By Campaign | cvt\_history |
