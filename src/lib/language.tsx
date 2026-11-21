import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocalDemo } from '@/hooks/use-local-demo';

export type Language = 'en' | 'bn';
export const bengali: Record<string, string> = {
  'What are you looking for?': 'আপনি কী খুঁজছেন?', 'Search SHOLOK': 'শোলকে খুঁজুন', 'Search': 'খুঁজুন',
  'About Sholok': 'শোলক সম্পর্কে', 'Services': 'সেবাসমূহ', 'Help': 'সহায়তা', 'My Account': 'আমার অ্যাকাউন্ট',
  'Open service menu': 'সেবার মেনু খুলুন', 'All services': 'সব সেবা', 'Browse all services': 'সব সেবা দেখুন',
  'Explore all services': 'সব সেবা দেখুন', 'Find a service…': 'একটি সেবা খুঁজুন…', 'Find a service in menu': 'মেনুতে সেবা খুঁজুন',
  'Search services': 'সেবা খুঁজুন', 'No matching services.': 'কোনো সেবা পাওয়া যায়নি।',
  'Your everyday, connected.': 'আপনার প্রতিদিন, একসাথে।', 'Discover the world of SHOLOK': 'শোলকের জগৎ আবিষ্কার করুন',
  'Cafe': 'ক্যাফে', 'Blog': 'ব্লগ', 'Shopping': 'কেনাকাটা', 'News': 'সংবাদ', 'Smart Store': 'স্মার্ট স্টোর', 'Map': 'মানচিত্র',
  'Knowledge': 'জ্ঞান', 'Webtoon': 'ওয়েবটুন', 'Series': 'সিরিজ', 'TV / Videos': 'টিভি / ভিডিও', 'Music': 'সংগীত',
  'Translator': 'অনুবাদক', 'Dictionary': 'অভিধান', 'Finance': 'অর্থনীতি', 'Sports': 'খেলাধুলা', 'Weather': 'আবহাওয়া', 'Real Estate': 'আবাসন',
  'Community & Publishing': 'কমিউনিটি ও প্রকাশনা', 'Shopping & Marketplace': 'কেনাকাটা ও বাজার', 'Information & Knowledge': 'তথ্য ও জ্ঞান',
  'Utilities': 'প্রয়োজনীয় সেবা', 'Entertainment': 'বিনোদন', 'Finance & Lifestyle': 'অর্থনীতি ও জীবনযাপন',
  'Community and Discussions': 'কমিউনিটি ও আলোচনা', 'Personal and Professional Blogging': 'ব্যক্তিগত ও পেশাগত ব্লগ',
  'Online Shopping Marketplace': 'অনলাইন কেনাকাটার বাজার', 'News and Current Affairs': 'সংবাদ ও সমসাময়িক বিষয়',
  'Seller Marketplace and Public Stores': 'বিক্রেতাদের বাজার ও দোকান', 'Maps and Location Discovery': 'মানচিত্র ও স্থান অনুসন্ধান',
  'Questions and Answers': 'প্রশ্ন ও উত্তর', 'Digital Comics and Webtoons': 'ডিজিটাল কমিকস ও ওয়েবটুন',
  'Novels, Books and Comics': 'উপন্যাস, বই ও কমিকস', 'Video Streaming and Entertainment': 'ভিডিও ও বিনোদন',
  'Music Discovery and Listening': 'সংগীত খোঁজা ও শোনা', 'Language Translation': 'ভাষা অনুবাদ', 'Word Meanings and Definitions': 'শব্দের অর্থ ও সংজ্ঞা',
  'Financial Information and Market Insights': 'আর্থিক তথ্য ও বাজার বিশ্লেষণ', 'Sports News and Updates': 'খেলাধুলার সংবাদ',
  'Weather Information': 'আবহাওয়ার তথ্য', 'Property and Real Estate Listings': 'সম্পত্তি ও আবাসন তালিকা',
  'National': 'জাতীয়', 'Politics': 'রাজনীতি', 'Business': 'ব্যবসা', 'World': 'বিশ্ব', 'Health': 'স্বাস্থ্য', 'Lifestyle': 'জীবনযাপন',
  'News home': 'সংবাদ পাতায় যান', 'Featured news': 'প্রধান সংবাদ', 'Read article': 'নিবন্ধ পড়ুন', 'SHOLOK Editorial': 'শোলক সম্পাদকীয়',
  'Sign In': 'সাইন ইন', 'Sign in': 'সাইন ইন', 'Create Account': 'অ্যাকাউন্ট তৈরি', 'Create account': 'অ্যাকাউন্ট তৈরি',
  'Find ID': 'আইডি খুঁজুন', 'Forgot Password': 'পাসওয়ার্ড ভুলে গেছেন', 'Logout': 'লগআউট', 'Save settings': 'সেটিংস সংরক্ষণ',
  'Full name': 'পূর্ণ নাম', 'Email address': 'ইমেইল ঠিকানা', 'Display name': 'প্রদর্শিত নাম', 'Account information': 'অ্যাকাউন্টের তথ্য',
  'Open profile': 'প্রোফাইল খুলুন', 'Check account ID': 'অ্যাকাউন্ট আইডি দেখুন', 'Check recovery options': 'পুনরুদ্ধারের উপায় দেখুন',
  'This profile is stored on this device. Online sign-in and recovery emails are not connected.': 'এই প্রোফাইল এই ডিভাইসে সংরক্ষিত। অনলাইন সাইন ইন ও পুনরুদ্ধার ইমেইল সংযুক্ত নয়।',
  'Open the profile saved on this device using its email address.': 'ইমেইল ঠিকানা দিয়ে এই ডিভাইসে সংরক্ষিত প্রোফাইল খুলুন।',
  'Create your SHOLOK profile on this device to keep your name and account information together.': 'নাম ও অ্যাকাউন্টের তথ্য রাখতে এই ডিভাইসে আপনার শোলক প্রোফাইল তৈরি করুন।',
  'Enter your email address to check the account ID saved on this device.': 'এই ডিভাইসে সংরক্ষিত অ্যাকাউন্ট আইডি দেখতে ইমেইল ঠিকানা দিন।',
  'Check the recovery options for your email address. Password resets require an online account service.': 'আপনার ইমেইলের পুনরুদ্ধারের উপায় দেখুন। পাসওয়ার্ড পরিবর্তনের জন্য অনলাইন অ্যাকাউন্ট সেবা প্রয়োজন।',
  'No profile with that email is saved on this device. Create an account to save a profile.': 'এই ডিভাইসে ওই ইমেইলের প্রোফাইল নেই। একটি প্রোফাইল তৈরি করুন।',
  'Password recovery is not connected. No email has been sent. Your local profile does not use a password.': 'পাসওয়ার্ড পুনরুদ্ধার সংযুক্ত নয়। কোনো ইমেইল পাঠানো হয়নি। স্থানীয় প্রোফাইলে পাসওয়ার্ড ব্যবহৃত হয় না।',
  'Your preferences have been saved on this device.': 'আপনার পছন্দ এই ডিভাইসে সংরক্ষণ করা হয়েছে।', 'Account ID': 'অ্যাকাউন্ট আইডি',
  'Saved on this device': 'এই ডিভাইসে সংরক্ষিত', 'No services yet': 'এখনও কোনো সেবা নেই', 'Recently visited:': 'সম্প্রতি দেখা:', 'Hello,': 'স্বাগতম,',
  'A little more you. A lot more possibilities.': 'আপনার জন্য আরও সম্ভাবনা।', 'Sign in to sync your saved items and notes': 'সংরক্ষিত তথ্য এই ডিভাইসে থাকে',
  'Category Picks': 'বিভাগের পছন্দ', 'Trending Now': 'জনপ্রিয়', 'Benefits': 'ছাড়', 'Saved': 'সংরক্ষিত', 'Bag': 'ব্যাগ', 'All': 'সব',
  'Electronics': 'ইলেকট্রনিকস', 'Fashion': 'ফ্যাশন', 'Home & Living': 'ঘর ও জীবন', 'Recommended': 'বাছাইকৃত',
  'Price: low to high': 'দাম: কম থেকে বেশি', 'Top rated': 'সেরা রেটিং', 'Sort products': 'পণ্য সাজান', 'Shopping products': 'কেনাকাটার পণ্য',
  'Studio Wireless Headphones': 'স্টুডিও ওয়্যারলেস হেডফোন', 'Everyday Canvas Tote': 'ক্যানভাস টোট ব্যাগ', 'Minimal Ceramic Mug': 'সিরামিক মগ',
  'Nordic Lounge Collection': 'নর্ডিক লাউঞ্জ কালেকশন', 'Comfort Sound Pro': 'কমফোর্ট সাউন্ড প্রো', 'Green Living Essentials': 'সবুজ জীবনের প্রয়োজনীয় পণ্য',
  'Add to bag': 'ব্যাগে রাখুন', 'Added to bag ✓': 'ব্যাগে রাখা হয়েছে ✓', 'Remove from bag': 'ব্যাগ থেকে সরান', 'View bag': 'ব্যাগ দেখুন',
  'Your bag is saved on this device. Checkout and order processing are not connected.': 'আপনার ব্যাগ এই ডিভাইসে সংরক্ষিত। চেকআউট ও অর্ডার প্রক্রিয়া সংযুক্ত নয়।',
  'Your collection is empty. Save a product to see it here.': 'সংগ্রহ খালি। এখানে দেখতে একটি পণ্য সংরক্ষণ করুন।',
  'Discover your next favorite': 'আপনার পছন্দের পণ্য খুঁজুন', 'Show less': 'কম দেখুন', 'Show Less': 'কম দেখুন', 'View more': 'আরও দেখুন',
  'Previous': 'আগের', 'Next': 'পরের', 'Save to wishlist': 'পছন্দের তালিকায় রাখুন', 'Remove from wishlist': 'পছন্দের তালিকা থেকে সরান',
  'Discover something good': 'ভালো কিছু আবিষ্কার করুন', 'Curated for your everyday': 'আপনার প্রতিদিনের জন্য বাছাইকৃত', 'For You': 'আপনার জন্য',
  'Technology': 'প্রযুক্তি', 'Fashion & Beauty': 'ফ্যাশন ও সৌন্দর্য', 'Living': 'জীবনযাপন', 'Food': 'খাবার', 'Books': 'বই', 'Home & Lifestyle': 'ঘর ও জীবনযাপন',
  'Expand More': 'আরও দেখুন', 'Sponsored': 'প্রচারিত', 'Read feature': 'ফিচার পড়ুন', 'Worth a little of your time': 'আপনার সময়ের জন্য বাছাইকৃত',
  'More features': 'আরও ফিচার', 'Close': 'বন্ধ করুন', 'Voice search': 'কণ্ঠে খুঁজুন', 'Clear search': 'অনুসন্ধান মুছুন', 'Search results': 'অনুসন্ধানের ফল',
  'Suggestions': 'প্রস্তাবনা', 'Recent searches': 'সাম্প্রতিক অনুসন্ধান', 'Service': 'সেবা', 'Product': 'পণ্য', 'Article': 'নিবন্ধ',
  'No results found. Try another keyword.': 'কোনো ফল নেই। অন্য শব্দ দিয়ে খুঁজুন।', 'Back to top': 'উপরে যান',
  'Partners': 'অংশীদার', 'Developers': 'ডেভেলপার', 'Company': 'প্রতিষ্ঠান', 'Legal': 'নীতিমালা', 'About SHOLOK': 'শোলক সম্পর্কে', 'Contact': 'যোগাযোগ',
  'Careers': 'কর্মজীবন', 'Business Partners': 'ব্যবসায়িক অংশীদার', 'Smart Store Center': 'স্মার্ট স্টোর কেন্দ্র', 'Partner Programs': 'অংশীদার কর্মসূচি',
  'Developer Center': 'ডেভেলপার কেন্দ্র', 'API Documentation': 'এপিআই তথ্য', 'Open Source': 'ওপেন সোর্স', 'Terms of Use': 'ব্যবহারের শর্ত',
  'Privacy Policy': 'গোপনীয়তা নীতি', 'Cookie Policy': 'কুকি নীতি', 'Announcements': 'ঘোষণা', 'View all': 'সব দেখুন',
  'Welcome to your new everyday. Meet SHOLOK.': 'শোলকের সাথে নতুন প্রতিদিনকে স্বাগতম।', 'Made for a more connected world.': 'আরও সংযুক্ত বিশ্বের জন্য।',
  'All rights reserved.': 'সর্বস্বত্ব সংরক্ষিত।', 'Explore SHOLOK': 'শোলক আবিষ্কার করুন', 'YOUR WORLD, TOGETHER': 'আপনার জগৎ, একসাথে',
  '17 services. Endless possibilities.': '১৭টি সেবা। অফুরন্ত সম্ভাবনা।', '← All services': '← সব সেবা', '← SHOLOK home': '← শোলকের মূল পাতা',
  'Your data, your control': 'আপনার তথ্য, আপনার নিয়ন্ত্রণ', 'How we use information': 'তথ্য কীভাবে ব্যবহার করি', 'A more connected everyday': 'আরও সংযুক্ত প্রতিদিন',
  'SHOLOK brings communities, discovery, shopping, stories and everyday utilities together in one welcoming place.': 'শোলক কমিউনিটি, কেনাকাটা, গল্প ও প্রতিদিনের সেবাকে এক জায়গায় নিয়ে আসে।',
  'Help & support': 'সাহায্য ও সহায়তা', 'Frequently asked questions': 'সাধারণ প্রশ্ন', 'How do I find a service?': 'সেবা কীভাবে খুঁজব?',
  'Use the header search or open Services to browse the complete directory.': 'উপরের অনুসন্ধান ব্যবহার করুন অথবা সব সেবা দেখতে সেবাসমূহ খুলুন।',
  'Where are my notes and saved items stored?': 'আমার নোট ও পছন্দের পণ্য কোথায় থাকে?',
  'They are stored in this browser on this device. Clearing browser data removes them.': 'এগুলো এই ডিভাইসের ব্রাউজারে থাকে। ব্রাউজারের তথ্য মুছলে এগুলো মুছে যাবে।',
  'Can I place an order or reset a password?': 'অর্ডার বা পাসওয়ার্ড পরিবর্তন করতে পারি?',
  'Online checkout, account authentication and recovery emails are not connected. No payment or recovery request is sent.': 'অনলাইন চেকআউট, অ্যাকাউন্ট যাচাই ও পুনরুদ্ধার ইমেইল সংযুক্ত নয়। কোনো অর্থ বা পুনরুদ্ধারের অনুরোধ পাঠানো হয় না।',
  'Contact options': 'যোগাযোগের উপায়', 'Verified support contact details have not been supplied. Do not send passwords, payment details or private documents through this website.': 'যাচাইকৃত যোগাযোগের তথ্য দেওয়া হয়নি। এই ওয়েবসাইটে পাসওয়ার্ড, অর্থ প্রদানের তথ্য বা ব্যক্তিগত নথি পাঠাবেন না।',
  'Quick notes': 'দ্রুত নোট', 'Quick note': 'নোট', 'Quick links': 'দ্রুত লিংক', 'Your widget board': 'আপনার উইজেট বোর্ড', 'A little organized': 'আরও গোছানো',
  'Something to remember…': 'মনে রাখার মতো কিছু…', 'Edit your note…': 'আপনার নোট সম্পাদনা করুন…', 'Add note': 'নোট যোগ করুন', 'Edit note': 'নোট সম্পাদনা করুন',
  'Delete note': 'নোট মুছুন', 'Save edited note': 'সম্পাদিত নোট সংরক্ষণ করুন', 'Previous month': 'আগের মাস', 'Next month': 'পরের মাস',
  'Dhaka': 'ঢাকা', 'Mostly sunny': 'প্রধানত রৌদ্রোজ্জ্বল', 'Humidity': 'আর্দ্রতা', 'Wind': 'বাতাস', 'Air: Good': 'বায়ু: ভালো', 'Now': 'এখন',
  'Reference snapshot · Not live': 'স্থির তথ্য · সরাসরি নয়', 'Market at a glance': 'বাজারের চিত্র', 'Explore market insights': 'বাজার বিশ্লেষণ দেখুন',
  'A fresh day. A world to discover.': 'নতুন দিন। নতুন আবিষ্কার।', 'Make SHOLOK yours': 'শোলককে নিজের করে নিন',
  'Today’s good find': 'আজকের বাছাই', 'Shop now': 'পণ্য দেখুন', 'Explore the collection': 'কালেকশন দেখুন',
};

export function translate(text: string, language: Language): string {
  if (language === 'en') return text;
  const exact = bengali[text.trim()];
  if (exact) return text.replace(text.trim(), exact);
  return text;
}
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (text: string) => string };
const LanguageContext = createContext<LanguageContextValue>({ language: 'en', setLanguage: () => {}, t: text => text });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [storedLanguage, setLanguage] = useLocalDemo<Language>('sholok-language', 'en');
  const language = storedLanguage === 'bn' ? 'bn' : 'en';
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (text: string) => translate(text, language) }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);