function Osoba(imie,nazwisko,rokUrodzenia,plec){
	  this.imie=imie;
	  this.nazwisko=nazwisko;
	  this.rokUrodzenia=rokUrodzenia;
	  this.plec=plec;
}

Osoba.prototype.podajWiek = function(){
		return ((new Date()).getFullYear()-this.rokUrodzenia)
}

function Nauczyciel(imie,nazwisko,rokUrodzenia,plec, nauczanyPrzedmiot,rokRozpoczeciaPracy) {
			Osoba.call(this, imie,nazwisko,rokUrodzenia,plec);
			this.nauczanyPrzedmiot = nauczanyPrzedmiot;
			this.rokRozpoczeciaPracy=rokRozpoczeciaPracy;
}

Nauczyciel.prototype = Object.create(Osoba.prototype)
Nauczyciel.prototype.constructor = Nauczyciel
Nauczyciel.prototype.podajIloscLatPracy = function(){
		return ((new Date()).getFullYear()-this.rokRozpoczeciaPracy)
}

function Wychowawca(imie,nazwisko,rokUrodzenia,plec, nauczanyPrzedmiot,rokRozpoczeciaPracy,przydzielonaKlasa) {
			Nauczyciel.call(this,imie,nazwisko,rokUrodzenia,plec,nauczanyPrzedmiot,rokRozpoczeciaPracy)
			this.przydzielonaKlasa = przydzielonaKlasa;
}
Wychowawca.prototype=Object.create(Nauczyciel.prototype)
Wychowawca.prototype.constructor = Wychowawca;

let x= new Wychowawca('Jan','Nowak',1990,'Mężczyzna','Geografia',2015);
console.log(x)
console.log(x.podajWiek())
console.log(x.podajIloscLatPracy())