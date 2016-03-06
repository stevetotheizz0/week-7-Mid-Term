


getAndParseData();

$('#button-previous').hide();
$( ".my-button").click(function(){changeMap();});
$( "#button-next").click(function(){showNext();});
$( "#button-previous" ).click(function() {showPrevious();});
$('#map').on('click', 'input[type=submit]', function() {fireplaceInput();});
