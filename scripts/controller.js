var notes = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];

var main = function(){
	buildGuitarLayout();
	console.log(notes.length);
}

var buildGuitarLayout = function(){
	var fretLength = 100;
	for(i = 0; i < 24; i++)
	{
		var rowOfFrets = $('<div class="fret">');
		rowOfFrets.height(fretLength);
		rowOfFrets.appendTo($('.guitar-display'));
		for(j = 0; j < 6; j++)
		{
			var note = $('<div class="note">');
			note.width(40);
			note.height(fretLength);
			note.appendTo(rowOfFrets);
		}
		fretLength = fretLength * .95;
	}
};





$(document).ready(main);
