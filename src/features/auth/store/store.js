/**
 * Store for Auth Stuffs.
 *
 * This file contains Zustand stores for authentication-related functionality.
 *
 * Author: kqiq@github.
 *t
 * Copyright 2024 AimoonX Company. All rights reserved.
 */

 import { create } from "zustand";
import { userLogins } from "../utils/services/api/api.js";

import { persist, createJSONStorage } from "zustand/middleware";

export const usePersistAuth = create(
  persist(
    (set, get) => ({
      session_id: null,
      csrf: null,
      userId: null,
      user_token: null,
      getCreds: () => get(),
      setUserToken: (token) => set({ user_token: token, session_id: token }),
      setCreds: (token, csrf, id) => {
        console.log("called setCreds");
        console.log({ token, csrf, id });
        set({ session_id: token, csrf: csrf, userId: id });
      },
      setUserId: (id) => set({ userId: id }),
      remove: () => set({ userId: null, session_id: null, csrf: null }),
    }),
    {
      name: "authStoreAimoonxx",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        session_id: state.session_id,
        csrf: state.csrf,
        userId: state.userId,
        user_token: state.user_token,
      }),
    }
  )
);

// create store for login functionality
export const useLogin = create((set) => ({
  // mode for login process (email, phonenumber)
  mode: null,

  // input value for the login form .
  inputValue: "",
  // password value for the login form .
  passValue: "",

  currentUserId: null,

  // validate password flag.
  validatePass: false,
  // validate input flag.
  validateInputValue: false,

  // input error value for login form.
  inputErrValue: "",

  // password error value for the login form.
  passErrValue: "",
  // login state flag.
  loginState: false,
  // flag indicate that whether the form can be submited or not.
  onSubmit: false,

  // type of login process.1
  type: "login",

  // this section later must be commented

  repeatedPassValue: "",
  repeatedPassErrValue: "",

  // set the type of the operation
  setType: (value) => {
    set({ type: value });
  },

  setCurrentUserId: (id) => {
    set({ currentUserId: id });
  },

  setRepeatedPassValue: (value) => {
    set({ repeatedPassValue: value });
  },
  setRepeatedPassErrValue: (value) => {
    set({ repeatedPassErrValue: value });
  },

  bothPassSame: () => {
    set((state) => {
      if (state.passValue == state.repeatedPassValue) {
        console.log("bot are the same");
        return {
          repeatedPassErrValue: "",
          onSubmit: true,
        };
      }

      return {
        onSubmit: false,
        repeatedPassErrValue:
          "رمزهای ورود مطابقت ندارند. لطفا دوباره تلاش کنید",
      };
    });
  },

  /**
  
    Set the submission flag for the login form.
    @param {boolean} value - The new value for the submission flag.
    */
  setOnSubmit: (value) => {
    set({ onSubmit: value });
  },

  /**
  
    Set the password value.
    @param {string} value - The new password value.
    */
  setPassValue: (value) => {
    set({ passValue: value });
  },

  /**
  
    Set the login state flag.
    @param {boolean} value - The new value for the login state flag.
    */
  setLoginState: (value) => {
    set({ loginState: value });
  },

  /**
  
    Validate the password pattern.
    @param {string} value - The password to validate.
    */

  /**
    Handle the login form submission.
    @param {object} subObject - The input values for login.
    */
  handleSubmit: async (subObject, csrf) => {
    //  send to the server
    console.log("submit the following to the server");
    console.log(subObject);
    let res = await userLogins(subObject, csrf);
    console.log(res);
    if (res.state) {
      if (res.data.return) {
        // here we got the login state and then we can do something about it.
        console.log(res);
        // for now we have to save the hash somewhere
        set({ loginState: true });
        return res;
      } else {
        set({
          inputErrValue: "رمز عبور یا ایمیل اشتباه است",
        });
        return res;
      }
    }

    return res;
  },
}));
