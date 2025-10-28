import TableHead from "@mui/material/TableHead";
import { CompaniHeadCell, ContactHeadCell } from "../../data/data-company";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";

interface EnhancedTableProps {
	numSelected: number;
	// onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Compani) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	// order: Order;
	// orderBy: string;
	rowCount: number;
	headCells: readonly ContactHeadCell[];
}

export function EnhancedTableHead(props: EnhancedTableProps) {
	const { onSelectAllClick, numSelected, rowCount } = props;
	// const createSortHandler = (property: keyof Compani) => (event: React.MouseEvent<unknown>) => {
	// 	onRequestSort(event, property);
	// };

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
				{props.headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={"right"}
						padding={headCell.disablePadding ? "none" : "normal"}
						// sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
						// active={orderBy === headCell.id}
						// direction={orderBy === headCell.id ? order : "asc"}
						// onClick={createSortHandler(headCell.id)}
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
