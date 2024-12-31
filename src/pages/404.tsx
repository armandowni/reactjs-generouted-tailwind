import AuthErrorPage from "@/component/shared/forbidden";

export default function NotFound() {
  return <AuthErrorPage code={404} messages={"Not Found"} status="error" />;
}
