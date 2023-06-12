function nums(a, b, c) {
  let d = a + b;
  comp(d, c);
}

function comp(d, c) {
  if (d > c) {
    print("greater");
  } else if (d == c) {
    print("equal");
  } else {
    print("less");
  }
}

function print(g) {
  console.log(` No. is ${g} than 3rd variable`);
}

nums(5, 10, 15);


