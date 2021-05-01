                    var bg,bgImg,cot,catImg1,catImg2,catImg3,rat,ratImg1,ratImg2,ratImg3;
                    function preload() {
                        //load the images here
                        bgImg=loadImage("images/garden.png");
                        catImg1=loadAnimation("images/cat1.png");
                        catImg2=loadAnimation("images/cat2.png","images/cat3.png");
                        catImg3=loadAnimation("images/cat4.png");
                        ratImg1=loadAnimation("images/mouse1.png");
                        ratImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
                        ratImg3=loadAnimation("images/mouse4.png")
                    }

                    function setup(){
                        createCanvas(1000,800);
                        //create tom and jerry sprites here
                        bg=createSprite(500,400);
                        cat=createSprite(850,600,100,80);
                        rat=createSprite(200,600,30,60);

                        bg.addImage(bgImg);
                        cat.addAnimation("catStanding",catImg1);
                        rat.addAnimation("mouseStanding",ratImg1);
                        cat.addAnimation("catRunning",catImg2);
                        cat.addAnimation("catCollided",catImg3);
                        rat.addAnimation("mouseRunning",ratImg2);
                        rat.addAnimation("mouseCollided",ratImg3);


                        bg.scale=1.1;
                        cat.scale=0.2;
                        rat.scale=0.15;
                        
                    }

                    function draw() {

                        background(0);

                        //Write condition here to evalute if tom and jerry collide
                        if(cat.x-rat.x<cat.width/2+rat.width/2&&
                        rat.x-cat.x<cat.width/2+rat.width/2&&
                        cat.y-rat.y<cat.height/2+rat.height/2&&
                        rat.y-cat.y<cat.height/2+rat.height/2){
                        cat.velocityX=0;
                        cat.addAnimation("catCollided",catImg3);
                        cat.changeAnimation("catCollided");
                        rat.addAnimation("ratCollided",ratImg3);
                        rat.changeAnimation("ratCollided");

                        }
                    
                    
                        keyPressed();
                    
                        drawSprites();








                    }


                    function keyPressed(){
                    //For moving and changing animation write code here
                        if(keyDown(LEFT_ARROW)){
                        rat.addAnimation("mouseRunning",ratImg2);
                        rat.changeAnimation("mouseRunning"); 
                        cat.addAnimation("catRunning",catImg2);
                        cat.changeAnimation("catRunning");
                        cat.scale=0.3;
                        cat.velocityX=-3;
                        cat.velocityX=cat.velocityX-0.1;
                        }

                    }
