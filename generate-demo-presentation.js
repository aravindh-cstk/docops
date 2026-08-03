const pptxgen = require('pptxgenjs');

// Create presentation
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// Brand colors
const colors = {
  black: '1a1a2e',
  purple: '9d4edd',
  white: 'FFFFFF',
  lightGray: 'f5f5f5',
  darkGray: '4a4a4a'
};

// Helper function to add title slide
function addTitleSlide(pres, title, subtitle) {
  const slide = pres.addSlide();
  slide.background = { color: colors.black };

  slide.addText(title, {
    x: 0.5,
    y: 2.0,
    w: 9,
    h: 1.2,
    fontSize: 54,
    bold: true,
    color: colors.purple,
    align: 'center'
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 3.5,
      w: 9,
      h: 0.8,
      fontSize: 24,
      color: colors.white,
      align: 'center'
    });
  }
}

// Helper function to add content slide
function addContentSlide(pres, title, content) {
  const slide = pres.addSlide();
  slide.background = { color: colors.white };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.8,
    fill: { color: colors.black },
    line: { type: 'none' }
  });

  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.5,
    fontSize: 36,
    bold: true,
    color: colors.purple
  });

  // Content
  if (Array.isArray(content)) {
    let yPos = 1.2;
    content.forEach(item => {
      slide.addText(item, {
        x: 0.8,
        y: yPos,
        w: 8.4,
        fontSize: 16,
        color: colors.darkGray
      });
      yPos += 0.6;
    });
  } else {
    slide.addText(content, {
      x: 0.8,
      y: 1.2,
      w: 8.4,
      fontSize: 16,
      color: colors.darkGray
    });
  }
}

// ===== SLIDE 1: Title =====
addTitleSlide(pres, 'Bidirectional Git↔CMS Sync', 'Automation & Validation');

// ===== SLIDE 2: Problem Statement =====
addContentSlide(pres, 'The Challenge', [
  '❌ Manual documentation sync between Git and CMS',
  '',
  '❌ Developers write docs in Git, tech writers manually enter into CMS',
  '',
  '❌ CMS changes don\'t sync back to Git',
  '',
  '❌ Risk of divergence and version conflicts',
  '',
  '➜ Need: Automatic bidirectional sync with zero manual steps'
]);

// ===== SLIDE 3: Solution Overview =====
addContentSlide(pres, 'The Solution', [
  '✅ Automatic bidirectional synchronization',
  '',
  '✅ Git → CMS: Push code, docs auto-create in CMS',
  '',
  '✅ CMS → Git: Publish entry in CMS, PR auto-created in Git',
  '',
  '✅ Single source of truth maintained',
  '',
  '✅ Eliminates manual entry and keeps both systems aligned'
]);

// ===== SLIDE 4: Architecture Overview =====
const slide4 = pres.addSlide();
slide4.background = { color: colors.white };

slide4.addShape(pres.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 10,
  h: 0.8,
  fill: { color: colors.black },
  line: { type: 'none' }
});

slide4.addText('Architecture: Key Components', {
  x: 0.5,
  y: 0.15,
  w: 9,
  h: 0.5,
  fontSize: 36,
  bold: true,
  color: colors.purple
});

const components = [
  { title: 'GitHub Actions', desc: 'Workflows for Git→CMS and CMS→Git' },
  { title: 'Contentstack CMS', desc: 'API endpoints for entry CRUD + webhooks' },
  { title: 'Git Repository', desc: 'Markdown files with frontmatter metadata' },
  { title: 'Linting Engine', desc: 'Validates files before sync' }
];

let yPos = 1.3;
components.forEach(comp => {
  slide4.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: yPos,
    w: 8.8,
    h: 0.7,
    fill: { color: colors.lightGray },
    line: { color: colors.purple, width: 2 }
  });

  slide4.addText(comp.title, {
    x: 0.7,
    y: yPos + 0.05,
    w: 2,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.purple
  });

  slide4.addText(comp.desc, {
    x: 3,
    y: yPos + 0.05,
    w: 5.5,
    h: 0.3,
    fontSize: 12,
    color: colors.darkGray
  });

  yPos += 0.9;
});

