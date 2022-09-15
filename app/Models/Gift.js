


/**
   * 
   * @param {{tag: string, url: string, opened: boolean, id?: string}} data 
   */

export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.id = data.id
  }



  get WrapTemplate() {
    return /*html*/`
  <div class="col-4 p-3">
    <div class="card">
      <div class="card-body">
        <img src="https://media.istockphoto.com/illustrations/seamless-with-skulls-and-bones-illustration-id164472921?k=20&m=164472921&s=612x612&w=0&h=mQ1J2XptX_6qh9sgPY7k84Gr_r-mIRT64EE886hpTR8=" id="${this.id}" onclick="app.giftsController.openGift('${this.id}')" class="img-fluid">
      </div>
    </div>
  </div>
`
  }





  get CardTemplate() {
    return/*html*/`
     <div class="col-4 p-3">
      <div class="card">
        
            <img src="${this.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this.tag}</h5>
        
          </div>     
        </div>
      </div>
    `
  }
}