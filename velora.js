  // Initialize Supabase client
  const SUPABASE_URL = 'https://bzamelajpbiurfgazgop.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6YW1lbGFqcGJpdXJmZ2F6Z29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNTA0NDIsImV4cCI6MjA4OTYyNjQ0Mn0.lm5FB3R6ZXx5SJMn7MdY8rTKQ46_P5CX0aPFWq8ekqM';
  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  window.supabase = supabaseClient;
  console.log('✅ Supabase client initialized');

// ========== SUPABASE CONFIGURATION ==========
const SUPA_URL = 'https://bzamelajpbiurfgazgop.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6YW1lbGFqcGJpdXJmZ2F6Z29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNTA0NDIsImV4cCI6MjA4OTYyNjQ0Mn0.lm5FB3R6ZXx5SJMn7MdY8rTKQ46_P5CX0aPFWq8ekqM';

// ========== GLOBAL DATA ==========
let providers = [];
let currentLang = localStorage.getItem('velora_lang') || 'en';
let bookedProfessionals = JSON.parse(localStorage.getItem('velora_booked') || '{}');

// ========== DATA ARRAYS ==========
const EGYPT_GOVERNORATES = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Port Said", "Suez", "Ismailia", "Mansoura", "Tanta", "Zagazig", "Fayoum", "Minya", "Assiut", "Sohag", "Qena", "Beni Suef", "Damietta", "Sharm El Sheikh", "Hurghada", "Marsa Matruh", "North Sinai", "South Sinai", "New Valley", "Red Sea", "Kafr El Sheikh", "Beheira", "Sharqia", "Dakahlia", "Gharbia", "Menoufia", "Qalyubia"];

const SERVICE_TYPES = ["Photography", "Videography", "Makeup Artist", "Event Planner", "Wedding Venue", "Car Rental", "DJ & Zaffa", "Florist", "Catering", "Spa & Henna", "Bridal Shop", "Accessories", "Honeymoon Travel", "Invitation Designer", "Lighting & Sound"];

const TICKER_ITEMS = ['Photography', 'Videography', 'Makeup Artists', 'Event Planners', 'Wedding Venues', 'Car Rentals', 'Bridal Shops', 'DJ & Zaffa', 'Florists', 'Catering', 'Spa & Henna'];

const customerSteps = [
  { num: "01", title: "Sign Up Free", desc: "Register in under 5 minutes. Name, phone, email, location. No credit card. No commitment." },
  { num: "02", title: "Discover Professionals", desc: "Browse hundreds of verified professionals. Filter by service, city, budget. Compare portfolios and real reviews." },
  { num: "03", title: "Contact Directly", desc: "Send a booking request to your chosen professional. Chat, confirm details, agree on price — done." },
  { num: "04", title: "Celebrate & Review", desc: "Your event is captured perfectly. Leave a verified review to help others and build the community." }
];

const customerBenefits = [
  "Browse all professionals — zero cost", "View full portfolios & videos", "Read verified client reviews",
  "Compare packages & pricing", "Send unlimited booking requests", "Contact providers directly — no middleman",
  "No hidden fees. No subscription. Ever."
];

const professionalSteps = [
  { num: "01", title: "Register Free", desc: "Fill in your business name, service type, location, contact & packages. Takes 5 minutes." },
  { num: "02", title: "Get Listed", desc: "VELORA verifies your profile. You go live on the platform within 24 hours." },
  { num: "03", title: "Receive Leads", desc: "Clients discover your portfolio and send booking requests directly to your dashboard." },
  { num: "04", title: "Earn & Grow", desc: "Deliver your service, get paid, collect 5-star reviews and build a thriving business." }
];

const professionalBenefits = [
  "Professional profile page & portfolio", "Booking requests to your dashboard", "You control pricing 100%",
  "No commissions on your earnings", "Verified badge builds instant trust", "Profile grows with us globally",
  "24/7 — your business never sleeps"
];

const occasions = [
  { icon: "💒", title: "Weddings", desc: "Photographers, videographers, makeup, venues — everything for your perfect day.", link: "Plan Your Wedding →" },
  { icon: "🎂", title: "Birthdays", desc: "Plan the perfect celebration with entertainers, photographers and beautiful venues.", link: "Plan Your Birthday →" },
  { icon: "🏢", title: "Corporate Events", desc: "Professional photographers and videographers for conferences, launches and team events.", link: "Plan Your Event →" },
  { icon: "💑", title: "Engagements", desc: "Find the perfect photographer for your engagement shoot or private celebration.", link: "Plan Your Engagement →" },
  { icon: "🎓", title: "Graduations", desc: "Celebrate achievements with portrait photographers and event planners who care.", link: "Plan Your Graduation →" },
  { icon: "👶", title: "Baby Showers", desc: "Capture precious moments with trusted photographers and decorators near you.", link: "Plan Your Shower →" },
  { icon: "📸", title: "Photo Sessions", desc: "Book studio or outdoor photographers for personal, family or professional portraits.", link: "Book a Session →" },
  { icon: "🎉", title: "Any Celebration", desc: "Whatever you're celebrating — VELORA has the right professional, guaranteed.", link: "Start Planning →" }
];

const trustPoints = [
  { icon: "✅", label: "Verified Providers Only", text: "Every professional goes through our review process before listing. You only see real, trusted professionals." },
  { icon: "⭐", label: "Real Reviews Only", text: "Reviews come exclusively from confirmed clients. No fake ratings, no incentivised posts — ever." },
  { icon: "📋", label: "Full Transparency", text: "Pricing, packages, location — everything is shown before you even make contact. No surprises." },
  { icon: "💬", label: "Direct Communication", text: "Talk directly to the professional. No confusing middlemen, no commissions taken from your booking." }
];

const testimonials = [
  { quote: "Found our wedding photographer in 10 minutes. No more hours scrolling Instagram. VELORA just works — beautifully.", name: "Sarah & Ahmed K.", sub: "Wedding · Cairo · 2024", stars: 5 },
  { quote: "Booked a makeup artist and videographer for my daughter's birthday in one place. Both were incredible — and it cost nothing to arrange.", name: "Nadia Hassan", sub: "Birthday · Alexandria · 2024", stars: 5 },
  { quote: "Our corporate event was covered beautifully. The photographer was professional, on time, and the photos exceeded every expectation.", name: "Khaled Mansour", sub: "Corporate Event · New Cairo · 2024", stars: 5 },
  { quote: "I was skeptical it was really free. It genuinely is. Compared five videographers side by side, chose one, contacted directly. Seamless.", name: "Laila & Omar S.", sub: "Engagement · Giza · 2024", stars: 5 },
  { quote: "As a photographer, VELORA transformed my business. Booking requests arrive while I sleep. The visibility is real and the dashboard is effortless.", name: "Mohamed Adel", sub: "Wedding Photographer · Cairo", stars: 5 }
];

const plans = [
  { name: "Basic", price: "Free", period: "Forever — no time limit", features: ["Listed on VELORA", "Full profile & portfolio", "Receive booking requests", "Provider dashboard", "Edit profile anytime"], popular: false },
  { name: "Featured", price: "$29", period: "per month", features: ["Everything in Basic", "Top of search results", "Gold 'Featured' badge", "Priority in listings", "Monthly analytics report", "Priority support"], popular: true },
  { name: "Premium", price: "$59", period: "per month", features: ["Everything in Featured", "Portfolio video showcase", "Monthly social spotlight", "Homepage feature rotation", "Custom profile URL", "Early feature access"], popular: false }
];

const includedItems = [
  "Professional profile with full portfolio gallery", "Booking requests sent to your dashboard & email", "You set and control your pricing 100%",
  "Verified provider badge for instant client trust", "Collect verified 5-star reviews from real clients", "No commission taken on any of your earnings",
  "Profile visible globally as VELORA expands"
];

