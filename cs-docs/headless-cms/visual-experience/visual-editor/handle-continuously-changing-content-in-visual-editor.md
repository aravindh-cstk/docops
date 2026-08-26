---
title: "{Headless CMS | Visual Editor} - Handle Continuously Changing Content in Visual Editor"
description: "Pause self-updating content such as animations, carousels, and polled feeds while a field is selected in Visual Editor, using the isVisualEditorEditing() check from the Live Preview Utils SDK."
url: /headless-cms/handle-continuously-changing-content-in-visual-editor
uid: blt20bb1cb0e3ffd789
---

# {Headless CMS | Visual Editor} - Handle Continuously Changing Content in Visual Editor

## Handle Continuously Changing Content in Visual Editor

Some pages change their own content after they load. When an author opens such a page in Visual Editor and selects one of these elements, the content keeps moving underneath them, and a value being typed can be lost as the edit form re-reads the element. This guide shows you how to pause self-updating content while a field is selected for editing, using the isVisualEditorEditing() check from the Live Preview Utils SDK. It is available in v4.5.0 and later.

This applies to content such as:

-   CSS animations, such as a scrolling banner, a pulsing badge, or a rotating headline.
-   A carousel or slider that advances on a timer.
-   A ticker, feed, or price that polls an API and rewrites the DOM.
-   Anything driven by streamed or websocket data.

## How it Works

Visual Editor marks the element an author is editing. The SDK gives you one check, isVisualEditorEditing(element), that returns whether an edit is active inside the element you pass. You reflect that boolean as a CSS class and let CSS pause the motion.

**Note:** This check is active only inside Visual Editor, so it does not affect your live site.

## Pause Content with a Class

1.  Import isVisualEditorEditing from the Live Preview Utils SDK and pass the element that wraps your content:

    ```
    import { isVisualEditorEditing } from "@contentstack/live-preview-utils";

    const isEditing = isVisualEditorEditing(feedEl); // true / false

    feedEl.className = isEditing ? "pause-animation" : "continue-animation";
    ```

2.  Define the two classes in CSS:

    ```
    .pause-animation    { animation-play-state: paused; }
    .continue-animation { animation-play-state: running; }
    ```


## Keep the Check in Sync

isVisualEditorEditing() is a one-time read, not a subscription. It sets up no listeners and does not tell you when editing starts or stops, so calling it once during render leaves you with a value that never updates. You decide what re-runs it.

Two common approaches: poll on a light interval, which keeps your code independent of any SDK event API; or watch the DOM with a MutationObserver on the data-cslp-field-type attribute if you would rather not poll.

## React Example

The following hook polls the check on a light interval and pauses a parent-driven animation while a child field is selected for editing:

```
import { useEffect, useRef, useState } from "react";
import { isVisualEditorEditing } from "@contentstack/live-preview-utils";

const EDITING_POLL_MS = 200;

// The SDK only provides the boolean check; how to read it is your choice.
function useIsVisualEditorEditing(ref) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIsEditing(isVisualEditorEditing(ref.current));
    }, EDITING_POLL_MS);
    return () => window.clearInterval(id);
  }, [ref]);

  return isEditing;
}

// The scroll animation sits on the track, but the author edits a child.
// Check the whole feed and pause the track while an edit is active.
function BlogScroller({ blogs }) {
  const viewportRef = useRef(null);
  const isEditing = useIsVisualEditorEditing(viewportRef);

  return (
    <div className="blog-scroller" ref={viewportRef}>
      <div className={isEditing ? "blog-scroller__track paused" : "blog-scroller__track"}>
        {blogs.map((blog) => (
          <BlogCard key={blog.uid} blog={blog} />
        ))}
      </div>
    </div>
  );
}
```

## Verification

-   **In Visual Editor:** select the element, the motion stops; click away, it resumes.
-   **On your live site:** the element behaves exactly as before.

## Reference

isVisualEditorEditing(element) returns true while a field inside element (or its descendants) is selected for editing. Omit element to check the whole document. The check is side-effect-free and returns false during SSR.
