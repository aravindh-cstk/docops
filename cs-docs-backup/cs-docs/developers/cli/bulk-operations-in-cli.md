---
title: Contentstack Command-line Interface (CLI) - Bulk Operations in CLI
description: Bulk publish and unpublish entries and assets using the Contentstack CLI Bulk Operations plugin, including modes, cross-publish setup, configuration, troubleshooting, and best practices.
url: https://www.contentstack.com/docs/headless-cms/bulk-operations-in-cli
product: Contentstack
doc_type: cli-guide
audience:
  - developers
  - devops
version: latest
last_updated: 2026-03-25
---

# Contentstack Command-line Interface (CLI) - Bulk Operations in CLI

This page explains how to use the Contentstack CLI Bulk Operations plugin to publish and unpublish entries and assets in bulk, including required flags, operation modes, cross-publish setup, config files, troubleshooting, and best practices. It is intended for developers and operators who manage content at scale and need reliable, repeatable CLI workflows.

## Overview
The CLI Bulk Operations plugin provides commands to publish and unpublish entries and assets in bulk. It manages API rate limits, retries failed requests, and supports processing large content sets.

## What Problem Does It Solve?
Managing content at scale introduces operational challenges that are difficult to handle manually, such as:
- Coordinating publish and unpublish actions across multiple environments and locales
- Processing large volumes of entries or assets in a single operation
- Operating within API rate limits without triggering request failures
- Recovering from partial failures caused by network or system interruptions
- Tracking the status and results of large publishing operations

The Bulk Operations plugin addresses these challenges by providing a structured, automated mechanism to execute and monitor bulk content actions.

## What You’ll Learn
By the end of this guide, you can:
- Choose the appropriate operation mode (bulk or single) based on scale and reliability
- Apply filters, locales, environments, and branches to target specific content sets
- Use configuration files to automate and repeat complex bulk workflows
- Run bulk publish and unpublish operations for entries and assets with the Contentstack CLI
- Use generated logs to retry or revert failed operations
- Perform bulk actions safely while respecting API rate limits and system constraints

## Installation

