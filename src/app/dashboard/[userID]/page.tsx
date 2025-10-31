"use server";

import { FormCreateCompani } from "./components/form-create-company";

interface Props {
	params: Promise<{ userID: string }>;
}

async function FormCompany({ params }: Props) {
	const { userID: update } = await params;
	console.log("asdasdas")
	return (
		<>
			<FormCreateCompani userId={update} />
		</>
	);
}

export default FormCompany;

