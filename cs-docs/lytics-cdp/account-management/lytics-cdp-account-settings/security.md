---
title: "Security"
description: "Configuration options for account security and authentication."
url: /lytics/security
---

# Security

## Security

Configuration options for account security and authentication.

The following configuration options are available within the account settings [Security](https://app.lytics.com/vault/settings/security) section.

## Logon session days

|  |
| --- |
| ![9270350-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am690187318ccac809/19cc657052003c7ce159fcc2/9270350-image.png) |
| The number of days a user session should be valid before forcing a re-authentication. |

## Logon session timeout minutes

|  |
| --- |
| ![ea219f7-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am21d9d71ed69945d5/4e13bbb0a6aa35de9b5631db/ea219f7-image.png) |
| The number of minutes between activities that should elapse before forcing a re-authentication. |

## Enforce password complexity

| 
 |
| --- |
| ![a12e8bb-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am76bfa9c2534ef3f9/1f996aca736dbad5f396aeb6/a12e8bb-image.png) |
| Ensure all users leverage passwords with a high level of complexity. Minimum 8 characters At least 1 uppercase letter (A-Z) At least 1 lowercase letter (a-z) At least 1 digit (0-9) At least 1 special character from: !@#$&\* |

## Enforce password history

|  |
| --- |
| ![d839781-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am985060fd59ce11fd/0853fc93ee703f8e5e20b3f7/d839781-image.png) |
| Prevent the re-use of a previous password for each user. |

## Enforce password bad count

|  |
| --- |
| ![5b9ce48-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2fc834af288f2554/678ba20cb33e34afded10e5e/5b9ce48-image.png) |
| Lock the user's account if there are too many concurrent failed password/login attempts. |

## Password max age

|  |
| --- |
| ![4bf0d35-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb610295273d40ffd/f66a699c87358e8be121efd5/4bf0d35-image.png) |
| The maximum age in days that a password can be before it must be changed. A value of 0 disables the max-age restriction and will allow a password to persist for the life of the account. |

## Enforce two-factor auth.

|  |
| --- |
| ![26530d7-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am366361565040fa9e/3ca52a26a821d90e0918aff7/26530d7-image.png) |
| Ensure all account users leverage two-factor authentication. |

Two-factor authentication is a technique that helps to make your account more secure. It does this by adding a second step to your login process.

Single-factor authentication uses your email address and password to authenticate your Lytics session.

The second factor comes from the Authy app using an Authy SoftToken, a secret token that changes every 20 seconds. Entering a correct token provides an extra level of verification.

### What is an Authy SoftToken

An Authy SoftToken is a secret token that is broadcast to the Authy app every 20 seconds. This unique token serves as a second factor by which Lytics can authenticate your session. Authy is available to download for free as a desktop and mobile app: [Download Authy](https://authy.com/download/).

### Using Two-Factor Authentication

The only difference between two-factor authentication and single-factor authentication is an extra step during login. After providing your password, you will then be asked for your Authy SoftToken.

Using Two-Factor Authentication also requires every user to provide their phone number. Logging in with two-factor authentication for the first time will walk a user through this workflow.

![Image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6044efc6915deba4/294cd2d014e02764b2c1d67a/65d2ddc-Screenshot_2023-07-13_at_2.08.15_PM.png)
