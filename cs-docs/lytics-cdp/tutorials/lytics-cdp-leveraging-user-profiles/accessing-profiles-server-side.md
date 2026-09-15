---
title: "Accessing Profiles Server Side"
description: "Learn how to look up a visitor's Lytics profile from server-side code by reading the seerid/_uid cookie and calling the personalization API, then surfacing the returned profile fields in your page template or as a JavaScript object."
url: /lytics/accessing-profiles-server-side
uid: blt603fe00cfffcaa7c
---

# Accessing Profiles Server Side

## Accessing Profiles Server Side

## Accessing Data from Server Side

By default, Lytics returns a user's profile and any surfaced fields to the browser. This, however, is not always sufficient when it comes to marketing use cases. An alternative approach is to do the lookup based on the user cookie, utilizing the server side language of your choice. First, read the browser's cookies to get the visitor's `_uid` in order to identify them, make a request to the [Personalization](https://docs.lytics.com/reference/personalization) to get the visitors current profile, and then surface the profile as a JavaScript object.

### Identifying the Visitor

Identifying the user can be done in a variety of ways. By default, Lytics sets a cookie `seerid` that is used to identify a user. This is then surfaced in a user profile as `_uid`. The `_uid` field is what the Lytics JavaScript tag uses for web based identity resolution. That said, if users are logged in or identified by another known key this can be used in place of `seerid` in the following examples.

Since we already have a cookie, all we need to do is read those to get the user profile from the Lytics API.

```
$_COOKIE["seerid"];
```

### Get Visitor's Profile

Once you have an identifier, make a GET request to our personalization API. In this example, the cookie value is used to build a call to the personalization API for three fields: `last_make`, `last_model`, `last_color`. If you are using a custom key value pair for identification, replace the `$fieldname` parameter with the field name of your identifier in Lytics and `$value` with the value of that key.

```
<?php
  $fieldname = "_uid";
  $value = $_COOKIE["seerid"];
  $apitoken = "{yourapitoken}";

  $url = "https://api.lytics.io/api/entity/user/".$fieldname."/".$value."?fields=last_make,last_model,last_color&key=".$apitoken;
  $data = json_decode(file_get_contents($url), true);
  $profile = $data["data"];
?>
```

### Surface User Data in the Browser

Next, parse the response and either inject the variables directly into your template or surface the profile as a JavaScript object.

```
<?php
  $fieldname = "_uid";
  $value = $_COOKIE["seerid"];
  $apikey = "{yourapitoken}";

  $url = "https://api.lytics.io/api/entity/user/".$fieldname."/".$value."?fields=last_make,last_model,last_color&key=".$apitoken;
  $data = json_decode(file_get_contents($url), true);
  $profile = $data["data"];
?>

<html>
<head>
  <script type="text/javascript">
    window.jstag=function(){function t(t){return function(){return t.apply(this,arguments),this}}function n(){var n=["ready"].concat(c.call(arguments));return t(function(){n.push(c.call(arguments)),this._q.push(n)})}var i={_q:[],_c:{},ts:(new Date).getTime(),ver:"2.0.0"},c=Array.prototype.slice;return i.init=function(t){return i._c=t,t.synchronous||i.loadtagmgr(t),this},i.loadtagmgr=function(t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=t.url+"/api/tag/"+t.cid+"/lio.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)},i.ready=n(),i.send=n("send"),i.mock=n("mock"),i.identify=n("identify"),i.pageView=n("pageView"),i.bind=t(function(t){i._q.push([t,c.call(arguments,1)])}),i.block=t(function(){i._c.blockload=!0}),i.unblock=t(function(){i._c.blockload=!1}),i}(),window.jstag.init({cid:"{yourcid}", url:"//c.lytics.io", min:true, loadid:false});

      var lyticsProfile = <?php echo json_encode($profile); ?>;
  </script>
</head>
<body>
  Make: <?php echo $profile["last_make"]; ?><br/>
  Model: <?php echo $profile["last_model"]; ?><br/>
  Color: <?php echo $profile["last_color"]; ?>
</body>
</html>
```
