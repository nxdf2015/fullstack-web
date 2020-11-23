const blogs = require("./data")

const dummy = (blogs ) => 1



const countLike = (blogs) => blogs.reduce((acc,blog) => acc + blog.likes , 0)


const findMost = blogs => blogs.reduce((most,blog) => (most.likes || 0) < blog.likes ? blog : most , {})

const findAuthor = blogs => {
   const authors =  blogs.reduce((count,blog) => ({...count ,[blog.author] : (count[blog.author] || 0) + 1 }), {} )
   
   const mostBlog = Math.max(...Object.values(authors))

   const [author , most  ] =  Object.entries(authors).find(([author,count]) => count === mostBlog )
   
   return  {author,blogs : most }
   
}

const findLike = blogs => {
   const likes =  blogs.reduce((most , blog) => ({...most , [blog.author]: ( most[blog.author] || 0)  + blog.likes }),{})

   const mostLikes = Math.max(...Object.values(likes))

   const [author , most   ] =  Object.entries(likes).find(([author,count]) => count === mostLikes )

   
   return {author , likes : most}
}

module.exports = {dummy,countLike , findMost , findAuthor, findLike}