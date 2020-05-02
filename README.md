# react_mobx_mvvm

React+MobX=MVVM Presentation

Presentation slides: https://docs.google.com/presentation/d/1nJlYthh6VGsCr3n5EF9lC5-_nBKHtWM8KMoCRY3aCSA/edit?usp=sharing

How to setup decorators with Create React App:

1. jsonconfig.js
   {
   "compilerOptions": {
   "experimentalDecorators": true
   }
   }
   The above removes errors from vs code.

2. Install craco - Create React App Config Override
   npm install @craco/craco

3. npm install --save-dev @babel/plugin-proposal-decorators

4. craco.config.js
   module.exports = {
   babel: {
   plugins: [
   ["@babel/plugin-proposal-decorators", { legacy: true }],
   ["@babel/plugin-proposal-class-properties", { loose: true }]
   ]
   }
   };
   The above make decorators work when app is started with craco.

5. package.json
   Replace react-scripts with craco in start, build, etc. commands
