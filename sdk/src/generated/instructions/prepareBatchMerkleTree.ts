/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category PrepareBatchMerkleTree
 * @category generated
 */
export type PrepareBatchMerkleTreeInstructionArgs = {
    maxBufferSize: number;
    maxDepth: number;
};
/**
 * @category Instructions
 * @category PrepareBatchMerkleTree
 * @category generated
 */
export const prepareBatchMerkleTreeStruct = new beet.BeetArgsStruct<
    PrepareBatchMerkleTreeInstructionArgs & {
        instructionDiscriminator: number[] /* size: 8 */;
    }
>(
    [
        ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
        ['maxDepth', beet.u32],
        ['maxBufferSize', beet.u32],
    ],
    'PrepareBatchMerkleTreeInstructionArgs',
);
/**
 * Accounts required by the _prepareBatchMerkleTree_ instruction
 *
 * @property [_writable_] merkleTree
 * @property [**signer**] authority
 * @property [] noop
 * @category Instructions
 * @category PrepareBatchMerkleTree
 * @category generated
 */
export type PrepareBatchMerkleTreeInstructionAccounts = {
    anchorRemainingAccounts?: web3.AccountMeta[];
    authority: web3.PublicKey;
    merkleTree: web3.PublicKey;
    noop: web3.PublicKey;
};

export const prepareBatchMerkleTreeInstructionDiscriminator = [
    230, 124, 120, 196, 249, 134, 199, 128,
];

/**
 * Creates a _PrepareBatchMerkleTree_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category PrepareBatchMerkleTree
 * @category generated
 */
export function createPrepareBatchMerkleTreeInstruction(
    accounts: PrepareBatchMerkleTreeInstructionAccounts,
    args: PrepareBatchMerkleTreeInstructionArgs,
    programId = new web3.PublicKey('mcmt6YrQEMKw8Mw43FmpRLmf7BqRnFMKmAcbxE3xkAW'),
) {
    const [data] = prepareBatchMerkleTreeStruct.serialize({
        instructionDiscriminator: prepareBatchMerkleTreeInstructionDiscriminator,
        ...args,
    });
    const keys: web3.AccountMeta[] = [
        {
            isSigner: false,
            isWritable: true,
            pubkey: accounts.merkleTree,
        },
        {
            isSigner: true,
            isWritable: false,
            pubkey: accounts.authority,
        },
        {
            isSigner: false,
            isWritable: false,
            pubkey: accounts.noop,
        },
    ];

    if (accounts.anchorRemainingAccounts != null) {
        for (const acc of accounts.anchorRemainingAccounts) {
            keys.push(acc);
        }
    }

    const ix = new web3.TransactionInstruction({
        data,
        keys,
        programId,
    });
    return ix;
}
