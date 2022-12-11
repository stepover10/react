/* SSR */
export const processEnvApp = process.env.COMMUNITY_PROJECT_NODE_ENV;
export const processEnvWebHost = process.env.COMMUNITY_PROJECT_WEB_HOST;
export const processEnvApiURI = process.env.COMMUNITY_PROJECT_API_URI;

export const isTestEnvironment = (
  processEnvApp === 'development' || processEnvApp === 'development-qa'
);

export const isTestLocal = (
  processEnvApp === 'local'
);
