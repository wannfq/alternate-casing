import chai from "chai"
import fs from "fs"
// @ts-ignore
import chaiFiles from "chai-files"
import {CSVWriterService} from "../src/csv-writer-service"

describe("CSVWriterService", () => {
  let csvWriterService: CSVWriterService;

  beforeEach(() => {
    csvWriterService = new CSVWriterService();
    chai.use(chaiFiles);
  })

  describe("write", () => {
    it("write a csv file with content", async () => {
      await csvWriterService.write("test-output.csv", "hello world".split(""));
      chai.expect(chaiFiles.file('test-output.csv')).to.exist;
      chai.expect(chaiFiles.file('test-output.csv')).to.contains("h,e,l,l,o, ,w,o,r,l,d");
      fs.promises.unlink("test-output.csv");
    });
  })
})
