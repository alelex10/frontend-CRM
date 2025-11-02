import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Compani } from "../../../../../types/compani.types";
import { Contact } from "@/types/contact.types";
import { Link } from "@mui/material";

interface Props {
	row: Compani | Contact;
	labelId: string;
	isItemSelected: boolean;
	handleClick: (event: React.MouseEvent<unknown>, id: number) => void;
}

export default function TableBodyRow({ row, labelId, isItemSelected, handleClick }: Props) {
	const keysRow = Object.keys(row) as Array<keyof typeof row>;

	return (
		<>
			<TableRow
				hover
				role="checkbox"
				aria-checked={isItemSelected}
				tabIndex={10}
				key={row.id}
				selected={isItemSelected}

			>
				<TableCell sx={{ zIndex: 1000 }} padding="checkbox" onClick={(event) => handleClick(event, row.id)}>
					<Checkbox
						sx={{ zIndex: 1000 }}
						color="primary"
						checked={isItemSelected}
					/>
				</TableCell>
				<TableCell component="th" id={labelId} scope="row" padding="none" align="right">
					{row.id}
				</TableCell>
				<TableCell align="right" >
					<Link href={`/dashboard/companis/${row.id}`} underline="always"  color="inherit" variant="caption" sx={{ "&:hover": { color: "primary.main" } }}>
						{row.name}
					</Link>
				</TableCell>
				{
					keysRow.map((key) => {
						if (key === "id" ||
							key === "name" ||
							key === "createdAt" ||
							key === "updatedAt" ||
							key === "deletedAt" ||
							key === "userId") {
							return null;
						}

						return (
							<TableCell key={key} align="right">{row[key]}</TableCell>
						);
					})
				}
				<TableCell align="right">{row.createdAt.toLocaleString().slice(0, 9)}</TableCell>
				<TableCell align="right">{row.updatedAt.toLocaleString().slice(0, 9)}</TableCell>
			</TableRow>
		</>
	);
}
