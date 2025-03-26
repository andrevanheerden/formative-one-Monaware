
export const loadData = (key, defaultValue = []) => {
    try {
      // Get the serialized data from localStorage
      const serializedData = localStorage.getItem(key);
      // If data exists, parse it from JSON; otherwise return defaultValue
      return serializedData ? JSON.parse(serializedData) : defaultValue;
    } catch (error) {
      console.error("Failed to load data:", error);
      return defaultValue;
    }
  };
  
  export const saveData = (key, data) => {
    try {
      // Convert data to JSON string and store in localStorage
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  //remove data 
  
  export const clearData = (key) => {
    try {
          // Remove the item with the specified key from localStorage
      localStorage.removeItem(key);
    } catch (error) {
        // Log any errors that occur during removal
      console.error("Failed to clear data:", error);
    }
  };