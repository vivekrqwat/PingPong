# 🎮 Pong Game

A classic **Pong game** built using **Phaser 3** — a JavaScript framework for creating 2D games. Play against another player using the keyboard!

---

## 🕹️ Features

* Two-player Pong game

  * **Left Paddle**: Arrow keys (`↑` / `↓`)
  * **Right Paddle**: W / S keys
* Physics-based ball movement with bouncing
* Score tracking for both players
* Ball resets automatically when it goes off-screen
* Colorful graphics with smooth animations
* Works in the browser

---

## ⚡ Technologies Used

* **Phaser 3** – 2D game framework
* **JavaScript / ES6 Modules**
* **HTML5 Canvas** – rendering game objects
* **Git & GitHub** – version control

---

## 🚀 How to Play

1. Clone the repository:

```bash
git clone https://github.com/vivekrqwat/PingPong.git
```

2. Navigate into the project folder:

```bash
cd PingPong
```

3. Open `index.html` in your browser, or run using a local server:

```bash
npx live-server
```

4. Controls:

   * **Left Paddle** → Arrow Up / Arrow Down
   * **Right Paddle** → W / S

5. Score is displayed at the top for both players. First to reach the desired score wins.

---

## 🧩 Project Structure

```
PingPong/
├─ src/
│  ├─ Scenes/
│  │  ├─ Game.js       # Main game logic
│  │  └─ TitleScreen.js # Optional title/menu screen
│  ├─ index.js         # Entry point
├─ index.html
├─ package.json
└─ README.md
```

---

## 🔧 Future Improvements

* Add **AI paddle** for single-player mode
* Add **sound effects** when ball hits paddle or wall
* Add **start menu** and **game over screen**
* Add **increasing ball speed** over time
* Add **mobile touch controls**

---



