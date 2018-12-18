module.exports = {
  apps : [{
    name: 'ptut2018',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run start:production',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    staging : {
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
