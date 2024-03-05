class Spirte {
  constructor(position) {
    this.position = position;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 10, 50);
  }

  update() {
    this.draw();
  }
}

class Background {
  constructor({ position, image }) {
    this.position = position;
    this.image = image;
  }

  draw(overLayVelocity, offset) {
    this.position.x += overLayVelocity * offset;
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width,
      window.innerHeight
    );
  }

  update() {
    this.draw();
  }
}

class Sign {
  constructor({ position, imageSrc, scale }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
  }

  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width * this.scale,
      this.image.height * this.scale
    );
  }

  update() {
    this.position.x += overLayVelocity;
    this.draw();
  }
}

class Bonfire {
  constructor({ position, imageSrc, scale = 1, frameMax = 1 }) {
    this.images = imageSrc;
    this.image = new Image();
    this.image.src = imageSrc[0];
    this.scale = scale;
    this.frameMax = frameMax;
    this.position = position;
    this.position.x = (this.image.width + 10) * -1;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 7;
  }

  draw(s) {
    if (s) {
      this.image.src = this.images[0];
    } else {
      this.image.src = this.images[1];
    }

    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.frameMax),
      0,
      this.image.width / this.frameMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.frameMax) * this.scale,
      this.image.height * this.scale
    );
  }

  update() {
    if (overLayVelocity > 0) {
      this.draw(false);
    } else {
      this.draw(true);
    }

    this.framesElapsed++;

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.frameMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }
}
