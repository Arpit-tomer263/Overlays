
// Getting Acess of the HTML ID's or Classes 
const thum1 = document.querySelector("#thumbnail");
const thum2 = document.querySelector("#thumbnail2");
const navbar = document.querySelector(".navbar");
const home = document.querySelector("#home");
const Heading = document.querySelector("#Heading");
const logo = document.querySelector(" #logo");
const shop_all = document.querySelector("#shop_all");
const men = document.querySelector("#men");
const women = document.querySelector("#women");
const rich_cotton = document.querySelector("#rich_cotton");
const get_in_touch = document.querySelector("#get_in_touch");
const search = document.querySelector("#search");
const slide_button = document.querySelector("#slidebutoon_1");
const slide_button2 = document.querySelector("#slidebutoon_2");
const hr1 = document.querySelector("#hr1");
const hr2 = document.querySelector("#hr2"); 
const pr1 = document.querySelector("#pr1");
const pr1_hover = document.querySelector("#pr1_hover");
const pr2 = document.querySelector("#pr2");
const pr2_hover = document.querySelector("#pr2_hover");
const pr3 = document.querySelector("#pr3");
const pr3_hover = document.querySelector("#pr3_hover");
const pr4 = document.querySelector("#pr4");
const pr4_hover = document.querySelector("#pr4_hover");
const product1 = document.querySelector(".product1");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");
const product4 = document.querySelector(".product4");
const p2_p1 = document.querySelector("#p2_p1");
const pr2_p1_hover = document.querySelector("#pr2_p1_hover");
const mn_pr1 = document.querySelector("#mn_pr1");
const p2_p2 = document.querySelector("#p2_p2");
const p2_p2_hover = document.querySelector("#pr2_p2_hover");
const mn_pr2 = document.querySelector("#mn_pr2");
const p2_p3 = document.querySelector("#p2_p3");
const pr2_p3_hover = document.querySelector("#pr2_p3_hover");
const mn_pr3 = document.querySelector("#mn_pr3");
const p2_p4 = document.querySelector("#p2_p4");
const pr2_p4_hover = document.querySelector("#pr2_p4_hover");
const mn_pr4 = document.querySelector("#mn_pr4");
const product1_cn = document.querySelector('.product1_cn');
const product2_cn = document.querySelector('.product2_cn');
const product3_cn = document.querySelector('.product3_cn');
const product4_cn = document.querySelector('.product4_cn');
const option_ch_hr = document.querySelector('#option_ch_hr');
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const Tshirt_pr1_fl = document.querySelector("#Tshirt_pr1_fl")
const Tshirt_pr2_fl = document.querySelector("#Tshirt_pr2_fl")
const Tshirt_pr3_fl = document.querySelector("#Tshirt_pr3_fl")
const Tshirt_pr4_fl = document.querySelector("#Tshirt_pr4_fl")
const t_shirts = document.querySelector("#option1")
const joggers = document.querySelector("#option2")
const shirts = document.querySelector("#option3")
const t_shirts_dis = document.querySelector(".T-shirt")
const joggers_dis = document.querySelector(".Joggers")
const shirts_dis = document.querySelector(".shirts")








//Create a function that will reverse the image after swapping
function slide_show(thum1,thum2){
  setTimeout(() =>{
     thum2.style.opacity = 0;
    thum1.style.opacity = 1;
    // I call this function for making loop that the image will show infinitely
  thum_status(thum1,thum2)}, 3000)
}

// Making the function that will swap he image 1's time
function thum_status(thum1,thum2) {
  setTimeout(() =>
  {thum1.style.opacity = 0;
  thum2.style.opacity = 1;
  // Calling slideshow for make a infinite effect
  slide_show(thum1, thum2);
  },3000)
    
}

// Check
console.log("Hey! this is the clone websiet")


// Add a function that will change the navbar location after scrolling

 // Firstly we add some variables for Y-axis position
const max_length = "2rem"
const y =  document.documentElement.scrollTop;


