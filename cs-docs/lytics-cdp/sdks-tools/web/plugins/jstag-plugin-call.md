---
title: "call Plugin"
description: "Call a method on the JSTag instance by name"
url: /lytics/jstag-plugin-call
uid: blt43b492131d654691
---

# call Plugin

## call Plugin

Call a method on the JSTag instance by name

## \`call\` plugin

Call a method by name.

| Call |
| --- |
| utility |

### API

#### call(methodName: string, ...rest: any[]): void

##### parameters

-   **methodName** string - The name of the method to invoke
-   **...rest** any\[\] - Variadic arguments. These will be forwarded to the method call.

##### example

```
// Safely call methods against the async wrapper before the tag has loaded!

// Trigger entity load imperatively:
jstag.call('loadEntity');

// The above is equivalent to the below:
jstag.loadEntity();

// Log the seerid
jstag.call('getid', console.log);

// The above is equivalent to the below:
jstag.getid(console.log);
```

#### Mechanism

Call the method of the given name in the context of the jstag singleton and passes the rest of the parameters as arguments.
