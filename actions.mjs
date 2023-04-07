import {
  CollectContent,
  Root,
  Scraper,
} from "nodejs-web-scraper";

async function queryVersions() {
  const config = {
    baseSiteUrl: `https://lazamar.co.uk/nix-versions/`,
    startUrl: `https://lazamar.co.uk/nix-versions/`,
  };

  const scraper = new Scraper(config);
  const root = new Root();
  const versions = new CollectContent('option');

  root.addOperation(versions);
  
  try {
    await scraper.scrape(root);
    return versions.getData();    
  } catch (error) {
    return error
  }
}

queryVersions().then(res => console.log(res));
