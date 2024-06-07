module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@screens': ['src/screens'],
          '@hooks': ['src/hooks'],
          '@constants': ['src/constants'],
          '@store': ['src/store'],
          '@navigation': ['src/navigation'],
          '@models': ['src/models'],
          '@styles': ['src/styles'],
        },
      },
    ],
  ],
};
