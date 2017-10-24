class Figura{
	constructor(nazwa){
	  this.nazwa = nazwa
	}
}

class Czworokat extends Figura {
        constructor(nazwa, typ_czworokata,a,b,c,d){
			super(nazwa)
			this.typ_czworokata = typ_czworokata;
			this.a=a;
			this.b=b;
			this.c=c;
			this.d=d;
		}
}

class Prostokat extends Czworokat {
		podajObwod() {
			return (this.a+this.b+this.c+this.d);
		}
		podajPole(){
			return (this.a*this.b);
		}
}


let x=new Prostokat("?!!!","prostokat",5,8,5,8);
console.log(x.nazwa);
console.log(x.typ_czworokata);
console.log(x.podajPole());
console.log(x.podajObwod());