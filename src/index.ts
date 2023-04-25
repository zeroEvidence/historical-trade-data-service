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

import { createClient } from "@clickhouse/client";
import { exchanges, version } from "ccxt";

const clickhouseClient = createClient({
  host: "localhost",
});

// Should be able to save historical trade data to ClickHouse
export async function saveToClickHouse(data: any) {
  await clickhouseClient.insert("INSERT INTO trades", data);
  return true;
}

// Should be able to download historical trade data from Binance
export function downloadBinanceTradeData() {
  console.log(version, Object.keys(exchanges));
  // Connect to binance API

  // Get all the markets

  // For each market, get the historical trade data

  // Save the data to ClickHouse

  return [];
}

// Entry point
export function main() {
  downloadBinanceTradeData();
  return;
}

main();
