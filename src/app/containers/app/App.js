import React, { useEffect, lazy, Suspense } from "react";

// Functions
import prepareApp from "../../../../utils/lib/prepareApp.js";

// Components
import LoaderPage from "../../components/LoaderPage.jsx";

const Landing = lazy(() => import("../app/Landing.js"));

const App = () => {
  useEffect(() => {
    prepareApp();
  }, []);

  return (
    <>
      <Suspense fallback={<LoaderPage />}>
        <Landing />
      </Suspense>
    </>
  );
};

export default App;
