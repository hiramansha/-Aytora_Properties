import { useState } from 'react'
import { Heart, Menu, Moon, Sun, X } from 'lucide-react'
export default function Navbar({savedCount,onSaved,theme,onTheme}) {
 const [open,setOpen]=useState(false)
 const links=[['Properties','#listings'],['Services','#services'],['EMI calculator','#emi'],['Contact','#contact']]
 const close=()=>setOpen(false)
 return <header className="site-header"><div className="wrap nav"><a className="brand" href="#top" onClick={close}><span className="brand-symbol">A</span><span className="brand-name">AYTORA<small>PROPERTIES</small></span></a><button className="icon-btn menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav-menu open':'nav-menu'}>{links.map(([t,h])=><a key={t} href={h} onClick={close}>{t}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Contact us</a><button className="icon-btn saved-nav" onClick={()=>{onSaved();close()}} aria-label="Show saved properties"><Heart size={18}/><span>{savedCount}</span></button><button className="icon-btn" onClick={onTheme} aria-label="Switch colour theme">{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button></nav></div></header>
}