---
title: "Using the JavaScript Library"
description: "JavaScript templates ( type: \"js1\" ) automatically have access to a library of helpers for common operations on profiles, segment events, and job/auth…"
url: /lytics/using-the-javascript-library
uid: blt97d81b23cfc7f543
---

# Using the JavaScript Library

## Using the JavaScript Library

## The Lytics JavaScript Helper Library

JavaScript templates (type: "js1") automatically have access to a library of helpers for common operations on profiles, segment events, and job/auth configuration. The helpers are available as top-level globals — no import statement is required.

The entity is passed to your template through the data argument:

```
function template(data) {
  // helpers that read from the entity take `data` explicitly:
  return {
    slug: segSlug(data),
    email_sha256: sha256(get('email', null, data)),
    api_key: authConfGet('api_key', ''),
  };
}
```

The following helpers are available:

-   [get(field, def, obj)](#getfield-def-obj)
-   [getFirstField(field, def, obj)](#getfirstfieldfield-def-obj)
-   [getMap(a, b, def, obj)](#getmapa-b-def-obj)
-   [jobConfGet(key, def)](#jobconfgetkey-def)
-   [authConfGet(key, def)](#authconfgetkey-def)
-   [getOAuth2AccessToken()](#getoauth2accesstoken)
-   [jobConfGetMapByTarget(key, def)](#jobconfgetmapbytargetkey-def)
-   [jobConfGetMapBySource(key, def)](#jobconfgetmapbysourcekey-def)
-   [segEvents(obj)](#segeventsobj)
-   [segSlug(obj)](#segslugobj)
-   [isEnter(obj)](#isenterobj)
-   [isExit(obj)](#isexitobj)
-   [inSeg(id, obj)](#insegid-obj)
-   [segAssociationGet(key, def)](#segassociationgetkey-def)
-   [stream()](#stream)
-   [sha256(value)](#sha256value)
-   [sha1(value)](#sha1value)
-   [isValidSha256(value)](#isvalidsha256value)
-   [isValidSha1(value)](#isvalidsha1value)
-   [unixTimestamp()](#unixtimestamp)
-   [unixTimestampDateTime(dt, tz)](#unixtimestampdatetimedt-tz)
-   [toPhoneE164(phone, region)](#tophonee164phone-region)
-   [profileFieldFromConfig(configField, default, confObj, entObj)](#profilefieldfromconfigconfigfield-default-confobj-entobj)
-   [firstProfileFieldFromConfig(configField, default, confObj, entObj)](#firstprofilefieldfromconfigconfigfield-default-confobj-entobj)
-   [hashedProfileFieldFromConfig(configField, default, confObj, entObj)](#hashedprofilefieldfromconfigconfigfield-default-confobj-entobj)
-   [hmacSha256(message, key)](#hmacsha256message-key)

### get(field, def, obj)

Retrieves the field named field from the entity object obj. If field does not exist, returns def if supplied, otherwise null. The obj argument is required — pass data from your template(data) function: get('email', '', data).

### getFirstField(field, def, obj)

Retrieves the field named field from obj. If the value is an array, returns the first element (or def if the array is empty). If the value is a scalar, it is returned unchanged. If the field is missing, returns def if supplied, otherwise null.

### getMap(a, b, def, obj)

Reads a nested field: returns obj\[a\]\[b\]. If either step is missing or obj\[a\] is not an object, returns def if supplied, otherwise null.

### jobConfGet(key, def)

Retrieves the field named key from the job configuration. If key does not exist, returns def if supplied, otherwise null. The job configuration is read automatically from the ly\_job\_config runtime variable; you do not need to parse it yourself.

### authConfGet(key, def)

Retrieves the field named key from the auth configuration. If key does not exist, returns def if supplied, otherwise null. Reads from the ly\_auth\_config runtime variable.

### getOAuth2AccessToken()

Returns the OAuth 2 access token from the auth configuration (ly\_auth\_config.oauth2\_token.access\_token). Returns an empty string if not present.

### jobConfGetMapByTarget(key, def)

Reads an array of {target, source} mapping objects from the job configuration field named key and returns it as an object keyed by target (values are the corresponding source). Returns def if the field is missing or not an array.

### jobConfGetMapBySource(key, def)

Same as jobConfGetMapByTarget but keyed by source instead of target.

### segEvents(obj)

Returns the array of segment events on obj (i.e., obj.segment\_events). Returns an empty array if missing or if obj is null. Pass data from your template(data) function.

### segSlug(obj)

Returns a single string formed by concatenating the slug field of every segment event on obj. Useful for building slug-suffixed event names (for example, GA4-style audience exports). Returns an empty string if there are no segment events.

### isEnter(obj)

Reports whether any of the segment events on obj is an enter event (event === 'enter').

### isExit(obj)

Reports whether any of the segment events on obj is an exit event (event === 'exit').

### inSeg(id, obj)

Reports whether obj has a segment event whose id or slug matches the supplied id.

### segAssociationGet(key, def)

Retrieves the field named key from the segment-association runtime variable (ly\_segment\_association). Returns def if missing.

### stream()

Returns the name of the event stream that triggered this template render (ly\_event\_stream). Returns an empty string if the variable is unset.

### sha256(value)

Returns the SHA-256 hash of value as a lowercase hex string. Non-string values are coerced to string first.

### sha1(value)

Returns the SHA-1 hash of value as a lowercase hex string. Non-string values are coerced to string first.

### isValidSha256(value)

Reports whether value looks like a valid SHA-256 hex digest (64 lowercase hex characters).

### isValidSha1(value)

Reports whether value looks like a valid SHA-1 hex digest (40 lowercase hex characters).

### unixTimestamp()

Returns the current time in seconds since the Unix epoch.

### unixTimestampDateTime(dt, tz)

Parses dt as a date/time string and returns its Unix timestamp in seconds. RFC 3339 format is preferred; many other common formats are also supported. The tz argument is reserved for future use — pass an empty string.

### toPhoneE164(phone, region)

Normalizes phone to E.164 format using region as the default country code (defaults to "US" if empty). If region-aware normalization fails, falls back to a best-effort numeric strip with a leading +.

### profileFieldFromConfig(configField, default, confObj, entObj)

Looks up the field name stored in the job configuration under configField, then reads that field from the entity. For example, if the job configuration contains {"email\_field": "email"}, then profileFieldFromConfig('email\_field', '', null, data) is equivalent to get('email', '', data). Pass null for confObj to read from ly\_job\_config; pass data for entObj.

### firstProfileFieldFromConfig(configField, default, confObj, entObj)

Same as profileFieldFromConfig but applies getFirstField to the result — returns the first array element if the entity field holds an array.

### hashedProfileFieldFromConfig(configField, default, confObj, entObj)

Same as firstProfileFieldFromConfig but ensures the returned value is SHA-256 hashed. If the value is already a valid SHA-256 hex digest, it is returned unchanged. Otherwise it is lowercased and hashed. This is the canonical pattern for sending hashed user identifiers to advertising platforms (Google Ads, Meta CAPI, TikTok Events, etc.).

### hmacSha256(message, key)

Returns the HMAC-SHA256 digest of message using key, as a lowercase hex string. Available as hmacSHA256 as well (alias). Used for signing webhook payloads to destinations that require request authentication.

## Differences from the Jsonnet Library

A few helpers in the [Jsonnet library](/docs/lytics/using-the-jsonnet-library) are not present in the JavaScript library because plain JavaScript already expresses them concisely. The equivalents:

| Jsonnet helper | JavaScript equivalent |
| --- | --- |
| has(field, obj) | field in obj |
| notNull(val, def) | val ?? def |
| enum(value, options, default) | options.includes(value) ? value : default |
| validatedEnum(field, options, default) | options.includes(jobConfGet(field)) ? jobConfGet(field) : default |
| slugForEvent(ev) | ev.slug |
| idForEvent(ev) | ev.id |
| segEvIsEnter(ev) | ev.event === 'enter' |
| segEvIsExit(ev) | ev.event === 'exit' |

## Putting It Together

A complete JavaScript template that produces a GA4-style audience-export payload using the helpers:

```
function template(data) {
  const slug = segSlug(data);
  const eventName = jobConfGet('event_name', 'enter') + (slug ? '_' + slug : '');
  return {
    ly_template_url: 'https://www.google-analytics.com/mp/collect',
    ly_template_headers: 'Content-Type: application/json',
    ly_template_body: {
      client_id: get('user_id', '', data),
      events: [{
        name: eventName,
        params: {
          email_sha256: hashedProfileFieldFromConfig('email_field', '', null, data),
          enter_ts: unixTimestamp(),
        },
      }],
    },
  };
}
```
