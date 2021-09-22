var craft1_image, bg_image, iss_image, craft2_image, craft3_image, craft4_image
var craft, bg, iss, hasDocked
function preload() {
  craft1_image = loadImage("spacecraft1.png")
  craft2_image = loadImage("spacecraft2.png")
  craft3_image = loadImage("spacecraft3.png")
  craft4_image = loadImage("spacecraft4.png")

  iss_image = loadImage("iss.png")
  bg_image = loadImage("spacebg.jpg")

}

function setup() {
  createCanvas(630,400);
  hasDocked = false
  bg = createSprite(315,200,800,400)
  bg.addImage("background",bg_image)
  iss = createSprite(510,100)
  iss.addImage(iss_image)
  iss.scale = 0.25

  craft = createSprite(315,300)
  craft.addImage("1",craft1_image)
  craft.addImage("2",craft2_image)
  craft.addImage("3",craft3_image)
  craft.addImage("4",craft4_image)
  craft.scale = 0.1

  craft.x = random(0,630)


}

function draw() {
  background(200); 
  drawSprites();
  console.log(craft.y)
  if (!hasDocked) {
    if (keyDown(LEFT_ARROW)) {
      craft.changeImage("3")
      craft.x = craft.x - 2.5
    }
    if (keyDown(RIGHT_ARROW)) {
      craft.changeImage("4")
      craft.x = craft.x + 2.5
    }
    if (keyDown(DOWN_ARROW)) {
      craft.changeImage("1")
    }
    if (keyDown(UP_ARROW)) {
      craft.changeImage("2")
      craft.y = craft.y - 2.5
    }
    
  }
  if (craft.x > 430 && craft.x < 550 && craft.y > 60 && craft.y < 135) {
    hasDocked = true
    textSize(30)
    text("Docking Successful",315,200)
  }
}