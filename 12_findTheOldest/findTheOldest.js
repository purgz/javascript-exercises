const findTheOldest = function(people) {

    return  people.reduce((oldest,person)=>{
        if (!oldest){ return person }


        !oldest.yearOfDeath ? oldestAge = 
            new Date().getFullYear() - oldest.yearOfBirth : 
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        !person.yearOfDeath ? age = 
            new Date().getFullYear() - person.yearOfBirth : 
            age = person.yearOfDeath - person.yearOfBirth;
    
        
        
        return age > oldestAge ? person : oldest;
    })
  

    
};

// Do not edit below this line
module.exports = findTheOldest;
