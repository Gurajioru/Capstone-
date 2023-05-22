

class HealthBar {
  constructor(x, y, w, h, maxHealth, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  show(context) {
	context.lineWidth = 4;
	context.strokeStyle = "aqua";
	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.w, this.h);
	context.strokeRect(this.x, this.y, this.maxWidth, this.h);

	// Calculate percentage remaining
	const percentRemaining = Math.round((this.health / this.maxHealth) * 100);

	// Draw percentage text in center of health bar
	context.fillStyle = "white";
	context.font = "bold 16px Arial";
	const textWidth = context.measureText(percentRemaining + "%").width;
	const textX = this.x + (this.maxWidth / 2) - (textWidth / 2);
	const textY = this.y + (this.h / 2) + 5; // add 5 to center text vertically
	context.fillText(percentRemaining + "%", textX, textY);
 }
 
  updateHealth(val) {
    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}





