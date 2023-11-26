//Define the pins used for the ultrasonic sensor, buzzer, buttons, and LED
const int pingPin = 2; //Trigger Pin of Ultrasonic Sensor
const int echoPin = 3; //Echo Pin of Ultrasonic Sensor
const int buzzerPin = 8;
const int LEDbutton = 7;

//Initialize variables used in the program
int pressed = 0;
long distance = 0;
int arduinoState = 100;
int recordCounter = 0;
int recordArray[100];

int stateValue = 0; //helps change the state of Arduino (sent by p5js)

//Include the pitches library for generating tones
#include "pitches.h"

void setup()
{
 //Start serial communication at 9600 baud
 Serial.begin(9600);

 //Set the ultrasonic sensor pins as output and input respectively
 pinMode(pingPin, OUTPUT);
 pinMode(echoPin, INPUT);

 //Set the LED pin as an output
 pinMode(LEDbutton, OUTPUT);


 //Turn off the LED initially
 digitalWrite(LEDbutton, LOW);
}

void loop() 
{
  if (arduinoState == 100)  //menu mode
  {
    digitalWrite(LEDbutton, LOW); //this means that the sensor is not working
    while (Serial.available()) //if serial is available
    {
      stateValue = Serial.parseInt(); //then parseInt and see what p5js has sent us
      if (stateValue == 99) //game mode
      {
        arduinoState = 99; //set arduino state to 99 as well which is game mode
        digitalWrite(LEDbutton, LOW);
        break; //we have the state so we can now go to that state       
      }
      else if (stateValue == 98) //record mode
      {
        arduinoState = 98; //set arduino to record mode as well
        digitalWrite(LEDbutton, LOW);
        break; //we have the state so we can leave
      }
      else if (stateValue == 97) //free mode
      {
        arduinoState = 97; //set arduino state to free mode
        digitalWrite(LEDbutton, LOW);
        break; //we have the state so we can leave
      }
    }    
  }
  else if (arduinoState == 99) //game Mode
  {
    sensorReading(); //start the sensor
    digitalWrite(LEDbutton, HIGH); //turn on LED to indicate the sensor is on

    while (Serial.available()) //if serial is available
    {
        int changeOfState = Serial.parseInt(); //use the parseInt functiion
        if (changeOfState == 103) //if the value is 103, this means that the p5js program has left the game Mode
        {
          arduinoState = 100; //so arduino can also leave the game mode state
          break;
        }
        Serial.read(); //keep reading and ignoring the serial values until 103 is reached
    }
  }
  else if (arduinoState == 98)
  {
    digitalWrite(LEDbutton, HIGH); //turn on LED to indicate the sensor is on
    sensorReading(); // start the sensor
    int dataNote;

    while (Serial.available()) //see if serial is available
    {
        int playSound = Serial.parseInt(); //parse the serial for integer
        if (playSound == 102) //if it is 102, we know that p5js wants us to play the recorded sound
        {
          for (int i = 0; i < recordCounter; i++)  //go through the array that has recorded notes
          {
            playRecordedNote(recordArray[i]); //play each note
            recordArray[i] = 0; //then empty that location for the next time
          }
          arduinoState = 100; //go back to state 100 which is menu state
          recordCounter = 0; //initialize the record counter to 0 as well for the next time
          break; //break the loop
        }
        Serial.read();
      }
  }
  else if (arduinoState == 97) //if you are in free mode
  {
    sensorReading(); // start the sensor
    digitalWrite(LEDbutton, HIGH); //turn on LED to indicate the sensor is on

    while (Serial.available()) //check if serial is available
    {
        int stateChange = Serial.parseInt(); //parse the serial for integers
        if (stateChange == 104) //if it is 104
        {
          arduinoState = 100; //p5js has left free mode and is in menu mode so arduino does the same
          break;
        }
        Serial.read(); //keep reading serial to ignore irrelevant information
    }    
  }
}


void playRecordedNote(int valueOfNote) //play recorded notes
{
  if (valueOfNote == 1)
  {
    tone(buzzerPin, NOTE_C4, 400); //for 400ms
  }
  else if (valueOfNote == 2)
  {
    tone(buzzerPin, NOTE_E4, 400);
  }
  else if (valueOfNote == 3)
  {
    tone(buzzerPin, NOTE_G4, 400);
  }
  else if (valueOfNote == 4)
  {
    tone(buzzerPin, NOTE_A4, 400);
  }
  else if (valueOfNote == 5)
  {
    tone(buzzerPin, NOTE_C5, 400);
  }
  else if (valueOfNote == 6)
  {
    tone(buzzerPin, NOTE_D5, 400);
  }
  else if (valueOfNote == 7)
  {
    tone(buzzerPin, NOTE_E5, 400);
  }
  else if (valueOfNote == 8)
  {
    tone(buzzerPin, NOTE_G5, 400);
  }
  else if (valueOfNote == 9)
  {
    tone(buzzerPin, NOTE_A5, 400);
  }
  else if (valueOfNote == 10)
  {
    tone(buzzerPin, NOTE_B5, 400);
  }
  else if (valueOfNote == 11)
  {
    tone(buzzerPin, NOTE_D6, 400);
  }
  else if (valueOfNote == 12)
  {
    tone(buzzerPin, NOTE_E6, 400);
  }
  else if (valueOfNote == 13)
  {
    tone(buzzerPin, NOTE_G6, 400);
  }
  else if (valueOfNote == 14)
  {
    tone(buzzerPin, NOTE_A5, 400);
  }
  else if (valueOfNote == 15)
  {
    tone(buzzerPin, NOTE_B5, 400);
  }
  else if (valueOfNote == 16)
  {
    tone(buzzerPin, NOTE_C5, 400);
  }
  else 
  {
    tone(buzzerPin, NOTE_C5, 400);
  }
  delay(408); // a small delay so it sounds nice
}

