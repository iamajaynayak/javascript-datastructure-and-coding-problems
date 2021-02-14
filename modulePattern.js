// Problem : Module Pattern
//Solution : Fight game with module pattern

var fightModule = (function (){
	var gameName = "Random Fight"
	function fight(character1, character2){
		var attack1 = Math.round(Math.random() * character1.length)
		var attack2 = Math.round(Math.random() * character2.length)
		return attack1 > attack2 ? `${character1} won` : `${character2} won`
	}

	return {
		fight : fight
	}
})()


fightModule.fight("biki" , "riki")