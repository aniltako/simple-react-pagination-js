var path = require('path');

module.exports = {
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'index.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'}
        ]
    }
}
