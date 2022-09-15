import { GiphyServer } from "./AxiosService.js"

class GiphyService {

  async getGiphy() {
    const res = await GiphyServer.get(`trending`)
    console.log(res.data.data);


  }





}
export const giphyService = new GiphyService()