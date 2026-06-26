const axios = require('axios');
const logger = require('./logger');

class ContentstackAPI {
  constructor(apiKey, managementToken = null, region = 'us') {
    this.apiKey = apiKey;
    this.managementToken = managementToken;
    this.region = region;
    this.baseUrl = `https://api.contentstack.io/v3`;
    this.maxRetries = parseInt(process.env.MAX_RETRIES || 3);
  }

  async retryRequest(fn, retries = this.maxRetries) {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0 && error.response?.status >= 500) {
        logger.warn(`Request failed, retrying... (${this.maxRetries - retries + 1}/${this.maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.retryRequest(fn, retries - 1);
      }
      throw error;
    }
  }

  async exportContentTypes() {
    logger.info('Fetching content types from source stack...');
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/content_types?limit=100`, {
          headers: { api_key: this.apiKey }
        })
      );
      const contentTypes = response.data.content_types || [];
      logger.success(`Fetched ${contentTypes.length} content types`);
      return contentTypes;
    } catch (error) {
      logger.error(`Failed to export content types: ${error.message}`);
      throw error;
    }
  }

  async exportEntries(contentTypeUid, limit = 100, skip = 0) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(
          `${this.baseUrl}/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}&include_count=true`,
          { headers: { api_key: this.apiKey } }
        )
      );
      return {
        entries: response.data.entries || [],
        count: response.data.entries ? response.data.entries.length : 0,
        totalCount: response.data.count || 0
      };
    } catch (error) {
      logger.error(`Failed to export entries for ${contentTypeUid}: ${error.message}`);
      throw error;
    }
  }

  async exportAssets(limit = 100, skip = 0) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(
          `${this.baseUrl}/assets?limit=${limit}&skip=${skip}&include_count=true`,
          { headers: { api_key: this.apiKey } }
        )
      );
      return {
        assets: response.data.assets || [],
        count: response.data.assets ? response.data.assets.length : 0,
        totalCount: response.data.count || 0
      };
    } catch (error) {
      logger.error(`Failed to export assets: ${error.message}`);
      throw error;
    }
  }

  async exportGlobalFields() {
    logger.info('Fetching global fields from source stack...');
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/global_fields?limit=100`, {
          headers: { api_key: this.apiKey }
        })
      );
      const globalFields = response.data.global_fields || [];
      logger.success(`Fetched ${globalFields.length} global fields`);
      return globalFields;
    } catch (error) {
      logger.error(`Failed to export global fields: ${error.message}`);
      throw error;
    }
  }

  async upsertEntry(contentTypeUid, entry, isUpdate = false) {
    const method = isUpdate ? 'PUT' : 'POST';
    const url = isUpdate 
      ? `${this.baseUrl}/content_types/${contentTypeUid}/entries/${entry.uid}`
      : `${this.baseUrl}/content_types/${contentTypeUid}/entries`;

    try {
      const response = await this.retryRequest(() =>
        axios({
          method,
          url,
          headers: {
            api_key: this.apiKey,
            authtoken: this.managementToken,
            'Content-Type': 'application/json'
          },
          data: { entry }
        })
      );
      return response.data.entry;
    } catch (error) {
      logger.error(`Failed to upsert entry: ${error.message}`);
      throw error;
    }
  }

  async getStackInfo() {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/stacks`, {
          headers: { api_key: this.apiKey }
        })
      );
      return response.data.stack || {};
    } catch (error) {
      logger.error(`Failed to get stack info: ${error.message}`);
      throw error;
    }
  }
}

module.exports = ContentstackAPI;
