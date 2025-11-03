import { cookies } from "next/headers";

export async function storeToken(token: string) {
    (await cookies()).set({
        name: "access_token",
        value: token,
        httpOnly: true,      // más seguro, no accesible desde JS
        path: "/",           // disponible en todo el sitio
        sameSite: "lax",     // permite redirecciones sin perder cookie
        maxAge: 60 * 15 // 15 minutos
    })
}