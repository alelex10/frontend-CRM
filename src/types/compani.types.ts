export interface Compani {
	id: number;
	name: string;
	industry?: string;
	address?: string;
	createdAt: Date;
	updatedAt: Date;
}
export interface CreateCompani extends Pick<Compani, "name" | "industry" | "address"> {}

export interface UpdateCompani extends Partial<CreateCompani> {}

