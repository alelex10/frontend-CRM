"use server";
import Container from "@mui/material/Container";
import { getCompany, getContactsOfCompany, getMyContactsNull } from "./actions";
import { FormUpdateCompani } from "./components/form-update/form-update-company";
import ListTransfer from "./components/list-transfer/list-trasnfer";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

interface Props {
	params: Promise<{ companyID: string }>;
}

async function FormCompany({ params }: Props) {
	const { companyID } = await params;
	const compani = (await getCompany({ id: companyID })).data?.data;
	const contacts = (await getContactsOfCompany({ id: companyID })).data?.data;
	let contactsNull = (await getMyContactsNull()).data?.data;

	if (contactsNull == null) contactsNull = [];

	console.log("contactsList", contactsNull);

	if (compani) {
		return <>
			<Container sx={{ width: "fit-content" }}>
				<FormUpdateCompani compani={compani} />
				<Divider sx={{ margin: 1 }}>
					<Chip label="Contactos" size="medium" />
				</Divider>
				{contacts && contactsNull != null &&
					<ListTransfer
						left={contacts}
						right={contactsNull}
						idCompany={+companyID} />}
			</Container>

		</>;
	}
}

export default FormCompany;
