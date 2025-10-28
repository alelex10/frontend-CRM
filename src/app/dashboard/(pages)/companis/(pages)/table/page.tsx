"use client";
// import { useState } from "react";
import EnhancedTable from "../../../components/table/table";
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

interface FetchProps {
  setCompanies: Dispatch<SetStateAction<Compani[]>>;
  setError: Dispatch<SetStateAction<string | undefined>>;
  setIsLoading: TransitionStartFunction;
}

export const fetchData = async ({
  setCompanies,
  setError,
  setIsLoading,
}: FetchProps) => {
  setIsLoading(async () => {
    const dataList = await companyList({ query: {} });
    const response = dataList;
    if (response?.data?.data) {
      setCompanies(response.data.data.data);
    }
    if (response?.error) {
      setError(response.error.message);
    }
  });
};

const pageTable = () => {
  return <EnhancedTable headCells={companiHeadCells} />;
};
export default pageTable;
