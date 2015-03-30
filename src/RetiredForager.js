var RetiredForagerBee = function() {
	ForagerBee.call(this);
	this.age = 40;
	this.job = "gamble";
	this.canFly = false;
	this.color = "grey";
	//this.treasureChest = new ForagerBee().treasureChest;
};




RetiredForagerBee.prototype = Object.create(Grub.prototype)

RetiredForagerBee.prototype.forage = function(){

	console.log("TEST");
	return ("I am too old, let me play cards instead")

}

RetiredForagerBee.prototype.gamble = function(treasure){
	this.treasureChest.push(treasure);
}

RetiredForagerBee.prototype.constructor = RetiredForagerBee;