

function frameYourPhrase(phrase) {

   return "**********\n* Hello  *\n* World! *\n**********";
}

function isPrime(num) {

   if(num < 1) return false;
    for (var i = 2; i < num; i++) {
        if(num%i===0)
            return false;
    }
    return true;
  }
}


console.log(frameYourPhrase("Hola gALVINIZE"));
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