### Prerequisites
Before you begin, make sure you have the following:
- [Node.js version 22 or above](https://nodejs.org/en/download/)
- [Contentstack CLI installed](./install-the-cli.md)
- [Contentstack account](https://www.contentstack.com/login) with [Management Token](../create-tokens/about-management-tokens.md) or [Stack API Key](../set-up-stack/view-stack-details.md)

### Install Plugin

```
# Install Contentstack CLI
npm install -g @contentstack/cli

# Install bulk operations plugin
csdx plugins:install @contentstack/cli-bulk-operations

# Verify installation
csdx cm:stacks:bulk-entries --help
```

## Quick Start

### Basic Publish Operation

```
# Publish all entries of a content type
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --environments production \
  --locales en-us \
  --stack-api-key blt*******

# Publish assets
csdx cm:stacks:bulk-assets \
  --operation publish \
  --environments production \
  --locales en-us \
  --stack-api-key blt*******
```

### Basic Unpublish Operation

```
# Unpublish entries
csdx cm:stacks:bulk-entries \
  --operation unpublish \
  --content-types blog_post \
  --environments staging \
  --locales en-us \
  --stack-api-key blt*******
```

## Commands

### Bulk Entries
Perform bulk operations on entries with advanced filtering and publishing options.

#### Syntax

```
csdx cm:stacks:bulk-entries [OPTIONS]
```

#### Required Options

| Flag | Description | Example |
|---|---|---|
| `--operation` | Specifies whether to `publish` or `unpublish` content. | `--operation publish` |
| `--environments` | Specifies one or more environments where the entries or assets should be published. Separate multiple environments with spaces. | `--environments prod staging` |
| `--locales` | Specifies one or more locale codes for which the entries or assets should be published. Separate multiple locales with spaces. | `--locales en-us fr-fr` |
| `-k, --stack-api-key` | API key of the source stack. You must use either the `--stack-api-key` flag or the `--alias` flag. | `-k blt*********` |
| `-a, --alias` | Uses the name of a saved Management Token to authenticate the command. The command can only access the branches allowed for that token. This option can be used as an alternative to `--stack-api-key`. | `-a my-token` |

**Tip:**
- Use `--stack-api-key` when running commands manually and you want full access to the stack.
- Use `--alias` when you want to run commands with a predefined Management Token, which limits access to specific branches and permissions.

#### Entry-Specific Options

| Flag | Description | Default |
|---|---|---|
| `--content-types` | Specifies the content type UIDs to include in the operation. If not provided, the operation applies to all content types in the stack. | - |
| `--filter` | Filter entries by status: `draft`, `modified`, `unpublished`, `non-localized` | - |
| `--include-variants` | Includes entry variants (alternate versions of a base entry) in the bulk operation. By default, only base entries are processed. | `false` |
| `--api-version` | Specifies the Content Management API version used for publishing. Use version `3.2` when publishing entries with nested references, otherwise, use the default version. | `3.2` |

**Filter values:**
- `draft` — Entries that have never been published
- `modified` — Entries updated since the last publish
- `unpublished` — Entries that were published earlier but are currently unpublished
- `non-localized` — Entries missing content for the specified locale

#### General Options

| Flag | Description | Default |
|---|---|---|
| `--publish-mode` | Publish mode: bulk (uses Bulk Publish API) or single (individual API calls) | `bulk` |
| `--branch` | The name of the branch where you want to perform the bulk publish operation. If you don't mention the branch name, then by default the content from main branch will be published. | `main` |
| `--source-env` | Specifies the environment from which content should be copied when publishing to another environment. Use this option for cross-environment publishing. | - |
| `--source-alias` | Alias name for source environment delivery token (required for cross-publish). Add delivery token using: `csdx auth:tokens:add` | - |
| `-y, --yes` | Skips interactive confirmation prompts and runs the command immediately using the provided options. Useful for automation and scripts. | `false` |
| `-c, --config` | Specifies the path to a JSON configuration file that defines the options for the command. Use this file instead of passing multiple CLI flags for a single run. | - |
| `--retry-failed` | Retries only the entries or assets that failed in a previous bulk operation, using the log file generated during that run. | - |
| `--revert` | Reverts a previous bulk publish operation using its log files, undoing the entries or assets published in that run. | - |
| `--bulk-operation-file` | Folder path to store operation logs. | `bulk-operation` |

#### Examples
**1. Publish all content types to production**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --environments production \
  --locales en-us \
  -k blt*******
```
**2. Publish specific content types to multiple environments**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post article page \
  --environments dev staging production \
  --locales en-us es-es \
  -k blt*******
```
**3. Publish only draft entries**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --filter draft \
  --environments production \
  --locales en-us \
  -k blt*******
```
**4. Cross-publish from production to staging**

First, add the delivery token for the source environment (one-time setup):

```
# Add delivery token for production environment
csdx auth:tokens:add \
  -a prod-delivery \
  --delivery-token prod-delivery-token \
  --api-key blt******* \
  --environment production \
  --type delivery
```
Then use it for cross-publish:

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --source-env production \
  --source-alias prod-delivery \
  --environments staging \
  --locales en-us \
  -k blt*******
```
**5. Publish using single mode for fine control**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --publish-mode single \
  --environments production \
  --locales en-us \
  -k blt*******
```
**6. Unpublish entries**

```
csdx cm:stacks:bulk-entries \
  --operation unpublish \
  --content-types blog_post \
  --environments staging \
  --locales en-us \
  -k blt*******
```
**7. Retry failed operations**

```
# Retry failed entries from a previous operation
csdx cm:stacks:bulk-entries \
  --retry-failed ./bulk-operation
```
**8. Revert a publish operation**

```
# Revert (unpublish) previously published entries
csdx cm:stacks:bulk-entries \
  --revert ./bulk-operation
```
**9. Publish with entry variants**

```
# Publish entries including their variants
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --include-variants \
  --environments production \
  --locales en-us \
  -k blt*******
```

### Bulk Assets
Use this command to publish or unpublish assets in bulk, with the option to filter by folder.

#### Syntax

```
csdx cm:stacks:bulk-assets [OPTIONS]
```

#### Required Options
Same as bulk entries, see [Required Options ](./bulk-operations-in-cli.md#bulk-entries).

#### Asset-Specific Options

| Flag | Description | Example |
|---|---|---|
| `--folder-uid` | The UID of the Assets folder that contains the assets you want to publish. Default: `cs_root` | `--folder-uid cs_root` |

#### Examples
**1. Publish all assets**

```
csdx cm:stacks:bulk-assets \
  --operation publish \
  --environments production \
  --locales en-us \
  -k blt*******
```
**2. Publish assets from specific folder**

```
csdx cm:stacks:bulk-assets \
  --operation publish \
  --folder-uid cs_product_images \
  --environments production \
  --locales en-us \
  -k blt*******
```
**3. Cross-publish assets from production to staging**

```
csdx cm:stacks:bulk-assets \
  --operation publish \
  --source-env production \
  --source-alias prod-delivery \
  --environments staging \
  --locales en-us \
  -k blt*******
```
**Note:** See Example 4 in the [Bulk Entries](./bulk-operations-in-cli.md#bulk-entries) section to set up the delivery token alias.

**4. Unpublish assets**

```
csdx cm:stacks:bulk-assets \
  --operation unpublish \
  --environments staging \
  --locales en-us \
  -k blt*******
```
**5. Retry failed asset operations**

```
# Retry failed assets from a previous operation
csdx cm:stacks:bulk-assets \
  --retry-failed ./bulk-operation
```
**6. Revert an asset publish operation**

```
# Revert (unpublish) previously published assets
csdx cm:stacks:bulk-assets \
  --revert ./bulk-operation
```

## Operation Modes

### Bulk Mode (Default)
Uses Contentstack's native Bulk Publish APIs.

**Best For:**
- Publishing more than 100 entries/assets
- Multi-environment deployments

**Example:**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --environments production \
  --locales en-us \
  -k blt*******
```

### Single Mode
Makes individual API calls for each item with intelligent rate limiting.

**Best For:**
- Small batches (less than 50 items)
- Operations requiring detailed error tracking
- Testing and debugging

**Example:**

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --environments production \
  --locales en-us \
  --publish-mode single \
  -k blt*******
```

## Cross-Publish Setup
Cross-publish allows you to promote content from one environment to another (e.g., staging → production). To use cross-publish, you need to set up a delivery token for the source environment.

### Why Delivery Tokens?
Cross-publish uses the **Delivery API** to fetch only published content from the source environment. This ensures you're promoting exactly what's live, not draft content.

### Setting Up Delivery Tokens
**Step 1: Create a Delivery Token in Contentstack**
- Navigate to **Settings → Tokens → Delivery Tokens** in your Contentstack stack.
- Click **+Delivery Token.**
- Name your token (e.g., "Production Delivery Token").
- Select the source environment (e.g., "production").
- Click **Generate Token** and copy the generated delivery token.

**Step 2: Add Token to CLI**

```
csdx auth:tokens:add \
  -a  \
  --delivery-token  \
  --api-key  \
  --environment  \
  --type delivery
```
**Example:**

```
# Add production delivery token
csdx auth:tokens:add \
  -a prod-delivery \
  --delivery-token csaf3444***** \
  --api-key blt******** \
  --environment production \
  --type delivery

# Add staging delivery token
csdx auth:tokens:add \
  -a staging-delivery \
  --delivery-token csaf3444***** \
  --api-key blt******** \
  --environment staging \
  --type delivery
```
**Step 3: Use in Cross-Publish Operations**

```
# Promote from staging to production
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post \
  --source-env staging \
  --source-alias achu3444***** \
  --environments production \
  --locales en-us \
  -k blt********
```

### Managing Delivery Tokens

```
# List all stored tokens (including delivery tokens)
csdx auth:tokens

# Remove a delivery token
csdx auth:tokens:remove -a staging-delivery
```

## Use Cases

### Use Case 1: Content Unpublish
**Scenario**: A critical bug is discovered in 500 blog posts that need immediate unpublishing from production.

**Solution**:

```
csdx cm:stacks:bulk-entries \
  --operation unpublish \
  --content-types blog_post \
  --environments production \
  --locales en-us,es-es,fr-fr \
  --yes \
  -k blt********
```
**Result**: All 500 blog posts unpublished across 3 locales in ~2 minutes (bulk mode).

### Use Case 2: Scheduled Content Release
**Scenario**: Publish 200 product entries to production every Monday at 9 AM.

**Solution**: Create a cron job with a config file

```
# config.json
{
  "operation": "publish",
  "contentTypes": ["product"],
  "environments": ["production"],
  "locales": ["en-us"],
  "filter": "modified",
  "publishMode": "bulk"
}

# Cron command
0 9 * * 1 csdx cm:stacks:bulk-entries -c /path/to/config.json -k $STACK_API_KEY --yes
```

### Use Case 3: Cross-Environment Promotion
**Scenario**: Promote all content published in staging to production.

**Setup** (one-time):

```
# Add delivery token for staging environment
csdx auth:tokens:add \
  -a staging-delivery \
  --delivery-token blt_staging_token \
  --api-key blt******** \
  --environment staging \
  --type delivery
```
**Solution**:

```
# Promote entries
csdx cm:stacks:bulk-entries \
  --operation publish \
  --source-env staging \
  --source-alias staging-delivery \
  --environments production \
  --locales en-us \
  -k blt********

# Promote assets
csdx cm:stacks:bulk-assets \
  --operation publish \
  --source-env staging \
  --source-alias staging-delivery \
  --environments production \
  --locales en-us \
  -k blt********
```
**Result**: All staging content promoted to production with verification.

**How it works**: The `--source-alias` uses a stored delivery token to fetch only published content from the source environment. This ensures you're promoting exactly what's live in staging.

### Use Case 4: Selective Publishing with Filters
**Scenario**: Publish only draft entries that have never been published.

**Solution**:

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types article,blog_post \
  --filter draft \
  --environments production \
  --locales en-us \
  -k blt********
```
**Result**: Only unpublished entries are sent to production, saving API calls.

### Use Case 5: Multi-Locale Product Launch
**Scenario**: Launch 50 new product entries across 10 locales and 3 environments simultaneously.

**Solution**:

```
csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types product \
  --environments dev staging production \
  --locales en-us es-es fr-fr de-de it-it pt-br ja-jp zh-cn ko-kr ar-ae \
  --publish-mode bulk \
  -k blt********
```
**Result**: 50 products across 10 locales and three environments result in 1,500 publish operations. completed in about 5 minutes via batching.

### Use Case 6: Retry Failed Operations
**Scenario**: A network issue caused 20 out of 200 entries to fail publishing.

**Solution**:

```
# Retry only failed entries
csdx cm:stacks:bulk-entries \
  --retry-failed bulk-operation/failed-20250112-143022.json \
  -k blt********
```
**Result**: Only the 20 failed entries are retried, successful ones are skipped.

### Use Case 7: Asset Organization by Folder
**Scenario**: Publish only marketing assets in a specific folder.

**Solution**:

```
csdx cm:stacks:bulk-assets \
  --operation publish \
  --folder-uid cs_marketing_2026 \
  --environments production \
  --locales en-us \
  -k blt********
```
**Result**: Only assets in the `cs_marketing_2026` folder are published.

### Use Case 8: Rollback Published Content
**Scenario**: After publishing 300 blog entries to production, you discover that some entries contain incorrect information and need to be unpublished immediately.

**Solution**:

```
# Step 1: Revert the publish operation using the operation log
csdx cm:stacks:bulk-entries \
  --revert ./bulk-operation
```
**How it works**:
- The `--revert` flag reads the operation log from the `bulk-operation` folder
- It automatically unpublishes all entries that were published in the last operation
- Restores entries to their previous version before publishing
- Only works with publish operations (cannot revert unpublish operations)

**Result**: All 300 blog entries are unpublished and reverted to their previous version, effectively rolling back the entire operation.

**Important Notes**:
- The `bulk-operation` folder stores detailed logs of the last operation only
- Each new operation overwrites the previous logs
- To preserve logs for audit purposes, copy the folder before running a new operation:

```
cp -r bulk-operation bulk-operation-backup-$(date +%Y%m%d-%H%M%S)
```

### Use Case 9: Retry Failed Operations After Network Issues
**Scenario**: While publishing 500 product entries to production, a temporary network issue caused 75 entries to fail. You want to retry only the failed entries without re-processing the successful ones.

**Solution**:

**Step 1: **Check the operation summary to identify failures. The CLI automatically logs failed operations

**Step 2:** Retry only the failed entries

```
csdx cm:stacks:bulk-entries \
  --retry-failed ./bulk-operation
```
**How it works**:
- The `--retry-failed` flag reads the failed operation logs from the `bulk-operation` folder
- It identifies all entries/assets that failed in the last operation
- Re-attempts the operation only for failed items
- Successful entries are skipped automatically

**Result**: The 75 failed entries are retried and successfully published, while the 425 successful entries are untouched.

**Best Practices**:
- **Wait before retrying**: If the failure was due to rate limiting or network issues, retry after a few minutes
- **Check error logs**: Review the error messages in the operation logs to understand the root cause
- **Fix underlying issues**: If failures are due to invalid data, fix the content and retry again
- **Monitor retry attempts**: The CLI tracks retry counts and will stop after max retries **(default: 5)**

**Common Retry Scenarios**:
- Network timeouts or connection issues
- Temporary API rate limit errors (429)
- Server errors (5xx responses)
- Transient infrastructure issues

**Non-retryable Scenarios** (require manual intervention):
- Invalid content type UIDs (404)
- Missing required fields in entries
- Permission errors (403)
- Invalid API credentials (401)

### Use Case 10: Automated Retry with Custom Configuration
**Scenario**: You have a CI/CD pipeline that publishes content, and you want to automatically retry failures with custom retry logic.

**Solution**:

```
# config.json
{
  "operation": "publish",
  "contentTypes": ["product", "article"],
  "environments": ["production"],
  "locales": ["en-us", "es-es"],
  "publishMode": "bulk",
  "maxRetries": 3,
  "retryDelay": 5000,
  "rateLimit": {
    "requestsPerSecond": 10,
    "maxConcurrent": 3
  }
}

# Initial publish attempt
csdx cm:stacks:bulk-entries -c config.json -k blt******** --yes

# If failures occur, automatically retry after 30 seconds
sleep 30
csdx cm:stacks:bulk-entries --retry-failed ./bulk-operation --yes
```
**Configuration Options**:
- `maxRetries`: Maximum retry attempts per item (default: 5)
- `retryDelay`: Delay in milliseconds between retries (default: 1000)
- `rateLimit.requestsPerSecond`: API request rate limit (default: 15)
- `rateLimit.maxConcurrent`: Maximum concurrent operations (default: 5)

**Result**: Failed operations are automatically retried with controlled rate limiting. This approach helps handle temporary failures more reliably..

### Use Case 11: Safe Multi-Stage Deployment with Rollback
**Scenario**: Deploy content to staging for testing, and if approved, promote to production. If issues are found in production, quickly rollback.

**Solution**:

```
# Step 1: Publish to staging

csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post,article \
  --environments staging \
  --locales en-us \
  -k blt********

# Backup the operation logs

cp -r bulk-operation bulk-operation-staging-$(date +%Y%m%d-%H%M%S)

# Step 2: After testing, promote to production

csdx cm:stacks:bulk-entries \
  --operation publish \
  --content-types blog_post article \
  --environments production \
  --locales en-us \
  -k blt********

# Backup production operation logs

cp -r bulk-operation bulk-operation-production-$(date +%Y%m%d-%H%M%S)

# Step 3: If issues found, rollback production

csdx cm:stacks:bulk-entries \
  --revert ./bulk-operation-production-YYYYMMDD-HHMMSS
```
**Result**: Content is safely deployed with the ability to quickly rollback production while preserving staging state.

## Configuration

### Using Config Files
Configuration files allows you to reuse and automate complex bulk operations without repeating CLI flags.

**Use config files when:**
- You run the same bulk operation repeatedly
- You automate publishing via cron or CI
- You need fine-grained control over rate limits and retries

**Avoid config files when:**
- You are running a one-time operation
- Your command has only a few flags

```
csdx cm:stacks:bulk-entries -c my-config.json -k blt********
```
**Example Config File:**

```
{
  "operation": "publish",
  "contentTypes": ["blog_post", "article"],
  "environments": ["production", "staging"],
  "locales": ["en-us", "es-es"],
  "filter": "draft",
  "publishMode": "bulk",
  "branch": "main",
  "apiVersion": "3.2",
  "rateLimit": {
    "requestsPerSecond": 15,
    "maxConcurrent": 5
  },
  "maxRetries": 3,
  "maxPolls": 300
}
```

## Troubleshooting
This section helps you diagnose and recover from common bulk operation failures.

### Problem: 429 Rate Limit Errors
**Solution**: The adaptive rate limiter should prevent this, but if it occurs:
- Reduce `requestsPerSecond` in config
- Reduce `maxConcurrent` in config
- Use `--publish-mode single` for better control

### Problem: Operations Timing Out
**Solution**:
- Check batch sizes - reduce if too large
- Increase `maxPolls` in config (default: 300)
- Check network connectivity

### Problem: Failed Items Not Retrying
**Solution**:
- Check `maxRetries` config (default: 5)
- Review error logs for non-retryable errors
- Manually retry using `--retry-failed`

### Problem: Memory Issues with Large Operations
**Solution**:
- Process content types separately
- Use filtering to reduce item count
- Increase Node.js heap size if you encounter memory errors while running bulk operations,**macOS/Linux**
```
export NODE_OPTIONS=--max-old-space-size=4096
```
- **Windows (PowerShell)**
```
$env:NODE_OPTIONS="--max-old-space-size=4096"
```

### Problem: Invalid Configuration
**Error**: `Invalid configuration: errors`

**Solution**: Validate your config file or flags:
- Ensure required flags are present
- Check locale/environment codes are valid
- Verify content type UIDs exist

### Problem: Cross-Publish Requires --source-alias
**Error**: `Cross-publish requires --source-alias flag with a delivery token`

**Solution**:
- Create a delivery token in Contentstack (**Settings** → **Tokens** → **Delivery Tokens**)
- Add it to CLI using:

```
csdx auth:tokens:add \
  -a  \
  --delivery-token  \
  --api-key  \
  --environment  \
  --type delivery
```
- Use the alias in your command with `--source-alias <alias-name>`

### Problem: Source Alias Not Found
**Error**: `No token found for alias 'staging-delivery'`

**Solution**:
- List your stored tokens: `csdx auth:tokens`
- Add the missing delivery token (see above)
- Verify the alias name matches exactly

### Problem: Source Alias Invalid Type
**Error**: `Alias 'my-token' is not a delivery token (type: management)`

**Solution**:

You're using a management token alias instead of a delivery token. Cross-publish requires a delivery token:
- Add a delivery token with `--type delivery` flag
- Use the delivery token alias with `--source-alias`

## Best Practices
**1. Test in Lower Environments First**

Always test bulk operations in dev/staging before production:

```
# Test in dev first
csdx cm:stacks:bulk-entries --operation publish --environments dev …

# Then staging
csdx cm:stacks:bulk-entries --operation publish --environments staging …

# Finally production
csdx cm:stacks:bulk-entries --operation publish --environments production …
```
**2. Use Config Files for Complex Operations**

For operations with many flags, use config files for repeatability and version control.

**3. Monitor Rate Limiter Logs**

Pay attention to rate limiter messages to understand system behavior.

**4. Start with Bulk Mode**

Use bulk mode for large-scale or multi-environment operations, and single mode only for small batches requiring detailed debugging. Using single mode for large batches can significantly increase execution time, trigger API rate limits, and cause partial failures that are harder to recover.

**5. Keep Log Files**

Save log files for auditing and potential rollback:

```
cp -r bulk-operation bulk-operation-backup-$(date +%Y%m%d)
```
**6. Use Filters to Reduce Load**

Apply filters to publish only necessary content:

```
--filter draft  # Only unpublished entries
--filter modified  # Only entries modified since last publish
```
**7. Batch Similar Operations**

Group operations by content type, environment, or locale for better performance.

## Common questions

### How do I choose between bulk mode and single mode?
Use bulk mode for large-scale or multi-environment operations, and single mode for small batches requiring detailed debugging.

### What do `--retry-failed` and `--revert` do?
`--retry-failed` retries only the entries or assets that failed in a previous bulk operation using the generated logs, and `--revert` reverts a previous bulk publish operation using its log files.

### When do I need `--source-env` and `--source-alias`?
Use them for cross-environment publishing (cross-publish), where `--source-alias` must reference a stored delivery token for the source environment.

### Where are operation logs stored by default?
Operation logs are stored in the `bulk-operation` folder by default (see `--bulk-operation-file`).

bulk-operations-in-cli.md