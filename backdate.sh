#!/bin/bash

# Initial commit
git add .
GIT_AUTHOR_DATE="2025-03-01T10:00:00" \
GIT_COMMITTER_DATE="2025-03-01T10:00:00" \
git commit -m "initial commit: portfolio setup"

start_date="2025-03-05"
end_date="2026-06-01"
current="$start_date"

while [ "$current" \< "$end_date" ] || [ "$current" = "$end_date" ]; do
  day_of_week=$(date -j -f "%Y-%m-%d" "$current" "+%u")
  
  if [ "$day_of_week" != "6" ] && [ "$day_of_week" != "7" ]; then
    chance=$((RANDOM % 10))
    if [ "$chance" -gt "3" ]; then
      count=$((RANDOM % 2 + 1))
      for i in $(seq 1 $count); do
        echo "update $current-$i" >> changelog.txt
        git add changelog.txt
        GIT_AUTHOR_DATE="${current}T10:0${i}:00" \
        GIT_COMMITTER_DATE="${current}T10:0${i}:00" \
        git commit -m "update: ${current}-${i}"
      done
  fi
  fi
  current=$(date -j -f "%Y-%m-%d" -v+1d "$current" "+%Y-%m-%d")
done
