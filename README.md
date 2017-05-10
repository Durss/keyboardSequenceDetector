# What's that stuff .?
Simple typescript class to detect keyboard keys sequences like the Konami code (↑ ↑ ↓ ↓ ← → ← → B A).

# Usage example
```typescript
let detector = new KeyboardSequenceDetector((id:string)=>this.keyboardSequenceHandler(id));
detector.addSequence("konami", KeyboardSequenceDetector.KONAMI_sequence);
detector.addSequence("konami", KeyboardSequenceDetector.KONAMI_sequence_QWERTY);
detector.addSequence("penis", [80,69,78,73,83]);

function keyboardSequenceHandler(sequenceId:string):void {
  console.log(sequenceId + " detected");
}
```

Method **keyboardSequenceHandler()** will be called everytime a sequence is detected and will be given the sequence ID as parameter.
The ID is given to the **addSequence()** method.
