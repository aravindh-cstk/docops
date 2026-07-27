# Real-Time Sync Webhook Setup Guide

## Overview

Contentstack webhooks trigger **immediate synchronization** when entries are published or unpublished. This ensures Sandbox CMS and Git markdown stay in sync in real-time, without waiting for the 2 AM UTC safety check.

## Webhook Flow

```
Entry Published/Unpublished in Prod CMS
    ↓
[Webhook] POST to webhook receiver
    ↓
sync-on-publish_25July26.js
    ↓
Fetch entry from Production
    ↓
Update Sandbox CMS + Git markdown
```

## Setup Steps

### 1. Create Webhook Endpoint

The webhook receiver script (`sync-on-publish_25July26.js`) needs to be accessible via HTTP POST. Two options:

#### Option A: GitHub Actions (Recommended)
Create a separate workflow that's triggered by repository dispatch event.

**File:** `.github/workflows/sync-on-publish.yml`

```yaml
name: Real-time Entry Sync (Webhook)

on:
  repository_dispatch:
    types: [contentstack-publish, contentstack-unpublish]

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        working-directory: ./tools/cs-sync
        run: npm ci

      - name: Sync Published Entry
        working-directory: ./tools/cs-sync
        run: node sync-on-publish_25July26.js '${{ toJSON(github.event.client_payload) }}'
        env:
          PROD_APIDOCS_STACK_API_KEY: ${{ secrets.PROD_APIDOCS_STACK_API_KEY }}
          PROD_APIDOCS_STACK_DELIVERY_TOKEN: ${{ secrets.PROD_APIDOCS_STACK_DELIVERY_TOKEN }}
          APIDOCS_SANDBOX_STACK_API_KEY: ${{ secrets.APIDOCS_SANDBOX_STACK_API_KEY }}
          APIDOCS_SANDBOX_MANAGEMENT_TOKEN: ${{ secrets.APIDOCS_SANDBOX_MANAGEMENT_TOKEN }}
          PROD_CSDOCS_STACK_API_KEY: ${{ secrets.PROD_CSDOCS_STACK_API_KEY }}
          PROD_CSDOCS_STACK_DELIVERY_TOKEN: ${{ secrets.PROD_CSDOCS_STACK_DELIVERY_TOKEN }}
          CSDOCS_SANDBOX_STACK_API_KEY: ${{ secrets.CSDOCS_SANDBOX_STACK_API_KEY }}
          CSDOCS_SANDBOX_MANAGEMENT_TOKEN: ${{ secrets.CSDOCS_SANDBOX_MANAGEMENT_TOKEN }}
```

#### Option B: Custom Webhook Server
Deploy a Node.js server that receives webhooks and triggers the sync script.

(Implementation details for custom server would go here)

---

### 2. Create GitHub Actions Webhook

To make GitHub Actions accept repository_dispatch events, you need a Personal Access Token (PAT).

**Steps:**

1. Create a Personal Access Token:
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token with `repo:status` and `workflow` scopes
   - Copy the token

2. Add as GitHub Secret:
   - Go to Repository → Settings → Secrets and variables → Actions
   - Add secret: `GITHUB_WEBHOOK_TOKEN` = (your PAT)

3. Create webhook endpoint URL:
   ```
   https://api.github.com/repos/aravindh-cstk/docops/dispatches
   ```

---

### 3. Configure Contentstack Webhooks

#### For Production API Docs Stack (blt8fb40ae1e60d06b9)

1. Go to **Stack → Settings → Webhooks**

2. **Create Webhook: Entry Published**
   - **Name:** API Docs Entry Published
   - **URL:** `https://api.github.com/repos/aravindh-cstk/docops/dispatches`
   - **HTTP Method:** POST
   - **Request Headers:**
     ```
     Authorization: token <GITHUB_WEBHOOK_TOKEN>
     Content-Type: application/json
     ```
   - **Request Body:**
     ```json
     {
       "event_type": "contentstack-publish",
       "client_payload": {
         "event": "entry.publish",
         "data": {
           "stack_id": "${{ stack_id }}",
           "content_type_uid": "${{ content_type_uid }}",
           "uid": "${{ uid }}",
           "title": "${{ title }}",
           "url": "${{ fields.url }}"
         }
       }
     }
     ```
   - **Events:** Entry → Publish
   - **Environments:** Production

