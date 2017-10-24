function Figura(nazwa){
  this.nazwa = nazwa;
}

function Czworokat(nazwa, typ_czworokata,a,b,c,d) {
        Figura.call(this, nazwa);
        this.typ_czworokata = typ_czworokata;
		this.a=a;
		this.b=b;
		this.c=c;
		this.d=d;
}

Czworokat.prototype = Object.create(Figura.prototype);
Czworokat.prototype.constructor = Czworokat;

function Prostokat(nazwa, typ_czworokata,a,b,c,d) {
        Czworokat.call(this, nazwa, typ_czworokata,a,b,c,d);
}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

Prostokat.prototype.podajObwod = function (){
		return (this.a+this.b+this.c+this.d);
}
Prostokat.prototype.podajPole = function (){
		return (this.a*this.b);
}



var x=new Prostokat("?!!!","prostokąt",5,8,5,8);
console.log(x.nazwa);
console.log(x.typ_czworokata);
console.log(x.podajPole());
console.log(x.podajObwod());