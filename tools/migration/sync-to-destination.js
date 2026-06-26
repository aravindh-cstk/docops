#!/usr/bin/env node

require('dotenv').config();
const logger = require('./utils/logger');

logger.info(`${process.env.npm_config_user_agent || 'Script'} - Phase 2 (Coming Soon)`);
logger.warn('This script is under development in Phase 2');
process.exit(1);