// ===== SLIDE 5: Data Flow =====
addContentSlide(pres, 'Data Flow: How It Works', [
  '📝 Developer pushes .md file to Git',
  '↓',
  '✅ GitHub Actions validates with linter',
  '↓',
  '🚀 Creates/updates entry in Contentstack CMS',
  '↓',
  '📤 Writer publishes entry in CMS',
  '↓',
  '🔔 Webhook triggers GitHub Actions',
  '↓',
  '✍️ PR auto-created in Git for tech team review'
]);

// ===== SLIDE 6: Test Strategy =====
addContentSlide(pres, 'Why We Test', [
  '• Prove the sync works in both directions',
  '',
  '• Catch edge cases before production',
  '',
  '• Document expected behavior for the team',
  '',
  '• Validate CREATE, UPDATE, DELETE operations',
  '',
  '• Test bidirectional webhook triggers',
  '',
  '• Ensure data integrity throughout sync'
]);

// ===== SLIDE 7: Test Cases - CREATE =====
addContentSlide(pres, 'Test Case 1: CREATE', [
  'Scenario: New file added to Git',
  '',
  'Test Files:',
  '  • TEST_add-users-to-assets.md',
  '  • TEST_Create-a-Space.md',
  '  • TEST_CustomField.md',
  '',
  'Expected: New entries appear in CMS with correct metadata',
  '',
  'Validates: Git→CMS sync for new content'
]);

// ===== SLIDE 8: Test Cases - UPDATE =====
addContentSlide(pres, 'Test Case 2: UPDATE', [
  'Scenario: Existing file modified (title, metadata)',
  '',
  'Test Files:',
  '  • TEST_add-users-to-assets_1update.md',
  '  • TEST_Create-a-Space_1update.md',
  '  • TEST_CustomField_1update.md',
  '',
  'Expected: CMS entries updated with new metadata',
  '',
  'Validates: Git→CMS sync for modifications'
]);

// ===== SLIDE 9: Test Cases - DELETE =====
addContentSlide(pres, 'Test Case 3: DELETE', [
  'Scenario: File removed from Git',
  '',
  'Test Files:',
  '  • TEST_add-users-to-assets_1.md',
  '  • TEST_Create-a-Space_1.md',
  '  • TEST_CustomField_1.md',
  '',
  'Expected: CMS entries unpublished/removed',
  '',
  'Validates: Git→CMS sync for deletions'
]);

// ===== SLIDE 10: Test Cases - BATCH =====
addContentSlide(pres, 'Test Case 4: BATCH', [
  'Scenario: Multiple files created simultaneously',
  '',
  'Setup: All 9 test files across 3 content types',
  '  • cs-docs/assets (3 files)',
  '  • api-docs (3 files)',
  '  • sdk-docs (3 files)',
  '',
  'Expected: All 9 entries created without conflicts',
  '',
  'Validates: Concurrent multi-file sync capability'
]);

// ===== SLIDE 11: Test Cases - WEBHOOK =====
addContentSlide(pres, 'Test Case 5: WEBHOOK', [
  'Scenario: Publish entry directly in CMS',
  '',
  'Setup: Create entry in Contentstack, click Publish',
  '',
  'Expected: GitHub PR auto-created in docops repo',
  '  • New .md file added',
  '  • Frontmatter metadata populated',
  '',
  'Validates: CMS→Git sync via webhook trigger'
]);

// ===== SLIDE 12: Test Cases - UNPUBLISH =====
addContentSlide(pres, 'Test Case 6: UNPUBLISH', [
  'Scenario: Unpublish/delete entry in CMS',
  '',
  'Setup: Find test entry in CMS, unpublish it',
  '',
  'Expected: GitHub PR auto-created',
  '  • PR removes .md file from repo',
  '  • Commit message references deletion',
  '',
  'Validates: CMS deletion → Git sync'
]);

