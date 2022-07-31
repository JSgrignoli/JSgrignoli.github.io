class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}
	preload() {
		this.load.audio('theme', ['MastermindTheme.mp3']);
		this.load.spritesheet('blocks', 'Blocksprite.png', { frameWidth: 50, frameHeight: 50 });
		this.load.spritesheet('blocks1', 'Blocksprite1.png', { frameWidth: 50, frameHeight: 50 });
		this.load.spritesheet('blocks2', 'Blocksprite2.png', { frameWidth: 50, frameHeight: 50 });
		this.load.spritesheet('blocks3', 'Blocksprite3.png', { frameWidth: 50, frameHeight: 50 });
	}

	create() {
		this.anims.create({
			key: 'colors',
			frames: this.anims.generateFrameNumbers('blocks', { start: 0, end: 6 }),
			frameRate: 1,
			repeat: -1
		  });
		  this.anims.create({
			key: 'colors1',
			frames: this.anims.generateFrameNumbers('blocks1', { start: 0, end: 5 }),
			frameRate: 1,
			repeat: -1
		  });
		  this.anims.create({
			key: 'colors2',
			frames: this.anims.generateFrameNumbers('blocks2', { start: 0, end: 5 }),
			frameRate: 1,
			repeat: -1
		  });
		  this.anims.create({
			key: 'colors3',
			frames: this.anims.generateFrameNumbers('blocks3', { start: 0, end: 6 }),
			frameRate: 1,
			repeat: -1
		  });
		this.add.sprite(screenCenterX-150, 230, 'blocks').setScale(1.5).play('colors')
		this.add.sprite(screenCenterX-50, 230, 'blocks1').setScale(1.5).play('colors1')
		this.add.sprite(screenCenterX+50, 230, 'blocks3').setScale(1.5).play('colors3')
		this.add.sprite(screenCenterX+150, 230, 'blocks2').setScale(1.5).play('colors2')
		gameState.music = this.sound.add('theme', { loop: true });
		gameState.music.play();
		this.add.text(screenCenterX, screenCenterY-125, 'Master Mind', { fontSize: 'bold 70px', fill: 'ffffff' }).setOrigin(0.5);
		gameState.begin = this.add.text(screenCenterX, screenCenterY-50, 'Start', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
		gameState.begin.setInteractive();
		gameState.begin.on('pointerover', () => {
			gameState.begin.setFill('white');
		})
		gameState.begin.on('pointerout', () => {
			gameState.begin.setFill('black');
		})
		gameState.begin.on('pointerdown', () => {
			gameState.music.stop();
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
		gameState.rules = this.add.text(screenCenterX, screenCenterY-15, "How to Play", { fontSize: 'bold 30px', fill: 'ffffff'}).setOrigin(0.5);
		gameState.rules.setInteractive();
		gameState.rules.on('pointerover', () => {
			gameState.rules.setFill('white')
		})
		gameState.rules.on('pointerout', () => {
			gameState.rules.setFill('black');
		})
		gameState.rules.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('Rules')
		})
	}//create closing bracket
}