window.addEventListener('scroll', function nav_function() {
  var scroll = window.scrollY;
  var max_length = 20;


// Giving else situation that handle the scrool e.g when user scroll down navbar attributs and when user scroll up nav bar attributies
if (scroll >= max_length) {
    navbar.style.backgroundColor = "white";
    navbar.style.top = '0';
    home.style.color = "black";
    Heading.style.color = "black";
    shop_all.style.color = "black";
    men.style.color = "black";
    women.style.color = "black";
    rich_cotton.style.color = "black";
    get_in_touch.style.color = "black";
    search.style.color = "black";
    logo.style.backgroundImage = "url(Image/logo.avif)";
    logo.style.height = "90px";
    logo.style.width = "100px";
    logo.style.top = '0';
    logo.style.left = "630px";
    search.style.backgroundImage = "url(Image/Search_new.png)";
    search.style.width = "25px";
    search.style.height = "25px";
    search.style.top = "9px";
    search.style.left = "0px";
    navbar.classList.remove('hover');

}
 
else {
    navbar.style.top = "2rem"; // Reset position to static when scrolling back up
    navbar.style.backgroundColor = ""; // Reset background color
    logo.style.backgroundImage = "url(/Image/logo_real.avif)";
    logo.style.height = "80px";
    logo.style.width = "80px";
    logo.style.top = "10px";
    logo.style.left = "635px";
    home.style.color = "white";
    Heading.style.color = "white";
    shop_all.style.color = "white";
    men.style.color = "white";
    women.style.color = "white";
    rich_cotton.style.color = "white";
    get_in_touch.style.color = "white";
    search.style.color = "white";
    search.style.backgroundImage = "url(Image/search_icone.png)";
    search.style.width = "25px";
    search.style.height = "25px";
    search.style.top = "9px";
    search.style.left = "0px";

    // Removing hover effect from navbar
    navbar.classList.remove('hover');



// When i do this i will face some problems like when user in scroll position the over effect does not work so these elements controll this error

  // Add event listeners for mouseenter and mouseleave
  navbar.addEventListener('mouseenter', function() {
  // Apply hover effect styles when mouse enters the navbar
  navbar.style.transition = 'background-color 0.5s ease 0.001s';
  navbar.style.backgroundColor = 'white';

  search.style.backgroundImage = 'url(/Image/Search_new.png)';
  search.style.width = '25px';
  search.style.height = '25px';
  search.style.position = 'absolute';
  search.style.top = '9px';
  search.style.left = '0px';

  
  Heading.style.color = 'rgba(0, 0, 0, 0.5)';

  
  logo.style.backgroundImage = 'url(/Image/logo.avif)';
  logo.style.height = '90px';
  logo.style.width = '100px';
  logo.style.position = 'absolute';
  logo.style.top = '0px';
  logo.style.left = '630px';

  home.style.color = 'black';
  shop_all.style.color = 'black';
  men.style.color = 'black';
  women.style.color = 'black';
  rich_cotton.style.color = 'black';
  get_in_touch.style.color = 'black';
});

// This situation is also same as upper when user scroll up the hover effect does not work so this is the soltion of this code 
  // Add event listener to remove styles when mouse leaves the navbar 
  navbar.addEventListener('mouseleave', function() {
  // Remove hover effect styles when mouse leaves the navbar
  navbar.removeAttribute('style');
  search.removeAttribute('style');
  Heading.removeAttribute('style');
  logo.removeAttribute('style');
  home.removeAttribute('style');
  shop_all.removeAttribute('style');
  men.removeAttribute('style');
  women.removeAttribute('style');
  rich_cotton.removeAttribute('style');
  get_in_touch.removeAttribute('style');
});

  }
});





// These some function helps us to animate the satus checker buttons

//firstly we add a function that will do transition in the first button
function sld_ap() {
  slide_button.style.width = "85px";
  slide_button.style.opacity = 1;
  
}

//Second programme is used to disable the attribute that will run above after 3sec but we don't add delay becz it's call some issue
function slid_btn_dis1() {
  slide_button.style.opacity = 0;
  slide_button.style.width = 0;
}

// This is also same as upper first we animate the second button

function slid_btn2() {
  slide_button2.style.width = "85px";
  slide_button2.style.opacity = 1;
}

function slid_btn_dis2() {
  slide_button2.style.opacity = 0;
  slide_button2.style.width = 0;
}


