---
title: "Organization Limitations"
description: "See the limits that apply across a Contentstack organization, from users, roles, and teams to SSO connections, security settings, webhooks, and audit logs."
url: /administration/organization-limitations
uid: bltaa137e9d17a197b9
---

# Organization Limitations

## Organization Limitations

This page lists the limits that apply across an [organization](/docs/administration/about-organizations) in Contentstack, grouped by the Administration section they belong to. Limits for content inside a product, such as entries and assets in a stack, are listed in that product's documentation.

## Users and Stacks

-   The number of users and stacks your organization can have is set for your organization. To see the current limits, open the **Plan Settings** tab in [Administration](/docs/administration/administration-overview).
-   An invitation to join the organization does not expire. It stays valid until the user accepts it.
-   On the **Users** tab, you can select up to **10** users at a time for a bulk action. Refer to [Bulk Operations on Organization Users](/docs/administration/bulk-operations-on-organization-users).

## Roles

-   A custom role title must be between **1** and **160** characters.
-   A custom role description can have up to **320** characters.
-   The permissions of a custom role can include up to **100** individual components, such as content types, entries, assets, locales, and environments.

Refer to [Create Custom Roles](/docs/administration/create-custom-roles).

## Teams

-   An organization can have up to **500** teams.
-   A team name can have up to **200** characters, and a team description up to **255** characters.

Refer to [Limitations for Teams](/docs/administration/limitations-for-teams).

## Single Sign-On (SSO)

-   An organization can have up to **5** identity provider connections. Contentstack supports SAML 2.0 only. OpenID Connect is not supported.
-   A connection name can have up to **128** characters, and a connection description up to **400** characters.
-   Each connection can hold up to **200** role mappings.
-   When strict mode is on, up to **100** email addresses can be allowed to sign in without SSO.

Refer to [Configure Multiple Identity Providers](/docs/administration/configure-multiple-identity-providers).

## Security

-   You can add up to **30** allowed email domains. Refer to [Security Configuration](/docs/administration/security-configuration).
-   A user can have up to **20** active sessions. Signing in again beyond that ends the oldest session. Refer to [Session Management](/docs/administration/session-management).

## Webhooks

-   The connection rate limit for the organization's webhooks can be set between **2** and **100** connections per second. Refer to [Webhook Configuration](/docs/administration/webhook-configuration).

## Audit Logs

-   You can export up to **5,000** audit log entries at a time. Apply filters to narrow the entries before you export. Refer to [Monitor Organization Activities in Audit Log](/docs/administration/monitor-organization-activities-in-audit-log).

## Administration API

-   The [Get all Organizations](/docs/developers/apis/administration-api/organizations#get-all-organizations) request returns up to **100** organizations.
