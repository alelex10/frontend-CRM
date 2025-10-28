import EnhancedTable from "../../../components/table/table-companies";
import EnhancedTableContacts from "../../../components/table/table-contacts";
import { contactHeadCell } from "../../../data/data-company";
import { headCells, rows } from "../../../data/data-example";

const page = () => {
	return <div><EnhancedTableContacts headCells={contactHeadCell} /></div>;
};
export default page;
