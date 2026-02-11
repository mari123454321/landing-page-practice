"use client";

import { LandingCompanyInfo } from "@/src/api/types/company";
import { useCompanyStore } from "@/src/stores/company-store";
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
