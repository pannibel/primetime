
// let's start this sh

let score = 0;
let lives = 3;
let timeLeft = 60;

let gamewon;
let gamelost;

let bgSound = document.querySelector("#background_music");
let clicksound = document.querySelector("#click");
let goodsound = document.querySelector("#goodclick");
let badsound = document.querySelector("#badclick");
let winsound = document.querySelector("#win_sound");
let gameoversound = document.querySelector("#gameover_sound");
let ohnosound = document.querySelector("#ohno");

document.querySelector("#title_screen").classList.add("hidden");
document.querySelector("#game_background").classList.add("hidden");
document.querySelector("#level_complete").classList.add("hidden");
document.querySelector("#game_over").classList.add("hidden");
document.querySelector("#info_page").classList.add("hidden");
document.querySelector("#exit_info").classList.add("hidden");

document.querySelector("#sound_off_button1").classList.add("hidden");
document.querySelector("#sound_off_button2").classList.add("hidden");
document.querySelector("#sound_off_button3").classList.add("hidden");
document.querySelector("#sound_off_button4").classList.add("hidden");
document.querySelector("#play_button").classList.add("hidden");

document.querySelector("#start_game_button").classList.add("pulse");

clicksound.muted = true;
goodsound.muted = true;
badsound.muted = true;
ohnosound.muted = true;
gameoversound.muted = true;
winsound.muted = true;

homescreen();


/* BACKGROUND MUSIC */

function playBGMusic() {
    console.log("music");

    bgSound.play();
    if (bgSound.muted === false) {

    document.querySelector("#sound_off_button1").classList.remove("hidden");
    document.querySelector("#sound_off_button2").classList.remove("hidden");
    document.querySelector("#sound_off_button3").classList.remove("hidden");
    document.querySelector("#sound_off_button4").classList.remove("hidden");
}
}

document.querySelector("#sound_on_button1").addEventListener("click", playBGMusic);
document.querySelector("#sound_on_button2").addEventListener("click", playBGMusic);
document.querySelector("#sound_on_button3").addEventListener("click", playBGMusic);
document.querySelector("#sound_on_button4").addEventListener("click", playBGMusic);

// play music on loop
bgSound.addEventListener("ended", playBGMusic);


/* START GAME */

function homescreen() {
    console.log("home");

    gameRun = false;
    document.querySelector("#title_screen").classList.remove("hidden");

    document.querySelector("#container2").classList.add("stop");
    document.querySelector("#container3").classList.add("stop");
    document.querySelector("#container5").classList.add("stop");
    document.querySelector("#container7").classList.add("stop");
    document.querySelector("#container11").classList.add("stop");
    document.querySelector("#container13").classList.add("stop");
    document.querySelector("#container17").classList.add("stop");
    document.querySelector("#container19").classList.add("stop");
    document.querySelector("#container23").classList.add("stop");
    document.querySelector("#container29").classList.add("stop");
    document.querySelector("#container31").classList.add("stop");
    document.querySelector("#container37").classList.add("stop");
    document.querySelector("#container41").classList.add("stop");
    document.querySelector("#container43").classList.add("stop");
    document.querySelector("#container47").classList.add("stop");
    document.querySelector("#container53").classList.add("stop");
    document.querySelector("#container59").classList.add("stop");
    document.querySelector("#container61").classList.add("stop");
    document.querySelector("#container67").classList.add("stop");
    document.querySelector("#container71").classList.add("stop");
    document.querySelector("#container73").classList.add("stop");
    document.querySelector("#container79").classList.add("stop");
    document.querySelector("#container83").classList.add("stop");
    document.querySelector("#container89").classList.add("stop");
    document.querySelector("#container1").classList.add("stop");
    document.querySelector("#container4").classList.add("stop");
    document.querySelector("#container9").classList.add("stop");
    document.querySelector("#container10").classList.add("stop");
    document.querySelector("#container15").classList.add("stop");
    document.querySelector("#container21").classList.add("stop");
    document.querySelector("#container25").classList.add("stop");
    document.querySelector("#container27").classList.add("stop");
    document.querySelector("#container35").classList.add("stop");
    document.querySelector("#container39").classList.add("stop");
    document.querySelector("#container45").classList.add("stop");
    document.querySelector("#container49").classList.add("stop");
    document.querySelector("#container51").classList.add("stop");
    document.querySelector("#container57").classList.add("stop");
    document.querySelector("#container63").classList.add("stop");
    document.querySelector("#container65").classList.add("stop");
    document.querySelector("#container69").classList.add("stop");
    document.querySelector("#container75").classList.add("stop");
    document.querySelector("#container77").classList.add("stop");
    document.querySelector("#container81").classList.add("stop");
    document.querySelector("#container85").classList.add("stop");
    document.querySelector("#container87").classList.add("stop");
    document.querySelector("#container91").classList.add("stop");
}

