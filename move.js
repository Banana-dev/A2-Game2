var jamy = {
	position: {
		x: 300,
		y: 450
	},

	size: {
		height: 20,
		width: 20,
		radius: 10
	},

	physics: {
		speed: 10
	},

	direction: {
		x: 1,
		y: 1
	}
};

var spontex = {
	
	position: {
		x: mousemove.clientX,
		y: 700
	},
	
	size: {
		height: 25,
		width: 80
	}
};

var ilovejamy = {

	init: {
    
    	this.canvas = document.querySelector('#myGameCanvas');
    	this.context = this.canvas ? this.canvas.getContext('2d') : null;

    	if (!this.context)
    	{
      		console.log("Error getting application context");
      		return; //TODO: notify user
    	}
	}

}