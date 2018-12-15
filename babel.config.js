module.exports = {
  presets: [
    ['@babel/env', {
      loose: true,
      useBuiltIns: 'usage',
    }],
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/proposal-pipeline-operator', {
      proposal: 'minimal',
    }],
  ],
};
