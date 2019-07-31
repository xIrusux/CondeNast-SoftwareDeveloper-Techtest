const supertest = require("supertest");
const tape = require("tape");
const router = require("../src/router");

tape("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "should equal 2");
  t.end();
});

tape("Home route returns a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
