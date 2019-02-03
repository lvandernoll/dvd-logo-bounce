class Item {
	constructor(canvasSize) {
		this.size;
		this.setItemSize(canvasSize);
		this.speed = 5;
		this.coords = {
			x: Math.floor(Math.random() * (canvasSize.width * .8)) + canvasSize.width * .1,
			y: Math.floor(Math.random() * (canvasSize.height * .8)) + canvasSize.height * .1,
		};
		this.velocity = {
			x: Math.random() >= 0.5 ? this.speed : -this.speed,
			y: Math.random() >= 0.5 ? this.speed : -this.speed,
		};
		this.randomizeColor();
	}

	move() {
		this.coords.x += this.velocity.x;
		this.coords.y += this.velocity.y;
	}

	changeDirection(changeX) {
		this.randomizeColor();
		if(changeX) this.velocity.x = -this.velocity.x;
		else this.velocity.y = -this.velocity.y;
	}

	randomizeColor() {
		this.color = `rgb(${(Math.random() * 256) + 1}, ${(Math.random() * 256) + 1}, ${(Math.random() * 256) + 1})`;
	}

	setItemSize(canvasSize) {
		this.size = {
			height: canvasSize.width / 15,
			width: canvasSize.width / 15,
		}
	}
}
