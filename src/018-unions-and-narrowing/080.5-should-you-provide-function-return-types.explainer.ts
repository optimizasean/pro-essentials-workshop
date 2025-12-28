// 1. CON: Function return types can be wider than
// what is actually returned

import { Equal, Expect } from "@total-typescript/helpers";

const returnsNumber = (): number => {
  return 1;
};

const value = returnsNumber();

// if (typeof value === "string") {
//   type test = Expect<Equal<typeof value, never>>;

//   // @ts-expect-error
//   value.toUpperCase();
// }

//Above required more defensive code, by removing unused return type it gets easier

// 2. PRO: Function return types can help enforce the type of the function

type UserRole = "admin" | "editor" | "viewer" | "anonymous";

function getPermissions(role: UserRole): string[] {
  switch (role) {
    case "admin":
      return ["create", "read", "update", "delete"];
    case "editor":
      return ["create", "read", "update"];
    // case "viewer":
    //   return ["read"];
    default:
      return [];
  }
}

//when you add roles not handled in the switch you will need a default or every added role will cause a failure

//Best to use only the return types necessary and not include ones which are not possible or not used to reduce defensive code to catch all the constraints which may not be possible to achieve from any call of the function
