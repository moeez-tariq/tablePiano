new p5(); //to counter the issue with random function

//declare global variables
let highscore = -1;
let globalGameSpeed = 2;
let gameObject;
let menuBackgroundPicture1; 
let menuBackgroundPicture2; 
let menuBackgroundPicture3;
let menuBackgroundPicture4; 
let endBackgroundPicture;
let recordScreen1;
let recordScreen2;
let recordScreen3;
let recordScreen4;
let recordScreen5;
let freeScreen0;
let freeScreen1;
let freeScreen2;
let freeScreen3;
let freeScreen4;
let freeScreen5;
let freeScreen6;
let freeScreen7;
let freeScreen8;
let freeScreen9;
let freeScreen10;
let freeScreen11;
let freeScreen12;
let freeScreen13;
let freeScreen14;
let freeScreen15;
let freeScreen16;
let gameScreenBG;
let gameInstructions;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let num10;
let num11;
let num12;
let num13;
let num14;
let num15;
let num16;

let playfair_font; //declare the font named playfair
let background_music;

function preload() //preload all the assets
{
  menuBackgroundPicture1 = loadImage("images/menu_background1.png");
menuBackgroundPicture2 = loadImage("images/menu_background2.png");
menuBackgroundPicture3 = loadImage("images/menu_background3.png");
menuBackgroundPicture4 = loadImage("images/menu_background4.png");
endBackgroundPicture = loadImage("images/end_game.png");
playfair_font = loadFont("playfairDisplay_font.ttf");
recordScreen1 = loadImage("images/record_instruction1.png");
recordScreen2 = loadImage("images/record_instruction2.png");
recordScreen3 = loadImage("images/record_instruction3.png");
recordScreen4 = loadImage("images/record_instruction4.png");
recordScreen5 = loadImage("images/record_instruction5.png");

freeScreen0 = loadImage("images/free01.png");
freeScreen1 = loadImage("images/free1.png");
freeScreen2 = loadImage("images/free2.png");
freeScreen3 = loadImage("images/free3.png");
freeScreen4 = loadImage("images/free4.png");
freeScreen5 = loadImage("images/free5.png");
freeScreen6 = loadImage("images/free6.png");
freeScreen7 = loadImage("images/free7.png");
freeScreen8 = loadImage("images/free8.png");
freeScreen9 = loadImage("images/free9.png");
freeScreen10 = loadImage("images/free10.png");
freeScreen11 = loadImage("images/free11.png");
freeScreen12 = loadImage("images/free12.png");
freeScreen13 = loadImage("images/free13.png");
freeScreen14 = loadImage("images/free14.png");
freeScreen15 = loadImage("images/free15.png");
freeScreen16 = loadImage("images/free16.png");

gameScreenBG = loadImage("images/gameModeBG.png");
gameInstructions = loadImage("images/gameModeinstructions.png");

num1 = loadImage("images/num1-removebg-preview.png");
num2 = loadImage("images/num2-removebg-preview.png");
num3 = loadImage("images/num3-removebg-preview.png");
num4 = loadImage("images/num4-removebg-preview.png");
num5 = loadImage("images/num5-removebg-preview.png");
num6 = loadImage("images/num6-removebg-preview.png");
num7 = loadImage("images/num7-removebg-preview.png");
num8 = loadImage("images/num8-removebg-preview.png");
num9 = loadImage("images/num9-removebg-preview.png");
num10 = loadImage("images/num_a-removebg-preview.png");
num11 = loadImage("images/num_b-removebg-preview.png");
num12 = loadImage("images/num_c-removebg-preview.png");
num13 = loadImage("images/num_d-removebg-preview.png");
num14 = loadImage("images/num_e-removebg-preview.png");
num15 = loadImage("images/num_f-removebg-preview.png");
num16 = loadImage("images/num_g-removebg-preview.png");

  
  background_music = loadSound("music2.mp3");
}


class NoteDrop //noteDrop class that commands the movement of each note
{
  constructor(x, y, noteWidth, noteHeight, noteNumber, canvasWidth, canvasHeight) //constructor initializes everything
  {
    this.note_x = x;
    this.note_y = y;
    this.note_height = noteHeight;
    this.note_width = noteWidth;
    this.canvas_width = canvasWidth;
    this.canvas_height = canvasHeight;
    this.visible = false;
    this.note_number = noteNumber;
  }
  
