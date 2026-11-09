import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Activity, Bell, BriefcaseBusiness, ChartNoAxesCombined, CircleHelp, FileText, FolderKanban, Gauge, IndianRupee, LayoutDashboard, Menu, Moon, MoreHorizontal, Search, Settings, Users, X } from 'lucide-react'
import { useState } from 'react'

const main = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard },
  { to: '/admin/leads', label: 'Leads', icon: Users },
  { to: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { to: '/admin/finance', label: 'Finance', icon: IndianRupee },
]
const extra = [
  { to: '/admin/clients', label: 'Clients', icon: BriefcaseBusiness },
  { to: '/admin/tasks', label: 'Tasks & Calendar', icon: Activity },
  { to: '/admin/proposals', label: 'Proposals', icon: FileText },
  { to: '/admin/reports', label: 'Reports', icon: ChartNoAxesCombined },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]
export function Layout() {
  const [more, setMore] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const loc = useLocation()
  const title = [...main, ...extra].find(x => x.to === loc.pathname)?.label ?? 'Overview'
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">D</div><div><b>destin<span>.</span></b><small>OPERATING SYSTEM</small></div></div>
      <div className="workspace"><span className="workspace-dot"/> Destin Studios <span className="chevron">⌄</span></div>
      <p className="nav-caption">WORKSPACE</p>
      {main.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} end={to==='/admin'} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={18}/>{label}</NavLink>)}
      <p className="nav-caption">MANAGE</p>
      {extra.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={18}/>{label}</NavLink>)}
      <div className="sidebar-bottom"><div className="help-card"><CircleHelp size={18}/><div><b>Need a hand?</b><small>Visit Help Center</small></div></div><div className="profile"><div className="avatar">DS</div><div><b>Destin Admin</b><small>Administrator</small></div><MoreHorizontal size={18}/></div></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><button className="icon-btn mobile-only" onClick={()=>setMobileMenu(!mobileMenu)}>{mobileMenu?<X/>:<Menu/>}</button><div className="crumb">Workspace <span>/</span> <b>{title}</b></div><div className="top-actions"><button className="search-box"><Search size={16}/> <span>Search anything...</span><kbd>⌘ K</kbd></button><button className="icon-btn"><Bell size={18}/><i/></button><button className="icon-btn"><Moon size={18}/></button><div className="avatar">DS</div></div></header>
      {mobileMenu && <div className="mobile-drawer">{[...main,...extra].map(({to,label,icon:Icon})=><NavLink onClick={()=>setMobileMenu(false)} key={to} to={to}><Icon size={18}/>{label}</NavLink>)}</div>}
      <div className="page-content"><Outlet/></div>
      <nav className="bottom-nav">{main.slice(0,4).map(({to,label,icon:Icon})=><NavLink key={to} to={to} end={to==='/admin'} className={({isActive})=>isActive?'selected':''}><Icon size={19}/><span>{label}</span></NavLink>)}<button onClick={()=>setMore(!more)} className={more?'selected':''}><MoreHorizontal size={20}/><span>More</span></button></nav>
      {more && <div className="more-sheet">{extra.map(({to,label,icon:Icon})=><NavLink onClick={()=>setMore(false)} key={to} to={to}><Icon size={18}/>{label}</NavLink>)}</div>}
    </main>
  </div>
}
