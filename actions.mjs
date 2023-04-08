import {
  CollectContent,
  Root,
  Scraper,
} from "nodejs-web-scraper";

import * as fs from 'fs';
import { checkNix } from "./nix.mjs";

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

function initShellNix(version) {
  try {
    checkNix();
  } catch (err) {
    console.log(err);
  }
  
}