<<<<<<< HEAD
const chai = require("chai")
const expect = chai.expect;
const context = require("../context/index");

global.document = {
  getElementById: () => ({
    addEventListener: () => {}
  })
}

global.$ = (() => ({
  on: () => {}
}));

chai.use(function(e, t) {
  e.Assertion.addMethod("withMessage", function(e) {
    t.flag(this, "message", e)
  })
});

describe("CONTEXT", () => {
  it("exerciseA", () => {
    const e = "global window object" == context.exerciseA();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseB", () => {
    const e = "global window object" == context.exerciseB();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseC", () => {
    const e = "el" == context.exerciseC();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseD", () => {
    const e = "global window object" == context.exerciseD();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseE", () => {
    const e = "global window object" == context.exerciseE();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseF", () => {
    const e = "instance of Hero" == context.exerciseF();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseG", () => {
    const e = "global window object" == context.exerciseG();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseH", () => {
    const e = "obj" == context.exerciseH();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseI", () => {
    const e = "poets" == context.exerciseI();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseJ", () => {
    const e = "el" == context.exerciseJ();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseK", () => {
    const e = "store" == context.exerciseK();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseL", () => {
    const e = "dog" == context.exerciseL();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseM", () => {
    const e = "robert" == context.exerciseM();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseN", () => {
    const e = "instance of Bird" == context.exerciseN();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseO", () => {
    const e = "global window object" == context.exerciseO();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it("exerciseP", () => {
    const e = "global window object" == context.exerciseP();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  })
=======
const { expect } = require('chai');
const context = require('../context/index');

describe('CONTEXT', () => {
  it('exerciseA', () => {
    const result = context.exerciseA();
    expect(result).to.equal('instance of Ship');
  });

  it('exerciseB', () => {
    const result = context.exerciseB();
    expect(result).to.equal('global window object');
  });

  it('exerciseC', () => {
    const result = context.exerciseC();
    expect(result).to.equal('el');
  });

  it('exerciseD', () => {
    const result = context.exerciseD();
    expect(result).to.equal('global window object');
  });

  it('exerciseE', () => {
    const result = context.exerciseE();
    expect(result).to.equal('global window object');
  });

  it('exerciseF', () => {
    const result = context.exerciseF();
    expect(result).to.equal('instance of Hero');  
  });

  it('exerciseG', () => {
    const result = context.exerciseG();
    expect(result).to.equal('global window object');
  });

  it('exerciseH', () => {
    const result = context.exerciseH();
    expect(result).to.equal('obj');
  });

  it('exerciseI', () => {
    const result = context.exerciseI();
    expect(result).to.equal('poets');
  });

  it('exerciseJ', () => {
    const result = context.exerciseJ();
    expect(result).to.equal('#btn');
  });
>>>>>>> a892def999634487870381704807829908d13bc1
});