---
title: "SAP Spartacus Connector Installation Guide | Contentstack"
description: "Set up the SAP Spartacus Connector to make Contentstack the CMS engine for an SAP Composable Storefront. Provision the content model, install and wire the package, configure it, and verify hybrid rendering."
url: /marketplace/spartacus-contentstack-connector
uid: bltf68740e89c6f77dd
---

# SAP Spartacus Connector Installation Guide | Contentstack

## Install the SAP Spartacus Connector

The SAP Spartacus Connector makes Contentstack the CMS engine for an SAP Composable Storefront (Spartacus), while SAP Commerce (OCC) stays the commerce engine. It is an open-source Angular feature library that you install as an npm package.

The connector runs in hybrid mode by default. SAP Commerce (OCC) renders the base of every page, and Contentstack overrides only the slots you author. The shell and functional pages, such as the header, navigation, footer, login, cart, checkout, and order pages, keep rendering from SAP. You manage the marketing content headlessly in Contentstack, and commerce data, such as products, cart, and checkout, stays in SAP and hydrates live.

This guide covers the full setup: prerequisites, provisioning the content model, installing and wiring the package, configuring it, and verifying that hybrid rendering works.

**Note:** This guide covers installation and setup. To learn how the connector works, including its architecture, the hybrid rendering model, and its features, refer to the [SAP Spartacus Connector Architecture](/docs/marketplace/spartacus-contentstack-connector-architecture) documentation.

## What You Will Learn

-   How to scaffold a Spartacus base app from the SAP RBSC registry.
-   How to provision the demo content model with the Contentstack CLI.
-   How to install and wire the connector into a Spartacus app.
-   How to configure delivery credentials, locales, and hybrid rendering.
-   How to run the storefront and verify that hybrid rendering works.

## Prerequisites

