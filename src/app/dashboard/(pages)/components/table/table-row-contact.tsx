import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Compani } from "../../../../../types/compani.types";
import { Contact } from "../../../../../types/conntac.types";

interface Props {
	row: Contact;
	labelId: string;
	isItemSelected: boolean;
	handleClick: (event: React.MouseEvent<unknown>, id: number) => void;
}

export default function TableBodyRowContact({ row, labelId, isItemSelected, handleClick }: Props) {
	return (
		<>
			<TableRow
				hover
				role="checkbox"
				aria-checked={isItemSelected}
				tabIndex={-1}
				key={row.id}
				selected={isItemSelected}
				sx={{ cursor: "pointer" }}
			>
				<TableCell padding="checkbox" onClick={(event) => handleClick(event, row.id)}>
					<Checkbox
						color="primary"
						checked={isItemSelected}
						// inputProps={{
						// 	"aria-labelledby": labelId,
						// }}
					/>
				</TableCell>
				<TableCell component="th" id={labelId} scope="row" padding="none" align="right">
					{row.id}
				</TableCell>
				<TableCell align="right">{row.name}</TableCell>
				<TableCell align="right">{row.email}</TableCell>
				<TableCell align="right">{row.phone}</TableCell>
				<TableCell align="right">{row.companyId}</TableCell>
				<TableCell align="right">{row.createdAt.toLocaleString().slice(0, 9)}</TableCell>
				<TableCell align="right">{row.updatedAt.toLocaleString().slice(0, 9)}</TableCell>
			</TableRow>
		</>
	);
}
