"use client";
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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Iconify } from "../../../../../components/icons/icon";
import { Data } from "../../data/data-example";
import { Compani } from "../../../../../types/compani.types";
import { HeadCell } from "../../data/data-head";
import { EnhancedTableHead } from "./table-head";
import TableBodyRow from "./table-row";
import { useState } from "react";
import { Contact } from "../../../../../types/conntac.types";
import { C } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";

export type Order = "asc" | "desc";

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
	headCells: readonly HeadCell[];
	data: Compani[] | Contact[];
	setData: React.Dispatch<React.SetStateAction<Compani[] | Contact[]>>;
}

export default function EnhancedTable({ headCells, data }: Props) {
	// const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Compani>("id");
	const [selected, setSelected] = useState<number[]>([]);
	const [page, setPage] = useState(0);
	const [dense, setDense] = useState(false);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Compani) => {
		
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = data.map((n) => n.id);
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
		setSelected((selected) => (selected.includes(id) ? selected.filter((id) => id !== id) : [...selected, id]));
	};
	// VERIFICADO
	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
						<EnhancedTableHead
							numSelected={selected.length}
							// order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={data.length}
							headCells={headCells}
						/>
						<TableBody>
							{data.map((row, index) => {
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
					count={data.length}
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
