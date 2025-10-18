import z from "zod/v3";

export const formSchemaCreateCompani = z.object({
	name: z.string().min(1, "El nombre es requerido"),
	industry: z.string().min(1, "La industria es requerida"),
	address: z.string().min(1, "La direccion es requerida"),
});

export type formTypeCreateCompani = z.infer<typeof formSchemaCreateCompani>;