// Main function that will controll all of these stuff
function ld_all() {
  sld_ap();
  setTimeout(() => { slid_btn_dis1();}, 3000);
  setTimeout(() => { slid_btn2(); }, 3000);
  setTimeout(() => { slid_btn_dis2();}, 6000);
  // Set up a loop to call ld_all every 6 seconds
  setInterval(ld_all, 6000);
  

}




let btnclicked = false


//Making Function for if statement For 1 button
 function handle_btn1_click(){
 //Calling Main function that handel thumbnail1
 thum_prbl_slv()
 // Calling Main function that will handel the 1 button animation
 sld_br_slv();
}


//Making else function that will handel the else statment a expected
  function handel_btn_else(){
    //calling the function as normal
    thum_status(thum1,thum2);
    //Calling the function that handel normal buttons setting
    ld_all();
  }


//Reapeted Function I'll face again a new problem so i will make a new function to solve this problem

function thum_prbl_slv(){
  setTimeout(()=>{thum2.style.opacity = 0;
  thum1.style.opacity = 1;
  thum_status(thum1,thum2)},0)
}




 //Adding fuction to solve a some part of above problem
 function sld_br_slv(){
  sld_ap_prbl_slv()
  setTimeout(()=>{ slide_button2.style.opacity = 0;
  slide_button2.style.width = 0;
  ld_all()},6000) 
  
 }
 //I'm saying that this problem is not so easy it takes many function to solve it again making  a function.If you have some basic knowledge about web dev and so on you will understand this problem and this code

 function sld_ap_prbl_slv(){
  slide_button.style.width = "85px";
  slide_button.style.opacity = 1;
  slide_button.style.opacity = 0;
  slide_button.style.width = 0;
  ld_all(); 
}
// Adding a event listner to those buttons like when user click it gives thumbnail according to click
let btn1 = hr1.addEventListener("click",function (){
  btnclicked = true
  handle_btn1_click();
  slid_btn_dis2();
  slide_show(thum1,thum2);
 
})


// Adding main if and else situaton for all this stuff around me 
if(btnclicked){
  //Nothing to add here because we will do this problem solve above
}

//Main is else statment 
else{ld_all();
  thum_status(thum1,thum2);
  console.log("Hey this also a check! Dont worry")
 } 


//// Here we go we will complete all the problems that will stop us to make our logic.Now we are doing same things with button 2 it dosen't take a length logic

  //Making a variable name buttonclicked2

  let btnclicked2= false

// We want to make a code again via different changes


//Now making some changes to the function
  
  //Again making a main function that will handel errors  
  function error_handler(){
    slv_thum();
    btn_wdt_set();
  }

  function slv_thum(){
    thum1.style.opacity = 0;
    thum2.style.opacity = 1;
    thum_status(thum1,thum2)
  }

  function btn_wdt_set(){
    slide_button.style.opacity = 0;
    slide_button2.opacity = 1;
    slide_button2.width = "85px";
    setTimeout(()=>{ slide_button.style.opacity = 0;
    slide_button.style.width = 0;
    ld_all()},6000)
    slide_button.style.width = "85px";
    slide_button.style.opacity = 1;
    slide_button.style.opacity = 0;
    slide_button.style.width = 0;
    ld_all(); 
    }
    
  

//ADD event listner to button 2

slide_button2.addEventListener("click",function(){
   error_handler();
   slide_button.style.opacity = 0;
  })

////Now we complete the full section of button we will move towards\



//It's day4 Now i came here to add a specific transition on the product that when user hover on it there is a transiton appie on it

pr1.style.opacity = 1;
pr1_hover.style.opacity = 0;


product1.addEventListener('mouseover', () => { 
 pr1_h();
});

product1.addEventListener('mouseout', () => {
  pr1_hv();
});


function pr1_h() {
  pr1.style.opacity = 0;
  pr1.style.transition = "opacity 0.5s ease";
  pr1_hover.style.opacity = 1;
}

function pr1_hv() {
  pr1_hover.style.opacity = 0;
  pr1_hover.style.transition = "opacity 0.5s ease";
  pr1.style.opacity = 1;
}


//Now we complete the test of our transition it's time to apply this method to all elements


//For product 2
pr2.style.opacity = 1;
pr2_hover.style.opacity = 0;


product2.addEventListener('mouseover', () => { 
  pr2_h();
});

product2.addEventListener('mouseout', () => {
  pr2_hv();
});


