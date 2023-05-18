import { useState } from "react";
import { Review } from "../shared/interfaces";
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = { value: Review };

function AccordionItem({ value }: Props) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h4 className="text-xl sm:text-2xl">{value.title}</h4>
        {showInfo && <p className="mt-1 text-lg sm:text-xl">{value.info}</p>}
      </div>
      <div
        className="ml-1 cursor-pointer rounded-full bg-gray-200 p-2 text-base text-red-500 sm:text-lg"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  );
}

export default AccordionItem;
