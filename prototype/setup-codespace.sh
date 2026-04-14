#!/bin/bash
# === Community Agent Citation Prototype — Codespace Setup ===
# Paste this entire script into your Codespace terminal.
# It pulls the code from your repo and starts the dev server.

set -e

echo "📦 Pulling latest code..."
cd /workspaces/communityagent_prototype 2>/dev/null || cd "$(git rev-parse --show-toplevel)"

# Reset to match remote main
git fetch origin main
git reset --hard origin/main

echo "📥 Installing dependencies..."
npm install

echo "🚀 Starting dev server..."
echo ""
echo "============================================"
echo "  After the server starts:"
echo "  1. Go to the PORTS tab at the bottom"
echo "  2. Right-click port 5173"
echo "  3. Set visibility to 'Private to Organization'"
echo "  4. Click the globe icon to open in browser"
echo "  5. Share that URL with your team!"
echo "============================================"
echo ""

npm run dev
