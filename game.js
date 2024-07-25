function rollTheDice() { 

        var randomNumber1 = Math.floor(Math.random() * 6) + 1; //The math for my first dice, these create the contraints ofr the dice and the math
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; // The math for my second dice, this creates the constraints for my math and generates a random number 6 or below

        document.querySelector(".img1").setAttribute("src", //This is where we place the random number and string it together to call forth the picture
            "dice" + randomNumber1 + ".jpg"); 

        document.querySelector(".img2").setAttribute("src", //This is where we place the random number and string it together to call forth the picture
            "dice" + randomNumber2 + ".jpg"); 

        if (((randomNumber1 + randomNumber2) == 7) || ((randomNumber1 + randomNumber2) == 11)) { //This s my function showing conditionals and the actual function "guts"
            document.querySelector("h1").innerHTML = "CRAPS - you lose!"; //I used the || operand to have the function fire if 7 OR 11 were chosen
        } 

        else if (randomNumber1 = randomNumber2 && randomNumber1 % randomNumber2 == 0) { //I have the function firing with the && to make sure both conditions are met
            document.querySelector("h1").innerHTML 
                            = ("You win!"); 
        } 

        else { 
            document.querySelector("h1").innerHTML //this covers all other cases
                            = ("You pushed"); 
        } 
} 