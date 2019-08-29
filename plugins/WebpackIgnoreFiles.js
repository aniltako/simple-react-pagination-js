const chalk = require('chalk');

class WebpackIgnoreFiles {

  constructor(options){
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap('Ignore Files', compilation => {
      const options = this.options;
      compilation.chunks.forEach(function(chunk) {
        chunk.files.forEach(function(file) {
          // ignore files.
          if (options && options.files.includes(file)) {
            delete compilation.assets[file];
            console.log(chalk.green.bold('Ignore File', file));
          }
        });
      });
    });
  }
}

WebpackIgnoreFiles.defaultProps = {
  files: []
}

module.exports = WebpackIgnoreFiles;

