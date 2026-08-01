#!/bin/bash

PROD_STACK="blt8fb40ae1e60d06b9"
PROD_TOKEN="cs9c8e6ecd1de6a45980524488"
SANDBOX_STACK="bltf92796d1cef4d3d4"
SANDBOX_TOKEN="cs6829cf3da41d62cdad480661"

echo "🚀 Syncing Production → Sandbox"
echo "Production: $PROD_STACK"
echo "Sandbox: $SANDBOX_STACK"
echo ""

CONTENT_TYPES=(
  "api_requests_cma"
  "api_requests_cda"
  "api_requests_graphql"
  "api_requests_apps"
  "api_requests_analytics"
  "api_requests_administration"
  "api_requests_administration"
)

total_imported=0

for ct in "${CONTENT_TYPES[@]}"; do
  echo "📦 $ct"

  # Fetch from production (first 10)
  entries=$(curl -s "https://cdn.contentstack.io/v3/content_types/$ct/entries?access_token=$PROD_TOKEN&environment=production&limit=10" -H "api_key: $PROD_STACK" | jq '.entries // []')

  count=$(echo "$entries" | jq 'length')
  if [ "$count" -eq 0 ]; then
    echo "   No entries found"
    continue
  fi

  echo "   Found $count entries"

  # Import to sandbox
  echo "$entries" | jq -c '.[]' | while read entry; do
    # Clean entry data - remove system fields
    clean_entry=$(echo "$entry" | jq 'del(._version, .created_at, .updated_at, .created_by, .updated_by, ._in_progress, .ACL, ._metadata, .published_at, .publish_details)')

    created=$(curl -s -X POST "https://api.contentstack.io/v3/content_types/$ct/entries" \
      -H "api_key: $SANDBOX_STACK" \
      -H "authorization: $SANDBOX_TOKEN" \
      -H "Content-Type: application/json" \
      -d "{\"entry\": $clean_entry}")

    uid=$(echo "$created" | jq -r '.entry.uid // empty')
    if [ -n "$uid" ]; then
      echo "   ✓ Created: $uid"
      total_imported=$((total_imported + 1))
    else
      error=$(echo "$created" | jq -r '.error_message // "Unknown error"')
      echo "   ✗ Failed: $error"
    fi
  done
done

echo ""
echo "✅ Complete: $total_imported entries imported"
