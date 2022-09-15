import { appState } from "../AppState.js";
import { giphyService } from "../Services/GiphyService.js";
import { Pop } from "../Utils/Pop.js";

export class GiphyController {

  constructor() {






  }



  async getGiphy() {
    try {
      await giphyService.getGiphy()
    } catch (error) {
      console.error('[getGiphy]', error)
      Pop.error(error)
    }
  }





}