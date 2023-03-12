import { Expose } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, IsUppercase, Matches, ValidateIf } from 'class-validator';
import { STAGE } from 'config/enum';

/**
 * ! only used for direct validation, don't provide default value or derivation
 */
export class EnvironmentVariables {
  // * ========================================== application ==============================================
  @IsNotEmpty()
  @IsEnum(STAGE)
  @IsUppercase()
  @Expose()
  STAGE: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_LOCAL: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_TEST: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_QA: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_SANDBOX: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_PRODUCT: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_OFFLINE: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  IS_ONLINE: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Expose()
  SERVICE_PORT: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  SERVICE_NAME: string;

  // * ========================================== documentdb ==============================================
  @ValidateIf((obj: EnvironmentVariables) => obj.IS_OFFLINE)
  @IsNotEmpty()
  @Matches(/^mongodb.+/)
  @IsString()
  @Expose()
  OFFLINE_DOCUMENTDB_PRIMARY_URI: string;

  @ValidateIf((obj: EnvironmentVariables) => obj.IS_OFFLINE)
  @IsNotEmpty()
  @Matches(/^mongodb.+/)
  @IsString()
  @Expose()
  OFFLINE_DOCUMENTDB_SECONDARY_URI: string;

  @ValidateIf((obj: EnvironmentVariables) => obj.IS_ONLINE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  DOCUMENTDB_DBNAME: string;

  @ValidateIf((obj: EnvironmentVariables) => obj.IS_ONLINE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  DOCUMENTDB_ENDPOINT: string;

  @ValidateIf((obj: EnvironmentVariables) => obj.IS_ONLINE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  DOCUMENTDB_SECRETS_MANAGER_NAME: string;

  // * ========================================== dynamodb ==============================================
  @ValidateIf((obj: EnvironmentVariables) => obj.IS_OFFLINE)
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  OFFLINE_DYNAMODB_PORT: number;

  @ValidateIf((obj: EnvironmentVariables) => obj.IS_OFFLINE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  OFFLINE_DYNAMODB_ENDPOINT: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  DYNAMODB_ORGANIZATION_TABLE_NAME: string;
}
