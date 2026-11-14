import { Coffee, PenLine, ShoppingBag, Newspaper, Store, MapPin, Lightbulb, PanelsTopLeft, BookOpen, Tv, Music, Languages, BookA, ChartNoAxesCombined, Trophy, CloudSun, House } from 'lucide-react';
import city from '@/assets/dhaka-skyline.jpg';
import headphones from '@/assets/headphones.jpg';
import essentials from '@/assets/essentials.jpg';
import living from '@/assets/living.jpg';
export const images = { city, headphones, essentials, living };
const names = ['Cafe','Blog','Shopping','News','Smart Store','Map','Knowledge','Webtoon','Series','TV / Videos','Music','Translator','Dictionary','Finance','Sports','Weather','Real Estate'];
const slugs = ['cafe','blog','shopping','news','smartstore','map','knowledge','webtoon','series','tv','music','translate','dictionary','finance','sports','weather','realestate'];
const descriptions = ['Community and Discussions','Personal and Professional Blogging','Online Shopping Marketplace','News and Current Affairs','Seller Marketplace and Public Stores','Maps and Location Discovery','Questions and Answers','Digital Comics and Webtoons','Novels, Books and Comics','Video Streaming and Entertainment','Music Discovery and Listening','Language Translation','Word Meanings and Definitions','Financial Information and Market Insights','Sports News and Updates','Weather Information','Property and Real Estate Listings'];
const icons = [Coffee,PenLine,ShoppingBag,Newspaper,Store,MapPin,Lightbulb,PanelsTopLeft,BookOpen,Tv,Music,Languages,BookA,ChartNoAxesCombined,Trophy,CloudSun,House];
const groups = ['Community & Publishing','Community & Publishing','Shopping & Marketplace','Information & Knowledge','Shopping & Marketplace','Utilities','Information & Knowledge','Entertainment','Entertainment','Entertainment','Entertainment','Utilities','Information & Knowledge','Finance & Lifestyle','Finance & Lifestyle','Utilities','Finance & Lifestyle'];
export const services = names.map((name,i)=>({name,slug:slugs[i] ?? '',description:descriptions[i] ?? '',icon:icons[i] ?? Coffee,category:groups[i] ?? '',url:`https://${slugs[i]}.sholok.com`}));
export const products = [
 {id:1,name:'Studio Wireless Headphones',image:headphones,price:3490,original:4990,category:'Electronics',rating:4.8,reviews:128,discount:30},
 {id:2,name:'Everyday Canvas Tote',image:essentials,price:890,original:1290,category:'Fashion',rating:4.9,reviews:86,discount:31},
 {id:3,name:'Minimal Ceramic Mug',image:essentials,price:650,original:850,category:'Home & Living',rating:4.7,reviews:204,discount:24},
 {id:4,name:'Nordic Lounge Collection',image:living,price:12990,original:16990,category:'Home & Living',rating:4.9,reviews:42,discount:24},
 {id:5,name:'Comfort Sound Pro',image:headphones,price:4290,original:5990,category:'Electronics',rating:4.8,reviews:72,discount:28},
 {id:6,name:'Green Living Essentials',image:essentials,price:1490,original:1990,category:'Home & Living',rating:4.6,reviews:54,discount:25}
];
export type Product = typeof products[number];
export function getProductPage(items: Product[], page: number) {
 if (!items.length) return [];
 const start = (page * 4) % items.length;
 return [...items.slice(start), ...items.slice(0, start)].slice(0, 4);
}
export const stories = [
 {id:1,title:'A greener skyline: Dhaka’s next chapter',description:'New ideas, thoughtful spaces, and the people shaping a more connected city.',image:city,category:'News',source:'The Daily Perspective',time:'2 hours ago'},
 {id:2,title:'Small changes. A more beautiful everyday.',description:'Find inspiration in simple routines and thoughtfully designed essentials.',image:essentials,category:'Living',source:'Everyday Journal',time:'3 hours ago'},
 {id:3,title:'The art of a home that feels like you',description:'Natural light, a little greenery, and space for the things that matter.',image:living,category:'Home & Lifestyle',source:'Living Edit',time:'4 hours ago'},
 {id:4,title:'A quieter world, one playlist at a time',description:'The next generation of sound is built around your everyday moments.',image:headphones,category:'Technology',source:'Future Wire',time:'1 hour ago'},
 {id:5,title:'Your weekend guide to the city',description:'Explore lakeside walks and a fresh perspective on familiar places.',image:city,category:'Food',source:'City Compass',time:'5 hours ago'},
 {id:6,title:'Designing a slower, happier morning',description:'Rediscover the little rituals that make a big difference.',image:essentials,category:'Health',source:'Well & Good Daily',time:'6 hours ago'},
 {id:7,title:'Stories worth making time for',description:'Our editors share their favorite reads for the weekend.',image:living,category:'Books',source:'The Reading Room',time:'Today'},
 {id:8,title:'Creators bringing new worlds to life',description:'Meet the independent voices behind a new wave of visual storytelling.',image:city,category:'Webtoon',source:'Creative Collective',time:'Today'},
 {id:9,title:'A thoughtful approach to everyday style',description:'Comfortable essentials and a lighter wardrobe.',image:essentials,category:'Fashion & Beauty',source:'Style Notes',time:'Today'},
 {id:10,title:'Why green spaces make cities better',description:'A closer look at the science behind urban nature.',image:city,category:'Knowledge',source:'Open Mind',time:'Today'}
];
export const publications = ['THE DAILY','Perspective','CITY POST','FutureWire','the journal','MORNING EDIT','Open Mind','The Chronicle','LIVING EDIT','WEEKENDER','The Bulletin','NEXT'];
export const money = (value:number)=>`৳${value.toLocaleString('en-US')}`;
export function searchContent(query:string) {
 const q=query.trim().toLowerCase();
 if(!q) return [];
 return [...services.map(s=>({title:s.name,description:s.description,type:'Service',slug:s.slug})),...products.map(p=>({title:p.name,description:p.category,type:'Product',slug:'shopping'})),...stories.map(s=>({title:s.title,description:s.category,type:'Article',slug:'news'}))].filter(v=>`${v.title} ${v.description}`.toLowerCase().includes(q));
}
