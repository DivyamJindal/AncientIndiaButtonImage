

var homescreenImg , playButtonImg , canvas ;
var selectLevelImg;
var levelOneImg , lockImg;
var levelTwoImg  ;
var gameState=0;
var nextButtonImg ,videoLevel1Img;
var que1Img , option1Img;
var option2Img ,option3Img , option4Img;
var IncorrectOption2Img ,IncorrectOption3Img , IncorrectOption4Img;
var CorrectOption1Img;
var arrowClickButtonImg,arrowClickVideoImg;

function preload(){
    homescreenImg = loadImage("images/900982.jpg");
  playButtonImg = loadImage("images/playbutton.png");
  selectLevelImg = loadImage("images/Picture1.png");
  levelOneImg = loadImage("levels/level1.png");
  lockImg = loadImage ("levels/lock.png");
  levelTwoImg=loadImage("levels/level2.png");
  
  videoLevel1Img =loadImage("images/download.jpg")
  que1Img=loadImage("question/testquestion.png");
  option1Img=loadImage("question/option1.png");
  option2Img=loadImage("question/option2.png");
  option3Img=loadImage("question/option3.png");
  option4Img=loadImage("question/option4.png");
  CorrectOption1=loadImage("question/correct1.png");
  IncorrectOption2Img=loadImage("question/incorrect2.png");
  IncorrectOption3Img=loadImage("question/incorrect3.png");
  IncorrectOption4Img=loadImage("question/incorrect4.png");
  nextButtonImg=loadImage("images/nextbutton.png");
  arrowClickButtonImg=loadImage("images/clickOnButtonArrow.png");
  arrowClickVideoImg=loadImage("images/clickVideo.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    homescreen = createSprite(displayWidth, displayHeight);
    playButton= createSprite(displayWidth-750,displayHeight-200);
    playButton.addImage("play",playButtonImg);
    homescreen.addImage("home",homescreenImg);
    homescreen.scale = 2;
    selectLevel=createSprite(displayWidth-750, displayHeight-475);
    selectLevel.addImage("level",selectLevelImg);
    selectLevel.visible= false;
    selectLevel.scale=1;
    levelOne=createSprite(displayWidth-615,displayHeight-100);
    levelTwo=createSprite(displayWidth-740,displayHeight-600);
    arrowClickButton=createSprite(400,500);
    arrowClickVideo=createSprite(1180,100);
    arrowClickButton.addImage("buttonimg",arrowClickButtonImg);
    arrowClickVideo.addImage("videoimg",arrowClickVideoImg);
    arrowClickButton.scale=0.3;
    arrowClickVideo.scale=0.4;
    que1=createSprite(200,200);
    option1=createSprite(200,200);
    option2=createSprite(200,200);
    option3=createSprite(200,200);
    option4=createSprite(200,200);
    option1.addImage("optionone",option1Img);
    option2.addImage("optiontwo",option2Img);
    option3.addImage("optionthree",option3Img);
    option4.addImage("optionfour",option4Img)
    que1.addImage("question",que1Img);
    nextButton=createSprite(displayWidth-10,displayHeight-950);
    levelOne.addImage("one",levelOneImg);
    levelTwo.addImage("two",lockImg);
    arrowClickButton.visible=false;
    arrowClickVideo.visible=false;
  nextButton.addImage("nexb",nextButtonImg);
  nextButton.scale=0.1;
    levelOne.visible=false;
   levelTwo.visible=false;
    nextButton.visible=false;
  option1.visible=false;
  option2.visible=false;
  option4.visible=false;
  option3.visible=false;
  que1.visible=false;
  selectLevel.scale=1.5;
   videoLevel1=createSprite(displayWidth-750, displayHeight-475);
   videoLevel1.addImage("vidione",videoLevel1Img);
   videoLevel1.visible=false;
   videoLevel1.scale=2;
   
}
function draw(){
    background("white");
    drawSprites()
    
    if(mousePressedOver(playButton) && gameState===0){
        gameState=1
        console.log(gameState);
        hide();
        selectLevel.visible= true;
        
    }
    if (gameState===1){
        
        selectLevel.visible= true;
        levelOne.visible=true;
       
        levelOne.scale=0.2;
        levelTwo.visible=true;
      
       levelTwo.scale=0.2;
      
       
       
        if(mousePressedOver(levelOne)){
            gameState=2;
            selectLevel.visible=false;
            levelOne.visible=false;
            levelTwo.visible=false;
            arrowClickButton.visible=true;
            arrowClickVideo.visible=true;
            console.log(gameState);
            videoLevel1.visible=true;
            
        
          
        }
        if (mousePressedOver(videoLevel1)){
            gameState=3
            console.log(gameState);
           
           
           
            }
            if(gameState===3){
             arrowClickButton.visible=true;
             arrowClickVideo.visible=true;
             console.log(gameState);
             videoLevel1.visible=true;
             nextButton.visible=true;  
            }
            
    }
    
        
       
        
    
    
}
function hide(){
    playButton.visible = false;
    playButton.x=200;
    playButton.y=200;
    homescreen.visible = false;
}

