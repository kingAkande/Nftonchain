import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const OnChainNFTModule = buildModule("OnChainNFTModule", (m) => {


  const onChainNFT = m.contract("OnChainNFT");

  return { onChainNFT };
});

export default OnChainNFTModule;

/**
OnChainNFTModule#OnChainNFT - 0xC725fC5E5A288a867e35c8473f8dC872Ce008152
 - https://sepolia-blockscout.lisk.com//address/0xC725fC5E5A288a867e35c8473f8dC872Ce008152#code
*/
