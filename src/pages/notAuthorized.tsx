import AuthErrorPage from "@/component/shared/forbidden";

export default function NotFound() {
  return <AuthErrorPage code={400} messages={"Not Authoried"} status="error" />;
}
