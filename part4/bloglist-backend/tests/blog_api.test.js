const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const data = require("../data");
const { Blog } = require("../models/blog");
const { response } = require("express");

const server = request(app);

beforeEach(async () => {
 await  Blog.deleteMany({})
  const blogs = data.map((blog) => new Blog(blog).save());

   Promise.all(blogs);
});

describe("test api/blogs route", function () {
  test("i receive status 200",   function () {
   return   server.get("/api/blogs").expect(200) ;
  });
  test("in the body i receive 6 blogs",   function () {
     return server
      .get("/api/blogs")
      .expect(200)
      .expect((response) =>  response.body.length === 6);
  });

  test("the unique identifier of the blog is name id",function(){
       return server
       .get("/api/blogs")
       .expect(200)
       .expect(response => expect(response.body[0].id).toBeDefined())
  })
});

describe("creation blogs",function(){
    

    
    
    
    test("when i create a blog there is one more blog in the db",function(){
        
        const blog = {
            title: "a new blog ",
            author: "Robert C. Martin",
            url: "http://blog.cleancode",
            likes: 2,
          }
        return   server
          .post("/api/blogs")
          .set("content-type","application/json")
          .send(blog)
          .then(() => {
             return  server
              .get("/api/blogs")
              .expect(200)
              .expect(response => expect(response.body.length).toBe(7) )
             

          })
    })

    test("create a blog without like",function(){
        const blog = {
            title: "a new blog ",
            author: "Robert C. Martin",
            url: "http://blog.cleancode",
            
          }

        return   server
        .post("/api/blogs")
        .set("content-type","application/json")
        .send(blog)
        .then((response) => {
        const id = response.body.id
        return  server
            .get(`/api/blogs/${id}`)
            .expect(200)
            .expect(response => expect(response.body.likes).toBe(0)  )
    })
    })

    test("create a blog without title and url",function(){
        const blog = {
            
            author: "Robert C. Martin",
            
            
          }

        return   server
        .post("/api/blogs")
        .set("content-type","application/json")
        .send(blog)
        .expect(400)
    })

})

afterAll(() => {
  mongoose.connection.close();
})
