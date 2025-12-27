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
