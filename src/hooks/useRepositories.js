import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';


const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    return `Error: ${error.message}`;
  }

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;