3. **Create Webhook: Entry Unpublished**
   - Repeat above but change:
     - **Name:** API Docs Entry Unpublished
     - **event_type:** `contentstack-unpublish`
     - **event:** `entry.unpublish`
     - **Events:** Entry → Unpublish

#### For Production CS Docs Stack (blt2d43f51baca745a8)

1. Repeat the same steps for CS Docs stack with:
   - Different stack reference
   - Same GitHub webhook URL
   - Webhook names: "CS Docs Entry Published" and "CS Docs Entry Unpublished"

---

## Request Body Variables

Contentstack webhook variables available:

```
${{ stack_id }}           - Stack API Key
${{ content_type_uid }}   - Content Type UID
${{ uid }}                - Entry UID
${{ title }}              - Entry Title
${{ created_by }}         - Created By User ID
${{ created_at }}         - Creation Timestamp
${{ updated_at }}         - Last Updated Timestamp
${{ fields.* }}           - Individual field values (e.g., ${{ fields.url }})
```

---

## Testing Webhooks

### Manual Test from Contentstack

1. Go to **Webhooks → Select Webhook**
2. Click **"Try"** (or **"Test"** depending on UI version)
3. Select an entry to test with
4. Check GitHub Actions logs for execution

### Check GitHub Actions Logs

1. Go to **Repository → Actions → Real-time Entry Sync (Webhook)**
2. Should see recent run from webhook trigger
3. View logs to verify sync completed

### Verify Sync Results

After webhook triggers:

1. **Check Sandbox CMS:**
   - Go to Sandbox stack
   - Verify entry was created/updated/unpublished

2. **Check Git:**
   - Go to GitHub repository
   - Check `api-docs/` or `cs-docs/` folder
   - Verify markdown file was created/updated

---

## Troubleshooting Webhooks

### Webhook Not Triggering

**Problem:** Contentstack publishes entry, but webhook doesn't fire

**Solutions:**
1. Verify webhook is enabled in Contentstack
2. Check webhook environment is set to "Production"
3. Check webhook event is "Entry → Publish" or "Entry → Unpublish"
4. Go to webhook logs in Contentstack to see failed requests

### GitHub Dispatch Not Working

**Problem:** Webhook sends request but GitHub Actions doesn't trigger

**Solutions:**
1. Verify PAT token is valid and has correct scopes
2. Check webhook sends to correct URL: `https://api.github.com/repos/aravindh-cstk/docops/dispatches`
3. Verify `Authorization: token <TOKEN>` header is present
4. Check GitHub Actions logs for any errors

### Sync Script Fails in GitHub Actions

**Problem:** Webhook triggers GitHub Actions, but sync script fails

**Solutions:**
1. View detailed logs in GitHub Actions
2. Verify all environment variables (stack IDs, tokens) are correct
3. Ensure Contentstack credentials have proper permissions
4. Check entry data format in webhook payload

---

## Disable Webhooks (If Needed)

To temporarily disable real-time sync:

1. Go to **Stack → Settings → Webhooks**
2. Find the webhook
3. Click **Disable** (or toggle off)
4. Content will still sync at 2 AM UTC safety check

---

## Advanced: Custom Webhook Headers

Add additional headers for security/debugging:

```json
{
  "X-Webhook-Secret": "your-secret-key",
  "X-Source": "contentstack",
  "X-Stack": "apidocs"
}
```

Then in your sync script, validate headers:

```javascript
const secretHeader = process.env.WEBHOOK_SECRET;
// Validate incoming request
```

---

## Webhook Retry Policy

Contentstack retries failed webhooks:
- **Initial attempt:** Immediate
- **Retry 1:** 5 minutes later
- **Retry 2:** 15 minutes later
- **Retry 3:** 1 hour later

Failed webhooks visible in Contentstack → Webhook → Logs

---

## Performance Notes

- Webhooks typically execute within **10-30 seconds**
- GitHub Actions adds ~5-10 seconds for setup
- Total sync latency: **~20-40 seconds** from publish to visibility in Sandbox/Git

For time-sensitive workflows, monitor webhook performance in Contentstack logs.

---

## Next Steps

1. ✅ Create `.github/workflows/sync-on-publish.yml`
2. ✅ Generate GitHub Personal Access Token
3. ✅ Add `GITHUB_WEBHOOK_TOKEN` to GitHub Secrets
4. ✅ Configure webhooks in Production API Docs stack
5. ✅ Configure webhooks in Production CS Docs stack
6. ✅ Test webhook with manual entry publish
7. ✅ Verify sync in Sandbox + Git
