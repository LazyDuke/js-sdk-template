module.exports = (() => {
  const presetEnvOptions = {
    modules: false
  }

  if (process.env.NODE_ENV === 'test') {
    Object.assign(presetEnvOptions, {
      modules: 'auto',
      targets: {
        node: 'current'
      }
    })
  }

  return {
    presets: [['@babel/preset-env', presetEnvOptions]],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      ['@babel/plugin-proposal-optional-chaining', { loose: true }]
    ]
  }
})()
