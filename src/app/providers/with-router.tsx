import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">{component()}</Suspense>
    </BrowserRouter>
  );
};
