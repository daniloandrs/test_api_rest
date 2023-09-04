import { Request, Response, NextFunction } from 'express';

export class CorsValidator {
    private static allowedOrigins: string[] = [
        'http://localhost',
        'http://localhost:4200',
        'https://example.com',
        'http://127.0.0.1',
        'https://stackblitzstartersf4sjdt-ke4g--8080--33975f1d.local-credentialless.webcontainer.io'
    ];

    public static handleCors(req: Request, res: Response, next: NextFunction) {
        const origin = req.headers.origin as string;

        if (CorsValidator.isAllowedOrigin(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        } else {
            res.status(403).json({ error: 'CORS not allowed for this origin.' });
        }
    }

    private static isAllowedOrigin(origin: string): boolean {
        return CorsValidator.allowedOrigins.includes(origin);
    }
}