import { GiftsControllers } from "./Controllers/GiftsControllers.js";
import { GiphyController } from "./Controllers/GiphyController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  giftsController = new GiftsControllers

  giphyController = new GiphyController
}

window["app"] = new App();
