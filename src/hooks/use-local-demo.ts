import { useEffect, useState } from 'react';
export function useLocalDemo<T>(key:string,initial:T) {
 const [value,setValue]=useState<T>(initial);
 const [ready,setReady]=useState(false);
 useEffect(()=>{
  const read=()=>{try {const stored=localStorage.getItem(key);if(stored) setValue(previous=>JSON.stringify(previous)===stored?previous:JSON.parse(stored));} catch {}};
  read();setReady(true);
  const sync=(event:Event)=>{if(event instanceof CustomEvent&&event.detail===key)read();};
  window.addEventListener('sholok-local-update',sync);
  window.addEventListener('storage',read);
  return()=>{window.removeEventListener('sholok-local-update',sync);window.removeEventListener('storage',read);};
 },[key]);
 useEffect(()=>{if(ready) {try {const next=JSON.stringify(value);if(localStorage.getItem(key)!==next){localStorage.setItem(key,next);window.dispatchEvent(new CustomEvent('sholok-local-update',{detail:key}));}} catch {}}},[key,value,ready]);
 return [value,setValue] as const;
}
