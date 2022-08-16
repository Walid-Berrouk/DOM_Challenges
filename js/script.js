function ch1_js() {
    var text = document.getElementById('ch1_text');
    text.innerHTML = text.innerHTML + ' Walid Berrouk';
}

function ch2_js() {
    var text = document.getElementById('ch2_text');
    text.setAttribute('class', 'ch2_text');
}

let cpt = 1;

function ch3_js() {

     // Creating a new div element
     var newPar = document.createElement('p');
     // Creating a text node
     var oldPar = document.getElementById('ch3_text');

     var newContent = document.createTextNode('Sibling ' + (cpt + 1 ) + ' : ' + oldPar.innerHTML);
     cpt += 1;
     // Adding the text node to the newly created div
     newPar.appendChild(newContent);
     // Adding the newly created element and its content into the DOM
     var currentDiv = document.getElementById('ch3_div');
     currentDiv.appendChild(newPar, oldPar);
}

function ch4_js() {
    var x=document.getElementById("ch4_select");
    x.remove(x.selectedIndex);
}

function ch5_js() {
    var u = document.getElementById("ch5_link").href;
    alert('The value of the href attribute of the link is : '+u);
    var v = document.getElementById("ch5_link").hreflang;   
    alert('The value of the hreflang attribute of the link is : '+v);
    var w = document.getElementById("ch5_link").rel; 
     alert('The value of the rel attribute of the link is : '+w);
    var x = document.getElementById("ch5_link").target; 
     alert('The value of the taget attribute of the link is : '+x);
    var y = document.getElementById("ch5_link").type; 
     alert('The value of the type attribute of the link is : '+y);  
}

function ch6_js() {
  var x=document.getElementById("ch6_form");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].type !='submit')
    {  
      alert(x.elements[i].name + " : " + x.elements[i].value);
     }  
   }
}

function ch7_js() {
    var x=document.getElementById("ch7_select");
    var txt1 = "No. of items : ";
    var i;
    l=document.getElementById("ch7_select").length;  
    txt1 = txt1+l;
    for (i=0;i<x.length;i++)
    {
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}

// ch8_js
function volume_sphere()
{
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
} 

window.onload = document.getElementById('ch8_form').onsubmit = volume_sphere;

// ch9_js
function display_random_image() 
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
let bigBro  = document.getElementById("ch9_div").getElementsByTagName("p");
document.getElementById("ch9_div").appendChild(newImage, bigBro);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function ch10_js(id) {

    var text = document.getElementById(id);
    let textValue = text.innerHTML;
    let newId;
    let newText;

    if (textValue.length > 0) {
        text.innerHTML = '';


        // create random image number
        function getRandomInt(min,max) 
        {
            //  return Math.floor(Math.random() * (max - min + 1)) + min;
        
            imn = Math.floor(Math.random() * (max - min + 1)) + min;
            return imn;
        }

        newId = getRandomInt(1,9);

        while (newId == id) {
            newId = getRandomInt(1,9);
        }

        console.log("it will be in :", newId)

        await sleep(3000);

        newText = document.getElementById(newId);
        newText.innerHTML = textValue;
    }

    // var rect = newText.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    


}

// ch11

//First create a list of all bold items 
var bold_Items;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}

//ch12

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " and Height: " + h + "</h1>";
}

getSize()
