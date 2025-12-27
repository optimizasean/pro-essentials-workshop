type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  foo: "wow",
  bar: 3,
  baz: false
});

document.addEventListener(
  // Autocomplete this string!
  "click",
  (event) => {
    console.log(event);
  },
);

//NOTE Use CTRL SPACE in VS Code for "search" tool or just type a letter if you know what it starts with and will start filtering