import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing.js";

// just for test
const Test = lazy(() => import("../../components/TestCode.jsx"));

// Welcome
const WelcomeLandingLazy = lazy(() =>
  import("../../../features/welcome/WelcomeLanding.js")
);
const SlideScreenLazy = lazy(() =>
  import("../../../features/welcome/components/SlideScreen.jsx")
);

// Home
const HomeLanding = lazy(() => import("../../../features/Home/HomeLanding.js"));

const Content = () => {
  return (
    <div className="w-fullbg-white h-screen xs:grid xs:place-items-center">
      <Routes>
        {/* just for test */}
        <Route path="/mohammad/test" element={<Test />}></Route>
        {/* just for test */}

        {/* Welcome */}
        <Route path="*" element={<Landing />}></Route>
        <Route path="/landing" element={<WelcomeLandingLazy />}></Route>
        <Route path="/slide-screen" element={<SlideScreenLazy />}></Route>

        {/* Home */}
        <Route path="/home" element={<HomeLanding />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
