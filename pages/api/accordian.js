import fs from 'fs';
import path from 'path';

export default function handler (req, res) {
    if (req.method !== 'GET') {
        res.status(403).json({ message: 'Method is Invalid!' });
    }
    const exactPath = path.join(process.cwd(), 'public', 'data.js');
    console.log('Built path - ', exactPath);

    try {
        const content = fs.readFileSync(exactPath, 'utf-8');
        const jsonData = JSON.parse(content);
        console.log('ASHUTOSH - fileData - ', typeof content);
        res.status(200).json({ content: jsonData });
    } catch (err) {
        console.log('Error while fetching the data - ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}