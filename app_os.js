const os=require('os')
//info about current user
const user=os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)
//Uptime = how long the computer has been running since the last boot/restart.
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
//total memory and remaining memory is generated in bytes