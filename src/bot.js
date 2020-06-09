var request = require('request');
var cheerio = require('cheerio');
exports.bot = function() {

    var url = 'https://www.bot.or.th/thai/_layouts/application/exchangerate/exchangerate.aspx';
    var json = [];

    return new Promise((resolve, reject) => {

        request(url, function(error, response, html){
            if(!error){
                var $ = cheerio.load(html);
                $('tr.bg-gray').filter(function(){
                    var row = $(this);
                    var country = row.find('td:nth-child(2)');
                    var currency = row.find('td:nth-child(3)');
                    var bill = row.find('td:nth-child(4)');
                    var transfer = row.find('td:nth-child(4)');
                    var sell = row.find('td:nth-child(5)');
                    country = country.first().text().trim();
                    currency = currency.first().text().trim();
                    bill = bill.first().text().trim();
                    transfer = transfer.first().text().trim();
                    sell = sell.first().text().trim();
                    console.log(country,currency,bill,transfer,sell);
    
                    var data = { country : country, currency : currency, bill : bill,transfer:transfer,sell:sell};
    
                    json.push(data);
                });
    
                // return json;
                resolve(json);
            }
        });
    }).catch(function(e){
        console.log(e); 
    });
    
   
    
}


