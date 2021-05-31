require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot educate remember magic hold install light army gaze'; 
let testAccounts = [
"0xc014c0d0992b026568c65076d8eca27d3019f808e15b4cff5c5f7d754d129b97",
"0xdcfac4fdb75a45b87870e4c2f10ee53cbeaebf6a6c99d4ee55364846594ce7ed",
"0x1686c8436d879a5cf9c86fb8b791fd34d81e480960efe722a176a74473aa319e",
"0xe61c5169ec912b4d92ceeefd43264236d334c8afa49c0b84494e35090ed4419d",
"0xb1fd15ad9544fbc4a64f5ffcece1fe251c3373382157591b9e4287573a81a4fd",
"0x83f0f48d7a0ee0b9e7c66c2fcbb9eeb11fae4ef967268f6d51736e3f96a331c5",
"0x547debbbb13eafb946d1ee7e22c7b3bef31a25e9737e8f9e56bc0858a6cd6651",
"0x8d75574ac7c3224daa20c0b5be83abd09472d943c058257874edfa684d6d032e",
"0x394751f09aae8f192411e763209248dd0aaed3de61b991fd4770899684529619",
"0x86acdee7a453665414019358f02b73aa4f6db99d933ed8deb3578321a7a65b30"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

