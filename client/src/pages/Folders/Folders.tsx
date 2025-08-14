import { Link } from "react-router-dom";
import Col from "../../components/elements/Col";
import Row from "../../components/elements/elements.types";
import LoadingOrError from "../../components/LoadingOrError";
import { useQuery } from "@apollo/client";
import { GET_FOLDERS } from "./getFolders.gql";

interface FolderI {
  name: string;
  id: string;
}

const Folders = () => {
  const { loading, error, data } = useQuery(GET_FOLDERS);
  const folders: FolderI[]  = data?.getFolders ?? [];
  console.log(data)

  if (loading || error) return <LoadingOrError loading={loading} error={error} />
  if (folders.length === 0) return <>No Cards Exist</>

  return (
    <>
      <Row>
        <Col><Link to='create'>Create</Link></Col>
      </Row>
      <Row>
        {folders.map((folder, i) => (
          <Col sm={6} md={4} lg={3} key={i}>
            <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Folders;