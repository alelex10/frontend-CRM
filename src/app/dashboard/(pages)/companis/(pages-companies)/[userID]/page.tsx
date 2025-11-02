"use server";
import { getCompany } from "./actions";
import { FormUpdateCompani } from "./components/form-update-company";

interface Props {
	params: Promise<{ userID: string }>;
}

async function FormCompany({ params }: Props) {
	const { userID } = await params;
	const compani = (await getCompany({ id: userID })).data?.data;

	console.log(compani)
	
	if (compani) {
		return <FormUpdateCompani compani={compani} />;
	}
}

export default FormCompany;
