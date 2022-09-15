import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { SandboxServer } from "./AxiosService.js"

class GiftsService {
  async openGift(id) {
    const gift = appState.gifts.find(g => g.id == id)
    // @ts-ignore
    gift.opened = true
    // @ts-ignore
    const res = await SandboxServer.put(`/api/gifts/${id}`, gift)
    console.log(gift);
    const updateGift = new Gift(res.data)

    const index = appState.gifts.findIndex(g => g.id == id)
    appState.gifts.splice(index, 1, updateGift)
    appState.emit('gifts')

  }

  async getGifts() {
    const res = await SandboxServer.get('/api/gifts')
    console.log('Getting Gifts', res.data)
    appState.gifts = res.data.map(g => new Gift(g))
  }


}


export const giftsService = new GiftsService()