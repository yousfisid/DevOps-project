const {expect} = require("chai");
const users = require("../src/controllers/users");

describe("Users", () => {
  describe("Create", () => {
    it("create a new user", done => {
      const user = {
        username: "sergkudinov",
        firstname: "Sergei",
        lastname: "Kudinov"
      };
      users.create(user, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.be.equal("sergkudinov");
        done();
      });
    });

    it("passing wrong user parameters", done => {
      const user = {
        firstname: "Sergei",
        lastname: "Kudinov"
      };
      users.create(user, (err, result) => {
        expect(err.toString()).to.be.equal("Error: Wrong user parameters");
        expect(result).to.be.equal(null);
        done();
      });
    });

    it("avoid creating an existing user", done => {
      const user = {
        username: "sergkudinov",
        firstname: "Sergei",
        lastname: "Kudinov"
      };
      users.create(user, (err, result) => {
        expect(err.toString()).to.be.equal("Error: This user exists");
        expect(result).to.be.equal(null);
        done();
      });
    });
  });

  describe("Get", () => {
    // TODO Create test for the get method
    it("get a user by username", done => {
      const username = "sergkudinov";
      users.get(username, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.contain({
          username: "sergkudinov",
          firstname: "Sergei",
          lastname: "Kudinov"
        });
        done();
      });
    });
  });
});
