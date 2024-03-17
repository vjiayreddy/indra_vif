import React from "react";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import FirebaseAuthProvider from "@crema/services/auth/firebase/FirebaseAuthProvider";

type Props = {
  children: React.ReactNode;
};
const AppAuthProvider = ({ children }: Props) => {
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();

  return (
    <FirebaseAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
    >
      {children}
    </FirebaseAuthProvider>
  );
};

export default AppAuthProvider;
