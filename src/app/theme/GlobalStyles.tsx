import { useTheme } from '@mui/joy'

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <style>
      {`
          /* Exclude body from custom scrollbar styling */
          *:not(body)::-webkit-scrollbar {
            width: 8px;
          }

          *:not(body)::-webkit-scrollbar-track {
            background: ${theme.palette.background.level1};
          }

          *:not(body)::-webkit-scrollbar-thumb {
            background: ${theme.palette.background.level2};
            border-radius: 0 !important;
          }

          *:not(body)::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.background.level3};
            border-radius: 0 !important;
          }

          /* Firefox scrollbar styles, excluding body */
          *:not(body) {
            scrollbar-width: thin;
            scrollbar-color: ${theme.palette.background.level2} ${theme.palette.background.level1};
          }

          :root {
            --joy-zIndex-popup: 1450;
          }
        `}
    </style>
  )
}

export default GlobalStyles
