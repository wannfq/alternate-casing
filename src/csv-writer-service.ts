import * as csvWriter from "csv-writer";

export class CSVWriterService {
  async write(file: string, content: string[]): Promise<void> {
      const writer = csvWriter.createArrayCsvWriter({ path: file });
      await writer.writeRecords([content]);
  }
}
