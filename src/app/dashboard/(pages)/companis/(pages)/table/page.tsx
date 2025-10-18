import EnhancedTable from "../../../components/table/table";
import { companiHeadCells, companiRows } from "../../../data/data-company";
// import { headCells, rows } from "../../../data/data-example";

const page = () => {
	return (
		<div>
			{/* <EnhancedTable headCells={headCells} rows={rows}></EnhancedTable> */}
			<EnhancedTable headCells={companiHeadCells} rows={companiRows}></EnhancedTable>
		</div>
	);
};
export default page;
