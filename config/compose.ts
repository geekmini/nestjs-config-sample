import { STAGE as STAGE_ENUM } from 'config/enum';
import { defaultTo } from 'lodash';

/**
 *
 * @param rawEnv all env variables from env file and runtime
 * @returns ens with default value and derivative values
 */
export const compose = (rawEnv: Record<string, unknown>): Record<string, unknown> => {
  // default value
  const STAGE = defaultTo(rawEnv.STAGE, STAGE_ENUM.LOCAL);
  const SERVICE_PORT = defaultTo(rawEnv.SERVICE_PORT, 3000);
  const SERVICE_NAME = defaultTo(rawEnv.SERVICE_NAME, 'USER_SERVICE');

  // derivatives level 1
  const IS_LOCAL = rawEnv.STAGE === STAGE_ENUM.LOCAL;
  const IS_TEST = rawEnv.STAGE === STAGE_ENUM.TEST;
  const IS_QA = rawEnv.STAGE === STAGE_ENUM.QA;
  const IS_SANDBOX = rawEnv.STAGE === STAGE_ENUM.SANDBOX;
  const IS_PRODUCT = rawEnv.STAGE === STAGE_ENUM.PRODUCT;

  // derivatives level 2
  const IS_OFFLINE = IS_LOCAL || IS_TEST;
  const IS_ONLINE = IS_QA || IS_SANDBOX || IS_PRODUCT;

  return {
    ...rawEnv,
    STAGE,
    SERVICE_PORT,
    SERVICE_NAME,
    IS_LOCAL,
    IS_TEST,
    IS_QA,
    IS_SANDBOX,
    IS_PRODUCT,
    IS_OFFLINE,
    IS_ONLINE,
  };
};