//Function to read the ultrasonic sensor and play a tone based on the distance measured
void sensorReading()
{
  //Send a short low pulse
  digitalWrite(pingPin, LOW);
  delay(2); //delay to avoid complications
  digitalWrite(pingPin, HIGH); //sends a high pulse for 10 microseconds
  delay(10);
  digitalWrite(pingPin, LOW);
  distance = pulseIn(echoPin, HIGH); //Measure the duration of the ultrasonic pulse and calculate the distance
  distanceNotes(distance); //play the notes based on the distance
  Serial.println(distance);
  delay(300);
}

void distanceNotes(long distance) 
{
  if (distance >= 2920) //if the distance is greater than 2920
  {
    noTone(8); //then dont play anything
    Serial.println(0); //send 0 to serial to indicate nothing is being played
    pressed = 0; //reinitialize the key pressed variable to 0 so other keys can be pressed
  }
  else if (distance >= 2790 && pressed == 0) //for each distance, there is a specific note
  {
    tone(buzzerPin, NOTE_C5, 400);
    if (arduinoState == 98) //f the arduino is in record mode
    {
      recordArray[recordCounter] = 16; //record the note number in the array
      recordCounter++; //increment counter for the future
    }
    Serial.println(16); //print the serial and send to p5js for it to be dealt with appropriately
    pressed = 1; //do this to avoid the same note being played repeatedly 
  }
  else if (distance >= 2630 && pressed == 0)
  {
    tone(buzzerPin, NOTE_B5, 400);
    Serial.println(15);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 15;
      recordCounter++;
    }
  }
  else if (distance >= 2430 && pressed == 0)
  {
    tone(buzzerPin, NOTE_A5, 400);
    Serial.println(14);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 14;
      recordCounter++;
    }
  }
  else if (distance >= 2260 && pressed == 0)
  {
    tone(buzzerPin, NOTE_G6, 400);
    Serial.println(13);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 13;
      recordCounter++;
    }
  }
  else if (distance >= 2080 && pressed == 0)
  {
    tone(buzzerPin, NOTE_E6, 400);
    Serial.println(12);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 12;
      recordCounter++;
    }
  }
  else if (distance >= 1920 && pressed == 0)
  {
    tone(buzzerPin, NOTE_D6, 400);
    Serial.println(11);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 11;
      recordCounter++;
    }
  }
  else if (distance >= 1720 && pressed == 0)
  {
    tone(buzzerPin, NOTE_B5, 400);
    Serial.println(10);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 10;
      recordCounter++;
    }
  }
  else if (distance >= 1530 && pressed == 0)
  {
    tone(buzzerPin, NOTE_A5, 400);
    Serial.println(9);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 9;
      recordCounter++;
    }
  }
  else if (distance >= 1355 && pressed == 0)
  {
    tone(buzzerPin, NOTE_G5, 400);
    Serial.println(8);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 8;
      recordCounter++;
    }
  }
  else if (distance >= 1160 && pressed == 0)
  {
    tone(buzzerPin, NOTE_E5, 400);
    Serial.println(7);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 7;
      recordCounter++;
    }
  }
  else if (distance >= 1015 && pressed == 0)
  {
    tone(buzzerPin, NOTE_D5, 400);
    Serial.println(6);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 6;
      recordCounter++;
    }
  }
  else if (distance >= 825 && pressed == 0)
  {
    tone(buzzerPin, NOTE_C5, 400);
    Serial.println(5);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 5;
      recordCounter++;
    }
  }
  else if (distance >= 660 && pressed == 0)
  {
    tone(buzzerPin, NOTE_A4, 400);
    Serial.println(4);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 4;
      recordCounter++;
    }
  }
  else if (distance >= 470 && pressed == 0)
  {
    tone(buzzerPin, NOTE_G4, 400);
    Serial.println(3);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 3;
      recordCounter++;
    }
  }
  else if (distance > 310 && pressed == 0)
  {
    tone(buzzerPin, NOTE_E4, 400);
    Serial.println(2);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 2;
      recordCounter++;
    }
  }
  else if (distance <= 310 && pressed == 0)
  {
    tone(buzzerPin, NOTE_C4, 400);
    Serial.println(1);
    pressed = 1;
    if (arduinoState == 98)
    {
      recordArray[recordCounter] = 1;
      recordCounter++;
    }
  }
}