const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : true,
        timeout : 100000
    });
    const page = await browser.newPage();
    var baseurl = 'https://copytoon.com/%ED%8E%98%EB%A1%9C%EB%AA%AC-%ED%99%80%EB%A6%AD-';
    for(var num=1;num<=30;num++) {
        var url = baseurl + num +".html";
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.waitForSelector('.bottom-navbar', {
            display: 'none',
        });
        
        //var navbar = await page.$('.bottom-navbar');
        //navbar.style.display = 'none';
        
        await page.pdf({path: 'pheno' + '/title-' + num + '.pdf', format: 'A4'});    
        
        console.log(num + 'th... crawling test ... complete!!');
    }
    await browser.close();
})();