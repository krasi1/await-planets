import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  
  constructor() {
    super();
    this._loading = document.querySelector("progbar"); 
    this.emit(Application.events.READY);
    this._load("https://swapi.boom.dev/api/planets");
    this._create();
    this._startLoading();
    this._stopLoading();
  }
  async _load(url) {

    this._startLoading();
    const rawData = await fetch(url);
    const Data = JSON.parse(rawData);


  } 
}




