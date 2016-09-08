---
layout: blog-article
title: Bash Functions For Github
color: seafoam
author: Devan Huapaya
category: blog
style_mod: BASIC
---

<script src="https://gist.github.com/imdevan/7d7b460efe2e1482bad255a764bf90ac.js"></script>

What we have here are two functions I just wrote to be able to create a github repository from your command line.

All you really need is the following command

```bash
curl -u YOUR_USER_NAME_HERE:YOUR_PASSWORD_HERE https://api.github.com/user/repos -d "{\"name\":\"YOUR_REPO_HERE\"}"
```

But I tend to think, how can I not have to remember that... Functions!

Actually, a [designer at work](https://twitter.com/matthewcpaul) asked me how to
create a repo with their terminal, and it seemed like a good op to write a
function that does it.

Once the script is imported into your bash set up you can call

```bash
createRepo YOUR_REPO_NAME
```

This will call the curl function above and insert all your github info in all
the right places.

This will also initiate the current directory you are in with a README.md in that repository.
