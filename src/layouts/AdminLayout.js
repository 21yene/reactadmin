import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../admin/scenes/global/Topbar";
import Sidebar from "../admin/scenes/global/Sidebaar";
import Dashboard from "../admin/scenes/dashboard";
import Team from "../admin/scenes/team";
import Invoices from "../admin/scenes/invoices";
import Contacts from "../admin/scenes/contacts";
import Bar from "../admin/scenes/bar";
import Form from "../admin/scenes/form";
import Line from "../admin/scenes/line";
import Pie from "../admin/scenes/pie";
import FAQ from "../admin/scenes/faq";
import Geography from "../admin/scenes/geography";
import Calendar from "../admin/scenes/calendar/calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../admin/theme";


function AdminLayout() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminLayout;