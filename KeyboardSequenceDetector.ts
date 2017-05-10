/**
 * Created by durss
 */
class KeyboardSequenceDetector {
	public static KONAMI_sequence:number[]			= [38,38,40,40,37,39,37,39,66,65];//UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
	public static KONAMI_sequence_QWERTY:number[]	= [38,38,40,40,37,39,37,39,66,81];//UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
	public static CAPCOM_sequence:number[]			= [40,90,38,88,65,89,66,67,13];//DOWN Z UP X A Y B C + Enter
	public static DEBUG_sequence:number[]			= [68,69,66,85,71,13];//DEBUG + Enter
	public static EDIT_sequence:number[]			= [69,68,73,84,13];//EDIT + Enter
	public static KILL_sequence:number[]			= [75,73,76,76,13];//KILL + Enter
	public static STATS_sequence:number[]			= [83,84,65,84,83,13];//STATS + Enter
	public static LABEL_sequence:number[]			= [76,65,66,69,76,13];//LABEL + Enter
	public static LOG_sequence:number[]				= [76,79,71,13];//LOG + Enter

	private _logKeyCodes:boolean;
	private _callback:(id:string)=>void;
	private _sequences:{id:string, keys:number[], pointer:number}[];

	/**
	 * Create an instance of KeyboardSequenceDetector
	 * 
	 * @param callback		function called when a sequence is detected
	 */
	constructor(callback:(id:string)=>void) {
		this._callback = callback;
		this.initialize();
	}


	/********************
	 * GETTER / SETTERS *
	 ********************/
	 public set logKeyCodes(value:boolean) { this._logKeyCodes = value; }



	/******************
	 * PUBLIC METHODS *
	 ******************/
	 public addSequence(id:string, sequence:number[]):void {
		this._sequences.push({id:id, keys:sequence, pointer:0});
	 } 



	/*******************
	 * PRIVATE METHODS *
	 *******************/
	/**
	 * Initializes the class
	 */
	private initialize():void {
		this._sequences = [];
		document.addEventListener("keyup", (e:KeyboardEvent) => this.keyUpHandler(e));
	}

	/**
	 * Called when the key is released
	 */
	private keyUpHandler(event:KeyboardEvent):void {
		//Do not capture if writing on a textfield.
		// if(event.target is TextField) return;
		// console.log(event.target instanceof HTMLInputElement)
		
		var i:number, len:number, sequence:{id:string,keys:number[],pointer:number}, keyCode:number;
		len		= this._sequences.length;
		keyCode = event.keyCode;
		if(this._logKeyCodes) {
			console.log("KeyCode :: "+keyCode);
		}
		for(i = 0; i < len; ++i) {
			sequence = this._sequences[i];
			if(keyCode == sequence.keys[sequence.pointer]) {
				sequence.pointer ++;
				if(sequence.pointer == sequence.keys.length){
					sequence.pointer = 0;
					if(this._callback) {
						this._callback(sequence.id);
					}
				}
			}else {
				sequence.pointer = 0;
			}
		}
	}
}
