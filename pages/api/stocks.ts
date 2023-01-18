import axios from 'axios';

interface ENDPOINTS {
  ALL_STOCKS: string;
}

export default class Fetcher {
  private _endpoints: ENDPOINTS;

  constructor() {
    this._endpoints = {
      ALL_STOCKS: 'https://brapi.dev/api/quote/list',
    }
  }

  public async getAllStcoks() {
    const response = await fetch(this._endpoints.ALL_STOCKS);
    const data = await response.json();
    return data;
  }

  public async getBySearchParam(symbol: string) {
    let cancel;
    const response = await axios({
      method: 'GET',
      url: `https://brapi.dev/api/quote/${symbol}?range=1d&interval=1d&fundamental=true`,
      cancelToken: new axios.CancelToken((c) => cancel = c)
    }).catch((error) => {
      if (axios.isCancel(error)) return;
    });
    return { response, cancel };
  }
};