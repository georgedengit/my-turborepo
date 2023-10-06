/**
 * Type to grab all values of an object type. Also useful for converting as const objects as types.
 *
 * @example
    const LOG_LEVEL = {
      DEBUG: 'debug',
      WARNING: 'warning',
      ERROR: 'error',
    } as const;

    type LogValues = ObjectValues<typeof LOG_LEVEL>;
    // type LogValues = "debug" | "warning" | "error"
 */
export type ObjectValues<T extends Record<keyof T, unknown>> = T[keyof T];
