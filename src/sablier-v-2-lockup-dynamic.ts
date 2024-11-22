import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  CancelLockupStream as CancelLockupStreamEvent,
  ClaimProtocolRevenues as ClaimProtocolRevenuesEvent,
  CreateLockupDynamicStream as CreateLockupDynamicStreamEvent,
  MetadataUpdate as MetadataUpdateEvent,
  RenounceLockupStream as RenounceLockupStreamEvent,
  SetComptroller as SetComptrollerEvent,
  SetNFTDescriptor as SetNFTDescriptorEvent,
  Transfer as TransferEvent,
  TransferAdmin as TransferAdminEvent,
  WithdrawFromLockupStream as WithdrawFromLockupStreamEvent
} from "../generated/SablierV2LockupDynamic/SablierV2LockupDynamic"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  let entity = new BatchMetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fromTokenId = event.params._fromTokenId
  entity._toTokenId = event.params._toTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelLockupStream(event: CancelLockupStreamEvent): void {
  let entity = new CancelLockupStream(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.streamId = event.params.streamId
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.asset = event.params.asset
  entity.senderAmount = event.params.senderAmount
  entity.recipientAmount = event.params.recipientAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimProtocolRevenues(
  event: ClaimProtocolRevenuesEvent
): void {
  let entity = new ClaimProtocolRevenues(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  entity.asset = event.params.asset
  entity.protocolRevenues = event.params.protocolRevenues

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateLockupDynamicStream(
  event: CreateLockupDynamicStreamEvent
): void {
  let entity = new CreateLockupDynamicStream(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.streamId = event.params.streamId
  entity.funder = event.params.funder
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amounts_deposit = event.params.amounts.deposit
  entity.amounts_protocolFee = event.params.amounts.protocolFee
  entity.amounts_brokerFee = event.params.amounts.brokerFee
  entity.asset = event.params.asset
  entity.cancelable = event.params.cancelable
  entity.transferable = event.params.transferable
  entity.segments = event.params.segments
  entity.range_start = event.params.range.start
  entity.range_end = event.params.range.end
  entity.broker = event.params.broker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetadataUpdate(event: MetadataUpdateEvent): void {
  let entity = new MetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRenounceLockupStream(
  event: RenounceLockupStreamEvent
): void {
  let entity = new RenounceLockupStream(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.streamId = event.params.streamId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetComptroller(event: SetComptrollerEvent): void {
  let entity = new SetComptroller(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetNFTDescriptor(event: SetNFTDescriptorEvent): void {
  let entity = new SetNFTDescriptor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  entity.oldNFTDescriptor = event.params.oldNFTDescriptor
  entity.newNFTDescriptor = event.params.newNFTDescriptor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferAdmin(event: TransferAdminEvent): void {
  let entity = new TransferAdmin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFromLockupStream(
  event: WithdrawFromLockupStreamEvent
): void {
  let entity = new WithdrawFromLockupStream(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.streamId = event.params.streamId
  entity.to = event.params.to
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
