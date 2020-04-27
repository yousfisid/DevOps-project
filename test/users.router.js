const app = require("../src/index");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Users REST API", () => {
  describe("POST /user", () => {
    it("create a new user", done => {
      const user = {
        username: "sergei",
        firstname: "Sergei",
        lastname: "Kudinov"
      };
      chai
        .request(app)
        .post("/user")
        .send(user)
        .then(res => {
          console.log("RES =" + res);
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.username).to.equal("sergei");
          chai.expect(res).to.be.json;
          console.log("RES =" + res);
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  });

  describe("GET /user", () => {
    // TODO Create test for the get method
    it("gets a user", done => {
      const username = "sergei";
      chai
        .request(app)
        .get(`/user/${username}`)
        .then(res => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.contain({
            username: "sergei",
            firstname: "Sergei",
            lastname: "Kudinov"
          });
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  });
});