// ========== TRANSLATIONS ==========
const translations = {
  en: {
    nav_home: "Home", nav_providers: "Professionals", nav_book: "Sign Up", nav_join: "Join Us", nav_terms: "Policies", nav_contact: "Contact",
    btn_list: "List Your Business", btn_book: "Sign Up Free",
    hero_badge: "✨ Egypt's Premier Event Marketplace ✨", hero_title: "Find Your Perfect ", hero_em: "Professional", hero_sub: "For Every Occasion",
    hero_desc: "Browse, compare and contact Egypt's top photographers, videographers, makeup artists, venues and more — all in one place. Always free for customers.",
    hero_browse: "Browse Professionals", hero_book: "Sign Up Free", scroll_hint: "Scroll",
    stat_pros: "Verified Pros", stat_free: "For Customers", stat_book: "To Book",
    categories_tag: "Browse by Category", categories_title: "All Services.<br><em>One Platform.</em>",
    hiw_tag: "Simple Process", hiw_title: "How <em>VELORA</em> Works", tab_customers: "For Customers", tab_professionals: "For Professionals",
    featured_tag: "Featured Professionals", featured_title: "Handpicked <em>Masters</em>", view_all: "View All Professionals →",
    occasions_tag: "Perfect For", occasions_title: "Every <em>Occasion</em>",
    why_tag: "Why VELORA", why_title: "Safe. Verified.<br><em>Always Free.</em>", trust_quote: "One platform. Every top professional in Egypt. Browse, compare, contact — always free.",
    testimonials_tag: "Real Stories", testimonials_title: "What Our <em>Clients Say</em>",
    provider_cta_tag: "For Professionals", provider_cta_title: "Grow Your Business.<br><em>Start Free.</em>", provider_cta_desc: "Join Egypt's fastest-growing event services marketplace. Your profile goes live in 24 hours and booking requests start arriving immediately — no upfront cost, no commissions on what you earn.",
    apply_join: "Apply to Join Free", talk_us: "Talk to Us First", included_title: "What's Included — Free",
    pricing_tag: "Plans & Pricing", pricing_title: "Choose the <em>Right Plan</em> for You", plan_note: "Clients NEVER pay a fee · Start with Basic free · Upgrade anytime",
    book_tag: "Free Forever", book_title: "Create Your <em>Account</em>", book_desc: "Join thousands of customers discovering Egypt's top event professionals. Sign up free — no credit card required.",
    "book-name": "Full Name *", "book-phone": "Phone Number *", "book-email": "Email Address *", "book-password": "Password *", "book-confirm-password": "Confirm Password *", "book-gender": "Gender *", "book-birthdate": "Date of Birth *", "book-city": "City *", "book-terms": "I have read and agree to the Terms & Privacy Policy. I understand VELORA is a marketplace connecting customers with verified professionals.",
    book_submit: "Create My Account", book_note: "100% free for customers. Your data is safe and never shared without your consent.",
    book_success_title: "✓ Account Created Successfully", book_success_text: "Welcome to VELORA! You can now browse and connect with Egypt's top event professionals.",
    join_tag: "For Professionals", join_title: "List Your Business <em>Free</em>", join_desc: "Apply to be listed on VELORA. Your profile goes live within 24 hours and booking requests start arriving immediately.",
    join_business: "Full Name / Business Name *", join_email: "Email Address *", join_phone: "Phone Number *", join_professional_phone: "Business Phone Number (for clients) *", join_service: "Service Type *", join_services_multiple: "Services Provided (Select all that apply)", join_locations_multiple: "Service Locations (Select all that apply)", join_price: "Starting Price (EGP) *", join_bio: "Tell Us About Your Business *", join_portfolio: "Portfolio / Social Media Link *", join_terms: "I confirm that all information provided is accurate. I understand VELORA is a marketplace and does not guarantee bookings. I agree to the Terms & Policies.",
    join_submit: "Submit Application", join_note: "Applications are reviewed within 24–48 hours. If approved, your profile goes live and booking requests start arriving immediately. No payment required at this stage.",
    join_success_title: "✓ Application Received", join_success_text: "We'll review your portfolio and reach out within 24-48 hours. Welcome to VELORA.",
    contact_tag: "Get in Touch", contact_title: "We'd Love to <em>Hear From You</em>", contact_details: "Contact <em>Details</em>", contact_email: "Email", contact_whatsapp: "WhatsApp", contact_website: "Website", contact_based: "Based In", contact_based_value: "Egypt · Expanding Globally", follow_us: "Follow Us", message_title: "Send a <em>Message</em>", contact_name: "Your Name *", contact_email_form: "Email *", contact_subject: "Subject", contact_message: "Message *", send_message: "Send Message", contact_success_title: "✓ Message Sent", contact_success_text: "We'll get back to you within 24 hours.",
    footer_desc: "Egypt's premier marketplace connecting clients with elite photographers, videographers, makeup artists, event planners and more. Always free for customers.",
    footer_platform: "Platform", footer_services: "Services", footer_company: "Company", footer_home: "Home", footer_providers: "Browse Professionals", footer_book: "Sign Up Free", footer_join: "List Your Business", footer_policy: "Booking Policy", footer_cancel: "Cancellation Policy", footer_privacy: "Privacy Policy", footer_contact: "Contact Us", footer_copyright: "© 2025 VELORA · All rights reserved · velora.studio", footer_legal_privacy: "Privacy", footer_legal_terms: "Terms", footer_legal_policies: "Policies"
  },
  ar: {
    nav_home: "الرئيسية", nav_providers: "المحترفون", nav_book: "إنشاء حساب", nav_join: "انضم إلينا", nav_terms: "السياسات", nav_contact: "اتصل بنا",
    btn_list: "سجل نشاطك التجاري", btn_book: "سجّل مجاناً",
    hero_badge: "✨ أكبر منصة لخدمات الفعاليات في مصر ✨", hero_title: "ابحث عن ", hero_em: "المحترف المثالي", hero_sub: "لأي مناسبة",
    hero_desc: "تصفح وقارن وتواصل مع أفضل المصورين ومصوري الفيديو وفناني الماكياج ومنسقي الأحداث في مصر - كل ذلك في مكان واحد. مجاني دائماً للعملاء.",
    hero_browse: "تصفح المحترفين", hero_book: "سجّل مجاناً", scroll_hint: "مرر",
    stat_pros: "محترف معتمد", stat_free: "مجاني للعملاء", stat_book: "للحجز",
    categories_tag: "تصفح حسب الفئة", categories_title: "جميع الخدمات.<br><em>منصة واحدة.</em>",
    hiw_tag: "عملية بسيطة", hiw_title: "كيف تعمل <em>فيلورا</em>", tab_customers: "للعملاء", tab_professionals: "للمحترفين",
    featured_tag: "محترفون مميزون", featured_title: "أفضل <em>الخبراء</em>", view_all: "عرض جميع المحترفين ←",
    occasions_tag: "مثالي لـ", occasions_title: "كل <em>مناسبة</em>",
    why_tag: "لماذا فيلورا", why_title: "آمن. موثوق.<br><em>مجاني دائماً.</em>", trust_quote: "منصة واحدة. كل المحترفين المتميزين في مصر. تصفح، قارن، تواصل — مجاني دائماً.",
    testimonials_tag: "قصص حقيقية", testimonials_title: "ماذا يقول <em>عملاؤنا</em>",
    provider_cta_tag: "للمحترفين", provider_cta_title: "طور عملك.<br><em>ابدأ مجاناً.</em>", provider_cta_desc: "انضم إلى أسرع منصة لخدمات الفعاليات نمواً في مصر. يتم نشر ملفك الشخصي خلال 24 ساعة وتبدأ طلبات الحجز في الوصول فوراً — بدون تكاليف مسبقة، بدون عمولات على ما تكسبه.",
    apply_join: "قدم طلب الانضمام مجاناً", talk_us: "تحدث إلينا أولاً", included_title: "ما تشمله الخدمة — مجاناً",
    pricing_tag: "الباقات والأسعار", pricing_title: "اختر <em>الباقة المناسبة</em> لك", plan_note: "العملاء لا يدفعون أي رسوم · ابدأ مجاناً مع الباقة الأساسية · ارتق في أي وقت",
    book_tag: "مجاني دائماً", book_title: "أنشئ <em>حسابك</em>", book_desc: "انضم إلى آلاف العملاء الذين يكتشفون أفضل محترفي الفعاليات في مصر. سجّل مجاناً — دون الحاجة لبطاقة ائتمان.",
    "book-name": "الاسم الكامل *", "book-phone": "رقم الهاتف *", "book-email": "البريد الإلكتروني *", "book-password": "كلمة المرور *", "book-confirm-password": "تأكيد كلمة المرور *", "book-gender": "الجنس *", "book-birthdate": "تاريخ الميلاد *", "book-city": "المدينة *", "book-terms": "لقد قرأت وأوافق على الشروط وسياسة الخصوصية. أفهم أن فيلورا منصة سوق تربط العملاء بالمحترفين الموثوقين.",
    book_submit: "إنشاء حسابي", book_note: "مجاني 100% للعملاء. بياناتك آمنة ولن تُشارك دون موافقتك.",
    book_success_title: "✓ تم إنشاء الحساب بنجاح", book_success_text: "مرحباً بك في فيلورا! يمكنك الآن تصفح والتواصل مع أفضل محترفي الفعاليات في مصر.",
    join_tag: "للمحترفين", join_title: "سجل نشاطك التجاري <em>مجاناً</em>", join_desc: "تقدم لتكون مدرجاً في فيلورا. يتم نشر ملفك الشخصي خلال 24 ساعة وتبدأ طلبات الحجز في الوصول فوراً.",
    join_business: "الاسم الكامل / اسم النشاط التجاري *", join_email: "البريد الإلكتروني *", join_phone: "رقم الهاتف *", join_professional_phone: "رقم هاتف العمل التجاري (للعملاء) *", join_service: "نوع الخدمة *", join_services_multiple: "الخدمات المقدمة (اختر كل ما ينطبق)", join_locations_multiple: "مواقع الخدمة (اختر كل ما ينطبق)", join_price: "السعر الابتدائي (جنيه) *", join_bio: "أخبرنا عن نشاطك التجاري *", join_portfolio: "رابط المعرض / وسائل التواصل الاجتماعي *", join_terms: "أؤكد أن جميع المعلومات المقدمة دقيقة. أفهم أن فيلورا هي منصة سوق ولا تضمن الحجوزات. أوافق على الشروط والسياسات.",
    join_submit: "إرسال الطلب", join_note: "تتم مراجعة الطلبات في غضون 24-48 ساعة. إذا تمت الموافقة، سيتم نشر ملفك الشخصي وستبدأ طلبات الحجز في الوصول فوراً. لا يلزم الدفع في هذه المرحلة.",
    join_success_title: "✓ تم استلام الطلب", join_success_text: "سنراجع معرض أعمالك ونتواصل معك خلال 24-48 ساعة. مرحباً بك في فيلورا.",
    contact_tag: "تواصل معنا", contact_title: "يسعدنا <em>سماع رأيك</em>", contact_details: "تفاصيل <em>الاتصال</em>", contact_email: "البريد الإلكتروني", contact_whatsapp: "واتساب", contact_website: "الموقع الإلكتروني", contact_based: "المقر", contact_based_value: "مصر · نتوسع عالمياً", follow_us: "تابعنا", message_title: "أرسل <em>رسالة</em>", contact_name: "اسمك *", contact_email_form: "البريد الإلكتروني *", contact_subject: "الموضوع", contact_message: "الرسالة *", send_message: "إرسال الرسالة", contact_success_title: "✓ تم إرسال الرسالة", contact_success_text: "سنتواصل معك في غضون 24 ساعة.",
    footer_desc: "أكبر منصة لخدمات الفعاليات في مصر تربط العملاء بأفضل المصورين ومصوري الفيديو وفناني الماكياج ومنسقي الأحداث والمزيد. مجاني دائماً للعملاء.",
    footer_platform: "المنصة", footer_services: "الخدمات", footer_company: "الشركة", footer_home: "الرئيسية", footer_providers: "تصفح المحترفين", footer_book: "سجّل مجاناً", footer_join: "سجل نشاطك التجاري", footer_policy: "سياسة الحجز", footer_cancel: "سياسة الإلغاء", footer_privacy: "سياسة الخصوصية", footer_contact: "اتصل بنا", footer_copyright: "© 2025 فيلورا · جميع الحقوق محفوظة · velora.studio", footer_legal_privacy: "الخصوصية", footer_legal_terms: "الشروط", footer_legal_policies: "السياسات"
  }
};

function t(key) { return translations[currentLang][key] || key; }

// ========== CURSOR ==========
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
(function animRing() { rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing); })();
document.addEventListener('mouseover', e => { if (e.target.closest('a,button,.category-card,.provider-card,.occ-card,.filter-btn,.testimonial-btn,.social-link,.footer-links a')) document.body.classList.add('cursor-hover'); });
document.addEventListener('mouseout', e => { if (e.target.closest('a,button,.category-card,.provider-card,.occ-card,.filter-btn,.testimonial-btn,.social-link,.footer-links a')) document.body.classList.remove('cursor-hover'); });

// ========== SCROLL BAR ==========
const scrollBar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => { const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100; scrollBar.style.width = pct + '%'; });

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { if (window.scrollY > 50) navbar.classList.add('solid'); else navbar.classList.remove('solid'); });

