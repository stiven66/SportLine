import crypto from 'crypto';

export function generateAESKey(): Buffer {
  return crypto.randomBytes(32); // 256 bits
}

export function encryptWithAES(message: string, key: Buffer) {
  const iv = crypto.randomBytes(12); // GCM usa IV de 12 bytes
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  const encrypted = Buffer.concat([cipher.update(message, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    encryptedData: encrypted.toString('base64'),
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64'),
  };
}

export function encryptAESKeyWithRSA(aesKey: Buffer, publicKey: string) {
  return crypto.publicEncrypt(publicKey, aesKey).toString('base64');
}
