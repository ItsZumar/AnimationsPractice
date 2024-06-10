module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // [
    //   'module-resolver',
    //   {
    //     root: ['.'],
    //     alias: {
    //       src: './src',
    //       components: './src/components',
    //       constants: './src/constants',
    //       theme: './src/theme',
    //     },
    //   },
    // ],
    'react-native-reanimated/plugin',
  ],
};
