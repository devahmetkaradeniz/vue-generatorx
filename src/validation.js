import { resolve } from 'path';
import { existsSync } from 'fs';

export const pathValidation = (input) => {
    const destination = resolve(input)
    
    if (!existsSync(destination)) {
        return `path: ${destination} doesn't exist`
    }

    return true
}