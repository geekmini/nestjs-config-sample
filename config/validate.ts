import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvironmentVariables } from 'config/envs';
import { compose } from 'config/compose';

// derivate, transform and validate
export const validate = (rawEnv: Record<string, unknown>): Record<keyof EnvironmentVariables, any> => {
  // generate default value and derivation
  const config = compose(rawEnv);

  // transform
  // * transform to defined type automatically
  // * exclude unnecessary values for memory
  const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true, excludeExtraneousValues: true });

  // validate
  const errors = validateSync(validatedConfig, { enableDebugMessages: true });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
