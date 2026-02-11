"use client";

import { FormattedCompanyInfo } from "@/src/api/types/company";
import { useCompanyStore } from "@/src/stores/company-store";

export function useCompanyInfo(): FormattedCompanyInfo | null {
  const companyInfo = useCompanyStore((state) => state.companyInfo);
  if (!companyInfo) return null;

  const { name, phoneNumber, email, address } = companyInfo;

  const flatAddress = `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`;

  return {
    name: name,
    address: flatAddress,
    email: email,
    phone: phoneNumber,
  };
}
