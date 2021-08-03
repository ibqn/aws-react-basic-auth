import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --amplify-primary-color: #1890ff;
    --amplify-primary-tint: #1890ff;
    --amplify-primary-shade: #1890ff;
  }
`

export default GlobalStyles