// ===== SLIDE 13: Live Demo Walkthrough =====
const slide13 = pres.addSlide();
slide13.background = { color: colors.white };

slide13.addShape(pres.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 10,
  h: 0.8,
  fill: { color: colors.black },
  line: { type: 'none' }
});

slide13.addText('Live Demo: 6 Steps', {
  x: 0.5,
  y: 0.15,
  w: 9,
  h: 0.5,
  fontSize: 36,
  bold: true,
  color: colors.purple
});

const demoSteps = [
  '1. Show test_gladys branch with 9 test files',
  '2. Run ./lint-before-push.sh → Linting passes ✅',
  '3. Show GitHub PR with all changes',
  '4. Review GitHub Actions workflow config',
  '5. Watch sync workflow execute in real-time',
  '6. Verify entries in Contentstack CMS'
];

yPos = 1.2;
demoSteps.forEach(step => {
  slide13.addText(step, {
    x: 0.8,
    y: yPos,
    w: 8.4,
    fontSize: 15,
    color: colors.darkGray
  });
  yPos += 0.55;
});

// ===== SLIDE 14: Key Benefits =====
const slide14 = pres.addSlide();
slide14.background = { color: colors.white };

slide14.addShape(pres.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 10,
  h: 0.8,
  fill: { color: colors.black },
  line: { type: 'none' }
});

slide14.addText('Key Benefits: Before vs. After', {
  x: 0.5,
  y: 0.15,
  w: 9,
  h: 0.5,
  fontSize: 36,
  bold: true,
  color: colors.purple
});

const benefits = [
  { before: 'Manual CMS entry', after: 'Auto-create via API' },
  { before: 'Risk of divergence', after: 'Single source (Git)' },
  { before: 'No CMS→Git sync', after: 'Webhook triggers PR' },
  { before: 'Lint errors in PR', after: 'Caught locally first' },
  { before: 'No test coverage', after: '8 test cases + checklist' }
];

yPos = 1.3;
benefits.forEach(item => {
  slide14.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: yPos,
    w: 4,
    h: 0.6,
    fill: { color: '#ffcccc' },
    line: { color: '#ff6b6b', width: 1 }
  });

  slide14.addText('❌ ' + item.before, {
    x: 0.7,
    y: yPos + 0.1,
    w: 3.6,
    h: 0.4,
    fontSize: 12,
    color: colors.darkGray
  });

  slide14.addShape(pres.ShapeType.rect, {
    x: 5.5,
    y: yPos,
    w: 4,
    h: 0.6,
    fill: { color: '#ccffcc' },
    line: { color: '#51cf66', width: 1 }
  });

  slide14.addText('✅ ' + item.after, {
    x: 5.7,
    y: yPos + 0.1,
    w: 3.6,
    h: 0.4,
    fontSize: 12,
    color: colors.darkGray
  });

  yPos += 0.7;
});

// ===== SLIDE 15: Developer Workflow =====
addContentSlide(pres, 'Team Workflow: Developers', [
  '1️⃣  Write or modify .md files in Git',
  '',
  '2️⃣  Run: ./lint-before-push.sh (catches errors locally)',
  '',
  '3️⃣  Fix any linting issues',
  '',
  '4️⃣  Create PR to main branch',
  '',
  '5️⃣  GitHub Actions auto-syncs to CMS',
  '',
  '✅ Done! No manual CMS entry needed'
]);

// ===== SLIDE 16: Technical Writer Workflow =====
addContentSlide(pres, 'Team Workflow: Technical Writers', [
  '1️⃣  Review synced entries in Contentstack CMS',
  '',
  '2️⃣  Refine content/metadata as needed',
  '',
  '3️⃣  Click Publish in CMS',
  '',
  '4️⃣  Webhook auto-creates GitHub PR',
  '',
  '5️⃣  Git PR reviewed and merged',
  '',
  '✅ Changes sync back to Git automatically'
]);

