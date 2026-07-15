#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const ContentstackAPI = require('./utils/contentstack-api');
const logger = require('./utils/logger');

const sourceApi = new ContentstackAPI(
  process.env.SOURCE_STACK_API_KEY,
  process.env.SOURCE_STACK_MANAGEMENT_TOKEN,
  process.env.SOURCE_STACK_REGION
);

async function exportStack() {
  try {
    logger.separator();
    logger.info('🚀 Starting Contentstack Stack Export...');
    logger.info(`Source Stack: ${process.env.SOURCE_STACK_API_KEY}`);
    logger.info(`Region: ${process.env.SOURCE_STACK_REGION}`);
    logger.separator();

    // Create export directory
    const exportDir = path.join(
      process.env.EXPORT_DIR || './exports',
      new Date().toISOString().split('T')[0]
    );
    
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
      logger.success(`Created export directory: ${exportDir}`);
    }

    const stats = {
      contentTypes: 0,
      entries: 0,
      assets: 0,
      globalFields: 0,
      startTime: Date.now()
    };

    // Export Content Types
    logger.info('\n📦 Exporting Content Types...');
    const contentTypes = await sourceApi.exportContentTypes();
    stats.contentTypes = contentTypes.length;
    fs.writeFileSync(
      path.join(exportDir, 'content-types.json'),
      JSON.stringify(contentTypes, null, 2)
    );
    logger.success(`Exported ${contentTypes.length} content types`);

    // Export Entries
    logger.info('\n📄 Exporting Entries...');
    const allEntries = {};
    for (const ct of contentTypes) {
      let skip = 0;
      let totalFetched = 0;
      allEntries[ct.uid] = [];

      while (true) {
        const { entries, totalCount } = await sourceApi.exportEntries(ct.uid, 100, skip);

        if (entries.length === 0) break;

        allEntries[ct.uid].push(...entries);
        totalFetched += entries.length;
        
        logger.debug(`  ${ct.uid}: fetched ${totalFetched}/${totalCount}`);
        
        if (totalFetched >= totalCount) break;
        skip += 100;
      }
      
      stats.entries += allEntries[ct.uid].length;
      logger.info(`  ✓ ${ct.uid}: ${allEntries[ct.uid].length} entries`);
    }
    
    fs.writeFileSync(
      path.join(exportDir, 'entries.json'),
      JSON.stringify(allEntries, null, 2)
    );
    logger.success(`Exported total ${stats.entries} entries`);

    // Export Global Fields
    logger.info('\n🌐 Exporting Global Fields...');
    const globalFields = await sourceApi.exportGlobalFields();
    stats.globalFields = globalFields.length;
    fs.writeFileSync(
      path.join(exportDir, 'global-fields.json'),
      JSON.stringify(globalFields, null, 2)
    );
    logger.success(`Exported ${globalFields.length} global fields`);

    // Export Assets
    logger.info('\n🖼️  Exporting Assets...');
    const allAssets = [];
    let skip = 0;
    
    while (true) {
      const { assets, count } = await sourceApi.exportAssets(100, skip);
      if (assets.length === 0) break;
      allAssets.push(...assets);
      stats.assets += assets.length;
      logger.debug(`  Fetched ${allAssets.length} assets...`);
      if (count < 100) break;
      skip += 100;
    }
    
    fs.writeFileSync(
      path.join(exportDir, 'assets.json'),
      JSON.stringify(allAssets, null, 2)
    );
    logger.success(`Exported ${stats.assets} assets`);

    // Save summary
    const duration = ((Date.now() - stats.startTime) / 1000).toFixed(2);
    fs.writeFileSync(
      path.join(exportDir, 'summary.json'),
      JSON.stringify({ ...stats, duration: `${duration}s` }, null, 2)
    );

    // Print summary
    logger.separator();
    logger.success('\n✨ Export Complete!');
    logger.info(`\n📊 Summary:`);
    logger.info(`   Content Types: ${stats.contentTypes}`);
    logger.info(`   Entries: ${stats.entries}`);
    logger.info(`   Global Fields: ${stats.globalFields}`);
    logger.info(`   Assets: ${stats.assets}`);
    logger.info(`   Duration: ${duration}s`);
    logger.info(`\n📁 Files saved to: ${exportDir}\n`);
    logger.separator();

    process.exit(0);

  } catch (error) {
    logger.error(`\n❌ Export failed: ${error.message}`);
    if (error.response?.data) {
      logger.error(`Response: ${JSON.stringify(error.response.data, null, 2)}`);
    }
    process.exit(1);
  }
}

exportStack();
