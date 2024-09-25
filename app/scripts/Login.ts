"use server"

import axios from "axios";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../constant";


export async function handleLogin(email:string, password:string) {
    try {
        const response = await axios.post(
            "http://10.10.51.12:3001/auth/login",
            {
              email,
              password,
              
            }
          );

          if (response.status === 201) {
                  const cookieStore = cookies();
                  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(response.data.jwtToken));
                } else {
                 throw new Error("Failed to login");
                }
          console.log(response.data.jwtToken);
    } catch (error) {
      console.error(error);
    }
  }