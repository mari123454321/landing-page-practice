import getLandingCompanyInfo from "@/src/api/company/getLandingCompanyInfo";
import CompanyInfoClient from "./CompanyInfoClient";


export default async function CompanyInfoSRV() {
    const companyInfo = await getLandingCompanyInfo()
    
    return <CompanyInfoClient companyInfo={companyInfo} />
}