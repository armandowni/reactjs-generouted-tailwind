/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

declare interface FormComponentProps extends UseFormReturn<any> {
  onSubmit: (data: any) => void;
  className?: string;
}
export default function FormComponent({
  onSubmit,
  className,
  ...props
}: React.PropsWithChildren<FormComponentProps>) {
  const { handleSubmit } = props;

  return (
    <FormProvider {...props}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {props.children}
      </form>
    </FormProvider>
  );
}
