// create a nested array which compares two sets of followers to find mutual values

const bobsFollowers = ['dave', 'mick', 'steve', 'bert'];
const tinasFollowers = ['dave', 'mick', 'joan'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
for (let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
};

//tested - functional
