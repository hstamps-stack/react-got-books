const HomePage = () => {
    return (
        <div className="text-center">
            <h1 className="font-weight-bold mt-3">
                Game of Thrones Book List!
            </h1>
            <form>
                <button className="btn btn-dark btn-lg mt-2" >
                    Show
                </button>
                <div className="mt-4 input-group">
                    <input type="text" 
                     className="form-control" 
                     placeholder="search..."
                    />
                </div>
            </form> 
        </div>
    )
}

export default HomePage