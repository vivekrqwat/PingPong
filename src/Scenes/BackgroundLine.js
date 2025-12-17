import Phaser from "phaser";

export default class  wall extends Phaser.Scene{

    preload(){

    }

    create(){
        this.add.line(300,250,0,-250,0,1000,0xFFA500).setOrigin(0.5,0.5);
        this.add.circle(300,280,50,).setStrokeStyle(5,0xf5424b,1)
    }
} 