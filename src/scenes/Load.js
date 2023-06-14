class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 
            loadingBar.fillStyle(0xFFFFFF, 1);                  
            loadingBar.fillRect(0, centerY, w * value, 5);  
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        this.load.image('Zen', 'img/Zen(2).png');
        this.load.image('Dots', 'img/Dots.png');
        this.load.image('Lvl1BG', 'img/Lvl1BG.png');
        this.load.image('Lvl2BG', 'img/Lvl2BG2.png');
        this.load.image('Lvl3BG', 'img/LvlBG3.png');
        this.load.image('Enemy', 'img/Enemy(1).png');
        this.load.image('Tree', 'img/Tree1.png');
        this.load.image('Bamboo', 'img/Bamboo.png');
        this.load.spritesheet('StarAnime', 'img/StarAnime', 64, 32)
        this.load.audio('GameMusic', ['audio/battle-of-the-dragons-8037.mp3']);
        this.load.audio('StarTwinkle', ['audio/StarTwinkle.mp3']);
        this.load.audio('StarBreak', ['audio/pixel-death-66829.mp3']);
        this.load.bitmapFont('gem', 'font/gem.png', 'font/gem.xml');
    }

    create() {
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        this.scene.start('titleScene');
    }
}