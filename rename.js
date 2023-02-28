const fs = require('fs'); //引入node内置的文件系统
const { resolve } = require('path') 

function rename() {
    if (fs.existsSync(resolve(__dirname, './dist'))){
        fs.rmdirSync(resolve(__dirname, './dist'));
    }
    fs.renameSync(resolve(__dirname, './build'), resolve(__dirname, './dist'));
}
rename();
