import { createFileRoute } from '@tanstack/react-router';
import { CloudSun, ArrowUpRight } from 'lucide-react';
import { Shell } from '@/components/portal/shell';
import { FeaturedNews, MediaOutlets, Shopping, Discovery, Sponsored, Videos } from '@/components/portal/content';
import { LoginWidget, Promotion, FeaturedProduct, Weather, Finance, Calendar, Shipping } from '@/components/portal/widgets';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'SHOLOK — Your everyday, connected'},{name:'description',content:'Explore 17 services, inspiring stories, thoughtful shopping and your everyday essentials on the SHOLOK digital portal.'},{property:'og:title',content:'SHOLOK — Your everyday, connected'},{property:'og:description',content:'News, shopping, communities and everyday inspiration, all together.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Index,
});
function Index(){return <Shell><main className="portal-container"><div className="dayline"><span><strong className="text-foreground">{new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</strong> <span className="ml-3">A fresh day. A world to discover.</span></span><span className="day-extra"><CloudSun className="inline size-4 text-destructive mr-1"/> Dhaka 28° · Demo <span className="mx-3">|</span> <span className="text-primary">Make SHOLOK yours <ArrowUpRight className="inline size-3"/></span></span></div><div className="portal-columns"><div className="content-column"><FeaturedNews/><MediaOutlets/><Shopping/><Discovery/><Sponsored/><Videos/></div><aside className="sidebar" aria-label="Your everyday widgets"><LoginWidget/><Promotion/><FeaturedProduct/><Weather/><Finance/><Calendar/><Shipping/></aside></div></main></Shell>}
