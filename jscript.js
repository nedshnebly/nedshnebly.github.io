



onload = function(){getHype();};


function getHype(){
    $("body").css('background-color', 'rgb(4,209,225)');
    $( "#message" )
        .append( "GET" )
        .addClass( "main" )
        .css('color','rgb(255,0,0)')
        .css('color', "F0FF23");
    var hypeLoop =  setInterval(mainLoop,250);
    onmouseup = function(){colorChange()};
    setTimeout(function(){
        clearTimeout(hypeLoop);
        	$("body").css('background-color', 'rgb(252,251,227)');
            $("#message")
                .text("LANGFORD.")
                .css('color', 'rgb(0,0,0)');
            onmouseup = function(){};
    },4000);
}


function mainLoop(){
    switch (Math.floor(Math.random() * 5 + 1)  ) {
        case 1:
            $("#message").text( "1");
            break;
        case 2:
            $("#message").text( "1");
            break;
        case 3:
            $("#message").text( "1");
            break;
        case 4:
            $("#message").text( "1");
            break;
        case 5:
            $("#message").text( "1");
            break;
    }


    switch (Math.floor(Math.random() * 4 + 1)  ) {
        case 1:
            document.body.style.background = 'rgb(4,209,225)';
            break;
        case 2:
            document.body.style.background = 'rgb(28,249,9)';
            break;
        case 3:
            document.body.style.background = 'rgb(249,9,178)';
            break;
        case 4:
            document.body.style.background = 'rgb(253,95,0)';
            break;
    }
}


function colorChange(){

    switch (Math.floor(Math.random() * 5 + 1)  ) {
        case 1:
            document.getElementById("message").style.color = "F7F3F9";
            break;
        case 2:
            document.getElementById("message").style.color = "07093D";
            break;
        case 3:
            document.getElementById("message").style.color = "F0FF23";
            break;
        case 4:
            document.getElementById("message").style.color = "CF4785";
            break;
        case 5:
            document.getElementById("message").style.color = "FFFFFF";
            break;
    }
}
