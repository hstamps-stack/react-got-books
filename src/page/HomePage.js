import instance from '../api/apiConfig';
import {useState} from 'react';

const HomePage = () => {
const [books, setBooks] = useState([]);

console.log(books);

const getBooks = async () =>{
    try{
        let {data} = await instance.get('/books');
        setBooks(data);
    }
    catch (e){
        console.log(e)
    }
   
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
                <div className="mt-4 input-group">
                    <input type="text" 
                     className="form-control" 
                     placeholder="search..."
                    />
                </div>
        </div>
    )
}

export default HomePage