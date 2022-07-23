import env from 'env-var';

const vars = {
  PORT: env.get('PORT').required().asPortNumber(),
};

export default vars;
