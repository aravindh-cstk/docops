---
title: "Stack Object"
description: "The `stack` object provides methods to access, manage, and retrieve stack-level data and related entities such as content types, entries, assets, and workflows."
url: "https://www.contentstack.com/appsdk-core-objects-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Stack Object

The `stack` object provides methods to access, manage, and retrieve stack-level data and related entities such as content types, entries, assets, and workflows.

**Example:**

```
const stack = sdk.stack;
```

The following section explains the different methods available in the `stack` object.

#### getData()

The `getData()` method retrieves the data of the current stack.

```
const stackData = stack.getData();
console.log('Stack name:', stackData.name);
console.log('Stack UID:', stackData.uid);
```

#### getAllStacks(orgUid?, params?)

The `getAllStacks()` method retrieves all stacks in the current organization.

```
const allStacks = await stack.getAllStacks();
const orgStacks = await stack.getAllStacks('org_uid');
```

#### getContentType(uid, params?)

The `getContentType()` method retrieves data of a single content type.

```
const contentType = await stack.getContentType('content_type_uid');
```

#### getContentTypes(query?, params?)

The `getContentTypes()` method retrieves data of all content types in the stack.

```
const contentTypes = await stack.getContentTypes();
const filteredTypes = await stack.getContentTypes({ title: { $regex: 'blog' } });
```

#### getEntries(contentType, params?)

The `getEntries()` method retrieves entries of a specific content type.

```
const entries = await stack.getEntries('content_type_uid');
const publishedEntries = await stack.getEntries('content_type_uid', { publish: true });
```

#### getAssets(query?, params?)

The `getAssets()` method retrieves assets from the stack.

```
const assets = await stack.getAssets();
const images = await stack.getAssets({ content_type: 'image/*' });
```

#### getGlobalField(uid, params?)

The `getGlobalField()` method retrieves details of a specific global field.

```
const globalField = await stack.getGlobalField('global_field_uid');
```

#### getGlobalFields(query?, params?)

The `getGlobalFields()` method retrieves details of all global fields in the stack.

```
const globalFields = await stack.getGlobalFields();
```

#### getReleases(query?, params?)

The `getReleases()` method retrieves details of all releases in the stack.

```
const releases = await stack.getReleases();
```

#### getPublishes(query?, params?)

The `getPublishes()` method retrieves details of the publish queue in the stack.

```
const publishQueue = await stack.getPublishes();
```

#### getEnvironment(name, params?)

The `getEnvironment()` method retrieves details of a specific environment.

```
const environment = await stack.getEnvironment('production');
```

#### getEnvironments(query?, params?)

The `getEnvironments()` method retrieves details of all environments in the stack.

```
const environments = await stack.getEnvironments();
```

#### getLocale()

The `getLocale()` method retrieves details of a specific locale.

```
const locale = await stack.getLocale('en-us');
```

#### getLocales()

The `getLocales()` method retrieves details of all locales in the stack.

```
const locales = await stack.getLocales();
```

#### getWorkflow(uid, params?)

The `getWorkflow()` method retrieves details of a specific workflow.

```
const workflow = await stack.getWorkflow('workflow_uid');
```

#### getWorkflows(query?, params?)

The `getWorkflows()` method retrieves all workflows in the stack.

```
const workflows = await stack.getWorkflows();
```

#### getAllBranches()

The `getAllBranches()` method retrieves all branches in the current stack.

```
const branches = stack.getAllBranches();
```

#### getCurrentBranch()

The `getCurrentBranch()` method retrieves details of the current branch.

```
const currentBranch = stack.getCurrentBranch();
```

#### getVariantById(variant_uid)

The `getVariantById()` method retrieves details of a specific variant group.

```
const variant = await stack.getVariantById('variant_uid');
```

#### getManagementTokens()

The `getManagementTokens()` method retrieves details of all management tokens for the stack.

```
const tokens = await stack.getManagementTokens();
```

#### search(queries, apiKey?)

The `search` method retrieves search results based on the user query.

```
const searchResults = await stack.search({
  type: 'entries',
  query: { content_type: 'blog_post' },
  limit: 10
});
```
