# Enhancements

Work the team has identified and deferred, with enough context to act on later. Each entry records
the problem, what the code does today, and what a fix has to handle.

---

## Nav link removal

**Status:** open. Identified 2026-09-15 while building mirror propagation.

### The problem

Deleting `cs-docs/headless-cms/file-a.md` means "stop listing this page under Headless CMS". The
sync does not carry out that intent. The page stays in the Headless CMS left navigation.

**The deletion also reverts.** The nav still lists that position, so the next nav reconcile or CMS
to GitHub sync finds a nav leaf with no file and creates the file again. The file reappears, which
reads as a bug rather than as the expected result of an unimplemented feature.

### Current behavior

The writeback never touches navigation content types. `sandbox-sync-engine.ts`,
`git-to-sandbox-sync.ts`, and `contentstack.ts` write no `product_navigation`, `links_2026`, or
`nav_section` entries. The only navigation reference in the write path is the `breadcrumb` field on
a `docs_article`, which points at a nav entry without modifying it. `nav-tree.ts` only reads the
nav.

Deleting one copy of a mirrored page is safe as of 2026-09-15. The entry stays published and the
sync updates it from a surviving copy. Before that change, deleting any single copy unpublished the
entry and removed the page from every nav position at once.

### Requirements

**Edit the owning entry, then publish.** Removing a nav link means editing a `product_navigation`
entry's `nav_section[].links[]` array to drop one link, then publishing the entry. The dangling
Assets link fixed on 2026-09-14 needed the same surgical edit. `WORKFLOW_REBUILD_PHASES.md` records
that procedure, and it is the pattern to follow.

**Assert the exact edit before sending it.** An off-by-one on a `links[]` array removes the wrong
page silently. The Assets fix asserted that the payload dropped exactly one link and left the other
53 untouched. A fix here does the same.

**Never resolve the ambiguity automatically.** A deliberate cross-listing and a stale reference look
identical in the nav data. Both appear as one node reached from two chains, and nothing in the CMS
tells them apart. So the tool reports the intended removal and a human confirms it.

**Expect a Publish Rule to block Production.** The Assets fix published to staging and development,
and a Publish Rule refused Production. A nav edit needs the same approval step, so the fix cannot
assume it completes in one run.
