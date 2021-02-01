// Add typescript definitions to variables in .env
declare module '@env' {
  export const IS_PROD: boolean;
  export const MY_VAR: string;
}
