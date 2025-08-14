import { useParams } from "react-router-dom";
import { GET_FOLDER } from "./getFolder.gql";
import { useQuery } from "@apollo/client";
import Row from "../../../components/elements/elements.types";
import Col from "../../../components/elements/Col";
import { useEffect, useState } from "react";

interface FolderI {
  name: string
  id: string
}

const Folder = () => {
  const [folder, setFolder] = useState<FolderI>();
  const  { folderId } = useParams();

  const { loading, error, data } = useQuery(GET_FOLDER, {
    variables: { id: folderId },
    skip: !folderId,
  });

  useEffect(() => {
    if (data?.getFolder) {
      setFolder(data.getFolder);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  if (!folder) return <>Folder not found!</>

  return (
    <>
      <Row>
        <Col><h2>{folder.name}</h2></Col>
      </Row>
    </>
  )
}

export default Folder;