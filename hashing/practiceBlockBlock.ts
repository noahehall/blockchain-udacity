/**
 * Import crypto-js/SHA256 library
 */

import { SHA256 } from "crypto-js";
/**
 * Class with a constructor for block
 */
export class Block {
  id: number;
  nonce: number;
  body: any;
  hash: any;
  constructor(data: any) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  /**
   * Step 1. Implement `generateHash()`
   * method that return the `self` block with the hash.
   *
   * Create a Promise that resolve with `self` after you create
   * the hash of the object and assigned to the hash property `self.hash = ...`
   */
  //
  async generateHash() {
    // Use this to create a temporary reference of the class object
    let self = this;
    //Implement your code here
    self.hash = SHA256(JSON.stringify(this));

    return self;
  }
}