function pr2_h() {
  pr2.style.opacity = 0;
  pr2.style.transition = "opacity 0.5s ease";
  pr2_hover.style.opacity = 1;
}

function pr2_hv() {
  pr2_hover.style.opacity = 0;
  pr2_hover.style.transition = "opacity 0.5s ease";
  pr2.style.opacity = 1;
}


//For product3 
pr3.style.opacity = 1;
pr3_hover.style.opacity = 0;


product3.addEventListener('mouseover', () => { 
  pr3_h();
});

product3.addEventListener('mouseout', () => {
  pr3_hv();
});


function pr3_h() {
  pr3.style.opacity = 0;
  pr3.style.transition = "opacity 0.5s ease";
  pr3_hover.style.opacity = 1;
}

function pr3_hv() {
  pr3_hover.style.opacity = 0;
  pr3_hover.style.transition = "opacity 0.5s ease";
  pr3.style.opacity = 1;
}


//For product 4
pr4.style.opacity = 1;
pr4_hover.style.opacity = 0;


product4.addEventListener('mouseover', () => { 
  pr4_h();
});

product4.addEventListener('mouseout', () => {
  pr4_hv();
});


function pr4_h() {
  pr4.style.opacity = 0;
  pr4.style.transition = "opacity 0.5s ease";
  pr4_hover.style.opacity = 1;
}

function pr4_hv() {
  pr4_hover.style.opacity = 0;
  pr4_hover.style.transition = "opacity 0.5s ease";
  pr4.style.opacity = 1;
}


//ANIMATING THE PART WHEN USER SCROLL THE WEBSITE THESE ELEMET TOGGLE

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var max_y = 80; // Adjust this value as needed
  var product1 = document.querySelector('.product1');

  if (scrollPosition > max_y) {
    product1.style.top = "0rem";
    product1.style.left = "0px";
    product2.style.top = "0rem";
    product2.style.left = "0px";
    product3.style.top = "0rem";
    product3.style.left = "0px";
    product4.style.top = "0rem";
    product4.style.left = "0px";
  
  
  }  
});


//Now we make box 2 of the body

  //For product 1
p2_p1.style.opacity = 1;
pr2_p1_hover.style.opacity = 0;


mn_pr1.addEventListener('mouseover', () => { 
  mn_pr1_h();
});

mn_pr1.addEventListener('mouseout', () => {
  mn_pr1_hv();
});


function mn_pr1_h() {
   p2_p1.style.opacity = 0;
   p2_p1.style.transition = "opacity 0.5s ease";
   pr2_p1_hover.style.opacity = 1;
}

function mn_pr1_hv() {
  pr2_p1_hover.style.opacity = 0;
  pr2_p1_hover.style.transition = "opacity 0.5s ease";
  p2_p1.style.opacity = 1;
}
  

   
//for product 2



p2_p2.style.opacity = 1;
pr2_p2_hover.style.opacity = 0;


mn_pr2.addEventListener('mouseover', () => { 
  mn_pr2_h();
});

mn_pr2.addEventListener('mouseout', () => {
  mn_pr2_hv();
});


function mn_pr2_h() {
   p2_p2.style.opacity = 0;
   p2_p2.style.transition = "opacity 0.5s ease";
   pr2_p2_hover.style.opacity = 1;
}

function mn_pr2_hv() {
  pr2_p2_hover.style.opacity = 0;
  pr2_p2_hover.style.transition = "opacity 0.5s ease";
  p2_p2.style.opacity = 1;
}
  

  //For product 3 

  p2_p3.style.opacity = 1;
  pr2_p3_hover.style.opacity = 0;
  
  
  mn_pr3.addEventListener('mouseover', () => { 
    mn_pr3_h();
  });
  
  mn_pr3.addEventListener('mouseout', () => {
    mn_pr3_hv();
  });
  
  
  function mn_pr3_h() {
     p2_p3.style.opacity = 0;
     p2_p3.style.transition = "opacity 0.5s ease";
     pr2_p3_hover.style.opacity = 1;
  }
  
  function mn_pr3_hv() {
    pr2_p3_hover.style.opacity = 0;
    pr2_p3_hover.style.transition = "opacity 0.5s ease";
    p2_p3.style.opacity = 1;
  }
    

   //For product 4
  

   p2_p4.style.opacity = 1;
   pr2_p4_hover.style.opacity = 0;
   
   
   mn_pr4.addEventListener('mouseover', () => { 
     mn_pr4_h();
   });
   
   mn_pr4.addEventListener('mouseout', () => {
     mn_pr4_hv();
   });
   
   
   function mn_pr4_h() {
      p2_p4.style.opacity = 0;
      p2_p4.style.transition = "opacity 0.5s ease";
      pr2_p4_hover.style.opacity = 1;
   }
   
   function mn_pr4_hv() {
     pr2_p4_hover.style.opacity = 0;
     pr2_p4_hover.style.transition = "opacity 0.5s ease";
     p2_p4.style.opacity = 1;
   }
     




