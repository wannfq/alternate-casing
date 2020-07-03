export class StringConverterService {
  alternate(text: string): string {
      const split = text.split("");
      let upper = false;
      for (let i = 0; i < split.length; ++i) {
        split[i] = upper ? split[i].toUpperCase() : split[i].toLowerCase();
        upper = !upper;
      }
      return split.join("");
  }

  upper(text: string): string {
      return text.toUpperCase();
  }
}
