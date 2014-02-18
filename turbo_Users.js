$( document ).ready(function(){
	console.log( "ready!" );

	$( window ).load(function() {
		console.log( "ready 1!" );
			$.ajax({
				url:"userData.js",
				contentType: "application/json",
				dataType:"jsonp",
				type: 'GET',
				crossDomain:true,
				success:function(data){
					alert(data);
				}


		 // $.get("userData.json", function(data, textStatus){
   //              alert("name " + textStatus + ". Here is the response: " + data);
        });
	});
});














