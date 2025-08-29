import * as SecureStore from 'expo-secure-store';

// Constants for token keys
export const TOKEN_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

/**
 * Securely saves a value to device secure storage
 * @param key - The key to store the value under
 * @param value - The value to store
 * @throws Error if storage operation fails
 */
export const saveToSecureStorage = async (
  key: string,
  value: string
): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    throw error;
  }
};

/**
 * Loads a value from device secure storage
 * @param key - The key to retrieve the value for
 * @returns The stored value or null if not found
 */
export const loadFromSecureStorage = async (
  key: string
): Promise<string | null> => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value || null;
  } catch (error) {
    if (typeof error === 'string') return error;
    return null;
  }
};

/**
 * Removes a specific item from secure storage
 * @param key - The key to remove
 * @returns null on success or error string on failure
 */
export const removeFromSecureStorage = async (
  key: string
): Promise<string | null> => {
  try {
    await SecureStore.deleteItemAsync(key);
    return null;
  } catch (error) {
    if (typeof error === 'string') return error;
    return null;
  }
};

/**
 * Saves authentication tokens to secure storage
 * @param accessToken - The access token to store
 * @param refreshToken - The refresh token to store
 */
export const saveAuthTokens = async (
  accessToken: string,
  refreshToken: string
): Promise<void> => {
  await Promise.all([
    saveToSecureStorage(TOKEN_KEYS.ACCESS_TOKEN, accessToken),
    saveToSecureStorage(TOKEN_KEYS.REFRESH_TOKEN, refreshToken),
  ]);
};

/**
 * Loads the access token from secure storage
 * @returns The access token or null if not found
 */
export const loadAccessToken = async (): Promise<string | null> => {
  return loadFromSecureStorage(TOKEN_KEYS.ACCESS_TOKEN);
};

/**
 * Loads the refresh token from secure storage
 * @returns The refresh token or null if not found
 */
export const loadRefreshToken = async (): Promise<string | null> => {
  return loadFromSecureStorage(TOKEN_KEYS.REFRESH_TOKEN);
};

/**
 * Clears all authentication tokens from secure storage
 * @returns null on success or error string on failure
 */
export const clearAuthTokens = async (): Promise<string | null> => {
  try {
    await Promise.all([
      SecureStore.deleteItemAsync(TOKEN_KEYS.ACCESS_TOKEN),
      SecureStore.deleteItemAsync(TOKEN_KEYS.REFRESH_TOKEN),
    ]);
    return null;
  } catch (error) {
    if (typeof error === 'string') return error;
    return null;
  }
};
