const chalk = require('chalk');

class Logger {
  constructor(level = 'info') {
    this.level = level;
    this.levels = { error: 0, warn: 1, info: 2, debug: 3 };
  }

  error(message) {
    if (this.levels[this.level] >= this.levels.error) {
      console.log(chalk.red(`❌ ERROR: ${message}`));
    }
  }

  warn(message) {
    if (this.levels[this.level] >= this.levels.warn) {
      console.log(chalk.yellow(`⚠️  WARN: ${message}`));
    }
  }

  info(message) {
    if (this.levels[this.level] >= this.levels.info) {
      console.log(chalk.blue(`ℹ️  INFO: ${message}`));
    }
  }

  success(message) {
    console.log(chalk.green(`✅ ${message}`));
  }

  debug(message) {
    if (this.levels[this.level] >= this.levels.debug) {
      console.log(chalk.gray(`🔧 DEBUG: ${message}`));
    }
  }

  separator() {
    console.log(chalk.gray('─'.repeat(60)));
  }
}

module.exports = new Logger(process.env.LOG_LEVEL || 'info');
