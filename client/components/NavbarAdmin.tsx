import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ListItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openSignUpModalWindow } from '@/store/actions-creators/modalRecord';
import { useRouter } from 'next/navigation';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useLayoutEffect } from 'react';
import { updateValueIsAuthenticated } from '@/store/actions-creators/formSignIn';

const pages = [
  { title: 'Профиль', href: '/admin',  id: "admin"},
  { title: 'Блог', href: '/admin/blogs', id: "blog"},
  { title: 'Основные направления', href: '/admin/work', id: "work"},
  { title: 'Достижения', href: '/admin/certificates', id: "certificates"},
];


const  ResponsiveAppBar:React.FC = ( ) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { isAuthenticated } = useTypedSelector(state => state.signInForm);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = window.localStorage.getItem("access_token") ? true : false;
      if(isAuth) {
        dispatch(updateValueIsAuthenticated(isAuth));
      }
    }
  }, []);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {

    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlerAnchorMenu = (url:string) => {
    console.log(url);
    router.push('/'+ url);
  }

  const openWindowSignUp = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(openSignUpModalWindow());
  }
  const exitAdminPart = (event: React.MouseEvent<HTMLElement>) => {
    window.localStorage.removeItem('access_token');
    dispatch(updateValueIsAuthenticated(false));

  }


  return (
    <AppBar position="static"  sx={{ bgcolor: '#3E424B' }}>
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Часть администратора
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.href} onClick={() => handlerAnchorMenu(page.href)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.href}
                onClick={() => handlerAnchorMenu(page.href)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
