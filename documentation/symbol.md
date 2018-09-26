# User Resources

    GET ticker/:symbol

## Description
Returns coin information based on input

***


## Parameters
None

***

## Return format
Current user's profile information in json format.

***

## Example

    localhost:8000/ticker/life

**Return**
``` json
{
	"id": 2078,
	"name": "LIFE",
	"symbol": "LIFE",
	"website_slug": "life",
	"rank": 770,
	"circulating_supply": 23442468688,
	"total_supply": 100000000000,
	"max_supply": 100000000000,
	"quotes": {
		"USD": {
			"price": 0.0000647069,
			"volume_24h": 8585.5821721275,
			"market_cap": 1516890,
			"percent_change_1h": 0.49,
			"percent_change_24h": -3.99,
			"percent_change_7d": 2.64
		}
	},
	"last_updated": 1537958668
}
```
