
import EnhancedTable from "../../../components/table/table";
import { companiHeadCells } from "../../../data/data-head";

const PageTable = () => {
	return <EnhancedTable headCells={companiHeadCells} nameTable={"companies"} />;
};
export default PageTable;
