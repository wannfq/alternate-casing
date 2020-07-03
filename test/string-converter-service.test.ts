import chai from "chai"
import {StringConverterService} from "../src/string-converter-service"

describe("StringConverterService", () => {
  let stringConverterService: StringConverterService;

  beforeEach(() => {
    stringConverterService = new StringConverterService();
  })

  describe("alternate", () => {
    it("should convert string input into alternate casing", () => {
      const result = stringConverterService.alternate("hello world");
      chai.expect(result).to.equals("hElLo wOrLd");
    });
  })

  describe("upper", () => {
    it("should convert string input into upper case", () => {
      const result = stringConverterService.upper("hello world");
      chai.expect(result).to.equals("HELLO WORLD");
    });
  })
})
