const { resolve } = require('path');
const dir = resolve(__dirname, '../');

module.exports.PATH = {
    dir,
    src: `${dir}/src`,
    assets: `${dir}/src/assets`,
    output: `${dir}/build`
}