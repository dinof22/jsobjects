    function Player () {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100

    this.Rearm = function (ammo) {
        this.ammoCount += ammo;
    }
}


var Player1 = new Player();
var Player2 = new Player();

function UpdatePlayer(currentPlayer, healthUpdate, ammo) {
    currentPlayer.name = prompt("Enter a name for current player.");
    alert(PlayerPosition +"'s name is " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "Weak";
    currentPlayer.Rearm(ammo);
    alert(currentPlayer.name + " has " + currentPlayer.ammoCount + " in their arsonal." );
}

UpdatePlayer(Player1, 20, 1, "Player1");
UpdatePlayer(Player2, 60, 1000, "Player2");