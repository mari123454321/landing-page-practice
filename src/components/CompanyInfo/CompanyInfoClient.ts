"use client";

import { LandingCompanyInfo } from "@/api/types/company";
import { useCompanyStore } from "@/stores/company-store";
import { useEffect } from "react";

interface CompanyInfoClientProps {
  companyInfo: LandingCompanyInfo;
}

export default function CompanyInfoClient({
  companyInfo,
}: CompanyInfoClientProps) {
  const setCompanyInfo = useCompanyStore((state) => state.setCompanyInfo);

  useEffect(() => {
    setCompanyInfo(companyInfo);
  }, [companyInfo, setCompanyInfo]);

  return null;
}
