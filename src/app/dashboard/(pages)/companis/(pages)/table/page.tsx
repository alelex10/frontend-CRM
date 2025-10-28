"use client";
// import { useState } from "react";
import EnhancedTable from "../../../components/table/table-companies";
import { companiHeadCells, companiRows } from "../../../data/data-company";
import { Compani } from "@/types/compani.types";
import { companyList } from "./actions";
import {
  Dispatch,
  SetStateAction,
  TransitionStartFunction,
  useEffect,
  useState,
  useTransition,
} from "react";



const pageTable = () => {
  return <EnhancedTable headCells={companiHeadCells} />;
};
export default pageTable;