  movement() //movement of the note from top to bottom of the canvas
  {
    this.note_y = this.note_y + globalGameSpeed; //
    if ((this.note_y + this.note_height >= 0) && (this.note_y + this.note_height <= 20)) //as soon as the bottom of the note enters the canvas
    {
      this.visible = true; //make it visible and this allows for catching it
    }
  }
  
  display() //displays the note
  {
    this.movement();
    if (this.visible == true) //only display the note if it is visible
    {
      if (this.note_number == 1) //for each note
      {
        image(num1, this.note_x, this.note_y); //display its appropriate picture
      }
      else if (this.note_number == 2)
      {
        image(num2, this.note_x, this.note_y);
      }
      else if (this.note_number == 3)
      {
        image(num3, this.note_x, this.note_y);
      }
      else if (this.note_number == 4)
      {
        image(num4, this.note_x, this.note_y);
      }
      else if (this.note_number == 5)
      {
        image(num5, this.note_x, this.note_y);
      }
      else if (this.note_number == 6)
      {
        image(num6, this.note_x, this.note_y);
      }
      else if (this.note_number == 7)
      {
        image(num7, this.note_x, this.note_y);
      }
      else if (this.note_number == 8)
      {
        image(num8, this.note_x, this.note_y);
      }
      else if (this.note_number == 9)
      {
        image(num9, this.note_x, this.note_y);
      }
      else if (this.note_number == 10)
      {
        image(num10, this.note_x, this.note_y);
      }
      else if (this.note_number == 11)
      {
        image(num11, this.note_x, this.note_y);
      }
      else if (this.note_number == 12)
      {
        image(num12, this.note_x, this.note_y);
      }
      else if (this.note_number == 13)
      {
        image(num13, this.note_x, this.note_y);
      }
      else if (this.note_number == 14)
      {
        image(num14, this.note_x, this.note_y);
      }
      else if (this.note_number == 15)
      {
        image(num15, this.note_x, this.note_y);
      }
      else if (this.note_number == 16)
      {
        image(num16, this.note_x, this.note_y);
      }
    }
  }
}

class Game //game class contains all the functionality and game attributes
{
  constructor()
  {
    //defines canvas dimensions
    this.canvasWidth = 800;
    this.canvasHeight = 600;
    
    //defines note dimensions
    this.noteWidth = 75;
    this.noteHeight = 75;
    
    this.gameHealth = 10;
    this.gameScore = 0;
    
    //these arrays contain various note numbers. They are two different arrays in order to avoid overlap of notes
    this.notes1 = [1, 2, 3, 4, 5, 6, 7, 8];
    this.notes2 = [9, 10, 11, 12, 13, 14, 15, 16];
    
    shuffle(this.notes1, true);
    shuffle(this.notes2, true);
    
    this.noteArray = []; //contains the arrays that are displayed
    this.recordArray = []; //contains the array that is recorded (not used since array now recorded in arduino)
    
    //boolean variables to control the game
    this.recordBool = false;
    this.playBool = false;
    this.playingScreen = false;
    this.instructionsBool = true;
    this.backgroundNumber = 0;
    
    this.arrayCounter = 0;
    this.notesInAnArray = 8;
    this.clickCount = 0;
    
    //dimensions of various buttons
    this.menuButtonWidth = 282
    this.menuButtonHeight = 56;
    this.menuButtonX = 38;
    this.menuButton1Y = 357;
    this.menuButton2Y = 445;
    this.menuButton3Y = 533;
    
    this.recordButtonX = 212;
    this.recordButtonY = 369;
    this.recordButtonWidth = 393;
    this.recordButtonHeight = 80;
    
    this.homeButtonX = 22;
    this.homeButtonY = 33;
    this.instructionButtonX = 690;
    this.instructionButtonY = 33;
    this.homeButtonWidth = 95;
    this.homeButtonHeight = 40;
    
    //used to increase game speed
    this.difficultyParameter = 7;
    
    this.gameState = "menuScreen";
    
    this.noteSpacing = 2.5; //this is the random spacing between notes in order to increase difficulty
    
    for (let i = 0; i < this.notesInAnArray; i++) //constructs and initializes note objects
    {
      this.noteArray[i] = new NoteDrop(random(0, this.canvasWidth - this.noteWidth), (i + 1)*(-this.noteHeight * this.noteSpacing), this.noteWidth, this.noteHeight, this.notes1[i], this.canvasWidth, this.canvasHeight);
    }
  }
  
