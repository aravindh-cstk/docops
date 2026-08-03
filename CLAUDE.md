# Personal work wiki

Gladys maintains a personal work wiki (pattern: [Karpathy's LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)) at:

`/Users/gladys.daniel/Documents/Claude/Projects/DevDocsReviewerAgent-Code/wiki/`

It covers her work across all projects, including this one (`docops`) — the CMS↔Git sync pipeline, content QA audits, the Help Center QA effort, and the docs RAG assistant all have pages there already. See `wiki/index.md` for the catalog and `wiki/SCHEMA.md` for the conventions.

When she asks to **ingest** a session, **query** the wiki, or **lint** it, read/write files at that absolute path directly — it works regardless of this project's cwd. Don't start a separate wiki here.
