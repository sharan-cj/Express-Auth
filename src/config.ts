import env from 'env-var';

const vars = {
  PORT: env.get('PORT').required().asPortNumber(),
  PROD_DB_URL: env.get('PROD_DB_URL').required().asString(),
  DEV_DB_URL: env.get('DEV_DB_URL').required().asString(),
  LOCAL: env.get('LOCAL').required().asBool(),
};

export default vars;
