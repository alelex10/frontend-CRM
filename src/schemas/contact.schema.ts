import z from "zod/v3";

export const formSchemaCreateContact = z.object({
	name: z.string().min(1, "El nombre es requerido"),
	email: z.string().email("El email es invalido").min(1, "El email es requerido"),
	phone: z.string().min(1, "El telefono es requerido"),
});

export type formTypeCreateContact = z.infer<typeof formSchemaCreateContact>;

