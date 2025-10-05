'use server'

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

type SessionPayload = {
    userId: string;
}

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

const encrypt = (payload: SessionPayload) => {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1hr')
      .sign(key);
}

const decrypt = async (session: string | undefined = '') => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

const createSession = async (userId: string) => {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    const session = await encrypt({ userId });

    (await cookies()).set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

const verifySession = async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
        return { userId: null };
    }

    return { userId: session.userId };
}

const deleteSession = async () => {
    (await cookies()).delete('session');
}

export { createSession, verifySession, deleteSession };