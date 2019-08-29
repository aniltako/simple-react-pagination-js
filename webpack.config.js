var path = require('path');

module.exports = {
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: '[name].js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'}
        ]
    }
}
