var tonals = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
var buildingMap = [4, 9, 2, 7, 11, 4];
var selectedNotes = new Set();


var main = function(){
	buildGuitarLayout();
	$('.note').click(noteClicked);
}

var noteClicked = function(){
	$(this).toggleClass('selected-note');
};

var incrementBuildingMap = function(){
	for(k = 0; k < 6; k++)
	{	
		if(buildingMap[k] == 11)
		{
			buildingMap[k] = 0;
		}
		else
		{
		buildingMap[k] = buildingMap[k]+1;
		}
	}
};

var buildGuitarLayout = function(){
	var fretLength = 100;
	for(i = 0; i < 24; i++)
	{
		var rowOfFrets = $('<div class="fret">');
		rowOfFrets.height(fretLength);
		rowOfFrets.appendTo($('.guitar-display'));
		for(j = 0; j < 6; j++)
		{
			var tone = tonals[buildingMap[j]]; 
			console.log(tone);
			var note = $('<div class="note">');
			note.width(40);	
			note.height(fretLength);
			note.appendTo(rowOfFrets);
		}
		fretLength = fretLength * .95;
		incrementBuildingMap();
	}
};





$(document).ready(main);
