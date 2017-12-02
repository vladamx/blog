import Typography from 'typography'
import wordpress2011 from 'typography-theme-wordpress-2011'

wordpress2011.baseFontSize = '17.25px';

const typography = new Typography(wordpress2011)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
