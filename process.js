//console.log('argv number of parameter : ' + process.argv.length);
//console.dir(process.argv);
//if( process.argv.length > 2) {
//    console.log('Third parameter : %s', process.argv[2]);
//}
//
//process.argv.forEach(function(item,index) {
//    console.log(index + ' : ', item);
//});


//var os = require('os');
//
//console.log('System Hostname : %s',os.hostname());
//console.log('System Memory : %d / %d', os.freemem(),os.totalmem());
//console.log('System CPU Info : \n');
//console.dir(os.cpus());
//console.log('System Network Interface Info : \n');
//console.dir(os.networkInterfaces());

var path = require('path');

// 디렉터리 이름 합치기
var directories = ["users","mike","docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);

// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('File path : %s',curPath);