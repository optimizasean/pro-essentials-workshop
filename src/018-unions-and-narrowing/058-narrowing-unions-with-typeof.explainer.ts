const convertTime = (time: string | number) => {
  if (typeof time === "string") {
    console.log(time); // string
  } else {
    console.log(time); // number
  }

  console.log(time); // string | number
};

//Internally can identify types in sub scopes based on narrowing without having to redefine variables or types