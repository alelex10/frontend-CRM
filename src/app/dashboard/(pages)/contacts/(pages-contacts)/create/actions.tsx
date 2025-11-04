"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { formTypeCreateContact } from "@/schemas/contact.schema";
import { Contact } from "@/types/contact.types";
import { cookies } from "next/headers";

interface createCompanyProps {
  createData: formTypeCreateContact
}

export async function createContact({ createData }: createCompanyProps) {
  const response = await myFetch<Contact>(
    API.CONTACT.CREATE,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createData),
    }
  );
  return response;
}
