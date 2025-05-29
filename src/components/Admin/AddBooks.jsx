import React, { useRef } from 'react'
import "../../assets/styles/addbook.css"
import { useNavigate } from 'react-router-dom'
const AddBooks = () => {
    let formData = useRef()
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let newBook = {
            title: formData.current[0].value,
            isbn:formData.current[1].value,
            pageCount:formData.current[2].value,
            thumbnailUrl:formData.current[3].value,
            shortDescription:formData.current[4].value,
            longDescription:formData.current[5].value,
            status: formData.current[6].value,
            authors:[formData.current[7].value],
            categories:[formData.current[8].value]

            
        }
        // console.log("New book data " , newBook);

        fetch(`http://localhost:4000/books` , {
            method:'POST' ,
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(newBook)
        })

        alert("Book is added successfully!");
        formData.current.reset();
        navigate(`/adminportal/books`)
      
    }
  return (
   <>
   <div className='addbook'>
    <div className='addbook-header'>
        <h2>Add New Book</h2>
    </div>
    <div className='addbook-container'>
        <div className='addbook-form-box'>
            <form ref={formData} onSubmit={handleSubmit}>
                <input  type='text' placeholder='Enter Book Title'/>
                <input type='text' placeholder='Enter Reg no'/>
                <input type='number' placeholder='Enter PageCount'/>
                <input type='text' placeholder='Enter Image Url '/>
                <input type='text' placeholder='Enter Short Description'/>
                <input type='text' placeholder='Enter Long Description'/>
                <input type='text' placeholder='Enter Status'/>
                <input type='text' placeholder='Enter Categories'/>
                <input type='text' placeholder='Enter Author Name'/>
                <br/>
                <button onClick={handleSubmit} >Add Book</button>

            </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default AddBooks;