// ========== TICKER ==========
(function buildTicker() { const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; document.getElementById('ticker-track').innerHTML = items.map(i => `<span class="ticker-item">${i}<span class="ticker-dot"></span></span>`).join(''); })();

// ========== LOAD PROVIDERS FROM SUPABASE ==========
async function loadProvidersFromSupabase() {
  console.log('🔄 Loading professionals from Supabase...');
  try {
    const response = await fetch(`${SUPA_URL}/rest/v1/Applications?select=*&limit=1000`, {
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY,
        'Range': '0-999'
      }
    });

    const allData = await response.json();
    console.log('📦 All data from Supabase:', allData);
    console.log('📊 Total records:', allData.length);
    const statusBreakdown = allData.reduce((acc, a) => { acc[a.status || 'null'] = (acc[a.status || 'null'] || 0) + 1; return acc; }, {});
    console.log('📋 Status breakdown:', statusBreakdown);

    // Show all providers except explicitly rejected ones
    const approvedData = allData.filter(app => app.status !== 'rejected');
    console.log('✅ Visible professionals:', approvedData.length);

    if (approvedData.length === 0) {
      providers = [];
      renderProviders();
      return;
    }

    // Convert to providers format
    providers = approvedData.map(app => {
      // Handle locations - simple text like "Cairo,Giza"
      let locationsArray = ["Cairo"];
      if (app.locations && typeof app.locations === 'string' && app.locations !== '') {
        // Split by comma
        locationsArray = app.locations.split(',').map(l => l.trim());
      }
      if (locationsArray.length === 0) locationsArray = ["Cairo"];
      
      // Handle services - simple text
      let servicesArray = [app.service_type || "Professional"];
      if (app.services && typeof app.services === 'string' && app.services !== '') {
        servicesArray = app.services.split(',').map(s => s.trim());
      }
      if (servicesArray.length === 0) servicesArray = [app.service_type || "Professional"];
      
      // Handle price - convert to number
      let priceValue = 0;
      if (app.price) {
        priceValue = parseInt(app.price) || 0;
      }
      
      // Get phone number
      let phoneValue = app.phone_number || app.phone || "";
      
      console.log(`📋 Loading: ${app.business_name} - ${app.service_type} - ${app.locations}`);
      
      return {
  id: app.id,
  name: app.business_name,
  type: app.service_type || "Professional",
  icon: getIconForService(app.service_type),
  rating: 4.5,
  reviews: 0,
  badge: "",
  price: priceValue,
  phone: phoneValue,
  email: app.email,
  locations: locationsArray,
  services: servicesArray,
  bio: app.bio || "Professional service provider",
  since: app.created_at ? new Date(app.created_at).getFullYear().toString() : "2025",
  portfolio: app.portfolio_link || "",
  images: app.images || ["📸", "🎥", "✨", "💼", "🏆", "⭐"],
  testimonials: []
};
    });
    
    console.log('🎉 Providers loaded:', providers.length);
    
    // Refresh the page
    renderFilters();
    renderProviders();
    renderTrustStats();
    initProviderSelect();
    
  } catch (error) {
    console.error('❌ Error loading professionals:', error);
    loadDemoProviders();
  }
}

// ========== HELPER FUNCTIONS ==========
function getIconForService(serviceType) {
  const icons = {
    'Photography': '📸',
    'Videography': '🎥',
    'Makeup Artist': '💄',
    'Event Planner': '🎪',
    'Wedding Venue': '🏨',
    'Car Rental': '🚗',
    'DJ & Zaffa': '🎵',
    'Florist': '💐',
    'Catering': '🍽️',
    'Spa & Henna': '💆',
    'Bridal Shop': '👗',
    'Accessories': '💍',
    'Honeymoon Travel': '✈️',
    'Invitation Designer': '💌',
    'Lighting & Sound': '💡',
    'Other': '✨'
  };
  return icons[serviceType] || '✨';
}

function loadDemoProviders() {
  console.log('⚠️ Using demo providers (Supabase connection may have issues)');
  providers = [
    { id: 1, name: "Ahmed Hassan Photography", type: "Photography", icon: "📸", rating: 4.9, reviews: 47, badge: "Featured", price: 5000, phone: "+20 100 123 4567", locations: ["Cairo", "Giza"], services: ["Photography"], bio: "Professional photographer", since: "2018", images: ["📸"], testimonials: [] },
    { id: 2, name: "Nour Beauty", type: "Makeup Artist", icon: "💄", rating: 5.0, reviews: 61, badge: "Top Rated", price: 3500, phone: "+20 122 345 6789", locations: ["Cairo", "Alexandria"], services: ["Makeup Artist"], bio: "Bridal makeup specialist", since: "2019", images: ["💄"], testimonials: [] },
    { id: 3, name: "Elite Events Egypt", type: "Event Planner", icon: "🎪", rating: 4.8, reviews: 19, badge: "", price: 15000, phone: "+20 111 222 3333", locations: ["Cairo", "Giza", "Alexandria"], services: ["Event Planner"], bio: "Event planning company", since: "2015", images: ["🎪"], testimonials: [] }
  ];
  renderFilters();
  renderProviders();
  renderTrustStats();
}

function renderTrustStats() {
  const container = document.getElementById('trust-stats');
  if (container) {
    container.innerHTML = `
      <div class="trust-stat"><div class="trust-stat-n">${providers.length}+</div><div class="trust-stat-l">${currentLang === 'ar' ? 'محترف معتمد' : 'Verified Pros'}</div></div>
      <div class="trust-stat"><div class="trust-stat-n">FREE</div><div class="trust-stat-l">${currentLang === 'ar' ? 'مجاني للعملاء' : 'For Customers'}</div></div>
      <div class="trust-stat"><div class="trust-stat-n">24h</div><div class="trust-stat-l">${currentLang === 'ar' ? 'مراجعة الملف' : 'Profile Review'}</div></div>
      <div class="trust-stat"><div class="trust-stat-n">10K+</div><div class="trust-stat-l">${currentLang === 'ar' ? 'فعالية/سنة' : 'Events/Year'}</div></div>
    `;
  }
}

// ========== RENDER FUNCTIONS ==========
function renderCategories() {
  const container = document.getElementById('categories-grid');
  const categoriesList = ["Photography", "Videography", "Makeup Artist", "Event Planner", "Wedding Venue", "Car Rental", "DJ & Zaffa", "Florist", "Catering", "Spa & Henna"];
  container.innerHTML = categoriesList.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat}')">
      <div class="category-icon">${getIconForService(cat)}</div>
      <div class="category-name">${cat}</div>
    </div>
  `).join('');
}

function renderFilters() {
  const container = document.getElementById('filters-container');
  const types = [...new Set(providers.map(p => p.type))];
  container.innerHTML = `<button class="filter-btn active" onclick="filterProviders('all')">${currentLang === 'ar' ? 'الكل' : 'All'}</button>` + types.map(type => `<button class="filter-btn" onclick="filterProviders('${type}')">${type}</button>`).join('');
}

function renderProviders(filter = 'all') {
  const container = document.getElementById('providers-grid');
  if (!container) return;
  const filtered = filter === 'all' ? providers : providers.filter(p => p.type === filter);
  
  container.innerHTML = filtered.map(p => {
    // Safely get locations for display
    let locationsDisplay = "Cairo";
    if (p.locations) {
      if (Array.isArray(p.locations)) {
        locationsDisplay = p.locations.slice(0, 2).join(', ');
        if (p.locations.length > 2) locationsDisplay += ' +';
      } else if (typeof p.locations === 'string') {
        locationsDisplay = p.locations;
      }
    }
    
    return `<div class="provider-card" onclick="openProviderModal(${p.id})">
      <div class="provider-img">${p.icon}${p.badge ? `<span class="provider-badge">${p.badge}</span>` : ''}</div>
      <div class="provider-info">
        <div class="provider-name">${p.name}</div>
        <div class="provider-type">${p.type}</div>
        <div class="provider-location"><i class="fas fa-map-marker-alt"></i> ${locationsDisplay}</div>
        <div class="provider-stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''} (${p.reviews})</div>
        <div class="provider-price">${currentLang === 'ar' ? 'من' : 'from'} <span>${p.price.toLocaleString()} EGP</span></div>
        <button class="btn-book" onclick="event.stopPropagation(); openQuickBookingModal(${p.id})">${currentLang === 'ar' ? 'احجز الآن' : 'Book Now'}</button>
      </div>
    </div>`;
  }).join('');
}

function filterProviders(type) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  renderProviders(type);
}

function filterByCategory(category) { filterProviders(category); navigateTo('providers'); }

function renderOccasions() {
  const container = document.getElementById('occasions-grid');
  container.innerHTML = occasions.map((occ, i) => `<div class="occ-card" onclick="navigateTo('book')"><div class="occ-icon">${occ.icon}</div><div class="occ-title">${occ.title}</div><p class="occ-desc">${occ.desc}</p><button class="occ-link">${occ.link}</button></div>`).join('');
}

function renderTrustPoints() {
  const container = document.getElementById('trust-points');
  container.innerHTML = trustPoints.map((pt, i) => `<div class="trust-pt"><div class="trust-icon">${pt.icon}</div><div><div class="trust-label">${pt.label}</div><p class="trust-text">${pt.text}</p></div></div>`).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonial-track');
  container.innerHTML = testimonials.map(t => `<div class="testimonial-card"><div class="testimonial-stars">${'★'.repeat(t.stars)}</div><p class="testimonial-quote">"${t.quote}"</p><div class="testimonial-name">${t.name}</div><div class="testimonial-sub">${t.sub}</div></div>`).join('');
}

function renderPlans() {
  const container = document.getElementById('plans-grid');
  container.innerHTML = plans.map(plan => `<div class="plan-card ${plan.popular ? 'popular' : ''}">${plan.popular ? '<div class="plan-popular-badge">Most Popular</div>' : ''}<div class="plan-name">${plan.name}</div><div class="plan-price">${plan.price}</div><div class="plan-period">${plan.period}</div><div class="plan-feats">${plan.features.map(f => `<div class="plan-feat"><span class="plan-feat-dot">✓</span> ${f}</div>`).join('')}</div><button class="btn btn-outline" onclick="navigateTo('join')"><span>${plan.name === 'Basic' ? (currentLang === 'ar' ? 'تقدم مجاناً' : 'Apply Free') : (currentLang === 'ar' ? 'تقدم وارتق' : 'Apply & Upgrade')}</span></button></div>`).join('');
}

function renderIncludedList() {
  const container = document.getElementById('included-list');
  container.innerHTML = includedItems.map(item => `<div class="pcta-item"><span class="pcta-dot">✦</span> ${item}</div>`).join('');
}

function renderCustomerSteps() {
  const container = document.getElementById('customer-steps');
  container.innerHTML = customerSteps.map(step => `<div class="hiw-step"><div class="step-num">${step.num}</div><div><div class="step-title">${step.title}</div><p class="step-desc">${step.desc}</p></div></div>`).join('');
  const visual = document.getElementById('customer-visual');
  visual.innerHTML = `<div class="hiw-visual-title">${currentLang === 'ar' ? 'مجاني دائماً للعملاء' : 'Always Free for Customers'}</div><div class="checklist">${customerBenefits.map(item => `<div class="check-item"><div class="check-dot">✓</div> ${item}</div>`).join('')}</div><button class="btn btn-primary btn-large" style="margin-top: 2rem; width: 100%;" onclick="navigateTo('providers')">${currentLang === 'ar' ? 'تصفح المحترفين الآن' : 'Browse Professionals Now'}</button>`;
}

function renderProfessionalSteps() {
  const container = document.getElementById('professional-steps');
  container.innerHTML = professionalSteps.map(step => `<div class="hiw-step"><div class="step-num">${step.num}</div><div><div class="step-title">${step.title}</div><p class="step-desc">${step.desc}</p></div></div>`).join('');
  const visual = document.getElementById('professional-visual');
  visual.innerHTML = `<div class="hiw-visual-title">${currentLang === 'ar' ? 'نشاطك التجاري، بأقصى طاقة' : 'Your Business, Supercharged'}</div><div class="checklist">${professionalBenefits.map(item => `<div class="check-item"><div class="check-dot">✓</div> ${item}</div>`).join('')}</div><button class="btn btn-primary btn-large" style="margin-top: 2rem; width: 100%;" onclick="navigateTo('join')">${currentLang === 'ar' ? 'سجل نشاطك التجاري مجاناً' : 'List Your Business Free'}</button>`;
}

function renderTerms() {
  const container = document.getElementById('terms-content');
  container.innerHTML = `<div class="terms-section"><h3>1. Platform Role & Disclaimer</h3><div class="legal-highlight"><strong>IMPORTANT LEGAL NOTICE:</strong> VELORA is a marketplace platform that connects clients with independent service providers. VELORA DOES NOT PROVIDE ANY SERVICES DIRECTLY.</div><p>VELORA acts solely as a technology platform facilitating connections. VELORA is not a party to any agreement. All bookings, payments, and service agreements are made directly between Clients and Professionals.</p><p><strong>VELORA MAKES NO WARRANTIES, REPRESENTATIONS, OR GUARANTEES REGARDING:</strong> The quality, safety, or legality of any professional's services. The accuracy of professional profiles, portfolios, or reviews. The availability, punctuality, or performance of any professional. The outcome or results of any service provided.</p></div><div class="terms-section"><h3>2. No Liability / Indemnification</h3><p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELORA AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE</strong> for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with: Any service provided by a Professional. Any agreement or dispute between Client and Professional. Any failure of a Professional to perform services as agreed. Any injury, loss, or damage resulting from services provided. Any cancellation, delay, or rescheduling of services.</p><p><strong>YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS VELORA</strong> from any and all claims arising out of or relating to your use of the VELORA platform, any agreement between you and any Professional, any dispute between you and any Professional.</p></div><div class="terms-section"><h3>3. Booking Process</h3><p>Clients submit booking requests through the VELORA platform. These requests are sent directly to the selected Professional. VELORA does not approve, confirm, or guarantee any booking. The Professional is solely responsible for accepting or declining any booking request. All communication regarding booking confirmation, pricing, and service details must occur directly between Client and Professional.</p><p><strong>VELORA DOES NOT HANDLE PAYMENTS.</strong> All payments are made directly between Client and Professional. VELORA does not process, collect, or hold any payments for services.</p></div><div class="terms-section"><h3>4. Cancellation Policy</h3><p>Cancellation terms are determined solely by the agreement between Client and Professional. VELORA recommends that Clients and Professionals agree on cancellation terms in writing before services are rendered. VELORA is not responsible for enforcing any cancellation policy or mediating disputes.</p></div><div class="terms-section"><h3>5. Contact Information</h3><p>For questions regarding these Terms, please contact us at: <a href="mailto:hello@velora.studio">hello@velora.studio</a></p><p><strong>Last Updated: March 2025</strong></p></div>`;
}

