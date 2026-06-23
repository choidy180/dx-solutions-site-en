"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { avisModes, modeCases, nav, poc, refs, wearable, workflow } from "@/lib/data";
import { Arrow, Brain, Chart, Check, Chevron, Close, Menu, Play, Qr, Search, Spark, Tool, Truck } from "@/components/icons";

export function RevealController() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -7%" });
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("company");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 12);
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const found = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (found) setActive(found.target.id);
    }, { rootMargin: "-35% 0px -55%", threshold: [0,.2,.5] });
    nav.forEach(([id]) => { const e=document.getElementById(id); if(e) obs.observe(e); });
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const old=document.body.style.overflow; document.body.style.overflow="hidden";
    const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)}; addEventListener("keydown",key);
    return()=>{document.body.style.overflow=old;removeEventListener("keydown",key)};
  },[open]);
  return <header className={`header ${scrolled?"scrolled":""}`}>
    <div className="wide header-in">
      <a href="#top" className="brand" aria-label="DX Solutions home"><Image src="/media/brand/logo.png" alt="DX Solutions" width={718} height={174} priority /></a>
      <nav className="desk-nav" aria-label="Primary">{nav.map(([id,label])=><a className={active===id?"active":""} href={`#${id}`} key={id}>{label}</a>)}</nav>
      <a href="#contact" className="btn small header-cta">Talk to us <Arrow size={16}/></a>
      <button className="circle menu" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<Close/>:<Menu/>}</button>
    </div>
    <div className={`drawer ${open?"open":""}`} aria-hidden={!open}>
      <button className="drawer-bg" aria-label="Close navigation" onClick={()=>setOpen(false)}/>
      <div className="drawer-panel"><p>Explore</p><nav>{nav.map(([id,label],i)=><a href={`#${id}`} onClick={()=>setOpen(false)} key={id}><span>0{i+1}</span>{label}</a>)}</nav><a className="btn" href="mailto:dx_sales@dx-solutions.co.kr">Start a conversation <Arrow/></a></div>
    </div>
  </header>;
}

type VideoProps={title:string;src:string;poster:string;className?:string;children?:ReactNode};
export function VideoButton({title,src,poster,className="video-button",children}:VideoProps){
  const [open,setOpen]=useState(false);
  useEffect(()=>{if(!open)return;const old=document.body.style.overflow;document.body.style.overflow="hidden";const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};addEventListener("keydown",key);return()=>{document.body.style.overflow=old;removeEventListener("keydown",key)}},[open]);
  return <><button className={className} onClick={()=>setOpen(true)} aria-label={`Play ${title} demo`}>{children??<><span><Play/></span>Watch demo</>}</button>{open&&<div className="modal" role="dialog" aria-modal="true" aria-label={`${title} demonstration`}><button className="modal-bg" aria-label="Close video" onClick={()=>setOpen(false)}/><div className="modal-panel"><div className="modal-head"><div><small>Product demonstration</small><h2>{title}</h2></div><button className="circle" aria-label="Close video" onClick={()=>setOpen(false)}><Close/></button></div><video controls autoPlay playsInline preload="metadata" poster={poster}><source src={src} type="video/mp4"/></video></div></div>}</>;
}

export function PocGallery(){
  const [index,setIndex]=useState(0); const item=poc[index];
  return <div className="poc" data-reveal><div className="poc-copy"><p className="eyebrow">Physical AI in the field</p><h3>From recognition to action, inside the real factory.</h3><p>The PoC environment combines digital twins, vision intelligence, and operational dashboards so teams can interpret and respond to shop-floor events in one flow.</p><div className="poc-count"><b>0{index+1}</b><i><span style={{width:`${(index+1)/poc.length*100}%`}}/></i><b>0{poc.length}</b></div></div><div className="poc-view"><div className="poc-main"><Image src={item.image} alt={item.title} fill sizes="(max-width:800px) 100vw, 64vw"/><span>{item.title}</span></div><div className="poc-thumbs">{poc.map((x,i)=><button key={x.image} aria-label={`View ${x.title}`} className={i===index?"active":""} onClick={()=>setIndex(i)}><Image src={x.image} alt="" fill sizes="80px"/></button>)}</div></div></div>;
}

