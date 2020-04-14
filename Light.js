
let Light = function(idLight, nameCheckBox, imgON, imgOFF) {
	this.imgON  = imgON;
	this.imgOFF = imgOFF;

	this.elImg = document.querySelector('#'+idLight);

	this.elCheckBox = document.querySelector('#'+nameCheckBox);
	this.elCheckBox.addEventListener('change', this.onChanger.bind(this));
}

Light.prototype.onChanger = function() {
	if (this.elCheckBox.checked) {
		this.turnOn();
	}else{
		this.turnOFF();
	}
};

Light.prototype.turnOn = function() {
	this.elImg.src = this.imgON;
};

Light.prototype.turnOFF = function() {
	this.elImg.src = this.imgOFF;
};