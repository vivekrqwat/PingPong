import Phaser from "phaser";
 export  default class Title extends  Phaser.Scene{


    preload(){

    }
    create(){
        const text=this.add.text(400,300,"hello world")
        text.setOrigin(0.5,0.5)
    }
 }
