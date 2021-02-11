// Dropdown
// Attr test

var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();

<div role="radio-group">
	<div role="radio" checked="false">111</div>
	<div role="radio" checked="true">222</div>
	</div>


	<select class="sku-select">
	<option value="option1" selected="selected">Option 1</option>
<option value="option2">Option 2</option>
</select>



var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);



$(".sku-select").change(function(event) {
	console.log("event: ", event);
	let soso = $(this).find("option:selected");
	console.log("soso: ", soso);


// $( "div[checked="true"]" ).attr("checked", "false");
	let thing = $( "div[checked='true']" ).text()
	console.log('things: ', thing);

	// $("#ok").prop("checked", "checked");

	// var selector = document.getElementById("ok")
	// selector.setAttribute('checked','false');​

});