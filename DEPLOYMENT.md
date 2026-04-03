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

- `VITE_TOKEN_API_BASE_URL=https://your-backend-domain.onrender.com/api/token`

The frontend includes a `vercel.json` file so React Router routes work after deployment.

## 3. Update CORS

After you get your Vercel frontend URL, set this on Render:

- `FRONTEND_URL=https://your-frontend-domain.vercel.app`

Then redeploy the backend.

## 4. Test after deploy

Check these flows:

- Home page loads
- Create token works
- Copy JSON from token success works
- Merchant page can paste JSON and process payment
- Token history updates
