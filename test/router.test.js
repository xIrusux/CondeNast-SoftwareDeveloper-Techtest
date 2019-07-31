const supertest = require("supertest");
const tape = require("tape");
const router = require("../src/router");

tape("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "should equal 2");
  t.end();
});
