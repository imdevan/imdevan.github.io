---
layout: blog-article
title: "Bash Function for Creating Blog Posts"
title-color: seafoam
author: Devan Huapaya
category: blog
style_mod: BASIC
---

I created this little bash function for creating blog posts!

``` shell
# write <optional-file-title> <optional-post-title> <optional-color>
function write() {
    date=`date +%Y-%m-%d`
    filePath="/Users/devanhuapaya/Documents/All Things Code/Personal Portfolio/_posts/blog/"
    header="---\nlayout: blog-article \ntitle: ${2} \ntitle-color: ${3}\nauthor: Devan Huapaya \ncategory: blog \nstyle_mod: BASIC \n---"
    if [ -z "$1" ]
        then
            uniqId=$(uuidgen)
            newPost=${filePath}${date}-${uniqId}.md
    else
        name=$1
        newPost=${filePath}${date}-${name}.md
    fi
    echo ${header} > ${newPost}
    atom ${newPost}
}
```

- It uses `date=date +%Y-%m-%d` to get the date
- `filePath` is the file path to where I have my personal portfolio
- `header` is a default header for my blog posts
- - Insert `title` and `color` if provided
- `if [ -z "$1" ]` checks if there is a first argument
- - If there isn't one a default filename will be given\
- `newPost` is the file path + name of the file
- Insert header into newPost
- Open the new file with atom

[link to gist](https://gist.github.com/imdevan/93e2f9e66d8cd513b2de83bbd097fab2?utm_content=bufferafc67&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
