import { useParams } from "react-router-dom";
import { GET_FOLDER } from "./getFolder.gql";
import { useQuery } from "@apollo/client";
import Row from "../../../components/elements/elements.types";
import Col from "../../../components/elements/Col";

interface FolderI {
  name: string
  id: string
}

const Folder = () => {
  const  { folderId } = useParams();
  const { loading, error, data } = useQuery(GET_FOLDER, {
    variables: { id: folderId },
    skip: !folderId,
  });

  const folder: FolderI = data?.getFolder;

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