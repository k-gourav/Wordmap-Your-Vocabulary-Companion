import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shimmer from "../components/Shimmer/Shimmer"

const DictionaryPage = React.lazy(() => import("../pages/DictionaryPage"));
const NotFoundPage = React.lazy(() => import("../components/NotFound404/NotFound404"))

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Shimmer />}>
        <Routes>
          <Route path="/" element={<DictionaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
