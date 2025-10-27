import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string("contraseña inválida")
    .min(3, "contraseña demasiado corta"),
});

// {
//     "email": "usuario@ejemplo.com",
//     "password": "MiContraseñaSegura123",
//     "confirmPassword": "MiContraseñaSegura123",
//     "username": "nombredeusuario"
// }
export const registerSchema = z
  .object({
    email: z.email(),
    password: z
      .string("contraseña inválida")
      .min(3, "contraseña demasiado corta"),
    confirmPassword: z
      .string("contraseña inválida")
      .min(3, "contraseña demasiado corta"),
    username: z.string("nombre inválido").min(3, "nombre demasiado corto"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "contraseñas no coinciden",
    path: ["confirmPassword"],
  });

// exportar tipos de datos
export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