function initCheckboxGroups() {
  const servicesContainer = document.getElementById('services-checkbox-group');
  servicesContainer.innerHTML = SERVICE_TYPES.map(s => `<label class="checkbox-item"><input type="checkbox" name="services" value="${s}"> ${s}</label>`).join('');
  const locationsContainer = document.getElementById('locations-checkbox-group');
  locationsContainer.innerHTML = EGYPT_GOVERNORATES.map(l => `<label class="checkbox-item"><input type="checkbox" name="locations" value="${l}"> ${l}</label>`).join('');
}

function initProviderSelect() {
  const select = document.getElementById('b-provider');
  select.innerHTML = '<option value="" disabled selected>' + (currentLang === 'ar' ? 'اختر محترفاً' : 'Select a professional') + '</option>' + providers.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
}

// ========== PROVIDER MODAL ==========
function openProviderModal(id) {
  const provider = providers.find(p => p.id === id);
  window.currentProviderId = id; 
  const isBooked = bookedProfessionals[id];
  
  // Safely get locations display
  let locationsDisplay = "";
  if (provider.locations && Array.isArray(provider.locations)) {
    locationsDisplay = provider.locations.join(', ');
  } else if (typeof provider.locations === 'string') {
    locationsDisplay = provider.locations;
  } else {
    locationsDisplay = "Cairo";
  }
  
  // Safely get services display
  let servicesDisplay = "";
  if (provider.services && Array.isArray(provider.services)) {
    servicesDisplay = provider.services.join(', ');
  } else if (typeof provider.services === 'string') {
    servicesDisplay = provider.services;
  } else {
    servicesDisplay = provider.type;
  }
  
  const phoneHtml = isBooked ? 
    `<div class="info-card"><h4>📞 ${currentLang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</h4><p class="phone-number-revealed">${provider.phone || (currentLang === 'ar' ? 'غير متوفر' : 'Not provided')}</p></div>` : 
    `<div class="info-card"><h4>📞 ${currentLang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</h4><div id="phone-${id}" class="phone-number-blurred" onclick="openQuickBookingModal(${id})">🔒 ${currentLang === 'ar' ? 'احجز لرؤية الرقم' : 'Book to reveal'}</div><div id="phone-hint-${id}" class="phone-number-hint">✱ ${currentLang === 'ar' ? 'اضغط للحجز أولاً لرؤية رقم الهاتف' : 'Book first to reveal phone number'}</div></div>`;
  
  const inner = document.getElementById('modal-content-inner');
  inner.innerHTML = `<div class="modal-header"><div class="modal-avatar">${provider.icon}</div><div class="modal-title"><h2>${provider.name}</h2><p>${provider.type} • ${provider.rating} ★</p></div></div>
  <div class="modal-body">
    <div class="modal-gallery">${(() => {
  const userImages = provider.images || [];
  if (userImages.length > 0 && userImages[0] && userImages[0].startsWith('http')) {
    return userImages.slice(0, 6).map(img => `<div class="gallery-item"><img src="${img}" style="width:100%; height:100%; object-fit:cover; border-radius: var(--radius-sm);" onerror="this.src='https://via.placeholder.com/150?text=No+Image'"></div>`).join('');
  } else {
    return provider.images.slice(0, 6).map(img => `<div class="gallery-item">${img}</div>`).join('');
  }
})()}</div>
    <div class="info-grid">
      <div class="info-card"><h4>${currentLang === 'ar' ? 'نبذة' : 'About'}</h4><p>${provider.bio}</p></div>
      <div class="info-card"><h4>${currentLang === 'ar' ? 'المواقع' : 'Locations'}</h4><p>${locationsDisplay}</p></div>
      <div class="info-card"><h4>${currentLang === 'ar' ? 'الخدمات' : 'Services'}</h4><p>${servicesDisplay}</p></div>
      <div class="info-card"><h4>${currentLang === 'ar' ? 'السعر الابتدائي' : 'Starting Price'}</h4><p>${provider.price.toLocaleString()} EGP</p></div>
      <div class="info-card"><h4>${currentLang === 'ar' ? 'انضم منذ' : 'Joined'}</h4><p>${provider.since}</p></div>
      ${phoneHtml}
    </div>
    <div class="availability-check">
      <h4>${currentLang === 'ar' ? 'تحقق من التوفر' : 'Check Availability'}</h4>
      <input type="date" id="availability-date" class="date-input">
      <button class="check-availability-btn" onclick="checkAvailability()">${currentLang === 'ar' ? 'تحقق' : 'Check'}</button>
      <div id="availability-result" class="availability-result"></div>
    </div>
    <div>
      <h4>${currentLang === 'ar' ? 'التقييمات' : 'Reviews'}</h4>
      <div class="testimonials-list">${provider.testimonials && provider.testimonials.length ? provider.testimonials.map(t => `<div class="testimonial-item"><div class="testimonial-stars">${'★'.repeat(t.rating)}</div><p>"${t.text}"</p><strong>- ${t.name}</strong></div>`).join('') : '<p>' + (currentLang === 'ar' ? 'لا توجد تقييمات بعد' : 'No reviews yet') + '</p>'}</div>
    </div>
  </div>`;
  document.getElementById('provider-modal').classList.add('active');
}

function closeModal() { document.getElementById('provider-modal').classList.remove('active'); }

async function checkAvailability() {
  const provider = providers.find(p => p.id === window.currentProviderId);
  const date = document.getElementById('availability-date').value;
  const result = document.getElementById('availability-result');
  
  if (!date) {
    result.innerHTML = currentLang === 'ar' ? 'الرجاء اختيار تاريخ' : 'Please select a date';
    return;
  }
  
  result.innerHTML = '<span style="color: var(--gold-deep);">Checking...</span>';
  
  try {
    // Check if date is booked in Bookings table
    const bookingsRes = await fetch(`${SUPA_URL}/rest/v1/Bookings?professional_id=eq.${provider.id}&event_date=eq.${date}&select=*`, {
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY
      }
    });
    const bookings = await bookingsRes.json();
    
    // Check if date is blocked in availability table
    const availRes = await fetch(`${SUPA_URL}/rest/v1/professional_availability?professional_id=eq.${provider.id}&unavailable_date=eq.${date}&select=*`, {
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY
      }
    });
    const blockedDates = await availRes.json();
    
    if (bookings.length > 0 || blockedDates.length > 0) {
      result.innerHTML = `<span class="unavailable">✗ ${currentLang === 'ar' ? 'غير متاح في هذا التاريخ' : 'Not available on this date'}</span>`;
    } else {
      result.innerHTML = `<span class="available">✓ ${currentLang === 'ar' ? 'متاح في هذا التاريخ!' : 'Available on this date!'}</span>`;
    }
  } catch (err) {
    console.error('Availability check error:', err);
    result.innerHTML = currentLang === 'ar' ? 'خطأ في التحقق' : 'Error checking availability';
  }
}

