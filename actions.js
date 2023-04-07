import {
  CollectContent,
  Root,
  Scraper,
} from "./node_modules/nodejs-web-scraper/index.js";

async function queryVersions() {
  const config = {
    baseSiteUrl: `https://lazamar.co.uk/nix-versions/`,
    startUrl: `https://lazamar.co.uk/nix-versions/`,
    concurrency: 10, //Maximum concurrent jobs. More than 10 is not recommended.Default is 3.
    maxRetries: 3, //The scraper will try to repeat a failed request few times(excluding 404). Default is 5.
    logPath: "./logs/", //Highly recommended: Creates a friendly JSON for each operation object, with all the relevant data.
  };

  const scraper = new Scraper(config);
  const root = new Root();
  const versions = new CollectContent('option.value');
}
