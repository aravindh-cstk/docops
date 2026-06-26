---
title: "extractStyles"
description: "The extractStyles method extracts CSS from composition specifications for Server-Side Rendering (SSR). It generates static CSS that can be injected into the <head> of an HTML document during SSR. Parameters Name Type Description specs (StudioSpec \| null)[] Array of composition specifications to extract styles from. null entries are ignored. Returns string: Combined CSS including root base styles, composition-specific styles, and utility styles. Example import { extractStyles } from '@contentstack/studio-react'; const cssStyles = extractStyles([compositionSpec]); Usage Example: SSR Applications // In your Next.js or similar SSR framework import { extractStyles } from '@contentstack/studio-react'; export async function generateStaticParams() { const { specOptions } = await useCompositionSpec({ ... }); const cssStyles = extractStyles([specOptions]); return { props: { cssStyles, specOptions } }; } export default function Page({ cssStyles, specOptions }) { return ( <> <style dangerouslySetInnerHTML={{ __html: cssStyles }} /> <StudioComponent specOptions={specOptions} /> </> ); }"
url: "https://www.contentstack.com/react-studio-sdk-design-registry-extractstyles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## extractStyles

The extractStyles method extracts CSS from composition specifications for Server-Side Rendering (SSR). It generates static CSS that can be injected into the <head> of an HTML document during SSR.

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| specs | (StudioSpec \| null)[] | Array of composition specifications to extract styles from. null entries are ignored. |

**Returns**

string: Combined CSS including root base styles, composition-specific styles, and utility styles.

**Example**

```
import { extractStyles } from '@contentstack/studio-react';

const cssStyles = extractStyles([compositionSpec]);
```

**Usage Example: SSR Applications**

```
// In your Next.js or similar SSR framework
import { extractStyles } from '@contentstack/studio-react';

export async function generateStaticParams() {
  const { specOptions } = await useCompositionSpec({ ... });
  const cssStyles = extractStyles([specOptions]);
  return {
    props: {
      cssStyles,
      specOptions
    }
  };
}

export default function Page({ cssStyles, specOptions }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <StudioComponent specOptions={specOptions} />
    </>
  );
}
```
