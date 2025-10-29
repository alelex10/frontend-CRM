import EnhancedTableContacts from "../../../components/table/table-contacts";
import { contactHeadCell } from "../../../data/data-head";

const page = () => {
	return (
		<div>
			<EnhancedTableContacts headCells={contactHeadCell} />
		</div>
	);
};
export default page;