// ===== SLIDE 17: QA/Validation Workflow =====
addContentSlide(pres, 'Team Workflow: QA/Validation', [
  '1️⃣  Follow TEST-CASES.md checklist',
  '',
  '2️⃣  Verify all entries created in CMS',
  '',
  '3️⃣  Test bidirectional flow (both directions)',
  '',
  '4️⃣  Check data integrity (no duplicates, correct URLs)',
  '',
  '5️⃣  Report results or issues',
  '',
  '✅ Sign off when all tests pass'
]);

// ===== SLIDE 18: Post-Merge Validation =====
addContentSlide(pres, 'Post-Merge Validation Checklist', [
  '☐ All 9 entries created in CMS',
  '☐ Titles match file names correctly',
  '☐ URLs are unique and correct',
  '☐ Content body synced properly',
  '☐ Entry status is Draft (not published)',
  '☐ No duplicate entries',
  '☐ Metadata fields populated',
  '☐ All tests documented in TEST-CASES.md'
]);

// ===== SLIDE 19: Q&A =====
const slide19 = pres.addSlide();
slide19.background = { color: colors.black };

slide19.addText('Q&A: Common Questions', {
  x: 0.5,
  y: 0.4,
  w: 9,
  h: 0.6,
  fontSize: 40,
  bold: true,
  color: colors.purple,
  align: 'center'
});

const qa = [
  { q: 'Q: What if linting fails?', a: 'A: Developer fixes locally and pushes again.' },
  { q: 'Q: Can we roll back a sync?', a: 'A: Yes — delete CMS entry or Git file, next sync corrects it.' },
  { q: 'Q: What if both Git and CMS change?', a: 'A: We have reconciliation. Both directions can repair state.' },
  { q: 'Q: How often can we sync?', a: 'A: No limit. Each merge/publish triggers sync immediately.' }
];

yPos = 1.5;
qa.forEach(item => {
  slide19.addText(item.q, {
    x: 0.5,
    y: yPos,
    w: 9,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.purple
  });

  slide19.addText(item.a, {
    x: 0.7,
    y: yPos + 0.3,
    w: 8.8,
    h: 0.25,
    fontSize: 11,
    color: colors.white
  });

  yPos += 0.75;
});

// ===== SLIDE 20: Next Steps =====
const slide20 = pres.addSlide();
slide20.background = { color: colors.black };

slide20.addText('Next Steps', {
  x: 0.5,
  y: 1.2,
  w: 9,
  h: 0.6,
  fontSize: 44,
  bold: true,
  color: colors.purple,
  align: 'center'
});

const nextSteps = [
  '👨‍💻 Developers: Review LINT-WORKFLOW.md',
  '✍️  Technical Writers: Review TEST-CASES.md',
  '🧪 QA: Prepare validation environment',
  '👥 All: Attend validation walkthrough',
  '',
  '🚀 Ready to merge: test_gladys branch'
];

yPos = 2.1;
nextSteps.forEach(step => {
  slide20.addText(step, {
    x: 1,
    y: yPos,
    w: 8,
    h: 0.4,
    fontSize: 16,
    color: colors.white,
    align: 'center'
  });
  yPos += 0.45;
});

slide20.addText('Questions? Contact: Gladys Daniel', {
  x: 0.5,
  y: 5,
  w: 9,
  h: 0.3,
  fontSize: 12,
  color: colors.purple,
  align: 'center',
  italic: true
});

// Save presentation
pres.writeFile({ fileName: '/Users/gladys.daniel/Documents/docops/Bidirectional-Sync-Demo.pptx' });

console.log('✅ Presentation created: Bidirectional-Sync-Demo.pptx');
