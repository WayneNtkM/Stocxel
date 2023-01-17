interface ENDPOINTS {
  SEARCH_QUERY_STOCKS: string;
  ALL_STOCKS: string;
}

export default class Fetcher {
  private _endpoints: ENDPOINTS;

  constructor() {
    this._endpoints = {
      SEARCH_QUERY_STOCKS: 'https://brapi.dev/api/quote/PETR4%2CMGLU3?range=1d&interval=1d&fundamental=true',
      ALL_STOCKS: 'https://brapi.dev/api/quote/list',
    }
  }

  public async getAllStcoks() {
    const response = await fetch(this._endpoints.ALL_STOCKS);
    const data = await response.json();
    return data;
  }
};