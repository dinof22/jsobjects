//Objects lesson.
var Robot = {
    fuel: 100, 
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",

    AddFuel: function (tank) {
        fuel += tank;
    },

    UpgradeArmor: function (change) {
        this.armor = change;
    },

    ChangeWeapon: function (change) {
        this.weapon = change;
    }
}

Robot.speed += parseInt(prompt("Increase robot speed."));
alert("Our robot now has a speed of " + Robot.speed);
Robot.UpgradeArmor(prompt("What should we upgrade the armor to, precious???"));
alert(" Our Robot now has " + Robot.armor + " armor.");