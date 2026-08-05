import { injectImagesIntoDoc } from "./inject-images.js";

// ── Test runner (same shape as test-html-to-md.ts) ──────────────────────────

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

function test(id: string, scenario: string, fn: () => string | void): void {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 300)}`);
  }
}

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

// ── Fixture: cs-docs/launch/change-git-repository-for-a-project.md ────────────
// (entry bltd7ed919840c01051). HTML is the real article_section.content; the
// markdown is the current on-disk body (images missing, callouts flattened).

const HTML = `<p>When you rename, transfer, or replace a repository, you can update the linked repository in Launch without recreating the project or losing your configuration.</p><p>Contentstack Launch allows you to change the GitHub repository linked to an existing project. This enables you to connect a Launch project to a different GitHub repository while retaining the same project settings, deployment configuration, environment variables, custom domains, and deployment history.</p><p>You may need to change the project repository in the following scenarios:</p><ul><li>Migrating a project to a new GitHub repository</li><li>Replacing an existing repository with a new production repository</li><li>Reconnecting a repository after the GitHub repository name has changed</li><li>Updating the project after the repository has been transferred to another GitHub organization or account</li><li>Replacing a deleted repository with a newly created repository while retaining the same Launch project configuration</li></ul><h2>Prerequisites</h2><p>Before changing the project repository, ensure the following conditions are met:</p><ul><li>Only users with <a href="/docs/developers/organization/organization-roles#organization-owner" target="_self">Owner</a> or <a href="/docs/developers/organization/organization-roles#organization-admin" target="_self">Admin</a> access in the organization can change the connected GitHub repository for a project.</li><li>The new GitHub repository exists and your GitHub account can access it.</li><li>Your GitHub account is already connected to Launch, or you are prepared to connect it during the process.</li><li>You must have Owner or Admin access in the organization that owns the target GitHub repository.</li></ul><h2>Changing GitHub Repository for an Existing Launch Project</h2><ol><li>On the Launch landing page, click the <strong>project card</strong> to open the required project.</li><li>Click <strong>Settings</strong> in the top panel. Under <strong>General</strong>, click the <strong>Current Repository</strong> dropdown in the <strong>Git Connection</strong> card.<img asset_uid="am9b37755bc72a3f56" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9b37755bc72a3f56/36d305eb77aa354a24a1f754/Launch_GitHub_Repo_Transfer_GitConnection.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_GitConnection.png" height="auto"/><p class="note"><strong>Note:</strong> If you need to switch to a different GitHub account or organization, click <strong>Switch GitHub Connection</strong> in the Git Connection card and select the required GitHub account.</p></li><li>Select the new GitHub repository to connect to the project.</li><li>Click <strong>Save Changes</strong> to apply the repository update.<img asset_uid="am1935138c1fb79584" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1935138c1fb79584/5e07d0bed8b4af145f958254/Launch_GitHub_Repo_Transfer_SaveChanges.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_SaveChanges.png" height="auto"/><br />To discard the change and revert to the previously connected repository, click <strong>Reset</strong>.</li><li>In the <strong>Change Project Repository?</strong> confirmation modal, review the current and new repository details and click <strong>Change Repository</strong> to confirm.&nbsp;<img asset_uid="am3fb849abffbb2937" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3fb849abffbb2937/eda393facc59dfcb18d76093/Launch_GitHub_Repo_Transfer_ChangeRepo.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_ChangeRepo.png" height="auto"/></li><li>After the transfer is complete, the <strong>Git Connection</strong> section displays the updated repository.<img asset_uid="am84d1b6e7fb2263e1" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am84d1b6e7fb2263e1/2a3dc94e6dbefcd254adfe2d/Launch_GitHub_Repo_Transfer_Connected.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_Connected.png" height="auto"/><p class="add-resource"><strong>Additional Resource:</strong> To repair GitHub connection, refer to the <a href="/docs/developers/launch/repair-github-connection-for-projects" target="_self">Repair GitHub Connection for Projects</a> document.</p></li><li>If the newly connected repository uses a different framework or project structure, go to the <strong>Environments</strong> section and update the deployment commands under <strong>Deployments</strong> and the environment variables under <strong>Environment Variables</strong> accordingly.<img asset_uid="am8a7e66c9ea0467ab" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8a7e66c9ea0467ab/dc2a06d5fb55e8d8ede9d7aa/Launch_GitHub_Repo_Transfer_EnvUpdates.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_EnvUpdates.png" height="auto"/></li><li>Click <strong>Environments</strong> in the top panel, select your deployment, and click <strong>Redeploy</strong> to deploy the project with the required commit.</li></ol><p>Once the deployment is successful, your project goes live with the newly connected repository.<img asset_uid="am8287b4a3503428af" src="https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8287b4a3503428af/87bbf978e0fb4bd0133199a3/Launch_GitHub_Repo_Transfer_Live.png?locale=en-us" alt="Launch_GitHub_Repo_Transfer_Live.png" height="auto"/></p><h2>Troubleshooting</h2><p>If issues occur during or after the repository transfer, check the following:</p><ul><li>Ensure the connected GitHub account has access to the required repository in the GitHub organization settings.</li><li>Verify that the GitHub account is properly connected to Launch. If required, repair the GitHub connection.</li><li>If the repository was recently transferred to another GitHub organization, reinstall the GitHub App in the new organization.</li><li>Verify that the build command and output directory match the structure of the newly connected repository.</li><li>Ensure all required environment variables for the new codebase are configured in the Launch environment settings.</li></ul>`;

