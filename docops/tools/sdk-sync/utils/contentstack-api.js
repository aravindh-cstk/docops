const axios = require('axios');
const logger = require('./logger');
const userIndex = require('../cms-user-index.json');

class ContentstackAPI {
  /**
   * @param {string} apiKey       Stack API key
   * @param {object} [auth]       { deliveryToken } for read-only CDA, or { managementToken } for CMA
   * @param {string} [region]     'us' (default) | 'eu' | 'azure-na'
   */
  constructor(apiKey, auth = {}, region = 'us') {
    this.apiKey = apiKey;
    this.deliveryToken = auth.deliveryToken || null;
    this.managementToken = auth.managementToken || null;
    this.maxRetries = parseInt(process.env.MAX_RETRIES || 3);

    const regionHosts = {
      us: 'https://api.contentstack.io',
      eu: 'https://eu-api.contentstack.com',
      'azure-na': 'https://azure-na-api.contentstack.com',
    };
    // CDA has a different host from CMA; for reading production we use cdn.contentstack.io
    this.cdaBaseUrl = `https://cdn.contentstack.io/v3`;
    this.cmaBaseUrl = `${regionHosts[region] || regionHosts.us}/v3`;
  }

  _readHeaders() {
    const headers = { api_key: this.apiKey };
    if (this.deliveryToken) {
      headers.access_token = this.deliveryToken;
    } else if (this.managementToken) {
      headers.authorization = this.managementToken;
    }
    return headers;
  }

  _writeHeaders() {
    return {
      api_key: this.apiKey,
      authorization: this.managementToken,
      'Content-Type': 'application/json',
    };
  }

