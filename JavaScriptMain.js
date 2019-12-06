/* Written by Danielle for Contact Us page, for the button to show up */
function getQuote() { 		
	var y = document.getElementById("quotepage");	/*getting information from .quotepage class*/
	if (y.style.display === "none") {		/*hidden at first*/
	  y.style.display = "block";			/*shows message when form is 'submitted'*/
	}
  }

/* Nathan Nav Bar */
/* Reference https://www.w3schools.com/howto/howto_js_mobile_navbar.asp*/

function clickNavBar() { 			/*function definition*/
  var x = document.getElementById("icon-bar");	/*getting information from icon-bar*/
  if (x.style.display === "block") {		/*expanded condition*/
    x.style.display = "none";			/*close it*/
  } else {					/*collapsed condition*/
    x.style.display = "block";			/*open it*/
  }
}
