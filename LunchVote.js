var http = require('http');
var express = require('express');
var puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();
    
    await page.goto('https://www.hanyang.ac.kr/web/www/re4');
    var result = await page.evaluate(() => {
        let lunchmenu = document.querySelector('.thumbnails').innerText;
    return {
        lunchmenu
    }
    });
    browser.close();
    return result;
};

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
	
    
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Response from express Server.</h1>');
    
    scrape().then((value) => {
        console.log(value);
        res.write('<h2> 마루/채움 </h2>');
        res.write(JSON.stringify(value));
        res.end();
    })
    console.log('end of function..');
});

http.createServer(app).listen(3000, function(){
  console.log('Starting Express Server on port 3000...');
});

/*scrape().then((value) => {
    console.log(value);
})*/