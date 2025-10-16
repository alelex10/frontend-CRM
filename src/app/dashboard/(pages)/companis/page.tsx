import EnhancedTable from "../components/table/table";
import { headCells, rows } from "../contacts/data";

const page = () => {
	return (
		<div>
			<EnhancedTable headCells={headCells} rows={rows}></EnhancedTable>
		</div>
	);
};
export default page;

