"use client";
// import { useState } from "react";
import EnhancedTable from "../../../components/table/table";
import { companiHeadCells, companiRows } from "../../../data/data-company";
import { Compani } from "@/types/compani.types";
import { companyList } from "./actions";
import { useState } from "react";

const pageTable = () => {
  const [companies, setCompanies] = useState<Compani[]>();
//   const dataList = companyList( { page: 1, limit: 10, search: "", orderBy: "name" } );

  return (
    <div>
      <EnhancedTable
        headCells={companiHeadCells}
        data={companiRows}
      ></EnhancedTable>
    </div>
  );
};
export default pageTable;
