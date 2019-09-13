$(document).ready(function() {
    $('ul > li > button:contains("Delete")').parent().remove();
	$('ul > li > button:contains("Edit")').parent().remove();
});