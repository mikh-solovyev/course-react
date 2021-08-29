import {authMiddleware} from "./authMiddleware";
import {authenticate} from "./actions";
import {serverLogin} from "./api";

jest.mock("./api", () => ({serverLogin: jest.fn(() => true)}));

describe("authMiddleware", () => {
   describe("#AUTHENTICATE", () => {
      it("authenticate through api", async () => {
         const dispatch = jest.fn();
         await authMiddleware({dispatch})()(
             authenticate("testLogin", "testPassword")
         )

         expect(serverLogin).toBeCalledWith("testLogin", "testPassword");
      });
   });
});