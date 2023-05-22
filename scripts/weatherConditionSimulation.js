

/*All the code below is for the functionality where we drag and drop the different weather conditions that we plan on simulating */
/*
//--------------------Creates Tornado Instance-------------------- 

function createTornado() {
  const newTornado = document.createElement("img");
  newTornado.src = "resources/gifs/tornadoGif.gif";
  newTornado.classList.add("newTornadoInstanceGif");

  document.body.appendChild(newTornado);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newTornado.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newTornado.offsetLeft - event.clientX,
      y: newTornado.offsetTop - event.clientY
    };
  });

  newTornado.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newTornado.style.left = (event.clientX + offset.x) + "px";
      newTornado.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newTornado.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteTornadoGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteTornadoGifButton.addEventListener("click", function() {
  const tornadoInstance = document.querySelector(".newTornadoInstanceGif");
  tornadoInstance.parentNode.removeChild(tornadoInstance);
  deleteTornadoGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const tornadoButton = document.getElementById("tornadoButton");
tornadoButton.addEventListener("click", function() {
  createTornado();
});

*/

//--------------------Creates Wind Instance-------------------- 
/*
function createWind() {
  const newWind = document.createElement("img");
  newWind.src = "resources/gifs/windGif.gif";
  newWind.classList.add("newWindInstanceGif");

  document.body.appendChild(newWind);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newWind.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newWind.offsetLeft - event.clientX,
      y: newWind.offsetTop - event.clientY
    };
  });

  newWind.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newWind.style.left = (event.clientX + offset.x) + "px";
      newWind.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newWind.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteWindGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteWindGifButton.addEventListener("click", function() {
  const windInstance = document.querySelector(".newWindInstanceGif");
  windInstance.parentNode.removeChild(windInstance);
  deleteWindGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const windButton = document.getElementById("windButton");
windButton.addEventListener("click", function() {
  createWind();
});
*/

//--------------------Creates Snow Storm Instance-------------------- 
/*
function createSnowStorm() {
  const newSnowStorm = document.createElement("img");
  newSnowStorm.src = "resources/gifs/snowStormGif.gif";
  newSnowStorm.classList.add("newSnowStormInstanceGif");

  document.body.appendChild(newSnowStorm);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newSnowStorm.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newSnowStorm.offsetLeft - event.clientX,
      y: newSnowStorm.offsetTop - event.clientY
    };
  });

  newSnowStorm.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newSnowStorm.style.left = (event.clientX + offset.x) + "px";
      newSnowStorm.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newSnowStorm.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteSnowStormGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteSnowStormGifButton.addEventListener("click", function() {
  const snowStormInstance = document.querySelector(".newSnowStormInstanceGif");
  snowStormInstance.parentNode.removeChild(snowStormInstance);
  deleteSnowStormGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const snowStormButton = document.getElementById("snowStormButton");
snowStormButton.addEventListener("click", function() {
  createSnowStorm();
});
*/

//--------------------HailStorm Instance-------------------- 

/*
function createHailStorm() {
  const newHailStorm = document.createElement("img");
  newHailStorm.src = "resources/gifs/hailStormGif.gif";
  newHailStorm.classList.add("newHailStormInstanceGif");

  document.body.appendChild(newHailStorm);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newHailStorm.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newHailStorm.offsetLeft - event.clientX,
      y: newHailStorm.offsetTop - event.clientY
    };
  });

  newHailStorm.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newHailStorm.style.left = (event.clientX + offset.x) + "px";
      newHailStorm.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newHailStorm.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteHailStormGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteHailStormGifButton.addEventListener("click", function() {
  const hailStormInstance = document.querySelector(".newHailStormInstanceGif");
  hailStormInstance.parentNode.removeChild(hailStormInstance);
  deleteHailStormGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const hailStormButton = document.getElementById("hailStormButton");
hailStormButton.addEventListener("click", function() {
  createHailStorm();
});

*/

