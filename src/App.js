import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidLarge from "./pages/AndroidLarge";
import AndroidLarge4 from "./pages/AndroidLarge4";
import AndroidLarge1 from "./pages/AndroidLarge1";
import AndroidLarge2 from "./pages/AndroidLarge2";
import AndroidLarge3 from "./pages/AndroidLarge3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-2":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-4":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-6":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidLarge />} />
      <Route path="/android-large-2" element={<AndroidLarge4 />} />
      <Route path="/android-large-4" element={<AndroidLarge1 />} />
      <Route path="/android-large-6" element={<AndroidLarge2 />} />
      <Route path="/android-large-5" element={<AndroidLarge3 />} />
    </Routes>
  );
}
export default App;