// ========== QUICK BOOKING MODAL ==========
function openQuickBookingModal(providerId) {
  const user = (() => { try { return JSON.parse(localStorage.getItem('velora_user')); } catch(e) { return null; } })();
  if (!user) {
    navigateTo('login');
    return;
  }
  const provider = providers.find(p => p.id === providerId);
  const modal = document.getElementById('quickBookingModal');
  const content = document.getElementById('quickBookingContent');
  content.innerHTML = `<div style="padding: 1rem;">
    <h3 style="margin-bottom: 0.5rem;">${currentLang === 'ar' ? 'احجز الآن لرؤية رقم الهاتف' : 'Book Now to Reveal Phone Number'}</h3>
    <p style="margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--color-text-light);">Booking as <strong>${user.full_name}</strong></p>
    <form id="quickForm" class="quick-booking-form">
      <div><label>${currentLang === 'ar' ? 'نوع الفعالية *' : 'Event Type *'}</label>
        <select id="qbEvent" required>
          <option value="Wedding">${currentLang === 'ar' ? 'زفاف' : 'Wedding'}</option>
          <option value="Engagement">${currentLang === 'ar' ? 'خطوبة' : 'Engagement'}</option>
          <option value="Birthday">${currentLang === 'ar' ? 'عيد ميلاد' : 'Birthday'}</option>
          <option value="Corporate">${currentLang === 'ar' ? 'فعالية مؤسسية' : 'Corporate'}</option>
          <option value="Graduation">Graduation</option>
          <option value="Photo Session">Photo Session</option>
          <option value="Other">${currentLang === 'ar' ? 'أخرى' : 'Other'}</option>
        </select>
      </div>
      <div><label>${currentLang === 'ar' ? 'تاريخ الفعالية *' : 'Event Date *'}</label><input type="date" id="qbDate" required></div>
      <div><label>${currentLang === 'ar' ? 'موقع الفعالية *' : 'Event Location *'}</label><input type="text" id="qbLocation" required placeholder="City, venue or address"></div>
      <button type="submit">${currentLang === 'ar' ? 'احجز الآن وكشف الرقم' : 'Book Now & Reveal Number'}</button>
    </form>
    <div id="quickResult"></div>
  </div>`;
  modal.classList.add('active');
  document.getElementById('quickForm').addEventListener('submit', async (e) => { e.preventDefault(); await submitQuickBooking(provider); });
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const icon = btn.querySelector('i');
    icon.className = 'fas fa-check';
    btn.style.color = 'var(--color-sage)';
    setTimeout(() => { icon.className = 'fas fa-copy'; btn.style.color = ''; }, 2000);
  });
}

function generateRef() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let ref = 'VEL-';
  for (let i = 0; i < 8; i++) ref += chars[Math.floor(Math.random() * chars.length)];
  return ref;
}

