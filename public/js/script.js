$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var title = $("#title")
		userText = $('#userText'); 
	
	// Shuffle the contents of container
	title.shuffleLetters();

	// Bind events
	userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			title.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	
});