function start() {
    score = 0;
    lives = 3;
    timeLeft = 60;
    gameRun = true;

// start positions for elements

document.querySelector("#current_score").textContent = score + "/19";
document.querySelector("#current_time").textContent = "0:" + timeLeft;

document.querySelector("#full").classList.remove("hidden");
document.querySelector("#twoleft").classList.remove("hidden");
document.querySelector("#oneleft").classList.remove("hidden");
document.querySelector("#play_button").classList.add("hidden");

/* primes */

document.querySelector("#container2").classList.add("fadein");
document.querySelector("#container2").classList.add("pos" + generateRandomNumber());
document.querySelector("#container2").addEventListener("animationiteration", restart);


document.querySelector("#container3").classList.add("fadein");
document.querySelector("#container3").classList.add("pos" + generateRandomNumber());
document.querySelector("#container3").addEventListener("animationiteration", restart);


document.querySelector("#container5").classList.add("fadein");
document.querySelector("#container5").classList.add("pos" + generateRandomNumber());
document.querySelector("#container5").addEventListener("animationiteration", restart);


document.querySelector("#container7").classList.add("fadein");
document.querySelector("#container7").classList.add("pos" + generateRandomNumber());
document.querySelector("#container7").addEventListener("animationiteration", restart);


document.querySelector("#container11").classList.add("fadein");
document.querySelector("#container11").classList.add("pos" + generateRandomNumber());
document.querySelector("#container11").addEventListener("animationiteration", restart);


document.querySelector("#container13").classList.add("fadein");
document.querySelector("#container13").classList.add("pos" + generateRandomNumber());
document.querySelector("#container13").addEventListener("animationiteration", restart);


document.querySelector("#container17").classList.add("fadein");
document.querySelector("#container17").classList.add("pos" + generateRandomNumber());
document.querySelector("#container17").addEventListener("animationiteration", restart);


document.querySelector("#container19").classList.add("fadein");
document.querySelector("#container19").classList.add("pos" + generateRandomNumber());
document.querySelector("#container19").addEventListener("animationiteration", restart);


document.querySelector("#container23").classList.add("fadein");
document.querySelector("#container23").classList.add("pos" + generateRandomNumber());
document.querySelector("#container23").addEventListener("animationiteration", restart);


document.querySelector("#container29").classList.add("fadein");
document.querySelector("#container29").classList.add("pos" + generateRandomNumber());
document.querySelector("#container29").addEventListener("animationiteration", restart);


document.querySelector("#container31").classList.add("fadein");
document.querySelector("#container31").classList.add("pos" + generateRandomNumber());
document.querySelector("#container31").addEventListener("animationiteration", restart);


document.querySelector("#container37").classList.add("fadein");
document.querySelector("#container37").classList.add("pos" + generateRandomNumber());
document.querySelector("#container37").addEventListener("animationiteration", restart);


document.querySelector("#container41").classList.add("fadein");
document.querySelector("#container41").classList.add("pos" + generateRandomNumber());
document.querySelector("#container41").addEventListener("animationiteration", restart);


document.querySelector("#container43").classList.add("fadein");
document.querySelector("#container43").classList.add("pos" + generateRandomNumber());
document.querySelector("#container43").addEventListener("animationiteration", restart);


document.querySelector("#container47").classList.add("fadein");
document.querySelector("#container47").classList.add("pos" + generateRandomNumber());
document.querySelector("#container47").addEventListener("animationiteration", restart);


document.querySelector("#container53").classList.add("fadein");
document.querySelector("#container53").classList.add("pos" + generateRandomNumber());
document.querySelector("#container53").addEventListener("animationiteration", restart);


document.querySelector("#container59").classList.add("fadein");
document.querySelector("#container59").classList.add("pos" + generateRandomNumber());
document.querySelector("#container59").addEventListener("animationiteration", restart);


document.querySelector("#container61").classList.add("fadein");
document.querySelector("#container61").classList.add("pos" + generateRandomNumber());
document.querySelector("#container61").addEventListener("animationiteration", restart);


document.querySelector("#container67").classList.add("fadein");
document.querySelector("#container67").classList.add("pos" + generateRandomNumber());
document.querySelector("#container67").addEventListener("animationiteration", restart);


document.querySelector("#container71").classList.add("fadein");
document.querySelector("#container71").classList.add("pos" + generateRandomNumber());
document.querySelector("#container71").addEventListener("animationiteration", restart);


document.querySelector("#container73").classList.add("fadein");
document.querySelector("#container73").classList.add("pos" + generateRandomNumber());
document.querySelector("#container73").addEventListener("animationiteration", restart);


document.querySelector("#container79").classList.add("fadein");
document.querySelector("#container79").classList.add("pos" + generateRandomNumber());
document.querySelector("#container79").addEventListener("animationiteration", restart);


document.querySelector("#container83").classList.add("fadein");
document.querySelector("#container83").classList.add("pos" + generateRandomNumber());
document.querySelector("#container83").addEventListener("animationiteration", restart);


document.querySelector("#container89").classList.add("fadein");
document.querySelector("#container89").classList.add("pos" + generateRandomNumber());
document.querySelector("#container89").addEventListener("animationiteration", restart);


/* nonprimes */

document.querySelector("#container1").classList.add("fadein");
document.querySelector("#container1").classList.add("pos" + generateRandomNumber());
document.querySelector("#container1").addEventListener("animationiteration", restart);


document.querySelector("#container4").classList.add("fadein");
document.querySelector("#container4").classList.add("pos" + generateRandomNumber());
document.querySelector("#container4").addEventListener("animationiteration", restart);


document.querySelector("#container9").classList.add("fadein");
document.querySelector("#container9").classList.add("pos" + generateRandomNumber());
document.querySelector("#container9").addEventListener("animationiteration", restart);


document.querySelector("#container10").classList.add("fadein");
document.querySelector("#container10").classList.add("pos" + generateRandomNumber());
document.querySelector("#container10").addEventListener("animationiteration", restart);


document.querySelector("#container15").classList.add("fadein");
document.querySelector("#container15").classList.add("pos" + generateRandomNumber());
document.querySelector("#container15").addEventListener("animationiteration", restart);


document.querySelector("#container21").classList.add("fadein");
document.querySelector("#container21").classList.add("pos" + generateRandomNumber());
document.querySelector("#container21").addEventListener("animationiteration", restart);


document.querySelector("#container25").classList.add("fadein");
document.querySelector("#container25").classList.add("pos" + generateRandomNumber());
document.querySelector("#container25").addEventListener("animationiteration", restart);


document.querySelector("#container27").classList.add("fadein");
document.querySelector("#container27").classList.add("pos" + generateRandomNumber());
document.querySelector("#container27").addEventListener("animationiteration", restart);


document.querySelector("#container33").classList.add("fadein");
document.querySelector("#container33").classList.add("pos" + generateRandomNumber());
document.querySelector("#container33").addEventListener("animationiteration", restart);


document.querySelector("#container35").classList.add("fadein");
document.querySelector("#container35").classList.add("pos" + generateRandomNumber());
document.querySelector("#container35").addEventListener("animationiteration", restart);


document.querySelector("#container39").classList.add("fadein");
document.querySelector("#container39").classList.add("pos" + generateRandomNumber());
document.querySelector("#container39").addEventListener("animationiteration", restart);


document.querySelector("#container45").classList.add("fadein");
document.querySelector("#container45").classList.add("pos" + generateRandomNumber());
document.querySelector("#container45").addEventListener("animationiteration", restart);


document.querySelector("#container49").classList.add("fadein");
document.querySelector("#container49").classList.add("pos" + generateRandomNumber());
document.querySelector("#container49").addEventListener("animationiteration", restart);


document.querySelector("#container51").classList.add("fadein");
document.querySelector("#container51").classList.add("pos" + generateRandomNumber());
document.querySelector("#container51").addEventListener("animationiteration", restart);


document.querySelector("#container57").classList.add("fadein");
document.querySelector("#container57").classList.add("pos" + generateRandomNumber());
document.querySelector("#container57").addEventListener("animationiteration", restart);


document.querySelector("#container63").classList.add("fadein");
document.querySelector("#container63").classList.add("pos" + generateRandomNumber());
document.querySelector("#container63").addEventListener("animationiteration", restart);


document.querySelector("#container65").classList.add("fadein");
document.querySelector("#container65").classList.add("pos" + generateRandomNumber());
document.querySelector("#container65").addEventListener("animationiteration", restart);


document.querySelector("#container69").classList.add("fadein");
document.querySelector("#container69").classList.add("pos" + generateRandomNumber());
document.querySelector("#container69").addEventListener("animationiteration", restart);


document.querySelector("#container75").classList.add("fadein");
document.querySelector("#container75").classList.add("pos" + generateRandomNumber());
document.querySelector("#container75").addEventListener("animationiteration", restart);


document.querySelector("#container77").classList.add("fadein");
document.querySelector("#container77").classList.add("pos" + generateRandomNumber());
document.querySelector("#container77").addEventListener("animationiteration", restart);


document.querySelector("#container81").classList.add("fadein");
document.querySelector("#container81").classList.add("pos" + generateRandomNumber());
document.querySelector("#container81").addEventListener("animationiteration", restart);


document.querySelector("#container85").classList.add("fadein");
document.querySelector("#container85").classList.add("pos" + generateRandomNumber());
document.querySelector("#container85").addEventListener("animationiteration", restart);


document.querySelector("#container87").classList.add("fadein");
document.querySelector("#container87").classList.add("pos" + generateRandomNumber());
document.querySelector("#container87").addEventListener("animationiteration", restart);


document.querySelector("#container91").classList.add("fadein");
document.querySelector("#container91").classList.add("pos" + generateRandomNumber());
document.querySelector("#container91").addEventListener("animationiteration", restart);

/* EVENT LISTENERS */

document.querySelector("#container2").addEventListener("click", click2);
document.querySelector("#container3").addEventListener("click", click3);
document.querySelector("#container5").addEventListener("click", click5);
document.querySelector("#container7").addEventListener("click", click7);
document.querySelector("#container11").addEventListener("click", click11);
document.querySelector("#container13").addEventListener("click", click13);
document.querySelector("#container17").addEventListener("click", click17);
document.querySelector("#container19").addEventListener("click", click19);
document.querySelector("#container23").addEventListener("click", click23);
document.querySelector("#container29").addEventListener("click", click29);
document.querySelector("#container31").addEventListener("click", click31);
document.querySelector("#container37").addEventListener("click", click37);
document.querySelector("#container41").addEventListener("click", click41);
document.querySelector("#container43").addEventListener("click", click43);
document.querySelector("#container47").addEventListener("click", click47);
document.querySelector("#container53").addEventListener("click", click53);
document.querySelector("#container59").addEventListener("click", click59);
document.querySelector("#container61").addEventListener("click", click61);
document.querySelector("#container67").addEventListener("click", click67);
document.querySelector("#container71").addEventListener("click", click71);
document.querySelector("#container73").addEventListener("click", click73);
document.querySelector("#container79").addEventListener("click", click79);
document.querySelector("#container83").addEventListener("click", click83);
document.querySelector("#container89").addEventListener("click", click89);
/* document.querySelector("#container97").addEventListener("click", click97); */
document.querySelector("#container1").addEventListener("click", click1);
document.querySelector("#container4").addEventListener("click", click4);
document.querySelector("#container9").addEventListener("click", click9);
document.querySelector("#container10").addEventListener("click", click10);
document.querySelector("#container15").addEventListener("click", click15);
document.querySelector("#container21").addEventListener("click", click21);
document.querySelector("#container25").addEventListener("click", click25);
document.querySelector("#container27").addEventListener("click", click27);
document.querySelector("#container33").addEventListener("click", click33);
document.querySelector("#container35").addEventListener("click", click35);
document.querySelector("#container39").addEventListener("click", click39);
document.querySelector("#container45").addEventListener("click", click45);
document.querySelector("#container49").addEventListener("click", click49);
document.querySelector("#container51").addEventListener("click", click51);
document.querySelector("#container57").addEventListener("click", click57);
document.querySelector("#container63").addEventListener("click", click63);
document.querySelector("#container65").addEventListener("click", click65);
document.querySelector("#container69").addEventListener("click", click69);
document.querySelector("#container75").addEventListener("click", click75);
document.querySelector("#container77").addEventListener("click", click77);
document.querySelector("#container81").addEventListener("click", click81);
document.querySelector("#container85").addEventListener("click", click85);
document.querySelector("#container87").addEventListener("click", click87);
document.querySelector("#container91").addEventListener("click", click91);
}