async function submitQuickBooking(provider) {
  const btn = document.querySelector('#quickForm button');
  btn.disabled = true;
  btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
  const user = (() => { try { return JSON.parse(localStorage.getItem('velora_user')); } catch(e) { return {}; } })();
  const bookingRef = generateRef();
  try {
    const data = {
      client_name: user.full_name || '',
      client_email: user.email || '',
      client_phone: user.phone || '',
      event_type: document.getElementById('qbEvent').value,
      event_date: document.getElementById('qbDate').value,
      event_location: document.getElementById('qbLocation').value,
      provider: provider.name,
      professional_id: provider.id.toString(),
      status: 'new',
      reference_number: bookingRef,
      created_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPA_URL}/rest/v1/Bookings`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }, body: JSON.stringify(data) });
    if (res.ok) {
      bookedProfessionals[provider.id] = { bookedAt: new Date().toISOString(), phone: provider.phone };
      localStorage.setItem('velora_booked', JSON.stringify(bookedProfessionals));
        // Add the booked date to availability table
  try {
    const availabilityData = {
      professional_id: provider.id,
      unavailable_date: document.getElementById('qbDate').value,
      reason: "Booked by client"
    };
    
    await fetch(`${SUPA_URL}/rest/v1/professional_availability`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY
      },
      body: JSON.stringify(availabilityData)
    });
    console.log('✅ Date added to availability');
  } catch (err) {
    console.error('Failed to add availability:', err);
  } 
      document.getElementById('quickResult').innerHTML = `<div class="booking-success-reveal"><h4>✓ ${currentLang === 'ar' ? 'تم الحجز بنجاح!' : 'Booking Confirmed!'}</h4><div class="booking-ref-display">Ref: <strong>${bookingRef}</strong><button class="copy-btn" onclick="copyToClipboard('${bookingRef}', this)" title="Copy reference"><i class="fas fa-copy"></i></button></div><div class="phone-number">${provider.phone || '+20 123 456 7890'}</div><button class="btn btn-primary" style="width:100%; justify-content:center; margin-top:0.75rem;" onclick="closeQuickBookingModalAndReveal(${provider.id}, '${provider.phone}')">${currentLang === 'ar' ? 'إغلاق ورؤية الرقم' : 'Close & Reveal'}</button></div>`;
      document.getElementById('quickForm').style.display = 'none';
    } else alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Error occurred. Please try again.');
  } catch (e) { alert(currentLang === 'ar' ? 'فشل الاتصال. يرجى المحاولة مرة أخرى.' : 'Connection failed. Please try again.'); }
  finally { btn.disabled = false; btn.textContent = currentLang === 'ar' ? 'احجز الآن وكشف الرقم' : 'Book Now & Reveal Number'; }
}

function closeQuickBookingModalAndReveal(id, phone) {
  closeQuickBookingModal();
  const phoneEl = document.getElementById(`phone-${id}`);
  if (phoneEl) { phoneEl.innerHTML = phone; phoneEl.classList.add('phone-number-revealed'); phoneEl.classList.remove('phone-number-blurred'); phoneEl.onclick = null; }
}

function closeQuickBookingModal() { document.getElementById('quickBookingModal').classList.remove('active'); }

// ========== FORM HANDLERS ==========
async function submitSignup(e) {
  e.preventDefault();
  const password = document.getElementById('b-password').value;
  const confirmPassword = document.getElementById('b-confirm-password').value;
  if (password !== confirmPassword) {
    alert(currentLang === 'ar' ? 'كلمتا المرور غير متطابقتين.' : 'Passwords do not match.');
    return;
  }
  const btn = document.getElementById('book-submit-btn');
  btn.disabled = true;
  btn.innerHTML = `<span>${currentLang === 'ar' ? 'جاري الإنشاء...' : 'Creating account...'}</span>`;
  try {
    const data = {
      full_name: document.getElementById('b-name').value,
      email: document.getElementById('b-email').value,
      phone: document.getElementById('b-phone').value,
      password: document.getElementById('b-password').value,
      gender: document.getElementById('b-gender').value,
      birthdate: document.getElementById('b-birthdate').value,
      city: document.getElementById('b-city').value,
      created_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPA_URL}/rest/v1/CustomerAccounts`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' }, body: JSON.stringify(data) });
    if (res.ok) { document.getElementById('book-success').classList.add('show'); document.getElementById('booking-form').reset(); setTimeout(() => document.getElementById('book-success').classList.remove('show'), 5000); }
    else { const errText = await res.text(); alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Error: ' + errText); }
  } catch (err) { alert(currentLang === 'ar' ? 'فشل الاتصال. يرجى المحاولة مرة أخرى.' : 'Connection failed. Please try again.'); }
  finally { btn.disabled = false; btn.innerHTML = `<span>${currentLang === 'ar' ? 'إنشاء حسابي' : 'Create My Account'}</span>`; }
}

// ========== LOGIN / ACCOUNT ==========
async function submitLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('login-submit-btn');
  btn.disabled = true;
  btn.innerHTML = '<span>Signing in...</span>';
  const email = document.getElementById('l-email').value.trim();
  const password = document.getElementById('l-password').value;
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/CustomerAccounts?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}&select=*`, {
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      localStorage.setItem('velora_user', JSON.stringify(data[0]));
      loadAccountPage(data[0]);
    } else {
      document.getElementById('login-error').classList.add('show');
      setTimeout(() => document.getElementById('login-error').classList.remove('show'), 4000);
    }
  } catch (err) {
    alert('Connection failed. Please try again.');
  }
  finally {
    btn.disabled = false;
    btn.innerHTML = '<span>Log In</span>';
  }
}

function loadAccountPage(user) {
  const firstName = user.full_name.split(' ')[0];
  const providerWrap = document.getElementById('provider-dropdown-wrap');
  if (providerWrap) providerWrap.style.display = 'none';
  const btn = document.getElementById('signup-login-btn');
  if (btn) btn.textContent = firstName;
  const menu = document.querySelector('.signup-dropdown-menu');
  if (menu) menu.innerHTML = `
    <a onclick="navigateTo('account')"><i class="fas fa-user-circle"></i> My Account</a>
    <a onclick="logout()"><i class="fas fa-sign-out-alt"></i> Log Out</a>
  `;
  document.getElementById('account-greeting').textContent = firstName;
  document.getElementById('account-fields').innerHTML = `
    <div class="account-field"><div class="account-field-label">Full Name</div><div class="account-field-value">${user.full_name}</div></div>
    <div class="account-field"><div class="account-field-label">Email</div><div class="account-field-value">${user.email}</div></div>
    <div class="account-field"><div class="account-field-label">Phone</div><div class="account-field-value">${user.phone}</div></div>
    <div class="account-field"><div class="account-field-label">City</div><div class="account-field-value">${user.city}</div></div>
    <div class="account-field"><div class="account-field-label">Gender</div><div class="account-field-value" style="text-transform: capitalize;">${user.gender}</div></div>
    <div class="account-field"><div class="account-field-label">Date of Birth</div><div class="account-field-value">${user.birthdate}</div></div>
  `;
  const pencil = document.querySelector('.edit-profile-btn');
  if (pencil) pencil.style.display = '';
  navigateTo('account');
  loadUserBookings(user.email);
}

function enableEditProfile() {
  const user = JSON.parse(localStorage.getItem('velora_user') || '{}');
  const cities = ['Cairo','Giza','Alexandria','Sharm El-Sheikh','Hurghada','Luxor','Aswan','Mansoura','Tanta','Ismailia','Port Said','Suez','Zagazig','Assiut','Fayoum','Minya','Beni Suef','Sohag','Qena','Damietta','Kafr El-Sheikh','Other'];
  document.getElementById('account-fields').innerHTML = `
    <div class="account-field"><div class="account-field-label">Full Name</div><input type="text" class="form-input" id="edit-fullname" value="${user.full_name}"></div>
    <div class="account-field"><div class="account-field-label">Email <span class="field-locked">(cannot change)</span></div><input type="email" class="form-input field-disabled" value="${user.email}" disabled></div>
    <div class="account-field"><div class="account-field-label">Phone <span class="field-locked">(cannot change)</span></div><input type="tel" class="form-input field-disabled" value="${user.phone}" disabled></div>
    <div class="account-field"><div class="account-field-label">City</div><select class="form-select" id="edit-city">${cities.map(c => `<option${c===user.city?' selected':''}>${c}</option>`).join('')}</select></div>
    <div class="account-field"><div class="account-field-label">Gender</div><select class="form-select" id="edit-gender"><option value="male"${user.gender==='male'?' selected':''}>Male</option><option value="female"${user.gender==='female'?' selected':''}>Female</option><option value="prefer_not"${user.gender==='prefer_not'?' selected':''}>Prefer not to say</option></select></div>
    <div class="account-field"><div class="account-field-label">Date of Birth</div><input type="date" class="form-input" id="edit-birthdate" value="${user.birthdate}"></div>
    <div class="edit-actions">
      <button class="btn btn-primary" onclick="saveProfile()">Save Changes</button>
      <button class="btn btn-outline" onclick="loadAccountPage(JSON.parse(localStorage.getItem('velora_user')))">Cancel</button>
    </div>
  `;
  const pencil = document.querySelector('.edit-profile-btn');
  if (pencil) pencil.style.display = 'none';
}

async function saveProfile() {
  const user = JSON.parse(localStorage.getItem('velora_user') || '{}');
  const updated = {
    full_name: document.getElementById('edit-fullname').value.trim(),
    city: document.getElementById('edit-city').value,
    gender: document.getElementById('edit-gender').value,
    birthdate: document.getElementById('edit-birthdate').value,
  };
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/CustomerAccounts?email=eq.${encodeURIComponent(user.email)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify(updated)
    });
    if (res.ok) {
      const newUser = { ...user, ...updated };
      localStorage.setItem('velora_user', JSON.stringify(newUser));
      loadAccountPage(newUser);
    } else { alert('Failed to save. Please try again.'); }
  } catch (err) { alert('Connection failed. Please try again.'); }
}

async function loadUserBookings(email) {
  const container = document.getElementById('account-bookings');
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Bookings?client_email=eq.${encodeURIComponent(email)}&select=*&order=created_at.desc`, {
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }
    });
    const bookings = await res.json();
    if (!Array.isArray(bookings) || bookings.length === 0) {
      container.innerHTML = '<p style="color: var(--color-text-light); font-size: 0.9rem;">No bookings yet. <a onclick="navigateTo(\'providers\')" style="color: var(--color-gold-deep); cursor:pointer;">Browse professionals →</a></p>';
      return;
    }
    container.innerHTML = bookings.map(b => `
      <div class="account-booking-item">
        <div class="booking-event">${b.event_type || 'Event'} — ${b.provider_name || b.provider || 'Professional'}</div>
        <div class="booking-meta">${b.event_date || ''} · ${b.event_location || ''}</div>
        <div id="customer-booking-footer-${b.id}" style="display:flex; align-items:center; gap:0.5rem; margin-top:0.4rem; flex-wrap:wrap;">
          ${b.status === 'confirmed' ? `
            <span class="booking-status" style="background:var(--color-sage);color:white;">Confirmed</span>
            ${b.reference_number ? `<span class="booking-ref">Ref: ${b.reference_number}</span><button class="copy-btn" onclick="copyToClipboard('${b.reference_number}', this)" title="Copy reference"><i class="fas fa-copy"></i></button>` : ''}
            <button class="btn-cancel" onclick="showCancelModal(${b.id}, 'customer')">Cancel</button>
          ` : b.status === 'cancelled' ? `
            <span class="booking-status" style="background:#fed7d7;color:#e53e3e;">Cancelled</span>
            ${b.cancellation_reason ? `<span style="font-size:0.72rem;color:var(--color-text-light);">(${b.cancellation_reason})</span>` : ''}
          ` : `
            <span class="booking-status">${b.status || 'new'}</span>
            ${b.reference_number ? `<span class="booking-ref">Ref: ${b.reference_number}</span><button class="copy-btn" onclick="copyToClipboard('${b.reference_number}', this)" title="Copy reference"><i class="fas fa-copy"></i></button>` : ''}
            <button class="btn-cancel" onclick="showCancelModal(${b.id}, 'customer')">Cancel</button>
          `}
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<p style="color: var(--color-text-light);">Could not load bookings.</p>';
  }
}

function logout() {
  localStorage.removeItem('velora_user');
  const btn = document.getElementById('signup-login-btn');
  if (btn) btn.textContent = 'Sign Up / Login';
  const menu = document.querySelector('.signup-dropdown-menu');
  if (menu) menu.innerHTML = `
    <a onclick="navigateTo('book')"><i class="fas fa-user-plus"></i> Sign Up</a>
    <a onclick="navigateTo('login')"><i class="fas fa-sign-in-alt"></i> Login</a>
  `;
  const providerWrap = document.getElementById('provider-dropdown-wrap');
  if (providerWrap) providerWrap.style.display = '';
  navigateTo('home');
}

// ========== IMAGE UPLOAD FUNCTIONS ==========
let imageCount = 1;
const MAX_IMAGES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Add more image upload fields
function addImageUploadField() {
  if (imageCount >= MAX_IMAGES) {
    alert(`Maximum ${MAX_IMAGES} images allowed`);
    return;
  }
  
  imageCount++;
  const container = document.getElementById('image-uploads');
  const newId = `image-upload-${imageCount}`;
  const fileId = `j-image-file-${imageCount}`;
  const previewId = `image-preview-${imageCount}`;
  
  const newField = document.createElement('div');
  newField.id = newId;
  newField.style.marginTop = '1rem';
  newField.innerHTML = `
    <input type="file" id="${fileId}" accept="image/*" style="width: 100%; padding: 0.8rem; border: 1px solid var(--color-border); border-radius: 12px; background: white;">
    <small style="font-size: 0.7rem; color: #6B5E5A;">Max 5MB per image</small>
    <div id="${previewId}" style="margin-top: 0.5rem; display: none;"></div>
  `;
  
  container.appendChild(newField);
  
  // Add preview for new field
  document.getElementById(fileId).addEventListener('change', function(e) {
    previewImage(e, previewId);
  });
}

// Preview image before upload
function previewImage(event, previewId) {
  const file = event.target.files[0];
  const previewDiv = document.getElementById(previewId);
  
  if (!file) {
    previewDiv.style.display = 'none';
    return;
  }
  
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    alert(`File "${file.name}" exceeds 500KB limit. Please choose a smaller image.`);
    event.target.value = '';
    previewDiv.style.display = 'none';
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    previewDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 100px; max-height: 100px; border-radius: 8px;">`;
    previewDiv.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

// Upload images to Supabase Storage
async function uploadImagesToSupabase() {
  const uploadedUrls = [];
  
  for (let i = 1; i <= imageCount; i++) {
    const fileInput = document.getElementById(`j-image-file-${i}`);
    if (!fileInput || !fileInput.files || !fileInput.files[0]) continue;
    
    const file = fileInput.files[0];
    
    console.log(`Uploading file ${i}:`, file.name, Math.round(file.size / 1024), 'KB');
    
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      alert(`File "${file.name}" exceeds 5MB limit. Please choose a smaller image.`);
      continue;
    }
    
    // Create unique filename
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const fileExt = file.name.split('.').pop();
    const fileName = `${timestamp}_${random}.${fileExt}`;
    const filePath = `professional_uploads/${fileName}`;
    
    try {
      // Upload to Supabase Storage
      const { data, error } = await window.supabase
        .storage
        .from('professional-images')
        .upload(filePath, file);
      
      if (error) {
        console.error('Upload error for', file.name, ':', error);
        continue;
      }
      
      // Get public URL
      const { data: urlData } = window.supabase
        .storage
        .from('professional-images')
        .getPublicUrl(filePath);
      
      console.log('✅ Uploaded:', urlData.publicUrl);
      uploadedUrls.push(urlData.publicUrl);
      
    } catch (err) {
      console.error('Upload failed for', file.name, ':', err);
    }
  }
  
  console.log('All uploaded URLs:', uploadedUrls);
  return uploadedUrls;
}
   
