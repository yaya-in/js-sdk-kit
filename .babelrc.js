module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        "targets": "> 0.25%, not dead"
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        "helpers": true,
      }
    ],
    [ "@babel/plugin-proposal-class-properties" ],
    [ "@babel/plugin-proposal-object-rest-spread" ]
  ]
};
