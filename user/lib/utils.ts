import { type ClassValue, clsx } from 'clsx'
import { webcrypto } from 'crypto'
import { twMerge } from 'tailwind-merge'

export async function isHashValid(data: Record<string, string>, botToken: string) {
    const encoder = new TextEncoder()

    const checkString = Object.keys(data)
        .filter((key) => key !== 'hash')
        .map((key) => `${key}=${data[key]}`)
        .sort()
        .join('\n')

    const secretKey = await webcrypto.subtle.importKey(
        'raw',
        encoder.encode('WebAppData'),
        { name: 'HMAC', hash: 'SHA-256' },
        true,
        ['sign'],
    )

    const secret = await webcrypto.subtle.sign('HMAC', secretKey, encoder.encode(botToken))

    const signatureKey = await webcrypto.subtle.importKey('raw', secret, { name: 'HMAC', hash: 'SHA-256' }, true, [
        'sign',
    ])

    const signature = await webcrypto.subtle.sign('HMAC', signatureKey, encoder.encode(checkString))

    const hex = Buffer.from(signature).toString('hex')

    return data.hash === hex
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
