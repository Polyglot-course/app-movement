const logProvider = require('../middlewares/logprovider')
const movementService = require('../services/movement.service')

const getMovementByAccountId = async (req, res) => {
    logProvider.info('Get Movement By AccountId');
    const accountId = parseInt(req.params.accountId)
    return res.send(await movementService.getMovementByAccountId(accountId))
}


module.exports = { getMovementByAccountId }