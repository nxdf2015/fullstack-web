const {} = require("jest");

const blogs = require("../data")
const helper = require("../list_helper");

test("dummy always return 1", function () {
  expect(helper.dummy()).toBe(1);
});

describe("test with likes", function () {
  test("i receive number of likes", function () {
    expect(helper.countLike(blogs)).toBe(36);
  });

  test("find blog with most likes", function () {
    expect(helper.findMost(blogs)._id).toBe("5a422b3a1b54a676234d17f9");
  });


  test("find author with most blog",function(){
      expect(helper.findAuthor(blogs)).toEqual({
        author: "Robert C. Martin",
        blogs: 3
      })
  })

  test("find author with most blog",function(){
      expect(helper.findLike(blogs)).toEqual({
        author: "Edsger W. Dijkstra",
        likes: 17
      })
  })
});



