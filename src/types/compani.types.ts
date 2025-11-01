
export interface Compani {
	id: number;
	name: string;
	industry?: string;
	address?: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
	userId: number;
}
  
export type CreateCompani = Pick<Compani, "id" | "name" | "industry" | "address">;
export type UpdateCompani = Partial<CreateCompani>;
