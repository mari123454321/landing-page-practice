import getLandingCompanyInfo from "@/api/company/getLandingCompanyInfo";
import CompanyInfoClient from "@/components/CompanyInfo/CompanyInfoClient";


export default async function CompanyInfoSRV() {
    const companyInfo = await getLandingCompanyInfo()
    
    return <CompanyInfoClient companyInfo={companyInfo} />
}