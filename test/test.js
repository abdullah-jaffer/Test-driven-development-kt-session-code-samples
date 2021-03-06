const expect = require("chai").expect;
const fizzBuzz = require("../index");
const postAPI = require("../service");
const mockServer = require("../mockAdapter");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe("FizzBuzz unit tests", () => {
  it("Should return same string", () => {
    expect(fizzBuzz(2)).to.equal("2");
  });
  it("Should return Fizz", () => {
    expect(fizzBuzz(3)).to.equal("Fizz");
  });
  it("Should return Buzz", () => {
    expect(fizzBuzz(5)).to.equal("Buzz");
  });
  it("Should return Buzz", () => {
    expect(fizzBuzz(15)).to.equal("FizzBuzz");
  });
});

describe("API unit tests", () => {
  it("has two results", async () => {
    const posts = await postAPI();
    expect(posts.length).to.equal(2);
  });

  it("empty response", async () => {
    mockServer.mockConfig.emptyNextRequest = true;
    const posts = await postAPI();
    expect(posts.length).to.equal(0);
  });
});
