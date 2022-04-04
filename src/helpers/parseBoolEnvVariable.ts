export const parseBoolEnvVariable = (value: string | undefined, defaultValue: boolean): boolean => {
  if (value === undefined) {
    return defaultValue;
  }

  if (typeof value === 'string') {
    return value === 'true';
  }
  throw new Error('Env variable needs to be of value "true", "false" or empty');
};
