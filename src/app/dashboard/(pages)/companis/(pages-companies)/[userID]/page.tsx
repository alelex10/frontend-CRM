"use server";
import { Suspense } from "react";
import { getCompany } from "./actions";
import { FormUpdateCompani } from "./components/form-update-company";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
	params: Promise<{ userID: string }>;
}

async function FormCompany({ params }: Props) {
	const { userID } = await params;
	const compani = (await getCompany({ id: userID })).data?.data;

	console.log(compani)

	if (compani) {
		return <>
			<Suspense fallback={<CircularProgress />}>
				<FormUpdateCompani compani={compani} />
			</Suspense>
		</>;
	}
}

export default FormCompany;
