const instructions = document.getElementById('instructions');
const game = document.getElementById('game');
const playButton = document.getElementById('playButton');
const cookieButton = document.getElementById('cookieButton');
const cookieCountElement = document.getElementById('cookieCount');
const cookieClickElement = document.getElementById('cookieClick');
const cookieRateElement = document.getElementById('cookieRate');
const upgradeTextElement = document.getElementById('upgradeText');
const congratsTextElement = document.getElementById('congratsText');
var progressElement = document.getElementById('progress');

playButton.addEventListener('click', startGame);

function startGame() {
    instructions.classList.add("hide");
    game.classList.remove("hide");
    setInterval(updateCookieRate, 1000);
}

function updateCookieRate () {
    time++;
    var val = (numberOfCookies/time).toFixed(2);
    cookieRateElement.innerText = "Cookies per Second: "+val;
}

var numberOfCookies = 0;
var time = 0;
var cookiesPerClick = 1;
var cookiesToUpgrade = 20;
const goals = [20, 50, 100, 200, 300, 500, 800, 1000, 1500, 2000];
var index = 0;
var flag = true;
var width = 0;

cookieCountElement.innerText = "Cookies: "+numberOfCookies;
cookieClickElement.innerText = "Cookies per Click: "+cookiesPerClick;
cookieRateElement.innerText = "Cookies per Second: 0.00";
upgradeTextElement.innerText = cookiesToUpgrade+" more cookies to upgrade!"

cookieButton.addEventListener('click', addCookie);

function addCookie() {
    numberOfCookies += cookiesPerClick;
    cookiesToUpgrade -= cookiesPerClick;
    if (flag && numberOfCookies >= goals[index])  {
        cookiesPerClick++;
        cookieClickElement.innerText = "Cookies per Click: "+cookiesPerClick;
        width += 10;
        progressElement.style.width = width + "%";
        progressElement.innerHTML = width + "%";
        if (numberOfCookies >= 2000) {
            congratsTextElement.innerText = "Wow! You reached goal 10! You are a pro at clicking cookies now :D";
            upgradeTextElement.innerText = "";
            flag = false;
        }  else {
            cookiesToUpgrade=goals[index+1]-numberOfCookies;
            index++;
            congratsTextElement.innerText = "Congrats! You reached goal "+index+"!";
        }
    }
    cookieCountElement.innerText = "Cookies: "+numberOfCookies;
    if (flag) {
        upgradeTextElement.innerText = cookiesToUpgrade+" more cookies to upgrade!";
    }
}