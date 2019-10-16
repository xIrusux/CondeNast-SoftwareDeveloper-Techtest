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

tape("Return an error if the route is wrong", t => {
  supertest(router)
    .get("/unicorn")
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.end("");
    });
});

// tape("Search returns a status code of 200 and a JSON object", t => {
//   supertest(router)
//     .get("/search?fr")
//     .expect(200)
//     .expect("Content-Type", "application/json")
//     .end((err, res) => {
//       t.error(err);
//       t.end();
//     });
// });

// tape("Search returns a status code of 200 and any file in public folder", t => {
//   supertest(router)
//     .get("/public.css")
//     .expect(200)
//     .expect("Content-type", /css/)
//     .end((err, res) => {
//       t.error(err);
//       t.end();
//     });
// });
