# Deployment Guide

This project is easiest to deploy as:

- Frontend: Vercel
- Backend API: Render

## 1. Deploy the backend on Render

Project folder:

- `backend`

Required environment variables:

- `PORT=8000`
- `MONGODB_URL=your_mongodb_connection_string`
- `FRONTEND_URL=https://your-frontend-domain.vercel.app`

Render settings:

- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`

This repo also includes a Render Blueprint file at:

- `render.yaml`

## 2. Deploy the frontend on Vercel

Project folder:

- `frontend/Token based payments`

Required environment variable:

- Optional: `VITE_TOKEN_API_BASE_URL=https://your-backend-domain.onrender.com`

The frontend includes a `vercel.json` file that:

- keeps React Router routes working after deployment
- proxies `/api/token` to `https://fintech-token-backend.onrender.com`

If you deploy the backend with a different Render service name or domain, update
`frontend/Token based payments/vercel.json` to match that backend URL and redeploy
the frontend.

## 3. Update CORS

After you get your Vercel frontend URL, set this on Render:

- `FRONTEND_URL=https://your-frontend-domain.vercel.app`

If you use a custom domain or multiple Vercel domains, add them in:

- `FRONTEND_URLS=https://your-custom-domain.com,https://your-preview-domain.vercel.app`

Then redeploy the backend.

## 4. Test after deploy

Check these flows:

- Home page loads
- Create token works
- Copy JSON from token success works
- Merchant page can paste JSON and process payment
- Token history updates
