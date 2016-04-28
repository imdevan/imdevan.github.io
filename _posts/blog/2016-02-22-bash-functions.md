---
layout: blog-article
title: "Bash Functions"
title-color: seafoam
author: Devan Huapaya
category: blog
---

## Turns Out Bash Functions are amazing.

<br>
<br>

<div class="center">Mkdir better</div>

```bash
# Creates a directory and then goes to it.
function mkd() {
    mkdir -p "$@" && cd "$@"
}
```

<div class="center">Lunch?</div>

```bash
# Randomly decides if now is a good time for lunch
function lunch() {
    if (( $(( ( RANDOM % 10 )  + 1 )) > 5 )); then
         echo  "${bold}${green}Go to lunch! ✨${reset}"
    else
         echo  "${bold}${pink}Keep going! 💫${reset}";
    fi
}
```

<div class="center">Choose</div>
```bash
# Picks from a random list of arguments
function choose() {
    a=("$@")
    pick=("${a[RANDOM%${#a[@]}+1]}")
    echo "${bold}${green}${pick}! ✨${reset}";
}
```

# Git
<div class="center">Improved pull request checkout</div>

```bash
# Gets pull request from upstream remote and check's it out
function pr() {
    git fetch upstream pull/$@/head:pr-$@ &&
    git checkout pr-$@ &&
    git remote prune upstream;
}
```

<div class="center">Globed branch delete</div>
```bash
# Deletes branches that start with pr- or specified value,
function prd() {
  git for-each-ref --format="%(refname:short)" refs/heads/${1:-pr-}\* | xargs git branch -D
}
```

<div class="center">Git add, commit, push</div>

```bash
# Adds, attaches commit message, and pushes.
function gap() {
    git add -A &&
    git commit -m $@ &&
    git push
}
```

<div class="center">Git add, commit, push, set upstream</div>

```bash
# Adds, attaches commit message, and pushes with --set-upstream
function gaps() {
    UPSTREAM="$(git rev-parse --abbrev-ref HEAD)"
    git add -A &&
    git commit -m $@ &&
    git push --set-upstream ${UPSTREAM}
}
```

<div class="center">Russian roulette</div>

```bash
# Russian roulette with commits
# 5% chance of deleting everything...
function rulet() {
    if (( $(( ( RANDOM % 100 )  + 1 )) < 5 )); then
        git fetch upstream &&
        git reset --hard upstream/master &&
        git push origin master --force
    else
        git add -A &&
        git commit -m $@ &&
        git push
    fi
}
```

<div class="center">Open pull request</div>

```bash
# Opens specific pull request in browser, or all if not provided
function opr() {
    if [ -z "$1" ]
        then
            open https://github.com/idmevan/imdevan.github.io/pulls
    else
        open https://github.com/idmevan/imdevan.github.io/pull/$@
    fi
}
```

<div class="center">l</div>

```bash
# Opens local host (at specific page if provided)
function l() {
    open https://localhost:3000/$@
}
```

<div class="center">Open Commit</div>

```bash
# Opens a commit
function open-commit() {
    branch="$(git rev-parse --abbrev-ref HEAD)"
    commit="$(cat .git/refs/remotes/origin/${branch})"
    open https://github.com/imdevan/imdevan.github.io/commit/${commit}
}
```

<div class="center">Side project</div>

```bash
# Open specific side project folder
function side() {
    if [ -z "$1" ]
        then
            cd ~/Documents/All\ Things\ Code/Side\ Stuff
    else
        cd ~/Documents/All\ Things\ Code/Side\ Stuff/$@
    fi
}
```
