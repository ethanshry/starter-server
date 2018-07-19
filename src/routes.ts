import { Express, Request, Response, Router } from 'express';

export function registerRoutes(app: Express) {

    app.get('/ping', (req: Request, res: Response) => {
        res.send('ping');
    });

}
