var main = function(){
	buildGuitarLayout();
}

var buildGuitarLayout = function(){
	var fretLength = 100;
	for(i = 0; i < 1; i++)
	{
		var rowOfFrets = $('<div class="fret">');
		rowOfFrets.appendTo($('.guitar-display'));
		for(j = 0; j < 6; j++)
		{
			var note = $('<div class="note">');
			note.width(40);
			note.height(fretLength);
			note.appendTo(rowOfFrets);
		}
		fretLength = fretLength * .9;
	}
};





$(document).ready(main);
