import { actionTypes, correctGuess } from "./index";
import { shallow } from "enzyme";
describe("correct guess", () => {
 test("returns an action with type `CORRECT_GUESS`", () => {
  const action = correctGuess();
  expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
 });
});
