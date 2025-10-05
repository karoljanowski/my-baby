'use server';

import { del, put } from '@vercel/blob';
import { v4 as uuidv4 } from 'uuid';

export const uploadImageToBlob = async (file: File): Promise<string> => {
    try {
        const blob = await put(uuidv4(), file, {
            access: 'public',
        });
        return blob.url;
    } catch (error) {
        console.error('Error uploading image to blob:', error);
        throw new Error('Failed to upload image');
    }
};

export const deleteImageFromBlob = async (url: string) => {
    try {
        await del(url);
    } catch (error) {
        console.error('Error deleting image from blob:', error);
        throw new Error('Failed to delete image');
    }
}; 