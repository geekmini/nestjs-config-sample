import { ConfigModuleOptions } from '@nestjs/config';
import { validate } from 'config/validate';

export const ConfigModuleOption: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env.local', // priority: .env.local > runtime env
  validate, // validate happens before load (below)
  // load: () => {}, // ! don't use this load function cause we don't need env grouping feature
};

export const ConfigModuleOptionForTestingEnv: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env.test', '.env.local'], // priority: .env.test > .env.local > runtime env
  validate, // validate happens before load (below)
  // load: () => {}, // ! don't use this load function cause we don't need env grouping feature
};
