import AuthErrorPage from "@/component/shared/forbidden";
import LoadingProvider from "@/component/shared/loading";
import SnackbarProvider from "@/component/shared/snackbar";
import { Path, useNavigate } from "@/services/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Outlet, useHref, useRouteError } from "react-router-dom";

export const Catch = () => {
  const error = useRouteError() as Error;
  return <AuthErrorPage code={400} messages={error.message} status="error" />;
};

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider useHref={useHref} navigate={(path) => navigate(path as Path)}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <LoadingProvider>
          <SnackbarProvider>
            <Outlet />
          </SnackbarProvider>
        </LoadingProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
