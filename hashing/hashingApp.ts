import { SHA256 } from "crypto-js";

const data1 = "Blockchain Rock!";
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3),
};

function generateHash(data: string | Record<string, unknown>) {
  // Write your code here
  return SHA256(JSON.stringify(data));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);

/**
 * Run your application using `node app.js`
 */
