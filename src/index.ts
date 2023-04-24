/*
  This file should:
    - Download historical market tick/trade data for from the cryptocurrency
      exchanges: Binance, Binance-US, Bequant, HitBTC, and TimeX.
      - Restrict to markets that have a stablecoin for its base trading pair,
        e.g: BTC/USDT, BTC/DAI, BTC/TUSD, BTC/DAI, and BTC/BUSD.
      - And, if possible, include markets that are no longer trading or active.
    - Get historical cryptocurrency marketcap data from CoinGekko and/or
      CoinMarketcap.
    - Save all the data to a ClickHouse database
*/

function downloadHistoricalData() {
  //
  return;
}

function main() {
  downloadHistoricalData();
  return;
}

main();