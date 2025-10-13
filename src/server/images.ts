'use server';

import { del, put } from '@vercel/blob';
import { v4 as uuidv4 } from 'uuid';
import { verifySession } from './session';
import sharp from 'sharp';

export const uploadImageToBlob = async (file: File): Promise<string> => {
    const userId = await verifySession();

    if (!userId) {
        throw new Error('Błąd! Musisz być zalogowany!');
    }

    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const resizedImageBuffer = await sharp(buffer)
            .resize(200, 200, {
                fit: 'cover',
                position: 'center',
            })
            .png({ quality: 80 })
            .toBuffer();

        const blob = await put(uuidv4(), resizedImageBuffer, {
            access: 'public',
            contentType: 'image/png',
        });
        return blob.url;
    } catch (error) {
        console.error('Error uploading image to blob:', error);
        throw new Error('Failed to upload image');
    }
};

export const deleteImagesFromBlob = async (url: string | string[]) => {
    const userId = await verifySession();

    if (!userId) {
        throw new Error('Błąd! Musisz być zalogowany!');
    }

    try {
        await del(url);
    } catch (error) {
        console.error('Error deleting image from blob:', error);
        throw new Error('Failed to delete image');
    }
}; 