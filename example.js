let gg_folders = document.getElementsByClassName("gg-folder");
[].forEach.call(gg_folders, function(e){
  e.style.setProperty("--ggs", 1.0);
  e.style.setProperty("--button_name", JSON.stringify("pool"));
})


function createCircle(cx, cy, r){
  let circle = document.createElement("circle");
  circle.cx=cx;
  circle.cy =cy;
  circle.r= r;
  return circle;
}
/*
function createLoadingCircle(){
  let svg = document.createElement("svg");
  let background_circle = createCircle(57,57,52);
  background_circle.classList.add("bg");
  let foreground_circle = createCircle(57,57,52);
  foreground_circle.classList.add("meter-1");
  svg.appendChild(background_circle);
  svg.appendChild(foreground_circle);
  return svg;
}*/

function createButton(buttonTuple){
  let button = document.createElement("button");
  button.onclick = function(){
    // Recover all divs of class data_disp and hide them
    let data_disps = document.getElementsByClassName("data_disp");
    [].forEach.call(data_disps, function(e){
      if(e.id == buttonTuple[1]){
      	
        let load_circle =document.getElementById("load_circle");
        let load_meter = document.getElementById("meter");
        load_meter.classList.add("animated");
        load_meter.style.animation="none";
        setTimeout(function() {
            load_meter.style.animation = '';
        }, 10);
        load_circle.style.display="block";//="display:inline;";
        //load_meter.offsetHeight; /* trigger reflow */
        //load_meter.style.animation = ''; 
        setTimeout(() => {
           e.style.display="block";

        }, 1000);
      } else {
        e.style.display="none";
      }
      
      
    }) 
    // Unhide the one of interest
  }
  let inner_img = document.createElement("img");
  inner_img.src="https://i.servimg.com/u/f68/20/44/64/73/icone-10.png";
  let inner_text = document.createElement("p");
  button.classList.add("folder_button");
  inner_text.innerText = buttonTuple[0]; // Name is first entry
  button.appendChild(inner_img);
  button.appendChild(inner_text);
  
  return button;
}


function displayButtons(){
  let buttons = document.getElementsByClassName("folder_button");
  [].forEach.call(buttons, function(e){
    e.style.display='inline';
    e.style.animation="trans 0.4s linear 1";
  });
}

async function displayButtonsAfterDelay(delay){
  await new Promise(resolve => setTimeout(displayButtons, delay));
}

 let focus_button = document.getElementById("login_button");

 focus_button.onclick = function(){
   // Check the login. If correct, the uauth must be hidden.
   let login_box = document.getElementById("pwd");
   let expected_pwd = "bite";
   if(login_box.value == expected_pwd){
     document.getElementById("error_pwd").style.display='none';
     document.getElementById("uauth").style.display='none';
     let focus_button = document.getElementById("login_button");
  focus_button.style.backgroundColor="#3e8e41";
  focus_button.style.boxShadow="0 5px #666";
  focus_button.style.transform="translate(-150%, -4px)  scale(0.5,0.5)";
   focus_button.classList.add('special');
   
   document.getElementById("horizontal_layout").classList.add("animated");
     
   focus_button.addEventListener("transitionend", (event) => {
    if(event.propertyName == "transform"){
        displayButtonsAfterDelay(100);
    }
    }, false);
   } else {
    document.getElementById("error_pwd").style.display='inline';
   }
 }; 

let layout = document.getElementById("horizontal_layout");

      
let load_circle = document.getElementById("load_circle");
load_circle.style.display="none";

// Generate the two buttons
let button_list = [['01102-d2.holwav', 'first_story'], ['01102-d4-v.holtxt', 'second_story']];

button_list.forEach(b => {
  let button = createButton(b);
  layout.appendChild(button);
});