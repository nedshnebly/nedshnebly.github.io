window.onload = function(){mainFun();};
window.onmouseup = colorChange;
function mainFun(){
    document.body.style.background = 'rgb(4,209,225)';
    document.getElementById("message").innerHTML = "Hackathon";
    document.getElementById("message").className = "main";
    document.getElementById("message").style.color = 'rgb(232,232,232)';
    document.getElementById("message").style.color = "F0FF23";
    setMiddle();
    var loopM =  setInterval(mainLoop,250);


    }

function mainLoop(){
    switch (Math.floor(Math.random() * 5 + 1)  ) {
        case 1:
            document.getElementById("message").innerHTML = "WEBSITE";
            break;
        case 2:
            document.getElementById("message").innerHTML = "HYPE";
            break;
        case 3:
            document.getElementById("message").innerHTML = "TOM";
            break;
        case 4:
            document.getElementById("message").innerHTML = "LANGFORD";
            break;
        case 5:
            document.getElementById("message").innerHTML = "HYPE";
            break;
    }

    switch (Math.floor(Math.random() * 5 + 1)  ) {
        case 1:
            document.body.style.background = 'rgb(4,209,225)';
            break;
        case 2:
            document.body.style.background = 'rgb(28,249,9)';
            break;
        case 3:
            document.body.style.background = 'rgb(249,9,178)';
            break;
        case 5:
            document.body.style.background = 'rgb(253,95,0)';
            break;
    }
    /**
    switch (Math.floor(Math.random() * 5 + 1)  ) {
        case 1:
            document.getElementById("message").style.color = "F7F3F9";
            break;
        case 2:
            document.getElementById("message").style.color = "04D1E1";
            break;
        case 3:
            document.getElementById("message").style.color = "04D1E1";
            break;
        case 4:
            document.getElementById("message").style.color = "FD5F00";
            break;
        case 5:
            document.getElementById("message").style.color = "000000";
            break;
    }**/




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




function setTop(){
    replacePosition()
    document.getElementById("message").className += " top";
}

function setMiddle(){
    replacePosition()
    document.getElementById("message").className += " middle";
}

function setBottom(){
    replacePosition()
    document.getElementById("message").className += " bottom";
}

function replacePosition(){
    document.getElementById("message").className =
        document.getElementById("message").className.replace
        ( /(?:^|\s)top(?!\S)/g , '' )
    document.getElementById("message").className =
        document.getElementById("message").className.replace
        ( /(?:^|\s)middle(?!\S)/g , '' )
    document.getElementById("message").className =
        document.getElementById("message").className.replace
        ( /(?:^|\s)bottom(?!\S)/g , '' )
}
