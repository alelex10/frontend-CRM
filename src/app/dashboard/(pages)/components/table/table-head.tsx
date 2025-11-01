import TableHead from "@mui/material/TableHead";
import { HeadCell } from "../../data/data-head";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Compani } from "../../../../../types/compani.types";
import { Contact } from "../../../../../types/contact.types";
import { Order } from "./table";

interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Compani | keyof Contact) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
	headCells: readonly HeadCell[];
}

export function EnhancedTableHead(props: EnhancedTableProps) {
	const { onSelectAllClick, numSelected, rowCount, headCells, orderBy, order, onRequestSort } = props;
	const createSortHandler = (property: keyof Compani | keyof Contact) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={"right"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={"desc"}
					// sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							// active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							// direction="desc" // FLECHITA DE ORDEN
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{/* {orderBy === headCell.id ? (
								<Box component="span" sx={{ display: "inline-block" }}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null} */}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

// export function EnhancedTableHead
