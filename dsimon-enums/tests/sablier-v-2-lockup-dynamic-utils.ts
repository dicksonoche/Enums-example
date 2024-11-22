import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  CancelLockupStream,
  ClaimProtocolRevenues,
  CreateLockupDynamicStream,
  MetadataUpdate,
  RenounceLockupStream,
  SetComptroller,
  SetNFTDescriptor,
  Transfer,
  TransferAdmin,
  WithdrawFromLockupStream
} from "../generated/SablierV2LockupDynamic/SablierV2LockupDynamic"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createCancelLockupStreamEvent(
  streamId: BigInt,
  sender: Address,
  recipient: Address,
  asset: Address,
  senderAmount: BigInt,
  recipientAmount: BigInt
): CancelLockupStream {
  let cancelLockupStreamEvent = changetype<CancelLockupStream>(newMockEvent())

  cancelLockupStreamEvent.parameters = new Array()

  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamId",
      ethereum.Value.fromUnsignedBigInt(streamId)
    )
  )
  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam(
      "senderAmount",
      ethereum.Value.fromUnsignedBigInt(senderAmount)
    )
  )
  cancelLockupStreamEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAmount",
      ethereum.Value.fromUnsignedBigInt(recipientAmount)
    )
  )

  return cancelLockupStreamEvent
}

export function createClaimProtocolRevenuesEvent(
  admin: Address,
  asset: Address,
  protocolRevenues: BigInt
): ClaimProtocolRevenues {
  let claimProtocolRevenuesEvent = changetype<ClaimProtocolRevenues>(
    newMockEvent()
  )

  claimProtocolRevenuesEvent.parameters = new Array()

  claimProtocolRevenuesEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  claimProtocolRevenuesEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  claimProtocolRevenuesEvent.parameters.push(
    new ethereum.EventParam(
      "protocolRevenues",
      ethereum.Value.fromUnsignedBigInt(protocolRevenues)
    )
  )

  return claimProtocolRevenuesEvent
}

export function createCreateLockupDynamicStreamEvent(
  streamId: BigInt,
  funder: Address,
  sender: Address,
  recipient: Address,
  amounts: ethereum.Tuple,
  asset: Address,
  cancelable: boolean,
  transferable: boolean,
  segments: Array<ethereum.Tuple>,
  range: ethereum.Tuple,
  broker: Address
): CreateLockupDynamicStream {
  let createLockupDynamicStreamEvent = changetype<CreateLockupDynamicStream>(
    newMockEvent()
  )

  createLockupDynamicStreamEvent.parameters = new Array()

  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamId",
      ethereum.Value.fromUnsignedBigInt(streamId)
    )
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("amounts", ethereum.Value.fromTuple(amounts))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam(
      "cancelable",
      ethereum.Value.fromBoolean(cancelable)
    )
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam(
      "transferable",
      ethereum.Value.fromBoolean(transferable)
    )
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("segments", ethereum.Value.fromTupleArray(segments))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("range", ethereum.Value.fromTuple(range))
  )
  createLockupDynamicStreamEvent.parameters.push(
    new ethereum.EventParam("broker", ethereum.Value.fromAddress(broker))
  )

  return createLockupDynamicStreamEvent
}

export function createMetadataUpdateEvent(_tokenId: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return metadataUpdateEvent
}

export function createRenounceLockupStreamEvent(
  streamId: BigInt
): RenounceLockupStream {
  let renounceLockupStreamEvent = changetype<RenounceLockupStream>(
    newMockEvent()
  )

  renounceLockupStreamEvent.parameters = new Array()

  renounceLockupStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamId",
      ethereum.Value.fromUnsignedBigInt(streamId)
    )
  )

  return renounceLockupStreamEvent
}

export function createSetComptrollerEvent(
  admin: Address,
  oldComptroller: Address,
  newComptroller: Address
): SetComptroller {
  let setComptrollerEvent = changetype<SetComptroller>(newMockEvent())

  setComptrollerEvent.parameters = new Array()

  setComptrollerEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  setComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  setComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return setComptrollerEvent
}

export function createSetNFTDescriptorEvent(
  admin: Address,
  oldNFTDescriptor: Address,
  newNFTDescriptor: Address
): SetNFTDescriptor {
  let setNftDescriptorEvent = changetype<SetNFTDescriptor>(newMockEvent())

  setNftDescriptorEvent.parameters = new Array()

  setNftDescriptorEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  setNftDescriptorEvent.parameters.push(
    new ethereum.EventParam(
      "oldNFTDescriptor",
      ethereum.Value.fromAddress(oldNFTDescriptor)
    )
  )
  setNftDescriptorEvent.parameters.push(
    new ethereum.EventParam(
      "newNFTDescriptor",
      ethereum.Value.fromAddress(newNFTDescriptor)
    )
  )

  return setNftDescriptorEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createTransferAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): TransferAdmin {
  let transferAdminEvent = changetype<TransferAdmin>(newMockEvent())

  transferAdminEvent.parameters = new Array()

  transferAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  transferAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return transferAdminEvent
}

export function createWithdrawFromLockupStreamEvent(
  streamId: BigInt,
  to: Address,
  asset: Address,
  amount: BigInt
): WithdrawFromLockupStream {
  let withdrawFromLockupStreamEvent = changetype<WithdrawFromLockupStream>(
    newMockEvent()
  )

  withdrawFromLockupStreamEvent.parameters = new Array()

  withdrawFromLockupStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamId",
      ethereum.Value.fromUnsignedBigInt(streamId)
    )
  )
  withdrawFromLockupStreamEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawFromLockupStreamEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  withdrawFromLockupStreamEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawFromLockupStreamEvent
}
