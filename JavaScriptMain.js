jQuery(document).ready(function(){ 
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


/* Written by Danielle for Contact Us page, for the button to show up */
function getQuote() { 		
	var y = document.getElementById("quotepage");	/*getting information from .quotepage class*/
	if (y.style.display === "none") {		/*hidden at first*/
	  y.style.display = "block";			/*shows message when form is 'submitted'*/
	}
  }

/* Nathan Nav Bar */
function clickNavBar() { 			/*function definition*/
  var x = document.getElementById("icon-bar");	/*getting information from icon-bar*/
  if (x.style.display === "block") {		/*expanded condition*/
    x.style.display = "none";			/*close it*/
  } else {					/*collapsed condition*/
    x.style.display = "block";			/*open it*/
  }
}
