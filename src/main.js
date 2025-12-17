import Phaser, { Physics } from "phaser";
import Title from "./Scenes/TitleScreen";
import Game from "./Scenes/Game";
import wall from "./Scenes/BackgroundLine";
import Swindow from "./Scenes/Startwindow";
const config={
    width:600,
    height:600,
    type:Phaser.AUTO,
    backgroundColor:"#2279bf",
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:10},
            debug:true
        }
    }
}

const game= new Phaser.Game(config);
game.scene.add("title",Title)
game.scene.add('game',Game);
game.scene.add('wall',wall)
game.scene.add("Swindow",Swindow)
game.scene.start("Swindow")
// game.scene.start("game")