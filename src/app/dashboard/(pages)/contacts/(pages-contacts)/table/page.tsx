import EnhancedTable from "../../../components/table/table";
import { contactHeadCell } from "../../../data/data-head";

const page = () => {
	return (
		<div>
			<EnhancedTable headCells={contactHeadCell} nameTable="contacts"  />
		</div>
	);
};
export default page;