  rainMovement() //rain like movement of notes from the top of canvas to the bottom
  {
    for (let i = 0; i < this.notesInAnArray; i++)
    {
      this.noteArray[i].display();
      fill(0,0,0);
      
      if (this.noteArray[i].note_y > this.canvasHeight && this.noteArray[i].visible == true) //if the note is not caught and goes below canvas
      {
        this.gameHealth = this.gameHealth - 1; //you lose a life
        if (this.gameHealth == 0) //if the lives go to zero
        {
          this.gameState = "endScreen"; //the game ends
        }
        this.noteArray[i].visible = false; //the note also becomes invisible
      }
      
      if (this.noteArray[i].note_y > this.canvasHeight) //as soon as the note goes below the canvas
      {
        this.arraySwitch(i); //switch its number and it should re-emerge at the top of the canvas
      }
    }
  }
  
  arraySwitch(indexOfArray) //this function changes the note numbers in order to make them random and avoid overlap
  {
    if (this.arrayCounter % 2 == 0) //arrayCounter keeps track of what array of notes is being used
    {
      //if array counter is even that means first array is being used and so
      this.noteArray[indexOfArray].note_number = this.notes2[indexOfArray]; //you change the array note numbers and get them from notes2 array
      this.noteArray[indexOfArray].note_y = this.noteArray[this.notesInAnArray -1].note_y - ((indexOfArray + 1) * (this.noteHeight * this.noteSpacing)); //change the y value and ensure all of them are almost equidistant and there is no overlap
      this.noteArray[indexOfArray].note_x = random(0, this.canvasWidth - this.noteWidth); //the x coordinates are random
      this.noteArray[indexOfArray].visible = false; //ensure that the visibility is off
    }
    else
    {
      //same thing here but the notes are taken from the first array instead of the second one
      this.noteArray[indexOfArray].note_number = this.notes1[indexOfArray];
      this.noteArray[indexOfArray].note_y = this.noteArray[this.notesInAnArray -1].note_y - ((indexOfArray + 1) * (this.noteHeight * this.noteSpacing));
      this.noteArray[indexOfArray].note_x = random(0, this.canvasWidth - this.noteWidth);
      this.noteArray[indexOfArray].visible = true;
    }
    
    if (indexOfArray == this.notesInAnArray - 1) //when all the 8 notes in an array have gone beneath the canvas, 
    {
      shuffle(this.notes1, true); //shuffle both arrays and
      shuffle(this.notes2, true);
      this.arrayCounter = this.arrayCounter + 1; //increment the counter to now go for the other array
    }
  }
  
  recordNotes(valueOfNote) //records the value of notes and appends them to the array (not used)
  {
    append(this.recordArray, valueOfNote);
  }
  
  playRecordedNotes() //plays all the notes that are recorded
  {
    let noteString = "102\n"; //sends a message to arduino and allows arduino to know when to play the notes
    writeSerial(noteString);
    
    this.playBool = true; //the game is now in playing mode
    this.recordBool = false; //and not in recording mode
  }
  
