# product-cart
 Project

## Local setup

1. Install dependencies
```bash
npm install
```

2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:
```bash
cp .env.example .env.local
```

Required variables:
- `APP_FIREBASE_PROJECT_ID` — Firebase project ID
- `APP_FIREBASE_CLIENT_EMAIL` — Firebase service account client email
- `APP_FIREBASE_PRIVATE_KEY` — Firebase service account private key
- `APP_FIREBASE_STORAGE_BUCKET` — Firebase Storage bucket name

Get these from Firebase Console → Project Settings → Service Accounts → Generate new private key.

By default, local development (`NODE_ENV=development`) uses the local file-based repository (`lib/data/products.json` + `public/products/`), so Firebase credentials are only required if you switch to the Firebase repository.

3. Run the dev server
```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Other useful commands

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # run ESLint
```
