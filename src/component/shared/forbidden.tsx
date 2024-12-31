/* eslint-disable @typescript-eslint/no-unsafe-function-type */
declare type ErrorPageProps = {
  status: "success" | "error" | "warning";
  messages: string;
  code: number;
  onClick?: Function;
};
export default function AuthErrorPage(params: ErrorPageProps) {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center ${
        params?.status === "success"
          ? "bg-success-500"
          : params?.status === "error"
            ? "bg-danger-500"
            : params?.status === "warning"
              ? "bg-warning-500"
              : "bg-gray-500"
      }`}>
      <div>
        <h1 className="text-center text-[8rem] font-bold leading-none text-primary-foreground">
          {params.code}
        </h1>
        <p className="text-center font-light text-primary-foreground">{params.messages}</p>
      </div>
    </div>
  );
}