  display() //display function of the whole game
  {
    if (this.gameState == "menuScreen") //if the game is in menu mode
    {
      image(menuBackgroundPicture1, 0, 0); //display the menu picture
      //and if the mouse hovers over a button, change the color of the button
      if (mouseX >= this.menuButtonX && mouseX <= this.menuButtonX + this.menuButtonWidth && mouseY >= this.menuButton1Y && mouseY <= this.menuButton1Y + this.menuButtonHeight)
      {
        image(menuBackgroundPicture2, 0, 0);
      }
      else if (mouseX >= this.menuButtonX && mouseX <= this.menuButtonX + this.menuButtonWidth && mouseY >= this.menuButton2Y && mouseY <= this.menuButton2Y + this.menuButtonHeight)
        {
          image(menuBackgroundPicture3, 0, 0);
        }
      else if (mouseX >= this.menuButtonX && mouseX <= this.menuButtonX + this.menuButtonWidth && mouseY >= this.menuButton3Y && mouseY <= this.menuButton3Y + this.menuButtonHeight)
        {
          image(menuBackgroundPicture4, 0, 0);
        }
    }
    else if (this.gameState == "gameScreen") //if game mode is on
    {
      if (this.instructionsBool == true) //see if the instructions page is up
      {
        image(gameInstructions, 0, 0); //provide instructions to the user
      }
      else //else it would be game mode
      {
        image(gameScreenBG, 0, 0); //add the background to the game
        this.rainMovement(); //make sure the notes keep falling
        textSize(15);
        fill(255,255, 255);
        text("SCORE: ", 10, 20); //display score
        text(this.gameScore, 75, 20);
        text("LIVES: ", this.canvasWidth - 87, 20); //display lives
        text(this.gameHealth, this.canvasWidth - 30, 20);
      }
    }
    else if (this.gameState == "freeScreen") //if the game is in free mode
    {
      this.freeModeBackgrounds(); //display different backgrounds for different notes played
    }
    else if (this.gameState == "recordScreen") //if the game is in record mode
    {
      if (this.recordBool == false && this.playBool == false) //see if its the first page
      {
        image(recordScreen1, 0, 0); //then display the "start recording" image
        if (mouseX >= this.recordButtonX && mouseX <= this.recordButtonX + this.recordButtonWidth && mouseY >= this.recordButtonY && mouseY <= this.recordButtonY + this.recordButtonHeight)
        {
          image(recordScreen2, 0, 0); //hovering over the button would change the button color
        }
      }
      else if (this.recordBool == true && this.playBool == false) //if the button is pressed, then start recording
      {
        let valueOfState = "98\n"; //tell arduino that the game is now in recording mode so that it changes state as well
        writeSerial(valueOfState);
        image(recordScreen3, 0, 0); //show image that says stop recording and play
        if (mouseX >= this.recordButtonX && mouseX <= this.recordButtonX + this.recordButtonWidth && mouseY >= this.recordButtonY && mouseY <= this.recordButtonY + this.recordButtonHeight)
        {
          image(recordScreen4, 0, 0); //hovering over the button changes the button color
        }
      }
      else if (this.recordBool == false && this.playBool == true) //when the button is pressed that says stop recording
      {
        image(recordScreen5, 0, 0); //image is display that says playing
        this.playRecordedNotes(); //recorded notes are then played
      }
    }
    else if (this.gameState == "endScreen") //when the lives are lost and game ends
    {
      let stateOfArduino = "103\n"; //tell the arduino that game has ended (sets arduino back to the start position)
      writeSerial(stateOfArduino);
      image(endBackgroundPicture, 0, 0); //show game end image
      if (this.gameScore > highscore) //calculate if you have a highscore
      {
        highscore = this.gameScore; //if yes then change the highscore value to your current score
      }
      fill(255, 255, 255);
      textSize(23);
      text("HIGH SCORE: ", 295, 365); //display high score
      text(highscore, 460, 365);
      text("YOUR SCORE: ", 295, 475); //display your score
      text(this.gameScore, 460, 475);
    }
    else
    {
      background(255, 0, 0);
    }
  }
  
  backgroundVariableChange(keyValue) //changes the background variable based on the data received
  {
    this.backgroundNumber = keyValue;
  }
  
