var Body = {
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor=color;
  },
  setColor : function(color){
    document.querySelector('body').style.color=color;
  }
}
var links = {
  setColor : function(color){
    var i = 0;
    var alist = document.querySelectorAll('a');
    while (i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    } 
  }
}


function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value=='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        links.setColor('powerblue');
        self.value='day'                                        
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      links.setColor('blue');
      self.value='night'                                                  
    }
  }