//ANIMATING THE PART WHEN USER SCROLL THE WEBSITE THESE ELEMET TOGGLE

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var max_y = 1080; // Adjust this value as needed
 
  if (scrollPosition > max_y) {
    product1_cn.style.top = "0rem";
    product1_cn.style.left = "0px";
    product2_cn.style.top = "0rem";
    product2_cn.style.left = "0px";
    product3_cn.style.top = "0rem";
    product3_cn.style.opacity = 1;
    product3_cn.style.left = "0px";
    product4_cn.style.top = "0rem";
    product4_cn.style.left = "0px";
  
  
  }  
});


//Now we animate the click option that when user click on the option the line will move and the weight of the texxt became 900




  //We are using the method of event listning 
  // we are add event lisner to all options
  //Then we are going to make fuction
  //At the end we call these function on the event listner
  //We are making and calling the function because when user click on it the user see the product related the option
  //Now execute

option1.addEventListener("click",()=>{
  //caling the function here
  opt_option1();
})

option2.addEventListener("click",()=>{
  //caling the function here
  opt_option2();
})

option3.addEventListener("click",()=>{
  //caling the function here
  opt_option3();
})

//We complete the 1 steps 

//Making the function

function opt_option1(){
  //Adding the logic that do our work 
  option2.style.opacity = 0.6;
  option3.style.opacity = 0.6;
  option1.style.opacity  = 1;
  option1.style.fontWeight  = 900;
  option_ch_hr.style.left = "500px";
  option_ch_hr.style.width = "70px";
}


function opt_option2(){
  //Adding the logic that do our work 
  option1.style.opacity = 0.6;
  option3.style.opacity = 0.6;
  option2.style.opacity  = 1;
  option2.style.fontWeight  = 900;
  option_ch_hr.style.left = "595px";
  option_ch_hr.style.width  = "79px";
}

function opt_option3(){
  //Adding the logic that do our work 
  option1.style.opacity = 0.6;
  option2.style.opacity  = 0.6;
  option3.style.opacity  = 1;
  option_ch_hr.style.left = "700px";
  option_ch_hr.style.width  = "60px";
}

//Fuction section complete



//Now make the effect in which product come form bottom to upward




window.addEventListener("scroll",()=>{let curnt_hg = window.scrollY;
let cn3_hg = 1600;

if(curnt_hg>cn3_hg){ 
  Tshirt_pr1_fl.style.top = 0;
  Tshirt_pr1_fl.style.opacity = 1;
  Tshirt_pr2_fl.style.top = 0;
  Tshirt_pr2_fl.style.opacity = 1; 
  Tshirt_pr3_fl.style.top = 0;
  Tshirt_pr3_fl.style.opacity = 1;
  Tshirt_pr4_fl.style.top = 0;
  Tshirt_pr4_fl.style.opacity = 1;
} 
}
)
joggers_dis.style.display = "none";
shirts_dis.style.display = 'none';
//Making that when user click on this options the image will again toggle
joggers.addEventListener("click",()=>{
  t_shirts_dis.style.display = "none";
  joggers_dis.style.display = "block";
  shirts_dis.style.display = 'none';
})

t_shirts.addEventListener("click",()=>{
  t_shirts_dis.style.display = "";
  joggers_dis.style.display = "none";
  shirts_dis.style.display = 'none';
})

shirts.addEventListener("click", ()=>{
  shirts_dis.style.display = '';
  t_shirts_dis.style.display = "none";
  joggers_dis.style.display = "none";
})

