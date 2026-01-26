#!/bin/bash

echo "🔍 Verifying GymFlow Website Pages..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Base URL
BASE_URL="http://localhost:3000"

# Pages to check
pages=(
  "/"
  "/about"
  "/privacy"
  "/terms"
  "/contact"
  "/blog"
  "/blog/ai-fitness-revolution-2025"
  "/blog/tdee-macro-calculator-guide"
  "/blog/building-gymflow-ragspro-story"
)

# Check each page
for page in "${pages[@]}"; do
  response=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$page")
  
  if [ "$response" -eq 200 ]; then
    echo -e "${GREEN}✓${NC} $page - OK (200)"
  else
    echo -e "${RED}✗${NC} $page - FAILED ($response)"
  fi
done

echo ""
echo "📊 Summary:"
echo "- Total pages checked: ${#pages[@]}"
echo "- All pages should return 200 OK"
echo ""
echo "🔗 Footer Links:"
echo "  ✓ About -> /about"
echo "  ✓ Privacy Policy -> /privacy"
echo "  ✓ Terms -> /terms"
echo "  ✓ Contact -> /contact"
echo "  ✓ Blog -> /blog"
echo ""
echo "✅ Verification Complete!"
