class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene'})
    }


preload() {
    this.load.audio('choice1', ['Choice1.mp3']);
    this.load.audio('choice2', ['Choice2.mp3']);
    this.load.audio('choice3', ['Choice3.mp3']);
    this.load.audio('choice4', ['Choice4.mp3']);
    this.load.audio('check', ['Check.mp3']);
}

create() {
    //randomly picks 6 colors for player to guess
    colorsPicked.push(colors[Math.floor(Math.random()* 6)])
    colorsPicked.push(colors[Math.floor(Math.random()* 6)])
    colorsPicked.push(colors[Math.floor(Math.random()* 6)])
    colorsPicked.push(colors[Math.floor(Math.random()* 6)])
    console.log(colorsPicked)

    gameState.choice1 = this.sound.add('choice1', { loop: false })
    gameState.choice2 = this.sound.add('choice2', { loop: false })
    gameState.choice3 = this.sound.add('choice3', { loop: false })
    gameState.choice4 = this.sound.add('choice4', { loop: false })
    gameState.check = this.sound.add('check', { loop: false })

    //cheat code for testing
    // for(let t = 0; t < 4; t++){
    //     this.add.rectangle(xVal, 780, 10, 10, colorsPicked[t])
    //     xVal += 50;
    // }
    
    //adds rectangle(locationX, locationY, sizeX,sizeY, color)
    //game board dividing lines
    this.add.rectangle(400, 800, 800, 1, 0x000000);
    this.add.rectangle(600, 400, 1, 800, 0x000000)
    
    //game board for large guess squares 
    for(let i = 50; i < 800; i+=75) {
        for(let j = 100; j < 600; j+=125) {
        this.add.rectangle(j, i, 50, 50).setStrokeStyle(4, 0x000000)
        }
    }
    //game board small squares for game hints
    for(let k = 50; k < 800; k+=75) {
        for(let n = 625; n < 800; n+=50) {
            this.add.rectangle(n, k, 25, 25).setStrokeStyle(2, 0x000000)
        }
    }
    //Colored circles that player can guess
    //adds circle(locationX, locationY, radius, color)
    gameState.circleOrange = this.add.circle(78, 850, 50, 0xfc8803)
    gameState.circleGreen = this.add.circle(206, 850, 50, 0x79f600)
    gameState.circleBlue = this.add.circle(334, 850, 50, 0x00338f)
    gameState.circleYellow = this.add.circle(462, 850, 50, 0xfff300)
    gameState.circleRed = this.add.circle(590, 850, 50, 0xff0000)
    gameState.circlePurple = this.add.circle(718, 850, 50, 0xb800ff)

    //allows user tp click on circles to guess the color choice
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.circleOrange.setInteractive();
    gameState.circleGreen.setInteractive();
    gameState.circleBlue.setInteractive();
    gameState.circleYellow.setInteractive();
    gameState.circleRed.setInteractive();
    gameState.circlePurple.setInteractive();

    gameState.circleOrange.on('pointerover', () => {
        gameState.circleOrange.setAlpha(0.75)
    })
    gameState.circleOrange.on('pointerout', () => {
        gameState.circleOrange.setAlpha(1)
    })
    gameState.circleGreen.on('pointerover', () => {
        gameState.circleGreen.setAlpha(0.75)
    })
    gameState.circleGreen.on('pointerout', () => {
        gameState.circleGreen.setAlpha(1)
    })
    gameState.circleBlue.on('pointerover', () => {
        gameState.circleBlue.setAlpha(0.50)
    })
    gameState.circleBlue.on('pointerout', () => {
        gameState.circleBlue.setAlpha(1)
    })
    gameState.circleYellow.on('pointerover', () => {
        gameState.circleYellow.setAlpha(0.75)
    })
    gameState.circleYellow.on('pointerout', () => {
        gameState.circleYellow.setAlpha(1)
    })
    gameState.circleRed.on('pointerover', () => {
        gameState.circleRed.setAlpha(0.75)
    })
    gameState.circleRed.on('pointerout', () => {
        gameState.circleRed.setAlpha(1)
    })
    gameState.circlePurple.on('pointerover', () => {
        gameState.circlePurple.setAlpha(0.75)
    })
    gameState.circlePurple.on('pointerout', () => {
        gameState.circlePurple.setAlpha(1)
    })
    
    //When player clicks on a circle a large square representing their guess is created
    gameState.circleOrange.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, orange)
            guess.push(orange)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, orange)
            guess.push(orange)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, orange)
            guess.push(orange)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal ,50, 50, orange)
            guess.push(orange)
            numberOfGuesses++
        }
    })
    gameState.circleGreen.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, green)
            guess.push(green)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, green)
            guess.push(green)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, green)
            guess.push(green)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal, 50, 50, green)
            guess.push(green)
            numberOfGuesses++
        }
    })
    gameState.circleBlue.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, blue)
            guess.push(blue)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, blue)
            guess.push(blue)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, blue)
            guess.push(blue)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal, 50, 50, blue)
            guess.push(blue)
            numberOfGuesses++
        }
    })
    gameState.circleYellow.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, yellow)
            guess.push(yellow)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, yellow)
            guess.push(yellow)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, yellow)
            guess.push(yellow)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal, 50, 50, yellow)
            guess.push(yellow)
            numberOfGuesses++
        }
    })
    gameState.circleRed.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, red)
            guess.push(red)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, red)
            guess.push(red)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, red)
            guess.push(red)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal, 50, 50, red)
            guess.push(red)
            numberOfGuesses++
        }
    })
    gameState.circlePurple.on('pointerup', () => {
        if(numberOfGuesses === 0){
            gameState.choice1.play();
            this.add.rectangle(100, yVal, 50, 50, purple)
            guess.push(purple)
            numberOfGuesses++
        } else if(numberOfGuesses === 1) {
            gameState.choice2.play();
            this.add.rectangle(225, yVal, 50 ,50, purple)
            guess.push(purple)
            numberOfGuesses++
        }else if(numberOfGuesses === 2) {
            gameState.choice3.play();
            this.add.rectangle(350, yVal, 50, 50, purple)
            guess.push(purple)
            numberOfGuesses++
        }else if(numberOfGuesses === 3) {
            gameState.choice4.play();
            this.add.rectangle(475, yVal, 50, 50, purple)
            guess.push(purple)
            numberOfGuesses++
        }
    });






}
    

   


