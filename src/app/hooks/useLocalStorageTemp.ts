import { useSyncExternalStore, useCallback } from "react";

export const useLocalStorageTemp = (key : string, initialValue : string) => {
  // Function to read the current value from localStorage
  const getSnapshot = useCallback(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  }, [key, initialValue])

  // Function for server-side rendering (optional)
  const getServerSnapshot = useCallback(() => initialValue, [initialValue]);

  // Subscribe to storage changes
  const subscribe = useCallback((callback : () => void) => {
    const onStorageChange = (event : StorageEvent) => {
      if (event.key === key) {
        callback()
      }
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, [key])

  // Hook for reading and updating localStorage
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (newValue : string) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      window.dispatchEvent(new Event("storage")) // Trigger storage event manually
    },
    [key]
  )

  return [value, setValue]
}