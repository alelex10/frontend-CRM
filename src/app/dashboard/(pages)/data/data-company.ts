import { Compani } from "../../../../types/compani/compani.types";

export function createCompaniData(
	id: number,
	name: string,
	industry: string | undefined,
	address: string | undefined,
	createdAt: Date,
	updatedAt: Date
): Compani {
	return {
		id,
		name,
		industry,
		address,
		createdAt,
		updatedAt,
	};
}

export const companiRows: Compani[] = [
	createCompaniData(
		1,
		"Innovatech Solutions",
		"Tecnología",
		"Calle Falsa 123, Ciudad Innovación",
		new Date("2020-01-15"),
		new Date("2023-10-26")
	),
	createCompaniData(
		2,
		"Global Health Corp",
		"Salud",
		"Avenida Principal 456, Metrópolis Saludable",
		new Date("2018-03-22"),
		new Date("2023-11-01")
	),
	createCompaniData(
		3,
		"EcoBuild Construction",
		"Construcción",
		"Plaza Central 789, Distrito Verde",
		new Date("2021-07-10"),
		new Date("2023-09-15")
	),
	createCompaniData(
		4,
		"Summit Financial Group",
		"Finanzas",
		"Torre Financiera 101, Centro Financiero",
		new Date("2019-11-05"),
		new Date("2023-10-20")
	),
	createCompaniData(
		5,
		"Astro Travel Agency",
		"Turismo",
		"Paseo de los Viajeros 202, Ciudad Turística",
		new Date("2022-05-30"),
		new Date("2023-08-01")
	),
	createCompaniData(
		6,
		"Quantum Foods Inc.",
		"Alimentación",
		"Ruta Gastronómica 303, Distrito Sabor",
		new Date("2017-09-18"),
		new Date("2023-10-25")
	),
	createCompaniData(
		7,
		"Artisan Crafts Co.",
		"Artesanía",
		"Calle del Arte 404, Barrio Creativo",
		new Date("2023-02-14"),
		new Date("2023-10-10")
	),
	createCompaniData(
		8,
		"Cyber Security Pros",
		"Tecnología",
		undefined, // Dirección opcional
		new Date("2021-04-01"),
		new Date("2023-09-30")
	),
	createCompaniData(
		9,
		"Future Energy Solutions",
		"Energía",
		"Boulevard Sostenible 505, Sector Energía Limpia",
		new Date("2018-12-01"),
		new Date("2023-11-05")
	),
	createCompaniData(
		10,
		"EduFuture Academy",
		"Educación",
		"Avenida del Conocimiento 606, Campus Educativo",
		new Date("2020-08-20"),
		new Date("2023-10-05")
	),
];

export interface CompaniHeadCell {
	disablePadding: boolean;
	id: keyof Compani; // Usa keyof Compani para que sea tipado correctamente
	label: string;
	numeric: boolean;
}

export const companiHeadCells: readonly CompaniHeadCell[] = [
	{
		id: "id",
		numeric: true,
		disablePadding: false,
		label: "ID",
	},
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		label: "Nombre de la Compañía",
	},
	{
		id: "industry",
		numeric: false,
		disablePadding: false,
		label: "Industria",
	},
	{
		id: "address",
		numeric: false,
		disablePadding: false,
		label: "Dirección",
	},
	{
		id: "createdAt",
		numeric: false, // Podríamos considerar 'true' si la fecha se representa numéricamente para ordenación, pero como string/Date es más común 'false'
		disablePadding: false,
		label: "Fecha de Creación",
	},
	{
		id: "updatedAt",
		numeric: false, // Similar a createdAt
		disablePadding: false,
		label: "Última Actualización",
	},
];

