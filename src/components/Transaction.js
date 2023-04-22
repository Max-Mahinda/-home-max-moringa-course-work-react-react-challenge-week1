import {FaTimes} from 'react-icons/fa'
import Card from 'react-bootstrap/Card';


const transaction = ({transaction, onDelete, ontoggle}) => {
    return (
        <div className= {`Transaction ${transaction.category ? 'reminder' : '' } `} onDoubleClick={() => {
            ontoggle(transaction.id)
        }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                        <Card.Text><h3>{transaction.date} </h3></Card.Text>
                        <Card.Text><h3>{transaction.amount}</h3> </Card.Text>
                        <Card.Text><h3>{transaction.description}</h3></Card.Text>
                        <h3>{transaction.category}</h3>
                </Card.Body>
           </Card>
        </div>
    )
}

export default transaction