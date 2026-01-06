type ENV = 'dev' | 'prod' | 'demo'

export const currentEnv: ENV = "dev";

const env: ENV = currentEnv;

export const Env = env

const API_DEV_URL = "http://localhost:5000";
const API_DEMO_URL = "";
const API_PROD_URL = "";

export const APP_URL_DEV = "http://localhost:3000";
export const APP_URL_DEMO = "";
export const APP_URL_PROD = "";

function processApiUrl() {
  if (env === "prod") return API_PROD_URL;
  if (env === "demo") return API_DEMO_URL;
  return API_DEV_URL;
}

function processAppUrl() {
  if (env === "prod") return APP_URL_PROD;
  if (env === "demo") return APP_URL_DEMO;
  return APP_URL_DEV;
}

export const ApiBaseUrl = processApiUrl();
export const AppBaseUrl = processAppUrl();

export const GoogleApikey = "";