function startGame() {
console.log("start");

    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#game_background").classList.remove("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");

    document.querySelector("#container2").classList.remove("stop");
    document.querySelector("#container3").classList.remove("stop");
    document.querySelector("#container5").classList.remove("stop");
    document.querySelector("#container7").classList.remove("stop");
    document.querySelector("#container11").classList.remove("stop");
    document.querySelector("#container13").classList.remove("stop");
    document.querySelector("#container17").classList.remove("stop");
    document.querySelector("#container19").classList.remove("stop");
    document.querySelector("#container23").classList.remove("stop");
    document.querySelector("#container29").classList.remove("stop");
    document.querySelector("#container31").classList.remove("stop");
    document.querySelector("#container37").classList.remove("stop");
    document.querySelector("#container41").classList.remove("stop");
    document.querySelector("#container43").classList.remove("stop");
    document.querySelector("#container47").classList.remove("stop");
    document.querySelector("#container53").classList.remove("stop");
    document.querySelector("#container59").classList.remove("stop");
    document.querySelector("#container61").classList.remove("stop");
    document.querySelector("#container67").classList.remove("stop");
    document.querySelector("#container71").classList.remove("stop");
    document.querySelector("#container73").classList.remove("stop");
    document.querySelector("#container79").classList.remove("stop");
    document.querySelector("#container83").classList.remove("stop");
    document.querySelector("#container89").classList.remove("stop");
    document.querySelector("#container1").classList.remove("stop");
    document.querySelector("#container4").classList.remove("stop");
    document.querySelector("#container9").classList.remove("stop");
    document.querySelector("#container10").classList.remove("stop");
    document.querySelector("#container15").classList.remove("stop");
    document.querySelector("#container21").classList.remove("stop");
    document.querySelector("#container25").classList.remove("stop");
    document.querySelector("#container27").classList.remove("stop");
    document.querySelector("#container35").classList.remove("stop");
    document.querySelector("#container39").classList.remove("stop");
    document.querySelector("#container45").classList.remove("stop");
    document.querySelector("#container49").classList.remove("stop");
    document.querySelector("#container51").classList.remove("stop");
    document.querySelector("#container57").classList.remove("stop");
    document.querySelector("#container63").classList.remove("stop");
    document.querySelector("#container65").classList.remove("stop");
    document.querySelector("#container69").classList.remove("stop");
    document.querySelector("#container75").classList.remove("stop");
    document.querySelector("#container77").classList.remove("stop");
    document.querySelector("#container81").classList.remove("stop");
    document.querySelector("#container85").classList.remove("stop");
    document.querySelector("#container87").classList.remove("stop");
    document.querySelector("#container91").classList.remove("stop");

    start();
    startTimer();
}

document.querySelector("#start_game_button").addEventListener("click", startGame);



/* TIMER */

function startTimer() {
    if ((timeLeft >= 0) && (gameRun === true)) {
        setTimeout(showTime, 1000);
    }
    else if ((timeLeft < 0) && (gameRun === true)) {
        GameOver();
    }
}

function showTime() {
    timeLeft--;
    document.querySelector("#current_time").textContent = "0:" + timeLeft;
    startTimer();
}



/* POINTS AND LIVES */

// getting points
function getAPoint() {
    score = score + 1;
    document.querySelector("#current_score").textContent = score + "/19";
}

// losing lives 
function loseALife() {

    if ((gameRun === true) && (lives === 2)) {
        document.querySelector("#full").classList.add("hidden");
    }
    else if ((gameRun === true) && (lives == 1)) {
        document.querySelector("#twoleft").classList.add("hidden");
        ohno_sound();
    }
    else if ((gameRun === true) && (lives === 0)) {
        document.querySelector("#oneleft").classList.add("hidden");
    }
}



/* GAME OVER */

