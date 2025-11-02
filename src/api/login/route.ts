// src/app/api/login/route.ts
import { myFetch } from "@/common/my-fetch";
import { LoginResponse } from "@/types/auth";
import { redirect } from "next/navigation"; import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { API } from "@/consts/api";

export async function POST(req: Request) {
  const body = await req.json();

  // tu lógica de login
  // const res = await fetch(`${process.env.API_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(body),
  // });

  const res = await myFetch<LoginResponse>(`${API.AUTH.LOGIN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // const data = await res.json();

  if (res.error) return NextResponse.json(res.data);

  const response = NextResponse.json(res);

  if (res?.data) {
    response.cookies.set("access_token", res.data.data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" || true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15, // 15 minutos
    });
  }

  return response;
}
