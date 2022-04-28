let pass = 0;
let passCheck = pass;

function verifyPass() {
  let value = document.querySelector(".pass-textarea").value;
  if (value == "rome" || value == "Rome") {
    pass = 1;
  }

  if (value == 8 && pass == 1) {
    pass = 2;
  }

  if (value == 300 && pass == 2) {
    pass = 3;
  }

  if (value == 10 && pass == 3) {
    pass = 4;
  }

  if (value == 1709 && pass == 4) {
    pass = 5;
  }

  if (value == 17 && pass == 5) {
    pass = 6;
  }

  if (pass != passCheck) {
    showText(15);
  } else {
    showText(16);
  }

  if (pass == 5) {
    showText(17);
  }

  passCheck = pass;

  document.querySelector("#b-" + (pass + 1)).style.background = "#54f254";

  document.querySelector(".pass-textarea").value = "";

  document.querySelector(".pass").style.display = "none";
}

function putPass(n) {
  let text;
  document.querySelector(".pass").style.display = "flex";

  if (n == 1) {
    text = "Capital of Italy";
  }

  if (n == 2) {
    text = "Hours students normally have classes (ex. 2; 4; 9; etc..)";
  }

  if (n == 3) {
    text = "How many types of bread is there in Italy";
  }

  if (n == 4) {
    text = "the grades goes from 0 to";
  }

  if (n == 5) {
    text = "When was the first piano invented";
  }

  if (n == 6) {
    text = "How many years it took to build the world longest tunnel";
  }

  document.querySelector(".pass-textarea").placeholder = text;
}

function moveTo(n) {
  if (n == 1) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".one").style.display = "block";
  }

  if (n == 2 && pass >= 1) {
    document.querySelector(".three").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".two").style.display = "block";
  } else if (n == 2) {
    putPass(1);
  }

  if (n == 3 && pass >= 2) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".three").style.display = "block";
  } else if (n == 3) {
    putPass(2);
  }

  if (n == 4 && pass >= 3) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".four").style.display = "block";
  } else if (n == 4) {
    putPass(3);
  }

  if (n == 5 && pass >= 4) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".five").style.display = "block";
  } else if (n == 5) {
    putPass(4);
  }

  if (n == 6 && pass >= 5) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".six").style.display = "block";
  } else if (n == 6) {
    putPass(5);
  }
}

function modalClose() {
  document.querySelector(".modal").style.display = "none";
}

function showText(n) {
  let text;
  if (n == 1) {
    text = "Italy is home of many historical roman buildings";
  }

  if (n == 2) {
    text = "Rome is the capital of Italy";
  }

  if (n == 3) {
    text = "On the interview our interviewees were teachers in a Liceo College";
  }

  if (n == 4) {
    text =
      "In the Liceo College the students normally start the classes at 8 in the morning";
  }

  if (n == 5) {
    text = "In Italy pizzas can have many shapes like a square";
  }

  if (n == 6) {
    text = "In Italy pizzas can have many shapes like a square";
  }

  if (n == 7) {
    text = "Italy has more than 300 types of bread";
  }

  if (n == 8) {
    text = "The most famous sport is football";
  }

  if (n == 9) {
    text = "In Italy saturday is a normal day of work and school";
  }

  if (n == 10) {
    text = "The grades in Italy goes from 0 to 10";
  }

  if (n == 11) {
    text =
      "The first true piano was invented by an Italian man named Bartolomeo Cristofori in 1709";
  }

  if (n == 12) {
    text = "The most famous song type in Italy is national pop";
  }

  if (n == 13) {
    text =
      "The World’s longest tunnel 'Gotthard Base Tunnel' runs from Switzerland to Italy. It took 17 years to build and is 57 km long";
  }

  if (n == 14) {
    text = "34% of all the Italians have never used Internet";
  }

  if (n == 14) {
    text =
      "Hello! This is our game.\n To play the game you'll have to read what is written on the images and use the information to pass to another level. Have fun!!";
  }

  if (n == 15) {
    text = "Right!!";
  }

  if (n == 16) {
    text = "Wrong or need to answer another question first.";
  }

  if (n == 17) {
    text =
      "Congratulations!!!\nThanks for playing! Enjoy your time here in Portugal!";
  }

  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".textarea").value = text;
}
