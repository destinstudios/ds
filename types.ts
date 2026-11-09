export type LeadStatus = 'New Lead' | 'Contacted' | 'Interested' | 'Negotiation' | 'Follow-up' | 'Won' | 'Lost'
export type Lead = { id: string; name: string; business: string; category: string; city: string; phone: string; source: string; status: LeadStatus; value: number; followUp: string }
export type Project = { id: string; name: string; client: string; service: string; progress: number; status: string; deadline: string; amount: number }
export type NavItem = { label: string; path: string; icon: string }
