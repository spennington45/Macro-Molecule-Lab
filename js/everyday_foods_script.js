/* 
Every day foods Script  version 1.0 
Date: 3 July 2020
Author: Steven Pennington

This script runs panel one of the Biology 
page of experiment demonstrations.
*/


// Check that document is fully loaded
$(document).ready(function(){

// The two statements below show one division, 
// and hides the other
$('#gelatin').show();
$('#apple_juice').hide();
$('#ritz_cracker').hide();
$('#skim_milk').hide();
        
// The function below checks the drop-down, 
// when it's changed, the two methods hide() and  
// show() are simply swapped between the two divisions. 

$('#select_test_panel_four').change(function () {
		// removes whatever is the current division
        $('#gelatin').hide();
		$('#apple_juice').hide();
		$('#ritz_cracker').hide();
		$('#skim_milk').hide();
        
        // gathers the value of the select, and applies that to the show
        $('#'+$(this).val()).show();
		
});


// Below are the two separate functions executing to 
// two experiments available on panel number one.

// gelatin function - part one 
var button_disabled2 = true
var button_disabled3 = true
var button_disabled4 = true
var button_disabled5 = true

	// function finds button ID and executes function when clicked
	$('#panel_four_button_one').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_four_pic_one').attr('src','images/everyday_food_test_tube_two.png');
     		// disables the button
     		$("#panel_four_button_one").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled2 = false;
     		
     		} 
 	});
 	
 	// gelatin function - part two
	// function finds button ID and executes function when clicked
 	$('#panel_four_button_two').on({'click': function(){
     		
     			// checks if first button has been clicked / disable
     			if (button_disabled2 == false) {
     				
         			// disables the second button
         			$("#panel_four_button_two").attr("disabled", "disabled");

 				} else {
 	
 					// Alert box pops-up with error
 					alert("Alert: Science requires careful attention to detail. You must add the Benedict's Reagent first.");
 	
 				}
     		}
 		});
 	
 	// gelatin - part three	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_three').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_two').attr('src','images/everyday_food_test_tube_three.png');
     		// disables the button
     		$("#panel_four_button_three").attr("disabled", "disabled");
     		
     		} 
 	});
	
 	// gelatin - part four	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_four').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_three').attr('src','images/everyday_food_test_tube_four.png');
     		// disables the button
     		$("#panel_four_button_four").attr("disabled", "disabled");
     		
     		} 
 	});
	
	// Apple Juice - part one	
	// function finds button ID and executes function when clicked
	$('#panel_four_button_five').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_four_pic_four').attr('src','images/everyday_food_test_tube_five.png');
     		// disables the button
     		$("#panel_four_button_five").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled3 = false;
     		
     		} 
 	});
 	
	// Apple Juice - part two	
	// function finds button ID and executes function when clicked
 	$('#panel_four_button_six').on({'click': function(){
     		
     			// checks if first button has been clicked / disable
     			if (button_disabled3 == false) {
     				
					// swaps the second image
         			$('#panel_four_pic_four').attr('src','images/everyday_food_test_tube_three.png');
         			// disables the second button
         			$("#panel_four_button_six").attr("disabled", "disabled");

 				} else {
 	
 					// Alert box pops-up with error
 					alert("Alert: Science requires careful attention to detail. You must add the Benedict's Reagent first.");
 	
 				}
     		}
 		});
 	
 	// Apple Juice - part three	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_seven').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_five').attr('src','images/everyday_food_test_tube_three.png');
     		// disables the button
     		$("#panel_four_button_seven").attr("disabled", "disabled");
     		
     		} 
 	});
	
	// Apple Juice - part one	
	$('#panel_four_button_eight').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_six').attr('src','images/everyday_food_test_tube_three.png');
     		// disables the button
     		$("#panel_four_button_eight").attr("disabled", "disabled");
     		
     		} 
 	});
	
	// Ritz Cracker - part one	
	// function finds button ID and executes function when clicked
	$('#panel_four_button_nine').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_four_pic_seven').attr('src','images/everyday_food_test_tube_five.png');
     		// disables the button
     		$("#panel_four_button_nine").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled4 = false;
     		
     		} 
 	});
 	
	// Ritz Cracker - part two	
	// function finds button ID and executes function when clicked
 	$('#panel_four_button_ten').on({'click': function(){
     		
     			// checks if first button has been clicked / disable
     			if (button_disabled4 == false) {
     				
					// swaps the second image
         			$('#panel_four_pic_seven').attr('src','images/everyday_food_test_tube_two.png');
         			// disables the second button
         			$("#panel_four_button_ten").attr("disabled", "disabled");

 				} else {
 	
 					// Alert box pops-up with error
 					alert("Alert: Science requires careful attention to detail. You must add the Benedict's Reagent first.");
 	
 				}
     		}
 		});
 	
	// Ritz Cracker - part three	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_eleven').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_eight').attr('src','images/everyday_food_test_tube_seven.png');
     		// disables the button
     		$("#panel_four_button_eleven").attr("disabled", "disabled");
     		
     		} 
 	});
	
	// Ritz Cracker - part four	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_twelve').on({'click': function(){
     		
     		// disables the button
     		$("#panel_four_button_twelve").attr("disabled", "disabled");
     		
     		} 
 	});
	
	 // Skim Milk function - part one
	// function finds button ID and executes function when clicked
	$('#panel_four_button_thirteen').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_four_pic_ten').attr('src','images/everyday_food_test_tube_five.png');
     		// disables the button
     		$("#panel_four_button_thirteen").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled5 = false;
     		
     		} 
 	});
 	
 	// Skim Milk function - part two
	// function finds button ID and executes function when clicked
 	$('#panel_four_button_fourteen').on({'click': function(){
     		
     			// checks if first button has been clicked / disable
     			if (button_disabled5 == false) {
     				
					// swaps the second image
         			$('#panel_four_pic_ten').attr('src','images/everyday_food_test_tube_three.png');
         			// disables the second button
         			$("#panel_four_button_fourteen").attr("disabled", "disabled");

 				} else {
 	
 					// Alert box pops-up with error
 					alert("Alert: Science requires careful attention to detail. You must add the Benedict's Reagent first.");
 	
 				}
     		}
 		});
 	
 	// Starches - part one	
 	// function finds button ID and executes function when clicked
	$('#panel_four_button_fifteen').on({'click': function(){
     		
     		// disables the button
     		$("#panel_four_button_fifteen").attr("disabled", "disabled");
     		
     		} 
 	});
	
	$('#panel_four_button_sixteen').on({'click': function(){
     		
     		// Swaps the image
         	$('#panel_four_pic_twelve').attr('src','images/everyday_food_test_tube_four.png');
     		// disables the button
     		$("#panel_four_button_sixteen").attr("disabled", "disabled");
     		
     		} 
 	});
	
	$('#panel_four_reset_button').on({'click': function(){
     		
     		// Swaps the image
			$('#panel_four_pic_one').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_two').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_three').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_four').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_five').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_six').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_seven').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_eight').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_nine').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_ten').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_eleven').attr('src','images/test_tube_gen.png');
			$('#panel_four_pic_twelve').attr('src','images/test_tube_gen.png');
			//enable buttons
			document.getElementById("panel_four_button_one").disabled = false;
			document.getElementById("panel_four_button_two").disabled = false;
			document.getElementById("panel_four_button_three").disabled = false;
			document.getElementById("panel_four_button_four").disabled = false;
			document.getElementById("panel_four_button_five").disabled = false;
			document.getElementById("panel_four_button_six").disabled = false;
			document.getElementById("panel_four_button_seven").disabled = false;
			document.getElementById("panel_four_button_eight").disabled = false;
			document.getElementById("panel_four_button_nine").disabled = false;
			document.getElementById("panel_four_button_ten").disabled = false;
			document.getElementById("panel_four_button_eleven").disabled = false;
			document.getElementById("panel_four_button_twelve").disabled = false;
			document.getElementById("panel_four_button_thirteen").disabled = false;
			document.getElementById("panel_four_button_fourteen").disabled = false;
			document.getElementById("panel_four_button_fifteen").disabled = false;
			document.getElementById("panel_four_button_sixteen").disabled = false;
			button_disabled2 = true
			button_disabled3 = true
			button_disabled4 = true
			button_disabled5 = true
     		} 
 	});
 
 });
 
 
 