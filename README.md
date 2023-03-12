
# Nest.js Config
- [Nest.js Config](#nestjs-config)
  - [The Environment Variable Loading Process](#the-environment-variable-loading-process)
  - [How to add environment variables?](#how-to-add-environment-variables)
    - [Local Environment](#local-environment)
    - [Testing Environment](#testing-environment)
    - [Online Environment](#online-environment)
  - [Reference](#reference)

## The Environment Variable Loading Process
- **compose step**: raw environment variables will be composed to provide some default value and generate multiple level of derivative env variables.
- **transform step**: env vars will be transformed to defined types automatically and undefined env variables will be stripped.
- **validation step**: loaded environment variables will be validated against the schema

## How to add environment variables?

### Local Environment
- add environment variables in `.env.local`
- add default values or derivatives in `config/compose.ts`
- add validation rules in `config/envs.ts`

### Testing Environment
If the env var already exist in `.env.local`
- override the value in `.env.test`

If the env var doesn't exist in `.env.local`
- do this same step in Local Environment
- override the value in `.env.test`

### Online Environment
Online Environments includes `DEV`, `QA`, `SANDBOX`, `PRODUCT`

If the env var already exist in `.env.local`
- override the var in online environment. e.g., set env in lambda function

If the env var doesn't exist in `.env.local`
- do the same step in Local Environment
- override the var in online environment. e.g., set env in lambda function


## Reference
- [Nest.js Configuration](https://docs.nestjs.com/techniques/configuration)