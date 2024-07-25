import { Box, IconButton, InputBase, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Media queries for different screen sizes
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent={isMobile ? "center" : "space-between"}
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: colors.primary[500],
        width: "100%",
      }}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        width={isMobile ? "100%" : "auto"}
        mb={isMobile ? 2 : 0} // Margin bottom on mobile
        sx={{
          flex: isMobile ? "1" : "auto",
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, py: 1, px: 2 }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box
        display="flex"
        flexDirection={isMobile ? "row" : "row"}
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-end"}
        width={isMobile ? "100%" : "auto"}
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
