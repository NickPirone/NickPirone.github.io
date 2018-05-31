/*
	em:  font-size of relative parent
	rem:  font-size of 'html'.  root element
	
	we can use %ages for box items.  this will set them based on their parent's values.
	always use %ages for margins.  these will be based on parent's WIDTH, not height (scrolling).

*/



var main = function(){
	buildHeader();
	buildBody();
}













$(document).ready(main);