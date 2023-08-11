import React, { useContext } from "react";
import useCompanies from "./hooks/useCompanies";
import usePeople from "./hooks/usePeople";
import useProducts from "./hooks/useProducts";

const initialState = {};

const AppContext = React.createContext(initialState);

export function AppContextProvider(props) {
  const companiesEntity = useCompanies();
  const peopleEntity = usePeople();
  const productsEntity = useProducts();

  const context = {
    companiesEntity,
    peopleEntity,
    productsEntity,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
