const user = { username: "xavier", password: "xavier" };
describe("blog app", function () {
  beforeEach(function () {
    cy.request("get", "http://localhost:3003/reset");
    localStorage.removeItem("token");
    cy.request("post", "http://localhost:3003/api/users", user);
  });

  describe("test login form", function () {});

  it("the application displays the login form by default", function () {
    cy.visit("localhost:3000");
    cy.contains(/login/);
  });

  it("user is logged when he types valid username and password", function () {
    cy.contains("login").click();

    cy.get("input[name=username").type(user.username);

    cy.get("input[name=password]").type(user.password);

    cy.get("input[type=submit]").click();

    cy.contains(`${user.username} logged in`);
    cy.contains("logout").click();
  });
  it("user is not logged when he types wrong username or password", function () {
    const userTest = { username: "wrong name", password: "xavier" };

    cy.contains("login").click();

    cy.get("input[name=username").type(userTest.username);

    cy.get("input[name=password]").type(userTest.password);

    cy.get("input[type=submit]").click();

    cy.contains("login");
  });

  it("when user type wrong username there is a notification in red", function () {
    const user = { username: "wrong name", password: "xavier" };

    cy.visit("http://localhost:3000");

    cy.contains("login").click();

    cy.get("input[name=username").type(user.username);

    cy.get("input[name=password]").type(user.password);

    cy.get("input[type=submit]").click();

    cy.contains("wrong username or password").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("login").click();
      cy.get("[data-id=login-form").as("form");
      cy.get("@form").get("input[name=username").type(user.username);
      cy.get("@form").get("input[name=password]").type(user.password);
      cy.get("@form").get("input[type=submit]").click();
    });

    it("user can create a blog", function () {
      const blog = {
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      };

     
      cy.contains(`${user.username} logged`);
      cy.contains("add note").click();
      cy.get("[data-id=blog-form]").as("blog-form");
      Object.keys(blog).forEach((name) => {
        cy.get("@blog-form").get(`input[name=${name}]`).type(blog[name]);
      });
      cy.get("@blog-form").get("input[type=submit]").click();

      cy.get(".blog").should("have.length",1)
      cy.contains("logout").click()
    });

    it("user can like a blog",function(){
      const blog = {
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
       
      };

     
      cy.contains(`${user.username} logged`);
      cy.contains("add note").click();
      cy.get("[data-id=blog-form]").as("blog-form");
      Object.keys(blog).forEach((name) => {
        cy.get("@blog-form").get(`input[name=${name}]`).type(blog[name]);
      });
      cy.get("@blog-form").get("input[type=submit]").click();

      cy.contains("show").click()
      cy.contains("likes").click()

     

    })
     
  });
});
