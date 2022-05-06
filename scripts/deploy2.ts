// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

 import type { ERC1238Mock } from "./src/types/ERC1238Mock";
 import type { ERC1238ReceiverMock } from "./src/types/ERC1238RecieverMock";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [owner, addr1, addr2] = await ethers.getSigners();
  // const Badge = await ethers.getContractFactory("Badge");
  // const badge = await Badge.deploy(owner.address,"");

  // await badge.deployed();

  // console.log("Badge deployed to:", badge.address);
   let smartContractRecipient1: ERC1238ReceiverMock;
  let tokenRecipient: SignerWithAddress;
  const signers: SignerWithAddress[] = await ethers.getSigners();
  console.log("Signer 0 Address", signers[0].address)

   const ERC1238ReceiverMockArtifact: Artifact = await artifacts.readArtifact("ERC1238ReceiverMock");
   //let add1 = await ethers.utils.getAddress("0x5BE6E77b69BD3d9418712E21B26b920CA86478Cc") 
   smartContractRecipient1 = <ERC1238ReceiverMock>(await waffle.deployContract(signers[0], ERC1238ReceiverMockArtifact));

  console.log("Recipient is deployed at address:", smartContractRecipient1.address )

  // const erc1238reciever = await ethers.getContractFactory("ERC1238ReceiverMock");
//  let add1 = ethers.utils.getAddress("0x5BE6E77b69BD3d9418712E21B26b920CA86478Cc")
//  const erc1238 = await erc1238reciever.deploy(add1);

  // await erc1238.deployed();

  // console.log("ERC1238 receiver 1 deployed to:", erc1238.address);

  // const erc1238reciever1 = await ethers.getContractFactory("ERC1238ReceiverMock");
  // const erc12381 = await erc1238reciever1.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  // await erc12381.deployed();

  // console.log("ERC1238 receiver 2 deployed to:", erc12381.address);

  // const erc1238reciever2 = await ethers.getContractFactory("ERC1238ReceiverMock");
  // const erc12382 = await erc1238reciever2.deploy("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");

  // await erc1238.deployed();

  // console.log("ERC1238 receiver 3 deployed to:", erc12382.address);


  // const erc1238reciever3 = await ethers.getContractFactory("ERC1238ReceiverMock");
  // const erc12383 = await erc1238reciever3.deploy("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");

  // await erc12383.deployed();

  // console.log("ERC1238 receiver 4 deployed to:", erc12383.address);

  // const erc1238reciever4 = await ethers.getContractFactory("ERC1238ReceiverMock");
  // const erc12384 = await erc1238reciever4.deploy("0x236264b88b4221817FB853B03a3369E275B32344");

  // await erc12384.deployed();

  // console.log("ERC1238 receiver 5 deployed to:", erc12384.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
