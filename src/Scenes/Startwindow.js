import Phaser from "phaser";

export default class Swindow extends Phaser.Scene{

    preload(){}

    create(){
        this.add.text(150,150,"Old tennis",{
            fontSize:38
        })
        this.add.text(150,250,"press Space to start",{
            fontSize:20
        })

       this.click= this.input.keyboard.createCursorKeys();
    }
    update(){
        if(this.click.space.isDown){
            console.log("start")
            this.scene.start('game')
        }
        
    }
}