-   **A Spartacus app, or the tooling to build one:** Composable Storefront release 221121.15.1 (the Angular 21 line). If you do not have one, the [Set Up the Spartacus Base App](#set-up-the-spartacus-base-app) section builds it from scratch.
-   **SAP RBSC registry access:** Required to install the @spartacus/\* packages, which are not on public npm. You need your organization's RBSC entitlement and an .npmrc, which you set up in that section.
-   **A reachable SAP OCC backend:** A backend URL and a base site, such as electronics-spa. The connector does not change how Spartacus talks to SAP for commerce.
-   **A Contentstack stack:** A read-only delivery token and API key for the storefront, plus a preview token if you use Live Preview.
-   **Node.js ^22.22.0 and Angular CLI 21:** The toolchain that Composable Storefront 221121.15.1 requires. Node 20 is not sufficient.
-   **Contentstack CLI (csdx):** Installed globally for the one-time content-model import in Step 2. Dev machine only.

**Note:** Public npm's @spartacus/\* packages cap out around 4.3.8 (Angular 12). The current Angular 21 era Composable Storefront is distributed only through SAP's private RBSC registry, which requires an SAP Universal ID. For more information, refer to the [Troubleshooting](#troubleshooting) section.

## How the Install Works

The steps below split into two lanes that meet at the end. The content lane creates the stack, imports the model, publishes it, and mints a delivery token. The code lane builds the Spartacus base app, installs the package, wires the module, and configures it.

Neither lane renders anything on its own. You need the delivery token from the content lane plugged into the config from the code lane before hybrid rendering works.

![Install flow: the content lane provisions the stack and mints a delivery token, the code lane builds the Spartacus app and configures the connector, and the delivery token is the hand-off that enables hybrid rendering.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcf1dab8346ed32f6/72f9095a5118a9c27a04ab5b/spartacus-figure1.png)

## Set Up the Spartacus Base App

Complete this section before Step 1. Skip it if you already have a running Composable Storefront (release 221121.15.1) app, and go to [Step 1](#step-1-install-the-package). Otherwise, it takes you from an empty project to a running SAP storefront, which the connector then adds Contentstack to.

Because the Angular 21 era Composable Storefront ships only through SAP's private RBSC registry, you configure that registry first, scaffold the app, and then add Spartacus.

### Configure the RBSC Registry

The @spartacus/\* packages are not on public npm. Create an .npmrc file in your project root with your organization's RBSC registry host and auth:

```
@spartacus:registry=https://<YOUR_RBSC_REGISTRY_HOST>/
//<YOUR_RBSC_REGISTRY_HOST>/:_auth=<YOUR_RBSC_BASE64_AUTH>
legacy-peer-deps=true
```

The registry host and \_auth value come from your SAP RBSC subscription. The legacy-peer-deps=true line is required, because Spartacus declares a dense set of exact-version Angular and ngrx peers that the strict npm resolver rejects.

**Security:** Treat the \_auth value as a secret. It authenticates you to SAP's private registry, so never commit it and never ship it.

### Scaffold an Angular 21 Project

Use Angular CLI 21. Keep the app standalone, which is the Angular 21 default, but force classic filenames with \--file-name-style-guide=2016, because the Spartacus schematic expects the classic app.module.ts layout. Use \--skip-install so that no install runs before the .npmrc is in place:

```
NG_CLI_ANALYTICS=false npx -y -p @angular/cli@21 ng new my-storefront \
  --style=scss \
  --file-name-style-guide=2016 \
  --ssr=false \
  --skip-install \
  --defaults
```

Add the RBSC .npmrc to the new my-storefront/ folder, then install the dependencies:

```
cd my-storefront
# Create the .npmrc here before installing.
npm install
```

**Note:** Add the .npmrc before the first install. Its legacy-peer-deps=true setting also avoids a known npm 10.x crash (Cannot read properties of null (reading 'edgesOut')) that a plain install on a fresh Angular 21 app can hit.

### Add Spartacus From the RBSC Registry

From inside my-storefront/, run the Spartacus schematic pinned to the Angular 21 release tag, pointed at your OCC backend and base site:

```
npx ng add @spartacus/schematics@221121.15.1 \
  --skip-confirmation \
  --base-url=<YOUR_OCC_BASE_URL> \
  --base-site=<YOUR_BASE_SITE> \
  --interactive=false
```

This installs @spartacus/\* from the RBSC registry and wires the storefront modules, configuration, styles, and shell. The \--interactive=false flag applies the recommended default feature set without prompting.

Keep the following in mind:

-   Do not pass \--feature-level=6.7. The Angular CLI parses the value as a number, and the schematic rejects it. Omit it to apply the schematic's default feature level.
-   For a custom feature subset in a non-interactive install, install the base first, then add each feature with its own schematic, such as ng add @spartacus/tracking.
-   For a self-signed OCC certificate, keep an absolute baseUrl in the generated config and accept the certificate in the browser once. Do not switch to baseUrl: '/' with a dev proxy, because Spartacus then builds protocol-relative //occ/v2/... URLs that break.

### Verify the Plain Storefront

Run the app before you add the CMS:

```
ng serve --port 4200
```

You should see a working SAP storefront, with the header, navigation, footer, product pages, and cart, and content served entirely from OCC. Once that renders, continue to Step 1 to add Contentstack.

**Note:** A completely blank page here almost always means the OCC certificate was not accepted. If your backend uses a self-signed certificate, the browser silently blocks every OCC call and Spartacus cannot bootstrap the site context, so nothing renders. Open the OCC base URL directly in the same browser once, click through the security warning, and then reload.

## Step 1: Install the Package

From inside your Spartacus app, install the connector and its runtime client:

```
npm install @contentstack/contentstack-spartacus-connector @contentstack/delivery-sdk
```

@contentstack/delivery-sdk is the runtime client the connector uses to query the Delivery API. It also exports the Region enum you reference in the configuration. If you use ng add in Step 3, its schematic adds the connector's peer dependencies to your package.json for you.

## Step 2: Provision the Content Model

Create an empty stack whose master locale is English - United States (en-us), then import the Content Model Starter Pack.

**Tip:** Before you import, run the pack's offline preflight check to catch a malformed data directory early:

```
node ./node_modules/@contentstack/contentstack-spartacus-connector/import-export/starter-pack/preflight.mjs
```

Install the Contentstack CLI, then import the pack:

```
npm install -g @contentstack/cli
csdx config:set:region <NA | EU | AZURE-NA | ...>
csdx auth:login                                  # provisioning, dev machine only
csdx cm:stacks:import --stack-api-key <STACK_API_KEY> \
  --data-dir ./node_modules/@contentstack/contentstack-spartacus-connector/import-export/starter-pack \
  --yes
```

One command imports the following, then creates a development environment:

-   The 17 content types (4 per-template page types, a global\_slots shell, and 12 component types).
-   The 4 locales (en-us master, plus de-de, ja-jp, and zh-cn, where each added locale has fallback\_locale: en-us).
-   The 54 seed entry records (en-us and de-de, with references resolved).
-   The 1 placeholder hero-banner asset.

No manual environment setup is needed, because the pack ships development for you. For the full manifest, refer to the Content Model Starter Pack README in the connector repository.

The command logs each module as it imports and finishes with the environment. The exact wording varies by CLI version, so the output resembles the following:

```
Starting import of content types ...
Migrating content type: landing_page ... done
... (17 content types)
Starting import of locales ...  3 locales imported (de-de, ja-jp, zh-cn)
Starting import of assets ...   1 asset imported
Starting import of entries ...  54 entries imported
Starting import of environments ... development
The import process has completed successfully.
```

The import stages everything as a draft, so nothing is delivered yet. You must publish the seed content to development, either with the CLI (fastest, and it reuses the csdx auth:login session) or in the Contentstack UI.

Publish with the CLI. Every content type's entries must be published, not just landing\_page, because the home page references banners, carousels, and navigation entries, and an unpublished reference renders as an empty slot.

```
# 1. Entries. --filter draft selects exactly what the import created;
#    --publish-mode single avoids the 10-entry bulk-API cap.
csdx cm:stacks:bulk-entries --operation publish --filter draft \
  --environments development --locales en-us de-de \
  --publish-mode single \
  --stack-api-key <STACK_API_KEY> --yes

# 2. Asset. The hero-banner image; an unpublished asset shows as a broken
#    image even when its entry is live.
csdx cm:stacks:bulk-assets --operation publish \
  --environments development --locales en-us \
  --stack-api-key <STACK_API_KEY> --yes
```

Expect 54 success, 0 failed for the entries and 1 success, 0 failed for the asset. Entries with no de-de localization publish in en-us only, which is expected; they fall back to master.

To publish in the UI instead, select all imported entries across every content type and bulk-publish them to development in en-us (and de-de where a German version exists), then publish the hero-banner asset to development.

Create a delivery token for development from **Settings > Tokens > Delivery Tokens**, scoped to development, if you do not already have one. That delivery token and the stack API key are the only Contentstack credentials the storefront needs.

### Common Pitfalls

-   **Wrong master locale.** The pack's entries are authored in en-us. A stack whose master locale is anything else mis-resolves fallbacks, so create the stack with en-us as master before you import.
-   **Region mismatch.** The csdx config:set:region value must match the stack's data center, and the same region must be set on delivery.region in Step 4. Otherwise the storefront queries the wrong host and gets empty content.
-   **Nothing renders after import.** The import stages content as a draft. Until you publish the entries and asset to development, the delivery token returns nothing. Publishing is a manual UI step by design.
-   **Partial data-dir.** Point \--data-dir at the full starter-pack folder, not a subfolder. The CLI expects a complete export skeleton and stops on an incomplete one.

**Security:** The privileged credential (csdx auth:login, or a scoped, expiring management token) provisions the stack once on your dev machine and never leaves it. The storefront ships only the read-only delivery token it uses for Delivery API queries at runtime. Never commit the management credential, and never ship it.

## Step 3: Wire the Module

You can wire the connector in two ways. Option A (ng add) is recommended.

### Option A (Recommended): ng add

```
ng add @contentstack/contentstack-spartacus-connector
```

One interactive command generates an app-side ContentstackFeatureModule with your provideConfig(<ContentstackConfig>{…}) and adds it to your SpartacusFeaturesModule. It prompts for region, Live Preview, fallback options, and credentials. Blank answers scaffold <PLACEHOLDER> values to fill later. This wires code and config only; content still comes from the Step 2 import.

The schematic writes the following files. Paths are relative to your project sourceRoot, usually src/:

-   app/spartacus/features/contentstack/contentstack-feature.module.ts: The generated ContentstackFeatureModule. Imports ContentstackCmsFeatureModule and provides your ContentstackConfig.
-   environments/contentstack.environment.ts: Delivery credentials, exported as contentstackDelivery and imported by the feature module.
-   app/spartacus/spartacus-features.module.ts: Modified in place. ContentstackFeatureModule is added to its imports.

The generated feature module scaffolds localeMapping: { en: 'en-us', de: 'de-de' } and accessControl: { enabled: false } on purpose, even at their defaults, so they are easy to find and turn on. A missing localeMapping is the usual cause of blank pages.

For non-interactive or CI installs, pass answers as kebab-case flags. The Angular CLI dasherizes multi-word schema options:

```
ng add @contentstack/contentstack-spartacus-connector \
  --api-key=… --delivery-token=… --environment=development \
  --region=US --cms-page-content-type=landing_page \
  --occ-fallback=true --include-fallback=false \
  --live-preview=false --interactive=false
```

The full flag set, from schematics/add-contentstack/schema.json:

-   \--api-key: A string (blt…). Default: scaffolds <STACK\_API\_KEY>.
-   \--delivery-token: A string (cs…). Default: scaffolds <DELIVERY\_TOKEN>.
-   \--environment: A string. Default: scaffolds <ENVIRONMENT>.
-   \--region: One of US, EU, AZURE-NA, AZURE-EU, GCP-NA, or GCP-EU. Default: US.
-   \--cms-page-content-type: A string. Default: landing\_page.
-   \--occ-fallback: A boolean. Default: true.
-   \--include-fallback: A boolean. Default: false.
-   \--live-preview: A boolean. Default: false.
-   \--preview-token: A string (cs…). Default: scaffolds <PREVIEW\_TOKEN> (emitted only when \--live-preview=true).
-   \--project: A string. Default: the first project in angular.json.
-   \--debug: A boolean. Default: false.

**Note:** The \--cms-page-content-type schematic default is landing\_page, which matches the starter pack's home page. The library's own built-in default is cms\_page. If you wire the module by hand (Option B) and rely on the built-in default, set cmsPageContentType: 'landing\_page' explicitly, or the starter pack's home entry will not resolve.

The \--region key maps to the Region enum member from @contentstack/delivery-sdk when the environment file is generated. For example, AZURE-NA maps to Region.AZURE\_NA.

Delivery credentials are written to src/environments/contentstack.environment.ts and referenced from the generated module, not inlined in the NgModule. This keeps them out of the committed module and lets you swap them per environment through Angular's fileReplacements. Fill any <PLACEHOLDER> values there.

**Tip:** Keep the generated contentstack.environment.ts as your development credentials and mirror it per build target. In angular.json, the production configuration swaps in a production copy at build time:

```
// angular.json → projects.<app>.architect.build.configurations.production
"fileReplacements": [
  {
    "replace": "src/environments/contentstack.environment.ts",
    "with": "src/environments/contentstack.environment.prod.ts"
  }
]
```

The two files export the same contentstackDelivery shape with different environment and token values, and the production copy omits livePreview and previewToken. Because the feature module imports the symbol, not a literal, no code changes. Only the file the build resolves changes.

**Security:** A previewToken is emitted only when you enable Live Preview, and it grants read access to unpublished draft content. Use it only in a non-production build, and do not commit a real value. The connector also refuses to activate Live Preview when the app runs in production mode, so a stray preview build cannot leak drafts to end users.

### Option B: Manual

If you would rather wire it by hand, import the connector's feature module in spartacus-features.module.ts after the stock Spartacus feature and OCC modules. Angular dependency injection is last-provider-wins, so import order is what lets the connector's CMS adapters sit in front of the OCC ones:

```
import { ContentstackCmsFeatureModule } from '@contentstack/contentstack-spartacus-connector';

@NgModule({
  imports: [
    // ...existing Spartacus feature/OCC modules stay as-is...
    ContentstackCmsFeatureModule, // <-- add last
  ],
})
export class SpartacusFeaturesModule {}
```

With the manual path, you provide the config yourself in Step 4 rather than having ng add scaffold it. ContentstackCmsFeatureModule is the single entry point. It registers the connector's default config and imports the CMS override module and the Live Preview module. This import is eager on purpose. The CMS adapter must be in the dependency injection graph before the first page resolves, so it cannot load lazily.

**Note:** Import order matters, and failures are silent. If ContentstackCmsFeatureModule is imported before the stock Spartacus modules, or omitted, the OCC adapters win the DI race, pages keep rendering from SAP OCC, and no error is thrown. If content is not coming from Contentstack, check this ordering first.

## Step 4: Configure the Connector

If you used ng add, this block is generated for you inside the feature module. Add it yourself if you took the manual path. Place it in spartacus-configuration.module.ts or the generated contentstack-feature.module.ts:

```
import { ContentstackConfig } from '@contentstack/contentstack-spartacus-connector';
import { provideConfig } from '@spartacus/core';

provideConfig(<ContentstackConfig>{
  contentstack: {
    delivery: {
      apiKey: '<STACK_API_KEY>',
      deliveryToken: '<DELIVERY_TOKEN>',   // read-only, safe in the client bundle
      environment: '<ENVIRONMENT>',        // e.g. development
      // Live Preview / Visual Builder (optional). Non-production builds only.
      livePreview: true,
      previewToken: '<PREVIEW_TOKEN>',
    },
    // Page content type resolved for content and landing routes (including the homepage).
    cmsPageContentType: 'landing_page',
    // Map site language isocodes to Contentstack locale codes (only where they differ).
    localeMapping: { en: 'en-us', de: 'de-de', ja: 'ja-jp', zh: 'zh-cn' },
    // occFallback defaults to true (hybrid). Set false only for full-replacement mode.
  },
}),
```

Keep the following in mind:

-   occFallback is true by default, which is what makes the shell and commerce pages render from OCC. Leave it on.
-   With locales that have a fallback\_locale, unlocalized content inherits the master locale automatically. Set includeFallback: true to add the delivery-query fallback for edge cases.
-   Set the region on delivery to match your stack's data center, such as Region.US or Region.AZURE\_NA. It must match the region you provisioned the stack under in Step 2.
-   cmsPageContentType is the single per-route page type queried by slug. The starter pack authors the home as landing\_page. Shared-layout pages, such as product and category, map through pageTypeMapping instead.

The ContentstackConfig interface augments Spartacus's Config, so your editor autocompletes and type-checks the whole block. For the full option set, refer to the connector's configuration reference in the repository.

## Step 5: Map Content Types to Angular Components

You only need this step for your own custom components. The editorial starter-pack types, such as banner, carousel, paragraph, and link, map to stock Spartacus components automatically through their SAP typecodes, so no config is needed.

To map a custom component, follow the src/examples/hero-banner/custom-hero.module.ts pattern. The cmsComponents map key must equal the SAP typecode the normalizer emits. For example, the content type simple\_responsive\_banner\_component maps to the typecode SimpleResponsiveBannerComponent.

## Step 6: Run and Verify

Run the app:

```
ng serve   # or your SSR command
```

Expect the following:

1.  The full SAP shell (header, navigation, footer) and functional pages render from OCC, so the store works end to end.
2.  Slots you authored in Contentstack, such as the home hero or carousel, render as islands over that base.
3.  Switching the site language reloads the Contentstack content in the matching locale, or falls back to master where content is not localized.

To confirm hybrid rendering, open the browser DevTools **Network** tab and reload the home page:

-   A request to cdn.contentstack.io, or your region's delivery host, returns the landing\_page entry with its resolved slot references. This is Contentstack serving the authored islands.
-   Requests to /occ/v2/<site>/... fetch the base page structure and the live commerce data, such as product price, stock, and cart. This is SAP serving the base and hydrating commerce.
-   Switching the site language fires a fresh Contentstack query in the mapped locale. The seed's de-de menus relabel, for example, Cameras becomes Kameras, while ja and zh fall back to English.

**Note:** Seeing only /occ/v2/... and no cdn.contentstack.io call means the connector is not intercepting. Recheck the module import order (Option B) and that localeMapping resolves to a locale your stack actually has. For more information, refer to the [Troubleshooting](#troubleshooting) section.

## Troubleshooting

These are the issues most teams hit while setting the connector up. Most "content is not rendering from Contentstack" reports have no console error, because the connector converts a Delivery API failure to an empty result and Spartacus quietly falls back to OCC. Walk the checks below in order.

### Every Page Still Renders From SAP OCC, and No Error Appears

-   **Symptom:** The app builds and runs fine, but pages come straight from SAP OCC. Nothing you author in Contentstack shows up, and no error or warning is logged.
-   **Cause:** ContentstackCmsFeatureModule was imported before the stock Spartacus feature and OCC modules, or not imported at all. The connector overrides the abstract CmsPageAdapter and CmsComponentAdapter tokens. It relies on Angular's last-provider-wins rule, so it must load after the base modules.
-   **Fix:** Import ContentstackCmsFeatureModule last in SpartacusFeaturesModule, or after StorefrontModule. Confirm you import the feature module, not ContentstackCmsModule on its own.

### A Slot Renders Blank, or Nothing Shows for a Block

-   **Symptom:** The page resolves and other slots render, but one component's slot is empty, with no content and no error.
-   **Cause:** The cmsComponents map key does not exactly match the typecode the normalizer emits. A near-miss, such as wrong case or a display name, resolves to nothing and the slot stays blank.
-   **Fix:** Make the key in your cmsComponents map identical to the SAP typecode the normalizer emits. For example, simple\_responsive\_banner\_component maps to SimpleResponsiveBannerComponent.

### The Homepage or a Specific Page Never Resolves

-   **Symptom:** The homepage, or one content page, shows OCC content or not-found while sibling pages resolve from Contentstack correctly.
-   **Cause:** The connector maps Spartacus's home page context to the slug /, and the query matches slugField exactly. If your homepage entry's url field is not literally /, the query returns nothing. More generally, any page fails when OCC's route does not match the CMS-authored slug exactly.
-   **Fix:** Make sure the homepage entry's slug field value is exactly /, or adjust slugField to match. Rather than reauthoring every entry's slug, configure slugTransform: { pattern, replacement } to rewrite the route before it is queried. It applies only to per-route content pages, not to shared-slug product or category pages.

### Standalone Component Lookup Returns Empty With a Console Warning

-   **Symptom:** The component adapter warns that contentstack.componentContentType is not configured and returns nothing.
-   **Cause:** This is expected. The primary path delivers component data embedded in the page payload. The component adapter is only exercised when Spartacus requests a shared component by uid that is not already in the store.
-   **Fix:** Set contentstack.componentContentType only if you use standalone or shared components outside a page's references. Otherwise the warning is harmless and no content is missing.

### ng add Installs an Old Spartacus (v4.x, Angular 12)

-   **Symptom:** A fresh scaffold pulls Spartacus 4.3.8 on Angular 12, which is incompatible with this connector's Angular 21 era target.
-   **Cause:** Public npm's @spartacus/\* packages cap out around 4.3.8. The current Composable Storefront line is distributed only through SAP's private RBSC registry, which requires an SAP Universal ID.
-   **Fix:** Register for RBSC access, or, if you already have a modern Spartacus source vendored locally, consume that directly instead of via public npm.

### OCC Calls Fail With a Certificate Error or Status 0

-   **Symptom:** OCC data, such as product, cart, and checkout, fails to load, and the network tab shows status 0 or a certificate-authority error. This is the SAP side, not Contentstack.
-   **Cause:** A self-signed TLS certificate on a dev or local SAP Commerce backend, which browsers enforce strictly.
-   **Fix (dev only):** In the browser, open the OCC base URL directly once and accept the security exception for that origin. For Node or SSR, run the server with NODE\_TLS\_REJECT\_UNAUTHORIZED=0. Use this in development only, because production SAP Commerce has valid certificates.

### A Code or Config Fix Does Not Take Effect After Rebuilding

-   **Symptom:** You change connector code or config, rebuild, and the running app behaves as if nothing changed.
-   **Cause:** In monorepo or local-dev setups only, your build tool cached the previous output, and the connector, consumed via a symlink or path mapping rather than a published version, is not tracked as a build input.
-   **Fix:** Force a clean, no-cache rebuild, for example nx run <app>:build --skip-nx-cache. This does not apply if you installed the package normally from npm. On SSR builds, remember the client replays server results from TransferState on first hydration, so a hard reload avoids reading a stale payload.

### Console Warnings NG05001 or NG0505 About Hydration

-   **Symptom:** The browser console logs NG05001 or NG0505 hydration warnings on load.
-   **Cause:** These are benign and expected on a pure client-side (noSsr) build, where Angular notices there is no server-rendered payload to hydrate into. The page still renders correctly.
-   **Fix:** None needed. If you are running SSR and see this, confirm that provideClientHydration() is configured in your server bootstrap.

## Additional Resources

-   To learn how the connector works, including its architecture and features, refer to the [SAP Spartacus Connector Architecture](/docs/marketplace/spartacus-contentstack-connector-architecture) documentation.
-   To learn more about the CLI import used in Step 2, refer to the [Import Content Using the CLI](/docs/developers/cli/import-content-using-the-cli) documentation.
-   To authenticate the CLI, refer to the [CLI Authentication](/docs/developers/cli/authenticate-with-the-cli) documentation.
-   For the full configuration reference, the content model and slot reference, and the API surface, refer to the connector repository documentation.