function noLives() {
    if ((gameRun === true) && (lives <= 0)) {
        GameOver();
    }
}
function GameOver() {
    console.log("gameover");

    gameRun = false;
    gamelost = true;
    gameoversound.play();

    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#current_score2").textContent = score + "/19";
    
    /* primes */
    document.querySelector("#container2").classList.value = "";
    document.querySelector("#sprite2").classList.value = "";
    document.querySelector("#container3").classList.value = "";
    document.querySelector("#sprite3").classList.value = "";
    document.querySelector("#container5").classList.value = "";
    document.querySelector("#sprite5").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#sprite7").classList.value = "";
    document.querySelector("#container11").classList.value = "";
    document.querySelector("#sprite11").classList.value = "";
    document.querySelector("#container13").classList.value = "";
    document.querySelector("#sprite13").classList.value = "";
    document.querySelector("#container17").classList.value = "";
    document.querySelector("#sprite17").classList.value = "";
    document.querySelector("#container19").classList.value = "";
    document.querySelector("#sprite19").classList.value = "";
    document.querySelector("#container23").classList.value = "";
    document.querySelector("#sprite23").classList.value = "";
    document.querySelector("#container29").classList.value = "";
    document.querySelector("#sprite29").classList.value = "";
    document.querySelector("#container31").classList.value = "";
    document.querySelector("#sprite31").classList.value = "";
    document.querySelector("#container37").classList.value = "";
    document.querySelector("#sprite37").classList.value = "";
    document.querySelector("#container41").classList.value = "";
    document.querySelector("#sprite41").classList.value = "";
    document.querySelector("#container43").classList.value = "";
    document.querySelector("#sprite43").classList.value = "";
    document.querySelector("#container47").classList.value = "";
    document.querySelector("#sprite47").classList.value = "";
    document.querySelector("#container53").classList.value = "";
    document.querySelector("#sprite53").classList.value = "";
    document.querySelector("#container59").classList.value = "";
    document.querySelector("#sprite59").classList.value = "";
    document.querySelector("#container61").classList.value = "";
    document.querySelector("#sprite61").classList.value = "";
    document.querySelector("#container67").classList.value = "";
    document.querySelector("#sprite67").classList.value = "";
    document.querySelector("#container71").classList.value = "";
    document.querySelector("#sprite71").classList.value = "";
    document.querySelector("#container73").classList.value = "";
    document.querySelector("#sprite73").classList.value = "";
    document.querySelector("#container79").classList.value = "";
    document.querySelector("#sprite79").classList.value = "";
    document.querySelector("#container83").classList.value = "";
    document.querySelector("#sprite83").classList.value = "";
    document.querySelector("#container89").classList.value = "";
    document.querySelector("#sprite89").classList.value = "";

    /* nonprimes */
    document.querySelector("#container1").classList.value = "";
    document.querySelector("#sprite1").classList.value = "";
    document.querySelector("#container4").classList.value = "";
    document.querySelector("#sprite4").classList.value = "";
    document.querySelector("#container9").classList.value = "";
    document.querySelector("#sprite9").classList.value = "";
    document.querySelector("#container10").classList.value = "";
    document.querySelector("#sprite10").classList.value = "";
    document.querySelector("#container15").classList.value = "";
    document.querySelector("#sprite15").classList.value = "";
    document.querySelector("#container21").classList.value = "";
    document.querySelector("#sprite21").classList.value = "";
    document.querySelector("#container25").classList.value = "";
    document.querySelector("#sprite25").classList.value = "";
    document.querySelector("#container27").classList.value = "";
    document.querySelector("#sprite27").classList.value = "";
    document.querySelector("#container33").classList.value = "";
    document.querySelector("#sprite33").classList.value = "";
    document.querySelector("#container35").classList.value = "";
    document.querySelector("#sprite35").classList.value = "";
    document.querySelector("#container39").classList.value = "";
    document.querySelector("#sprite39").classList.value = "";
    document.querySelector("#container45").classList.value = "";
    document.querySelector("#sprite45").classList.value = "";
    document.querySelector("#container49").classList.value = "";
    document.querySelector("#sprite49").classList.value = "";
    document.querySelector("#container51").classList.value = "";
    document.querySelector("#sprite51").classList.value = "";
    document.querySelector("#container57").classList.value = "";
    document.querySelector("#sprite57").classList.value = "";
    document.querySelector("#container63").classList.value = "";
    document.querySelector("#sprite63").classList.value = "";
    document.querySelector("#container65").classList.value = "";
    document.querySelector("#sprite65").classList.value = "";
    document.querySelector("#container69").classList.value = "";
    document.querySelector("#sprite69").classList.value = "";
    document.querySelector("#container75").classList.value = "";
    document.querySelector("#sprite75").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#sprite77").classList.value = "";
    document.querySelector("#container81").classList.value = "";
    document.querySelector("#sprite81").classList.value = "";
    document.querySelector("#container85").classList.value = "";
    document.querySelector("#sprite85").classList.value = "";
    document.querySelector("#container87").classList.value = "";
    document.querySelector("#sprite87").classList.value = "";
    document.querySelector("#container91").classList.value = "";
    document.querySelector("#sprite91").classList.value = "";
}



/* GAME WON */

function pointsReached() {
    if ((gameRun === true) && (score >= 19)) {
        GameWin();
    }
}
function GameWin() {
    console.log("win");

    gameRun = false;
    gamewon = true;
    winsound.play();

    document.querySelector("#level_complete").classList.remove("hidden");
    document.querySelector("#current_score3").textContent = score + "/19";

    /* primes */
    document.querySelector("#container2").classList.value = "";
    document.querySelector("#sprite2").classList.value = "";
    document.querySelector("#container3").classList.value = "";
    document.querySelector("#sprite3").classList.value = "";
    document.querySelector("#container5").classList.value = "";
    document.querySelector("#sprite5").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#sprite7").classList.value = "";
    document.querySelector("#container11").classList.value = "";
    document.querySelector("#sprite11").classList.value = "";
    document.querySelector("#container13").classList.value = "";
    document.querySelector("#sprite13").classList.value = "";
    document.querySelector("#container17").classList.value = "";
    document.querySelector("#sprite17").classList.value = "";
    document.querySelector("#container19").classList.value = "";
    document.querySelector("#sprite19").classList.value = "";
    document.querySelector("#container23").classList.value = "";
    document.querySelector("#sprite23").classList.value = "";
    document.querySelector("#container29").classList.value = "";
    document.querySelector("#sprite29").classList.value = "";
    document.querySelector("#container31").classList.value = "";
    document.querySelector("#sprite31").classList.value = "";
    document.querySelector("#container37").classList.value = "";
    document.querySelector("#sprite37").classList.value = "";
    document.querySelector("#container41").classList.value = "";
    document.querySelector("#sprite41").classList.value = "";
    document.querySelector("#container43").classList.value = "";
    document.querySelector("#sprite43").classList.value = "";
    document.querySelector("#container47").classList.value = "";
    document.querySelector("#sprite47").classList.value = "";
    document.querySelector("#container53").classList.value = "";
    document.querySelector("#sprite53").classList.value = "";
    document.querySelector("#container59").classList.value = "";
    document.querySelector("#sprite59").classList.value = "";
    document.querySelector("#container61").classList.value = "";
    document.querySelector("#sprite61").classList.value = "";
    document.querySelector("#container67").classList.value = "";
    document.querySelector("#sprite67").classList.value = "";
    document.querySelector("#container71").classList.value = "";
    document.querySelector("#sprite71").classList.value = "";
    document.querySelector("#container73").classList.value = "";
    document.querySelector("#sprite73").classList.value = "";
    document.querySelector("#container79").classList.value = "";
    document.querySelector("#sprite79").classList.value = "";
    document.querySelector("#container83").classList.value = "";
    document.querySelector("#sprite83").classList.value = "";
    document.querySelector("#container89").classList.value = "";
    document.querySelector("#sprite89").classList.value = "";

    /* nonprimes */
    document.querySelector("#container1").classList.value = "";
    document.querySelector("#sprite1").classList.value = "";
    document.querySelector("#container4").classList.value = "";
    document.querySelector("#sprite4").classList.value = "";
    document.querySelector("#container9").classList.value = "";
    document.querySelector("#sprite9").classList.value = "";
    document.querySelector("#container10").classList.value = "";
    document.querySelector("#sprite10").classList.value = "";
    document.querySelector("#container15").classList.value = "";
    document.querySelector("#sprite15").classList.value = "";
    document.querySelector("#container21").classList.value = "";
    document.querySelector("#sprite21").classList.value = "";
    document.querySelector("#container25").classList.value = "";
    document.querySelector("#sprite25").classList.value = "";
    document.querySelector("#container27").classList.value = "";
    document.querySelector("#sprite27").classList.value = "";
    document.querySelector("#container33").classList.value = "";
    document.querySelector("#sprite33").classList.value = "";
    document.querySelector("#container35").classList.value = "";
    document.querySelector("#sprite35").classList.value = "";
    document.querySelector("#container39").classList.value = "";
    document.querySelector("#sprite39").classList.value = "";
    document.querySelector("#container45").classList.value = "";
    document.querySelector("#sprite45").classList.value = "";
    document.querySelector("#container49").classList.value = "";
    document.querySelector("#sprite49").classList.value = "";
    document.querySelector("#container51").classList.value = "";
    document.querySelector("#sprite51").classList.value = "";
    document.querySelector("#container57").classList.value = "";
    document.querySelector("#sprite57").classList.value = "";
    document.querySelector("#container63").classList.value = "";
    document.querySelector("#sprite63").classList.value = "";
    document.querySelector("#container65").classList.value = "";
    document.querySelector("#sprite65").classList.value = "";
    document.querySelector("#container69").classList.value = "";
    document.querySelector("#sprite69").classList.value = "";
    document.querySelector("#container75").classList.value = "";
    document.querySelector("#sprite75").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#sprite77").classList.value = "";
    document.querySelector("#container81").classList.value = "";
    document.querySelector("#sprite81").classList.value = "";
    document.querySelector("#container85").classList.value = "";
    document.querySelector("#sprite85").classList.value = "";
    document.querySelector("#container87").classList.value = "";
    document.querySelector("#sprite87").classList.value = "";
    document.querySelector("#container91").classList.value = "";
    document.querySelector("#sprite91").classList.value = "";
}



