const movementRepository = require('../repositories/movement.repository')

const movementService = {
    getMovementByAccountId: async (accountId) => {
        return await movementRepository.getMovementByAccountId(accountId)
    }
}

module.exports = movementService