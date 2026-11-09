# Destin OS implementation roadmap

The product decisions already approved:
- Mobile + desktop; mobile-first.
- Admin mobile navigation: bottom navigation + More.
- Client portal starts on Overview Dashboard.
- Separate `/admin/login` and `/client/login`.
- Firestore database; archive leads rather than routine deletion.
- Finance records are Admin-only.
- Client can read only their own client-linked records.

## Build sequence
1. App shell, responsive design system, routes, dashboard and sample UI (included).
2. Firebase project setup, Auth integration, secure admin provisioning and route guards.
3. Firestore typed data services and security-rule emulator tests.
4. Leads CRUD, activity timeline, archive, follow-up and lead-to-client conversion.
5. Clients and sales pipeline.
6. Projects, milestones, tasks and calendar.
7. Transactions, invoices, manual payment reconciliation and print/PDF.
8. Client portal, support tickets and messages.
9. Referrals, proposals, documents metadata and campaigns.
10. Reports, CSV exports, notifications and optional AI helpers.
11. Accessibility, mobile/desktop QA, security review, recovery/export runbook and deployment.

No step should be treated as production-ready until its acceptance tests pass.
