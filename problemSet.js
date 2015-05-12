

function frameYourPhrase(phrase) {

   return "**********\n* Hello  *\n* World! *\n**********";
}

function isPrime(num) {
  var arr = [];
  for (var i = 0; i <= num; i++) {
    var notprime = false
      for (var j = 2; j < i; j++) {
      if (i % j === 0) {      
      notprime = true;
    }
  }
      if (notprime === false) {
      arr.push(i);
    }
  }
    return arr;
}
    return false;
}
//hello ssdfsdfsd

console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

