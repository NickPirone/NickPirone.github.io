var main = function(){
	buildGuitarLayout();
}

var buildGuitarLayout = function(){
	for(i = 0; i < 1; i++)
	{
		var fretLength = 20;
		for(j = 0; j < 6; j++)
		{
			var fret = $('<div class="fret">');
			fret.appendTo($('.guitar-display'));
		}
	}
};





$(document).ready(main);
