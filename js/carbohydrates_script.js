/* 
Carbohydrates Script  version 1.0 
Date: 3 July 2020
Author: Mark Bromwich and Steven Pennington

This script runs panel one of the Biology 
page of experiment demonstrations.
*/


// Check that document is fully loaded
$(document).ready(function(){

// The two statements below show one division, 
// and hides the other
$('#sugars').show();
$('#starches').hide();
        
// The function below checks the drop-down, 
// when it's changed, the two methods hide() and  
// show() are simply swapped between the two divisions. 

$('#select_test').change(function () {
		// removes whatever is the current division
        $('#sugars').hide();
        $('#starches').hide();
        
        // gathers the value of the select, and applies that to the show
        $('#'+$(this).val()).show();

});


// Below are the two separate functions executing to 
// two experiments available on panel number one.

// Sugars function - part one 
var button_disabled1 = true

	// function finds button ID and executes function when clicked
	$('#panel_one_button_one').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_one_pic_one').attr('src','images/test_tubes_two.png');
     		// disables the button
     		$("#panel_one_button_one").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled1 = false;
     		
     		} 
 	});
 	
 	// Sugars function - part two
	// function finds button ID and executes function when clicked
 	$('#panel_one_button_two').on({'click': function(){
     		
     			// checks if first button has been clicked / disable
     			if (button_disabled1 == false) {
     				
     				// swaps the second image
         			$('#panel_one_pic_one').attr('src','images/test_tubes_three.png');
         			// disables the second button
         			$("#panel_one_button_two").attr("disabled", "disabled");

 				} else {
 	
 					// Alert box pops-up with error
 					alert("Alert: Science requires careful attention to detail. You must add the Benedict's Reagent first.");
 	
 				}
     		}
 		});
 	
 	// Starches - part one	
 	// function finds button ID and executes function when clicked
	$('#panel_one_button_three').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_one_pic_two').attr('src','images/test_tubes_four.png');
     		// disables the button
     		$("#panel_one_button_three").attr("disabled", "disabled");
     		
     		} 
 	});
	
	$('#panel_one_reset_button').on({'click': function(){
     		
     		// Swaps the image
			$('#panel_one_pic_one').attr('src','images/test_tubes_one.png');
			$('#panel_one_pic_two').attr('src','images/test_tubes_one.png');
			//enable buttons
			document.getElementById("panel_one_button_three").disabled = false;
			document.getElementById("panel_one_button_two").disabled = false;
			document.getElementById("panel_one_button_one").disabled = false;
			button_disabled1 = true
     		} 
 	});
 
 });
 
 
 