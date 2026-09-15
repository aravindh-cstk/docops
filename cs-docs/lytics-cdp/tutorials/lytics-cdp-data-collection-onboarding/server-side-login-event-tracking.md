---
title: "Server-side login Event Tracking"
description: "Capturing authenticated login details for profile stitching"
url: /lytics/server-side-login-event-tracking
uid: blta38f0f2c0eccbe31
---

# Server-side login Event Tracking

## Server-side login Event Tracking

Capturing authenticated login details for profile stitching

### Overview

While the Lytics JavaScript tag provides a convenient jstag.send() method for tracking events client-side, there are scenarios where sending login events server-side is preferable. Server-side tracking offers better security, reliability, and control over sensitive authentication data.

This guide demonstrates how to send login events from your server after user authentication using the Lytics Data API.

### Why Track Login Events Server-Side?

Server-side login event tracking provides several advantages:

-   **Security**: Authentication credentials and user data never pass through the client browser
-   **Reliability**: Events are sent directly from your server, eliminating issues with ad blockers or JavaScript errors
-   **Control**: You have complete control over what data is sent and when
-   **Privacy**: Sensitive PII can be handled more securely on your server

### Prerequisites

Before implementing server-side login tracking, ensure you have:

-   Your Lytics API token (found in your Lytics account settings)
-   Access to your authentication flow server-side code
-   The ability to read cookies from the user's browser session

### Implementation

#### Step 1: Capture Required Identifiers

When a user successfully authenticates, you'll need to capture two key identifiers:

1.  **Email Address**: The user's email from your authentication system
2.  **Seerid (\\\_uid)**: The Lytics user identifier from the seerid cookie, captured as the \_uid on the user profile.

The Lytics JavaScript tag automatically sets the seerid cookie when a user visits your site. You'll need to read this cookie value server-side.

#### Step 2: Send the Login Event

Make a POST request to the Lytics Data API endpoint:

POST https://api.lytics.io/collect/json/\\{STREAM\_NAME}?access\_token=\\{API\_TOKEN}

**Example Request:**

```
bash
curl -X POST \
  'https://api.lytics.io/collect/json/default?access_token=YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "_e": "login",
    "email": "user@example.com",
    "_uid": "12345-67890-abcdef",
    "timestamp": "2025-10-01T10:30:00Z"
  }'
```

#### Step 3: Code Examples

**Python Request:**

```
import requests
from datetime import datetime

def send_login_event(email, seerid, api_token):
    url = f'https://api.lytics.io/collect/json/default'

    payload = {
        '_e': 'login',
        'email': email,
        '_uid': seerid,
        'timestamp': datetime.utcnow().isoformat() + 'Z'
    }

    params = {
        'access_token': api_token
    }

    response = requests.post(url, json=payload, params=params)
    return response.status_code == 200
```

**Node.js example**

```
const axios = require('axios');

async function sendLoginEvent(email, seerid, apiToken) {
  const url = 'https://api.lytics.io/collect/json/default';

  const payload = {
    _e: 'login',
    email: email,
    _uid: seerid,
    timestamp: new Date().toISOString()
  };

  try {
    await axios.post(url, payload, {
      params: { access_token: apiToken }
    });
    return true;
  } catch (error) {
    console.error('Failed to send login event:', error);
    return false;
  }
}
```



### Required Fields

| **Field** | **Description** | **Required** |
| --- | --- | --- |
| \_e | Event name (use "login" for login events) | Yes |
| email | User's email address | Yes |
| \_uid | Lytics user identifier from the seerid cookie | Yes |
| timestamp | ISO 8601 formatted timestamp | Recommended |

### Additional Considerations

#### Cookie Reading

Ensure your server-side code can access cookies from the incoming request. The cookie name is typically seerid, and will be visible on profiles as the \_uid or \_uids attribute.

#### Error Handling

Implement appropriate error handling for failed API requests. Consider implementing retry logic for transient failures.

#### Data Stream

The example above uses the default stream. You may want to use a different stream name to track server side events separately from the tagged web traffic. Mappings would need to be added if a different data stream is being used.

#### Additional Event Data

You can include additional properties in your login event payload as needed, such as:

-   Login method (SSO, password, social, etc.)
-   User agent
-   IP address
-   Geographic location

### Testing

Before deploying to production, test your implementation thoroughly:

1.  Verify the seerid cookie is being read correctly
2.  Confirm events appear in your Lytics account
3.  Check that user profiles are being properly merged using the email and \\\_uid identifiers

### Reference

For complete API documentation, visit:
