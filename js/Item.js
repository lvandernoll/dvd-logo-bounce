class Item {
	constructor(canvasSize) {
		this.image = document.querySelector('img');
		this.size;
		this.setItemSize(canvasSize);
		this.speed = 5;
		this.coords = {
			x: Math.floor(Math.random() * (canvasSize.width * .5)) + canvasSize.width * .2,
			y: Math.floor(Math.random() * (canvasSize.height * .5)) + canvasSize.height * .2,
		};
		this.velocity = {
			x: Math.random() >= 0.5 ? this.speed : -this.speed,
			y: Math.random() >= 0.5 ? this.speed : -this.speed,
		};
	}

	move() {
		this.coords.x += this.velocity.x;
		this.coords.y += this.velocity.y;
	}

	changeDirection(changeX) {
		if(changeX) this.velocity.x = -this.velocity.x;
		else this.velocity.y = -this.velocity.y;
	}

	setItemSize(canvasSize) {
		this.size = {
			height: 1020 * (canvasSize.width / 10000),
			width: 2000 * (canvasSize.width / 10000),
		}
	}
}
