// Déclaration variables boutons
const buttonYes = document.getElementById("yes-button");
const buttonNo = document.getElementById("no-button");

// Déclaration gifs
const gif1 = document.getElementById("gif1");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");
const gif4 = document.getElementById("gif4");
const gif5 = document.getElementById("gif5");
const gif6 = document.getElementById("gif6");
const gif7 = document.getElementById("gif7");
const gif8 = document.getElementById("gif8");
const gif9 = document.getElementById("gif9");
const gif10 = document.getElementById("gif10");

const gif12 = document.getElementById("gif12");
const gif13 = document.getElementById("gif13");
const gif14 = document.getElementById("gif14");

// Déclaration autres variables
let counter = 0;
let counterYes = 0;
const text = document.getElementById("text");

// Initialisation function click
buttonNo.addEventListener("click", clickNo);
buttonYes.addEventListener("click", clickYes);


// Functions

/// Function when the user clicks
/// on the no button
/// when the button gets clicked
/// The gif and the text
/// of the boutton changes until the user
/// clicks on the button yes
function clickNo(){
    counter++;

    if(counter == 1)
    {
        gif1.style.display = 'none';
        gif12.style.display = 'block';
        buttonNo.innerHTML = 'no?';
    }

    if(counter == 2)
    {
        gif12.style.display = 'none';
        gif3.style.display = 'block';
        buttonNo.innerHTML = 'please';
    }

    if(counter == 3)
    {
        gif3.style.display = 'none';
        gif4.style.display = 'block';
        buttonNo.innerHTML = 'it would make me really happy';
    }

    if(counter == 4)
    {
        gif4.style.display = 'none';
        gif5.style.display = 'block';
        buttonNo.innerHTML = 'we could ride together...';
    }

    if(counter == 5)
    {
        gif5.style.display = 'none';
        gif2.style.display = 'block';
        buttonNo.innerHTML = 'please say yes';
    }

    if(counter == 6)
    {
        gif2.style.display = 'none';
        gif7.style.display = 'block';
        buttonNo.innerHTML = 'say yes already';
    }

    if(counter == 7)
    {
        gif7.style.display = 'none';
        gif8.style.display = 'block';
        buttonNo.innerHTML = 'you really should tho';
    }

    if(counter == 8)
    {
        gif8.style.display = 'none';
        gif9.style.display = 'block';
        buttonNo.innerHTML = 'm watching you';
    }

    if(counter == 9)
    {
        gif9.style.display = 'none';
        gif10.style.display = 'block';
        buttonNo.innerHTML = 'why do you have to piss off kuromi';
    }

    if(counter == 10)
    {
        gif10.style.display = 'none';
        gif11.style.display = 'block';
        buttonNo.innerHTML = 'last chance to change your mind...';
    }

    if(counter == 11)
    {
        buttonNo.style.display = 'none';
        gif11.style.display = 'none';
        gif6.style.display = 'block';
        buttonYes.innerHTML = 'm not giving you options anymore (this is the yes button)';
    }
}

/// Function when the user clicks on 
/// the yes button 
/// Changes gif and text of the button
/// removes the no button and the text
function clickYes(){
    counterYes++;

    // Remove any gifs that could be displayed
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
    gif5.style.display = 'none';
    gif6.style.display = 'none';
    gif7.style.display = 'none';
    gif8.style.display = 'none';
    gif9.style.display = 'none';
    gif10.style.display = 'none';
    gif11.style.display = 'none';
    gif12.style.display = 'none';


    if(counterYes == 1)
        {
            gif13.style.display = 'block';
            buttonNo.style.display = 'none';
            text.style.display = 'none';
            buttonYes.innerHTML = 'yayy you r the best! :) <3';
        }
    
        if(counterYes == 2)
        {
            gif13.style.display = 'none';
            gif14.style.display = 'block';
            buttonYes.innerHTML = 'click here if you wanna make kuromi mad again';
        }
    
        // Relance le le site comme initialement
        if(counterYes == 3)
        {
            location.reload();
        }
}