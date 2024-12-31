/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/assets/css/Table.css";
import PaginationCustom from "@/components/shared/table/pagination";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Selection,
  SelectionMode,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export declare type ColumnSetting = {
  name: string;
  key: string;
  isSortable?: boolean;
  width?: number;
  isStickyLeft?: boolean;
  isStickyRight?: boolean;
  feature?: Function;
};

interface TableColumnSetting extends ColumnSetting {
  childrenCol?: ColumnSetting[];
}

declare type TableProps = {
  className: string;
  columns?: ColumnSetting[];
  datas: any[];
  count: number;
  selectionMode?: SelectionMode;
  onChangePages?: (numberPage: number) => void;
  onRowLimitChanges?: (limit: number) => void;
  topContent?: JSX.Element;
  isLoading?: boolean;
  isRowPerPage?: boolean;
  CustomHeader?: JSX.Element;
};

export default function TableCustom(props: TableProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));

  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>();

  const [selectedData, setSelectedData] = React.useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const [DEFAULT_COLUMNS, setDefaultColumn] = useState<TableColumnSetting[]>([
    {
      key: "load",
      name: "load"
    }
  ]);

  useEffect(() => {
    if ((page - 1) * rowsPerPage + 1 > props.count) setPage(1);
  }, [props.datas, page, rowsPerPage]);

  useEffect(() => {
    if (!props.columns || props?.columns.length == 0) return;
    const dataStickyLeft: TableColumnSetting[] = props.columns.filter(
      (data) => !!data.isStickyLeft
    );
    const dataNonSticky = props.columns.filter((data) => !data.isStickyLeft && !data.isStickyRight);
    const dataStickyRight = props.columns.filter((data) => !!data.isStickyRight);

    const temp: React.SetStateAction<TableColumnSetting[]> = [];
    if (dataStickyLeft.length != 0) {
      const resultReduce = dataStickyLeft.reduce(
        (acc: TableColumnSetting, curr: TableColumnSetting) => {
          acc.childrenCol?.push(curr);
          return acc;
        },
        { name: "", key: "stickyLeft", isStickyLeft: true, childrenCol: [] }
      );
      temp.push(resultReduce);
    }
    temp.push(...dataNonSticky);
    if (dataStickyRight.length != 0) {
      const resultReduce = dataStickyRight.reduce(
        (acc: TableColumnSetting, curr: TableColumnSetting) => {
          acc.childrenCol?.push(curr);
          return acc;
        },
        { name: "", key: "stickyRight", isStickyRight: true, childrenCol: [] }
      );
      temp.push(resultReduce);
    }

    setDefaultColumn(temp);
  }, [props.columns, sortDescriptor]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onRowLimitChanges?.(Number(e.target.value));
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const checkCurrentDirectionData = (key: string, isSortable: boolean) => () => {
    if (!isSortable) return;
    setSortDescriptor((data) => {
      if (data?.column !== key) return { column: key, direction: "ascending" };
      return {
        column: key,
        direction: data?.direction === "ascending" ? "descending" : "ascending"
      };
    });
  };

  const sortedItems = React.useMemo(() => {
    return [...props.datas].sort((a: any, b: any) => {
      const first = a[sortDescriptor?.column as keyof any] as number;
      const second = b[sortDescriptor?.column as keyof any] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor?.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, props.datas]);

  React.useEffect(() => {
    if (selectedKeys === "all") {
      setSelectedData(props.datas);
      return;
    }
    const tempSelectedKey = Array.from(selectedKeys).map((data) => parseInt(data.toString()));

    const tempData = props.datas.filter((data) => tempSelectedKey.includes(data.id));

    setSelectedData(tempData);
  }, [selectedKeys]);

  const classNames = React.useMemo(
    () => ({
      // the wrapper/container table
      wrapper: ["bg-transparent p-0 max-w-full overflow-x-auto"],
      // header
      th: ["text-default-500", "border-b", "border-divider"],
      // column
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:first:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none"
      ],
      loadingWrapper: ["pt-24"]
    }),
    []
  );

  return (
    <Table
      aria-label="Table Custom"
      isStriped
      topContent={
        <div className="flex w-full flex-col gap-1">
          {props.topContent}
          {props.selectionMode && props.isRowPerPage && (
            <div className="flex w-full justify-between py-3">
              {props?.selectionMode === "multiple" ? (
                <span className="w-[30%] text-small text-default-400">
                  {selectedKeys === "all" || selectedKeys.size === props.datas.length
                    ? "All items selected"
                    : `${selectedKeys.size} of ${props.datas.length} selected`}
                </span>
              ) : (
                ""
              )}
              {props.isRowPerPage ? (
                <label className="flex items-center text-small text-default-400">
                  Rows per page:
                  <select
                    className="bg-transparent text-small text-default-400 outline-none"
                    value={rowsPerPage}
                    onChange={onRowsPerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              ) : null}
            </div>
          )}
        </div>
      }
      bottomContent={
        props.count > 0 &&
        props.onChangePages && (
          <PaginationCustom
            totalItems={props.count}
            initialPage={page}
            onChangePages={(activePage) => {
              const takeData = (activePage - 1) * rowsPerPage;

              props.onChangePages?.(takeData);
              setSelectedData([]);
              setPage(activePage);
            }}
            itemsPerPages={rowsPerPage}
          />
        )
      }
      topContentPlacement="outside"
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background"
        }
      }}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      sortDescriptor={sortDescriptor}
      onSortChange={(data) =>
        setSortDescriptor({
          column: data?.column,
          direction: data?.direction
        })
      }
      classNames={classNames}
      selectionMode={props?.selectionMode || "single"}>
      {props?.CustomHeader ? (
        props.CustomHeader
      ) : (
        <TableHeader columns={DEFAULT_COLUMNS}>
          {(column) => {
            const isSticky = column?.isStickyLeft || column?.isStickyRight;
            const stickyPosition = column?.isStickyLeft
              ? "stickyLeft"
              : column?.isStickyRight
                ? "stickyRight"
                : "";

            const childCol = column?.childrenCol && column?.childrenCol?.length > 0;
            const styleCol = childCol && isSticky ? {} : { width: `${column?.width}px !important` };

            return (
              <TableColumn
                key={column?.key}
                className={`${isSticky ? `stickyCol ${stickyPosition}` : ""}`}
                align={column?.key === "actions" ? "center" : "start"}
                allowsSorting={column?.isSortable}
                style={styleCol}>
                {column?.childrenCol && column?.childrenCol?.length > 0 ? (
                  <div className="childCol">
                    {column?.childrenCol.map((dataCol) => (
                      <div
                        className={`!flex !items-center !gap-2 !text-tiny ${
                          dataCol.isSortable ? "hover:cursor-pointer hover:text-gray-400" : ""
                        }`}
                        onClick={checkCurrentDirectionData(
                          dataCol.key,
                          dataCol?.isSortable || false
                        )}
                        style={{ width: dataCol.width }}
                        key={dataCol.key}>
                        {dataCol.name}
                        {sortDescriptor?.column === dataCol.key &&
                          (sortDescriptor?.direction === "ascending" ? (
                            <FontAwesomeIcon icon={faChevronUp} className="!text-[9px]" />
                          ) : (
                            <FontAwesomeIcon icon={faChevronDown} className="!text-[9px]" />
                          ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  column.name
                )}
              </TableColumn>
            );
          }}
        </TableHeader>
      )}
      <TableBody
        emptyContent={"No datas found"}
        items={sortedItems}
        isLoading={props.isLoading}
        loadingContent={<Spinner label="Loading..." color="primary" />}>
        {(item) => (
          <TableRow key={item?.id || item?.no || 0}>
            {(columnKey) => {
              const columnData = DEFAULT_COLUMNS?.find((data) => data?.key === columnKey);

              const isSticky = columnData?.isStickyLeft || columnData?.isStickyRight;
              const childCol = columnData?.childrenCol && columnData?.childrenCol?.length > 0;

              const stickyPosition = columnData?.isStickyLeft
                ? "stickyLeft"
                : columnData?.isStickyRight
                  ? "stickyRight"
                  : "";

              const styleCol =
                childCol && isSticky
                  ? {}
                  : {
                      width: `${columnData?.width}px !important`
                    };

              return (
                <TableCell
                  id={columnKey.toString()}
                  className={`${isSticky ? `stickyCol ${stickyPosition}` : ""}`}
                  style={styleCol}>
                  {isSticky && childCol ? (
                    <div className="childCol">
                      {columnData?.childrenCol?.map((dataChild) => {
                        return (
                          <div style={{ width: dataChild.width }} key={dataChild.key}>
                            {dataChild?.feature
                              ? dataChild.feature(item)
                              : item[dataChild.key]
                                ? item[dataChild.key]
                                : ""}
                          </div>
                        );
                      })}
                    </div>
                  ) : columnData?.feature ? (
                    columnData.feature(item)
                  ) : (
                    item[columnKey] && item[columnKey]
                  )}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
