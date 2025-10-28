export interface CreateCompani extends Pick<Contact, "id" | "name" | "email" | "phone" | "companyId"> {}

export interface UpdateCompani extends Partial<CreateCompani> {}

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


