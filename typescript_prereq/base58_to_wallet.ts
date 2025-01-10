import bs58 from 'bs58';
import * as prompt from 'prompt-sync';

// Convenience functions
function base58ToWallet(base58: string): Uint8Array {
  return bs58.decode(base58);
};

function walletToBase58(wallet: Uint8Array): string {
  return bs58.encode(wallet);
};

// Test functions
function base58ToWalletTest() {
  console.log("Enter your name:");
  const prompt = require('prompt-sync')();
  const base58 = prompt(''); // gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt
  const wallet = base58ToWallet(base58);
  console.log(wallet);
};

function walletToBase58Test() {
  const wallet: Uint8Array = new Uint8Array([
    34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122,
    15, 172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130,
    27, 195, 134, 14, 66, 75, 24, 2, 7, 132, 234, 160, 203, 109, 195, 116,
    251, 144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78,
    53
  ]);
  const base58 = walletToBase58(wallet);
  console.log(base58);
};


base58ToWalletTest();
