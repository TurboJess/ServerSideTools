$(document).ready(function () {

        	$('body .head').append("<div class=\"photo_url\">" + ("<img src='http://holykaw.alltop.com/wp-content/uploads/2010/01/6090801-media_httpdefinitivet_aImaA.jpg'/>") + "</div>");
            $('body .head').append('<h1 class="user_id">Batman</h1>');
        	// works ----> $('body .head').append('<h1 class="user_id">'+ data.accounts[i].turbo_user_id + '</h1>');
            // finding total matches but using dummy data for now.
        	// $('body .sideUl').append('<li class="total_matches">' + data.account[i].total_matches +'</li>');
       		$('body .sideUl').append('<li class="total_matches">Total matches</li>');
       		// same thing as above: code is ready to be run but not set up on the server right meow.
        	// $('body .sideUl').append('<li class="total_wins">' + data.account[i].total_wins +'</li>');
        	$('body .sideUl').append('<li class="total_wins">' + "Total Wins" +'</li>');


            $('.dataRendered').append('<tr class=\"tMatches\">');
            $('.dataRendered').append("<td class=\"photo\">" + 'Photo Here' + "</td>");
            $('.dataRendered').append("<td class=\'userId'\>" + "User Name Here" + "</td>");
            $('.dataRendered').append("<td class=\'name'\>" + "Name Here" + "</td>");
            $('#myTable tbody').append("<td class=\"session_token\" href=\"this.session_token\">" + "SessionId here" + "</td>");
            $('#myTable tbody').append("</tr><br>"); 




        });

  
    // })

//         console.log("got info")
// });