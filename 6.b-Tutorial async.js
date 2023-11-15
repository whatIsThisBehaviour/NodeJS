const {readFile, writeFile} = require("fs");
console.log("Starting A task");

readFile("./onefile.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
        return
    }
    const firstFile = data;
    readFile("./twofile.txt", "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            return
        }
        const secondFile = data;
        writeFile("./hellonewTest.txt", 
        "This is yet another self attempt to learn the write file system module in nodejs.", 
        (error, data) => {
            if (error) {
                console.log(error);
            }
            console.log("Done with the first file");
        });
    });
    console.log("Moving towards next file...");
});
console.log("Bring new files...3...2...1...Loading");
