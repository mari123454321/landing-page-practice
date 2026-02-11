import { EnvCompanyInfo } from "../consts/EnvCompanyInfo";
import { LandingCompanyInfo } from "../types/company";

export default async function getLandingCompanyInfo(): Promise<LandingCompanyInfo> {
  const TRANSLATOR_X_SECRET_KEY = process.env.TRANSLATOR_X_SECRET_KEY
  const TRANSLATOR_API_URL = process.env.TRANSLATOR_API_URL

  if (!TRANSLATOR_X_SECRET_KEY || !TRANSLATOR_API_URL) return EnvCompanyInfo
  const response = await fetch(`${TRANSLATOR_API_URL}/api/landing-company-info`, {
    headers:{
      "X-Secret-Key": TRANSLATOR_X_SECRET_KEY
    }
  })
  if(!response.ok) return EnvCompanyInfo

  const data = await response.json()

  return data.data ?? EnvCompanyInfo
}
