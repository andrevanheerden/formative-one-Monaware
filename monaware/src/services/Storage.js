// src/services/storage.js
export const loadData = (key, defaultValue = []) => {
    try {
      const serializedData = localStorage.getItem(key);
      return serializedData ? JSON.parse(serializedData) : defaultValue;
    } catch (error) {
      console.error("Failed to load data:", error);
      return defaultValue;
    }
  };
  
  export const saveData = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };
  
  export const clearData = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Failed to clear data:", error);
    }
  };