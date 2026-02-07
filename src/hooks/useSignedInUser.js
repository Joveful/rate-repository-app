import { useQuery } from "@apollo/client/react";
import { GET_SIGNED_IN_USER } from "../graphql/queries";

const useSignedInUser = () => {
  const { data, loading, error } = useQuery(GET_SIGNED_IN_USER);

  if (error) {
    return `Error: ${error.message}`;
  }

  return { signedInUser: data?.me, loading };
};

export default useSignedInUser;