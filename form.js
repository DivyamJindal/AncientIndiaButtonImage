class Form {


    constructor() {
       
        this.button = createButton("VedioOne"); // C-40 SA
      }
    
      
  hide(){

    this.button.hide();
  
  }
my(){
    window.open("https://www.youtube.com/watch?v=MFWJ_nQR5yM");
};
    


  display(){
    this.button.position(displayWidth+ 300, displayHeight+300);
    this.button.mousePressed(()=>{
     my()
    

    })

    }
}