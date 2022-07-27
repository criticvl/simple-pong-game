function intersectionDetector(bar, ball) {
  var luPoint = [
    parseFloat(getComputedStyle(ball).getPropertyValue("left")),
    parseFloat(getComputedStyle(ball).getPropertyValue("top")),
  ];
  var ldPoint = [
    parseFloat(getComputedStyle(ball).getPropertyValue("left")),
    parseFloat(getComputedStyle(ball).getPropertyValue("top")) +
      parseFloat(getComputedStyle(ball).getPropertyValue("height")),
  ];
  var rdPoint = [
    parseFloat(getComputedStyle(ball).getPropertyValue("left")) +
      parseFloat(getComputedStyle(ball).getPropertyValue("width")),
    parseFloat(getComputedStyle(ball).getPropertyValue("top")) +
      parseFloat(getComputedStyle(ball).getPropertyValue("height")),
  ];

  var ruPoint = [
    parseFloat(getComputedStyle(ball).getPropertyValue("left")) +
      parseFloat(getComputedStyle(ball).getPropertyValue("width")),
    parseFloat(getComputedStyle(ball).getPropertyValue("top")),
  ];

  if (
    luPoint[0] >= parseFloat(getComputedStyle(bar).getPropertyValue("left")) &&
    luPoint[0] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("left")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("width")) &&
    luPoint[1] >= parseFloat(getComputedStyle(bar).getPropertyValue("top")) &&
    luPoint[1] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("top")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("height"))
  ) {
    return true;
  } else if (
    ldPoint[0] >= parseFloat(getComputedStyle(bar).getPropertyValue("left")) &&
    ldPoint[0] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("left")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("width")) &&
    ldPoint[1] >= parseFloat(getComputedStyle(bar).getPropertyValue("top")) &&
    ldPoint[1] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("top")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("height"))
  ) {
    return true;
  } else if (
    rdPoint[0] >= parseFloat(getComputedStyle(bar).getPropertyValue("left")) &&
    rdPoint[0] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("left")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("width")) &&
    rdPoint[1] >= parseFloat(getComputedStyle(bar).getPropertyValue("top")) &&
    rdPoint[1] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("top")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("height"))
  ) {
    return true;
  } else if (
    ruPoint[0] >= parseFloat(getComputedStyle(bar).getPropertyValue("left")) &&
    ruPoint[0] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("left")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("width")) &&
    ruPoint[1] >= parseFloat(getComputedStyle(bar).getPropertyValue("top")) &&
    ruPoint[1] <=
      parseFloat(getComputedStyle(bar).getPropertyValue("top")) +
        parseFloat(getComputedStyle(bar).getPropertyValue("height"))
  ) {
    return true;
  } else {
    return false;
  }
}

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

