import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

type SessionPayload = {
    userId: string;
}

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

const SESSION_DURATION = 3 * 60 * 60 * 1000; // 3h
const REFRESH_THRESHOLD = 1 * 60 * 60 * 1000; // 1h

const encrypt = (payload: SessionPayload) => {
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
    
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(expiresAt)
      .sign(key);
}

const decrypt = async (session: string | undefined = '') => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch {
        return null;
    }
}

const createSession = async (userId: string) => {
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
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

    if (!session || typeof session.userId !== 'string') {
        return null;
    }

    const exp = session.exp as number;
    const now = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = (exp - now) * 1000;

    if (timeUntilExpiry < REFRESH_THRESHOLD) {
        await createSession(session.userId as string);
    }

    return session.userId as string;
}

const deleteSession = async () => {
    (await cookies()).delete('session');
}

export { createSession, verifySession, deleteSession };