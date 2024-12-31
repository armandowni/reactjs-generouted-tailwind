/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkStatusHttpResponseCode } from "@/utils/converter";
import { Alert } from "@nextui-org/react";
import { createContext, useEffect, useState } from "react";

type SnackbarPayloadProps = {
  status: number;
  message: string;
};
type SnackbarProps = {
  payload: SnackbarPayloadProps | null;
  onTriggerSnackbar: (data: SnackbarPayloadProps) => void;
  onCloseSnackbar: () => void;
};

export const SnackbarContext = createContext<SnackbarProps>({
  payload: null,
  onTriggerSnackbar(data) {},
  onCloseSnackbar() {}
});

export default function SnackbarProvider({ children }: any) {
  const [snackbarPayload, setSnackbarPayload] = useState(null as SnackbarPayloadProps | null);
  const [statusSnackbar, statusSnacbar] = useState(
    "default" as "success" | "danger" | "warning" | "default"
  );

  useEffect(() => {
    if (snackbarPayload) {
      statusSnacbar(checkStatusHttpResponseCode(snackbarPayload.status));
      setTimeout(() => {
        onCloseSnackbar();
      }, 5000);
    }
  }, [snackbarPayload]);

  const onTriggerSnackbar = (data: SnackbarPayloadProps) => setSnackbarPayload(data);

  const onCloseSnackbar = () => setSnackbarPayload(null);

  return (
    <SnackbarContext.Provider
      value={{ payload: snackbarPayload, onTriggerSnackbar, onCloseSnackbar }}>
      <div
        className={`absolute top-5 z-30 w-full transition-all duration-300 ease-in-out ${!snackbarPayload ? "hidden" : "block"}`}>
        <div className="mx-auto w-4/5 md:w-7/12 lg:w-8/12">
          <Alert
            color={statusSnackbar}
            title={snackbarPayload?.message}
            description=""
            endContent={
              <button className="!border-0 !text-white" onClick={() => onCloseSnackbar()}>
                OK
              </button>
            }
            variant={"solid"}
          />
        </div>
      </div>

      {children}
    </SnackbarContext.Provider>
  );
}
