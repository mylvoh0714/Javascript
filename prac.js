const request = require('request');
const cheerio = require('cheerio');

const url = "https://www.hanyang.ac.kr/web/www/re4?p_p_id=foodView_WAR_foodportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_foodView_WAR_foodportlet_sFoodDateDay=12&_foodView_WAR_foodportlet_sFoodDateYear=2018&_foodView_WAR_foodportlet_action=view&_foodView_WAR_foodportlet_sFoodDateMonth=8";

request(url, (error,response,body) => {
    if(error) throw error;
    let $ = cheerio.load(body);
    
    
});