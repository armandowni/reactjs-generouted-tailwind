/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeStringFromArray } from "@/utils/array";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { createContext, useState } from "react";

type LoadingProps = {
  startLoading: (event: string) => void;
  endLoading: (event: string) => void;
};

export const LoadingContext = createContext<LoadingProps>({
  startLoading(event) {},
  endLoading(event) {}
});

export default function LoadingProvider({ children }: any) {
  const [loadingStep, setLoadingStep] = useState([] as string[]);

  const startLoading = (event: string) => {
    setLoadingStep([...loadingStep, event]);
  };

  const endLoading = (event: string) => {
    const tempLoadingStep = loadingStep;
    const resultSlice = removeStringFromArray(tempLoadingStep, event);
    setLoadingStep(resultSlice);
  };

  return (
    <LoadingContext.Provider value={{ startLoading, endLoading }}>
      <Modal
        placement="center"
        isOpen={loadingStep?.length > 0}
        onClose={() => {}}
        hideCloseButton={true}>
        <ModalContent>
          <ModalBody>
            <div className="flex flex-col gap-3">Memuat...</div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {children}
    </LoadingContext.Provider>
  );
}
