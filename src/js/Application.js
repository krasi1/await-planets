import EventEmitter from "eventemitter3";

let Data;
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._loading = document.getElementById("progbar");
    this.emit(Application.events.READY);
    this._startLoading(this._loading);
    this._load("https://swapi.boom.dev/api/planets");
  }
  async _load(url) {
    const rawData = await fetch(url);
    Data = await rawData.json();
    this._create(Data);
    if (Data.next === null) {

      this._stopLoading(this._loading);
      return;
    }
    this._load(Data.next);
  }

  _create(object) {
    //console.log(object.results);
    for(let i = 0; i < object.results.length; i++)
    {
      let x = document.createElement('div');
      x.innerHTML = object.results[i].name;
      document.body.appendChild(x);
      //console.log(x);
    }
  }

  _startLoading(){
    //this._loading.style.visibility = "hidden";
  }

  _stopLoading(){
    this._loading.style.visibility = "hidden";
  }
}
