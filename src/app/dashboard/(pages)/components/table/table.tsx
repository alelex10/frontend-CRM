"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Iconify } from "../../../../../components/icons/icon";
import { Data } from "../../data/data-example";
import { Compani } from "../../../../../types/compani/compani.types";
import { CompaniHeadCell } from "../../data/data-company";
import { EnhancedTableHead } from "./table-head";
import TableBodyRow from "./table-row";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = "asc" | "desc";

// function getComparator<Key extends keyof any>(
// 	order: Order,
// 	orderBy: Key
// ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
// 	return order === "desc"
// 		? (a, b) => descendingComparator(a, b, orderBy)
// 		: (a, b) => -descendingComparator(a, b, orderBy);
// }

interface EnhancedTableToolbarProps {
	numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const { numSelected } = props;
	return (
		<Toolbar
			sx={[
				{
					pl: { sm: 2 },
					pr: { xs: 1, sm: 1 },
				},
				numSelected > 0 && {
					bgcolor: (theme) => theme.palette.primary.main,
				},
			]}
		>
			{numSelected > 0 ? (
				<Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : (
				<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
					Nutrition
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<Iconify icon="eva:trash-2-fill" />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<Iconify icon="ic:round-filter-list" />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

interface Props {
	rows: Compani[];
	headCells: readonly CompaniHeadCell[];
}

export default function EnhancedTable({ rows, headCells }: Props) {
	// const [order, setOrder] = React.useState<Order>("asc");
	// const [orderBy, setOrderBy] = React.useState<keyof Compani>("name");
	const [selected, setSelected] = React.useState<number[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		// const isAsc = orderBy === property && order === "asc";
		// setOrder(isAsc ? "desc" : "asc");
		// setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	// VERIFICADO
	const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
		// cada vez que se aga click en el checkbox se agrega o quita el id
		setSelected((selected) => (selected.includes(id) ? selected.filter((id) => id !== id) : [...selected, id]));

		// const selectedIndex = selected.indexOf(id);
		// let newSelected: number[] = [];

		// if (selectedIndex === -1) {
		// 	newSelected = newSelected.concat(selected, id);
		// } else if (selectedIndex === 0) {
		// 	newSelected = newSelected.concat(selected.slice(1));
		// } else if (selectedIndex === selected.length - 1) {
		// 	newSelected = newSelected.concat(selected.slice(0, -1));
		// } else if (selectedIndex > 0) {
		// 	newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		// }
		// setSelected(newSelected);
	};
	// VERIFICADO
	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};
	// VERIFICADO
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	// const visibleRows = React.useMemo(
	// 	() => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
	// 	[rows, page, rowsPerPage]
	// );

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
						<EnhancedTableHead
							numSelected={selected.length}
							// order={order}
							// orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							// onRequestSort={handleRequestSort}
							rowCount={rows.length}
							headCells={headCells}
						/>
						<TableBody>
							{rows.map((row, index) => {
								const isItemSelected = selected.includes(row.id);
								const labelId = `enhanced-table-checkbox-${index}`;

								// const { id, name, address } = row;

								return (
									<TableBodyRow
										key={row.id}
										row={row}
										labelId={labelId}
										isItemSelected={isItemSelected}
										handleClick={handleClick}
									/>
								);
							})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
		</Box>
	);
}
