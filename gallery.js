x = new Array("img/1.jpg", "img/2.jpg", "img/3.png");

i = 0;

function next() {
i++;
if(i==x.length) i=0;
document.getElementById("gallery").src =  x[i];


}

function previous() {

if(i == 0) {
    
i =3;
}
i--;
document.getElementById("gallery").src =  x[i];
    
    
}