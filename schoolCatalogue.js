class School {
  constructor(name, level, nOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = nOfStudents;
  }
  
  set numberOfStudents(inputStudents) {
    
    if (Number.isInteger(inputStudents))
    	this._numberOfStudents = inputStudents
    else
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    
  }
  
  get numberOfStudents() {
    return this._numberOfStudents
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
  }
  
 static pickSubstituteTeacher(inputProfs) {
   const index = Math.floor(Math.random() * inputProfs.length)
   
   console.log(inputProfs[index])
  }
}

class PrimarySchool extends School {
  constructor(name, level, nOfStudents, policy) {
    super(name, level, nOfStudents);
    this._pickupPolicy = policy;
  }
  
  set pickupPolicy(inputPolice) {
    this._pickupPolicy = inputPolice
  }
  
  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class Middle extends School {
  constructor(name, level, nOfStudents) {
    super(name, level, nOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, level, nOfStudents, sportTeams) {
    super(name, level, nOfStudents);
    this._sportsTeams = sportTeams
  }
  
  set sportsTeams(inputTeams) {
    this._sportsTeams.push(inputTeams)
  }
  
  get sportsTeams() { 
  	return this._sportsTeams
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()

let input = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']

School.pickSubstituteTeacher(input)

const alSmith = new HighSchool('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeams)