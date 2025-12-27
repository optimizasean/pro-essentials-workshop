const run = (message: string) => {
  console.log(message);
};

run("Hello!");

// tsc --init then change .ts to .js in index.html script
// tsc to compile to make js file exist then index works loading tsc translated example.ts (called example.js on translate)