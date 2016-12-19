var tonals = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
var buildingMap = [4, 9, 2, 7, 11, 4];
var tonalHits = [0,0,0,0,0,0,0,0,0,0,0,0];
var majorKeyWalkthroughPattern = [1,3,6,8,10];
var possibleKeys = [1,1,1,1,1,1,1,1,1,1,1];

var main = function(){
	buildGuitarLayout();
	$('.note').click(noteClicked);
}

var removeKeysFromPossibilities = function(){
	for(var index in tonalHits)
	{
		if(tonalHits[index] != 0) //we have our first hit!
		{
			for(var walkThru in majorKeyWalkthroughPattern)
			{
				var steps = majorKeyWalkthroughPattern[walkThru];
				if(index + steps > 11)
				{
					if(tonalHits[index+steps-12] > 0)
					{
						possibleKeys[index] = 0;
						break;
					}
				}
				else
				{
					if(tonalHits[index+steps] > 0)
					{
						possibleKeys[index] = 0;
						break;
					}
				}
			}			
		}
		else
		{
			possibleKeys[index] = 0;
		}
	}
};

var noteClicked = function(){
	$(this).toggleClass('selected-note');
	var classes = $(this).attr('class');
	for(var indexTone in tonals)
	{
		if(classes.includes(tonals[indexTone]))
		{
			console.log(tonals[indexTone]);
			if(classes.includes("selected-note"))
			{
				tonalHits[indexTone]++;
			}
			else
			{
				tonalHits[indexTone]--;
			}
			console.log(tonalHits[indexTone]);
		}
		
	}
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
			var note = $('<div class="note">');
			if(i == 0)
			{
				note.addClass('first-line-note');
			}
			note.addClass(tone);
			note.width(40);	
			note.height(fretLength);
			note.appendTo(rowOfFrets);
		}
		fretLength = fretLength * .95;
		incrementBuildingMap();
	}
};





$(document).ready(main);