const FRONTMATTER = `---
title: "[Contentstack Launch] - Change Git Repository for a Project"
url: https://www.contentstack.com/docs/launch/change-git-repository-for-a-project
---

`;

const BODY = `# [Contentstack Launch] - Change Git Repository for a Project

This page explains how to change the GitHub repository connected to an existing Contentstack Launch project while retaining project settings and deployment history. It is intended for organization Owners/Admins.

## Change Git Repository for a Project

When you rename, transfer, or replace a repository, you can update the linked repository in Launch without recreating the project or losing your configuration.

Contentstack Launch allows you to change the GitHub repository linked to an existing project. This enables you to connect a Launch project to a different GitHub repository while retaining the same project settings, deployment configuration, environment variables, custom domains, and deployment history.

You may need to change the project repository in the following scenarios:
- Migrating a project to a new GitHub repository
- Replacing an existing repository with a new production repository
- Reconnecting a repository after the GitHub repository name has changed
- Updating the project after the repository has been transferred to another GitHub organization or account
- Replacing a deleted repository with a newly created repository while retaining the same Launch project configuration

## Prerequisites

Before changing the project repository, ensure the following conditions are met:
- Only users with [Owner](../developers/organization/organization-roles.md#organization-owner) or [Admin](../developers/organization/organization-roles.md#organization-admin) access in the organization can change the connected GitHub repository for a project.
- The new GitHub repository exists and your GitHub account can access it.
- Your GitHub account is already connected to Launch, or you are prepared to connect it during the process.
- You must have Owner or Admin access in the organization that owns the target GitHub repository.

## Changing GitHub Repository for an Existing Launch Project

- On the Launch landing page, click the **project card** to open the required project.
- Click **Settings** in the top panel. Under **General**, click the **Current Repository** dropdown in the **Git Connection** card.**Note:** If you need to switch to a different GitHub account or organization, click **Switch GitHub Connection** in the Git Connection card and select the required GitHub account.
- Select the new GitHub repository to connect to the project.
- Click **Save Changes** to apply the repository update.
  To discard the change and revert to the previously connected repository, click **Reset**.
- In the **Change Project Repository?** confirmation modal, review the current and new repository details and click **Change Repository** to confirm.
- After the transfer is complete, the **Git Connection** section displays the updated repository.**Additional Resource:** To repair GitHub connection, refer to the [Repair GitHub Connection for Projects](../developers/launch/repair-github-connection-for-projects.md) document.
- If the newly connected repository uses a different framework or project structure, go to the **Environments** section and update the deployment commands under **Deployments** and the environment variables under **Environment Variables** accordingly.
- Click **Environments** in the top panel, select your deployment, and click **Redeploy** to deploy the project with the required commit.

Once the deployment is successful, your project goes live with the newly connected repository.

## Troubleshooting

If issues occur during or after the repository transfer, check the following:
- Ensure the connected GitHub account has access to the required repository in the GitHub organization settings.
- Verify that the GitHub account is properly connected to Launch. If required, repair the GitHub connection.
- If the repository was recently transferred to another GitHub organization, reinstall the GitHub App in the new organization.
- Verify that the build command and output directory match the structure of the newly connected repository.
- Ensure all required environment variables for the new codebase are configured in the Launch environment settings.

## Common questions

### Who can change the connected GitHub repository for a Launch project?
Only users with Owner or Admin access in the organization can change the connected GitHub repository for a project.
`;

