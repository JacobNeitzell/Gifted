import { appState } from "../AppState.js"
import { giftsService } from "../Services/GiftsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawGifts() {
  let template = ''

  appState.gifts.forEach(g => {
    if (g.opened) {
      template += g.CardTemplate
    }
    else {
      template += g.WrapTemplate
    }
  })
  setHTML('gifts', template)
}


export class GiftsControllers {

  constructor() {
    this.getGifts()
    appState.on('gifts', _drawGifts)
  }

  // ifOpened(id) {
  //   giftsService.ifOpened(id)

  // }


  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      console.error('[getGifts]', error)
      Pop.error(error)
    }
  }

  async openGift(id) {
    try {
      await giftsService.openGift(id)

    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }



}