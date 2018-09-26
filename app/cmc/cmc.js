const fetch = require("node-fetch");
const { URL } = require('url');

module.exports = {

    getTicker: async function(parameters) {

        let url = new URL("https://api.coinmarketcap.com/v2/ticker/"),
        params = parameters;

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        try {
            const response = await fetch(url);

            return await response.json();

        } catch (error) {
            return error;
        }
    },

    getID: async function(symbol) {

        let url = new URL("https://api.coinmarketcap.com/v2/listings/");

        try {
            const response = await fetch(url);
            const json = await response.json();
            let ID = 0;

            // find id of coin
            for(let item of json.data) {

                if (symbol.toUpperCase() === item.symbol) {
                    ID = item.id;
                    break;
                }
            }

            return ID;

        } catch (error) {
            return error;
        }
    },

    getTickerID: async function(ID) {

        let url = new URL("https://api.coinmarketcap.com/v2/ticker/"+ID);

        try {
            const response = await fetch(url);
            const json = await response.json();

            return json.data;

        } catch (error) {
            return error;
        }
    },

};
