// ALL STARCODE CHALLENGE #1
// write a function, called sumPPG, that takes two NBA objects and sums their PPG.

function NBAplayer(name, team, ppg){
    this.name = name;
    this.team = team;
    this.ppg = ppg;
  }
  
  let james = new NBAplayer("james", "Lakers", 27.5);
  let jordon = new NBAplayer("Jordon", "Bulls", 20.2);
  
  function sumPPG(obj1, obj2){
    return obj1.ppg + obj2.ppg;
  }