import cors from 'cors';
import express from 'express';

const PORT = 8000
export const MESSAGE_PATH = "/message"

export function launchApi() {
    // Setup HTTP api
    const api = express()
    api.use(express.json())
    
    // Configure CORS to accept requests from your Vercel domain
    api.use(cors({
        origin: [
            'https://telegram-mini-app-sample-p7wnobkom-dz007s-projects-03f4a785.vercel.app',
            'http://localhost:3000' // for local development
        ],
        methods: ['GET', 'POST'],
        credentials: true
    }))

    // Add a test route
    api.get('/', (req, res) => {
        res.json({ message: 'Backend API is running' });
    })

    // Listen to server start on port
    api.listen(PORT, () => console.log(`express is up on port ${PORT}`))

    return api
}
