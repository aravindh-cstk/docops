#!/bin/bash
# Lint docs before pushing to remote
# Usage: ./lint-before-push.sh

set -e

echo "🔍 Running docs linter..."
echo ""

cd "$(dirname "$0")/tools/cs-sync"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

# Run linter
npm run lint -- --base origin/main

echo ""
echo "✅ Linting passed! Safe to push."
