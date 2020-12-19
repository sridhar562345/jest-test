const child_process = require("child_process");
const fs = require("fs");
// set lib64 folder
// process.env.LD_LIBRARY_PATH = "/tmp/lib64:$LD_LIBRARY_PATH";
exports.handler = async function (event) {
   const promise = new Promise((resolve, reject) => {
      try {
         child_process.execSync("cp -r . /tmp/", {
            stdio: "inherit",
         });
         child_process.execSync(
            "cd /tmp && cp -r js-assignment/src/* testing-folder/src/",
            {
               stdio: "inherit",
            }
         );
         //child_process.execSync("cd testing-folder && npm install", {
         //stdio: "inherit"
         //});
         child_process.execSync("cd /tmp/testing-folder && npm test", {
            stdio: "inherit",
         });
         const results = fs.readFileSync("/tmp/testing-folder/output.json");
         const parsedResults = JSON.parse(results);
         resolve(parsedResults);
      } catch (err) {
         reject(err);
      }
   });
   return await promise;
};
