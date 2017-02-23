var lungs;
var cigaretteX = 15;
var cigaretteY = 15;
var ballX1 = 245;
var ballY1 = 500;
var ballX2 = 145;
var ballY2 = 200;
var ballX3 = 345;
var ballY3 = 200;
var ballX4 = 295;
var ballY4 = 100;
var ballX5 = 445;
var ballY5 = 200;
var sgnX1 = -1;
var sgnY1 = -1;
var sgnX2 = -1;
var sgnY2 = 1;
var sgnX3 = 1;
var sgnY3 = -1;
var sgnX4 = 1;
var sgnY4 = 1;
var sgnX5 = -1;
var sgnY5 = -1;
var speed = 3;


function loadall() {
    lungs = [
		'00000000000000000000000000000000000000000000000000000000000',
        '22222222222222222222222222222222222222222222222222222222222',
        '20000000011111111111111111100001111001111111111111110000002',
        '20000000000000000000000001100001100000000000000000001111112',
        '20000000000000000000000001100001100000000000000000001110112',
        '20000000000000000000000001100001100000000000000000001100112',
        '20000000000000111110000001100001111111111111111000001111112',
        '20000000000001111111100001100000111111100000000000001111112',
        '20000000000011111111111001100001111111111100000000001111112',
        '20000001111111111111111110000000000111111111000000111100112',
        '20000111111111011111111111000011111111111111000000011100112',
        '20001111111111111111111111001111111111111111111000001111112',
        '20111111111111111111110000000011111111111111110000011111112',
		'20000111111111111111111111111111111111111111100000001111112',
        '20001111111111111111111111001111111111111111111000001111112',
        '20111111111111111111110000000011111111111111110000011111112',
		'20000111111001111000000111111111111111111111100000001111112',
        '20001111111111111111111111001111111111111111111000001111112',
        '20111111111111111111110000000011111111111111110000011111112',
		'20000111111111111111111111111111111111111111100000001111112',
        '20001111111111111111111111001111111111111111111000001111112',
        '20111111111111111111110000000011111111111111110000011111112',
		'20000111111111111111111111111111111111111111100000001111112',
        '20001111111111111111111111001111111111111111111000001101012',
        '20111111111111111111110000000011111111111111110000011110112',
        '21111111111111111110000000000011111111111111111000011110012',
        '21111111111111111000000000000001111001111000000000011111112',
        '20111111111111111100000000000000111111111111111100001111112',
        '20111111111111111100000000000000111111111111111100001111112',
        '21111111111111111100000000000000111111111111111100001111112',
        '21111111111111111100000000000000111111111111111110001111112',
        '21111111111111111111111000000001111111111111111110001111112',
        '21111111111111111100000000000000111111111111111110001111112',
        '21111111111111111000000000000000011111111111111110001111112',
        '21111111111111111000000000000000011111111111111110001111112',
        '21111111111111111000000111111111111111111111111110001111112',
        '21111111111111100000000000000000011111111111111100011111112',
        '21111111001010100000000000000000000100111111111110001111112',
        '21110110010000000000000000000000000000001111001110001111112',
        '22222222222222222222222222222222222222222222222222222222222',
    ];

    var score = document.getElementById('inpscore');
    score.value = '0';

    cigaretteX = 15;
	cigaretteY = 15;
    speed = 3;

    paint();
}

function paint() {
    var main = document.getElementById('main');
    main.innerHTML = "";

    for (var i = 0; i < lungs.length; ++i)
        for (var j = 0; j < lungs[i].length; ++j) {
            if (lungs[i][j] == '1') {
                var block = document.createElement('div');
                block.className = 'mini';
                block.style.top = i * 15 + 'px';
                block.style.left = (j + 1) * 15 + 'px';
                main.appendChild(block);
            }
			if (lungs[i][j] == '2') {
                var block = document.createElement('div');
                block.className = 'margins';
                block.style.top = i * 15 + 'px';
                block.style.left = (j + 1) * 15 + 'px';
                main.appendChild(block);
            }
			if (lungs[i][j] == '3') {
                var block = document.createElement('div');
                block.className = 'margins';
                block.style.top = i * 15 + 'px';
                block.style.left = (j + 1) * 15 + 'px';
                main.appendChild(block);
            }
        }

    var cigarette = document.createElement('div');
    cigarette.className = 'cigarette';
    cigarette.style.left = cigaretteX + 'px';
	cigarette.style.top = cigaretteY + 'px';
    main.appendChild(cigarette);

	checkCollisionWithMonster();
    checkCollisionWalls();
    

    if (Math.floor((Math.random() * 300) + 1) == 1)
        speed += 1;

    ballX1 += sgnX1 * speed;
    ballY1 += sgnY1 * speed;
	ballX2 += sgnX2 * speed;
    ballY2 += sgnY2 * speed;
	ballX3 += sgnX3 * speed;
    ballY3 += sgnY3 * speed;
	ballX4 += sgnX4 * speed;
    ballY4 += sgnY4 * speed;
	ballX5 += sgnX5 * speed;
    ballY5 += sgnY5 * speed;


    var ball = document.createElement('div');
    ball.className = 'smoke';
    ball.style.left = ballX1 + 'px';
    ball.style.top = ballY1 + 'px';
    main.appendChild(ball);
	
	var ball = document.createElement('div');
    ball.className = 'smoke';
    ball.style.left = ballX2 + 'px';
    ball.style.top = ballY2 + 'px';
    main.appendChild(ball);
	
	var ball = document.createElement('div');
    ball.className = 'smoke';
    ball.style.left = ballX3 + 'px';
    ball.style.top = ballY3 + 'px';
    main.appendChild(ball);
	
	var ball = document.createElement('div');
    ball.className = 'smoke';
    ball.style.left = ballX4 + 'px';
    ball.style.top = ballY4 + 'px';
    main.appendChild(ball);
	
	var ball = document.createElement('div');
    ball.className = 'smoke';
    ball.style.left = ballX5 + 'px';
    ball.style.top = ballY5 + 'px';
    main.appendChild(ball);

    setTimeout(paint, 30);
}

