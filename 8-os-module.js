const os = require('os')

// show user inforeactjs code

const user = os.userInfo()
console.log(user);


//method returns the uptime of the system in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    osType: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOs);