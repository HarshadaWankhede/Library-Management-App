import React, { useState, useEffect } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {

    let [books,setBooks] = useState([])
    let navigatereadbooks = useNavigate() 
    let location = useLocation()
    let bool = location.pathname.startsWith(`/adminportal`)

    useEffect(() => {
        fetchApi();
    }, []);

    let fetchApi = async ()=>{       
        let booksAPI = await fetch(`http://localhost:4000/books`)
        let responseData = await booksAPI.json()
        setBooks(responseData);
    }

    let ReadBooks = (id) => {
        bool 
            ? navigatereadbooks(`/adminportal/readbook/${id}`)
            : navigatereadbooks(`/userportal/readbook/${id}`)
    }

    let DeleteBooks = (id, title) => {
        let confirmDelete = window.confirm(`Do you want to delete "${title}"?`);
        if (confirmDelete) {
            fetch(`http://localhost:4000/books/${id}`, { method: `DELETE` })
            .then(() => alert(`"${title}" deleted successfully!`));
        } else {
            alert(`"${title}" was not deleted.`);
        }
    }

    let addtocart = (book) => {
        let confirmAdd = window.confirm(`Do you want to add "${book.title}" to Cart?`);
        if (confirmAdd) {
            let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            let alreadyAdded = existingCart.find(item => item.id === book.id);
            if (alreadyAdded) {
                alert(`"${book.title}" is already in the cart!`);
            } else {
                existingCart.push(book);
                localStorage.setItem('cart', JSON.stringify(existingCart));
                alert(`"${book.title}" added to cart successfully!`);
                navigatereadbooks(`/userportal/cart`);
            }
        } else {
            alert(`${book.title} was not added.`);
        }
    }

    return (
        <div className="books">
            <div className="book-header">
                <h1>Books</h1>
            </div>
            <div className="book-container">
                {
                    books.map((elem) => {
                        let { id, title, thumbnailUrl, authors } = elem;

                        return (
                            <div className="book-card" key={id}>
                                <div className="book-image">
                                    <a href={thumbnailUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={thumbnailUrl} alt={title} />
                                    </a>
                                </div>
                                <div className="book-title">{title}</div>
                                <div className="book-authors">({authors})</div>
                                <div className="book-btns">
                                    <button className='book-read-books' onClick={() => ReadBooks(id)}>Read Book</button>
                                    {
                                        bool 
                                        ? <button className='book-delete-books' onClick={() => DeleteBooks(id, title)}>Delete</button>
                                        : <></>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books