  freeModeBackgrounds() //the background variable is used to display appropriate pictures for each note
  {
    if (this.backgroundNumber == 0) //every note has a different picture associated with it
    {
      image(freeScreen0, 0, 0);
    }
    else if (this.backgroundNumber == 1)
    {
      image(freeScreen1, 0, 0);
    }
    else if (this.backgroundNumber == 2)
    {
      image(freeScreen2, 0, 0);
    }
    else if (this.backgroundNumber == 3)
    {
      image(freeScreen3, 0, 0);
    }
    else if (this.backgroundNumber == 4)
    {
      image(freeScreen4, 0, 0);
    }
    else if (this.backgroundNumber == 5)
    {
      image(freeScreen5, 0, 0);
    }
    else if (this.backgroundNumber == 6)
    {
      image(freeScreen6, 0, 0);
    }
    else if (this.backgroundNumber == 7)
    {
      image(freeScreen7, 0, 0);
    }
    else if (this.backgroundNumber == 8)
    {
      image(freeScreen8, 0, 0);
    }
    else if (this.backgroundNumber == 9)
    {
      image(freeScreen9,0, 0);
    }
    else if (this.backgroundNumber == 10)
    {
      image(freeScreen10, 0, 0);
    }
    else if (this.backgroundNumber == 11)
    {
      image(freeScreen11, 0, 0);
    }
    else if (this.backgroundNumber == 12)
    {
      image(freeScreen12, 0, 0);
    }
    else if (this.backgroundNumber == 13)
    {
      image(freeScreen13, 0, 0);
    }
    else if (this.backgroundNumber == 14)
    {
      image(freeScreen14, 0, 0);
    }
    else if (this.backgroundNumber == 15)
    {
      image(freeScreen15, 0, 0);
    }
    else if (this.backgroundNumber == 16)
    {
      image(freeScreen16, 0, 0);
    }
  }
  
  
  notePressed(keyValue) //this is used in game Mode - keyValue is the key pressed on the table piano sent by arduino to p5js
  {
    for (let i = 0; i < this.notesInAnArray; i++) //in all the arrays
    {
      if (this.noteArray[i].visible == true) //if the note is visible (on screen)
      {
        if (keyValue == this.noteArray[i].note_number) //check if the key pressed matches a note
        {
          this.gameScore = this.gameScore + 1; //increase the game score
          this.noteArray[i].visible = false; //make the visibility false
          if (this.gameScore % this.difficultyParameter == 0 && this.noteSpacing > 1.5) //make the game harder but not very hard
          {
            this.noteSpacing = this.noteSpacing - 0.3; //decrease the distance between the notes
            globalGameSpeed = globalGameSpeed + 0.5; //increase game speed
          }
          break; //avoid checking other keys because already one has been found
        }
      }
    }
  }
}

//setup function
function setup() {
  createCanvas(800, 600); //creates canvas of desired size
  textFont(playfair_font); //use the playfair font to keep everything consistent
}

gameObject = new Game(); //create object of the game class

function draw() { 
  background(220); //arbitary background for debugging
  // if (gameObject.gameState == "menuScreen") //only play the music when the user is in the menu
  // {
    if (!background_music.isPlaying()) //ensure the music keeps looping forever
    {
      background_music.play(); //but also ensures that it doesnt start from the start every time
    }
  // }
  // else //if the game is in any other state
  // {
  //   if (background_music.isPlaying()) //check if the music is playing
  //   {
  //     background_music.stop(); //if yes then stop the music
  //   }
 // }
  gameObject.display(); //displays all the screens
}

function keyTyped() //key typed built in function
{
  
  if (gameObject.gameState == "endScreen") //when the game has ended
  {
      if (key === 'h' || key === 'H') //you can press h to return to home/restart game
      {  
        gameObject = new Game(); //a new object is assigned to the variables and the constructor initializes everything
        globalGameSpeed = 2;
      }
  }
  
  if (gameObject.gameState == "menuScreen") //if the game is in menu screen
  {
    if (keyCode == ENTER) //use enter to 
    {
      setUpSerial(); //set up serial
    }
  }
  return false;
}

function readSerial(data) //callback function for read serial
{
  if (data != null) //if the data is good
  {
      if (gameObject.gameState == "gameScreen") //if game mode is on
      {
        if (data >= 1 && data <= 16) //and the data is between the range we want (the keys)
        {
          gameObject.notePressed(data); //tell the game that a note has been pressed and which one
        }
      }
      
      if (gameObject.gameState == "recordScreen" && gameObject.recordBool == true) //if the game is in record mode and is recording
      {
        if (data >= 1 && data <= 16) //if any note is pressed
        {
          gameObject.recordNotes(data); //record the notes (not used)
        }
      }
    
    if (gameObject.gameState == "freeScreen") //if the game is in free mode
    {
      if (data >= 1 && data <= 16) //and the data is what we want
      {
        gameObject.backgroundVariableChange(data); //we know a note has been played and so change the backgrounds
      }
    }
  }
}

