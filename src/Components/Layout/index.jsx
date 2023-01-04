import { Outlet, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, CssBaseline, Button } from '@mui/material'

const Layout = ({ title = 'Title', links = [] }) => (<>
     <AppBar position="sticky">
         <CssBaseline />
        <Toolbar sx={{
  flexGrow: 1,
  gap: 8,
  padding: '0 16px',
}} disableGutters>
      <Typography sx={{
  zoom:0.6,
  width: '100%',
  minWidth: 128,
  maxWidth: 128,
}} variant="h6">{title}</Typography>
      <nav style={{
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    flexGrow: 1,
    gap: 16,
    width: '100%',
  }}>
        {
           links.map(({ title, to }) => (
             <Link key={title} key={title} to={to} style={{
               textDecoration: "none",
               color: "white",
             }}>{title}</Link>))
        }
      </nav>
  </Toolbar>
  </AppBar>
   <Outlet />
  </>
)

export default Layout
