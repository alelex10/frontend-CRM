"use server";
import { getCompany } from "./actions";
import { FormCreateCompani } from "./components/form-update-company";

interface Props {
	params: Promise<{ userID: string }>;
}

async function FormCompany({ params }: Props) {
	const { userID } = await params;
	const compani = (await getCompany({ id: userID })).data?.data;

	console.log(compani)
	
	if (compani) {
		return <FormCreateCompani compani={compani} />;
	}
}

export default FormCompany;