//--------------------Creates Cloud Instance-------------------- 
/*
function createCloud() {
  const newCloud = document.createElement("img");
  newCloud.src = "resources/gifs/cloudGif.gif";
  newCloud.classList.add("newCloudInstanceGif");

  document.body.appendChild(newCloud);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newCloud.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newCloud.offsetLeft - event.clientX,
      y: newCloud.offsetTop - event.clientY
    };
  });

  newCloud.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newCloud.style.left = (event.clientX + offset.x) + "px";
      newCloud.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newCloud.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteCloudGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteCloudGifButton.addEventListener("click", function() {
  const cloudInstance = document.querySelector(".newCloudInstanceGif");
  cloudInstance.parentNode.removeChild(cloudInstance);
  deleteCloudGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const cloudButton = document.getElementById("cloudButton");
cloudButton.addEventListener("click", function() {
  createCloud();
});
*/

//--------------------Creates Thunder Storm Instance-------------------- 
/*
function createThunderStorm() {
  const newThunderStorm = document.createElement("img");
  newThunderStorm.src = "resources/gifs/thunderStormGif.gif";
  newThunderStorm.classList.add("newThunderstormInstanceGif");

  document.body.appendChild(newThunderStorm);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newThunderStorm.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newThunderStorm.offsetLeft - event.clientX,
      y: newThunderStorm.offsetTop - event.clientY
    };
  });

  newThunderStorm.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newThunderStorm.style.left = (event.clientX + offset.x) + "px";
      newThunderStorm.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newThunderStorm.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteThunderStormGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteThunderStormGifButton.addEventListener("click", function() {
  const thunderStormInstance = document.querySelector(".newThunderstormInstanceGif");
  thunderStormInstance.parentNode.removeChild(thunderStormInstance);
  deleteThunderStormGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const thunderStormButton = document.getElementById("thunderStormButton");
thunderStormButton.addEventListener("click", function() {
  createThunderStorm();
});

*/

//--------------------Creates Lightning Instance-------------------- 
/*
function createLightning() {
  const newLightning = document.createElement("img");
  newLightning.src = "resources/gifs/lightningGif.gif";
  newLightning.classList.add("newLightningInstanceGif");

  document.body.appendChild(newLightning);

  let isDragging = false;
  let offset = { x: 0, y: 0 };

  newLightning.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
      x: newLightning.offsetLeft - event.clientX,
      y: newLightning.offsetTop - event.clientY
    };
  });

  newLightning.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isDragging) {
      newLightning.style.left = (event.clientX + offset.x) + "px";
      newLightning.style.top = (event.clientY + offset.y) + "px";
      // Update delete button position
      const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
      deleteButton.style.top = (event.clientY + offset.y) + "px";
      deleteButton.style.left = (event.clientX + offset.x) + "px";
    }
  });
    
  // Add right-click event listener to show delete button
  newLightning.addEventListener("contextmenu", function(event) {	
    event.preventDefault(); // Prevent default right-click behavior
    const deleteButton = document.getElementById("delete_Weather_Condition_Gif_Button");
    deleteButton.style.display = "flex";
    deleteButton.style.top = event.clientY + "px";
    deleteButton.style.left = event.clientX + "px";
    
    // Add click event listener to hide delete button
    document.addEventListener("click", function hideDeleteButton(event) {
      const target = event.target;
      if (target !== deleteButton) {
        deleteButton.style.display = "none";
        document.removeEventListener("click", hideDeleteButton);
      }
    });
  }); 
}

// Add click event listener to delete button
const deleteLightningGifButton = document.getElementById("delete_Weather_Condition_Gif_Button");
deleteLightningGifButton.addEventListener("click", function() {
  const lightningInstance = document.querySelector(".newLightningInstanceGif");
  lightningInstance.parentNode.removeChild(lightningInstance);
  deleteLightningGifButton.style.display = "none"; // Hide delete button after deleting snow storm instance
});

const lightningButton = document.getElementById("lightningButton");
lightningButton.addEventListener("click", function() {
  createLightning();
});
*/
