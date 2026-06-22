---
title: "Get latest execution log of a webhook"
description: GET /webhooks/{execution_uid}/logs
url: developers/apis/content-management-api/requests/get-latest-execution-log-of-webhooks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-10-31
---

# Get latest execution log of a webhook


**Method:** `GET`  
**Endpoint:** `/webhooks/{execution_uid}/logs`

Get latest execution log of a webhook call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the call.  
To configure the permissions for your application via OAuth, please include the cm.webhook:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | Enter the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| execution_uid | cs4eb0cd75-8a6e-416a-b367-07158d698d41 | Enter the execution unique ID of the webhook of which you want to retrieve the execution log. Execute the [Get executions of a webhook](https://www.contentstack |

**Response (200):**

```json
{
    "webhook": {
        "uid": "cs******75-8a6e-416a-b367-07********41",
        "channel": [
            "assets.update",
            "assets.bltaa9509abac6e272b.update"
        ],
        "created_at": "2024-07-26T09:24:27.347Z",
        "event_data": {
            "module": "asset",
            "api_key": "blt**************b7",
            "data": {
                "asset": {
                    "uid": "blt**************2b",
                    "created_at": "2024-05-15T09:38:59.976Z",
                    "updated_at": "2024-07-26T09:24:26.783Z",
                    "created_by": "blt**************35",
                    "updated_by": "blt**************de",
                    "content_type": "image/jpeg",
                    "file_size": "251123",
                    "tags": [],
                    "filename": "Wild-West-Warrior_Large.jpeg",
                    "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                    "ACL": {},
                    "is_dir": false,
                    "parent_uid": "blt**************7e",
                    "_version": 2,
                    "title": "Wild-West-Warrior_Large.jpeg"
                },
                "branch": {
                    "uid": "main",
                    "source": "",
                    "alias": []
                }
            },
            "event": "update"
        },
        "event_headers": {
            "Content-Type": "application/json",
            "User-Agent": "Contentstack",
            "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
            "Authorization": null,
            "X-Contentstack-Request-Signature": "v1=I1Lc/sQbu+tOUSt3Uqnjwi1DhJ9LtG3I3aEaecuRbkb2M3/p8aFwXAw+t1aLYqWkeEfpf4GdIz+e2ImIyIZY8PzwkL54iBn17EhEFM6+B6rK8Pdx6iPD9iV+tv3ZcE9C+JmDQvQQWiC3lAsi9rxmdBF2JqTK4G1Wo3MBI8FQZkyuMy5rfZAzp2sJA60A/8WAxy75pejvH9aiBiF0wKu/UiJ2mhhj64aPe6Luu/BVSzkkUx4TFo3RhOnsbMJREk2Rd2Gbv8nzeHk+umZ05NpuSz82nDTT1KV71XHb1GaZOsIFCYrVOKIBD6LL7hUsfcJfC2DQIvG0NPN/6lCD0774WQ=="
        },
        "org_uid": "blt**************d5",
        "request_details": {
            "_id": "csdded59f4-f5d1-4f5a-9c7b-9a82bce457fb",
            "retry_number": 3,
            "request": {
                "method": "POST",
                "followAllRedirects": true,
                "uri": "https://www.test.com",
                "body": {
                    "triggered_at": "2024-07-26T09:27:03.088Z",
                    "module": "asset",
                    "api_key": "bltbf684bd9d22b48b7",
                    "data": {
                        "asset": {
                            "uid": "blt**************2b",
                            "created_at": "2024-05-15T09:38:59.976Z",
                            "updated_at": "2024-07-26T09:24:26.783Z",
                            "created_by": "blte5ba115d2d3ad735",
                            "updated_by": "bltddd27e9dcd3831de",
                            "content_type": "image/jpeg",
                            "file_size": "251123",
                            "tags": [],
                            "filename": "Wild-West-Warrior_Large.jpeg",
                            "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                            "ACL": {},
                            "is_dir": false,
                            "parent_uid": "blt**************7e",
                            "_version": 2,
                            "title": "Wild-West-Warrior_Large.jpeg"
                        },
                        "branch": {
                            "uid": "main",
                            "source": "",
                            "alias": []
                        }
                    },
                    "event": "update"
                },
                "headers": {
                    "Content-Type": "application/json",
                    "User-Agent": "Contentstack",
                    "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                    "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                    "Authorization": null
                },
                "json": true,
                "resolveWithFullResponse": true,
                "timeout": 30000
            },
            "response": {
                "message": "Request failed with status code 403",
                "statusCode": 403,
                "code": "ERR_BAD_REQUEST",
                "body": "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"></script></body></html>",
                "headers": {
                    "date": "Fri, 26 Jul 2024 09:27:03 GMT",
                    "content-type": "text/html; charset=UTF-8",
                    "transfer-encoding": "chunked",
                    "connection": "close",
                    "accept-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "critical-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "cross-origin-embedder-policy": "require-corp",
                    "cross-origin-opener-policy": "same-origin",
                    "cross-origin-resource-policy": "same-origin",
                    "origin-agent-cluster": "?1",
                    "permissions-policy": "accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()",
                    "referrer-policy": "same-origin",
                    "x-content-options": "nosniff",
                    "x-frame-options": "SAMEORIGIN",
                    "cf-mitigated": "challenge",
                    "cf-chl-out": "FABmu/NVxTXsS+jHAJthwYvD+kqsweMKDyLzMsacsCHOUJcnpQ84Kqkc5p4d1qJhSlnWtrV7HsarN/IFetQG+oDQSV8umzPhk0dLI2TI/90OJmZivukMCrQO+nh1SvUJua92Owj14s1i1qUZATV9ag==$NtcUIiSpEDo33XcBEXTh2Q==",
                    "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
                    "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
                    "set-cookie": [
                        "__cf_bm=Qquv.Qrv0U09Sdlblp2a8e3Og6Wz9kOcSrauhzKX8AQ-1721986023-1.0.1.1-Iq3rQXN3kDbJNyawpvdUG5h2a03JXv041myJKjTq3HRJ664jvbuj2wAlFRN6qo4o3Efb7O.nS5ynpJRJfhZA_Q; path=/; expires=Fri, 26-Jul-24 09:57:03 GMT; domain=.squadhelp.com; HttpOnly; Secure; SameSite=None"
                    ],
                    "vary": "Accept-Encoding",
                    "server": "cloudflare",
                    "cf-ray": "8a935a05ace2ba21-SEA"
                },
                "request": {
                    "uri": {
                        "href": "https://www.test.com"
                    },
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "User-Agent": "Contentstack",
                        "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                        "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                        "Authorization": null
                    }
                }
            },
            "created_at": "2024-07-26T09:27:03.317Z"
        },
        "retry_count": 3,
        "status": 403,
        "updated_at": "2024-07-26T09:27:03.317Z",
        "webhooks": [
            {
                "name": "Dummy Webhook",
                "destinations": [
                    {
                        "target_url": "https://www.test.com",
                        "http_basic_auth": "",
                        "http_basic_password": "",
                        "request_query_parameters": "",
                        "authentication_type": "Basic",
                        "custom_header": [
                            {
                                "header_name": "",
                                "value": ""
                            }
                        ]
                    }
                ],
                "channels": [
                    "assets.update"
                ],
                "retry_policy": "manual",
                "branches": [
                    "main"
                ],
                "notifiers": [
                    "sample@gmail.com"
                ],
                "disabled": false,
                "applikation_id": "blt**************b7",
                "org_uid": "blt**************d5",
                "updated_by": "blt**************de",
                "created_by": "blt**************de",
                "app_user_object_uid": "system",
                "concise_payload": false,
                "uid": "cs******c9-c336-4da1-8aad-fd********0e",
                "created_at": "2024-07-26T09:04:06.984Z",
                "updated_at": "2024-07-26T09:04:06.984Z",
                "__v": 0
            }
        ],
        "projectUid": "blt**************b7",
        "destination": {}
    }
}
```