export function CertificateGallery(){
  const items=Array.from({length:10},(_,i)=>({src:`/media/patents/certificate-${i+1}.webp`,title:`Patent & certification record ${String(i+1).padStart(2,"0")}`}));
  const [index,setIndex]=useState<number|null>(null); const active=index===null?null:items[index];
  useEffect(()=>{if(index===null)return;const old=document.body.style.overflow;document.body.style.overflow="hidden";const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setIndex(null);if(e.key==="ArrowLeft")setIndex((index+9)%10);if(e.key==="ArrowRight")setIndex((index+1)%10)};addEventListener("keydown",key);return()=>{document.body.style.overflow=old;removeEventListener("keydown",key)}},[index]);
  return <div className="certs" data-reveal><div className="subhead"><div><p className="eyebrow">Intellectual property</p><h3>10 selected patent and certification records</h3></div><p>A growing portfolio supporting manufacturing AI, operational intelligence, and trusted delivery.</p></div><div className="cert-grid">{items.map((x,i)=><button key={x.src} onClick={()=>setIndex(i)}><span><Image src={x.src} alt="" fill sizes="180px"/></span><b>{String(i+1).padStart(2,"0")}</b></button>)}</div>{active&&<div className="modal image-modal" role="dialog" aria-modal="true"><button className="modal-bg" aria-label="Close document" onClick={()=>setIndex(null)}/><div className="modal-panel"><div className="modal-head"><h2>{active.title}</h2><button className="circle" onClick={()=>setIndex(null)} aria-label="Close document"><Close/></button></div><div className="doc"><Image src={active.src} alt={active.title} fill sizes="90vw"/></div><div className="modal-nav"><button onClick={()=>setIndex((index+9)%10)}>Previous</button><span>{index+1} / 10</span><button onClick={()=>setIndex((index+1)%10)}>Next</button></div></div></div>}</div>;
}

const modeIcons=[Qr,Chart,Tool,Truck];
export function ModeTabs(){
  const [index,setIndex]=useState(0); const item=modeCases[index]; const Icon=modeIcons[index];
  return <div className="mode-tabs-wrap" data-reveal><div className="tabs" role="tablist">{modeCases.map((x,i)=>{const I=modeIcons[i];return <button role="tab" aria-selected={i===index} className={i===index?"active":""} onClick={()=>setIndex(i)} key={x.id}><span><I/></span>{x.label}</button>})}</div><article className="mode-panel" key={item.id}><div className="mode-copy"><p className="eyebrow">{item.kicker}</p><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.points.map(x=><li key={x}><span><Check size={14}/></span>{x}</li>)}</ul><VideoButton title={item.label} src={item.video} poster={item.image} className="btn video-cta"><span><Play size={16}/></span>Watch product demo</VideoButton></div><div className="screen"><div className="screen-bar"><i/><i/><i/><b>M.O.D.E. / {item.label}</b></div><div className="screen-img"><Image src={item.image} alt={`${item.label} dashboard`} fill sizes="(max-width:900px) 100vw, 55vw"/><span/></div><small>● Live operational context</small></div></article></div>;
}

