import { expect } from "chai";
import { NumberList } from "./NumberList";

describe("construction", () => {
  it("(1) constructs with value specified", () => {
    const args = {
      value: 2
    };

    expect(new NumberList(args)).to.be.an("object");
  });

  it("(1) constructs with value and next specified", () => {
    // 2. Test code here
  });
});
