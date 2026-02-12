type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

//const buttonAttributes = {
//  type: "button",
//};

modifyButton({
  type: "button"
});

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[]= [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
