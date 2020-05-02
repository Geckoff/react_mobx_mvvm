# React+MobX=MVVM Presentation

Presentation slides: https://docs.google.com/presentation/d/1nJlYthh6VGsCr3n5EF9lC5-_nBKHtWM8KMoCRY3aCSA/edit?usp=sharing

How to setup decorators with Create React App:

1. **Update jsonconfig.js:**
   ```
   {
      "compilerOptions": {
         "experimentalDecorators": true
      }
   }
   ```

2. **Install craco - Create React App Config Override:**<br>
   ```npm install @craco/craco```

3. **Install decorators plugin for Babel:**<br>
   ```npm install --save-dev @babel/plugin-proposal-decorators```

4. **Update craco.config.js:**
   ```
   module.exports = {
      babel: {
         plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
         ]
      }
   };
   ```

5. **Update package.json:**<br>
   Replace **react-scripts** with **craco** for start, build, etc. commands
