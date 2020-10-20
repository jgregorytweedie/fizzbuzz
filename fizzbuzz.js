for(let i = 1; i <= 100; i++){ // whatever you do, DO NOT put the i++ before the <=100 because then it will count infinitely and will crash your browser/ console.
  //we are going to do a "fizzbuzz". This is a common question coder interviewers will ask you to do. 

  //if i is divisible by 3, log "Fizz"
  if (i % 15 == 0) console.log("Fizzbuzz");
  //if i is divisible by 5, log "Buzz"
  else if (i % 3 == 0) console.log("Fizz");
  //if i is divisible by both 3 and 5, log "Fizz"
  else if (i % 5 == 0) console.log("Buzz");
  //Otherwise, print the number.
  else console.log(i);
}

// https://github.com/sait-wbdv/in-class/blob/main/week07t/fizzbuzz/fizzbuzz.js This is his actual file that I copied