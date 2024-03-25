const fs = require("fs");

fs.readdir("./data", async function (err, files) {
    if (err) return console.error(err);
    if (files.length > 0) {
        let json;
        for (json = 0; json < files.length; json++) {
            if (files[json].endsWith(".json")) {
                let content = fs.readFileSync("./data/" + files[json], "utf8");
                JSON.parse(content);
            }
        }
    }
});