var main = function(){
	buildGuitarLayout();
}

var buildGuitarLayout = function(){
	for(i = 0; i < 1; i++)
	{
		var fretLength = 100;
		for(j = 0; j < 6; j++)
		{
			var fret = $('<div class="fret">');
			fret.width(40);
			var fretString = fretLength + "px";
			fret.height(fretLength);
			fret.appendTo($('.guitar-display'));
		}
	}
};





$(document).ready(main);
