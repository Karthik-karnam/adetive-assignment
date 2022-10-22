let result = document.getElementById("displayContent");
let name1 = document.getElementById("name1");
let color1 = document.getElementById("color1");
let bgContainer = document.getElementById("backGround");
function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor.toLowerCase();
}
$(document).ready(function(){
  $(".button").click(function(event){    
    event.preventDefault();      
      let nameval = name1.value;
      let colorval = color1.value;
      if(isValidColor(colorval)){
        document.body.style.backgroundColor = colorval;         
        let displayText = "Hi, " + nameval + " ! The color is " + colorval ;
        result.textContent = displayText;
      }
      else{
        document.body.style.backgroundColor = 'white';
        displayText= "Hi, " + nameval + " Please enter the valid color code ";
        result.textContent = displayText;
      }

      
  });
});