let mic;

function setup() {
    createCanvas(400, 400);
    background('withe');
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var boca_w = width / 1.75;

    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 10, 300);

    noStroke();

    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    //fons de la boca
    fill('black');
    rect(0, 100, boca_w, 200);

    //llengua
    fill('pink');
    rect(0, 150, boca_w, 120, 10 + mov);

    //dents arriba
    fill('withe')
    rect(0, 20, boca_w, 50 + 0.2 + mov, 0.5 + mov);

    //dent 
    fill('yellow')
    rect(30, 20, 20, 50 + 0.5 + mov);

    //dent abaix
    fill('withe')
    rect(0, 150, boca_w, 65 + 0.5 + mov, 0.5 + mov);

    //barbeta
    fill('red');
    rect(0, 180, boca_w, 100);
    pop();

    //front
    fill('red');
    rect(0, 0, width, height / 1.8);

    //ull esquerre
    fill(255);
    ellipse(width * 0.25, height / 2.5, 40 + mov + 0.5);
    fill('black');
    ellipse(width * 0.25, height / 2.5, 0.5 + mov);

    //ull dret
    fill(255);
    ellipse(width * 0.75, height / 2.5, 25 + mov + 0.5);
    fill('black');
    ellipse(width * 0.75, height / 2.5, 0.5 + mov);

    //cella dreta
    noFill();
    stroke(225);
    strokeWeight(10);
    arc(width * 0.75, height / 4 + mov + 0.5, 50+ mov + 0.5, 40 + mov + 1, radians(230), radians(310));

    //cella esquerre
    noFill();
    stroke(225);
    strokeWeight(10);
    arc(width * 0.25, height / 4 + mov + 0.5, 50+ mov + 0.5, 40 + mov + 1, radians(230), radians(310));

    //nas
    noFill();
    stroke(255);
    strokeWeight(10);
    arc(width * 0.5, height / 2 + mov + 0.5, 50, 40 + mov + 1, radians(230), radians(310));
}

function touchStarted() {
    getAudioContext().resume();
}
