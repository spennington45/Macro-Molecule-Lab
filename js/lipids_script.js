/* 
Lipids Script  version 1.0 
Date: 3 July 2020
Author: Steven Pennington

This script runs panel one of the Biology 
page of experiment demonstrations.
*/


// Check that document is fully loaded
$(document).ready(function(){

// Below are the two separate functions executing to 
// two experiments available on panel number one.

// lipids function 

	// function finds button ID and executes function when clicked
	$('#panel_three_button').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_three_pic_one').attr('src','images/lipids_plate_two.png');
     		// disables the button
     		$("#panel_three_button").attr("disabled", "disabled");
     		
     		// sets button disabled to false
     		button_disabled = false;
     		
     		} 
 	});
 	$('#panel_three_reset_button').on({'click': function(){
     		
     	// Swaps the image
		$('#panel_three_pic_one').attr('src','images/lipids_plate_one.png');
		//enable buttons
		document.getElementById("panel_three_button").disabled = false;
     		} 
 	});
 
 });
 
 
 