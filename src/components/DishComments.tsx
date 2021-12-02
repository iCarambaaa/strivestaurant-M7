import ListGroup from 'react-bootstrap/ListGroup'
import Pasta from '../interfaces/pasta'

interface DishCommentsProps {
    pasta: Pasta
}

const DishComments = ({pasta}: DishCommentsProps) => (
  <ListGroup>
    {pasta ? (
      pasta.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
