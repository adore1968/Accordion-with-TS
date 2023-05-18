import { useAppContext } from "../hooks/AppContext";
import AccordionItem from "../components/AccordionItem";

function AccordionList() {
  const { reviews } = useAppContext();
  return (
    <div className="flex min-w-min max-w-6xl flex-auto flex-col gap-5 rounded bg-white p-5 sm:flex-row">
      <h1 className="mb-5 text-2xl sm:mb-0 sm:text-4xl">
        Questions And Answers About Login
      </h1>
      <div>
        {reviews.map((value) => (
          <AccordionItem key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
}

export default AccordionList;
