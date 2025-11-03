"use server"

import { cookies } from "next/headers";
import OpportunityForm from "./OpportunityForm";

export default async function CreateOpportunityPage() {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) {
    return <p>No estás autenticado</p>;
  }

  return <OpportunityForm mode="create" />;
}
