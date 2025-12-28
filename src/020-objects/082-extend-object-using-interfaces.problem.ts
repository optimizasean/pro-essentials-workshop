import { Extends, Expect } from "@total-typescript/helpers";

interface EntityId {
  id: string;
}

interface EntityTimeStamps{
  createdAt: Date;
}

interface User extends EntityId, EntityTimeStamps {
  name: string;
  email: string;
}

interface Product extends EntityId, EntityTimeStamps {
  name: string;
  price: number;
}

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
