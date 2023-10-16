var a = 1;

function moveImage(self) {
    var text = '';
    if (self.id == 'left') {
        if (a == 1) {
            a = 5;
        } else {
            a = a - 1;
        }   
    } else if (self.id == 'right') {
        if (a == 5) {
            a = 1;
        } else {
            a = a + 1;
        }
    }
    text = 'Image/' + a + '.jpg';
    document.querySelector('img').src = text;
    if(a == 1){
        $("h1").css("color",'red');
    } else if(a == 2){
        $("h1").css("color",'blue');  
    }else if(a == 3){
        $("h1").css("color",'powderblue');
    }else if(a == 4){
        $("h1").css("color",'green');
    }else if(a == 5){
        $("h1").css("color",'black');
    }
}