update() {
    // console.log(numberOfGuesses);
    // console.log(guess);

    //A check to see if player has guessed 4 colors
    if(numberOfGuesses === 4) {
        guess.push(6)
    }
    //nested loops to check if the guess is correct and in the correct position in the list
    if(numberOfGuesses === 4) {
        gameState.check.play();
        for(let w = 0; w < 4; w++) {
            for(let q = 0; q < 4; q++) {
                console.log(' pre check colorschecked: '+ colorsChecked)
                if(guess[w] === colorsPicked[q] && w === q) {
                    this.add.rectangle(smallXVal, smallYVal, 25, 25, white)
                    console.log(`Guess: ${guess[w]} and ColorPicked: ${colorsPicked[q]}`)
                    colorsChecked.splice(q, 1, 4)
                    smallXVal += 50;
                    correct++;
                    break;
                }
            }
        }
        console.log(colorsChecked)
        console.log(colorsChecked)

        //Nested loop to check if it is the correct color but in the wrong position
        for(let o = 0; o < colorsChecked.length; o++) {
            for(let u = 0; u < colorsChecked.length; u++) {
                console.log(`O: ${o} U: ${u}`)
                if(guess[colorsChecked[u]] === colorsPicked[colorsChecked[o]]){
                    this.add.rectangle(smallXVal, smallYVal, 25, 25, black)
                    console.log(`Guess: ${guess[colorsChecked[u]]} and ColorPicked: ${colorsPicked[o]}`)
                    smallXVal +=50
                    break
                }
            }
        }



        //increments the small boxs y value and resets the xvalue for the next round of guesses
        smallYVal += 75;
        smallXVal = 625;

        //win check
        if(correct == 4) {
            this.add.rectangle(screenCenterX-100, screenCenterY-100, 600, 100, white, 0.75).setOrigin(0.5)
            this.add.text(screenCenterX-100, screenCenterY-125, 'YOU WIN', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
            this.add.text(screenCenterX-100, screenCenterY-100, 'CLICK TO PLAY AGAIN', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
            // this.physics.pause();
            this.input.on('pointerup', () => {
            xVal = 100;
            yVal = 50;
            smallXVal = 625;
            smallYVal = 50;
            colorsPicked = [];
            correct = 0;
            colorsChecked = [0, 1, 2, 3];
                this.scene.restart();
            });
        }
        //Lose check
        if(smallYVal > 750) {
            this.add.rectangle(screenCenterX-100, screenCenterY-100, 600, 150, white, 0.75).setOrigin(0.5)
            this.add.text(screenCenterX-100, screenCenterY-150, 'YOU LOSE', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
            this.add.text(screenCenterX-100, screenCenterY-105, 'THE CORRECT COLOR SEQUENCE WAS:', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
            xVal = screenCenterX-175
            for(let t = 0; t < 4; t++){
                this.add.rectangle(xVal, screenCenterY-80, 12, 12, colorsPicked[t]).setStrokeStyle(2, 0x000000)
                xVal += 50;
            }
            this.add.text(screenCenterX-100, screenCenterY-45, 'CLICK TO PLAY AGAIN', { fontSize: 'bold 30px', fill: 'ffffff' }).setOrigin(0.5);
            // this.physics.pause();
            this.input.on('pointerup', () => {
                xVal = 100;
                yVal = 50;
                smallXVal = 625;
                smallYVal = 50;
                colorsPicked = [];
                correct = 0;
                colorsChecked = [0, 1, 2, 3];
                this.scene.restart();
            })
        }
        correct = 0;
    }

    //resets number of guesses and the guess list and increased the y value to start the next round of guesses
    if(numberOfGuesses === 4 || yVal > 750) {
        yVal += 75;
        numberOfGuesses = 0;
        guess = [];
        colorsChecked = [0, 1, 2, 3];
    }

}//update closing bracket
}//GameScene closing bracket