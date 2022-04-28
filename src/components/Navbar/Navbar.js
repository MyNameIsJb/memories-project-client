import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu } from "@mui/material";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import memories from "../../images/memories.png";
import {
  AppBarComponent,
  BrandContainer,
  ButtonComponent,
  Heading,
  Image,
  MenuItemComponent,
  Profile,
  Purple,
  ToolbarComponent,
  Username,
} from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
    handleCloseUserMenu();

    setUser(null);
  };

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("profile"));

    if (userToken?.token) {
      const decodedToken = decode(userToken?.token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: "LOGOUT" });

        navigate("/");

        setUser(null);
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [navigate, dispatch]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarComponent position="static" color="inherit">
      <BrandContainer>
        <Heading variant="h2" component={Link} to="/" align="center">
          Memories
        </Heading>
        <Image src={memories} alt="memories" height="60" />
      </BrandContainer>
      <ToolbarComponent>
        {user ? (
          <Profile>
            <Purple
              alt={user.result.name}
              src={user.result.imageUrl}
              onClick={handleOpenUserMenu}
            >
              {user.result.name.charAt(0)}
            </Purple>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Username variant="body2">{user.result.name}</Username>
              <MenuItemComponent onClick={handleCloseUserMenu}>
                <ButtonComponent
                  variant="contained"
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </ButtonComponent>
              </MenuItemComponent>
            </Menu>
          </Profile>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </ToolbarComponent>
    </AppBarComponent>
  );
};

export default Navbar;
