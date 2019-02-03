class Controller {
	constructor() {
		let canvas = document.querySelector('canvas');
		this.canvas = {
			size: {},
			element: canvas,
			pen: canvas.getContext('2d'),
		};
		this.setCanvasSize(canvas);
		this.randomizeColor();
		this.item = new Item(this.canvas.size);

		setInterval(() => {
			this.checkCollision();
			this.item.move();
			this.drawItem();
		}, 25);

		window.addEventListener('resize', () => {
			this.setCanvasSize(canvas);
			this.item.setItemSize(this.canvas.size);
		});
	}

	clearCanvas() {
		this.canvas.pen.clearRect(0, 0, this.canvas.size.width, this.canvas.size.height);
	}

	drawItem() {
		this.clearCanvas();
		let { pen } = this.canvas;
		let { item } = this;

		pen.drawImage(item.image, item.coords.x - (item.size.width / 2), item.coords.y - (item.size.height / 2), item.size.width, item.size.height);
	}

	checkCollision() {
		let { item } = this;
		let { canvas } = this;
		let oobX = false;
		let oobY = false;

		if(item.coords.x + (item.size.width / 2) + item.velocity.x > canvas.size.width
		|| item.coords.x - (item.size.width / 2) + item.velocity.x < 0) {
			oobX = true;
		}
		if(item.coords.y + (item.size.height / 2) + item.velocity.y > canvas.size.height
		|| item.coords.y - (item.size.height / 2) < 0 - item.velocity.y) {
			oobY = true;
		}

		if(oobX) { item.changeDirection(true); this.randomizeColor(); }
		if(oobY) { item.changeDirection(false); this.randomizeColor(); }
	}

	setCanvasSize(canvas) {
		canvas.width = document.documentElement.clientWidth;
		canvas.height = document.documentElement.clientHeight;
		this.canvas.size = {
			height: canvas.height,
			width: canvas.width,
		};
	}

	randomizeColor() {
		this.canvas.pen.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
	}
}
