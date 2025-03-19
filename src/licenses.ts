import { LicenseInfo } from '@mui/x-license-pro'
import { hugeiconsLicense } from '@hugeicons/react-pro'

const VITE_MUIX_KEY = process.env.VITE_MUIX_KEY
const VITE_HUGEICON_KEY = process.env.VITE_HUGEICON_KEY

export const registerLicenses = () => {
  // MUI-X Pro
  if (VITE_MUIX_KEY) {
    LicenseInfo.setLicenseKey(VITE_MUIX_KEY)
  }

  // HugeIcons
  if (VITE_HUGEICON_KEY) {
    hugeiconsLicense(VITE_HUGEICON_KEY)
  }
}
