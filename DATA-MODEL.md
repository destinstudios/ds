# Firestore data model

Top-level collections:
`users`, `settings`, `leads`, `clients`, `activities`, `proposals`, `referrals`, `projects`, `tasks`, `documents`, `invoices`, `transactions`, `tickets`, `messages`, `notifications`, `campaigns`.

Relationships use document IDs (`uid`, `clientId`, `leadId`, `projectId`, `invoiceId`). Never store passwords in Firestore.

Core calculations:
- Due = invoice total − payments received.
- Profit = income transactions − expense transactions.
- Revenue means actual income received, not project contract value.

Business rules:
- Lead conversion creates one Client and preserves `sourceLeadId`.
- Archive leads; do not routinely delete.
- Admin alone creates/edits financial records.
- Client reads are constrained to their own `clientId`.
- Referral approval/reward status is manually administered initially.
- File records hold metadata/reference only; no free storage entitlement is assumed.