document.getElementById("start").addEventListener("click", function () {
  addPlayerListeners();
  document.getElementById("start").style.display = "none";
  document.getElementsByClassName("playerHint")[0].style.opacity = "0";
  document.getElementsByClassName("playerHint")[1].style.opacity = "0";
  setTimeout(function () {
    document.getElementsByClassName("playerHint")[0].style.display = "none";
    document.getElementsByClassName("playerHint")[1].style.display = "none";
  }, 1000);
  setTimeout(function () {
    document.getElementsByClassName("countdown")[0].style.display = "block";
    document.getElementsByClassName("countdown")[0].textContent = "3";
  }, 400);
  setTimeout(function () {
    document.getElementsByClassName("countdown")[0].textContent = "2";
  }, 1400);
  setTimeout(function () {
    document.getElementsByClassName("countdown")[0].textContent = "1";
  }, 2400);
  setTimeout(() => {
    document.getElementsByClassName("countdown")[0].style.display = "none";
    document.getElementById("ball").style.display = "block";
    document.getElementById("ball").style.opacity = "1";
    var ball = document.getElementById("ball");
    var ball_size = parseFloat(
      getComputedStyle(ball).getPropertyValue("width")
    );
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var x_direction = 0.8 * plusOrMinus;
    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var y_direction = 0.8 * plusOrMinus;
    var intervalTick = setInterval(function () {
      var left = parseFloat(getComputedStyle(ball).getPropertyValue("left"));
      var top = parseFloat(getComputedStyle(ball).getPropertyValue("top"));
      if (top + 1 * y_direction <= 0) {
        y_direction *= -1;
      } else if (
        top + 1 * y_direction >
        parseFloat(window.innerHeight) - ball_size
      ) {
        y_direction *= -1;
      } else if (left + 1 * x_direction <= 0) {
        clearInterval(intervalTick);
        document.getElementById("ball").style.opacity = "0";
        player1.style.opacity = "0";
        player2.style.opacity = "0";
        document.getElementsByClassName("winner")[0].textContent =
          "Player 2 Wins";
        setTimeout(function () {
          document.getElementById("ball").style.display = "none";
          player1.style.display = "none";
          player2.style.display = "none";
          document.getElementsByClassName("winner")[0].style.display = "block";
          document.getElementById("playAgain").style.display = "block";
        }, 500);

        setTimeout(function () {
          document.getElementsByClassName("winner")[0].style.opacity = "1";
          document.getElementById("playAgain").style.opacity = "1";
        }, 1000);
      } else if (
        left + 1 * x_direction >=
        parseFloat(window.innerWidth) - ball_size
      ) {
        clearInterval(intervalTick);
        document.getElementById("ball").style.opacity = "0";
        player1.style.opacity = "0";
        player2.style.opacity = "0";
        document.getElementsByClassName("winner")[0].textContent =
          "Player 1 Wins";
        setTimeout(function () {
          document.getElementById("ball").style.display = "none";
          player1.style.display = "none";
          player2.style.display = "none";
          document.getElementsByClassName("winner")[0].style.display = "block";
          document.getElementById("playAgain").style.display = "block";
        }, 500);

        setTimeout(function () {
          document.getElementsByClassName("winner")[0].style.opacity = "1";
          document.getElementById("playAgain").style.opacity = "1";
        }, 1000);
      } else if (
        left + 1 * x_direction <=
        parseFloat(getComputedStyle(player1).getPropertyValue("left")) +
          parseFloat(getComputedStyle(player1).getPropertyValue("width")) / 2
      ) {
        if (intersectionDetector(player1, ball)) {
          x_direction *= -1;
        } else {
          ball.style.left = left + 1 * x_direction + "px";
          ball.style.top = top + 1 * y_direction + "px";
        }
      } else if (
        left + 1 * x_direction >
        parseFloat(window.innerWidth) -
          parseFloat(getComputedStyle(player1).getPropertyValue("left")) -
          parseFloat(getComputedStyle(player2).getPropertyValue("width")) / 2 -
          ball_size
      ) {
        if (intersectionDetector(player2, ball)) {
          x_direction *= -1;
        } else {
          ball.style.left = left + 1 * x_direction + "px";
          ball.style.top = top + 1 * y_direction + "px";
        }
      } else {
        ball.style.left = left + 1 * x_direction + "px";
        ball.style.top = top + 1 * y_direction + "px";
      }
    }, 4);
  }, 3500);
});

var p1up;
var p1down;
var p2up;
var p2down;

function addPlayerListeners() {
  window.addEventListener("keydown", function (event) {
    if (event.key === "w") {
      clearInterval(p1down);
      clearInterval(p1up);
      p1up = setInterval(() => {
        if (parseFloat(getComputedStyle(player1).getPropertyValue("top")) > 0) {
          player1.style.top =
            parseFloat(getComputedStyle(player1).getPropertyValue("top")) -
            1 +
            "px";
        } else {
          clearInterval(p1up);
        }
      }, 1);
    } else if (event.key === "s") {
      clearInterval(p1up);
      clearInterval(p1down);
      p1down = setInterval(() => {
        if (
          parseFloat(getComputedStyle(player1).getPropertyValue("top")) <
          window.innerHeight -
            parseFloat(getComputedStyle(player1).getPropertyValue("height"))
        ) {
          player1.style.top =
            parseFloat(getComputedStyle(player1).getPropertyValue("top")) +
            1 +
            "px";
        } else {
          clearInterval(p1down);
        }
      }, 1);
    } else if (event.key === "ArrowUp") {
      clearInterval(p2down);
      clearInterval(p2up);
      p2up = setInterval(() => {
        if (parseFloat(getComputedStyle(player2).getPropertyValue("top")) > 0) {
          player2.style.top =
            parseFloat(getComputedStyle(player2).getPropertyValue("top")) -
            1 +
            "px";
        } else {
          clearInterval(p2up);
        }
      }, 1);
    } else if (event.key === "ArrowDown") {
      clearInterval(p2up);
      clearInterval(p2down);
      p2down = setInterval(() => {
        if (
          parseFloat(getComputedStyle(player2).getPropertyValue("top")) <
          window.innerHeight -
            parseFloat(getComputedStyle(player2).getPropertyValue("height"))
        ) {
          player2.style.top =
            parseFloat(getComputedStyle(player2).getPropertyValue("top")) +
            1 +
            "px";
        } else {
          clearInterval(p2down);
        }
      }, 1);
    }
  });
}

document.getElementById("playAgain").addEventListener("click", function () {
  location.reload();
});
