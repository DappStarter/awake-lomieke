require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strategy dash remember coach hidden civil army gate'; 
let testAccounts = [
"0xcd53ae8ff2762693c7af61235485dedf020f4ff06226f3e09a0530a0f57b18e1",
"0x358b76647e288cab4f3d9277c3f6ba250ddc12fc33dfcef0068db708fabdb5d1",
"0x274a173e6d6bc41b351748e0cae9b12b5676dda05150ef0fcf32f8a23d40eb97",
"0xd2e72bab4a7d77c3fdacc3634496e05edd07f9e63ef34d49cce4431eadffdda7",
"0x23d055a20b4b0ec1c582217930e11d5d6fa8986784256d28c4ef5ae93907b4c3",
"0x97bff6f8870d750e771c23b4bdabd9cb0ca5962cd6b5c1fe0880262214790a5b",
"0x34d61035a1385686f2782306c1b38a1c15be5c00c426f4bddff13b0c7221be9e",
"0x4ca0699361f3bc564cec66a35779f11fc4d51769e6676c9326083045cd6210fe",
"0x9b338c741de6b55d21987051e3b4697a9ba8637c1486f8f456566f39d9b3bbd3",
"0x9c57d0e3c11992ab97e2e33bf36443df0fb0f7339a50ed549363f14e4de33917"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
