---
title: "[Java Management] - Implement TOTP Support for Java Management SDK"
description: Implement TOTP with Java Management SDK
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/java/implement-totp-with-java-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java-developers
version: unknown
last_updated: 2026-03-25
---

# [Java Management] - Implement TOTP Support for Java Management SDK

This page explains how to implement Time-based One-Time Password (TOTP) support using Contentstack’s Java Management SDK for multi-factor authentication (MFA). It is intended for developers integrating authentication flows for MFA-enabled accounts and should be used when you need to authenticate using either a 2FA token or an MFA secret that generates a TOTP token.

## Implement TOTP with Java Management SDK

Time-based One-Time Password (TOTP) is a standard method of two-factor authentication (2FA). It generates short-lived, unique numeric codes based on a shared secret and the current timestamp. These codes are used in addition to a user’s password to verify identity and enhance login security.

Contentstack’s Java Management SDK supports TOTP as part of its multi-factor authentication (MFA) capabilities. Developers can authenticate MFA-enabled users by providing either a 2FA token or an MFA secret that dynamically generates the TOTP token.

By implementing TOTP support in your integration, you:
- Improve the security of user authentication using time-based verification.
- Enable support for MFA-enabled accounts directly within applications.
- Allow automation workflows to generate TOTP tokens programmatically using a stored MFA secret.

The following sections explain how to use the updated `login()` method in both the `Contentstack` and `User` classes.

## Contentstack

The `login()` method authenticates a user and retrieves an `authtoken` equired for all subsequent API calls. It supports both standard and MFA login using a 2FA token or a TOTP generated from an MFA secret.

**Note:** Before making API calls, authenticate using the `login()` method. The `authtoken` is returned in the response body and must be included in all subsequent calls.

**Returns**

Type `LoginDetails`

### Parameters

| Name | Type | Description |
|---|---|---|
| emailId (required) | String | The email ID of the user |
| password (required) | String | The password of the Contentstack user |
| params (required for MFA/TFA users) | Map<String, String> | Map containing the `tfaToken` or `mfaSecret` |

**Parameters for param Map:**

| Name | Type | Description |
|---|---|---|
| tfaToken | String | The direct 2FA token for authentication |
| mfaSecret | String | The MFA secret key to generate TOTP token |

**Note:** Provide either `tfaToken` or `mfaSecret` in the params map, not both.

### Initialization

Before performing any authentication, initialize the Contentstack object using your authtoken. This setup is required once and reused across all login methods.

```
import com.contentstack.cms.Contentstack;
import com.contentstack.cms.models.LoginDetails;
import java.util.HashMap;
import java.util.Map;

// Initialize Contentstack
Contentstack contentstack = new Contentstack.Builder().setAuthtoken(AUTHTOKEN).build();
```

### Authentication

You can authenticate users using one of the following methods based on your account’s security setup. Each method returns a response object containing the authtoken.
- **Email and Password:**
```
Response response = contentstack.login("emailId", "password");
```
- **2FA Token Authentication:**
```
Map params = new HashMap<>();
params.put("tfaToken", "123456");
Response response = contentstack.login("emailId", "password", params);
```
- **MFA Secret (TOTP) Authentication:**
```
Map params = new HashMap<>();
params.put("mfaSecret", "YOUR_SECRET");
Response response = contentstack.login("emailId", "password", params);
```

**Note: **The `mfaSecret` is not sent in the request body. It is used internally by the SDK to generate a TOTP, which is then passed as the token during login.

### Handling the Response

Validate the authentication result and handle both success and failure scenarios.

```
if (response.isSuccessful() && response.body() != null) {
    LoginDetails loginDetails = response.body();
    System.out.println("Login successful");
} else {
    System.out.println("Login failed: " + response.errorBody().string());
}
```

## User

The `login()` method authenticates a Contentstack user and returns an authtoken for user-specific operations. It supports standard login and MFA using a 2FA token or TOTP.

**Returns:**

Type `Call`

### Parameters

| Name | Type | Description |
|---|---|---|
| emailId (required) | String | The email id of the user |
| password (required) | String | The password of the Contentstack user |
| params (required for MFA/TFA users) | Map<String, String> | Map containing the `tfaToken` or `mfaSecret` |

**Parameters for param Map:**

| Name | Type | Description |
|---|---|---|
| `tfaToken` | String | The direct 2FA token for authentication |
| `mfaSecret` | String | The MFA secret key to generate TOTP token |

**Note:** Provide either `tfaToken` or `mfaSecret` in the params map, not both.

### Initialization

Before performing any authentication, initialize the Contentstack object using your authtoken. This setup is required once and reused across all login methods.

You can authenticate users using one of the following methods based on your account’s security setup. Each method returns a response object containing the authtoken.

```
import com.contentstack.cms.Contentstack;
import com.contentstack.cms.user.User;
import java.util.HashMap;
import java.util.Map;
// Initialize
Contentstack contentstack = new Contentstack.Builder().setAuthtoken(AUTHTOKEN).build();
User user = contentstack.user();
```

### Authentication

- **Email and Password:**
```
Call response = user.login("emailID", "password");
```
- **2FA Token Authentication:**
```
Map params = new HashMap<>();
params.put("tfaToken", "123456");
Call response = user.login("emailID", "password", params);
```
- **MFA Secret (TOTP) Authentication:**
```
Map params = new HashMap<>();
params.put("mfaSecret", "YOUR_SECRET");
Call response = user.login("emailID", "password", params);
```

### Handling the Response

Validate the authentication result and handle both success and failure scenarios.

```
Response result = response.execute();
if (result.isSuccessful()) {
    System.out.println("Login successful: " + result.body());
} else {
    System.out.println("Login failed: " + result.errorBody().string());
}
```

## Common questions

### Do I need to pass both `tfaToken` and `mfaSecret` in the params map?
No. Provide either `tfaToken` or `mfaSecret` in the params map, not both.

### Is `mfaSecret` sent to the server during login?
No. The `mfaSecret` is not sent in the request body. It is used internally by the SDK to generate a TOTP, which is then passed as the token during login.

### Which classes support the updated `login()` method for MFA/TOTP?
The updated `login()` method is available in both the `Contentstack` and `User` classes.

### What do I get back after a successful login?
A response object containing the authtoken.