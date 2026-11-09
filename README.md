# Destin OS — Business Operating System

**Manage. Grow. Scale.**  
A mobile-first internal business OS for Destin Studios.

## Included
- React + TypeScript + Vite
- Responsive Admin workspace with mobile bottom navigation
- Dashboard, Leads, Projects, Finance, Clients, Tasks, Proposals, Reports and Settings routes
- Separate Admin and Client login entry points
- Firebase SDK configuration foundation (Auth + Firestore)
- Firestore security rules and suggested indexes
- Print-friendly finance screen

## Important status
This is the initial application codebase and secure-backend foundation, not a fully deployed production service yet. Dashboard and lead/project cards currently use clearly identified local sample data. Login and write actions are intentionally not represented as working until Firebase credentials, user provisioning, Firestore rules and data services are connected and tested. Do not enter real client data into the sample build.

## Requirements
- Node.js 20.19+ or 22.12+
- A GitHub account
- A Firebase project on the free Spark plan (verify current quotas and feature availability in Firebase Console before use)

## Run locally / GitHub Codespaces
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open the forwarded port shown by Codespaces (usually 5173).

## Configure Firebase
1. Create a Firebase project and select the no-cost Spark plan.
2. Enable Email/Password Authentication.
3. Create a Cloud Firestore database.
4. Copy the Firebase Web App configuration into `.env.local`.
5. Deploy rules and indexes using Firebase CLI from a trusted development environment:
   `firebase deploy --only firestore:rules,firestore:indexes`
6. Create the first admin identity securely. Never allow a public sign-up to choose the `admin` role. The rules intentionally deny direct user document creation; provision the initial admin with a trusted, controlled process.
7. Create a `users/{uid}` document for each account with `role`, `isActive`, and (for clients) `clientId`.

**Never commit `.env.local` or private service-account keys.** The Firebase web config is not a substitute for Firestore Security Rules.

## Free-tier and cost safeguards
- No paid API is required by the current code.
- Firebase Spark quotas and eligible services can change. Verify current limits, authentication options, Firestore quotas, hosting availability and regional restrictions before production use.
- This project does not depend on Firebase Storage, Cloud Functions, paid WhatsApp APIs, paid AI APIs or paid integrations.
- WhatsApp follow-up should use a normal `https://wa.me/` click-to-chat link when implemented.
- No background push reminders are promised in this version.

## Security checklist before real users
- Publish and test Firestore rules in Firebase Emulator / Rules Playground.
- Verify admin provisioning and client ownership isolation with separate test accounts.
- Add Auth route guards and server-authoritative role checks before exposing private pages.
- Add validated Firestore data services, audit logging and error handling.
- Establish a tested free export/recovery routine; do not assume automated backups are included on Spark.
- Do not store passwords, payment card data, API secrets or sensitive documents in client-readable fields.

## Product roadmap modules
The agreed roadmap covers leads, sales pipeline, clients, projects, tasks/calendar, finance/invoices, proposals, referral management, support tickets/messages, client portal, reports, campaigns, notifications and optional AI assistance. The present ZIP establishes the app shell and first UI modules; remaining workflows are to be implemented in tested increments.
