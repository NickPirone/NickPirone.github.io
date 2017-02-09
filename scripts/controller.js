var tonals = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
var buildingMap = [4, 9, 2, 7, 11, 4];
var tonalHits = [0,0,0,0,0,0,0,0,0,0,0,0];
var majorKeyWalkthroughPattern = [1,3,6,8,10];
var possibleKeys = [1,1,1,1,1,1,1,1,1,1,1];

var main = function(){
	buildGuitarLayout();
	$('.note').click(noteClicked);
	var boxPosition = $('#key-container-box').offset().top;	
	$('#key-container-box').attr('data-offset-top',boxPosition);
}

var updateTable = function(){
	$('.key-table-item').each(function(keyIndex){
		if(possibleKeys[keyIndex] == 0)
		{
			$(this).addClass('not-viable-key');
		}
		else
		{
			$(this).removeClass('not-viable-key');
		}
	});
};

var removeKeysFromPossibilities = function(){
	//console.log(tonalHits);
	possibleKeys = [1,1,1,1,1,1,1,1,1,1,1];
	for(index = 0; index < 12; index++)
	{
		//console.log("checking tonals for: " + tonals[index]);
		for(walkThruIndex = 0; walkThruIndex < 5; walkThruIndex++)
		{
			var steps = majorKeyWalkthroughPattern[walkThruIndex];
			if(index + steps > 11)
			{
				//console.log(tonals[index+steps-12]);
				if(tonalHits[index+steps-12] > 0)
				{
					possibleKeys[index] = 0;
					break;
				}
			}
			else
			{
				//console.log(tonals[index+steps]);
				if(tonalHits[index+steps] > 0)
				{
					possibleKeys[index] = 0;
					break;
				}
			}
			
		}

	}
};

var noteClicked = function(){
	$(this).toggleClass('selected-note');
	var classes = $(this).attr('class');
	for(var indexTone in tonals)
	{
		if($(this).hasClass(tonals[indexTone]))
		{
			if(classes.includes("selected-note"))
			{
				tonalHits[indexTone]++;
			}
			else
			{
				tonalHits[indexTone]--;
			}
		}
		
	}
	removeKeysFromPossibilities();
	updateTable();
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
	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();
	var fretWidth = windowHeight * .1;
	$('.guitar-display').width(fretWidth * 6);
	console.log(fretWidth);
	var fretLength = fretWidth * 2.2;
	for(i = 0; i < 24; i++)
	{
		var rowOfFrets = $('<div class="fret">');
		rowOfFrets.width(fretWidth * 6);
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
			note.width(fretWidth);	
			note.height(fretLength);
			note.appendTo(rowOfFrets);
		}
		fretLength = fretLength * .95;
		incrementBuildingMap();
	}
};





$(document).ready(main);
