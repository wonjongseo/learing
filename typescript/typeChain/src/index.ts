import crpto from "crypto";

interface BlackShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlackShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;

    return crpto.createHash("sha256").update(toHash).digest("hex");
  }
}

const b = new Block("a", 1, "b");
