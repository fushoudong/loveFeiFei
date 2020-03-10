const autoprefixer = require('autoprefixer');
const cssnet = require('postcss-cssnext')
module.exports = {
    plugins: [
        autoprefixer({
            browsers: [' > 5%']
        }),
        cssnet
    ]
}