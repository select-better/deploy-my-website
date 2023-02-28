const fs = require('fs'); //引入node内置的文件系统

function rename() {
  fs.renameSync('./build', './dist')
}
rename();
