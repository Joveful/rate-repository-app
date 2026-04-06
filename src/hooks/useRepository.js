import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    return `Error: ${error.message}`;
  }

  return { repository: data?.repository, loading };
};

export default useRepository;