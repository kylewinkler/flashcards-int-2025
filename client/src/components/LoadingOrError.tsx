import type { ApolloError } from "@apollo/client";

interface LoadingOrErrorProps {
  error:  ApolloError | undefined,
  loading: boolean
}

const LoadingOrError = ({ loading, error }: LoadingOrErrorProps) => {

  if (error) return <p>{error.message}</p>
  if (loading) return <p>loading...</p>

  return null;
}

export default LoadingOrError;