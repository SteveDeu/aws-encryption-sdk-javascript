// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export * from '@aws-crypto/encrypt-node'
export * from '@aws-crypto/decrypt-node'
export * from '@aws-crypto/material-management-node'
export * from '@aws-crypto/caching-materials-manager-node'
export * from '@aws-crypto/kms-keyring-node'
export * from '@aws-crypto/raw-aes-keyring-node'
export * from '@aws-crypto/raw-rsa-keyring-node'

import { CommitmentPolicy } from '@aws-crypto/material-management-node'

import { buildEncrypt } from '@aws-crypto/encrypt-node'
import { buildDecrypt } from '@aws-crypto/decrypt-node'

export function buildClient(
  commitmentPolicy: CommitmentPolicy = CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT
): ReturnType<typeof buildEncrypt> & ReturnType<typeof buildDecrypt> {
  return {
    ...buildEncrypt(commitmentPolicy),
    ...buildDecrypt(commitmentPolicy),
  }
}
