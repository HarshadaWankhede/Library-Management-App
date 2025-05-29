import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../assets/styles/readbook.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ReadBooks = () => {
    let params = useParams();
    let bookId = params.id;
    const loc = useLocation();
    const navigate = useNavigate(); 
    const viewcart = loc.pathname.startsWith(`/adminportal`);

    let [singleBook, setSingleBook] = useState({});
    let [cartbool, setBool] = useState(true);  // Initially, the longDescription is hidden
    let [isFavorited, setIsFavorited] = useState(false);  //  New State for heart icon


    let fetchBook = async () => {
        let respApi = await fetch(`http://localhost:4000/books/${bookId}`);
        let book = await respApi.json();
        setSingleBook(book);
    };

    useEffect(() => {
        fetchBook();
    }, [bookId]);

    // Destructuring book data
    let { title, isbn, pageCount, thumbnailUrl, status, authors, categories, shortDescription, longDescription } = singleBook;

    let handlereadmore = () => {
        setBool(!cartbool);  // Toggle the Read More/Read Less state
    };

    // Updated backbtn function using navigate hook
    let backbtn = () => {
        if (viewcart) {
            navigate(`/adminportal/books`); 
        } else {
            navigate(`/userportal/books`); 
        }
    };

    let addtoCart = () => {
        if (!isFavorited) {
        let cartbool = window.confirm(`Do you want to add "${title}" book to cart ?`);

        if (cartbool) {
            fetch(`http://localhost:4000/cartitem`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(singleBook),
            });
            alert(`"${title}" book is added to cart`)
            setIsFavorited(true);
        } else {
            alert(`"${title}" was not added.`);
        }
    }
    };

    return (
        <>
            <div className="readbook">
                <div className="readbook-header">
                    <h1>{title}</h1>
                </div>

                <div className="readbook-card">
                    <div className="readbook-img">
                        <img src={thumbnailUrl} alt="Book Cover" />
                        <div className="readbook-title">{title}</div>
                    </div>
                    <div className="readbook-details">
                        <div className="readbook-details-box">
                        <div className="isbn-row">
                        {!viewcart && ( isFavorited ? (
                            <FavoriteIcon onClick={addtoCart} style={{ fontSize: '2rem', color: 'red', cursor: 'pointer' ,  marginLeft: '90%' , marginBottom:"2%"}} />
                        ): (
                            <FavoriteBorderOutlinedIcon
                                        onClick={addtoCart}
                                        style={{ fontSize: '2rem', color: 'black', cursor: 'pointer', marginLeft: '90%', marginBottom: '2%' }}/>
                        )
                       
                        )}                
                            <div><span className="isbn">ISBN :</span> {isbn}</div>
                          
                           
                        </div>
                            <div><span className="pagecount">Page Count : </span> {pageCount}</div>
                            <div><span className="status">Status :</span>  {status}</div>
                            <div><span className="authors">Authors :</span>  {authors}</div>
                            <div><span className="categories">Category :</span>  {categories}</div>

                            <p className="short-description">{shortDescription}</p>

                            <div className="longDescription">
                                {/* 'Read More' button */}
                                <label htmlFor="read-more" className="read-more-btn" onClick={handlereadmore}> 
                                    {cartbool ? 'Read More ↓' : 'Read Less ↑'}
                                </label>

                                {/* Conditionally render longDescription based on cartbool */}
                                {!cartbool && (
                                    <p>{longDescription}</p>
                                )}
                            </div>

                                <label className="back-btn" onClick={backbtn}>
                                    ← Back
                                </label>
                            

                            {/* Display Favorite Icon only in user portal */}
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReadBooks;
