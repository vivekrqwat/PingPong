import Phaser from "phaser";

export default class Game extends Phaser.Scene {
    init(){
        this.leftscore=0;
        this.rightscore=0;
    }
  preload() {}

  create() {
    this.scene.run("wall")
   
   this.physics.world.setBounds(-100, 0, 1000, 600);

   
    this.ball = this.add.circle(300, 300, 10, 0xFFA500, 1);
    this.physics.add.existing(this.ball);

    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1, 1);
    this.reset();

   

    
    this.paddleleft = this.add.rectangle(20, 300, 30, 120, 0xFFA500, 1);
    this.physics.add.existing(this.paddleleft, true);

    this.paddleright = this.add.rectangle(580, 300, 30, 120, 0xFFA500, 1);
    this.physics.add.existing(this.paddleright, true);
this.leftscorelabel=this.add.text(10,20,"leftscore:0",1)
this.rightscorelabel=this.add.text(410,20,"Rightscore:0",1)


    this.physics.add.collider(this.ball, this.paddleleft);
    this.physics.add.collider(this.ball, this.paddleright);

 
    this.mv = this.input.keyboard.createCursorKeys();
      this.WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  }

  update() {
    const body = this.paddleleft.body;
    const rbody=this.paddleright.body;

    if (this.mv.up.isDown) {
      this.paddleleft.y -= 10;
      body.updateFromGameObject();
    } else if (this.mv.down.isDown) {
      this.paddleleft.y += 10;
      body.updateFromGameObject();
    }
    if(this.WKey.isDown){
        this.paddleright.y-=10
         rbody.updateFromGameObject();
    }
    if(this.SKey.isDown){
        this.paddleright.y+=10
          rbody.updateFromGameObject();

    }
  

    if(this.ball.x<-30){
           this.incRight()
        this.reset();
     

    }
    else  if(this.ball.x>830){
        this.incleft()
        this.reset();
    }
  }
  incleft(){
    this.leftscore+=1;
    this.leftscorelabel.setText("leftscore"+this.leftscore.toString());
  }

  incRight(){
    this.rightscore+=1;
    this.rightscorelabel.setText("Rightscore"+this.rightscore.toString());
  }



  reset(){
    this.ball.setPosition(300,300);
     const angle = Phaser.Math.Between(0, 360);

   
    const vec = new Phaser.Math.Vector2();
    this.physics.velocityFromAngle(angle, 200, vec);
    this.ball.body.setVelocity(vec.x, vec.y);


  }
}
