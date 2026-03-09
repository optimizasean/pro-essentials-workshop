// Basic primitives do not have 'sufficient overlap'
// with each other

//Cannot convert types which have no properties in common
//const num1 = "hello" as number;

const num2 = "hello" as unknown as number;

const num3 = "hello" as any as number;

const num4 = "hello" as never as number;

// Objects with ZERO compatible properties also don't
// have 'sufficient overlap'

interface Dog {
  bark(): void;
}

const cat = {
  meow() {},
};

//Cannot convert types which have no properties in common
//const dog1 = cat as Dog;

const dog2 = cat as unknown as Dog;

const dog3 = cat as any as Dog;

const dog4 = cat as never as Dog;
