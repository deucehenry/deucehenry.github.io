$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    



    // TODO 2 - Create Platforms
    createPlatform(175.525,200,20);
    createPlatform(400,530,200,20);
    createPlatform(700,260,200,20);
    createPlatform(825,360,200,20);
    createPlatform(1100,400,200,20);
    createPlatform(175,250,200,20);





    // TODO 3 - Create Collectables
    createCollectable('database',250,600,0.5,0.7);
    createCollectable('database',475,325,0.5,0.7);
    createCollectable('max',800,400,0.5,0.7);
    createCollectable('database',350,500,0.5,0.7);
    createCollectable('steve',1100,600,0.5,0.7);
    createCollectable('diamond',750,200,0.5,0.7);




    
    // TODO 4 - Create Cannons
    createCannon('bottom',625,1000);
    createCannon('right',125,1000);
    createCannon('top',725,1000);
    createCannon('top',200,700);
    createCannon('left',475,1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
