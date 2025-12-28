interface UserPart {
  id: string;
  name: string;
  age: number;
}

interface UserPart2 {
  //id: number; - Cannot clash two separate types or interfaces with same key but different type (number & string == no)
  //Interfaces will provide a much clearer error exactly where the issue is though
  id: string;
  phone: string;
}

type User = UserPart & UserPart2;

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