const FILE = FRONTMATTER + BODY;

test("i1", "all 6 images found and injected", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  ok(res.imagesInHtml === 6, `expected 6 images in HTML, got ${res.imagesInHtml}`);
  ok(res.imagesInjected === 6, `expected 6 injected, got ${res.imagesInjected}\nreports: ${JSON.stringify(res.reports, null, 1)}`);
  ok(res.changed, "expected changed=true");
  return "6/6 injected";
});

test("i2", "frontmatter preserved byte-for-byte", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  ok(res.newContent.startsWith(FRONTMATTER), "frontmatter changed");
  return "frontmatter untouched";
});

test("i3", "GitConnection image placed and Note callout un-flattened", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  const c = res.newContent;
  ok(c.includes("Git Connection** card.![Launch_GitHub_Repo_Transfer_GitConnection.png]("),
    `image not placed after step text — got around:\n${slice(c, "Git Connection** card")}`);
  ok(/GitConnection\.png\?locale=en-us\)\n\n  \*\*Note:\*\* If you need/.test(c),
    `Note not un-flattened onto own indented line — got:\n${slice(c, "GitConnection.png?locale")}`);
  return "image + un-flattened note";
});

test("i4", "SaveChanges image placed before the hard-break continuation", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  const c = res.newContent;
  ok(/repository update\.!\[Launch_GitHub_Repo_Transfer_SaveChanges\.png]\([^)]*\) *\n  To discard/.test(c),
    `SaveChanges image not before the <br> continuation — got:\n${slice(c, "repository update")}`);
  return "image before line break, continuation intact";
});

test("i5", "Connected image placed and Additional Resource un-flattened, link preserved", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  const c = res.newContent;
  ok(/updated repository\.!\[Launch_GitHub_Repo_Transfer_Connected\.png]\([^)]*\)\n\n  \*\*Additional Resource:\*\*/.test(c),
    `Connected image + Additional Resource callout not correct — got:\n${slice(c, "updated repository")}`);
  ok(c.includes("[Repair GitHub Connection for Projects](../developers/launch/repair-github-connection-for-projects.md)"),
    "existing relativized link should be preserved");
  return "image + un-flattened add-resource + link preserved";
});

test("i6", "Live image appended to final paragraph", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  ok(/newly connected repository\.!\[Launch_GitHub_Repo_Transfer_Live\.png]\(/.test(res.newContent),
    `Live image not appended to final paragraph — got:\n${slice(res.newContent, "goes live")}`);
  return "final-paragraph image appended";
});

test("i7", "idempotent — second run makes no changes", () => {
  const once = injectImagesIntoDoc(FILE, HTML);
  const twice = injectImagesIntoDoc(once.newContent, HTML);
  ok(!twice.changed, `second run changed the file (injected ${twice.imagesInjected})`);
  const skipped = twice.reports.filter((r) => r.action === "skipped-present").length;
  ok(skipped === 6, `expected 6 skipped-present on rerun, got ${skipped}`);
  return "no duplicate images on rerun";
});

test("i8", "steps without images are left untouched", () => {
  const res = injectImagesIntoDoc(FILE, HTML);
  ok(res.newContent.includes("- On the Launch landing page, click the **project card** to open the required project.\n"),
    "step 1 (no image) should be unchanged");
  ok(res.newContent.includes("- Select the new GitHub repository to connect to the project.\n"),
    "step 3 (no image) should be unchanged");
  return "no-image blocks unchanged";
});

function slice(s: string, near: string): string {
  const i = s.indexOf(near);
  if (i < 0) return "<not found>";
  return s.slice(Math.max(0, i - 10), i + 140);
}

// ── Summary ──────────────────────────────────────────────────────────────────

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
