const redis = require('redis')
const movementRepository = require('../repositories/movement.repository')
 
const client = redis.createClient({
    url: process.env.DB_REDIS_URL
})
client.connect();
client.on('error', function (err) {
    console.log('Error ' + err)
})
 
 
const movementService = {
    getMovementByAccountId: async (accountId) => {
        const key = `key-movement-${accountId}`
        const reply = await client.get(key)
        if (reply === null) {
            console.log('Register information in redis')
            var result = await movementRepository.getMovementByAccountId(accountId)
            await client.set(key, JSON.stringify(result), 'EX', 30)
            return result
        }
        else {
            console.log('Showing redis information')
            return JSON.parse(reply)
        }
    }
}
 
 
// const movementService = {
//     getMovementByAccountId: async (accountId) => {
//         return await movementRepository.getMovementByAccountId(accountId)
//     }
// }
 
module.exports = movementService