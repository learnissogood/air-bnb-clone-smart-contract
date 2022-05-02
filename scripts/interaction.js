require('dotenv').config();
const ethers = require('ethers');
const airBnbAbi = require('../artifacts/contracts/AirBNB.sol/AirBNB.json');

const url = process.env.ALCHEMY_MUMBAI_URL;
const provider = new ethers.providers.JsonRpcProvider(url);

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const airBnbContract = "0xfDF9b6d434E39832b9349D3A9b39247b7e00425F";
const abi = airBnbAbi.abi;

const airBnb = new ethers.Contract(airBnbContract, abi, wallet);

const main = async () => {
    let tx = await airBnb.connect(wallet).addRentals(
        "Apartment in China Town",
        "New York",
        "40.716862",
        "-73.999005",
        "3 Guests - 2Beds - 2 Rooms",
        "WiFi - Kitchen - Living Area",
        "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        3,
        1,
        []
    );
    await tx.wait();

    tx = await airBnb.connect(wallet).addRentals(
        "Studio in Central Park",
        "New York",
        "40.767589",
        "-73.9969231",
        "1 Guest - 1 Bed",
        "WiFi - Self Check-In - Work Studio",
        "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/2",
        1,
        1,
        []
    );
    await tx.wait();

    tx = await airBnb.connect(wallet).addRentals(
        "Tropical Ambiance in London",
        "London",
        "51.500075",
        "-0.125706",
        "2 Guests - 1 Bed - 1 Bath",
        "WiFi - Work Station",
        "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/7",
        2,
        1,
        []
    );
    await tx.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

runMain();