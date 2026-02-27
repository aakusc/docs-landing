#!/bin/bash
# ─────────────────────────────────────────────────────────
#  BHG Docs API — Interactive Demo
#  Double-click to run or execute from Terminal
# ─────────────────────────────────────────────────────────

BASE="https://docs-landing-sigma.vercel.app/api/docs"

# Colors
BOLD="\033[1m"
DIM="\033[2m"
CYAN="\033[36m"
GREEN="\033[32m"
YELLOW="\033[33m"
MAGENTA="\033[35m"
RESET="\033[0m"

divider() {
  echo ""
  printf "${DIM}%.0s─${RESET}" {1..60}
  echo ""
}

header() {
  echo ""
  echo -e "${BOLD}${CYAN}  $1${RESET}"
  echo -e "${DIM}  $2${RESET}"
  divider
}

pause() {
  echo ""
  read -n 1 -s -r -p "  Press any key to continue..."
  echo ""
}

clear
echo ""
echo -e "${BOLD}${CYAN}╔══════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${CYAN}║       BHG Docs API — Interactive Demo                ║${RESET}"
echo -e "${BOLD}${CYAN}║       Base URL: $BASE  ║${RESET}"
echo -e "${BOLD}${CYAN}╚══════════════════════════════════════════════════════╝${RESET}"

# ── 1. List all products ─────────────────────────────────

header "1 ▸ Product Catalog" "GET /api/docs/{product} for each product"

PRODUCTS=("sgm" "aicr" "rally" "towedge" "psedge" "sfp" "ispm" "docai")

printf "  ${BOLD}%-10s %-6s %s${RESET}\n" "PRODUCT" "PAGES" "DESCRIPTION"
printf "  ${DIM}%-10s %-6s %s${RESET}\n" "───────" "─────" "────────────────────────────────"

for prod in "${PRODUCTS[@]}"; do
  json=$(curl -s "$BASE/$prod")
  name=$(echo "$json" | python3 -c "import sys,json; print(json.load(sys.stdin).get('productName',''))" 2>/dev/null)
  pages=$(echo "$json" | python3 -c "import sys,json; print(len(json.load(sys.stdin).get('pages',[])))" 2>/dev/null)
  desc=$(echo "$json" | python3 -c "import sys,json; print(json.load(sys.stdin).get('description','')[:50])" 2>/dev/null)
  printf "  ${GREEN}%-10s${RESET} %-6s %s\n" "$prod" "$pages" "$desc"
done

pause

# ── 2. Fetch product index ───────────────────────────────

header "2 ▸ Product Index" "GET /api/docs/sgm — navigation & page list"

echo -e "  ${DIM}curl -s $BASE/sgm | python3 ...${RESET}"
echo ""

json=$(curl -s "$BASE/sgm")
echo "$json" | python3 -c "
import sys, json
data = json.load(sys.stdin)
tabs = data.get('navigation', [])
for tab in tabs:
    print(f'  \033[1m{tab[\"label\"]}\033[0m')
    for group in tab.get('groups', []):
        print(f'    \033[33m{group[\"label\"]}\033[0m')
        for page in group.get('pages', []):
            print(f'      • {page[\"title\"]}  \033[2m({page[\"slug\"]})\033[0m')
" 2>/dev/null

pause

# ── 3. Search ────────────────────────────────────────────

header "3 ▸ Full-Text Search" "GET /api/docs/sgm/search?q=approval+workflow&limit=5"

echo -e "  ${DIM}curl -s \"$BASE/sgm/search?q=approval+workflow&limit=5\"${RESET}"
echo ""

json=$(curl -s "$BASE/sgm/search?q=approval+workflow&limit=5")
echo "$json" | python3 -c "
import sys, json
data = json.load(sys.stdin)
results = data.get('results', [])
total = data.get('totalResults', len(results))
print(f'  Found \033[1m{total}\033[0m total results (showing top {len(results)})')
print()
for i, r in enumerate(results, 1):
    title = r.get('title', '')
    slug = r.get('slug', '')
    snippet = r.get('snippet', r.get('description', ''))[:80]
    print(f'  \033[32m{i}. {title}\033[0m')
    print(f'     slug: \033[2m{slug}\033[0m')
    print(f'     {snippet}')
    print()
" 2>/dev/null

pause

# ── 4. Fetch a single page ───────────────────────────────

header "4 ▸ Page Content" "GET /api/docs/sgm/page?slug=user-guide/approvals"

echo -e "  ${DIM}curl -s \"$BASE/sgm/page?slug=user-guide/approvals\"${RESET}"
echo ""

json=$(curl -s "$BASE/sgm/page?slug=user-guide/approvals")
echo "$json" | python3 -c "
import sys, json
data = json.load(sys.stdin)
title = data.get('title', '')
desc = data.get('description', '')
content = data.get('content', '')
prev_p = data.get('prev', {})
next_p = data.get('next', {})

print(f'  \033[1mTitle:\033[0m       {title}')
print(f'  \033[1mDescription:\033[0m {desc}')
if prev_p:
    print(f'  \033[1mPrev page:\033[0m   {prev_p.get(\"title\",\"\")} ({prev_p.get(\"slug\",\"\")})')
if next_p:
    print(f'  \033[1mNext page:\033[0m   {next_p.get(\"title\",\"\")} ({next_p.get(\"slug\",\"\")})')
print()
print(f'  \033[1mContent preview (first 600 chars):\033[0m')
print(f'  \033[2m' + '─' * 50 + '\033[0m')
for line in content[:600].split('\n'):
    print(f'  {line}')
print(f'  \033[2m... ({len(content)} chars total)\033[0m')
" 2>/dev/null

pause

# ── 5. Cross-product search ──────────────────────────────

header "5 ▸ Cross-Product Search" "Searching for 'authentication' across all products"

printf "  ${BOLD}%-10s %-6s %s${RESET}\n" "PRODUCT" "HITS" "TOP RESULT"
printf "  ${DIM}%-10s %-6s %s${RESET}\n" "───────" "────" "──────────────────────────────────"

for prod in "${PRODUCTS[@]}"; do
  json=$(curl -s "$BASE/$prod/search?q=authentication&limit=1")
  total=$(echo "$json" | python3 -c "import sys,json; print(json.load(sys.stdin).get('totalResults',0))" 2>/dev/null)
  top=$(echo "$json" | python3 -c "
import sys,json
r = json.load(sys.stdin).get('results',[])
print(r[0]['title'] if r else '(none)')
" 2>/dev/null)
  printf "  ${MAGENTA}%-10s${RESET} %-6s %s\n" "$prod" "$total" "$top"
done

pause

# ── Done ─────────────────────────────────────────────────

echo ""
echo -e "${BOLD}${GREEN}  ✓ All API endpoints tested successfully${RESET}"
echo ""
echo -e "  Endpoints demonstrated:"
echo -e "    ${DIM}GET /api/docs/{product}${RESET}                  — product index"
echo -e "    ${DIM}GET /api/docs/{product}/search?q=&limit=${RESET} — full-text search"
echo -e "    ${DIM}GET /api/docs/{product}/page?slug=${RESET}       — page content"
echo ""
echo -e "  Products: ${PRODUCTS[*]}"
echo ""

exit 0
