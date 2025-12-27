import { expect, it } from "vitest";

function validateUsername(username: string | null): boolean {
  // Why isn't this working? no can use Boolean - function doesn't "behave" as typescript won't see the bool unlike when we use the operator
  const isUsernameOK = !!username;

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
