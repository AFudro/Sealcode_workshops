class Osoba{
	constructor(imie,nazwisko,rokUrodzenia,plec){
	  this.imie=imie;
	  this.nazwisko=nazwisko;
	  this.rokUrodzenia=rokUrodzenia;
	  this.plec=plec;
	}
	podajWiek(){
		return ((new Date()).getFullYear()-this.rokUrodzenia)
	}
}

class Nauczyciel extends Osoba {
		constructor(imie,nazwisko,rokUrodzenia,plec, nauczanyPrzedmiot,rokRozpoczeciaPracy){
			super(imie,nazwisko,rokUrodzenia,plec)
			this.nauczanyPrzedmiot = nauczanyPrzedmiot;
			this.rokRozpoczeciaPracy=rokRozpoczeciaPracy;
		}
		podajIloscLatPracy(){
			return ((new Date()).getFullYear()-this.rokRozpoczeciaPracy)
		}
}

class Wychowawca extends Nauczyciel {
	constructor(imie,nazwisko,rokUrodzenia,plec, nauczanyPrzedmiot,rokRozpoczeciaPracy,przydzielonaKlasa){
			super(imie,nazwisko,rokUrodzenia,plec,nauczanyPrzedmiot,rokRozpoczeciaPracy)
			this.przydzielonaKlasa = przydzielonaKlasa;
		}
	
}
let x= new Wychowawca('Jan','Nowak',1990,'Mężczyzna','Geografia',2015);
console.log(x)
console.log(x.podajWiek())
console.log(x.podajIloscLatPracy())