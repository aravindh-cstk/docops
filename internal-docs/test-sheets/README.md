# Sync test sheets

Each sheet in this folder tracks one direction of the docs sync pipeline. The
sheets record what each scenario tests, what the pipeline is expected to do, and
what it actually did.

| Sheet | Direction it covers |
|---|---|
| `github-to-sandbox-testing.csv` | GitHub to the Sandbox stack |
| `sandbox-to-github-testing.csv` | The Sandbox stack to GitHub |
| `sb-to-prod.csv` | The Sandbox stack to the Prod stack (staging and development environments) |
| `prod-to-github-testing.csv` | The Prod stack `production` environment to GitHub |

## Recording test data

Every sheet carries two columns for tracking the data a scenario creates:

- **Test Data Created (UID)**: the entry UID of anything the scenario creates in
  a Contentstack stack, plus the stack it lives in. Record the navigation entry
  UID as well when the scenario links a page into the left navigation.
- **Torn Down**: the date you removed that data, or the reason it stays.

Fill both columns in the same session that runs the scenario. An entry recorded
in one column and forgotten in the other is the state that produces a broken
link on the live docs site months later.

## Removing test data from Production

Unpublish an entry from every environment before you delete it, and confirm the
page returns 404 before you delete anything.

Deleting an entry does not unpublish it. Contentstack keeps serving the
published copy from its delivery layer, so a page that no longer exists in the
content management system still appears in the left navigation on every docs
page. Nothing in the content management system remains to edit at that point,
which means only the team that owns the docs site build can clear it.

Remove test data in this order:

1. Remove the navigation reference to the entry, and publish that navigation
   change to `production`. The page still resolves at this point, so the
   navigation never points at a dead page.
2. Unpublish the entry from `production`, `staging`, and `development`.
3. Confirm the page returns 404 on the live site.
4. Delete the entry in the Prod stack, then delete the matching entry in the
   Sandbox stack.

The Prod stack `production` environment enforces a workflow Publish Rule, so
publishing and unpublishing there requires a person with the matching role. A
management token alone returns a "workflow stage requirements" error.

For a scenario that leaves several entries behind, bundle them into a Release
and unpublish the Release in one action instead of unpublishing each entry.

## Verifying a page is gone

Two checks confirm a removal. The first confirms the page itself no longer
resolves. The second confirms the left navigation no longer links to it, which
the first check does not cover:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.contentstack.com/docs/<PRODUCT>/<SLUG>
curl -s https://www.contentstack.com/docs/developers | grep -c "<SLUG>"
```

The first command returns `404` and the second returns `0`.
