import { downloadBinanceTradeData, saveToClickHouse } from "../src";

describe("index.ts", () => {
  describe("saveToClickHouse", () => {
    it("should save data to ClickHouse", async () => {
      expect(await saveToClickHouse([])).toBe(true);
      return;
    });
  });

  describe("downloadBinanceTradeData", () => {
    it("should download trade data from Binance", async () => {
      expect(downloadBinanceTradeData()).toBe([]);
      return;
    });
  });

  describe("main", () => {
    it("should download ", async () => {
      expect(downloadBinanceTradeData()).toBe([]);
      return;
    });
  });
});
