import instance from '../api/apiConfig';
import {useEffect ,useState} from 'react';
import BookCard from '../components/CardComponent'

const HomePage = () => {
const [books, setBooks] = useState([]);
const [book, setBook] = useState([]);
const [searchBook, setSearchBook] = useState('');


useEffect(() =>{
    fetchBooks();
},[])
useEffect(() =>{ 
        const bookFound = book.filter((b) =>{
            return (        
             b.name.toLowerCase().includes(searchBook.toLowerCase())
            )
        });

        console.log(bookFound);
        
         searchBook === ""?setBooks(book): setBooks(bookFound);
        
},[searchBook])



const getBooks = async () =>{
   
    try{
        let {data} = await instance.get('/books');
        setBooks(data);
    }
    catch (e){
        console.log(e)
    }
   
}
const fetchBooks = async () =>{
    try{
        let {data} = await instance.get('/books');
        setBook(data);
    }
    catch (e){
        console.log(e)
    }
   
}



const handleChange = (e) =>{
    setSearchBook(e.target.value)
}


    return (
        <div className="">
            <h1 className="font-weight-bold mt-3 text-center">
                Game of Thrones Book List!
            </h1>
            <div className="text-center">
                <button className="btn btn-dark btn-lg mt-2" 
                        onClick= {getBooks}
                    >
                        Show
                </button>
            </div>
            < div className="text-center">
                    <div className="mt-4 form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="search..."
                        value={searchBook}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {(books.map((b,i) =>{
                            return(
                                <BookCard key={i} book={b}/>
                            )
                        }))}
                    </div>
            </div>
        </div>
    )
}

export default HomePage