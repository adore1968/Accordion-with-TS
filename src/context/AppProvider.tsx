import { useState } from "react";
import { AppContext } from "../hooks/AppContext";
import data from "../data/data";
import { Review } from "../shared/interfaces";

type Props = { children: JSX.Element };

export function AppProvider({ children }: Props) {
  const [reviews, setReviews] = useState<Review[]>(data);
  return (
    <AppContext.Provider value={{ reviews }}>{children}</AppContext.Provider>
  );
}
