---
title: "Implement TOTP Support for Java Management SDK"
description: "Learn to integrate TOTP-based MFA in Contentstack’s Java SDK. Authenticate users via 2FA token or MFA secret to enhance login security and automation."
url: /developers/sdks/content-management-sdk/java/implement-totp-with-java-management-sdk
uid: blt492114df99d97d9b
---

# Implement TOTP Support for Java Management SDK

## Implement TOTP with Java Management SDK

Time-based One-Time Password (TOTP) is a standard method of two-factor authentication (2FA). It generates short-lived, unique numeric codes based on a shared secret and the current timestamp. These codes are used in addition to a user’s password to verify identity and enhance login security.

Contentstack’s Java Management SDK supports TOTP as part of its multi-factor authentication (MFA) capabilities. Developers can authenticate MFA-enabled users by providing either a 2FA token or an MFA secret that dynamically generates the TOTP token.

By implementing TOTP support in your integration, you:

-   Improve the security of user authentication using time-based verification.
-   Enable support for MFA-enabled accounts directly within applications.
-   Allow automation workflows to generate TOTP tokens programmatically using a stored MFA secret.

The following sections explain how to use the updated login() method in both the Contentstack and User classes.

## Contentstack

The login() method authenticates a user and retrieves an authtoken equired for all subsequent API calls. It supports both standard and MFA login using a 2FA token or a TOTP generated from an MFA secret.

**Note:** Before making API calls, authenticate using the login() method. The authtoken is returned in the response body and must be included in all subsequent calls.

**Returns**

Type LoginDetails

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>emailId (required)</td><td>String</td><td>The email ID of the user</td></tr><tr><td>password (required)</td><td>String</td><td>The password of the Contentstack user</td></tr><tr><td>params (required for MFA/TFA users)</td><td>Map&lt;String, String&gt;</td><td>Map containing the <span class="code">tfaToken</span> or <span class="code">mfaSecret</span></td></tr></tbody></table>



**Parameters for param Map:**

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>tfaToken</td><td>String</td><td>The direct 2FA token for authentication</td></tr><tr><td>mfaSecret</td><td>String</td><td>The MFA secret key to generate TOTP token</td></tr></tbody></table>

**Note:** Provide either tfaToken or mfaSecret in the params map, not both.

**Initialization**

Before performing any authentication, initialize the Contentstack object using your authtoken. This setup is required once and reused across all login methods.

```
import com.contentstack.cms.Contentstack;
import com.contentstack.cms.models.LoginDetails;
import java.util.HashMap;
import java.util.Map;

// Initialize Contentstack
Contentstack contentstack = new Contentstack.Builder().setAuthtoken(AUTHTOKEN).build();
```

**Authentication**

You can authenticate users using one of the following methods based on your account’s security setup. Each method returns a response object containing the authtoken.

-   **Email and Password:**

    ```
    Response<LoginDetails> response = contentstack.login("emailId", "password");
    ```

-   **2FA Token Authentication:**

    ```
    Map<String, String> params = new HashMap<>();
    params.put("tfaToken", "123456");
    Response<LoginDetails> response = contentstack.login("emailId", "password", params);
    ```

-   **MFA Secret (TOTP) Authentication:**

    ```
    Map<String, String> params = new HashMap<>();
    params.put("mfaSecret", "YOUR_SECRET");
    Response<LoginDetails> response = contentstack.login("emailId", "password", params);
    ```

    **Note:** The mfaSecret is not sent in the request body. It is used internally by the SDK to generate a TOTP, which is then passed as the token during login.


**Handling the Response**

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

The login() method authenticates a Contentstack user and returns an authtoken for user-specific operations. It supports standard login and MFA using a 2FA token or TOTP.

**Returns:**

Type Call

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>emailId (required)</td><td>String</td><td>The email id of the user</td></tr><tr><td>password (required)</td><td>String</td><td>The password of the Contentstack user</td></tr><tr><td>params (required for MFA/TFA users)</td><td>Map&lt;String, String&gt;</td><td>Map containing the <span class="code">tfaToken</span> or <span class="code">mfaSecret</span></td></tr></tbody></table>



**Parameters for param Map:**

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">tfaToken</span></td><td>String</td><td>The direct 2FA token for authentication</td></tr><tr><td><span class="code">mfaSecret</span></td><td>String</td><td>The MFA secret key to generate TOTP token</td></tr></tbody></table>

**Note:** Provide either tfaToken or mfaSecret in the params map, not both.

**Initialization**

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

**Authentication**

-   **Email and Password:**

    ```
    Call<LoginDetails> response = user.login("emailID", "password");
    ```

-   **2FA Token Authentication:**

    ```
    Map<String, String> params = new HashMap<>();
    params.put("tfaToken", "123456");
    Call<LoginDetails> response = user.login("emailID", "password", params);
    ```

-   **MFA Secret (TOTP) Authentication:**

    ```
    Map<String, String> params = new HashMap<>();
    params.put("mfaSecret", "YOUR_SECRET");
    Call<LoginDetails> response = user.login("emailID", "password", params);
    ```


**Handling the Response**

Validate the authentication result and handle both success and failure scenarios.

```
Response<LoginDetails> result = response.execute();
if (result.isSuccessful()) {
    System.out.println("Login successful: " + result.body());
} else {
    System.out.println("Login failed: " + result.errorBody().string());
}
```
