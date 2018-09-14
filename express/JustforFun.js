// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path')
    ,   fs = require('fs');

// 미들웨어 불러오기
var bodyParser = require('body-parser')
    , static = require('serve-static')

// 익스프레스 객체 생성
var app = express();

// 속성 set
app.set('port', process.env.PORT || 3000);

// body-parser로 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false}));

// body-parser로 aaplication/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname,'public')));



// 미들웨어에서 헤더와 파라미터 확인
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id || req.query.id;
    //if(paramId == null && paramPassword == null) return;
    console.log("입력받은 id : " + paramId);
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); 
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>당신의 이름은 : ' + paramId + '입니다</p></div>');
    next();
});

app.use('/',function(req,res,next) {
    fs.readFile('Woojae.png',function(err,data) {
        res.write(data);
        res.end();
    });
})


// Express 서버 시작
http.createServer(app).listen(3000, function(){
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});