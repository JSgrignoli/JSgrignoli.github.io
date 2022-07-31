class Rules extends Phaser.Scene {
    constructor() {
        super({ key: 'Rules'})
    }
    create() {
        this.add.text(screenCenterX, 50, 
            'The object of the game is to guess which 4 colors in the',
            { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.text(screenCenterX, 75, 
            'corresponding seqence the computer has selected.',
            { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        for(let i = 275; i < 550; i+=75) {
            this.add.rectangle(i, 125, 50, 50).setStrokeStyle(4, 0x000000)
            }
        this.add.text(screenCenterX, 175, 
            'Click one of the colored circles on the bottom to make your guess',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.circle(78, 250, 50, 0xfc8803)
        this.add.circle(206, 250, 50, 0x79f600)
        this.add.circle(334, 250, 50, 0x00338f)
        this.add.circle(462, 250, 50, 0xfff300)
        this.add.circle(590, 250, 50, 0xff0000)
        this.add.circle(718, 250, 50, 0xb800ff)
        this.add.text(screenCenterX, 320, 
            'After you guess 4 colors,',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.text(screenCenterX, 345, 
            'the smaller boxes on the left will be filled.',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.text(screenCenterX, 375, 
            'A white filled box means one of the colors',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.text(screenCenterX, 400, 
            'you guessed is correct and in the correct position.',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.rectangle(screenCenterX, 430, 25, 25, white).setStrokeStyle(2, 0x000000)
        this.add.text(screenCenterX, 455, 
            'A black filled box means one of the colors',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.text(screenCenterX, 480, 
            'you guessed is correct but in the wrong position',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);
        this.add.rectangle(screenCenterX, 510, 25, 25, black)
        this.add.text(screenCenterX, 540, 
            'You have 10 tries to figure out the color sequence!',
             { fontSize: 'bold 20px', fill: 'white' }).setOrigin(0.5);

        gameState.start = this.add.text(screenCenterX, 600, 'Start', { fontSize: 'bold 30px', fill: 'black' }).setOrigin(0.5);
        gameState.start.setInteractive();
        gameState.start.on('pointerover', () => {
			gameState.start.setFill('white');
		})
        gameState.start.on('pointerout', () => {
			gameState.start.setFill('black');
		})
        gameState.start.on('pointerdown', () => {
            gameState.music.stop();
            this.scene.stop('Rules');
            this.scene.start('GameScene')
        })
    }
}