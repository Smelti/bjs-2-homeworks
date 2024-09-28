class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state = this.state * 1.5;
  }
  
  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    }
    else {
      this._state = number;
    }
  } 
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine";
  }
}

class Booke extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Booke {
  constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount, author)
  this.type = "novel";
  }
}

class FantasticBook extends Booke {
  constructor( author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, author)
    this.type = "fantastic";
  }
}

class DenectiveBook extends Booke {
  constructor( author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author)
    this.type = "detective";
  }
}
