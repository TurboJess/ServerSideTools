$(document).ready(function () {
    $.ajax({
        url: "http://54.213.92.70:8080/getaccount",
        type: 'GET',
        dataType: "json",
        data: {
            'account': 'all'
        },
        }).then(function (data) {
        // for loop for looping through th elenght o fth json data
        for(var i = 0; i < data.accounts.length; i++){
        	// i need to find a way to pull the user data from 
        	// the indivifule and not  on  loop possibly using the 
        	// $(this) method 
        	$('body .head').append("<div class=\"photo_url\">" + ("<img src='" + data.accounts[i].photo_url + "'/>") + "</div>");
        	$('body .head').append('<h1 class="user_id">'+ data.accounts[i].turbo_user_id + '</h1>');
        	// finding total matches but using dummy data for now.
        	// $('body .sideUl').append('<li class="total_matches">' + data.account[i].total_matches +'</li>');
       		$('body .sideUl').append('<li class="total_matches">' + "Total Matches" +'</li>');
       		// same thing as above: code is ready to be run but not set up on the server right meow.
        	// $('body .sideUl').append('<li class="total_wins">' + data.account[i].total_wins +'</li>');
        	$('body .sideUl').append('<li class="total_wins">' + "Total Wins" +'</li>');




        }
    });
    
    // $(".total_matches").on("click", function)({
    //     // i may need to change this to a table similar to what is found in user.js
    //     for(var i = 0; i< data. //not sure what to add here\\  )
    //     $('.dataRendered').append('<tr class=\"tMatches\">');
    //     $('.dataRendered').append("<td class=\"photo\">" + 'Photo Here' + "</td>");
    //     $('.dataRendered').append("<td class=\'userId'\>" + "User Name Here" + "</td>");
    //     $('.dataRendered').append("<td class=\'name'\>" + "Name Here" + "</td>");
    //         $('#myTable tbody').append("<td class=\"session_token\" href=\"this.session_token\">" + "SessionId here" + "</td>");
    //     $('#myTable tbody').append("</tr><br>"); 

    // })

        console.log("got info")
});