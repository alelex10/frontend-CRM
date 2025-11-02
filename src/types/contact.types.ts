export type CreateCompani = Pick<Contact, "id" | "name" | "email" | "phone" | "companyId">;
export type UpdateCompani = Partial<CreateCompani>;

export interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
	companyId: number;
	userId: number;
}