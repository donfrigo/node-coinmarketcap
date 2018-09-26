const cmc = require('../cmc/cmc.js');

module.exports = function (app) {

    // first end point
    app.post('/ticker',async (req, res) => {

     let body = req.body;
     let maximumRank = 1000;
     let defaultAmount = 100;
     let range = {start: 0, end: defaultAmount};

     //initially have all 1000 coins
     let allCoins = await buildAllCoins();

     // start and amount must be evaluated first
     range.start = sanitizeInput(body.start, maximumRank);

     // if amount is defined
     if (!!body.amount){
         range.end = calculateEndOfRange(range.start, body.amount, maximumRank);
     } else {
         range.end = calculateEndOfRange(range.start, defaultAmount, maximumRank);
     }

     // sortBy must be evaluated next
     switch (body.sortBy) {
            case '1':
                allCoins = sortByPrice(allCoins);
                break;
            case '2':
                allCoins = sortByPriceChange(allCoins);
                break;
            case '3':
                allCoins = sortByVolume(allCoins);
                break;
            default:
                 allCoins = sortByMarketcap(allCoins);
                 break;
     }

     // filtering is the next step
     if (!!body.filter) {
         // if filter exists
         allCoins = filterArray(allCoins,body.filter);
     }

     // evaluation of sortAsc is last
     if (body.sortAsc === 'true') {
         // if sortAsc is true, then reverse array
         allCoins = allCoins.reverse();
     }

     //trim array if needed
     allCoins =  trimArray(range.start, range.end, allCoins);

     //return
     res.send(JSON.stringify(allCoins));

    });

    // second end point
    app.get('/ticker/:symbol', async function(req, res){

        let symbol = req.params.symbol;

        let ID = await cmc.getID(symbol);

        if (ID !== 0){

            let data = await cmc.getTickerID(ID);

            res.send(JSON.stringify(data));

        } else {
            res.send("Couldn't find symbol " + req.params.symbol );
        }

    });
};

// helper functions

function sanitizeInput (number, maximum) {
    if (!isNaN(number) && number <= maximum && number >= 0) {
        // valid number and under the maximum
        return number;
    }
    return 0;
}

function calculateEndOfRange (start, elements, maximum) {
    let amount = sanitizeInput(elements, maximum);
    let end = Number(start) + Number(amount);

    return Math.min(maximum,end);
}

function trimArray(start, end, array){
    return array.slice(start,end);
}

async function buildAllCoins() {
    let allCoins = [];

    for (let i = 0; i < 10; i++) {
        let params = {};
        params.start = i*100;
        params.limit = 100;

        await cmc.getTicker(params).then(resp => {

            Object.values(resp.data).forEach( function (element) {
                allCoins.push(
                    {
                        name: element.name,
                        symbol: element.symbol,
                        rank: Number(element.rank),
                        market_cap: Number(element.quotes.USD.market_cap),
                        price: Number(element.quotes.USD.price),
                        price_change_24h: Number(element.quotes.USD.percent_change_24h)/100*Number(element.quotes.USD.price),
                        volume_24h: Number(element.quotes.USD.volume_24h)
                    })
            })
        });
    }

    return allCoins;
}

function sortByMarketcap(array) {
    let sortedArray = array.slice(0);
    sortedArray.sort(function(a,b) {
        return b.market_cap - a.market_cap;
    });
    return sortedArray;
}

function sortByPrice(array) {
    let sortedArray = array.slice(0);
    sortedArray.sort(function(a,b) {
        return b.price - a.price;
    });
    return sortedArray;
}

function sortByPriceChange(array) {
    let sortedArray = array.slice(0);
    sortedArray.sort(function(a,b) {
        return b.price_change_24h - a.price_change_24h;
    });
    return sortedArray;
}

function sortByVolume(array) {
    let sortedArray = array.slice(0);
    sortedArray.sort(function(a,b) {
        return b.volume_24h - a.volume_24h;
    });
    return sortedArray;
}

filterName = (array, input) => {
    return array.filter(element => {
        return element.name.toLowerCase().includes(input.toLowerCase());
    });
};

filterSymbol = (array, input) => {
    return array.filter(element => {
        return element.symbol.toLowerCase().includes(input.toLowerCase());
    });
};

function filterArray (array, input) {
    let filteredNames = filterName(array, input);

    // if cannot find name
    if (filteredNames.length === 0) {
        // search for symbol
        return filterSymbol(array, input)
    }
    return filteredNames;
}