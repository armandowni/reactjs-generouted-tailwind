import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

declare type PaginationProps = {
  totalItems: number;
  onChangePages: (numberPage: number) => void;
  itemsPerPages: number;
  initialPage: number;
};

export default function PaginationCustom(props: React.PropsWithChildren<PaginationProps>) {
  const [dataShowing, setDataShowing] = useState({
    from: 1,
    to: props.initialPage * props.itemsPerPages
  });
  const [initialPage, setInitialPage] = useState(props.initialPage);

  useEffect(() => {
    setInitialPage(props.initialPage);
    const from = (props.initialPage - 1) * props.itemsPerPages + 1;
    const to = Math.min(props.initialPage * props.itemsPerPages, props.totalItems);
    setDataShowing({
      from: isNaN(from) ? 0 : from,
      to: isNaN(to) ? 0 : to
    });
  }, [props.initialPage, props.itemsPerPages, props.totalItems]);

  const itemsPerPages = props?.itemsPerPages || 25;
  const totalPages = Math.ceil(props.totalItems / itemsPerPages);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-sm md:text-base">
        <span>Show</span>
        <span className="font-bold">{dataShowing.from}</span>
        <span>to</span>
        <span className="font-bold">{dataShowing.to}</span>
        <span>of</span>
        <span className="font-bold">{props.totalItems}</span>
        <span>Data</span>
      </div>
      <div className="flex items-center justify-center gap-3 text-sm md:hidden">
        <button
          type="button"
          disabled={initialPage <= 1}
          onClick={() => props.onChangePages(initialPage - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            value={initialPage}
            className="max-w-[40px] bg-transparent outline-none"
            onChange={(e) => props.onChangePages(parseInt(e.target.value))}
          />
          <span>of</span>
          <span>{totalPages}</span>
        </div>
        <button
          type="button"
          disabled={initialPage >= totalPages}
          onClick={() => props.onChangePages(initialPage + 1)}>
          <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </button>
      </div>
      <Pagination
        className="hidden md:block"
        isCompact
        showControls
        showShadow
        dotsJump={2}
        total={totalPages}
        initialPage={1}
        page={initialPage}
        onChange={props.onChangePages}
      />
    </div>
  );
}
