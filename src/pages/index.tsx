import { BasePage, TestTitle } from "@/component/shared/base";
import FormComponent from "@/component/shared/form";
import TableCustom from "@/component/shared/table/table";
import TestPageHooks from "@/hooks/test/testpage";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    COLUMN_TABLE,
    dataTable,
    modalService,
    modalServiceDelete,
    dataForm,
    formProvider,
    postData,
    putData,
    delData,
    openAddEditDataModal,
    onCloseAddEditModal,
    onCloseDeleteModal
  } = TestPageHooks();

  const { register, handleSubmit, reset } = formProvider;

  useEffect(() => {
    if (!dataForm) {
      reset({ name: "", age: "" });
      return;
    }

    reset({ name: dataForm?.name, age: dataForm?.age });
  }, [dataForm]);

  return (
    <BasePage className="w-full px-10 pb-10">
      <TestTitle />
      <Modal isOpen={modalService.isOpen} onClose={onCloseAddEditModal}>
        <ModalContent>
          <ModalHeader>Form Test Data</ModalHeader>
          <FormComponent
            className="flex flex-col gap-3"
            {...formProvider}
            onSubmit={handleSubmit((result) => {
              const formResult = { ...dataForm, ...result };
              delete formResult["no"];
              console.log(formResult);

              if (!dataForm) postData({ ...formResult, status: 8 });
              else if (dataForm) {
                putData(formResult);
              }
              onCloseAddEditModal();
            })}>
            <ModalBody>
              <Input
                type="text"
                labelPlacement="outside"
                label={"Name"}
                placeholder="Input your name"
                {...register("name")}
              />
              <Input
                type="number"
                labelPlacement="outside"
                label={"Age"}
                placeholder="Input your age"
                {...register("age")}
              />
            </ModalBody>

            <ModalFooter>
              <Button type="submit" color="success">
                Submit
              </Button>
            </ModalFooter>
          </FormComponent>
        </ModalContent>
      </Modal>
      <Modal isOpen={modalServiceDelete.isOpen} onClose={onCloseDeleteModal}>
        <ModalContent>
          <ModalHeader>Are you sure want to delete {dataForm?.name}?</ModalHeader>
          <ModalFooter>
            <div className="flex w-full items-center gap-3">
              <Button
                onPress={() => {
                  delData(dataForm);
                  onCloseDeleteModal();
                }}
                className="flex-1"
                color="success">
                Yes
              </Button>
              <Button onPress={onCloseDeleteModal} className="flex-1" color="danger">
                No
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableCustom
        className={""}
        datas={dataTable}
        count={0}
        columns={COLUMN_TABLE}
        topContent={
          <Button color="primary" onPress={() => openAddEditDataModal(null)}>
            Add data
          </Button>
        }
      />
    </BasePage>
  );
}
