# API Documentation for Enclaves DEX

The API is exposed using web sockets, with an endpoint of:  
api.enclaves.io:80

All volume values are not adjusted by decimals (so for Ether the values are denominated in Wei, and for tokens the values are denominated in the base amount of token).

## Example Code

See:


## getTokens

This allows you to retrieve token data, including price and volume data.

volumeEther: total amount of volume traded across Enclaves and liquidity providers in Wei  
volumeEnclavesEther: total amount of volume traded across just Enclaves in Wei  
priceEnclaves: latest traded price on Enclaves  
change: 24 hour change in price  

```
{
  "tokens": [
    {
      "addr": "0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466",
      "volumeEther": "1103127794354288000",
      "volumeEnclavesEther": "0",
      "priceEnclaves": "0",
      "change": "-0.01418181818181818182",
      "amountEther": "32401872000000000",
      "amountToken": "597600000"
    },
    {
      "addr": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
      "volumeEther": "42241712483682712684",
      "volumeEnclavesEther": "25663218338669708669",
      "priceEnclaves": "0.000935",
      "change": "-0.02165170322384295994",
      "amountEther": "450050000000000000",
      "amountToken": "50000000000"
    },
...
  ]
}
```

## subscribeUser

This returns trades and orders for the specified user.

You will receive the following events following the initial subscription, providing a snapshot of the current state of the world for the specified user:  
user_orders_SOW  
user_trades_SOW

There after you will receive incremental updates for trades and orders with the events:  
user_orders
user_trades

user_trades_SOW:
```
{
  "addr": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2",
  "trades": [
    {
      "txId": "0x7c50fb5c03eb05a918d21117a284f2e7b18e7e6cbbf3d1fc02d65e719b155f94_42",
      "txHash": "0x7c50fb5c03eb05a918d21117a284f2e7b18e7e6cbbf3d1fc02d65e719b155f94",
      "exchange": 1,
      "tokenAddr": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
      "side": "buy",
      "time": 1521460134,
      "amountToken": "5000000000000000000",
      "amountEther": "25000000000000000",
      "maker": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2",
      "taker": "0x65f946a7f89ab5365f143213a526e82aea68b660"
    },
    {
      "txId": "0xb58da5baf711123af5d52175383b01f029874860d42064e59bbbbe50071d3777_81",
      "txHash": "0xb58da5baf711123af5d52175383b01f029874860d42064e59bbbbe50071d3777",
      "exchange": 0,
      "provider": 1,
      "tokenAddr": "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
      "side": "buy",
      "time": 1523814360,
      "amountToken": "9999999999999999613",
      "amountEther": "173688175700000010",
      "maker": "0xff808624d9b94dfecdae3887d4486f6fdc107ce8",
      "taker": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2"
    },
...
  ]
}
```

user_orders_SOW
```
{
  "addr": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2",
  "orders": [
    {
      "tokenGet": "0x0000000000000000000000000000000000000000",
      "amountGet": "1900000000000000000",
      "tokenGive": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
      "amountGive": "1e+21",
      "nonce": "7131765227862064",
      "expires": "10000000000",
      "user": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2",
      "r": "0x0f2f5fa64f8b25f50ee83f7ee787e683974ba03e02e115fda389dd3f350e47a0",
      "s": "0x02ccdb0e728346a5e176f04bb017ce3b9d502aaede5865ecf4dc29eb98da4f5d",
      "v": 28,
      "updated": 1523921438309,
      "exchange": 0,
      "id": "fd233a13435fd671411fa0af735a66e8a7494771a74998639f6c807418c45aa5",
      "volumeEther": "1900000000000000000",
      "volumeToken": "1e+21",
      "amountFilled": "0"
    },
    {
      "tokenGet": "0x0000000000000000000000000000000000000000",
      "amountGet": "5100000000000000",
      "tokenGive": "0x2c82c73d5b34aa015989462b2948cd616a37641f",
      "amountGive": "10000000000000000000",
      "nonce": "387430897612806",
      "expires": "10000000000",
      "user": "0xf8536ca7a25cbf70df754fa310079ada4c6114c2",
      "r": "0x3f7208cbe962d0fc58a6a6d08cc2ed5a98cec131308931fe56a0db0c28e1bdce",
      "s": "0x01e1b1a4663576b9bb0d6a1c2f656ac75c8b5a4df046f0397b8563333becf7cd",
      "v": 27,
      "updated": 1523831919872,
      "exchange": 0,
      "id": "62b6ab23cbd7ad9b083d052450d4b79328ebf5f30f06db79b2655275e34b759c",
      "volumeEther": "0",
      "volumeToken": "0",
      "amountFilled": "5100000000000000"
    },
...
  ]
}
```

The data format for SOW and incremental update events are identical.

## subscribeToken

This returns trades and orders for the specified token.

You will receive the following events following the initial subscription, providing a snapshot of the current state of the world for the specified user:  
token_orders_SOW  
token_trades_SOW

There after you will receive incremental updates for trades and orders with the events:  
token_orders
token_trades

The data format is identical to subscribeUser
