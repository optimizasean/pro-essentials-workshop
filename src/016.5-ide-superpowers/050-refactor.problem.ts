const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;
  console.log(randomPercentage);
};

//NOTE can target different things such as randomPercentage with inline variable to reduce code or 
// extracting the random to a constant in module scope or extracting to a function in module scope instead