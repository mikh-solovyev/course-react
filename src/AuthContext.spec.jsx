import React from "react";
import {AuthContext, AuthProvider} from "./AuthContext";
import {render, cleanup} from "@testing-library/react";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("AuthContext", () => {
    describe("#logIn", () => {
      it("set isLoggedIn to false", () => {
          let isLoggedIn,
              logIn;

          render(
              <AuthProvider>
                  <AuthContext.Consumer>
                      {(value) => {
                          isLoggedIn = value.isLoggedIn;
                          logIn = value.logIn;
                          return null;
                      }}
                  </AuthContext.Consumer>
              </AuthProvider>
          );

          expect(isLoggedIn).toBe(false);
          act(() => {
              logIn("admin", "pass");
          });
          expect(isLoggedIn).toBe(true);
      });
   });
    describe("#logOut", () => {
        it("set isLoggedIn to false", () => {
            let isLoggedIn,
                logIn,
                logOut;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logOut = value.logOut;
                            logIn = value.logIn;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            );

            act(() => {
                logIn("admin", "pass");
            });

            expect(isLoggedIn).toBe(true);

            act(() => {
                logOut();
            });

            expect(isLoggedIn).toBe(false);
        });
    });
});