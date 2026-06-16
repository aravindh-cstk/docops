const fs = require('fs');
const path = require('path');

// Get all .md files recursively
const getAllMdFiles = (dir) => {
  let results = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(getAllMdFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  
  return results;
};

// Process each markdown file
const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by lines for easier processing
  const lines = content.split('\n');
  
  if (lines[0] !== '---') {
    return false; // No front matter
  }
  
  // Find the first closing ---
  let firstEnd = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      firstEnd = i;
      break;
    }
  }
  
  if (firstEnd === -1) {
    return false; // No closing --- found
  }
  
  // Check if there's a second --- block starting
  let secondStart = -1;
  for (let i = firstEnd + 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      secondStart = i;
      break;
    }
    if (lines[i].trim() !== '') {
      // If we hit non-empty content before another ---, there's no second block
      return false;
    }
  }
  
  if (secondStart === -1) {
    return false; // No second --- found
  }
  
  // Find the end of the second front matter block
  let secondEnd = -1;
  for (let i = secondStart + 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      secondEnd = i;
      break;
    }
  }
  
  if (secondEnd === -1) {
    return false; // Second block not closed
  }
  
  // Reconstruct the file with only the second front matter block
  const newContent = lines.slice(secondStart, secondEnd + 1).join('\n') + '\n' + lines.slice(secondEnd + 1).join('\n');
  fs.writeFileSync(filePath, newContent, 'utf-8');
  return true;
};

const baseDir = '/Users/gladys.daniel/Documents/docops/cs-docs/cs-docs';
const mdFiles = getAllMdFiles(baseDir);

console.log(`Found ${mdFiles.length} markdown files`);

let processedCount = 0;
mdFiles.forEach((file, index) => {
  if (processFile(file)) {
    processedCount++;
  }
  if ((index + 1) % 100 === 0) {
    console.log(`Processed ${index + 1}/${mdFiles.length} files...`);
  }
});

console.log(`✓ Completed! Cleaned ${processedCount} files out of ${mdFiles.length}`);
