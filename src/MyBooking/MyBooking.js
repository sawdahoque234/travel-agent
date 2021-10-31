import React,{useEffect,useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './MyBooking.css'


const MyBooking = () => {
    const { bookId} = useParams();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://macabre-chupacabra-39951.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [bookId])
    

    const handledelete = book => {
        const url = `https://macabre-chupacabra-39951.herokuapp.com/${book}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('deleted successfully!!!')
            const remaining=books.filter(book=>book._id !==book)
            setBooks(remaining)
            window.location.reload();
        }
    })

}
    return (
<div className="mybooking">
            <h1>My Booking </h1>
            
            {
                books.map(book =>
                    <div key={book._id}
                >
                        <Row className="border-3 shadow-lg rounded-3 py-3 mb-3">
                            <Col xs={4}>
                    <img src={book.book.img} className="w-75 rounded-2"  alt="" />
                            </Col>
                            <Col xs={4}>
                    <h3 className="text-primary">{book.book.name}</h3>
                    <h5>Cost: $ {book.book.price}</h5>
                    <h5 className="text-danger">Duration:  {book.book.duration}</h5>
                            </Col>
                            <Col xs={2} className="mt-5">
                            <button className="btn btn-primary mx-2">Update</button>
                    <button className="btn btn-danger" onClick={()=>handledelete(book._id)}>Delete</button>
                            </Col>
                   </Row>
                </div>)
            }
            </div>
    );
};

export default MyBooking;