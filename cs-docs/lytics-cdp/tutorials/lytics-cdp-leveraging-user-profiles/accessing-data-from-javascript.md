---
title: "Accessing Profiles Client Side"
description: "Explains how to use the Lytics JavaScript tag's entity-loaded callback to access a visitor's profile data client-side, with a worked example of pre-populating a website form's fields (make, model, color) based on the user's last search."
url: /lytics/accessing-data-from-javascript
uid: bltfa2fb7b9a1aaf07b
---

# Accessing Profiles Client Side

## Accessing Profiles Client Side

## Accessing Data from JavaScript Tag

Once user fields have been surfaced, they can be used to personalize a user's experience. For example, a theoretical car buying site has surfaced some basic info about a user's last vehicle search results in the following data available in the browser.

```
{
  "last_make": "audi",
  "last_model": "rx8",
  "last_color": "onyx",
  "segments": [
    "all",
    "potential_buyers",
    "high_momentum"
  ]
}
```

### Populate a Form

Create a JavaScript function that populates form fields.

```
function(data){
  if(data.last_make !== ""){
    $('input[name="make"]').val(data.last_make);
  }

  if(data.last_model !== ""){
    $('input[name="model"]').val(data.last_model);
  }

  if(data.last_color !== ""){
    $('input[name="color"]').val(data.last_color);
  }
}
```

Initialize the callback handler.

```
<script type="text/javascript">

</script>!function(l,a){a.liosetup=a.liosetup||{},a.liosetup.callback=a.liosetup.callback||[],a.liosetup.addEntityLoadedCallback=function(l,o){if("function"==typeof a.liosetup.callback){var i=[];i.push(a.liosetup.callback),a.liosetup.callback=i}a.lio&&a.lio.loaded?l(a.lio.data):o?a.liosetup.callback.unshift(l):a.liosetup.callback.push(l)}}(document,window);
```

Create a callback: This will execute an action via JavaScript once the visitor has been identified and the profile has been loaded (using the function outlined above).

```
<script type="text/javascript">
    window.liosetup.addEntityLoadedCallback(function(data){
      if(data.last_make !== ""){
        $('input[name="make"]').val(data.last_make);
      }

      if(data.last_model !== ""){
        $('input[name="model"]').val(data.last_model);
      }

      if(data.last_color !== ""){
        $('input[name="color"]').val(data.last_color);
      }
    });
</script>
```

Once the profile has loaded, Lytics will call the JavaScript function and populate the form on the site. Once all the above steps are completed, the final code is as follows:

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>form value demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <script type="text/javascript">
    // Lytics JavaScript Tag
    window.jstag=function(){function t(t){return function(){return t.apply(this,arguments),this}}function n(){var n=["ready"].concat(c.call(arguments));return t(function(){n.push(c.call(arguments)),this._q.push(n)})}var i={_q:[],_c:{},ts:(new Date).getTime(),ver:"2.0.0"},c=Array.prototype.slice;return i.init=function(t){return i._c=t,t.synchronous||i.loadtagmgr(t),this},i.loadtagmgr=function(t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=t.url+"/api/tag/"+t.cid+"/lio.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)},i.ready=n(),i.send=n("send"),i.mock=n("mock"),i.identify=n("identify"),i.pageView=n("pageView"),i.bind=t(function(t){i._q.push([t,c.call(arguments,1)])}),i.block=t(function(){i._c.blockload=!0}),i.unblock=t(function(){i._c.blockload=!1}),i}(),window.jstag.init({cid:"{yourcid}", url:"//c.lytics.io", min:true, loadid:false});
  </script>
  <script type="text/javascript">
    // Lytics Callback Handler
    !function(l,a){a.liosetup=a.liosetup||{},a.liosetup.callback=a.liosetup.callback||[],a.liosetup.addEntityLoadedCallback=function(l,o){if("function"==typeof a.liosetup.callback){var i=[];i.push(a.liosetup.callback),a.liosetup.callback=i}a.lio&&a.lio.loaded?l(a.lio.data):o?a.liosetup.callback.unshift(l):a.liosetup.callback.push(l)}}(document,window);

    // Custom Callback Function
    // This particular callback simply checks that the three values are not empty strings and then uses jQuery to update the form.
    window.liosetup.addEntityLoadedCallback(function(data){
      if(data.last_make !== ""){
        $('input[name="make"]').val(data.last_make);
      }

      if(data.last_model !== ""){
        $('input[name="model"]').val(data.last_model);
      }

      if(data.last_color !== ""){
        $('input[name="color"]').val(data.last_color);
      }
    });
    </script>
</head>
<body> 
  <h2>A Sample Form</h2>
  <form action='' method='post'>
    <label>Make: </label><input type='text' name='make' value='' /><br/>
    <label>Model: </label><input type='text' name='model' value='' /><br/>
    <label>Color: </label><input type='text' name='color' value='' />
  </form>
</body>
</html>
```

This is one basic example of leveraging the current visitor's profile information. The personalization powered by Lytics builds from here. Using a similar pattern, you could surface new listings on the site's index page that match a user's last search or present other vehicles that user may be interested in.
