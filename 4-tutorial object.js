const os = require("os");
const userInfo = os.userInfo();
console.log(userInfo)
const runTime = os.uptime();
console.log(`The uptime is ${runTime} SECONDS`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(currentOS);