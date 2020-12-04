import React from 'react'
import { render ,screen , fireEvent } from "@testing-library/react"
import Blog from "../components/Blog"

let Component 
const handleLikes = jest.fn();

beforeEach(function(){
  const deleteBlog = jest.fn();
  const blog = {"title": "Type wars",
  "author": "Robert C. Martin",
 "url": "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  "likes": 2,
user:{
    name : "xavier"
}}
    Component = render(<Blog blog={blog} handleLikes={handleLikes} deleteBlog={deleteBlog}/>)
})

describe("display a blog",function(){
  test ("render author",function(){
     Component.queryByText("Robert C. Martin")
       
  })
  test ("render title",function(){
      Component.queryByText("Type wars")
  })

  test("do render likes",function(){
      expect(Component.queryByText(/likes/i)).toBeNull()
  })

  test("do not render url",function(){
    expect(Component.queryByText(/http:\/\/.+/)).toBeNull()
  })

   
})



describe("render blog when show button is clicked",function(){
    
    test("when show button is clicked likes is visible",function(){
        const Button = Component.queryByText(/show/i)
        fireEvent.click(Button)

        expect(Component.queryByText(/likes/)).toBeInTheDocument()
    })

    test("when show button i clicked url is visible",function(){
        const Button = Component.queryByText(/show/i)
        fireEvent.click(Button)

        expect(Component.queryByText(/http:\/\/.+/)).toBeInTheDocument()
    })
})

describe("when details is visible",function(){
    test("when likes button is click twice the event handler is ",function(){

        const Button = Component.queryByText(/show/)
        fireEvent.click(Button)
        const btnLike = Component.queryByText(/likes/)
        fireEvent.click(btnLike)
        fireEvent.click(btnLike)
        expect(handleLikes.mock.calls.length).toBe(2)
    })
})