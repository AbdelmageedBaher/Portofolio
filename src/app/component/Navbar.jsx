"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';

// Social Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const drawerWidth = 240;

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'  }}>
      <Box sx={{ my: 2 }}>
        <Image 
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          style={{ borderRadius: '50%',display: 'flex', justifyContent: 'center',alignItems:'center' }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map(({ name, href }) => (
          <ListItem key={name} disablePadding>
            <Link href={href} style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Link href="https://github.com/abdelmageedbaher" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: '#000' }}>
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link href="https://wa.me/01050564777" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: '#25D366' }}>
            <WhatsAppIcon />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/abdelmageed-baher-b04b82262/" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: '#0A66C2' }}>
            <LinkedInIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Desktop: Logo on left */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
          </Box>

          {/* Mobile: Hamburger menu on left */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Center: Navigation links (desktop only) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            {navItems.map(({ name, href }) => (
              <Link key={name} href={href}>
                <Button sx={{ color: '#fff' }}>{name}</Button>
              </Link>
            ))}
          </Box>

          {/* Mobile: Logo on right */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' },padding:'5px ', alignItems: 'center' }}>
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
          </Box>

          {/* Desktop: Social icons right */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Link href="https://github.com/abdelmageedbaher" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#fff' }}>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href="https://wa.me/01050564777" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#25D366' }}>
                <WhatsAppIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/abdelmageed-baher-b04b82262/" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#0A66C2' }}>
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
