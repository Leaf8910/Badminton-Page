import * as cheerio from 'cheerio';
import fetch from 'node-fetch';




async function getHeadlines() {
    try {
        
        const response = await fetch('https://borneobulletin.com.bn/?s=badminton');
        const body = await response.text();
        const $ = cheerio.load(body);
        
        const items = []; //-n + 4 for the first five nth children
        $('#tdi_85 > div:nth-child(-n + 4) > div > div.td-module-meta-info').map((i, el) => {
            const rank = $(el).find('a').text();
            console.log(rank.slice(6,70));
            const date = $(el).find('time').text();
            console.log(date);
            const href = $(el).find('h3 > a').attr('href');
            console.log(href);
            //Cant get background img cause of url inline
            // const img = $(el).find(' a > span').attr('style > background-image');
            // console.log(img)
            
        });

        
    } catch (error) {
        console.log(error)
    }
}

getHeadlines()