async function submitJoin(e) {
  e.preventDefault();
  const btn = document.getElementById('join-submit-btn');
  btn.disabled = true;
  btn.innerHTML = `<span>${currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>`;
  try {
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
    const locations = Array.from(document.querySelectorAll('input[name="locations"]:checked')).map(cb => cb.value);
    // Upload images first
let imageUrls = [];
try {
  imageUrls = await uploadImagesToSupabase();
  console.log('Uploaded images:', imageUrls);
} catch (err) {
  console.error('Image upload failed:', err);
}
    const jPassword = document.getElementById('j-password').value;
    const jConfirmPassword = document.getElementById('j-confirm-password').value;
    if (jPassword !== jConfirmPassword) { alert('Passwords do not match.'); btn.disabled = false; btn.innerHTML = `<span>${currentLang === 'ar' ? 'إرسال الطلب' : 'Submit Application'}</span>`; return; }
     const data = {
      business_name: document.getElementById('j-business').value,
      email: document.getElementById('j-email').value,
      phone: document.getElementById('j-phone').value,
      password: jPassword,
      phone_number: document.getElementById('j-professional-phone').value,
      service_type: document.getElementById('j-service').value,
      services: services,
      locations: locations,
      price: parseInt(document.getElementById('j-price').value) || 0,
      bio: document.getElementById('j-bio').value,
      portfolio_link: document.getElementById('j-portfolio').value,
      images: imageUrls,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPA_URL}/rest/v1/Applications`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }, body: JSON.stringify(data) });
    if (res.ok) { document.getElementById('join-success').classList.add('show'); document.getElementById('join-form').reset(); setTimeout(() => document.getElementById('join-success').classList.remove('show'), 5000); }
    else if (res.status === 409) alert(currentLang === 'ar' ? 'هذا البريد الإلكتروني مسجل مسبقاً.' : 'This email is already registered.');
    else alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Error submitting application. Please try again.');
  } catch (err) { alert(currentLang === 'ar' ? 'فشل الاتصال. يرجى المحاولة مرة أخرى.' : 'Connection failed. Please try again.'); }
  finally { btn.disabled = false; btn.innerHTML = `<span>${currentLang === 'ar' ? 'إرسال الطلب' : 'Submit Application'}</span>`; }
}

function submitContact(e) {
  e.preventDefault();
  window.location.href = `mailto:hello@velora.studio?subject=VELORA: ${document.getElementById('c-subject').value}&body=${encodeURIComponent('From: ' + document.getElementById('c-name').value + ' <' + document.getElementById('c-email').value + '>\n\n' + document.getElementById('c-message').value)}`;
  document.getElementById('contact-success').classList.add('show');
  setTimeout(() => document.getElementById('contact-success').classList.remove('show'), 5000);
}

// ========== PROVIDER AUTH & DASHBOARD ==========

async function submitProviderLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('provider-login-btn');
  btn.disabled = true;
  btn.innerHTML = '<span>Signing in...</span>';
  const email = document.getElementById('pl-email').value.trim();
  const password = document.getElementById('pl-password').value;
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Applications?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}&select=*`, {
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      localStorage.setItem('velora_provider', JSON.stringify(data[0]));
      loadProviderDashboard(data[0]);
    } else {
      document.getElementById('provider-login-error').classList.add('show');
      setTimeout(() => document.getElementById('provider-login-error').classList.remove('show'), 4000);
    }
  } catch (err) { alert('Connection failed. Please try again.'); }
  finally { btn.disabled = false; btn.innerHTML = '<span>Login to Dashboard</span>'; }
}

function loadProviderDashboard(provider) {
  // Hide customer signup/login button while provider is logged in
  const signupWrap = document.getElementById('signup-dropdown-wrap');
  if (signupWrap) signupWrap.style.display = 'none';
  // Update nav button
  const navBtn = document.getElementById('provider-nav-btn');
  if (navBtn) navBtn.textContent = provider.business_name.split(' ')[0];
  const menu = document.querySelector('.provider-dropdown-menu');
  if (menu) menu.innerHTML = `
    <a onclick="navigateTo('provider-dashboard')"><i class="fas fa-tachometer-alt"></i> My Dashboard</a>
    <a onclick="providerLogout()"><i class="fas fa-sign-out-alt"></i> Log Out</a>
  `;
  // Set heading
  document.getElementById('provider-dashboard-name').textContent = provider.business_name;
  // Render profile
  renderProviderProfile(provider);
  // Reset edit button
  const editBtn = document.getElementById('provider-edit-btn');
  if (editBtn) editBtn.style.display = '';
  // Load bookings and photos
  loadProviderBookings(provider.id);
  renderProviderPhotos(provider.images || []);
  navigateTo('provider-dashboard');
}

function renderProviderProfile(provider) {
  document.getElementById('provider-profile-fields').innerHTML = `
    <div class="account-field"><div class="account-field-label">Business Name</div><div class="account-field-value">${provider.business_name || '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Email <span class="field-locked">(cannot change)</span></div><div class="account-field-value">${provider.email || '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Phone <span class="field-locked">(cannot change)</span></div><div class="account-field-value">${provider.phone || '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Service Type</div><div class="account-field-value">${provider.service_type || '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Starting Price</div><div class="account-field-value">${provider.price ? provider.price.toLocaleString() + ' EGP' : '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Portfolio</div><div class="account-field-value">${provider.portfolio_link ? `<a href="${provider.portfolio_link}" target="_blank" style="color:var(--color-gold-deep);">View Portfolio</a>` : '—'}</div></div>
    <div class="account-field"><div class="account-field-label">Bio</div><div class="account-field-value" style="white-space:pre-wrap;font-size:0.85rem;">${provider.bio || '—'}</div></div>
  `;
}

function enableEditProviderProfile() {
  const provider = JSON.parse(localStorage.getItem('velora_provider') || '{}');
  const services = ['Photography','Videography','Photography & Videography','Makeup Artist','Event Planner','Wedding Venue / Hotel','Car Rental','Bridal Shop','DJ & Zaffa','Florist','Catering','Spa & Henna','Accessories & Jewelry','Honey Moon Travel','Other'];
  document.getElementById('provider-profile-fields').innerHTML = `
    <div class="account-field"><div class="account-field-label">Business Name</div><input type="text" class="form-input" id="pe-name" value="${provider.business_name || ''}"></div>
    <div class="account-field"><div class="account-field-label">Email <span class="field-locked">(cannot change)</span></div><input type="email" class="form-input field-disabled" value="${provider.email || ''}" disabled></div>
    <div class="account-field"><div class="account-field-label">Phone <span class="field-locked">(cannot change)</span></div><input type="tel" class="form-input field-disabled" value="${provider.phone || ''}" disabled></div>
    <div class="account-field"><div class="account-field-label">Service Type</div><select class="form-select" id="pe-service">${services.map(s => `<option${s===provider.service_type?' selected':''}>${s}</option>`).join('')}</select></div>
    <div class="account-field"><div class="account-field-label">Starting Price (EGP)</div><input type="number" class="form-input" id="pe-price" value="${provider.price || ''}"></div>
    <div class="account-field"><div class="account-field-label">Portfolio Link</div><input type="url" class="form-input" id="pe-portfolio" value="${provider.portfolio_link || ''}" placeholder="https://..."></div>
    <div class="account-field"><div class="account-field-label">Bio</div><textarea class="form-textarea" id="pe-bio" rows="4">${provider.bio || ''}</textarea></div>
    <div class="edit-actions">
      <button class="btn btn-primary" onclick="saveProviderProfile()">Save Changes</button>
      <button class="btn btn-outline" onclick="loadProviderDashboard(JSON.parse(localStorage.getItem('velora_provider')))">Cancel</button>
    </div>
  `;
  const editBtn = document.getElementById('provider-edit-btn');
  if (editBtn) editBtn.style.display = 'none';
}

async function saveProviderProfile() {
  const provider = JSON.parse(localStorage.getItem('velora_provider') || '{}');
  const updated = {
    business_name: document.getElementById('pe-name').value.trim(),
    service_type: document.getElementById('pe-service').value,
    price: parseInt(document.getElementById('pe-price').value) || 0,
    portfolio_link: document.getElementById('pe-portfolio').value.trim(),
    bio: document.getElementById('pe-bio').value.trim(),
  };
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Applications?email=eq.${encodeURIComponent(provider.email)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify(updated)
    });
    if (res.ok) {
      const newProvider = { ...provider, ...updated };
      localStorage.setItem('velora_provider', JSON.stringify(newProvider));
      loadProviderDashboard(newProvider);
    } else { alert('Failed to save. Please try again.'); }
  } catch (err) { alert('Connection failed. Please try again.'); }
}

async function loadProviderBookings(providerId) {
  const container = document.getElementById('provider-bookings-list');
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Bookings?professional_id=eq.${providerId}&select=*&order=created_at.desc`, {
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY }
    });
    const bookings = await res.json();
    if (!Array.isArray(bookings) || bookings.length === 0) {
      container.innerHTML = '<p style="color:var(--color-text-light);font-size:0.9rem;">No bookings yet.</p>';
      return;
    }
    container.innerHTML = bookings.map(b => `
      <div class="provider-booking-card" id="pbc-${b.id}">
        <div class="pb-event">${b.event_type || 'Event'} · ${b.event_date || ''}</div>
        <div class="pb-meta"><i class="fas fa-map-marker-alt" style="color:var(--color-gold-deep);margin-right:4px;"></i>${b.event_location || ''}</div>
        <div class="pb-client"><i class="fas fa-user" style="color:var(--color-gold-deep);margin-right:4px;"></i>${b.client_name || ''} · ${b.client_phone || ''}</div>
        <div class="pb-footer" id="pb-footer-${b.id}">
          ${b.reference_number ? `<span class="booking-ref">Ref: ${b.reference_number}</span>` : ''}
          ${b.status === 'confirmed' ? `
            <span class="confirmed-badge">Confirmed</span>
            <button class="btn-cancel" onclick="showCancelModal(${b.id}, 'provider')">Cancel</button>
          ` : b.status === 'cancelled' ? `
            <span class="cancelled-badge">Cancelled</span>
            ${b.cancellation_reason ? `<span style="font-size:0.72rem;color:var(--color-text-light);margin-left:0.25rem;">(${b.cancellation_reason})</span>` : ''}
          ` : `
            <button class="btn-confirm" onclick="confirmBooking(${b.id}, this)">Confirm Booking</button>
          `}
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<p style="color:var(--color-text-light);">Could not load bookings.</p>';
  }
}

async function confirmBooking(bookingId, btn) {
  btn.disabled = true;
  btn.textContent = 'Confirming...';
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Bookings?id=eq.${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ status: 'confirmed' })
    });
    if (res.ok) {
      const footer = document.getElementById(`pb-footer-${bookingId}`);
      if (footer) {
        const ref = footer.querySelector('.booking-ref') ? footer.querySelector('.booking-ref').outerHTML : '';
        footer.innerHTML = ref + `
          <span class="confirmed-badge">Confirmed</span>
          <button class="btn-cancel" onclick="showCancelModal(${bookingId}, 'provider')">Cancel</button>
        `;
      }
    } else { btn.disabled = false; btn.textContent = 'Confirm Booking'; alert('Failed to confirm. Please try again.'); }
  } catch (err) { btn.disabled = false; btn.textContent = 'Confirm Booking'; alert('Connection failed.'); }
}

let _cancelTarget = null;

function showCancelModal(bookingId, source) {
  _cancelTarget = { bookingId, source };
  const input = document.getElementById('cancel-reason-input');
  if (input) input.value = '';
  const modal = document.getElementById('cancelModal');
  if (modal) { modal.classList.add('active'); modal.style.display = 'flex'; }
}

function closeCancelModal() {
  const modal = document.getElementById('cancelModal');
  if (modal) { modal.classList.remove('active'); modal.style.display = 'none'; }
  _cancelTarget = null;
}