/* FADE IN */

function generateRandomNumber() {
    return Math.floor(Math.random() * 24 + 1);
}

function fadein() {

    /* primes */
    document.querySelector("#container2").classList.add("fadein");
    document.querySelector("#container2").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container3").classList.add("fadein");
    document.querySelector("#container3").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container5").classList.add("fadein");
    document.querySelector("#container5").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container7").classList.add("fadein");
    document.querySelector("#container7").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container11").classList.add("fadein");
    document.querySelector("#container11").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container13").classList.add("fadein");
    document.querySelector("#container13").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container17").classList.add("fadein");
    document.querySelector("#container17").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container19").classList.add("fadein");
    document.querySelector("#container19").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container23").classList.add("fadein");
    document.querySelector("#container23").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container29").classList.add("fadein");
    document.querySelector("#container29").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container31").classList.add("fadein");
    document.querySelector("#container31").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container37").classList.add("fadein");
    document.querySelector("#container37").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container41").classList.add("fadein");
    document.querySelector("#container41").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container43").classList.add("fadein");
    document.querySelector("#container43").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container47").classList.add("fadein");
    document.querySelector("#container47").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container53").classList.add("fadein");
    document.querySelector("#container53").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container59").classList.add("fadein");
    document.querySelector("#container59").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container61").classList.add("fadein");
    document.querySelector("#container61").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container67").classList.add("fadein");
    document.querySelector("#container67").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container71").classList.add("fadein");
    document.querySelector("#container71").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container73").classList.add("fadein");
    document.querySelector("#container73").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container79").classList.add("fadein");
    document.querySelector("#container79").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container83").classList.add("fadein");
    document.querySelector("#container83").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container89").classList.add("fadein");
    document.querySelector("#container89").classList.add("pos" + generateRandomNumber());

    /* nonprimes */
    document.querySelector("#container1").classList.add("fadein");
    document.querySelector("#container1").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container4").classList.add("fadein");
    document.querySelector("#container4").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container9").classList.add("fadein");
    document.querySelector("#container9").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container10").classList.add("fadein");
    document.querySelector("#container10").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container15").classList.add("fadein");
    document.querySelector("#container15").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container21").classList.add("fadein");
    document.querySelector("#container21").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container25").classList.add("fadein");
    document.querySelector("#container25").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container27").classList.add("fadein");
    document.querySelector("#container27").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container33").classList.add("fadein");
    document.querySelector("#container33").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container35").classList.add("fadein");
    document.querySelector("#container35").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container39").classList.add("fadein");
    document.querySelector("#container39").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container45").classList.add("fadein");
    document.querySelector("#container45").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container49").classList.add("fadein");
    document.querySelector("#container49").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container51").classList.add("fadein");
    document.querySelector("#container51").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container57").classList.add("fadein");
    document.querySelector("#container57").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container63").classList.add("fadein");
    document.querySelector("#container63").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container65").classList.add("fadein");
    document.querySelector("#container65").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container69").classList.add("fadein");
    document.querySelector("#container69").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container75").classList.add("fadein");
    document.querySelector("#container75").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container77").classList.add("fadein");
    document.querySelector("#container77").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container81").classList.add("fadein");
    document.querySelector("#container81").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container85").classList.add("fadein");
    document.querySelector("#container85").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container87").classList.add("fadein");
    document.querySelector("#container87").classList.add("pos" + generateRandomNumber());
    document.querySelector("#container91").classList.add("fadein");
    document.querySelector("#container91").classList.add("pos" + generateRandomNumber());
}

function restart() {

    /* primes */
    document.querySelector("#container2").classList.value = "";
    document.querySelector("#sprite2").classList.value = "";
    document.querySelector("#container3").classList.value = "";
    document.querySelector("#sprite3").classList.value = "";
    document.querySelector("#container5").classList.value = "";
    document.querySelector("#sprite5").classList.value = "";
    document.querySelector("#container7").classList.value = "";
    document.querySelector("#sprite7").classList.value = "";
    document.querySelector("#container11").classList.value = "";
    document.querySelector("#sprite11").classList.value = "";
    document.querySelector("#container13").classList.value = "";
    document.querySelector("#sprite13").classList.value = "";
    document.querySelector("#container17").classList.value = "";
    document.querySelector("#sprite17").classList.value = "";
    document.querySelector("#container19").classList.value = "";
    document.querySelector("#sprite19").classList.value = "";
    document.querySelector("#container23").classList.value = "";
    document.querySelector("#sprite23").classList.value = "";
    document.querySelector("#container29").classList.value = "";
    document.querySelector("#sprite29").classList.value = "";
    document.querySelector("#container31").classList.value = "";
    document.querySelector("#sprite31").classList.value = "";
    document.querySelector("#container37").classList.value = "";
    document.querySelector("#sprite37").classList.value = "";
    document.querySelector("#container41").classList.value = "";
    document.querySelector("#sprite41").classList.value = "";
    document.querySelector("#container43").classList.value = "";
    document.querySelector("#sprite43").classList.value = "";
    document.querySelector("#container47").classList.value = "";
    document.querySelector("#sprite47").classList.value = "";
    document.querySelector("#container53").classList.value = "";
    document.querySelector("#sprite53").classList.value = "";
    document.querySelector("#container59").classList.value = "";
    document.querySelector("#sprite59").classList.value = "";
    document.querySelector("#container61").classList.value = "";
    document.querySelector("#sprite61").classList.value = "";
    document.querySelector("#container67").classList.value = "";
    document.querySelector("#sprite67").classList.value = "";
    document.querySelector("#container71").classList.value = "";
    document.querySelector("#sprite71").classList.value = "";
    document.querySelector("#container73").classList.value = "";
    document.querySelector("#sprite73").classList.value = "";
    document.querySelector("#container79").classList.value = "";
    document.querySelector("#sprite79").classList.value = "";
    document.querySelector("#container83").classList.value = "";
    document.querySelector("#sprite83").classList.value = "";
    document.querySelector("#container89").classList.value = "";
    document.querySelector("#sprite89").classList.value = "";

    /* nonprimes */
    document.querySelector("#container1").classList.value = "";
    document.querySelector("#sprite1").classList.value = "";
    document.querySelector("#container4").classList.value = "";
    document.querySelector("#sprite4").classList.value = "";
    document.querySelector("#container9").classList.value = "";
    document.querySelector("#sprite9").classList.value = "";
    document.querySelector("#container10").classList.value = "";
    document.querySelector("#sprite10").classList.value = "";
    document.querySelector("#container15").classList.value = "";
    document.querySelector("#sprite15").classList.value = "";
    document.querySelector("#container21").classList.value = "";
    document.querySelector("#sprite21").classList.value = "";
    document.querySelector("#container25").classList.value = "";
    document.querySelector("#sprite25").classList.value = "";
    document.querySelector("#container27").classList.value = "";
    document.querySelector("#sprite27").classList.value = "";
    document.querySelector("#container33").classList.value = "";
    document.querySelector("#sprite33").classList.value = "";
    document.querySelector("#container35").classList.value = "";
    document.querySelector("#sprite35").classList.value = "";
    document.querySelector("#container39").classList.value = "";
    document.querySelector("#sprite39").classList.value = "";
    document.querySelector("#container45").classList.value = "";
    document.querySelector("#sprite45").classList.value = "";
    document.querySelector("#container49").classList.value = "";
    document.querySelector("#sprite49").classList.value = "";
    document.querySelector("#container51").classList.value = "";
    document.querySelector("#sprite51").classList.value = "";
    document.querySelector("#container57").classList.value = "";
    document.querySelector("#sprite57").classList.value = "";
    document.querySelector("#container63").classList.value = "";
    document.querySelector("#sprite63").classList.value = "";
    document.querySelector("#container65").classList.value = "";
    document.querySelector("#sprite65").classList.value = "";
    document.querySelector("#container69").classList.value = "";
    document.querySelector("#sprite69").classList.value = "";
    document.querySelector("#container75").classList.value = "";
    document.querySelector("#sprite75").classList.value = "";
    document.querySelector("#container77").classList.value = "";
    document.querySelector("#sprite77").classList.value = "";
    document.querySelector("#container81").classList.value = "";
    document.querySelector("#sprite81").classList.value = "";
    document.querySelector("#container85").classList.value = "";
    document.querySelector("#sprite85").classList.value = "";
    document.querySelector("#container87").classList.value = "";
    document.querySelector("#sprite87").classList.value = "";
    document.querySelector("#container91").classList.value = "";
    document.querySelector("#sprite91").classList.value = "";


    document.querySelector("html").offsetHeight;

    fadein();
}