export function AvisInteractive(){
  const [mode,setMode]=useState(0);const [step,setStep]=useState(0);const m=avisModes[mode],w=workflow[step];
  return <div className="avis-interactive">
    <div className="avis-mode" data-reveal><div className="avis-tabs">{avisModes.map((x,i)=><button className={i===mode?"active":""} onClick={()=>setMode(i)} key={x.id}><span>0{i+1}</span>{x.label}</button>)}</div><div className="avis-panel" key={m.id}><div className="avis-media"><div><Image src={m.image} alt={m.label} fill sizes="(max-width:900px) 100vw, 55vw"/></div><VideoButton title={m.label} src={m.video} poster={m.image} className="play-float"><span><Play/></span>Play demo</VideoButton></div><div className="avis-copy"><p className="eyebrow">On-device manufacturing agent</p><h3>{m.title}</h3><p>{m.copy}</p><ul>{m.points.map(x=><li key={x}><span><Check size={14}/></span>{x}</li>)}</ul></div></div></div>
    <div className="workflow" data-reveal><div className="workflow-copy"><p className="eyebrow">Hands-free field workflow</p><h3>One continuous loop from recognition to history.</h3><p>Smart glasses connect voice, vision, and AR guidance to the agent so workers stay focused on the task.</p><div><span><Qr/>QR context</span><span><Brain/>Vision + agent</span><span><Spark/>Action guide</span></div></div><div className="workflow-stage"><div><Image src={w.image} alt={w.title} fill sizes="420px"/><b>{w.step}</b></div><article><small>Step {w.step}</small><h4>{w.title}</h4><p>{w.copy}</p></article></div><div className="workflow-steps">{workflow.map((x,i)=><button className={i===step?"active":""} onClick={()=>setStep(i)} key={x.step}><span>{x.step}</span><b>{x.title}</b><Arrow size={16}/></button>)}</div></div>
    <div className="wearable" data-reveal><div className="subhead"><div><p className="eyebrow">Wearable agent services</p><h3>Operational support that moves with the worker.</h3></div></div><div className="wearable-grid">{wearable.map((x,i)=><article key={x.title}><div className="wearable-img"><Image src={x.poster} alt="" fill sizes="(max-width:700px) 100vw, 33vw"/><span>0{i+1}</span></div><div className="wearable-copy"><h4>{x.title}</h4><p>{x.copy}</p><VideoButton title={x.title} src={x.video} poster={x.poster} className="text-play">Watch demo <span><Play size={14}/></span></VideoButton></div></article>)}</div></div>
  </div>;
}

export function ReferenceExplorer(){
  const years=["All",...Array.from(new Set(refs.map(x=>String(x[1]))))];const cats=["All categories",...Array.from(new Set(refs.map(x=>x[2]))).sort()];
  const [query,setQuery]=useState("");const [year,setYear]=useState("All");const [cat,setCat]=useState("All categories");const [all,setAll]=useState(false);
  const filtered=useMemo(()=>refs.filter(x=>(year==="All"||String(x[1])===year)&&(cat==="All categories"||x[2]===cat)&&(!query||`${x[2]} ${x[3]}`.toLowerCase().includes(query.toLowerCase()))),[query,year,cat]);
  const shown=all?filtered:filtered.slice(0,10);
  return <div className="ref-explorer" data-reveal><div className="filters"><label><Search/><input value={query} onChange={e=>{setQuery(e.target.value);setAll(false)}} placeholder="Search projects or capabilities"/></label><select value={year} onChange={e=>{setYear(e.target.value);setAll(false)}}>{years.map(x=><option key={x}>{x==="All"?"All years":x}</option>)}</select><select value={cat} onChange={e=>{setCat(e.target.value);setAll(false)}}>{cats.map(x=><option key={x}>{x}</option>)}</select></div><div className="ref-count"><span><b>{filtered.length}</b> projects</span><span>2022–2026</span></div><div className="ref-list"><div className="ref-head"><span>No.</span><span>Year</span><span>Area</span><span>Development</span></div>{shown.map(x=><article key={x[0]}><span>{String(x[0]).padStart(2,"0")}</span><b>{x[1]}</b><em>{x[2]}</em><h3>{x[3]}</h3></article>)}</div>{filtered.length>10&&<button className="btn ref-more" onClick={()=>setAll(!all)}>{all?"Show fewer projects":`View all ${filtered.length} projects`}<Chevron className={all?"flip":""}/></button>}</div>;
}
