# Photo Resources

    POST ticker

## Description
Returns a list of coins from using CoinmarketCap data.

***

## Parameters
- **start**  — Number representing the first element on the list (e.g. 100, returns elements starting from the 100th element) Default is: 0.
- **amount**  — Number to represent the total amount of returned elements. Default is: 100, Maximum is: 1000.
- **sortBy**  — Specifies the way the list is sorted. The values can be sorted by: MarketCap (default), Current USD Price (1), USD Volume Change in the last 24h (2) and USD Price change last 24h (3). It accepts the corresponding integer values. Default is sorting by market cap.
- **sortAsc**  — Specifies the order in which the results are returned. Default is: false;
- **filter**  — String argument that can be used to filter by name or symbol.


***

## Return format
A JSON object.

***

## Example
**Request**

    POST localhost:8000/ticker

**Body**

    body={ start: '0', amount: '10' }


**Return**
``` json
[{
	"name": "Bitcoin",
	"symbol": "BTC",
	"rank": 1,
	"market_cap": 112034420344,
	"price": 6479.94842759,
	"price_change_24h": 51.19159257796101,
	"volume_24h": 4243366030.60797
}, {
	"name": "Ethereum",
	"symbol": "ETH",
	"rank": 2,
	"market_cap": 21941528938,
	"price": 214.700248964,
	"price_change_24h": 3.9719546058340005,
	"volume_24h": 1809403949.40113
}, {
	"name": "XRP",
	"symbol": "XRP",
	"rank": 3,
	"market_cap": 21353744599,
	"price": 0.5355720764,
	"price_change_24h": 0.1009553364014,
	"volume_24h": 1777858893.75466
}, {
	"name": "Bitcoin Cash",
	"symbol": "BCH",
	"rank": 4,
	"market_cap": 7732673747,
	"price": 445.193621583,
	"price_change_24h": 6.2772300643203,
	"volume_24h": 350881386.071241
}, {
	"name": "EOS",
	"symbol": "EOS",
	"rank": 5,
	"market_cap": 4918563253,
	"price": 5.4274093808,
	"price_change_24h": 0.27462691466848,
	"volume_24h": 673798278.192959
}, {
	"name": "Stellar",
	"symbol": "XLM",
	"rank": 6,
	"market_cap": 4718114521,
	"price": 0.2510978122,
	"price_change_24h": 0.01446323398272,
	"volume_24h": 99563340.367273
}, {
	"name": "Litecoin",
	"symbol": "LTC",
	"rank": 7,
	"market_cap": 3347290251,
	"price": 57.2578832605,
	"price_change_24h": 1.9124133009007,
	"volume_24h": 305725732.348103
}, {
	"name": "Tether",
	"symbol": "USDT",
	"rank": 8,
	"market_cap": 2807232254,
	"price": 1.0002888085,
	"price_change_24h": -0.00110031768935,
	"volume_24h": 3123621181.1699
}, {
	"name": "Cardano",
	"symbol": "ADA",
	"rank": 9,
	"market_cap": 2086368149,
	"price": 0.0804706473,
	"price_change_24h": 0.00375797922891,
	"volume_24h": 70690250.054744
}, {
	"name": "Monero",
	"symbol": "XMR",
	"rank": 10,
	"market_cap": 1883862486,
	"price": 114.599938427,
	"price_change_24h": 2.0857188793714,
	"volume_24h": 28936593.745165
}]
```
