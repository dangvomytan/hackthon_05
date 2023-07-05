import React from 'react'
import { Container } from 'react-bootstrap'

const Form = () => {
     return (
          <Container>
               <div className='form_note'>
               <div className='form_content'>
                    <div className='form_title'>
                         <input type="text" disabled placeholder='Title'/>
                    </div>
                    <div className='form_comment'>
                         <textarea >

                         </textarea>
                    </div>
               </div>
               <div>
                    <button className='btn_add'>
                         <b>+</b>
                    </button>
               </div>
               </div>
          </Container>

     )
}

export default Form