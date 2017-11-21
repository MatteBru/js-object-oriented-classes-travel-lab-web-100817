class Driver {
  constructor(name, startString) {
    this.name = name;
    this.startDate = new Date(startString);
  };

  // startDate(){
  //   let d =
  //   return d;
  // };

  yearsExperienceFromBeginningOf(year){
    return Math.floor((new Date(year, 0, 0) - this.startDate)/1000/60/60/24/365);
  };

};

class Route {
  constructor(bl, el) {
    this.beginningLocation = bl;
    this.endingLocation = el;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vb = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    let hb = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return hb + vb;
  };

  estimatedTime(ph){
    let et;
    ph ? et = this.blocksTravelled() / 2 : et = this.blocksTravelled() / 3;
    return et;
  };
}
