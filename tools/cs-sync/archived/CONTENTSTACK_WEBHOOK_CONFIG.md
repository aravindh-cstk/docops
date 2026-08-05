# Contentstack Webhook Configuration Guide

## Prerequisites
- GitHub Personal Access Token: `GITHUB_WEBHOOK_TOKEN` (already added to GitHub Secrets)
- Access to Contentstack Production stacks (as admin)
- Both stacks need webhooks configured:
  - **API Docs**: blt8fb40ae1e60d06b9
  - **CS Docs**: blt2d43f51baca745a8

---

## Configure API Docs Stack Webhooks

### 1. Go to API Docs Production Stack

**URL:** `https://app.contentstack.com/#!/stack/blt8fb40ae1e60d06b9/settings/webhooks`

Or navigate:
1. **Stack** → Select **API Docs** (blt8fb40ae1e60d06b9)
2. **Settings** (gear icon) → **Webhooks**

---

### 2. Create Webhook: Entry Published

**Click "Add Webhook"**

Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `API Docs Entry Published` |
| **URL** | `https://api.github.com/repos/aravindh-cstk/docops/dispatches` |
| **HTTP Method** | `POST` |
| **Events** | Entry > Publish |
| **Environments** | Production |

**Headers:**
```
Authorization: token [YOUR_GITHUB_WEBHOOK_TOKEN]
Content-Type: application/json
X-Webhook: contentstack-api-docs-publish
```

**Request Body:**
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

**Save** the webhook

---

### 3. Create Webhook: Entry Unpublished

**Click "Add Webhook"** again

| Field | Value |
|-------|-------|
| **Name** | `API Docs Entry Unpublished` |
| **URL** | `https://api.github.com/repos/aravindh-cstk/docops/dispatches` |
| **HTTP Method** | `POST` |
| **Events** | Entry > Unpublish |
| **Environments** | Production |

**Headers:**
```
Authorization: token [YOUR_GITHUB_WEBHOOK_TOKEN]
Content-Type: application/json
X-Webhook: contentstack-api-docs-unpublish
```

**Request Body:**
```json
{
  "event_type": "contentstack-unpublish",
  "client_payload": {
    "event": "entry.unpublish",
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

**Save** the webhook

---

## Configure CS Docs Stack Webhooks

### 1. Go to CS Docs Production Stack

**URL:** `https://app.contentstack.com/#!/stack/blt2d43f51baca745a8/settings/webhooks`

Or navigate:
1. **Stack** → Select **CS Docs** (blt2d43f51baca745a8)
2. **Settings** (gear icon) → **Webhooks**

---

### 2. Create Webhook: Entry Published

**Click "Add Webhook"**

| Field | Value |
|-------|-------|
| **Name** | `CS Docs Entry Published` |
| **URL** | `https://api.github.com/repos/aravindh-cstk/docops/dispatches` |
| **HTTP Method** | `POST` |
| **Events** | Entry > Publish |
| **Environments** | Production |

**Headers:**
```
Authorization: token [YOUR_GITHUB_WEBHOOK_TOKEN]
Content-Type: application/json
X-Webhook: contentstack-csdocs-publish
```

**Request Body:**
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

**Save** the webhook

---

### 3. Create Webhook: Entry Unpublished

**Click "Add Webhook"** again

| Field | Value |
|-------|-------|
| **Name** | `CS Docs Entry Unpublished` |
| **URL** | `https://api.github.com/repos/aravindh-cstk/docops/dispatches` |
| **HTTP Method** | `POST` |
| **Events** | Entry > Unpublish |
| **Environments** | Production |

**Headers:**
```
Authorization: token [YOUR_GITHUB_WEBHOOK_TOKEN]
Content-Type: application/json
X-Webhook: contentstack-csdocs-unpublish
```

**Request Body:**
```json
{
  "event_type": "contentstack-unpublish",
  "client_payload": {
    "event": "entry.unpublish",
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

**Save** the webhook

---

## Verify Webhooks Created

After creating all 4 webhooks (2 per stack):

### API Docs Stack Webhooks
- ✅ API Docs Entry Published
- ✅ API Docs Entry Unpublished

### CS Docs Stack Webhooks
- ✅ CS Docs Entry Published
- ✅ CS Docs Entry Unpublished

**Check:** Go back to Webhooks page, you should see all 4 listed with green checkmarks (enabled)

---

## Test Webhooks

### Manual Test from Contentstack

1. Go to **Webhooks** tab
2. Find **"API Docs Entry Published"**
3. Click the **three-dot menu** → **"Try"** (or **"Test"**)
4. Select an API Docs entry to test with
5. Click **"Send"**
6. You should see:
   - **Status: 202** (Accepted)
   - Response shows GitHub dispatch event received

### Check GitHub Actions

1. Go to **GitHub → Actions → Real-time Entry Sync (Webhook)**
2. Look for a recent run (should appear within seconds)
3. Click on the run to see logs
4. **Expected logs:**
   ```
   ✅ Real-time sync completed
   Entry synced to Sandbox CMS and Git markdown immediately
   ```

### Verify Sync Results

After test webhook triggers:

1. **Check Sandbox CMS:**
   - Go to Sandbox API Docs stack
   - Search for the test entry
   - Verify it was updated

2. **Check Git:**
   - Go to GitHub → api-docs/ folder
   - Find the markdown file for that entry
   - Verify it was created/updated

---

## Troubleshooting Webhooks

### Webhook Showing Red "X" (Failed)

1. Click the webhook → **"View Logs"**
2. Check error message:
   - **401/403:** Token invalid or missing permissions
   - **404:** Wrong repository URL
   - **500:** GitHub server error (try again)

3. **Fix:**
   - Verify token is valid: `gh auth status`
   - Check token has correct scopes: `gh api user/authentication_token`
   - Update webhook with correct token

### Webhook Never Fires

1. Verify webhook is **enabled** (toggle switch on)
2. Verify **environment is "Production"**
3. Verify **event is "Entry > Publish"** (not draft)
4. Try manual "Try" button first
5. Check Contentstack webhook logs for errors

### GitHub Actions Never Triggers

1. Go to **GitHub Actions → Real-time Entry Sync**
2. If no runs appear:
   - Webhook might not have fired (check Contentstack logs)
   - Token might be invalid (check GitHub token)
   - Repository URL might be wrong

---

## Success Checklist

- [ ] 4 webhooks created (2 stacks × 2 events each)
- [ ] All webhooks showing green/enabled
- [ ] Manual "Try" webhook succeeds with 202 status
- [ ] GitHub Actions "Real-time Entry Sync" triggered
- [ ] Sandbox CMS received synced entry
- [ ] Git markdown file created/updated
- [ ] All working without errors

---

## Next Steps

Once webhooks are verified:

1. ✅ Webhooks configured
2. ✅ Test passed
3. ✅ Real-time sync working
4. ✅ Ready for writers to use!

Write manual for writers once all tests pass.
