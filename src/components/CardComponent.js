const BookCard = ({book}) => {
    
    return (
        <div>
            <div className="card mt-3" style= {{width: "23rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text"> <span className="fw-bold"> Author:</span> {book.authors.map((creator,i) =>{
                        return (
                            creator
                        )
                    })}</p>
                    <p  className="card-text">  <span className="fw-bold">Pages:</span> {book.numberOfPages}</p>
                    <p className="card-text"> <span className="fw-bold"> Country:</span> {book.country}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard