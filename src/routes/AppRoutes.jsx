import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DictionaryPage = React.lazy(() => import("../pages/DictionaryPage"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DictionaryPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
