---
title: "cookies Plugin"
description: "Read, write, and delete cookies from the JSTag"
url: /lytics/jstag-plugin-cookies
---

# cookies Plugin

## cookies Plugin

Read, write, and delete cookies from the JSTag

## \`cookies\` plugin

Read, write, delete cookies

| Cookies |
| --- |
| namespace cookies |
| cookie utility |

### API

#### getCookie(name: string): string;

Retrieve a cookie by name.

##### parameters

-   **name** string - the cookie name

##### returns

-   string - the cookie value

##### example

```
var cookieValue = jstag.getCookie('some_cookie');
```

#### setCookie(name: string, value: string, seconds?: number): void;

Set a cookie by name.

##### parameters

-   **name** string - the cookie name
-   **value** string - the cookie value

##### example

```
jstag.setCookie('theAnswer', '42');
```

#### deleteCookie(name: string): void;

Delete a cookie by name.

##### parameters

-   **name** string - the cookie name

#### example

```
jstag.deleteCookie('unwantedCookie');
```

#### clearCookies(): void;

Delete cookies config.cookie and config.sesname.

##### example

```
jstag.clearCookies(); // 'seerid' and 'seerses' cookies are deleted
```

#### getCookieValue(): string;

Retrieve the value of the config.cookie cookie,

##### returns

-   string - the value of the config.cookie cookie.

##### example

```
var cookieValue = jstag.getCookieValue();
```

### Mechanism

This plugin works by interacting with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| cookies.read | a cookie is read. | the cookie name |
| cookies.written | a cookie is written. | the cookie name |
| cookies.deleted | a cookie is deleted. | the cookie name |
| cookies.cleared | config.cookie and config.sesname cookies are cleared | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