function checkCollisionWalls() {
    X = ballX1 + sgnX1 * speed;
    Y = ballY1 + sgnY1 * speed;

    if (X <= 30 || X >= 870) {
        sgnX1 = -sgnX1;
    }

    if (Y <= 30 || Y >= 570) {
        sgnY1 = -sgnY1;
    }
	
	X = ballX2 + sgnX2 * speed;
    Y = ballY2 + sgnY2 * speed;

    if (X <= 30 || X >= 870) {
        sgnX2 = -sgnX2;
    }

    if (Y <= 30 || Y >= 570) {
        sgnY2 = -sgnY2;
    }
	
	X = ballX3 + sgnX3 * speed;
    Y = ballY3 + sgnY3 * speed;

    if (X <= 30 || X >= 870) {
        sgnX3 = -sgnX3;
    }

    if (Y <= 30 || Y >= 570) {
        sgnY3 = -sgnY3;
    }
	
	X = ballX4 + sgnX4 * speed;
    Y = ballY4 + sgnY4 * speed;

    if (X <= 30 || X >= 870) {
        sgnX4 = -sgnX4;
    }

    if (Y <= 30 || Y >= 570) {
        sgnY4 = -sgnY4;
    }
	
	X = ballX5 + sgnX5 * speed;
    Y = ballY5 + sgnY5 * speed;

    if (X <= 30 || X >= 870) {
        sgnX5 = -sgnX5;
    }

    if (Y <= 30 || Y >= 570) {
        sgnY5 = -sgnY5;
    }
}



function checkCollisionWithMonster() {
    X = ballX1 + sgnX1 * speed;
    Y = ballY1 + sgnY1 * speed;

    if (closeTo(X, Y, cigaretteX, cigaretteY) && cigaretteX != 15 && cigaretteX != 985 && cigaretteY != 15 && cigaretteY != 585){
		alert("You lost!");
		loadall();
	}
	
	X = ballX2 + sgnX2 * speed;
    Y = ballY2 + sgnY2 * speed;

    if (closeTo(X, Y, cigaretteX, cigaretteY) && cigaretteX != 15 && cigaretteX != 985 && cigaretteY != 15 && cigaretteY != 585){
		alert("You lost!");
		loadall();
	}
	
	X = ballX3 + sgnX3 * speed;
    Y = ballY3 + sgnY3 * speed;

    if (closeTo(X, Y, cigaretteX, cigaretteY) && cigaretteX != 15 && cigaretteX != 985 && cigaretteY != 15 && cigaretteY != 585){
		alert("You lost!");
		loadall();
	}
	
	X = ballX4 + sgnX4 * speed;
    Y = ballY4 + sgnY4 * speed;

    if (closeTo(X, Y, cigaretteX, cigaretteY) && cigaretteX != 15 && cigaretteX != 985 && cigaretteY != 15 && cigaretteY != 585){
		alert("You lost!");
		loadall();
	}
	
	X = ballX5 + sgnX5 * speed;
    Y = ballY5 + sgnY5 * speed;

    if (closeTo(X, Y, cigaretteX, cigaretteY) && cigaretteX != 15 && cigaretteX != 985 && cigaretteY != 15 && cigaretteY != 585){
		alert("You lost!");
		loadall();
	}
        
    
}

function checkCollisionWithBlocks() {
    X = cigaretteX;
    Y = cigaretteY;

    for (var i = 0; i < lungs.length; ++i)
        for (var j = 0; j < lungs[i].length; ++j) {
            if (lungs[i][j] == '1') {
                var bX = (j + 1) * 15;
                var bY = i * 15;
                if (closeTo(X, Y, bX, bY)) {
                    var line = '';
                    for (var k = 0; k < lungs[i].length; ++k) {
                        if (k != j)
                            line += lungs[i][k];
                        else
                            line += '0';
                    }

                    lungs[i] = line;

                    var score = document.getElementById('inpscore');
                    var val = parseInt(score.value) + 1;
                    score.value = val;

                    return;
                }
            }
        }
}


function closeTo(x1, y1, x2, y2) {
    var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    if (d <= 11)
        return true;
    return false;
}

function keydown(event) {
    if (event.keyCode == 37 && cigaretteX > 15){
		cigaretteX -= 15;
		checkCollisionWithBlocks();
	}
    if (event.keyCode == 39 && cigaretteX < 885){
		cigaretteX += 15;	
		checkCollisionWithBlocks();
	}
       
	if (event.keyCode == 38 && cigaretteY > 15){
		cigaretteY -= 15;
		checkCollisionWithBlocks();
	}
        
    if (event.keyCode == 40 && cigaretteY < 585){
		cigaretteY += 15;
		checkCollisionWithBlocks();
	}
        
}