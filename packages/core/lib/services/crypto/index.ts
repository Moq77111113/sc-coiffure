import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  pbkdf2Sync,
} from 'crypto';

const algorithm = 'aes-256-cbc';

const generateSalt = () => randomBytes(16).toString('hex');

const encrypt = (data: string, secret: string) => {
  const salt = generateSalt();
  const key = pbkdf2Sync(secret, salt, 100000, 32, 'sha256');
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return [salt, iv.toString('hex'), encrypted].join(':');
};

const decrypt = (encryptedText: string, secret: string) => {
  const [salt, ivHex, encryptedData] = encryptedText.split(':');
  const key = pbkdf2Sync(secret, salt, 100000, 32, 'sha256');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = createDecipheriv(algorithm, key, iv);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
  return decryptedData;
};

export const crypto = {
  encrypt,
  decrypt,
};
