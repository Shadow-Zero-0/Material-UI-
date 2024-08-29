import * as React from 'react';
import { styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const AppBarr = ({setnone,none}) => {
    const [open, setopen] = React.useState(false);
    const [openscreen, setopenscreen] = React.useState(false);
   
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      const toggleopan = () => {
        setopen(false)
      }
      const ref1 = React.useRef(null)
      const ref2 = React.useRef(null)
      const renderMobileMenu = (
        <Menu 
        anchorEl={ref2.current}
          
          keepMounted
        
          open={openscreen}
          onClose={() => {
            setopenscreen(false)
          }}
        >
          <MenuItem onClick={() => {
            setopenscreen(false)
           }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem onClick={() => {
            setopenscreen(false)
           }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem
           onClick={() => {
            setopenscreen(false)
           }}
           >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
   
    
    return (
<Box >
           
            <AppBar  position="fixed">
              <Toolbar>
                <IconButton sx={{display: {xs:'flex', md:'none'} ,mr: 2 }} onClick={() => {
                  setnone( none === 'none' ? 'block':'none')
                }}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  Shadow
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex'} ,alignItems: 'center' }}>
                  <IconButton sx={{width:'37px', height:'37px'}} size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton sx={{width:'37px', height:'37px'}}
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={() => {
                        setopen(!open)
                        
                    }}
                   ref={ref1}
                  >
                    
                    <Avatar  alt="Remy Sharp" src="../1.png" />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                  onClick={() => {
                    setopenscreen(true)
                  }}
                  ref={ref2}
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
          
            <Menu anchorEl={ref1.current}
             onClose={toggleopan}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
     
        open={open}
     
      >
        <MenuItem onClick={() => {
            toggleopan()
        }}>Profile</MenuItem>
        <MenuItem onClick={() => {
              toggleopan()
        }}>My account</MenuItem>
        <MenuItem onClick={() => {
              toggleopan()
        }}>Logout</MenuItem>
      </Menu>
            
      {renderMobileMenu}
</Box>
    );
}

export default AppBarr;
