
var ilovejamy = {

	init: function(){
    
    	this.canvas = document.getElementById('niglou');
    	console.log(this.canvas);
    	this.context = this.canvas ? this.canvas.getContext('2d') : null;
//
    //	if (!this.context)
    //	{
    //  		console.log("Error getting application context");
    //  		return; //TODO: notify user
    //	}
//
    	window.addEventListener('mousemove', controller.move, false);
        // window.addEventListener('keydown', controller.keypress, true);
        jamy.draw();
        player.draw();
        this.update();

	},

    update : function(){

        ilovejamy.clearContext();

        player.draw();

        requestAnimationFrame(ilovejamy.update);
    },

    clearContext : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
    },

    canvas: null,
    context : null,
    timeout: 33
};

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
		speed: 50
	},

	direction: {
		x: 1,
		y: 1
	},

	draw : function(){
    	ilovejamy.context.fillStyle = "rgb(200, 0, 0)";
    	ilovejamy.context.fillRect(jamy.position.x, jamy.position.y, jamy.size.width, jamy.size.height);
	},

	reset : function(){
    	this.position.x = 300;
    	this.position.y = 450;
    	this.direction.x = 1;
    	this.direction.y = 1;
	}
};

// var spontex = {
//
// 	position: {
// 		x: 512,
// 		y: 700
// 	},
//
// 	size: {
// 		height: 25,
// 		width: 80
//
//
// 	}
// };

var controller = {

    // keypress : function(event) {
    //
    //     switch (event.keyCode)
    //     {
    //         case 37:
    //             player.moveLeft();
    //             break;
    //         case 39:
    //             player.moveRight();
    //             break;
    //     }
    // }
    move: function(event){
        console.log(event);
        player.position.x = event.clientX;
    }

};

var player = {

    position: {
        x: 512,
        y: 700
    },

    size: {
        height: 25,
        width: 80
    },

    physics: {
        speed: 10
    },
	
	score: 0,

	lives: 3,

	draw : function(){
    	ilovejamy.context.fillStyle = "rgb(0, 200, 0)";
    	ilovejamy.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

    	ilovejamy.context.textAlign = "center";
    	ilovejamy.context.fillStyle = "rgba(0, 0, 0, .2)";

    	ilovejamy.context.font = "18px sans-serif";
    	ilovejamy.context.fillText("Lives", 40, 20);
    	ilovejamy.context.fillText("Score", 40, 120);

    	ilovejamy.context.font = "48px sans-serif";
    	ilovejamy.context.fillText(this.lives, 40, 75);
    	ilovejamy.context.fillText(this.score, 40, 175);
  	},

  	reset: function(){
    	this.lives = 3;
    	this.score = 0;
    	this.position.x = 512;
    },

    moveLeft: function(){
        if (this.position.x > 0)
            this.position.x -= this.physics.speed;
    },

    moveRight: function(){
        if (this.position.x < (ilovejamy.canvas.width - this.size.width))
            this.position.x += this.physics.speed;
    }
};

ilovejamy.init();