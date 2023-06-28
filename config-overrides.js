const os = require('os-browserify/browser');
const crypto = require('crypto-browserify');

module.exports = function override(config, env) {
  // Add fallbacks for 'os' and 'crypto' modules
  config.resolve.fallback = {
    os,
    crypto,
  };

  return config;
};
