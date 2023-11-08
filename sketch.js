let big, small, floor, gems;

function setup() {
	new Canvas(1000, 400);

  gems = new Group();
	gems.diameter = 10;
	gems.x = () => random(0, canvas.w);
	gems.y = () => random(0, canvas.h);
	gems.amount = 80;

	world.gravity.y = 30;
	big = new Sprite();
  big.overlaps(gems, collect);

  small = new Sprite(0, 0, 30, 30);
	floor = new Sprite(250, 360, 3000, 40, 'static');
}

function collect(big, gem) {
	gem.remove();
}

function draw() {
	clear();
	big.moveTowards(mouse);

	if (mouse.presses()) {
		big.vel.y = -4;
		big.vel.x = 3;
    big.rotation += 10

    small.vel.y = -5;
		small.vel.x = 2;

    const player = new Sprite(500, 20, 15, 15);
    player.vel.y = -5;
		player.vel.x = 3;

	}

	camera.x = big.x;
}

