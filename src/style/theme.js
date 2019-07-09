export default {
  breakpoints: [768, 1024, 1366],
  colors: {
    blacks: {
      title: `#262626`,
      body: `#595959`,
    },
    blue: `#1890ff`,
    grays: {
      dark: `#8c8c8c`,
      med: `#e8e8e8`,
      light: `#fafafa`,
    },
    projects: {
      coin: `#5cdbd3`,
      dictionary: `#69c0ff`,
      music: `#ff85c0`,
    },
  },
  fonts: {
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    var: `'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    mono: `source-code-pro, Menlo, Consolas, 'Courier New', Courier,
    monospace;`,
  },
  fontSizes: [14, 16, 20, 24, 32, 46, 64, 72, 80],
  fontWeights: {
    bold: 700,
    semi: 600,
    medium: 500,
    regular: 400,
  },
  grids: {
    xs: {
      display: 'flex',
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  },
  space: [0, 8, 16, 24, 32, 40, 64, 112],
  radii: {
    default: 8,
  },
}
