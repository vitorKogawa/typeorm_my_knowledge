import { EncryptionTransformer } from "typeorm-encrypted/lib/transformer"
import '../config/env'

export const MyCrypto = new EncryptionTransformer({
    key: process.env.DB_KEY,
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: process.env.DB_IV
})