function rollTheDice() { 

        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        document.querySelector(".img1").setAttribute("src", 
            "dice" + randomNumber1 + ".jpg"); 

        document.querySelector(".img2").setAttribute("src", 
            "dice" + randomNumber2 + ".jpg"); 

        if (((randomNumber1 + randomNumber2) == 7) || ((randomNumber1 + randomNumber2) == 11)) { 
            document.querySelector("h1").innerHTML = "CRAPS - you lose!"; 
        } 

        else if (randomNumber1 = randomNumber2 && randomNumber1 % randomNumber2 == 0) { 
            document.querySelector("h1").innerHTML 
                            = ("You win!"); 
        } 

        else { 
            document.querySelector("h1").innerHTML 
                            = ("You pushed"); 
        } 
} 