// Hook for managing state in URL search parameters

import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

type SetStateAction<T> = T | ((prev: T) => T);

export function useUrlState<T extends string | number | boolean | undefined>(
  key: string,
  defaultValue: T,
  parser?: {
    serialize: (value: T) => string;
    deserialize: (value: string) => T;
  }
): [T, (value: SetStateAction<T>) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = useMemo(() => {
    const paramValue = searchParams.get(key);
    
    if (paramValue === null) {
      return defaultValue;
    }
    
    if (parser) {
      return parser.deserialize(paramValue);
    }
    
    // Type-safe default parsing
    if (typeof defaultValue === 'boolean') {
      return (paramValue === 'true') as T;
    }
    
    if (typeof defaultValue === 'number') {
      const num = Number(paramValue);
      return (isNaN(num) ? defaultValue : num) as T;
    }
    
    return paramValue as T;
  }, [searchParams, key, defaultValue, parser]);

  const setValue = useCallback((newValue: SetStateAction<T>) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      
      const resolvedValue = typeof newValue === 'function' 
        ? (newValue as (prev: T) => T)(value)
        : newValue;
      
      if (resolvedValue === defaultValue || resolvedValue === '' || resolvedValue === undefined) {
        params.delete(key);
      } else {
        const serializedValue = parser
          ? parser.serialize(resolvedValue)
          : String(resolvedValue);
        params.set(key, serializedValue);
      }
      
      return params;
    }, { replace: true });
  }, [setSearchParams, key, value, defaultValue, parser]);

  return [value, setValue];
}

// Specialized hooks for common use cases
export function useUrlString(key: string, defaultValue = '') {
  return useUrlState(key, defaultValue);
}

export function useUrlNumber(key: string, defaultValue = 0) {
  return useUrlState(key, defaultValue);
}

export function useUrlBoolean(key: string, defaultValue = false) {
  return useUrlState(key, defaultValue);
}