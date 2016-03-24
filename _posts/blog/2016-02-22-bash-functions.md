---
layout: blog-article
title: "Bash Functions"
title-color: seafoam
author: Devan Huapaya
category: blog
---

## Turns Out Bash Functions are amazing.
The following list contains a bash function followed by a short description

{% highlight ruby %}
function mkd() {
    mkdir -p "$@" && cd "$@"
}
{% endhighlight %}
Creates a directory and then goes to it.

{% highlight ruby %}
function lunch() {
    if (( $(( ( RANDOM % 10 )  + 1 )) > 5 )); then
         echo  "${bold}${green}Go to lunch! ✨${reset}"
    else
         echo  "${bold}${pink}Keep going! 💫${reset}";
    fi
}
{% endhighlight %}
Lets me know if I should go to lunch or keep working if I can't decide... I'm pretty indecisive.

{% highlight ruby %}
function choose() {
    a=("$@")
    pick=("${a[RANDOM%${#a[@]}+1]}")
    echo "${bold}${green}${pick}! ✨${reset}";
}
{% endhighlight %}
Picks from a list of arguments... Yep... more indecision.

# Git
{% highlight ruby %}
function pr() {
    git fetch upstream pull/$@/head:pr-$@ &&
    git checkout pr-$@ &&
    git remote prune upstream;
}
{% endhighlight %}
Pulls down pull request from upstream and creates branch for it.

{% highlight ruby %}
function prd() {
  git for-each-ref --format="%(refname:short)" refs/heads/${1:-pr-}\* | xargs git branch -D
}
{% endhighlight %}
Deletes branches that start with pr- or specified value,

{% highlight ruby %}
function gap() {
    git add -A &&
    git commit -m $@ &&
    git push
}
{% endhighlight %}
Adds, attaches commit message, and pushes.

{% highlight ruby %}
function gaps() {
    UPSTREAM="$(git rev-parse --abbrev-ref HEAD)"
    git add -A &&
    git commit -m $@ &&
    git push --set-upstream ${UPSTREAM}
}
{% endhighlight %}
Adds, attaches commit message, and pushes with --set-upstream

{% highlight ruby %}
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
{% endhighlight %}
Same as above, but with a 5% chance of deleting everything... It sounds crazy, but I think this encourages best practices. Kind of like Netflix's Choas Monkeys.

{% highlight ruby %}
function opr() {
    if [ -z "$1" ]
        then
            open https://github.com/idmevan/imdevan.github.io/pulls
    else
        open https://github.com/idmevan/imdevan.github.io/pull/$@
    fi
}
{% endhighlight %}
Opens a pull request in browser. Replace my repo info with your project of course, if you want to use it.

{% highlight ruby %}
function l() {
    open https://localhost:3000/$@
}
{% endhighlight %}
Opens a pull req

{% highlight ruby %}
function open-commit() {
    branch="$(git rev-parse --abbrev-ref HEAD)"
    commit="$(cat .git/refs/remotes/origin/${branch})"
    open https://github.com/imdevan/imdevan.github.io/commit/${commit}
}
{% endhighlight %}
Opens commit inside of the current branch in a browser.

{% highlight ruby %}
function side() {
    if [ -z "$1" ]
        then
            cd ~/Documents/All\ Things\ Code/Side\ Stuff
    else
        cd ~/Documents/All\ Things\ Code/Side\ Stuff/$@
    fi
}
{% endhighlight %}
Goes to my side projects on my computer, or specified side project.
