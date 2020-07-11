/* 
Proteins Script  version 1.0 
Date: 3 July 2020
Author: Steven Pennington

This script runs panel one of the Biology 
page of experiment demonstrations.
*/


// Check that document is fully loaded
$(document).ready(function(){

// Below are the two separate functions executing to 
// two experiments available on panel number one.

// Proteins function 

	// function finds button ID and executes function when clicked
	$('#panel_two_button').on({'click': function(){
     		
     		// Swaps the first image
         	$('#panel_two_pic_one').attr('src','images/protein_test_tube_two.png');
     		// disables the button
     		$("#panel_two_button").attr("disabled", "disabled");
     		
     		} 
 	});
 	$('#panel_two_reset_button').on({'click': function(){
     		
     	// Swaps the image
		$('#panel_two_pic_one').attr('src','images/protein_test_tube_one.png');
		//enable buttons
		document.getElementById("panel_two_button").disabled = false;
     		} 
 	});
 
 });
 
 
 