import { Equal, Expect } from "@total-typescript/helpers";

type ErrorShape = {
  error: {
    message: string;
  };
};

type DataId<T> = {
  [K in keyof T]: T[K]
};

type DataShape<TData extends object> =
  | {
      data: DataId<{ id: string } & TData>
    }
  | ErrorShape;

type UserDataShape = DataShape<{
  name: string;
  email: string;
}>;

type PostDataShape = DataShape<{
  title: string;
  body: string;
}>;

// TESTS

type tests = [
  Expect<
    Equal<
      UserDataShape,
      | {
          data: {
            id: string;
            name: string;
            email: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
  Expect<
    Equal<
      PostDataShape,
      | {
          data: {
            id: string;
            title: string;
            body: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
];