/* CLICK */

function click2() {
   if (gameRun === true) {
    document.querySelector("#container2").classList.add("stop");
    document.querySelector("#container2").classList.add("is-no-pointer");
    document.querySelector("#sprite2").classList.add("fadeout");
    getAPoint();
    pointsReached();
    }
}

function click3() {
    if (gameRun === true) {
    document.querySelector("#container3").classList.add("stop");
    document.querySelector("#container3").classList.add("is-no-pointer");
    document.querySelector("#sprite3").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click5() {
    if (gameRun === true) {
    document.querySelector("#container5").classList.add("stop");
    document.querySelector("#container5").classList.add("is-no-pointer");
    document.querySelector("#sprite5").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click7() {
    if (gameRun === true) {
    document.querySelector("#container7").classList.add("stop");
    document.querySelector("#container7").classList.add("is-no-pointer");
    document.querySelector("#sprite7").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click11() {
    if (gameRun === true) {
    document.querySelector("#container11").classList.add("stop");
    document.querySelector("#container11").classList.add("is-no-pointer");
    document.querySelector("#sprite11").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click13() {
    if (gameRun === true) {
    document.querySelector("#container13").classList.add("stop");
    document.querySelector("#container13").classList.add("is-no-pointer");
    document.querySelector("#sprite13").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click17() {
    if (gameRun === true) {
    document.querySelector("#container17").classList.add("stop");
    document.querySelector("#container17").classList.add("is-no-pointer");
    document.querySelector("#sprite17").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click19() {
    if (gameRun === true) {
    document.querySelector("#container19").classList.add("stop");
    document.querySelector("#container19").classList.add("is-no-pointer");
    document.querySelector("#sprite19").classList.add("fadeout");
    getAPoint();
    pointsReached();
}
}

function click23() {
    if (gameRun === true) {
    document.querySelector("#container23").classList.add("stop");
    document.querySelector("#sprite23").classList.add("fadeout");
    document.querySelector("#container23").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click29() {
    if (gameRun === true) {
    document.querySelector("#container29").classList.add("stop");
    document.querySelector("#sprite29").classList.add("fadeout");
    document.querySelector("#container29").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click31() {
    if (gameRun === true) {
    document.querySelector("#container31").classList.add("stop");
    document.querySelector("#sprite31").classList.add("fadeout");
    document.querySelector("#container31").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click37() {
    if (gameRun === true) {
    document.querySelector("#container37").classList.add("stop");
    document.querySelector("#sprite37").classList.add("fadeout");
    document.querySelector("#container37").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click41() {
    if (gameRun === true) {
    document.querySelector("#container41").classList.add("stop");
    document.querySelector("#sprite41").classList.add("fadeout");
    document.querySelector("#container41").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click43() {
    if (gameRun === true) {
    document.querySelector("#container43").classList.add("stop");
    document.querySelector("#sprite43").classList.add("fadeout");
    document.querySelector("#container43").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click47() {
    if (gameRun === true) {
    document.querySelector("#container47").classList.add("stop");
    document.querySelector("#sprite47").classList.add("fadeout");
    document.querySelector("#container47").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click53() {
    if (gameRun === true) {
    document.querySelector("#container53").classList.add("stop");
    document.querySelector("#sprite53").classList.add("fadeout");
    document.querySelector("#container53").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click59() {
    if (gameRun === true) {
    document.querySelector("#container59").classList.add("stop");
    document.querySelector("#sprite59").classList.add("fadeout");
    document.querySelector("#container59").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click61() {
    if (gameRun === true) {
    document.querySelector("#container61").classList.add("stop");
    document.querySelector("#sprite61").classList.add("fadeout");
    document.querySelector("#container61").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click67() {
    if (gameRun === true) {
    document.querySelector("#container67").classList.add("stop");
    document.querySelector("#sprite67").classList.add("fadeout");
    document.querySelector("#container67").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click71() {
    if (gameRun === true) {
    document.querySelector("#container71").classList.add("stop");
    document.querySelector("#sprite71").classList.add("fadeout");
    document.querySelector("#container71").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click73() {
    if (gameRun === true) {
    document.querySelector("#container73").classList.add("stop");
    document.querySelector("#sprite73").classList.add("fadeout");
    document.querySelector("#container73").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click79() {
    if (gameRun === true) {
    document.querySelector("#container79").classList.add("stop");
    document.querySelector("#sprite79").classList.add("fadeout");
    document.querySelector("#container79").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click83() {
    if (gameRun === true) {
    document.querySelector("#container83").classList.add("stop");
    document.querySelector("#sprite83").classList.add("fadeout");
    document.querySelector("#container83").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}

function click89() {
    if (gameRun === true) {
    document.querySelector("#container89").classList.add("stop");
    document.querySelector("#sprite89").classList.add("fadeout");
    document.querySelector("#container89").classList.add("is-no-pointer");
    getAPoint();
    pointsReached();
}
}


/* nonprimes */
function click1() {
    if (gameRun === true) {
    document.querySelector("#container1").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click4() {
    if (gameRun === true) {
    document.querySelector("#container4").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click9() {
    if (gameRun === true) {
    document.querySelector("#container9").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click10() {
    if (gameRun === true) {
    document.querySelector("#container10").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click15() {
    if (gameRun === true) {
    document.querySelector("#container15").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click21() {
    if (gameRun === true) {
    document.querySelector("#container21").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click25() {
    if (gameRun === true) {
    document.querySelector("#container25").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click27() {
    if (gameRun === true) {
    document.querySelector("#container27").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click33() {
    if (gameRun === true) {
    document.querySelector("#container33").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click35() {
    if (gameRun === true) {
    document.querySelector("#container35").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click39() {
    if (gameRun === true) {
    document.querySelector("#container39").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click45() {
    if (gameRun === true) {
    document.querySelector("#container45").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click49() {
    if (gameRun === true) {
    document.querySelector("#container49").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click51() {
    if (gameRun === true) {
    document.querySelector("#container51").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click57() {
    if (gameRun === true) {
    document.querySelector("#container57").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click63() {
    if (gameRun === true) {
    document.querySelector("#container63").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click65() {
    if (gameRun === true) {
    document.querySelector("#container65").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click69() {
    if (gameRun === true) {
    document.querySelector("#container69").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click75() {
    if (gameRun === true) {
    document.querySelector("#container75").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click77() {
    if (gameRun === true) {
    document.querySelector("#container77").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click81() {
    if (gameRun === true) {
    document.querySelector("#container81").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click85() {
    if (gameRun === true) {
    document.querySelector("#container85").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click87() {
    if (gameRun === true) {
    document.querySelector("#container87").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
}
}

function click91() {
    if (gameRun === true) {
    document.querySelector("#container91").classList.add("is-no-pointer");
    lives--;
    loseALife();
    noLives();
    }
}



/* OTHER BUTTONS */

// play again
document.querySelector("#play_again_button1").addEventListener("click", startGame);
document.querySelector("#play_again_button2").addEventListener("click", startGame);


// info
function information() {
    document.querySelector("#info_page").classList.remove("hidden");
    document.querySelector("#exit_info").classList.remove("hidden");
}

document.querySelector("#info_button").addEventListener("click", information);

function exit_information() {
    document.querySelector("#info_page").classList.add("hidden");
    document.querySelector("#exit_info").classList.add("hidden");
}

document.querySelector("#exit_info").addEventListener("click", exit_information);


// go to title screen
document.querySelector("#home_button1").addEventListener("click", homescreen);
document.querySelector("#home_button2").addEventListener("click", homescreen);
document.querySelector("#home_button3").addEventListener("click", homescreen);


// pause 
function pause() {
if (gameRun === true) {
    document.querySelector("#container2").classList.add("stop");
    document.querySelector("#container3").classList.add("stop");
    document.querySelector("#container5").classList.add("stop");
    document.querySelector("#container7").classList.add("stop");
    document.querySelector("#container11").classList.add("stop");
    document.querySelector("#container13").classList.add("stop");
    document.querySelector("#container17").classList.add("stop");
    document.querySelector("#container19").classList.add("stop");
    document.querySelector("#container23").classList.add("stop");
    document.querySelector("#container29").classList.add("stop");
    document.querySelector("#container31").classList.add("stop");
    document.querySelector("#container37").classList.add("stop");
    document.querySelector("#container41").classList.add("stop");
    document.querySelector("#container43").classList.add("stop");
    document.querySelector("#container47").classList.add("stop");
    document.querySelector("#container53").classList.add("stop");
    document.querySelector("#container59").classList.add("stop");
    document.querySelector("#container61").classList.add("stop");
    document.querySelector("#container67").classList.add("stop");
    document.querySelector("#container71").classList.add("stop");
    document.querySelector("#container73").classList.add("stop");
    document.querySelector("#container79").classList.add("stop");
    document.querySelector("#container83").classList.add("stop");
    document.querySelector("#container89").classList.add("stop");
    document.querySelector("#container1").classList.add("stop");
    document.querySelector("#container4").classList.add("stop");
    document.querySelector("#container9").classList.add("stop");
    document.querySelector("#container10").classList.add("stop");
    document.querySelector("#container15").classList.add("stop");
    document.querySelector("#container21").classList.add("stop");
    document.querySelector("#container25").classList.add("stop");
    document.querySelector("#container27").classList.add("stop");
    document.querySelector("#container35").classList.add("stop");
    document.querySelector("#container39").classList.add("stop");
    document.querySelector("#container45").classList.add("stop");
    document.querySelector("#container49").classList.add("stop");
    document.querySelector("#container51").classList.add("stop");
    document.querySelector("#container57").classList.add("stop");
    document.querySelector("#container63").classList.add("stop");
    document.querySelector("#container65").classList.add("stop");
    document.querySelector("#container69").classList.add("stop");
    document.querySelector("#container75").classList.add("stop");
    document.querySelector("#container77").classList.add("stop");
    document.querySelector("#container81").classList.add("stop");
    document.querySelector("#container85").classList.add("stop");
    document.querySelector("#container87").classList.add("stop");
    document.querySelector("#container91").classList.add("stop");

    document.querySelector("#play_button").classList.remove("hidden");

    gameRun = false;
    goodsound.muted = true;
    badsound.muted = true;

    } else if (gameRun === false) {
        document.querySelector("#container2").classList.remove("stop");
        document.querySelector("#container3").classList.remove("stop");
        document.querySelector("#container5").classList.remove("stop");
        document.querySelector("#container7").classList.remove("stop");
        document.querySelector("#container11").classList.remove("stop");
        document.querySelector("#container13").classList.remove("stop");
        document.querySelector("#container17").classList.remove("stop");
        document.querySelector("#container19").classList.remove("stop");
        document.querySelector("#container23").classList.remove("stop");
        document.querySelector("#container29").classList.remove("stop");
        document.querySelector("#container31").classList.remove("stop");
        document.querySelector("#container37").classList.remove("stop");
        document.querySelector("#container41").classList.remove("stop");
        document.querySelector("#container43").classList.remove("stop");
        document.querySelector("#container47").classList.remove("stop");
        document.querySelector("#container53").classList.remove("stop");
        document.querySelector("#container59").classList.remove("stop");
        document.querySelector("#container61").classList.remove("stop");
        document.querySelector("#container67").classList.remove("stop");
        document.querySelector("#container71").classList.remove("stop");
        document.querySelector("#container73").classList.remove("stop");
        document.querySelector("#container79").classList.remove("stop");
        document.querySelector("#container83").classList.remove("stop");
        document.querySelector("#container89").classList.remove("stop");
        document.querySelector("#container1").classList.remove("stop");
        document.querySelector("#container4").classList.remove("stop");
        document.querySelector("#container9").classList.remove("stop");
        document.querySelector("#container10").classList.remove("stop");
        document.querySelector("#container15").classList.remove("stop");
        document.querySelector("#container21").classList.remove("stop");
        document.querySelector("#container25").classList.remove("stop");
        document.querySelector("#container27").classList.remove("stop");
        document.querySelector("#container35").classList.remove("stop");
        document.querySelector("#container39").classList.remove("stop");
        document.querySelector("#container45").classList.remove("stop");
        document.querySelector("#container49").classList.remove("stop");
        document.querySelector("#container51").classList.remove("stop");
        document.querySelector("#container57").classList.remove("stop");
        document.querySelector("#container63").classList.remove("stop");
        document.querySelector("#container65").classList.remove("stop");
        document.querySelector("#container69").classList.remove("stop");
        document.querySelector("#container75").classList.remove("stop");
        document.querySelector("#container77").classList.remove("stop");
        document.querySelector("#container81").classList.remove("stop");
        document.querySelector("#container85").classList.remove("stop");
        document.querySelector("#container87").classList.remove("stop");
        document.querySelector("#container91").classList.remove("stop");

        document.querySelector("#play_button").classList.add("hidden");

        gameRun = true;
        goodsound.muted = false;
        badsound.muted = false;

        setTimeout(showTime, 1000);
    }
}

document.querySelector("#pause_button").addEventListener("click", pause);
document.querySelector("#play_button").addEventListener("click", pause);


// sound on and off
function soundon() {
    if (bgSound.paused != true) {

        if ((bgSound.muted === true) || (clicksound.muted === true) || (goodsound.muted === true) || (badsound.muted === true) || (winsound.muted === true) || (gameoversound.muted === true) || (ohnosound.muted === true)) {
        bgSound.muted = false;
        clicksound.muted = false;
        goodsound.muted = false;
        badsound.muted = false;
        winsound.muted = false;
        gameoversound.muted = false;
        ohnosound.muted = false;

            document.querySelector("#sound_off_button1").classList.remove("hidden");
            document.querySelector("#sound_off_button2").classList.remove("hidden");
            document.querySelector("#sound_off_button3").classList.remove("hidden");
            document.querySelector("#sound_off_button4").classList.remove("hidden");
    }}
}

document.querySelector("#sound_on_button1").addEventListener("click", soundon);
document.querySelector("#sound_on_button2").addEventListener("click", soundon);
document.querySelector("#sound_on_button3").addEventListener("click", soundon);
document.querySelector("#sound_on_button4").addEventListener("click", soundon);


function soundoff() {
    if (bgSound.paused != true) {

        if ((bgSound.muted === false) || (clicksound.muted === false) || (goodsound.muted === false) || (badsound.muted === false) || (winsound.muted === false) || (gameoversound.muted === false) || (ohnosound.muted === false)) {
                bgSound.muted = true;
                clicksound.muted = true;
                goodsound.muted = true;
                badsound.muted = true;
                winsound.muted = true;
                gameoversound.muted = true;
                ohnosound.muted = true;

                document.querySelector("#sound_off_button1").classList.add("hidden");
                document.querySelector("#sound_off_button2").classList.add("hidden");
                document.querySelector("#sound_off_button3").classList.add("hidden");
                document.querySelector("#sound_off_button4").classList.add("hidden");
        }}
}

document.querySelector("#sound_off_button1").addEventListener("click", soundoff);
document.querySelector("#sound_off_button2").addEventListener("click", soundoff);
document.querySelector("#sound_off_button3").addEventListener("click", soundoff);
document.querySelector("#sound_off_button4").addEventListener("click", soundoff);


// give up
function giveup() {
    soundoff();
    var url = "https://youtu.be/xuCn8ux2gbs";
    var win = window.open(url, '_blank');
    win.focus();
}

document.querySelector("#giveup").addEventListener("click", giveup);


/* SOUNDS */

function win_sound() {

    if ((winsound.muted === false) && (gamewon === true)) {
        winsound.play();
    }
}

function gameover_sound() {

    if ((gameoversound.muted === false) && (gamelost === true)) {
            gameoversound.play();
    }
}

function click_sound() {
    
    if (clicksound.muted === false) {
            clicksound.play();
    }
}

document.querySelector("#start_game_button").addEventListener("click", click_sound);
document.querySelector("#info_button").addEventListener("click", click_sound);
document.querySelector("#sound_off_button1").addEventListener("click", click_sound);
document.querySelector("#sound_off_button2").addEventListener("click", click_sound);
document.querySelector("#sound_off_button3").addEventListener("click", click_sound);
document.querySelector("#sound_off_button4").addEventListener("click", click_sound);
document.querySelector("#pause_button").addEventListener("click", click_sound);
document.querySelector("#play_button").addEventListener("click", click_sound);
document.querySelector("#home_button1").addEventListener("click", click_sound);
document.querySelector("#home_button2").addEventListener("click", click_sound);
document.querySelector("#home_button3").addEventListener("click", click_sound);
document.querySelector("#play_again_button1").addEventListener("click", click_sound);
document.querySelector("#play_again_button2").addEventListener("click", click_sound);
document.querySelector("#exit_info").addEventListener("click", click_sound);
document.querySelector("#giveup").addEventListener("click", click_sound);


function good_sound() {

    if (goodsound.muted === false) {
                goodsound.play();
    }
}

document.querySelector("#container2").addEventListener("click", good_sound);
document.querySelector("#container3").addEventListener("click", good_sound);
document.querySelector("#container5").addEventListener("click", good_sound);
document.querySelector("#container7").addEventListener("click", good_sound);
document.querySelector("#container11").addEventListener("click", good_sound);
document.querySelector("#container13").addEventListener("click", good_sound);
document.querySelector("#container17").addEventListener("click", good_sound);
document.querySelector("#container19").addEventListener("click", good_sound);
document.querySelector("#container23").addEventListener("click", good_sound);
document.querySelector("#container29").addEventListener("click", good_sound);
document.querySelector("#container31").addEventListener("click", good_sound);
document.querySelector("#container37").addEventListener("click", good_sound);
document.querySelector("#container41").addEventListener("click", good_sound);
document.querySelector("#container43").addEventListener("click", good_sound);
document.querySelector("#container47").addEventListener("click", good_sound);
document.querySelector("#container53").addEventListener("click", good_sound);
document.querySelector("#container59").addEventListener("click", good_sound);
document.querySelector("#container61").addEventListener("click", good_sound);
document.querySelector("#container67").addEventListener("click", good_sound);
document.querySelector("#container71").addEventListener("click", good_sound);
document.querySelector("#container73").addEventListener("click", good_sound);
document.querySelector("#container79").addEventListener("click", good_sound);
document.querySelector("#container83").addEventListener("click", good_sound);
document.querySelector("#container89").addEventListener("click", good_sound);


function bad_sound() {

    if (badsound.muted === false) {
        badsound.play();
}
}

document.querySelector("#container1").addEventListener("click", bad_sound);
document.querySelector("#container4").addEventListener("click", bad_sound);
document.querySelector("#container9").addEventListener("click", bad_sound);
document.querySelector("#container10").addEventListener("click", bad_sound);
document.querySelector("#container15").addEventListener("click", bad_sound);
document.querySelector("#container21").addEventListener("click", bad_sound);
document.querySelector("#container25").addEventListener("click", bad_sound);
document.querySelector("#container27").addEventListener("click", bad_sound);
document.querySelector("#container33").addEventListener("click", bad_sound);
document.querySelector("#container35").addEventListener("click", bad_sound);
document.querySelector("#container39").addEventListener("click", bad_sound);
document.querySelector("#container45").addEventListener("click", bad_sound);
document.querySelector("#container49").addEventListener("click", bad_sound);
document.querySelector("#container51").addEventListener("click", bad_sound);
document.querySelector("#container57").addEventListener("click", bad_sound);
document.querySelector("#container63").addEventListener("click", bad_sound);
document.querySelector("#container65").addEventListener("click", bad_sound);
document.querySelector("#container69").addEventListener("click", bad_sound);
document.querySelector("#container75").addEventListener("click", bad_sound);
document.querySelector("#container77").addEventListener("click", bad_sound);
document.querySelector("#container81").addEventListener("click", bad_sound);
document.querySelector("#container85").addEventListener("click", bad_sound);
document.querySelector("#container87").addEventListener("click", bad_sound);
document.querySelector("#container91").addEventListener("click", bad_sound);


function ohno_sound() {

    if (ohnosound.muted === false) {
            ohnosound.play();
    }
}