async function submitCancellation() {
  if (!_cancelTarget) return;
  const { bookingId, source } = _cancelTarget;
  const reason = (document.getElementById('cancel-reason-input').value || '').trim();
  if (!reason) { alert('Please enter a reason for cancellation.'); return; }
  const btn = document.getElementById('cancel-submit-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Cancelling...'; }
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Bookings?id=eq.${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ status: 'cancelled', cancellation_reason: reason })
    });
    if (res.ok) {
      closeCancelModal();
      if (source === 'provider') {
        const footer = document.getElementById(`pb-footer-${bookingId}`);
        if (footer) {
          const ref = footer.querySelector('.booking-ref') ? footer.querySelector('.booking-ref').outerHTML : '';
          footer.innerHTML = ref + `
            <span class="cancelled-badge">Cancelled</span>
            <span style="font-size:0.72rem;color:var(--color-text-light);margin-left:0.25rem;">(${reason})</span>
          `;
        }
      } else {
        const card = document.getElementById(`customer-booking-footer-${bookingId}`);
        if (card) {
          card.innerHTML = `<span class="booking-status" style="background:#fed7d7;color:#e53e3e;">Cancelled</span>
            <span style="font-size:0.72rem;color:var(--color-text-light);margin-left:0.25rem;">(${reason})</span>`;
        }
      }
    } else {
      alert('Failed to cancel. Please try again.');
    }
  } catch (err) { alert('Connection failed.'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = 'Confirm Cancellation'; } }
}

function renderProviderPhotos(images) {
  const grid = document.getElementById('provider-photos-grid');
  if (!grid) return;
  if (!images || images.length === 0) {
    grid.innerHTML = '<p style="color:var(--color-text-light);font-size:0.85rem;grid-column:1/-1;">No photos yet. Upload your first photo.</p>';
    return;
  }
  grid.innerHTML = images.map((url, i) => `
    <div class="provider-photo-item">
      <img src="${url}" alt="Photo ${i+1}" loading="lazy">
      <button class="provider-photo-delete" onclick="deleteProviderPhoto('${url}')" title="Delete"><i class="fas fa-times"></i></button>
    </div>
  `).join('');
}

async function uploadProviderPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  if (file.size > 5 * 1024 * 1024) { alert('File exceeds 5MB limit.'); return; }
  const provider = JSON.parse(localStorage.getItem('velora_provider') || '{}');
  const timestamp = Date.now();
  const ext = file.name.split('.').pop();
  const filePath = `professional_uploads/${timestamp}_${Math.random().toString(36).substring(7)}.${ext}`;
  try {
    const { data, error } = await window.supabase.storage.from('professional-images').upload(filePath, file);
    if (error) { alert('Upload failed: ' + error.message); return; }
    const { data: urlData } = window.supabase.storage.from('professional-images').getPublicUrl(filePath);
    const newImages = [...(provider.images || []), urlData.publicUrl];
    const res = await fetch(`${SUPA_URL}/rest/v1/Applications?email=eq.${encodeURIComponent(provider.email)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ images: newImages })
    });
    if (res.ok) {
      const updated = { ...provider, images: newImages };
      localStorage.setItem('velora_provider', JSON.stringify(updated));
      renderProviderPhotos(newImages);
    }
  } catch (err) { alert('Upload failed. Please try again.'); }
  input.value = '';
}

async function deleteProviderPhoto(url) {
  if (!confirm('Delete this photo?')) return;
  const provider = JSON.parse(localStorage.getItem('velora_provider') || '{}');
  const newImages = (provider.images || []).filter(u => u !== url);
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/Applications?email=eq.${encodeURIComponent(provider.email)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ images: newImages })
    });
    if (res.ok) {
      const updated = { ...provider, images: newImages };
      localStorage.setItem('velora_provider', JSON.stringify(updated));
      renderProviderPhotos(newImages);
    }
  } catch (err) { alert('Failed to delete photo.'); }
}

function providerLogout() {
  localStorage.removeItem('velora_provider');
  const navBtn = document.getElementById('provider-nav-btn');
  if (navBtn) navBtn.textContent = 'List Your Business';
  const signupWrap = document.getElementById('signup-dropdown-wrap');
  if (signupWrap) signupWrap.style.display = '';
  const menu = document.querySelector('.provider-dropdown-menu');
  if (menu) menu.innerHTML = `
    <a onclick="navigateTo('join')"><i class="fas fa-building"></i> Sign Up as Provider</a>
    <a onclick="navigateTo('provider-login')"><i class="fas fa-sign-in-alt"></i> Login as Provider</a>
  `;
  navigateTo('home');
}

// ========== NAVIGATION ==========
function navigateTo(page) {
  // Hide all sections first
  const allSections = document.querySelectorAll('.hero, .categories-section, .howitworks-section, .providers-section, .occasions-section, .trust-section, .testimonials-section, .provider-cta-section, .pricing-section');
  allSections.forEach(section => {
    if (section) section.style.display = 'none';
  });
  
  // Hide all page containers
  const allPages = document.querySelectorAll('#page-book, #page-join, #page-terms, #page-contact, #page-login, #page-account, #page-provider-login, #page-provider-dashboard');
  allPages.forEach(p => {
    if (p) p.style.display = 'none';
  });
  
  // Hide all page classes
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  if (page === 'home') {
    const homeSections = document.querySelectorAll('.hero, .categories-section, .howitworks-section, .providers-section, .occasions-section, .trust-section, .testimonials-section, .provider-cta-section, .pricing-section');
    homeSections.forEach(section => {
      if (section) section.style.display = 'block';
    });
    // Restore "Featured Professionals" heading
    const tag = document.getElementById('providers-section-tag');
    const title = document.getElementById('providers-section-title');
    const backBtn = document.getElementById('providers-back-btn');
    const viewAllWrap = document.getElementById('view-all-btn-wrap');
    if (tag) tag.textContent = 'Featured Professionals';
    if (title) title.innerHTML = 'Handpicked <em>Masters</em>';
    if (backBtn) backBtn.style.display = 'none';
    if (viewAllWrap) viewAllWrap.style.display = 'block';
  } else if (page === 'providers') {
    const providersSection = document.getElementById('providers-section');
    if (providersSection) providersSection.style.display = 'block';
    // Switch heading to "All Professionals" mode
    const tag = document.getElementById('providers-section-tag');
    const title = document.getElementById('providers-section-title');
    const backBtn = document.getElementById('providers-back-btn');
    const viewAllWrap = document.getElementById('view-all-btn-wrap');
    if (tag) tag.textContent = 'All Professionals';
    if (title) title.innerHTML = 'Browse <em>All Masters</em>';
    if (backBtn) backBtn.style.display = 'block';
    if (viewAllWrap) viewAllWrap.style.display = 'none';
    renderFilters();
    renderProviders();
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  } else if (page === 'book') {
    const bookPage = document.getElementById('page-book');
    if (bookPage) bookPage.style.display = 'block';
  } else if (page === 'join') {
    const joinPage = document.getElementById('page-join');
    if (joinPage) joinPage.style.display = 'block';
  } else if (page === 'terms') {
    const termsPage = document.getElementById('page-terms');
    if (termsPage) termsPage.classList.add('active');
  } else if (page === 'contact') {
    const contactPage = document.getElementById('page-contact');
    if (contactPage) contactPage.style.display = 'block';
  } else if (page === 'login') {
    const loginPage = document.getElementById('page-login');
    if (loginPage) loginPage.style.display = 'block';
  } else if (page === 'account') {
    const accountPage = document.getElementById('page-account');
    if (accountPage) accountPage.style.display = 'block';
  } else if (page === 'provider-login') {
    const p = document.getElementById('page-provider-login');
    if (p) p.style.display = 'block';
  } else if (page === 'provider-dashboard') {
    const p = document.getElementById('page-provider-dashboard');
    if (p) p.style.display = 'block';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchHiwTab(tab) {
  const cust = document.getElementById('hiw-customer-pane');
  const prof = document.getElementById('hiw-professional-pane');
  const custTab = document.querySelectorAll('.hiw-tab')[0];
  const profTab = document.querySelectorAll('.hiw-tab')[1];
  if (tab === 'customer') { cust.classList.add('active'); prof.classList.remove('active'); custTab.classList.add('active'); profTab.classList.remove('active'); }
  else { cust.classList.remove('active'); prof.classList.add('active'); custTab.classList.remove('active'); profTab.classList.add('active'); }
}

let testimonialIndex = 0;
function slideTestimonial(dir) {
  const track = document.getElementById('testimonial-track');
  const cards = track.children;
  const visible = window.innerWidth > 1024 ? 3 : 1;
  const max = Math.max(0, cards.length - visible);
  testimonialIndex = Math.max(0, Math.min(max, testimonialIndex + dir));
  const cardWidth = cards[0]?.offsetWidth + 32 || 350;
  track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
}

// ========== LANGUAGE ==========
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('velora_lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('lang-btn').innerHTML = currentLang === 'en' ? '🇪🇬 العربية' : 'English';
  document.querySelectorAll('[data-key]').forEach(el => { const key = el.getAttribute('data-key'); if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key]; });
  renderFilters(); renderProviders(); renderTrustStats(); renderCustomerSteps(); renderProfessionalSteps(); renderPlans(); renderTerms(); initProviderSelect();
}

// ========== MOBILE MENU ==========
function openMobileMenu() { document.getElementById('mobile-menu').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

// ========== INITIALIZATION ==========
function init() {
  loadProvidersFromSupabase();
  renderCategories();
  renderOccasions();
  renderTrustPoints();
  renderTestimonials();
  renderIncludedList();
  renderCustomerSteps();
  renderProfessionalSteps();
  renderPlans();
  renderTerms();
  initCheckboxGroups();
  applyLanguage();
  setInterval(() => slideTestimonial(1), 8000);
  document.getElementById('booking-form')?.addEventListener('submit', submitSignup);
  document.getElementById('join-form')?.addEventListener('submit', submitJoin);
  document.getElementById('contact-form')?.addEventListener('submit', submitContact);
  const savedUser = localStorage.getItem('velora_user');
  const savedProvider = localStorage.getItem('velora_provider');
  if (savedProvider) { try { loadProviderDashboard(JSON.parse(savedProvider)); } catch(e) { localStorage.removeItem('velora_provider'); navigateTo('home'); } }
  else if (savedUser) { try { loadAccountPage(JSON.parse(savedUser)); } catch(e) { localStorage.removeItem('velora_user'); navigateTo('home'); } }
  else { navigateTo('home'); }
}
init();
// ========== SETUP IMAGE UPLOAD BUTTONS ==========
document.addEventListener('DOMContentLoaded', function() {
  // Add more images button
  const addButton = document.getElementById('add-more-images');
  if (addButton) {
    addButton.addEventListener('click', addImageUploadField);
  }
  
  // Preview for first image field
  const firstFileInput = document.getElementById('j-image-file-1');
  if (firstFileInput) {
    firstFileInput.addEventListener('change', function(e) {
      previewImage(e, 'image-preview-1');
    });
  }
});
   
