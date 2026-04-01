import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../Component/Page";

const routes = [{ path: "/", component: Page }];

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((c) => (
          <Route key={c.path} path={c.path} element={<c.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
