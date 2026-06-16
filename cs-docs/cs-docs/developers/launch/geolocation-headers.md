---
title: "[Contentstack Launch] - Geolocation Headers in Launch"
description: Geolocation Headers in Launch
url: https://www.contentstack.com/docs/developers/launch/geolocation-headers
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Geolocation Headers in Launch

This page explains the geolocation headers that Contentstack Launch automatically injects into incoming requests, and shows how developers can access them in Edge Functions, Cloud Functions, or backend/API runtimes to implement personalization, analytics, or region-specific logic.

## Geolocation Headers in Launch

Launch automatically includes geolocation headers in every incoming request. You can use these headers in [Edge Functions](/docs/developers/launch/edge-functions), [Cloud Functions](/docs/developers/launch/cloud-functions), or backend APIs to personalize content, analyze traffic, or apply region-specific logic.

## Available Headers

All requests on Launch include the following geolocation headers:

| Location Header Name | Description | Example |
|---|---|---|
| `Visitor-IP-Country` | The 2-letter country code of the IP address | US |
| `Visitor-IP-Region` | The ISO 3166-2 name for the first-level region associated with the IP | Oregon |
| `Visitor-IP-City` | The city name associated with the IP address | The Dalles |

**Note:** Launch’s Edge infrastructure automatically injects these headers. They are available across all [Contentstack regions](/docs/developers/contentstack-regions).

## How to Access Geolocation Headers

Geolocation headers are included in each incoming request and can be accessed like any other HTTP headers using your runtime's API. See the following examples:

### Edge Function Example (JavaScript)

```
// functions/[proxy].edge.js

export default function handler(request, context) {
  const country = request.headers.get('visitor-ip-country');
  const region = request.headers.get('visitor-ip-region');
  const city = request.headers.get('visitor-ip-city');

  const parsedUrl = new URL(request.url);
  if (parsedUrl.pathname === '/appliances') {
    return new Response(JSON.stringify({
      location: `${city}, ${region}, ${country}`,
      timestamp: new Date().toISOString(),
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return fetch(request);
}
```

### Cloud Function Example

```
// functions/hello.js

export default function handler(request, response) {
  const country = request.headers['visitor-ip-country'];
  const region = request.headers['visitor-ip-region'];
  const city = request.headers['visitor-ip-city'];

  response.status(200).json({
    location: `${city}, ${region}, ${country}`,
    method: request.method,
  });
}
```

### Next.js API Route Example

```
// pages/api/geo.js

export default function handler(req, res) {
  const country = req.headers['visitor-ip-country'];
  const region = req.headers['visitor-ip-region'];
  const city = req.headers['visitor-ip-city'];

  res.status(200).json({
    location: `${city}, ${region}, ${country}`,
    timestamp: new Date().toISOString(),
  });
}
```

## Troubleshooting

If a header value appears empty or inaccurate, it may be due to one of the following uncommon scenarios:
- **Privacy tools:** The visitor is using a VPN, proxy, or privacy-focused browser.
- **New IP ranges:** The IP address is recently allocated and not yet listed in global geolocation databases.

## Common questions

### Are geolocation headers included automatically on every request?
Yes. Launch automatically includes geolocation headers in every incoming request.

### Where can I use these headers?
You can use these headers in [Edge Functions](/docs/developers/launch/edge-functions), [Cloud Functions](/docs/developers/launch/cloud-functions), or backend APIs.

### Why are the header values empty or inaccurate?
It may be due to uncommon scenarios such as **Privacy tools:** The visitor is using a VPN, proxy, or privacy-focused browser, or **New IP ranges:** The IP address is recently allocated and not yet listed in global geolocation databases.

### Are these headers available in all Contentstack regions?
Yes. They are available across all [Contentstack regions](/docs/developers/contentstack-regions).

Filename: contentstack-launch-geolocation-headers-in-launch.md