"use server";
import Container from "@mui/material/Container";
import { getCompany } from "./actions";
import { FormUpdateCompani } from "./components/form-update-company";
import ListTransfer from "./components/list-trasnfer";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

interface Props {
	params: Promise<{ userID: string }>;
}

async function FormCompany({ params }: Props) {
	const { userID } = await params;
	const compani = (await getCompany({ id: userID })).data?.data;

	console.log(compani)

	if (compani) {
		return <>
			<Container sx={{ width: "fit-content" }}>
				<FormUpdateCompani compani={compani} />
				<Divider >
					<Chip label="Contactos" size="medium" />
				</Divider>
				<ListTransfer />
			</Container>

		</>;
	}
}

export default FormCompany;
