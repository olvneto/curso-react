import { Thunk } from "..";
import { signInUser } from "./../../service/Authentication.service";

declare interface Credentials {
  user: string;
  pass: string;
}

export const login =
  ({ user, pass }: Credentials): Thunk =>
  async (dispatch) => {
    const loggedUser = await signInUser(user, pass);
    dispatch({
      type: "AUTHENTICATION_LOGIN",
      payload: loggedUser,
    });
  };

export const logout = () => ({
  type: "AUTHENTICATION_LOGOUT",
});
