---
title: test
author: rendrapcx
date: 2022-07-06 01:17:48 +0700
categories: [adonis]
tags: [koding]
image:
  path: https://i.imgur.com/4Qa801d.jpeg
  width: 1000   # in pixels
  height: 200   # in pixels
  alt: test hero
---

`/path/to/a/file.extend`{: .filepath}




```
asdasdd
```
{: .filepath}


{: file="path/to/file" }

Except for `alt`, all other options are necessary, especially the `width` and `height`, which are related to user experience and web page loading performance. The above section "[Size](#size)" also mentions this.

Starting from _Chirpy v5.0.0_, the attributes `height` and `width` can be abbreviated: `height` → `h`, `width` → `w`. In addition, the [`img_path`](#image-path) can also be passed to the preview image, that is, when it has been set, the  attribute `path` only needs the image file name

![Desktop View](https://i.imgur.com/h4wk6WW.png){: .right }
Except for `alt`, all other options are necessary, especially the `width` and `height`, which are related to user experience and web page loading performance. The above section "[Size](#size)" also mentions this.

Starting from _Chirpy v5.0.0_, the attributes `height` and `width` can be abbreviated: `height` → `h`, `width` → `w`. In addition, the [`img_path`](#image-path) can also be passed to the preview image, that is, when it has been set, the  attribute `path` only needs the image file name

Starting from _Chirpy v5.0.0_, the attributes `height` and `width` can be abbreviated: `height` → `h`, `width` → `w`. In addition, the [`img_path`](#image-path) can also be passed to the preview image, that is, when it has been set, the  attribute `path` only needs the image file name

![Desktop View](https://i.imgur.com/4Qa801d.jpeg){: w="320" h="150" }{: .left}

Starting from _Chirpy v5.0.0_, the attributes `height` and `width` can be abbreviated: `height` → `h`, `width` → `w`. In addition, the [`img_path`](#image-path) can also be passed to the preview image, that is, when it has been set, the  attribute `path` only needs the image file name

Starting from _Chirpy v5.0.0_, the attributes `height` and `width` can be abbreviated: `height` → `h`, `width` → `w`. In addition, the [`img_path`](#image-path) can also be passed to the preview image, that is, when it has been set, the  attribute `path` only needs the image file name


![Desktop View](https://i.imgur.com/4Qa801d.jpeg){: width="972" height="589" }
_"Full screen width and center alignment"_


{% raw %}
```html
<form action="{{ route('auth.register') }}" method="POST">
  <label>
    Username
    <input type="text" name="username" value="{{ flashMessages.get('username') ?? '' }}" />
    @if (flashMessages.has('errors.username'))
      <small style="color: red;">
        {{ flashMessages.get('errors.username') }}
      </small>
    @endif
  </label>

  <label>
    Email
    <input type="email" name="email" value="{{ flashMessages.get('email') ?? '' }}" />
    @if (flashMessages.has('errors.email'))
      <small style="color: red;">
        {{ flashMessages.get('errors.email') }}
      </small>
    @endif
  </label>

  <label>
    Password
    <input type="password" name="password" />
    @if (flashMessages.has('errors.password'))
      <small style="color: red;">
        {{ flashMessages.get('errors.password') }}
      </small>
    @endif
  </label>

  <button type="submit">Register</button>
</form>
```
{% endraw %}{: .nolineno file="path/to/file" }

