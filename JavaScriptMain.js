jQuery(document).ready(function(){ 
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


function QuoteUs(){
	var form = document.getElementById('Monster Hunter Quote'); /* this code is from the textbook*/

	addEvent(form, 'submit', function(e) {
		e.preventDefault();
		var elements = this.elements; 
		var username = elements.username.value
		var msg = 'Welcome' + username;
		document.getElementById('main').textContent = msg;
	});
}; 

/* Written by Danielle for Contact Us page, for the button to show up */
function getQuote() { 		
	var y = document.getElementById("quotepage");	/*getting information from .quotepage class*/
	if (y.style.display === "none") {		/*hidden at first*/
	  y.style.display = "block";			/*shows message when form is 'submitted'*/
	}
  }