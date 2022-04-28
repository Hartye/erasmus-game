let pass = 0;

function verifyPass() {
  let value = document.querySelector(".pass-textarea").value;
  if (value == "rome" || value == "Rome") {
    pass = 1;
  }

  if (value == 8) {
    pass = 2;
  }

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

  document.querySelector(".pass-textarea").placeholder = text;
}

function moveTo(n) {
  if (n == 1) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".one").style.display = "block";
  }

  if (n == 2 && pass >= 1) {
    document.querySelector(".three").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "block";
  } else if (n == 2) {
    putPass(1);
  }

  if (n == 3 && pass == 2) {
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".three").style.display = "block";
  } else if (n == 3) {
    putPass(2);
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

  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".textarea").value = text;
}
