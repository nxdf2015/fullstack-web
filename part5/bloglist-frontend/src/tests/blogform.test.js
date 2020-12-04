import React from 'react'
import { render , fireEvent, wait, waitFor } from "@testing-library/react"
import AddBlog  from "../components/AddBlog"



 


describe("create a blog whe user is logged", function(){
    test("when i create a blog handler is call with the right details",async function(){
        
        let Create
        let handler = jest.fn()
        const submit = jest.fn()
        
        const blog = {"title": "Type wars",
          "author": "Robert C. Martin",
         "url": "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
           
       }

        Create = render(<AddBlog  notify={handler} 
          
           logged={true}
           setUpdate={handler}
           setVisible={handler}
           submit={submit}/>)
           
           const form = Create.container.querySelector('#create-form').elements
           const bntSubmit = Create.container.querySelector("input[type=submit]")
       
           await wait(() => {
               fireEvent.change(form.title ,{ target : { value : blog.title } })
               fireEvent.change(form.author, { target : { value : blog.author } })
               fireEvent.change(form.url,{ target : { value : blog.url } })
               fireEvent.submit(bntSubmit)

           })

           

  

           
        
 

            expect(submit.mock.calls.length).toBe(1)
            expect(submit.mock.calls[0][0]).toMatchObject(blog)
        
    })
})