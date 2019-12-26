const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//Contracts
const GameContract = artifacts.require("./GameContract.sol");

module.exports = async function(callback) {
  try {
    const accounts = await web3.eth.getAccounts()

    const gameContract = await GameContract.deployed()
    console.log(`Game Contract fetched`, gameContract.address)

    //Give tokens to account[1]
    const user1 = accounts[1]
    // const user1 = "0xb4Ee570738Eb8894D444105c9F8F8Fb0a57af531" //for testnet
    const user2 = accounts[2]
    const user3 = accounts[3]
    const user4 = accounts[4]
    const user5 = accounts[5]
    const user6 = accounts[6]
    const user7 = accounts[7]
    const user8 = accounts[8] 
    let gameId
    let hand
    let passward
    let depositAmount

    //create 1st game
    hand = 0
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 1st game from ${user1}`)
    await wait(1)

    //create 2nd game
    hand = 1
    passward = "passward"
    depositAmount = 2
    await gameContract.createGame(hand, passward, { from: user2, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 2nd game from ${user2}`)
    await wait(1)

    //create 3rd game
    hand = 1
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user2, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 3rd game from ${user2}`)
    await wait(1)

    //create 4th game
    hand = 2
    passward = "passward"
    depositAmount = 2
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 4th game from ${user1}`)
    await wait(1)

    //create 5th game
    hand = 0
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 5th game from ${user1}`)
    await wait(1)

    //create 6th game
    hand = 0
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 6th game from ${user1}`)
    await wait(1)

    //create 7th game
    hand = 1
    passward = "passward"
    depositAmount = 2
    await gameContract.createGame(hand, passward, { from: user2, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 7th game from ${user2}`)
    await wait(1)

    //create 8th game
    hand = 0
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 6th game from ${user1}`)
    await wait(1)

    //create 9th game
    hand = 1
    passward = "passward"
    depositAmount = 2
    await gameContract.createGame(hand, passward, { from: user2, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 7th game from ${user2}`)
    await wait(1)
    
    //create 10th game
    hand = 0
    passward = "passward"
    depositAmount = 1
    await gameContract.createGame(hand, passward, { from: user1, value: web3.utils.toWei(depositAmount.toString())})
    console.log(`Created 6th game from ${user1}`)
    await wait(1)

  } catch(error) {
    console.log(error)
  }

  callback()
} 