function mouseClicked() //mouseclicked function
{
  if (gameObject.gameState == "menuScreen") //if the game is in menu screen
    {
      //whatever button is pressed, change the gameState to that specific state
      if (mouseX >= gameObject.menuButtonX && mouseX <= gameObject.menuButtonX + gameObject.menuButtonWidth && mouseY >= gameObject.menuButton1Y && mouseY <= gameObject.menuButton1Y + gameObject.menuButtonHeight)
      {
        gameObject.gameState = "freeScreen";
        let screenState2 = "97\n"; //tell arduino that we are in free mode now
        writeSerial(screenState2);
      }
      else if (mouseX >= gameObject.menuButtonX && mouseX <= gameObject.menuButtonX + gameObject.menuButtonWidth && mouseY >= gameObject.menuButton2Y && mouseY <= gameObject.menuButton2Y + gameObject.menuButtonHeight)
      {
        gameObject.gameState = "gameScreen";
        gameObject.instructionsBool = true;
      }
      else if (mouseX >= gameObject.menuButtonX && mouseX <= gameObject.menuButtonX + gameObject.menuButtonWidth && mouseY >= gameObject.menuButton3Y && mouseY <= gameObject.menuButton3Y + gameObject.menuButtonHeight)
      {
        gameObject.gameState = "recordScreen"; //change the mode to record mode
      }
    }
  
  if (gameObject.gameState == "recordScreen") //if the game is in record mode
  {
    //check to see if the button is pressed or not and then change boolean variables accordingly
    if (mouseX >= gameObject.recordButtonX && mouseX <= gameObject.recordButtonX + gameObject.recordButtonWidth && mouseY >= gameObject.recordButtonY && mouseY <= gameObject.recordButtonY + gameObject.recordButtonHeight && gameObject.recordBool == false && gameObject.playBool == false)
    {
      gameObject.recordBool = true;
      gameObject.clickCount = 0; //this is so that button is not accidentally double clicked
    }
    else if (mouseX >= gameObject.recordButtonX && mouseX <= gameObject.recordButtonX + gameObject.recordButtonWidth && mouseY >= gameObject.recordButtonY && mouseY <= gameObject.recordButtonY + gameObject.recordButtonHeight && gameObject.recordBool == true && gameObject.playBool == false)
    {
      gameObject.clickCount++;
      if (gameObject.clickCount >= 3)
      {
        gameObject.recordBool = false;
        gameObject.playBool = true;
        gameObject.playingScreen = true;
      }
    }
  
    if (mouseX >= gameObject.homeButtonX && mouseX <= gameObject.homeButtonX + gameObject.homeButtonWidth && mouseY >= gameObject.homeButtonY && mouseY <= gameObject.homeButtonY + gameObject.homeButtonHeight && gameObject.playingScreen == true)
    {
      gameObject.playingScreen = false;
      gameObject.gameState = "menuScreen"; //go to the menu state if the home button is pressed
    }
  }
  
  if (gameObject.gameState == "freeScreen") //if the game is in free mode
  {
    if (mouseX >= gameObject.homeButtonX && mouseX <= gameObject.homeButtonX + gameObject.homeButtonWidth && mouseY >= gameObject.homeButtonY && mouseY <= gameObject.homeButtonY + gameObject.homeButtonHeight)
    {
      //if the home button is pressed
      gameObject.backgroundNumber = 0; //reinitalize variable so that instruction screen pops up again
      gameObject.gameState = "menuScreen"; //go back to menu state
      let screenState3 = "104\n"; //tell arduino that we are going back to menu screen
      writeSerial(screenState3);
    }
  }
  
  if (gameObject.gameState == "gameScreen") //if the game is in game mode
  {
    if (gameObject.instructionsBool == true && mouseX >= gameObject.instructionButtonX && mouseX <= gameObject.instructionButtonX + gameObject.homeButtonWidth && mouseY >= gameObject.instructionButtonY && mouseY <= gameObject.instructionButtonY + gameObject.homeButtonHeight)
    {
      //if the instructions button is pressed
      gameObject.instructionsBool = false; //set the boolean to false
      let gameScreenState = "99\n"; //tell arduino that we are in game mode now
      writeSerial(gameScreenState);
    }
    
    if (gameObject.instructionsBool == true && mouseX >= gameObject.homeButtonX && mouseX <= gameObject.homeButtonX + gameObject.homeButtonWidth && mouseY >= gameObject.homeButtonY && mouseY <= gameObject.homeButtonY + gameObject.homeButtonHeight)
    {
      //if the home button is pressed
      gameObject.instructionsBool = true; //ensure the next time instruction page pops up
      gameObject.gameState = "menuScreen"; //go back to menu screen mode
      let stateOfArduino2 = "103\n"; //tell arduino as well that you have gone back to menu screen mode
      writeSerial(stateOfArduino2);
    }
  }
}

remove();





























