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

    { start: '0', amount: '5', sortBy: '1', sortAsc: 'true' }

**Return**
``` json
[{
	"name": "Sprouts",
	"symbol": "SPRTS",
	"rank": 778,
	"market_cap": 1492087,
	"price": 9.51e-8,
	"price_change_24h": -5.06883e-9,
	"volume_24h": 3857.9706121506
}, {
	"name": "StrongHands",
	"symbol": "SHND",
	"rank": 608,
	"market_cap": 2995501,
	"price": 1.875e-7,
	"price_change_24h": -1.08e-8,
	"volume_24h": 3635.7123531779
}, {
	"name": "808Coin",
	"symbol": "808",
	"rank": 943,
	"market_cap": 534989,
	"price": 0.000001095,
	"price_change_24h": -5.77284e-7,
	"volume_24h": 1090.3023279936
}, {
	"name": "GCN Coin",
	"symbol": "GCN",
	"rank": 893,
	"market_cap": 766098,
	"price": 0.0000047714,
	"price_change_24h": -6.651331599999999e-7,
	"volume_24h": 2465.5439498393
}, {
	"name": "Dimecoin",
	"symbol": "DIME",
	"rank": 492,
	"market_cap": 4648414,
	"price": 0.0000086226,
	"price_change_24h": -7.2516066e-7,
	"volume_24h": 7753.9404872717
}]
```
