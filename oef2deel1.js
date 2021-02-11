class Cursist {
  naam;

  constructor(naam) {
    naam = this.naam;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }
}

class Docent {
  naam;
  motto;

  constructor(naam, motto) {
    this.naam = naam;
    this.motto = motto;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }
  getMotto() {
    return `Mijn motto is: ${this.motto}`;
  }
}

const cursist1 = new Cursist("Yoeri");

const cursist2 = new Cursist("Marvi Hendriks");

const cursist3 = new Cursist("Simone :P");

const cursist4 = new Cursist("Domenico");

const cursist5 = new Cursist("Marco");

const cursist6 = new Cursist("Michelle");

const cursist7 = new Cursis("Romy");

const cursist8 = new Cursist("Jorg");

const cursist9 = new Cursist("Tony $erneel$");

const cursist10 = new Cursist("Ian");

const cursist11 = new Cursist("Angelique");

const cursist12 = new Cursist("Arne");

const docent1 = new Docent("Bart", "25 is grappiger dan 24");

const docent2 = new Docent("Mark", "24 is grappiger dan 25");
