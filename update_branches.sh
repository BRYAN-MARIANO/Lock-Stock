#!/bin/bash
git fetch --all --tags
for branch in `git branch -r | grep -v HEAD`; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    if [ ! `git branch --list $branch_name` ]; then
        git checkout -b $branch_name $branch
    else
        git checkout $branch_name
    fi
    git pull
done
git checkout main
