/**
 * Safe field merging for Contentstack entries
 * Prevents data loss by only updating fields that have changed
 * Preserves all other fields from the existing entry
 */

export function mergeEntryFields(existingEntry, newFields) {
  if (!existingEntry) {
    return newFields;
  }

  const merged = { ...existingEntry };

  Object.entries(newFields).forEach(([key, newValue]) => {
    if (newValue !== undefined && newValue !== null && newValue !== '') {
      merged[key] = newValue;
    }
  });

  return merged;
}

export function extractWritableFields(entry, fieldWhitelist) {
  if (!fieldWhitelist || fieldWhitelist.length === 0) {
    return entry;
  }

  const extracted = {};
  fieldWhitelist.forEach(field => {
    if (field in entry) {
      extracted[field] = entry[field];
    }
  });

  return extracted;
}
