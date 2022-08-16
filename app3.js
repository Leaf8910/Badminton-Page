import * as cheerio from 'cheerio';
import fetch from 'node-fetch';


let newsCard1 = document.querySelector('.news-cards1');

async function getHeadlines() {
    try {
        
        const response = await fetch('https://borneobulletin.com.bn/?s=badminton');
        const body = await response.text();
        const $ = cheerio.load(body);
        
        const items = [];
        $('#tdi_85 > div:nth-child(1) > div > div.td-module-meta-info').map((i, el) => {

            const rank = $(el).find('a').text();
            console.log(rank.slice(6,70));
            const date = $(el).find('time').text();
            console.log(date);
            newsCard1.innerHTML = rank.slice(6, 70);
        });
        
        const items2 = [];
        $('#tdi_85 > div:nth-child(2) > div > div.td-module-meta-info').map((i, el) => {

            const rank = $(el).find('div.td-module-meta-info > h3 > a').text();
            console.log(rank);
            const date = $(el).find('time').text();
            console.log(date);

        }); 

        const items3 = [];
        $('#tdi_85 > div:nth-child(3) > div > div.td-module-meta-info').map((i, el) => {

            const rank = $(el).find('a').text();
            console.log(rank.slice(6,70));
            const date = $(el).find('time').text();
            console.log(date);
            

        });

        
    } catch (error) {
        console.log(Err)
    }
}

getHeadlines()