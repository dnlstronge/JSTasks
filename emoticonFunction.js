const toEmoticon = (emote) => {
  switch (emote) {
    case 'shrug':
      return '|_{"}_|'
      break;
    case 'smiley face':
      return ':)'
      break;
    case 'frowny face':
      return ':('
      break;
    case 'winky face':
      return ';)'
      break;
    case 'heart':
      return '<3'
    default:
      return '|_(* ~ *)_|'
  }
};

//test 

console.log(toEmoticon("whatever"))  // returns: |_(* ~ *)_|
console.log(toEmoticon("frowny face"))  // returns: :(
console.log(toEmoticon("smiley face"))  // returns: :)
console.log(toEmoticon("winky face"))  // returns: ;)
console.log(toEmoticon("heart"))  // returns: <3
console.log(toEmoticon("shrug"))  // returns: |_{"}_|


