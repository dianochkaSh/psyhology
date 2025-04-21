"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppBar_1 = require("@mui/material/AppBar");
const Box_1 = require("@mui/material/Box");
const Toolbar_1 = require("@mui/material/Toolbar");
const IconButton_1 = require("@mui/material/IconButton");
const Typography_1 = require("@mui/material/Typography");
const Menu_1 = require("@mui/material/Menu");
const Menu_2 = require("@mui/icons-material/Menu");
const Container_1 = require("@mui/material/Container");
const Avatar_1 = require("@mui/material/Avatar");
const Button_1 = require("@mui/material/Button");
const Tooltip_1 = require("@mui/material/Tooltip");
const MenuItem_1 = require("@mui/material/MenuItem");
const Adb_1 = require("@mui/icons-material/Adb");
const material_1 = require("@mui/material");
const router_1 = require("next/router");
const pages = [
    { title: 'Обо мне', href: '/' },
    { title: 'Блог', href: '/blogs' },
    { title: 'Подкасты', href: '/podcasts' },
    { title: 'Достижения', href: '/' },
    { title: 'Контакты', href: '/' },
];
const settings = [
    { title: 'Профиль', href: '#' },
    { title: 'Выйти', href: '#' }
];
function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (<AppBar_1.default position="static" sx={{ bgcolor: '#3E424B' }}>
      <Container_1.default maxWidth="xl">
        <Toolbar_1.default disableGutters>
          <Adb_1.default sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography_1.default variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{
            mr: 6,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            Клименко Наталия Константиновна
          </Typography_1.default>

          <Box_1.default sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton_1.default size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <Menu_2.default />
            </IconButton_1.default>
            <Menu_1.default id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {settings.map((setting) => (<MenuItem_1.default key={setting.href} onClick={() => router_1.default.push(setting.href)}>
                  <Typography_1.default sx={{ textAlign: 'center' }}>{setting.title}</Typography_1.default>
                </MenuItem_1.default>))}
            </Menu_1.default>
          </Box_1.default>
          <Adb_1.default sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography_1.default variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.5rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            LOGO
          </Typography_1.default>
          <Box_1.default sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (<Button_1.default key={page.href} onClick={() => router_1.default.push(page.href)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.title}
              </Button_1.default>))}
          </Box_1.default>
          <Box_1.default sx={{ flexGrow: 0 }}>
            <Tooltip_1.default title="Open settings">
              <IconButton_1.default onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar_1.default alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
              </IconButton_1.default>
            </Tooltip_1.default>
            <Menu_1.default sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (<material_1.ListItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Typography_1.default sx={{ textAlign: 'center' }}>{setting.title}</Typography_1.default>
                </material_1.ListItem>))}
            </Menu_1.default>
          </Box_1.default>
        </Toolbar_1.default>
      </Container_1.default>
    </AppBar_1.default>);
}
exports.default = ResponsiveAppBar;
//# sourceMappingURL=Navbar.js.map