---
title: "Working with Anonymous Profiles"
description: "Learn how Lytics identifies anonymous website visitors through a _uid cookie value, what a User Profile looks like before identity resolution, and how anonymous and known profiles merge once a visitor converts."
url: /lytics/anonymous-visitors
---

# Working with Anonymous Profiles

## Working with Anonymous Profiles

## Anonymous Visitors

Lytics considers anonymous visitors to be users identified only by a `_uid`. A `_uid` is a Lytics tracking value assigned to a cookie. Since cookies can be cleared, aren’t shared across browsers or computers, and aren’t strictly associated with an individual, they are unreliable. For these reasons, Lytics considers these visitors to be anonymous.

### The User Profile of an Anonymous Visitor

Anonymous visitors can still have rich behavioral data. Every page they visited, the number of times they visited, the time they visited, and behavior patterns for data science models. A User Profile is nothing more than the set of known User Field values associated with the `_uid` of the Anonymous Visitor.

![user profile anonymous empty](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd6183bd052f9d23c/05132909c2dcedc7cffab3eb/img-0010.png)

### Identifying Anonymous Visitors

Since all information about anonymous visitors relies on the continued use of a cookie, it is in a marketer's best interest to convert these unknown users to known users. Cookies are temporary, but email addresses are not.

Note that when a user converts from anonymous to known, all information we knew about them carries with them. When their `_uid` becomes associated with an email address (or any other By Field), both Profiles (the `_uid` profile and the email address profile) merge through a process called Identity Resolution.
