import { ColumnSetting } from "@/component/shared/table/table";
import { del, get, post, put } from "@/services/api";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function TestPageHooks() {
  const modalService = useDisclosure();
  const modalServiceDelete = useDisclosure();
  const formProvider = useForm();
  const [dataForm, setDataForm] = useState(null as any);
  const [dataTable, setDataTable] = useState([] as any[]);
  const COLUMN_TABLE: ColumnSetting[] = [
    { name: "No", key: "no" },
    { name: "Name", key: "name" },
    { name: "Age", key: "age" },
    {
      name: "",
      key: "",
      feature: (item: any) =>
        (item.status & 8) == 8 ? (
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center"
              onClick={() => openAddEditDataModal(item)}>
              <FontAwesomeIcon icon={faPencil} onClick={() => openAddEditDataModal(item)} />
            </button>
            <button className="flex items-center justify-center">
              <FontAwesomeIcon icon={faTrash} onClick={() => openDeleteDataModal(item)} />
            </button>
          </div>
        ) : null
    }
  ];

  const getData = async () => {
    const resultData = await (await get("/test")).json();

    if (resultData?.data?.length > 0) {
      const sortedData = resultData?.data[0]?.sort((a: any, b: any) => {
        const aStatus = (a.status & 8) === 8 ? 1 : 0;
        const bStatus = (b.status & 8) === 8 ? 1 : 0;
        return bStatus - aStatus;
      });
      setDataTable(
        sortedData?.map((data: any, index: number) => ({ ...data, no: index + 1 })) || []
      );
    }
  };
  const postData = async (data: any) => {
    await post("/test", data);
    await getData();
  };
  const putData = async (data: any) => {
    const id = data?.id;

    delete data["id"];
    delete data["status"];
    if (data) {
      data.age = parseInt(data.age);
    }

    console.log(data);

    await put("/test/" + id, data);
    await getData();
  };
  const delData = async (data: any) => {
    await del("/test/" + data?.id, data);
    await getData();
  };

  const openAddEditDataModal = (item: any) => {
    if (item) setDataForm(item);
    modalService.onOpen();
  };

  const openDeleteDataModal = (item: any) => {
    if (item) setDataForm(item);
    modalServiceDelete.onOpen();
  };

  const onCloseAddEditModal = () => {
    setDataForm(null);
    modalService.onClose();
  };

  const onCloseDeleteModal = () => {
    setDataForm(null);
    modalServiceDelete.onClose();
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    COLUMN_TABLE,
    dataTable,
    modalService,
    modalServiceDelete,
    formProvider,
    dataForm,
    postData,
    putData,
    delData,
    openAddEditDataModal,
    openDeleteDataModal,
    onCloseAddEditModal,
    onCloseDeleteModal
  };
}
