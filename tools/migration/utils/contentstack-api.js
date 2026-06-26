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

  _readHeaders() {
    const headers = { api_key: this.apiKey };
    if (this.managementToken) {
      // Management tokens use the authtoken header in Contentstack's CMA
      headers.authtoken = this.managementToken;
    }
    return headers;
  }

  _writeHeaders() {
    return {
      api_key: this.apiKey,
      authtoken: this.managementToken,
      'Content-Type': 'application/json',
    };
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

  // ── Source read methods ────────────────────────────────────────────────────

  async exportContentTypes() {
    logger.info('Fetching content types...');
    const all = [];
    let skip = 0;
    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/content_types?limit=100&skip=${skip}&include_count=true`, {
          headers: this._readHeaders(),
        })
      );
      const cts = response.data.content_types || [];
      all.push(...cts);
      if (all.length >= (response.data.count || 0) || cts.length === 0) break;
      skip += 100;
    }
    logger.success(`Fetched ${all.length} content types`);
    return all;
  }

  async exportEntries(contentTypeUid, limit = 100, skip = 0) {
    const response = await this.retryRequest(() =>
      axios.get(
        `${this.baseUrl}/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}&include_count=true`,
        { headers: this._readHeaders() }
      )
    );
    return {
      entries: response.data.entries || [],
      totalCount: response.data.count || 0,
    };
  }

  async exportAssets(limit = 100, skip = 0) {
    const response = await this.retryRequest(() =>
      axios.get(
        `${this.baseUrl}/assets?limit=${limit}&skip=${skip}&include_count=true`,
        { headers: this._readHeaders() }
      )
    );
    return {
      assets: response.data.assets || [],
      totalCount: response.data.count || 0,
    };
  }

  async exportGlobalFields() {
    logger.info('Fetching global fields...');
    const response = await this.retryRequest(() =>
      axios.get(`${this.baseUrl}/global_fields?limit=100`, {
        headers: this._readHeaders(),
      })
    );
    const gfs = response.data.global_fields || [];
    logger.success(`Fetched ${gfs.length} global fields`);
    return gfs;
  }

  // ── Destination read methods ───────────────────────────────────────────────

  async getContentTypes() {
    const all = [];
    let skip = 0;
    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/content_types?limit=100&skip=${skip}&include_count=true`, {
          headers: this._readHeaders(),
        })
      );
      const cts = response.data.content_types || [];
      all.push(...cts);
      if (all.length >= (response.data.count || 0) || cts.length === 0) break;
      skip += 100;
    }
    return all;
  }

  async getContentType(uid) {
    const response = await this.retryRequest(() =>
      axios.get(`${this.baseUrl}/content_types/${uid}`, {
        headers: this._readHeaders(),
      })
    );
    return response.data.content_type || null;
  }

  async getGlobalFields() {
    const response = await this.retryRequest(() =>
      axios.get(`${this.baseUrl}/global_fields?limit=100`, {
        headers: this._readHeaders(),
      })
    );
    return response.data.global_fields || [];
  }

  async getGlobalField(uid) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/global_fields/${uid}`, {
          headers: this._readHeaders(),
        })
      );
      return response.data.global_field || null;
    } catch (error) {
      if (error.response?.status === 404) return null;
      throw error;
    }
  }

  async getEntries(contentTypeUid, limit = 100, skip = 0) {
    const response = await this.retryRequest(() =>
      axios.get(
        `${this.baseUrl}/content_types/${contentTypeUid}/entries?limit=${limit}&skip=${skip}&include_count=true`,
        { headers: this._readHeaders() }
      )
    );
    return {
      entries: response.data.entries || [],
      totalCount: response.data.count || 0,
    };
  }

  // ── Destination write methods ──────────────────────────────────────────────

  async createContentType(schema) {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.baseUrl}/content_types`,
        { content_type: schema },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.content_type;
  }

  async updateContentType(uid, schema) {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.baseUrl}/content_types/${uid}`,
        { content_type: schema },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.content_type;
  }

  async deleteContentType(uid) {
    await this.retryRequest(() =>
      axios.delete(`${this.baseUrl}/content_types/${uid}`, {
        headers: this._writeHeaders(),
      })
    );
  }

  async createGlobalField(gf) {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.baseUrl}/global_fields`,
        { global_field: gf },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.global_field;
  }

  async updateGlobalField(uid, gf) {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.baseUrl}/global_fields/${uid}`,
        { global_field: gf },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.global_field;
  }

  async createEntry(contentTypeUid, entry, locale = 'en-us') {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.baseUrl}/content_types/${contentTypeUid}/entries?locale=${locale}`,
        { entry },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.entry;
  }

  async updateEntry(contentTypeUid, uid, entry, locale = 'en-us') {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.baseUrl}/content_types/${contentTypeUid}/entries/${uid}?locale=${locale}`,
        { entry },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.entry;
  }

  async upsertEntry(contentTypeUid, entry, isUpdate = false) {
    return isUpdate
      ? this.updateEntry(contentTypeUid, entry.uid, entry)
      : this.createEntry(contentTypeUid, entry);
  }

  async getStackInfo() {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.baseUrl}/stacks`, {
          headers: this._readHeaders(),
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
