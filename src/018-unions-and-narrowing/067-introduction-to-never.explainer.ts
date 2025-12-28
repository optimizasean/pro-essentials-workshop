// This function returns never, because it never returns!
const getNever = () => {
  throw new Error("This function never returns");
};

// ---------------------------------------------

const fn = (input: never) => {};

// Nothing is assignable to never!
fn("hello" as never);
fn(42 as never);
fn(true as never);
fn({} as never);
fn([] as never);
//fn(() => {});

//Casted the others (never do this) but a void cannot be casted to never
//Don't actually do this

// Except for never itself!

fn(getNever());

// ---------------------------------------------

// But we can assign never to anything!

const str: string = getNever();
const num: number = getNever();
const bool: boolean = getNever();
const arr: string[] = getNever();
