const fn = (input: unknown) => {};

// Anything is assignable to unknown!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

//Note anything is assignable but type checking is still enabled - must narrow later before usage