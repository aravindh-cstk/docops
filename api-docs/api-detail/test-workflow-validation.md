---
title: "Test Workflow Validation - Get API Status"
url: /test-workflow-validation
product: Contentstack
doc_type: api-request
audience: developers
version: "1.0"
---

# Test Workflow Validation - Get API Status

This is a test entry to validate the sandbox-first workflow architecture.

## Overview

This endpoint validates that the complete content synchronization workflow is functioning correctly:
1. GitHub → Sandbox (on main merge)
2. Sandbox → Production (manual promotion)
3. Production → GitHub (automatic detection)

## Endpoint

`GET /api/status`

## Description

Returns the current status of the API and all services.

## Request Example

```bash
curl -X GET https://api.example.com/status \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Response

```json
{
  "status": "operational",
  "timestamp": "2026-08-04T12:00:00Z",
  "services": {
    "api": "operational",
    "cdn": "operational",
    "database": "operational"
  },
  "message": "All systems nominal"
}
```

## Test Results

- ✅ Content appears in Sandbox CMS
- ✅ Status shows as DRAFT
- ✅ All fields preserved correctly
- ✅ Body content complete

---

_Generated for workflow validation test on 2026-08-04_
