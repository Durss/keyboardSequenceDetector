# What's that stuff .?
Simple typescript class to detect keyboard key sequences like the Konami code (↑ ↑ ↓ ↓ ← → ← → B A).

# Basic usage example
```typescript
let detector = new KeyboardSequenceDetector((id:string)=>this.keyboardSequenceHandler(id) );
detector.addSequence( "konami", KeyboardSequenceDetector.KONAMI_sequence );
detector.addSequence( "konami", KeyboardSequenceDetector.KONAMI_sequence_QWERTY );
detector.addSequence( "penis", [80,69,78,73,83] );

function keyboardSequenceHandler(sequenceId:string):void {
  switch(sequenceId) {
    case "konami":
      console.log("Konami code detected");
      break;
    case "penis":
      console.log("Aaawwww dirty you...! ;) ");
      break;
  }
}
```

Method **keyboardSequenceHandler()** will be called everytime a sequence is detected and will be given the sequence ID as parameter.
The ID is given to the **addSequence()** method.

# Options
Only one option so far, logging the key codes :
```typescript
let detector = new KeyboardSequenceDetector((id:string)=>this.keyboardSequenceHandler(id));
detector.logKeyCodes = true;
```
This is here only to prevent you from having to create alistener by yourself if you need keycodes to create your own key sequence.

# Pre-built sequences
Some pre-built sequences are defined as static vars.
```typescript
KeyboardSequenceDetector.KONAMI_sequence        //UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
KeyboardSequenceDetector.KONAMI_sequence_QWERTY //UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A (with a QWERTY keyboard)
KeyboardSequenceDetector.CAPCOM_sequence        //DOWN Z UP X A Y B C + Enter
KeyboardSequenceDetector.DEBUG_sequence         //DEBUG + Enter
KeyboardSequenceDetector.EDIT_sequence          //EDIT + Enter
KeyboardSequenceDetector.KILL_sequence          //KILL + Enter
KeyboardSequenceDetector.STATS_sequence         //STATS + Enter
KeyboardSequenceDetector.LABEL_sequence         //LABEL + Enter
KeyboardSequenceDetector.LOG_sequence           //LOG + Enter
```
