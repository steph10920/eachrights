import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route change, and disables
 * the browser's automatic scroll-position restoration on refresh/
 * back-forward navigation, so every page load starts at the top.
 *
 * Must be rendered inside <BrowserRouter>. Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
