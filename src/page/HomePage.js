import instance from '../api/apiConfig';
import {useEffect ,useState} from 'react';

const HomePage = () => {
const [books, setBooks] = useState([]);
const [searchBook, setSearchBook] = useState('');

console.log(books)
useEffect(() =>{ 
    if(books.length){
        const bookFound = books.filter((b) =>{
            return (        
             b.name.toLowerCase().includes(searchBook.toLowerCase())
            )
        });
        
         setBooks(bookFound)

 
    }
        
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

const handleChange = (e) =>{
    setSearchBook(e.target.value)
}


    return (
        <div className="text-center">
            <h1 className="font-weight-bold mt-3">
                Game of Thrones Book List!
            </h1>
            <button className="btn btn-dark btn-lg mt-2" 
                    onClick= {getBooks}
                >
                    Show
            </button>
            <form action="">
                    <div className="mt-4 form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="search..."
                        value={searchBook}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        {books.length > 0? (books.map((b,i) =>{
                            return(
                                <p key={i}>{b.isbn}</p>
                            )
                        })): null}
                    </div>
            </form>
        </div>
    )
}

export default HomePage