  // Picks CDA base URL when a delivery token is present, otherwise CMA
  get _readBaseUrl() {
    return this.deliveryToken ? this.cdaBaseUrl : this.cmaBaseUrl;
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

  // ── Read methods (work on both CDA and CMA stacks) ─────────────────────────

  async exportContentTypes() {
    logger.info('Fetching content types...');
    const all = [];
    let skip = 0;
    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(`${this._readBaseUrl}/content_types?limit=100&skip=${skip}&include_count=true`, {
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

  async exportGlobalFields() {
    logger.info('Fetching global fields...');
    const response = await this.retryRequest(() =>
      axios.get(`${this._readBaseUrl}/global_fields?limit=100`, {
        headers: this._readHeaders(),
      })
    );
    const gfs = response.data.global_fields || [];
    logger.success(`Fetched ${gfs.length} global fields`);
    return gfs;
  }

  async getContentType(uid) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.cmaBaseUrl}/content_types/${uid}`, {
          headers: this._readHeaders(),
        })
      );
      return response.data.content_type || null;
    } catch (error) {
      // CMA returns 422 with error_code 118 for "not found" (not 404)
      if (error.response?.status === 404 || error.response?.status === 422) return null;
      throw error;
    }
  }

  async getGlobalField(uid) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.cmaBaseUrl}/global_fields/${uid}`, {
          headers: this._readHeaders(),
        })
      );
      return response.data.global_field || null;
    } catch (error) {
      // CMA returns 422 with error_code 118 for "not found" (not 404)
      if (error.response?.status === 404 || error.response?.status === 422) return null;
      throw error;
    }
  }

  async getContentTypes() {
    const all = [];
    let skip = 0;
    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(`${this.cmaBaseUrl}/content_types?limit=100&skip=${skip}&include_count=true`, {
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

  async getGlobalFields() {
    const response = await this.retryRequest(() =>
      axios.get(`${this.cmaBaseUrl}/global_fields?limit=100`, {
        headers: this._readHeaders(),
      })
    );
    return response.data.global_fields || [];
  }

  // ── Write methods (CMA only — require managementToken) ─────────────────────

  async createContentType(schema) {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.cmaBaseUrl}/content_types`,
        { content_type: schema },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.content_type;
  }

  async updateContentType(uid, schema) {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.cmaBaseUrl}/content_types/${uid}`,
        { content_type: schema },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.content_type;
  }

  async createGlobalField(gf) {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.cmaBaseUrl}/global_fields`,
        { global_field: gf },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.global_field;
  }

  async updateGlobalField(uid, gf) {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.cmaBaseUrl}/global_fields/${uid}`,
        { global_field: gf },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.global_field;
  }

  // ── Entry methods (CMA only) ────────────────────────────────────────────────

  async createEntry(ctUid, entry) {
    const response = await this.retryRequest(() =>
      axios.post(
        `${this.cmaBaseUrl}/content_types/${ctUid}/entries`,
        { entry },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.entry;
  }

  async updateEntry(ctUid, uid, entry) {
    const response = await this.retryRequest(() =>
      axios.put(
        `${this.cmaBaseUrl}/content_types/${ctUid}/entries/${uid}`,
        { entry },
        { headers: this._writeHeaders() }
      )
    );
    return response.data.entry;
  }

  // Fetch a single entry by uid — returns null if it no longer exists
  async getEntry(ctUid, uid) {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.cmaBaseUrl}/content_types/${ctUid}/entries/${uid}`, {
          headers: this._readHeaders(),
        })
      );
      return response.data.entry || null;
    } catch (error) {
      // CMA returns 422 with error_code 118 for "not found" (not 404)
      if (error.response?.status === 404 || error.response?.status === 422) return null;
      throw error;
    }
  }

  // Query entries by a JSON filter — returns { entries: [...] }
  async queryEntries(ctUid, query, limit = 1) {
    const q = encodeURIComponent(JSON.stringify(query));
    const response = await this.retryRequest(() =>
      axios.get(
        `${this.cmaBaseUrl}/content_types/${ctUid}/entries?query=${q}&limit=${limit}`,
        { headers: this._readHeaders() }
      )
    );
    return { entries: response.data.entries || [] };
  }

  // List entries updated since a given ISO timestamp (for CMS → GitHub pull)
  async listRecentEntries(ctUid, sinceIso) {
    const all = [];
    let skip = 0;
    const query = encodeURIComponent(JSON.stringify({ updated_at: { $gt: sinceIso } }));

    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(
          `${this.cmaBaseUrl}/content_types/${ctUid}/entries?query=${query}&limit=100&skip=${skip}&include_count=true`,
          { headers: this._readHeaders() }
        )
      );
      const entries = response.data.entries || [];
      all.push(...entries);
      if (all.length >= (response.data.count || 0) || entries.length === 0) break;
      skip += 100;
    }
    return all;
  }

  // Resolve a user UID to a display name via a locally-maintained index.
  // The CMA has no endpoint to resolve an arbitrary user UID with a stack
  // management token — only an org-level authtoken can, which this integration
  // doesn't have — so unknown UIDs fall back to a clearly-labeled raw UID
  // rather than silently displaying it as if it were a resolved name.
  getUserName(userUid) {
    return userIndex[userUid] || `Contentstack user ${userUid}`;
  }

  // List all entries (paginated) for a content type — used for deletion sweep
  async getAllEntries(ctUid) {
    const all = [];
    let skip = 0;
    while (true) {
      const response = await this.retryRequest(() =>
        axios.get(
          `${this.cmaBaseUrl}/content_types/${ctUid}/entries?limit=100&skip=${skip}&include_count=true`,
          { headers: this._readHeaders() }
        )
      );
      const entries = response.data.entries || [];
      all.push(...entries);
      if (all.length >= (response.data.count || 0) || entries.length === 0) break;
      skip += 100;
    }
    return all;
  }

  // Unpublish an entry from all environments (saves as draft)
  async unpublishEntry(ctUid, uid) {
    await this.retryRequest(() =>
      axios.post(
        `${this.cmaBaseUrl}/content_types/${ctUid}/entries/${uid}/unpublish`,
        { entry: { environments: [], locale: 'en-us' }, locale: 'en-us' },
        { headers: this._writeHeaders() }
      )
    );
  }
}

module.exports = ContentstackAPI;
