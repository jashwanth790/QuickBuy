/**
 * ==============================================================================
 * QuickBuy — Smart Shopping Website
 * Main JavaScript File (script.js)
 * Pure Vanilla JavaScript & Browser LocalStorage
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. Product Database (24 Realistic Sample Products across 6 Categories)
// ------------------------------------------------------------------------------
const PRODUCTS = [
  // --- CLOTHING ---
  {
    
    id: 1,
    name: "Classic Heavyweight Cotton Hoodie",
    category: "Clothing",
    
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Ultra-soft brushed fleece pullover hoodie designed for all-day warmth and comfort.",
    description: "Crafted with 100% premium combed organic cotton, this hoodie offers a relaxed silhouette, reinforced kangaroo pocket, double-lined hood, and ribbed cuffs. Ideal for layering during cool weather.",
    features: ["100% Organic Combed Cotton", "Double-needle stitching for durability", "Pre-shrunk fabric to prevent shrinking", "Breathable fleece interior"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Streetwear", "Casual", "Minimal"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 2,
    name: "Slim-Fit Vintage Washed Denim Jacket",
    category: "Clothing",
    price: 64.50,
    originalPrice: 85.00,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Authentic washed indigo denim jacket with structured seams and antique brass hardware.",
    description: "An essential staple for any modern wardrobe. Features a tailored slim fit, button-flap chest pockets, adjustable waist tabs, and durable contrast stitching.",
    features: ["Heavyweight 13oz cotton denim", "Classic trucker jacket styling", "Antiqued brass hardware", "Button-tab adjustable waist"],
    purpose: ["College", "Party", "Casual"],
    style: ["Streetwear", "Casual"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 3,
    name: "Pure Linen Oxford Button-Down Shirt",
    category: "Clothing",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.6,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Breathable natural linen shirt with button-down collar and curved hem.",
    description: "Stay crisp and cool from office meetings to weekend outings. Made from sustainably sourced French linen that gets softer with every wash.",
    features: ["100% French linen weave", "Button-down point collar", "Chest patch pocket", "Standard regular fit"],
    purpose: ["Office", "Casual", "Party"],
    style: ["Formal", "Casual", "Minimal"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 4,
    name: "Relaxed Fit Cargo Jogger Pants",
    category: "Clothing",
    price: 44.00,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Utility-inspired cargo trousers featuring elasticated waistband and ankle cuffs.",
    description: "Combines functional utility with streetwear aesthetics. Features 6 deep pockets, water-repellent finish, and an adjustable drawstring waist.",
    features: ["Stretch cotton twill fabric", "6 multi-function secure pockets", "Elastic drawstring waistband", "Reinforced knee panels"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Streetwear", "Sporty"],
    tag: "Sale",
    inStock: true
  },

  // --- FOOTWEAR ---
  {
    id: 5,
    name: "Pro-Runner Breathable Cushion Sneakers",
    category: "Footwear",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Lightweight performance running shoes with reactive foam cushioning.",
    description: "Engineered for maximum speed and daily comfort. High-performance mesh upper keeps feet ventilated while the responsive air-cushioned sole absorbs road impact.",
    features: ["Breathable engineered mesh upper", "Responsive energy-return midsole", "High-traction rubber outsole", "Reflective safety accents"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Streetwear"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 6,
    name: "Handcrafted Chelsea Leather Boots",
    category: "Footwear",
    price: 119.00,
    originalPrice: 160.00,
    rating: 4.8,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Full-grain leather Chelsea boots with elastic side gussets and pull tabs.",
    description: "A timeless silhouette meticulously handcrafted from supple full-grain leather. Finished with Goodyear welt construction and water-resistant wax coating.",
    features: ["Full-grain genuine leather upper", "Comfortable memory foam insole", "Durable slip-resistant rubber heel", "Easy slip-on side stretch panels"],
    purpose: ["Office", "Party", "Casual"],
    style: ["Formal", "Minimal"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 7,
    name: "Retro Court Low-Top Canvas Sneakers",
    category: "Footwear",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Vintage tennis-inspired low-profile sneakers with vulcanized rubber soles.",
    description: "Versatile, lightweight, and effortlessly cool. Pairs seamlessly with denim, chinos, or shorts for a casual day on campus or in the city.",
    features: ["100% durable canvas upper", "Vulcanized rubber foxing tape", "Padded footbed for all-day comfort", "Classic low-cut profile"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Casual", "Streetwear", "Minimal"],
    tag: "Sale",
    inStock: true
  },
  {
    id: 8,
    name: "Ergonomic Cloud Recovery Slides",
    category: "Footwear",
    price: 24.50,
    originalPrice: 35.00,
    rating: 4.4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Thick-soled cushioned EVA slip-on sandals for post-workout and indoor comfort.",
    description: "Feel like you are walking on clouds. Engineered with extra-thick EVA foam that adapts to foot arches for pressure relief.",
    features: ["1.75 inch ultra-thick EVA cushioning", "Non-slip diamond tread sole", "Waterproof and easy to wash", "Deep heel cup and concave toe cap"],
    purpose: ["Casual", "Daily Use"],
    style: ["Sporty", "Casual"],
    tag: "Trending",
    inStock: true
  },

  // --- ELECTRONICS ---
  {
    id: 9,
    name: "Active Noise-Cancelling Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Over-ear Bluetooth headphones with 40-hour battery life and deep bass audio.",
    description: "Immerse yourself in pure studio sound. Featuring advanced hybrid active noise cancellation, fast USB-C charging, and protein leather memory foam ear cups.",
    features: ["Hybrid ANC blocks 95% ambient noise", "Up to 40 hours continuous playtime", "Hi-Res Audio with 40mm titanium drivers", "Multipoint connection for two devices"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Sporty"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 10,
    name: "Ultra-Portable Waterproof Bluetooth Speaker",
    category: "Electronics",
    price: 45.00,
    originalPrice: 65.00,
    rating: 4.7,
    reviews: 185,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
    shortDesc: "IPX7 waterproof 360° sound speaker with punchy bass and 16-hour battery.",
    description: "Bring the party anywhere. Built with rugged shock-absorbing rubber casing, carabiner clip, and dual passive radiators for booming bass.",
    features: ["IPX7 fully waterproof and dustproof", "16-hour rechargeable battery life", "360-degree room-filling surround sound", "Built-in microphone for speakerphone calls"],
    purpose: ["Party", "College", "Casual"],
    style: ["Sporty", "Streetwear"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 11,
    name: "True Wireless Sports Earbuds with Mic",
    category: "Electronics",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Sweat-resistant ergonomic in-ear earbuds with LED charging display case.",
    description: "Designed for workouts, studying, and everyday commutes. Provides snug in-ear acoustic seal, crystal clear microphone calls, and touch controls.",
    features: ["IPX5 sweat and splash resistance", "Smart LED battery display on case", "Low latency gaming and video mode", "One-step instant auto-pairing"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Sporty", "Minimal"],
    tag: "Sale",
    inStock: true
  },
  {
    id: 12,
    name: "Magnetic 20,000mAh Fast Charging Power Bank",
    category: "Electronics",
    price: 32.50,
    originalPrice: 45.00,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1609592424364-f6b4d36ef555?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Compact 22.5W Power Delivery external battery pack with dual USB-C ports.",
    description: "Never run out of power on the go. High-capacity battery charges your smartphone up to 4 times with smart temperature protection.",
    features: ["20,000mAh airline-approved capacity", "22.5W USB-C PD fast charge output", "Charge 3 devices simultaneously", "Smart LED digital percentage display"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Casual"],
    tag: "Trending",
    inStock: true
  },

  // --- ACCESSORIES ---
  {
    id: 13,
    name: "Polarized Classic Aviator Sunglasses",
    category: "Accessories",
    price: 28.00,
    originalPrice: 40.00,
    rating: 4.7,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    shortDesc: "UV400 protective polarized metal wire sunglasses with anti-glare lenses.",
    description: "Timeless style meets eye protection. Built with ultra-lightweight stainless steel frames, spring hinges, and shatterproof lenses.",
    features: ["100% UV400 polarized lens protection", "Ultra-lightweight stainless steel frame", "Adjustable soft silicone nose pads", "Includes protective hard case & cloth"],
    purpose: ["Casual", "Party", "Daily Use"],
    style: ["Casual", "Streetwear", "Minimal"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 14,
    name: "RFID Blocking Genuine Leather Slim Wallet",
    category: "Accessories",
    price: 29.99,
    originalPrice: 42.00,
    rating: 4.9,
    reviews: 202,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Minimalist bifold wallet crafted from full-grain leather with quick card ejector.",
    description: "Eliminate pocket bulge. Holds up to 10 cards and cash while safeguarding your credit cards against unauthorized RFID/NFC scanning.",
    features: ["Certified RFID blocking lining", "Premium vegetable-tanned leather", "Quick-access front thumb slot", "Ultra-slim 0.4-inch profile"],
    purpose: ["Office", "College", "Daily Use"],
    style: ["Formal", "Minimal"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 15,
    name: "Tactical Heavy-Duty Webbing Canvas Belt",
    category: "Accessories",
    price: 18.99,
    originalPrice: 26.00,
    rating: 4.5,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Military-grade nylon belt with quick-release zinc alloy buckle.",
    description: "Built for tough daily use. Breathable woven nylon strap that won't fray, with an intuitive quick-release buckle for instant fastening.",
    features: ["Quick-release alloy metal buckle", "Rip-resistant 1000D nylon strap", "Hole-less fully adjustable fit", "Water and sweat resistant"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Streetwear"],
    tag: "Sale",
    inStock: true
  },
  {
    id: 16,
    name: "Polished Stainless Steel Cuban Link Bracelet",
    category: "Accessories",
    price: 22.00,
    originalPrice: 32.00,
    rating: 4.6,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1611591475879-11440d99ef87?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Sleek 7mm curb chain bracelet with secure lobster clasp.",
    description: "A refined touch of shine for your wrist. Made from surgical-grade 316L stainless steel that will never tarnish, turn green, or fade.",
    features: ["Surgical-grade 316L stainless steel", "Hypoallergenic and rust-proof", "High-polish mirror finish", "Durable lobster claw lock"],
    purpose: ["Party", "Casual"],
    style: ["Streetwear", "Party", "Casual"],
    tag: "Hot",
    inStock: true
  },

  // --- BAGS ---
  {
    id: 17,
    name: "Water-Resistant Anti-Theft College Backpack",
    category: "Bags",
    price: 52.99,
    originalPrice: 75.00,
    rating: 4.9,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    shortDesc: "30L ergonomic backpack with 15.6-inch padded laptop sleeve and USB port.",
    description: "The ultimate student and commuter pack. Features hidden anti-theft zipper compartments, waterproof exterior fabric, and breathable honey-comb back padding.",
    features: ["Dedicated 15.6-inch laptop pocket", "External USB charging pass-through", "Luggage strap for travel attachment", "Waterproof Oxford fabric"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Casual", "Minimal", "Sporty"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 18,
    name: "Vintage Waxed Canvas Messenger Bag",
    category: "Bags",
    price: 59.50,
    originalPrice: 85.00,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Classic shoulder crossbody bag with genuine leather trim and brass buckles.",
    description: "Rugged elegance tailored for university lectures and coffee shop work sessions. Includes multiple organizer pockets and a padded shoulder strap.",
    features: ["Heavy-duty waterproof waxed canvas", "Full-grain leather buckle accents", "Padded 14-inch tablet/laptop compartment", "Detachable adjustable shoulder strap"],
    purpose: ["College", "Office", "Casual"],
    style: ["Casual", "Formal", "Streetwear"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 19,
    name: "Sleek Waterproof Gym & Weekend Duffle Bag",
    category: "Bags",
    price: 42.00,
    originalPrice: 60.00,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Spacious duffle with separate ventilated shoe compartment and wet pocket.",
    description: "Perfect companion for workouts, weekend road trips, or sports practice. Keeps sweaty gear separated from clean clothes.",
    features: ["Ventilated bottom shoe compartment", "Waterproof interior wet pocket", "Tear-resistant nylon fabric", "Comfortable dual carry handles"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Casual"],
    tag: "Sale",
    inStock: true
  },
  {
    id: 20,
    name: "Minimalist Commuter Laptop Briefcase",
    category: "Bags",
    price: 48.00,
    originalPrice: 68.00,
    rating: 4.7,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Slim professional briefcase with 360-degree shockproof border protection.",
    description: "Streamlined executive aesthetics without bulk. Fits up to 16-inch laptops with dedicated slots for chargers, mouse, and stationery.",
    features: ["360-degree corner drop protection", "Water-repellent polyester exterior", "Hideaway top carrying handles", "Trolley luggage sleeve"],
    purpose: ["Office", "College"],
    style: ["Formal", "Minimal"],
    tag: "Hot",
    inStock: true
  },

  // --- WATCHES ---
  {
    id: 21,
    name: "Minimalist Matte Black Chronograph Watch",
    category: "Watches",
    price: 89.99,
    originalPrice: 135.00,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Ultra-thin analog quartz timepiece with sapphire coated crystal and mesh strap.",
    description: "Modern elegance at its peak. Matte black dial with subtle date window, Japanese quartz movement, and 50m water resistance.",
    features: ["Precision Japanese quartz movement", "Hardened sapphire coated glass", "Breathable stainless steel mesh strap", "5ATM water resistance"],
    purpose: ["Office", "Party", "Daily Use"],
    style: ["Minimal", "Formal", "Casual"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 22,
    name: "Classic Stainless Steel Roman Dress Watch",
    category: "Watches",
    price: 110.00,
    originalPrice: 159.00,
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Sunburst silver dial with polished link bracelet and butterfly clasp.",
    description: "Command attention in meetings and celebrations. A timeless dress watch with Roman numeral hour markers and luminescent hands.",
    features: ["316L solid stainless steel link bracelet", "Butterfly deployment safety clasp", "Luminescent glow-in-dark hands", "Automatic date complication"],
    purpose: ["Office", "Party"],
    style: ["Formal", "Casual"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 23,
    name: "Smart AMOLED Fitness Tracker Watch",
    category: "Watches",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Vibrant 1.43-inch HD AMOLED touch display with 14-day battery and heart tracking.",
    description: "Track 100+ sports modes, monitor sleep quality, check blood oxygen (SpO2), and receive notification alerts with smooth haptic feedback.",
    features: ["Always-on 1.43-inch AMOLED display", "24/7 Heart rate & SpO2 blood oxygen sensor", "14-day ultra-long battery life", "5ATM swim-proof rating"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Minimal"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 24,
    name: "Rugged Tactical Digital Shock Watch",
    category: "Watches",
    price: 36.50,
    originalPrice: 52.00,
    rating: 4.5,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Military-grade shock-resistant digital watch with backlight and stopwatch.",
    description: "Ready for outdoor adventures, sports, and intense campus days. Rugged resin armor casing withstands extreme impacts.",
    features: ["Heavy-duty shock & drop resistance", "Dual timezone & countdown timer", "Bright EL backlight for night visibility", "100m water resistance"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Streetwear"],
    tag: "Sale",
    inStock: true
  },

  // --- ADDITIONAL CLOTHING ---
  {
    id: 25,
    name: "Oversized Streetwear Graphic Drop-Shoulder Tee",
    category: "Clothing",
    price: 28.50,
    originalPrice: 38.00,
    rating: 4.8,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Heavyweight 240 GSM organic cotton t-shirt with urban typographic back print.",
    description: "Built for true streetwear enthusiasts. Cut with wide drop-shoulders and a boxy silhouette that drapes cleanly with cargo pants or denim.",
    features: ["240 GSM heavyweight combed cotton", "Reinforced ribbed crewneck collar", "Boxy oversized streetwear cut", "Fade-resistant screenprint"],
    purpose: ["College", "Casual", "Party"],
    style: ["Streetwear", "Casual"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 26,
    name: "Tailored Modern Slim-Fit Notch Lapel Blazer",
    category: "Clothing",
    price: 92.00,
    originalPrice: 130.00,
    rating: 4.7,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Unstructured stretch poly-wool blend jacket with dual rear vents and interior pockets.",
    description: "Elevate college presentations and business interviews. Features a modern tailored cut that offers full range of motion without wrinkling.",
    features: ["Breathable stretch poly-viscose blend", "Classic notch lapels with 2-button closure", "Dual interior passport and pen pockets", "Four-button surgeon cuff accents"],
    purpose: ["Office", "Party"],
    style: ["Formal", "Minimal"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 27,
    name: "Chunky Ribbed Knit Fisherman Crewneck Sweater",
    category: "Clothing",
    price: 46.00,
    originalPrice: 65.00,
    rating: 4.6,
    reviews: 104,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Soft waffle-weave thermal sweater designed for cozy layering on chilly days.",
    description: "A seasonal favorite made with ultra-soft spun acrylic-wool yarn that provides immense warmth without being itchy or heavy.",
    features: ["Merino-feel ultra-soft yarn", "Chunky textured waffle knit pattern", "Stretch-retaining ribbed hem and cuffs", "Non-itch hypoallergenic fibers"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Minimal", "Casual"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 28,
    name: "Performance Quarter-Zip Athletic Running Top",
    category: "Clothing",
    price: 34.00,
    originalPrice: 48.00,
    rating: 4.8,
    reviews: 122,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Moisture-wicking dry-fit pullover with thumbhole cuffs and reflective trim.",
    description: "Whether jogging on track or studying in air-conditioned libraries, this athletic pullover delivers superior temperature regulation.",
    features: ["4-way stretch moisture-wicking fabric", "Smooth lock-down quarter zipper", "Ergonomic thumbholes in sleeve cuffs", "Reflective safety logos for night runs"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Casual"],
    tag: "Sale",
    inStock: true
  },

  // --- ADDITIONAL FOOTWEAR ---
  {
    id: 29,
    name: "High-Top Retro Streetwear Canvas Skate Shoes",
    category: "Footwear",
    price: 48.00,
    originalPrice: 68.00,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Ankle-support canvas high-tops with contrast stitching and reinforced toe bumpers.",
    description: "Built for comfort and urban attitude. Features supportive high-top ankle padding and vulcanized gum rubber grip outsoles.",
    features: ["Heavy-duty 14oz canvas upper", "Padded high-top collar for ankle stability", "Waffle-tread vulcanized gum rubber sole", "Metal lace eyelets with flat woven laces"],
    purpose: ["College", "Casual"],
    style: ["Streetwear", "Casual"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 30,
    name: "Hand-Burnished Leather Oxford Brogue Shoes",
    category: "Footwear",
    price: 128.00,
    originalPrice: 175.00,
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Classic perforated wingtip oxfords with cushioned leather footbed.",
    description: "Crafted with impeccable precision from hand-finished calfskin leather. Ideal for formal college convocation and black-tie gatherings.",
    features: ["Full-grain hand-burnished calfskin leather", "Traditional decorative wingtip brogue perforations", "Anti-shock memory foam inner sole", "Non-skid rubber tap on leather outsole"],
    purpose: ["Office", "Party"],
    style: ["Formal", "Minimal"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 31,
    name: "All-Terrain Waterproof Grip Hiking Trail Boots",
    category: "Footwear",
    price: 105.00,
    originalPrice: 145.00,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Rugged waterproof nubuck boots with deep-lug Vibram-style traction soles.",
    description: "Unstoppable all-weather outdoor footwear. Built with waterproof inner bootie construction to keep feet dry in downpours.",
    features: ["HydroGuard waterproof breathable membrane", "Gusseted tongue keeps rocks and rain out", "Compression molded EVA shock midsole", "Deep 5mm multi-directional traction lugs"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Streetwear"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 32,
    name: "Breathable Knit Slip-On Commuter Loafers",
    category: "Footwear",
    price: 36.50,
    originalPrice: 50.00,
    rating: 4.6,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Featherlight stretch-knit walking slip-ons with flexible barefoot feel.",
    description: "Slip on and go in seconds. Ultra-breathable woven mesh moves with your foot to eliminate hot spots and blisters on long walking days.",
    features: ["Seamless 3D stretch-knit upper", "Easy slip-on collar with rear pull loop", "Ultra-flexible honeycomb groove outsole", "Machine washable removable insole"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Casual", "Minimal"],
    tag: "Sale",
    inStock: true
  },

  // --- ADDITIONAL ELECTRONICS ---
  {
    id: 33,
    name: "Foldable 3-in-1 Fast Wireless Charging Station",
    category: "Electronics",
    price: 36.99,
    originalPrice: 52.00,
    rating: 4.8,
    reviews: 164,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Charge your phone, smartwatch, and earbuds simultaneously with one neat cable.",
    description: "Clean up desk cable clutter. Folds flat to fit in your backpack pocket and powers up all your daily gadgets with fast magnetic alignment.",
    features: ["15W Qi-certified fast charging coils", "Compact travel fold design (under 1-inch thin)", "Intelligent foreign object detection & LED indicator", "Includes 20W QuickCharge 3.0 wall adapter"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Casual"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 34,
    name: "RGB Mechanical Tenkeyless Gaming Keyboard",
    category: "Electronics",
    price: 62.00,
    originalPrice: 89.99,
    rating: 4.9,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Hot-swappable linear red switches with per-key RGB backlighting and sound dampening.",
    description: "Enjoy silky-smooth keystrokes for coding assignments and gaming sessions alike. Compact TKL layout saves valuable desk mouse room.",
    features: ["Factory lubed smooth linear red mechanical switches", "Double-shot PBT shine-through keycaps", "Customizable per-key RGB with 18 lighting modes", "Detachable braided Type-C cable"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Streetwear", "Sporty"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 35,
    name: "Ergonomic Multi-Device Bluetooth Optical Mouse",
    category: "Electronics",
    price: 28.50,
    originalPrice: 40.00,
    rating: 4.7,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Whisper-quiet clicks with dual-mode Bluetooth & 2.4G wireless connectivity.",
    description: "Work silently in campus libraries and cafes without bothering others. Contoured sculpted palm grip reduces wrist fatigue.",
    features: ["90% noise-reduced silent switches", "Connect up to 3 devices with instant toggle", "Adjustable DPI optical sensor (800-2400 DPI)", "Up to 18-month battery life with smart sleep mode"],
    purpose: ["Office", "College", "Daily Use"],
    style: ["Minimal", "Formal"],
    tag: "Hot",
    inStock: true
  },
  {
    id: 36,
    name: "7-in-1 Aluminium USB-C Hub with 4K HDMI & 100W PD",
    category: "Electronics",
    price: 34.00,
    originalPrice: 49.00,
    rating: 4.8,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Expand your laptop with 4K@60Hz HDMI, 100W Power Delivery, SD reader, and USB 3.0 ports.",
    description: "Essential companion for college laptops. Easily hook your laptop up to classroom projectors, external monitors, and high-speed flash drives.",
    features: ["Stunning 4K @ 60Hz HDMI video output", "100W USB-C Power Delivery pass-through", "High-speed 5Gbps USB 3.0 data ports", "Anodized heat-dissipating aluminium enclosure"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Formal"],
    tag: "Sale",
    inStock: true
  },

  // --- ADDITIONAL ACCESSORIES ---
  {
    id: 37,
    name: "Blue Light Blocking Anti-Eyestrain Glasses",
    category: "Accessories",
    price: 21.00,
    originalPrice: 30.00,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Lightweight TR90 frames with anti-reflective lenses to protect eyes during long study hours.",
    description: "Prevent eye fatigue, blurry vision, and headaches caused by prolonged laptop screen exposure. Ultra-light frames sit comfortably all day.",
    features: ["Filters 99% harmful blue light from screens", "Ultra-flexible and unbreakable TR90 material", "Anti-reflective zero-tint clear lenses", "Includes microfiber pouch & test card"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Casual"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 38,
    name: "Minimalist Pull-Tab Vegetable-Tanned Cardholder",
    category: "Accessories",
    price: 19.50,
    originalPrice: 28.00,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Ultra-compact 6-card sleeve wallet with pull-tab ribbon for quick card release.",
    description: "Ditch bulky wallets. Features a smart pull-tab mechanism that ejects your cards smoothly with a single flick of your finger.",
    features: ["Holds 6-8 cards plus folded bank notes", "Handy elastic pull-tab for instant card access", "Slim 0.25-inch thickness fits front pocket", "Natural vegetable-tanned patina leather"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Formal"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 39,
    name: "100% Cashmere Blend Brushed Fringe Scarf",
    category: "Accessories",
    price: 32.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Luxuriously soft oversized knit scarf with classic tasselled fringe ends.",
    description: "Stay warm with sophisticated elegance. Woven from cashmere and virgin wool for thermal insulation and cloud-soft touch.",
    features: ["Superfine Mongolian cashmere blend", "Extra-long 78-inch length for varied drape styles", "Naturally insulating and breathable", "Classic neutral tones for versatile pairing"],
    purpose: ["College", "Party", "Casual"],
    style: ["Casual", "Minimal", "Formal"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 40,
    name: "Brushed Titanium Beveled Edge Minimalist Ring",
    category: "Accessories",
    price: 23.50,
    originalPrice: 34.00,
    rating: 4.6,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Hypoallergenic matte titanium band with high-polish beveled inner comfort curve.",
    description: "An understated modern accessory that complements casual streetwear and formal suiting alike. Won't scratch, fade, or tarnish.",
    features: ["Solid aerospace-grade titanium construction", "Comfort-fit contoured inner curve", "Scratch-resistant matte brushed exterior", "100% rust-proof and skin-safe"],
    purpose: ["Party", "Casual", "Daily Use"],
    style: ["Streetwear", "Minimal"],
    tag: "Hot",
    inStock: true
  },

  // --- ADDITIONAL BAGS ---
  {
    id: 41,
    name: "Urban Waterproof Crossbody Chest Sling Bag",
    category: "Bags",
    price: 29.99,
    originalPrice: 42.00,
    rating: 4.8,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Compact hands-free shoulder bag with waterproof zippers and quick-release strap.",
    description: "Perfect for city exploring and bike commutes. Holds phone, wallet, keys, sunglasses, and power bank securely against your chest.",
    features: ["Water-repellent Cordura nylon weave", "Multi-pocket organizer with key clip", "Reversible strap for left/right shoulder wear", "Concealed back pocket for passport and phone"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Streetwear", "Sporty"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 42,
    name: "Expandable 40L Flight-Approved Travel Backpack",
    category: "Bags",
    price: 69.99,
    originalPrice: 99.00,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Suitcase-style 180° opening carry-on pack with vacuum compression & wet pocket.",
    description: "Designed for weekend getaways and college study tours. Unzips like a suitcase for quick airport security checks and neat clothing organization.",
    features: ["Expands from 28L to 40L with perimeter zipper", "Opens 180 degrees flat like a suitcase for packing", "Dedicated TSA-friendly 17-inch laptop compartment", "Waterproof composite PVC shell fabric"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Casual", "Sporty"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 43,
    name: "Waterproof Roll-Top Commuter Cycling Backpack",
    category: "Bags",
    price: 46.50,
    originalPrice: 65.00,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=700&q=80",
    shortDesc: "All-weather roll-top pack with reflective safety accents and magnetic buckle.",
    description: "Rain or shine, your books and electronics stay completely bone dry. Heavy-duty tarpaulin material is built to last for years.",
    features: ["Seamless high-frequency welded waterproof tarpaulin", "Fidlock-style magnetic snap buckle closure", "Ergonomic air-mesh padded back ventilation", "Reflective safety strips for night visibility"],
    purpose: ["College", "Casual", "Daily Use"],
    style: ["Sporty", "Streetwear"],
    tag: "Sale",
    inStock: true
  },
  {
    id: 44,
    name: "Hard-Shell Electronics Accessories Travel Organizer",
    category: "Bags",
    price: 18.00,
    originalPrice: 25.00,
    rating: 4.8,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Crushproof pouch with elastic retention loops for chargers, cables, and power banks.",
    description: "Keep all your chargers, SD cards, stylus pens, and earphones neatly organized inside your university backpack.",
    features: ["Shock-absorbing semi-rigid EVA exterior shell", "Double-layered mesh pockets and elastic loops", "Heavy-duty dual YKK zippers", "Includes detachable wrist carry strap"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Formal"],
    tag: "Hot",
    inStock: true
  },

  // --- ADDITIONAL WATCHES ---
  {
    id: 45,
    name: "Aviator Flieger Automatic Mechanical Pilot Watch",
    category: "Watches",
    price: 125.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Self-winding mechanical caliber with exhibition caseback and luminous Type-B dial.",
    description: "No battery changes ever. Winds automatically with the motion of your arm. The exhibition caseback lets you watch the intricate gears tick.",
    features: ["Automatic self-winding mechanical movement (no battery needed)", "Exhibition mineral crystal caseback reveals oscillating rotor", "SuperLuminova green glow hands and numerals", "Thick genuine saddle leather strap with rivets"],
    purpose: ["Office", "Party", "Casual"],
    style: ["Formal", "Streetwear"],
    tag: "Premium",
    inStock: true
  },
  {
    id: 46,
    name: "Vintage Gold-Tone Milanese Mesh Analog Watch",
    category: "Watches",
    price: 62.00,
    originalPrice: 88.00,
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Slim Champagne gold dial with magnetic adjustable Milanese loop strap.",
    description: "A glamorous vintage silhouette that shimmers under event lighting. Ultra-thin profile slips easily under buttoned shirt cuffs.",
    features: ["Polished 18K gold PVD ion plating", "Ultra-thin 7.2mm case profile", "Smooth magnetic Milanese loop infinite adjustment", "3ATM daily splash resistance"],
    purpose: ["Party", "Office", "Casual"],
    style: ["Formal", "Minimal"],
    tag: "Trending",
    inStock: true
  },
  {
    id: 47,
    name: "Hybrid Smartwatch with Physical Hands & Hidden OLED",
    category: "Watches",
    price: 82.00,
    originalPrice: 115.00,
    rating: 4.8,
    reviews: 148,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Real mechanical hands that move out of the way when you tap to read text notifications.",
    description: "The best of both worlds. Looks like an elegant luxury analog timepiece, but discretely tracks health and shows incoming call alerts.",
    features: ["Discreet hidden OLED sub-screen wakes on wrist flick", "Mechanical analog watch styling with smart notifications", "Heart rate, step tracking, and sleep quality sensors", "Up to 30-day battery life on a single charge"],
    purpose: ["Office", "College", "Daily Use"],
    style: ["Formal", "Sporty", "Minimal"],
    tag: "Best Seller",
    inStock: true
  },
  {
    id: 48,
    name: "Minimalist Scandinavian White Dial Leather Watch",
    category: "Watches",
    price: 44.00,
    originalPrice: 62.00,
    rating: 4.6,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    shortDesc: "Pure clean aesthetic with clean white face, slim silver hands, and Italian brown leather band.",
    description: "Understated Nordic beauty. Clean indices and supple genuine leather make it an effortless daily accessory for any casual or smart-casual outfit.",
    features: ["Clean two-hand Scandinavian dial design", "Vegetable-tanned genuine Italian leather band", "Scratch-resistant mineral crystal glass", "Accurate Japanese quartz movement"],
    purpose: ["College", "Office", "Daily Use"],
    style: ["Minimal", "Formal", "Casual"],
    tag: "Sale",
    inStock: true
  }
];

// Fallback image SVG data URI (renders a sleek placeholder if external image ever fails)
const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a855f7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23f3e8ff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22bold%22%3EQuickBuy%20Product%3C%2Ftext%3E%3C%2Fsvg%3E";

// ------------------------------------------------------------------------------
// 2. Application State & LocalStorage Management
// ------------------------------------------------------------------------------
const savedTheme = localStorage.getItem("quickbuy_theme");
const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? "dark" : "light");

const STATE = {
  cart: JSON.parse(localStorage.getItem("quickbuy_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("quickbuy_wishlist")) || [],
  theme: initialTheme,
  couponApplied: JSON.parse(localStorage.getItem("quickbuy_coupon")) || null,
  filters: {
    search: "",
    category: "All",
    maxPrice: 150,
    sort: "featured",
    tag: "All"
  }
};

// Valid discount coupons
const COUPONS = {
  "QUICK10": { discountPct: 10, label: "10% Off Instant Discount" }
};

// ------------------------------------------------------------------------------
// 3. Initialization
// ------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initUserAuthUI();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  initSmartPicksDefaults();
});

// ------------------------------------------------------------------------------
// 3B. User Authentication Status UI
// ------------------------------------------------------------------------------
function initUserAuthUI() {
  const container = document.getElementById("userNavContainer");
  if (!container) return;

  const currentUser = JSON.parse(localStorage.getItem("quickbuy_current_user"));

  if (currentUser && currentUser.name) {
    const firstName = currentUser.name.split(" ")[0];
    container.innerHTML = `
      <div class="dropdown">
        <button class="btn btn-sm btn-soft d-inline-flex align-items-center gap-1 dropdown-toggle py-1 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person-circle text-purple fs-6"></i>
          <span class="small fw-bold d-none d-sm-inline">${firstName}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow border">
          <li class="px-3 py-1 border-bottom small">
            <div class="fw-bold text-main">${currentUser.name}</div>
            <div class="text-muted" style="font-size: 0.75rem;">${currentUser.email}</div>
          </li>
          <li>
            <a class="dropdown-item small py-2 d-flex align-items-center gap-2" href="javascript:void(0)" onclick="showToast('Your account is active and verified!', 'info')">
              <i class="bi bi-shield-check text-success"></i> Account Status: Active
            </a>
          </li>
          <li>
            <a class="dropdown-item small py-2 d-flex align-items-center gap-2 text-danger" href="javascript:void(0)" onclick="logoutUser()">
              <i class="bi bi-box-arrow-right"></i> Sign Out
            </a>
          </li>
        </ul>
      </div>
    `;
  } else {
    container.innerHTML = `
      <a href="login.html" class="nav-icon-btn" id="userLoginBtn" title="Sign In / Register" aria-label="Sign In">
        <i class="bi bi-person"></i>
      </a>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem("quickbuy_current_user");
  initUserAuthUI();
  showToast("You have been signed out successfully.", "info");
}

// ------------------------------------------------------------------------------
// 4. Dark / Light Mode Handling
// ------------------------------------------------------------------------------
function initTheme() {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeToggleIcon");

  root.setAttribute("data-bs-theme", STATE.theme);

  if (themeIcon) {
    themeIcon.className = STATE.theme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-purple";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      STATE.theme = STATE.theme === "light" ? "dark" : "light";
      localStorage.setItem("quickbuy_theme", STATE.theme);
      root.setAttribute("data-bs-theme", STATE.theme);
      if (themeIcon) {
        themeIcon.className = STATE.theme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-purple";
      }
      showToast(`Switched to ${STATE.theme === "dark" ? "Dark" : "Light"} Mode!`, "info");
    });
  }
}

// ------------------------------------------------------------------------------
// 5. Toast Notifications Helper
// ------------------------------------------------------------------------------
function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const bgClass = type === "success" ? "border-success text-success" :
                  type === "danger" ? "border-danger text-danger" :
                  type === "warning" ? "border-warning text-warning" : "border-purple text-purple";

  const iconClass = type === "success" ? "bi-check-circle-fill text-success" :
                    type === "danger" ? "bi-exclamation-octagon-fill text-danger" :
                    type === "warning" ? "bi-exclamation-triangle-fill text-warning" : "bi-info-circle-fill text-purple";

  const toastEl = document.createElement("div");
  toastEl.className = `toast align-items-center custom-toast ${bgClass} border-2 show mb-2`;
  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center gap-2 font-weight-500">
        <i class="bi ${iconClass} fs-5"></i>
        <span>${message}</span>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toastEl);
  setTimeout(() => {
    toastEl.classList.remove("show");
    setTimeout(() => toastEl.remove(), 300);
  }, 3200);
}

// ------------------------------------------------------------------------------
// 6. Product Rendering & Grid Filtering
// ------------------------------------------------------------------------------
function renderProducts() {
  const container = document.getElementById("productsGrid");
  const countBadge = document.getElementById("productCountBadge");
  if (!container) return;

  // Filter products based on active state
  let filtered = PRODUCTS.filter(prod => {
    // Search query
    if (STATE.filters.search.trim() !== "") {
      const q = STATE.filters.search.toLowerCase().trim();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchCategory = prod.category.toLowerCase().includes(q);
      const matchDesc = prod.shortDesc.toLowerCase().includes(q);
      if (!matchName && !matchCategory && !matchDesc) return false;
    }

    // Category filter
    if (STATE.filters.category !== "All" && prod.category !== STATE.filters.category) {
      return false;
    }

    // Price filter
    if (prod.price > STATE.filters.maxPrice) {
      return false;
    }

    // Tag filter
    if (STATE.filters.tag !== "All" && prod.tag !== STATE.filters.tag) {
      return false;
    }

    return true;
  });

  // Sort products
  if (STATE.filters.sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (STATE.filters.sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (STATE.filters.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (STATE.filters.sort === "bestseller") {
    filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  }

  // Update item count badge
  if (countBadge) {
    countBadge.textContent = `${filtered.length} products found`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="mb-3">
          <i class="bi bi-search text-muted" style="font-size: 3.5rem;"></i>
        </div>
        <h4 class="fw-bold mb-2">No matching products found</h4>
        <p class="text-muted mb-4">Try adjusting your search terms, category filters, or price slider.</p>
        <button class="btn btn-purple" onclick="resetFilters()">
          <i class="bi bi-arrow-counterclockwise me-1"></i> Reset Filters
        </button>
      </div>
    `;
    return;
  }

  // Render cards
  container.innerHTML = filtered.map(prod => {
    const isWishlisted = STATE.wishlist.includes(prod.id);
    const discountPct = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

    return `
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div class="product-card" data-product-id="${prod.id}">
          <div class="product-img-wrapper">
            <span class="badge ${prod.tag === 'Best Seller' ? 'bg-purple' : prod.tag === 'Sale' ? 'bg-danger' : 'bg-dark'} product-tag-badge">
              ${prod.tag}
            </span>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                    onclick="toggleWishlist(${prod.id}, event)">
              <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
            <img src="${prod.image}" 
                 alt="${prod.name}" 
                 class="product-card-img" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
          </div>

          <div class="product-card-body">
            <div class="product-category-text">${prod.category}</div>
            <h3 class="product-title" onclick="openProductModal(${prod.id})" title="${prod.name}">
              ${prod.name}
            </h3>
            
            <div class="product-rating">
              <span>★ ${prod.rating}</span>
              <span class="product-rating-count">(${prod.reviews})</span>
            </div>

            <p class="text-muted small text-truncate mb-2">${prod.shortDesc}</p>

            <div class="product-price-row">
              <span class="product-price">$${prod.price.toFixed(2)}</span>
              <span class="product-original-price">$${prod.originalPrice.toFixed(2)}</span>
              <span class="product-discount-pill">${discountPct}% OFF</span>
            </div>

            <div class="product-btn-group">
              <button class="btn btn-purple w-100" onclick="addToCart(${prod.id}, 1, event)">
                <i class="bi bi-cart-plus me-1"></i> Add to Cart
              </button>
              <button class="btn btn-quick-view" title="Quick View" onclick="openProductModal(${prod.id})">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ------------------------------------------------------------------------------
// 7. Event Listeners for Filters, Search & Categories
// ------------------------------------------------------------------------------
function setupEventListeners() {
  // Live Search Input (Navbar & Main)
  const navSearch = document.getElementById("navSearchInput");
  const shopSearch = document.getElementById("shopSearchInput");

  if (navSearch) {
    navSearch.addEventListener("input", (e) => {
      STATE.filters.search = e.target.value;
      if (shopSearch) shopSearch.value = e.target.value;
      renderProducts();
    });
  }

  if (shopSearch) {
    shopSearch.addEventListener("input", (e) => {
      STATE.filters.search = e.target.value;
      if (navSearch) navSearch.value = e.target.value;
      renderProducts();
    });
  }

  // Category filter pills
  const categoryPills = document.querySelectorAll(".category-filter-btn");
  categoryPills.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryPills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.filters.category = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Bootstrap 5 Tag Filter Nav Pills
  const tagPills = document.querySelectorAll(".tag-filter-pill");
  tagPills.forEach(btn => {
    btn.addEventListener("click", () => {
      tagPills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.filters.tag = btn.getAttribute("data-tag");
      renderProducts();
    });
  });

  // Price range slider
  const priceRange = document.getElementById("priceRangeInput");
  const priceValueDisplay = document.getElementById("priceRangeValue");
  if (priceRange && priceValueDisplay) {
    priceRange.addEventListener("input", (e) => {
      STATE.filters.maxPrice = parseFloat(e.target.value);
      priceValueDisplay.textContent = `$${STATE.filters.maxPrice}`;
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      STATE.filters.sort = e.target.value;
      renderProducts();
    });
  }

  // Coupon apply button
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener("click", applyCouponCode);
  }

  // Checkout Form Submission
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmission);
  }

  // Smart Picks Button
  const findSmartPicksBtn = document.getElementById("findSmartPicksBtn");
  if (findSmartPicksBtn) {
    findSmartPicksBtn.addEventListener("click", generateSmartPicks);
  }

  // Smart Picks Budget Slider sync
  const smartBudgetSlider = document.getElementById("smartBudgetSlider");
  const smartBudgetValue = document.getElementById("smartBudgetValue");
  if (smartBudgetSlider && smartBudgetValue) {
    smartBudgetSlider.addEventListener("input", (e) => {
      smartBudgetValue.textContent = `$${e.target.value}`;
    });
  }
}

// Reset all filters helper
function resetFilters() {
  STATE.filters.search = "";
  STATE.filters.category = "All";
  STATE.filters.maxPrice = 150;
  STATE.filters.sort = "featured";
  STATE.filters.tag = "All";

  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) navSearch.value = "";
  const shopSearch = document.getElementById("shopSearchInput");
  if (shopSearch) shopSearch.value = "";

  const priceRange = document.getElementById("priceRangeInput");
  const priceValueDisplay = document.getElementById("priceRangeValue");
  if (priceRange) priceRange.value = 150;
  if (priceValueDisplay) priceValueDisplay.textContent = "$150";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  const categoryPills = document.querySelectorAll(".category-filter-btn");
  categoryPills.forEach(btn => {
    if (btn.getAttribute("data-category") === "All") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const tagPills = document.querySelectorAll(".tag-filter-pill");
  tagPills.forEach(btn => {
    if (btn.getAttribute("data-tag") === "All") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();
  showToast("All filters have been reset.", "info");
}

// Filter directly from home category cards
function selectCategoryFromCard(categoryName) {
  STATE.filters.category = categoryName;

  const categoryPills = document.querySelectorAll(".category-filter-btn");
  categoryPills.forEach(btn => {
    if (btn.getAttribute("data-category") === categoryName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();

  // Smooth scroll down to shop section
  const shopSection = document.getElementById("shop");
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ------------------------------------------------------------------------------
// 8. Shopping Cart Functionality
// ------------------------------------------------------------------------------
function addToCart(productId, quantity = 1, event = null) {
  if (event) {
    event.stopPropagation();
  }

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = STATE.cart.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    STATE.cart[existingItemIndex].quantity += quantity;
  } else {
    STATE.cart.push({
      id: productId,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to cart!`, "success");
}

function updateCartQuantity(productId, delta) {
  const itemIndex = STATE.cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  STATE.cart[itemIndex].quantity += delta;

  if (STATE.cart[itemIndex].quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  STATE.cart = STATE.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast(`Removed "${product ? product.name : 'Item'}" from cart.`, "info");
}

function clearCart() {
  if (STATE.cart.length === 0) return;
  STATE.cart = [];
  STATE.couponApplied = null;
  saveCart();
  updateCartUI();
  showToast("Your cart has been emptied.", "info");
}

function saveCart() {
  localStorage.setItem("quickbuy_cart", JSON.stringify(STATE.cart));
  localStorage.setItem("quickbuy_coupon", JSON.stringify(STATE.couponApplied));
}

function calculateCartTotals() {
  let subtotal = 0;
  let itemCount = 0;

  STATE.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      subtotal += prod.price * item.quantity;
      itemCount += item.quantity;
    }
  });

  let discount = 0;
  if (STATE.couponApplied && COUPONS[STATE.couponApplied]) {
    discount = (subtotal * COUPONS[STATE.couponApplied].discountPct) / 100;
  }

  // Delivery: Free if subtotal > $50, else $5.00 flat fee (or $0 if cart is empty)
  const delivery = subtotal === 0 ? 0 : (subtotal >= 50 ? 0 : 5.00);
  const total = Math.max(0, subtotal - discount + delivery);

  return { subtotal, discount, delivery, total, itemCount };
}

function updateCartUI() {
  const { subtotal, discount, delivery, total, itemCount } = calculateCartTotals();

  // Badges in navbar & buttons
  const cartBadges = document.querySelectorAll(".cart-count-badge");
  cartBadges.forEach(badge => {
    badge.textContent = itemCount;
    badge.style.display = itemCount > 0 ? "inline-block" : "none";
  });

  // Cart Offcanvas Elements
  const cartItemsList = document.getElementById("cartItemsList");
  const cartEmptyState = document.getElementById("cartEmptyState");
  const cartFooter = document.getElementById("cartFooter");

  const subtotalEl = document.getElementById("cartSubtotalAmount");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountEl = document.getElementById("cartDiscountAmount");
  const deliveryEl = document.getElementById("cartDeliveryAmount");
  const totalEl = document.getElementById("cartTotalAmount");
  const couponFeedback = document.getElementById("couponFeedback");

  if (!cartItemsList) return;

  if (STATE.cart.length === 0) {
    cartItemsList.innerHTML = "";
    if (cartEmptyState) cartEmptyState.classList.remove("d-none");
    if (cartFooter) cartFooter.classList.add("d-none");
    return;
  }

  if (cartEmptyState) cartEmptyState.classList.add("d-none");
  if (cartFooter) cartFooter.classList.remove("d-none");

  // Populate Items HTML
  cartItemsList.innerHTML = STATE.cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return "";
    const itemTotal = (prod.price * item.quantity).toFixed(2);

    return `
      <div class="cart-item-row">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
        <div class="flex-grow-1">
          <h6 class="mb-1 text-truncate fw-bold" style="max-width: 170px;" title="${prod.name}">${prod.name}</h6>
          <div class="text-purple fw-semibold small mb-2">$${prod.price.toFixed(2)} each</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, -1)">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, 1)">+</button>
          </div>
        </div>
        <div class="text-end">
          <div class="fw-bold fs-6 mb-2">$${itemTotal}</div>
          <button class="btn btn-sm text-danger p-0" title="Remove item" onclick="removeFromCart(${prod.id})">
            <i class="bi bi-trash3 fs-6"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Update Financials
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.classList.remove("d-none");
      discountEl.textContent = `-$${discount.toFixed(2)}`;
    } else {
      discountRow.classList.add("d-none");
    }
  }

  if (deliveryEl) {
    deliveryEl.innerHTML = delivery === 0 
      ? '<span class="text-success fw-bold">FREE</span>' 
      : `$${delivery.toFixed(2)}`;
  }

  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  // Bootstrap 5 Shipping Progress Bar Update
  const progressBar = document.getElementById("shippingProgressBar");
  const progressText = document.getElementById("shippingProgressText");
  const progressBadge = document.getElementById("shippingProgressBadge");

  if (progressBar && progressText && progressBadge) {
    if (subtotal >= 50) {
      progressBar.style.width = "100%";
      progressBar.className = "progress-bar bg-success";
      progressText.innerHTML = '<i class="bi bi-check-circle-fill text-success me-1"></i> You unlocked <strong>FREE Delivery</strong>!';
      progressBadge.className = "badge bg-success-subtle text-success";
      progressBadge.textContent = "Unlocked";
    } else {
      const pct = Math.min(100, Math.round((subtotal / 50) * 100));
      const needed = (50 - subtotal).toFixed(2);
      progressBar.style.width = `${pct}%`;
      progressBar.className = "progress-bar bg-purple";
      progressText.innerHTML = `Add <strong>$${needed}</strong> more for FREE Delivery`;
      progressBadge.className = "badge bg-purple-subtle text-purple";
      progressBadge.textContent = `${pct}%`;
    }
  }

  // Coupon feedback text
  if (couponFeedback) {
    if (STATE.couponApplied) {
      couponFeedback.innerHTML = `
        <div class="d-flex align-items-center justify-content-between text-success mt-2 small font-weight-500">
          <span><i class="bi bi-check-circle-fill me-1"></i> Coupon <strong>${STATE.couponApplied}</strong> applied (10% OFF)!</span>
          <a href="javascript:void(0)" class="text-danger small" onclick="removeCoupon()">Remove</a>
        </div>
      `;
    } else {
      couponFeedback.innerHTML = "";
    }
  }
}

// ------------------------------------------------------------------------------
// 9. Coupon Handling
// ------------------------------------------------------------------------------
function applyCouponCode() {
  const couponInput = document.getElementById("couponCodeInput");
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();

  if (!code) {
    showToast("Please enter a coupon code.", "warning");
    return;
  }

  if (COUPONS[code]) {
    STATE.couponApplied = code;
    saveCart();
    updateCartUI();
    couponInput.value = "";
    showToast(`Coupon "${code}" applied! You saved 10%.`, "success");
  } else {
    showToast("Invalid coupon code. Try QUICK10 for 10% discount!", "danger");
  }
}

function removeCoupon() {
  STATE.couponApplied = null;
  saveCart();
  updateCartUI();
  showToast("Coupon removed.", "info");
}

function copyCouponCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Code "${code}" copied to clipboard! Paste it in your cart.`, "success");
    const cartCouponInput = document.getElementById("couponCodeInput");
    if (cartCouponInput) cartCouponInput.value = code;
  }).catch(() => {
    showToast(`Code is: ${code}`, "info");
  });
}

// ------------------------------------------------------------------------------
// 10. Wishlist Functionality
// ------------------------------------------------------------------------------
function toggleWishlist(productId, event = null) {
  if (event) {
    event.stopPropagation();
  }

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = STATE.wishlist.indexOf(productId);
  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from wishlist.`, "info");
  } else {
    STATE.wishlist.push(productId);
    showToast(`Saved "${product.name}" to your wishlist!`, "success");
  }

  saveWishlist();
  updateWishlistUI();
  renderProducts(); // Refresh heart icon state on shop grid
}

function saveWishlist() {
  localStorage.setItem("quickbuy_wishlist", JSON.stringify(STATE.wishlist));
}

function updateWishlistUI() {
  const countBadges = document.querySelectorAll(".wishlist-count-badge");
  countBadges.forEach(badge => {
    badge.textContent = STATE.wishlist.length;
    badge.style.display = STATE.wishlist.length > 0 ? "inline-block" : "none";
  });

  const wishlistItemsList = document.getElementById("wishlistItemsList");
  const wishlistEmptyState = document.getElementById("wishlistEmptyState");

  if (!wishlistItemsList) return;

  if (STATE.wishlist.length === 0) {
    wishlistItemsList.innerHTML = "";
    if (wishlistEmptyState) wishlistEmptyState.classList.remove("d-none");
    return;
  }

  if (wishlistEmptyState) wishlistEmptyState.classList.add("d-none");

  wishlistItemsList.innerHTML = STATE.wishlist.map(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return "";

    return `
      <div class="cart-item-row">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
        <div class="flex-grow-1">
          <h6 class="mb-1 text-truncate fw-bold" style="max-width: 180px;" title="${prod.name}">${prod.name}</h6>
          <div class="text-purple fw-semibold small mb-2">$${prod.price.toFixed(2)}</div>
          <button class="btn btn-sm btn-outline-purple py-1 px-2" onclick="moveWishlistToCart(${prod.id})">
            <i class="bi bi-cart-plus me-1"></i> Move to Cart
          </button>
        </div>
        <div>
          <button class="btn btn-sm text-danger p-0" title="Remove" onclick="toggleWishlist(${prod.id})">
            <i class="bi bi-trash3 fs-6"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function moveWishlistToCart(productId) {
  addToCart(productId, 1);
  toggleWishlist(productId);
}

// ------------------------------------------------------------------------------
// 11. Smart Picks Recommendation System (Rule-based JS Engine)
// ------------------------------------------------------------------------------
function initSmartPicksDefaults() {
  const slider = document.getElementById("smartBudgetSlider");
  const val = document.getElementById("smartBudgetValue");
  if (slider && val) {
    val.textContent = `$${slider.value}`;
  }
}

function generateSmartPicks() {
  const purposeSelect = document.getElementById("smartPurposeSelect");
  const styleSelect = document.getElementById("smartStyleSelect");
  const budgetSlider = document.getElementById("smartBudgetSlider");
  const categorySelect = document.getElementById("smartCategorySelect");

  if (!purposeSelect || !styleSelect || !budgetSlider || !categorySelect) return;

  const purpose = purposeSelect.value;
  const style = styleSelect.value;
  const maxBudget = parseFloat(budgetSlider.value);
  const category = categorySelect.value;

  const resultsContainer = document.getElementById("smartPicksResults");
  const feedbackContainer = document.getElementById("smartPicksFeedback");
  if (!resultsContainer) return;

  // Rule-based Scoring Algorithm
  const scoredProducts = PRODUCTS.map(prod => {
    let score = 0;
    let matchReasons = [];

    // Purpose match
    if (prod.purpose && prod.purpose.includes(purpose)) {
      score += 35;
      matchReasons.push(`Tailored for ${purpose}`);
    }

    // Style match
    if (prod.style && prod.style.includes(style)) {
      score += 30;
      matchReasons.push(`Matches ${style} style`);
    }

    // Category match
    if (category === "Any" || prod.category === category) {
      score += 25;
      if (category !== "Any") {
        matchReasons.push(`Exact ${category} category`);
      }
    } else {
      score -= 40; // Penalize if user specifically chose another category
    }

    // Budget weighting: Fits comfortably within budget
    if (prod.price <= maxBudget) {
      score += 20;
      matchReasons.push(`Fits your $${maxBudget} budget`);
    } else {
      score -= 35; // Exceeds budget
    }

    // Rating quality bonus
    score += prod.rating * 2;

    return {
      product: prod,
      score: score,
      matchReason: matchReasons.join(" • ") || "Selected based on top quality rating"
    };
  });

  // Sort by highest score
  scoredProducts.sort((a, b) => b.score - a.score);

  // Filter recommendations within the user budget
  const primaryRecommendations = scoredProducts
    .filter(item => item.product.price <= maxBudget)
    .slice(0, 3);

  // If budget was very small or no items within budget, take affordable alternatives
  const affordableAlternatives = scoredProducts
    .filter(item => !primaryRecommendations.some(pr => pr.product.id === item.product.id))
    .sort((a, b) => a.product.price - b.product.price)
    .slice(0, 2);

  // Calculate total price of primary recommendations
  const totalRecommendedPrice = primaryRecommendations.reduce((acc, curr) => acc + curr.product.price, 0);
  const remainingBudget = Math.max(0, maxBudget - totalRecommendedPrice);
  const budgetUtilizationPct = Math.min(100, Math.round((totalRecommendedPrice / maxBudget) * 100));

  // Render Feedback Summary Box
  if (feedbackContainer) {
    feedbackContainer.innerHTML = `
      <div class="p-3 mb-4 rounded-3 border ${totalRecommendedPrice <= maxBudget ? 'border-purple bg-purple-subtle' : 'border-warning bg-warning-subtle'}">
        <div class="row align-items-center">
          <div class="col-md-7">
            <h6 class="fw-bold mb-1">
              <i class="bi bi-stars text-purple me-1"></i> Personalized Smart Picks for ${purpose} (${style} Style)
            </h6>
            <p class="small text-muted mb-2">
              Found ${primaryRecommendations.length} ideal product matches curated within your $${maxBudget} budget.
            </p>
            <div class="d-flex gap-3 small fw-semibold">
              <span>Total Cost: <strong class="text-purple">$${totalRecommendedPrice.toFixed(2)}</strong></span>
              <span>Remaining Budget: <strong class="text-success">$${remainingBudget.toFixed(2)}</strong></span>
            </div>
          </div>
          <div class="col-md-5 mt-3 mt-md-0">
            <div class="d-flex justify-content-between small text-muted mb-1">
              <span>Budget Utilized</span>
              <span>${budgetUtilizationPct}%</span>
            </div>
            <div class="budget-progress-bar">
              <div class="budget-progress-fill" style="width: ${budgetUtilizationPct}%;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Smart Picks Product Cards
  if (primaryRecommendations.length === 0) {
    resultsContainer.innerHTML = `
      <div class="col-12 text-center py-4">
        <i class="bi bi-wallet2 text-warning fs-1 mb-2"></i>
        <h5 class="fw-bold">Budget is too low for the selected category</h5>
        <p class="text-muted small">Try increasing your budget slider or check our budget-friendly alternatives below.</p>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = primaryRecommendations.map(item => {
      const prod = item.product;
      const isWishlisted = STATE.wishlist.includes(prod.id);

      return `
        <div class="col-12 col-md-4">
          <div class="recommendation-card p-3 h-100 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-purple-subtle text-purple">${prod.category}</span>
              <span class="text-warning small fw-bold">★ ${prod.rating}</span>
            </div>

            <div class="position-relative rounded overflow-hidden mb-3" style="height: 180px;">
              <img src="${prod.image}" alt="${prod.name}" class="w-100 h-100 object-fit-cover" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
            </div>

            <h6 class="fw-bold mb-1 text-truncate" title="${prod.name}">${prod.name}</h6>
            <div class="match-reason-badge">
              <i class="bi bi-check2-circle me-1"></i> ${item.matchReason}
            </div>

            <div class="mt-auto">
              <div class="d-flex justify-content-between align-items-baseline mb-3">
                <span class="fs-5 fw-bold text-purple">$${prod.price.toFixed(2)}</span>
                <span class="text-muted text-decoration-line-through small">$${prod.originalPrice.toFixed(2)}</span>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-purple btn-sm" onclick="addToCart(${prod.id}, 1, event)">
                  <i class="bi bi-cart-plus me-1"></i> Add to Cart
                </button>
                <button class="btn btn-sm btn-outline-secondary" onclick="toggleWishlist(${prod.id}, event)">
                  <i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Render Affordable Alternatives Section
  const altContainer = document.getElementById("smartPicksAlternatives");
  if (altContainer && affordableAlternatives.length > 0) {
    altContainer.innerHTML = `
      <div class="col-12 mt-4">
        <h6 class="fw-bold text-muted text-uppercase small mb-3">
          <i class="bi bi-lightning-charge-fill text-warning me-1"></i> Affordable Pocket-Friendly Alternatives
        </h6>
      </div>
      ${affordableAlternatives.map(item => `
        <div class="col-12 col-md-6">
          <div class="p-2 border rounded d-flex align-items-center gap-3 bg-surface">
            <img src="${item.product.image}" class="rounded" style="width: 60px; height: 60px; object-fit: cover;" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
            <div class="flex-grow-1">
              <h6 class="mb-0 small fw-bold text-truncate" style="max-width: 200px;">${item.product.name}</h6>
              <span class="text-purple small fw-bold">$${item.product.price.toFixed(2)}</span>
              <span class="badge bg-secondary small ms-1">${item.product.category}</span>
            </div>
            <button class="btn btn-sm btn-soft px-3" onclick="addToCart(${item.product.id}, 1, event)">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      `).join("")}
    `;
  }

  showToast("Found your Smart Picks matches!", "success");
}

// ------------------------------------------------------------------------------
// 12. Product Quick View Modal
// ------------------------------------------------------------------------------
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modalEl = document.getElementById("productDetailsModal");
  if (!modalEl) return;

  const isWishlisted = STATE.wishlist.includes(prod.id);
  const discountPct = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

  // Populate Modal Fields
  document.getElementById("modalProductImage").src = prod.image;
  document.getElementById("modalProductCategory").textContent = prod.category;
  document.getElementById("modalProductTitle").textContent = prod.name;
  document.getElementById("modalProductRating").textContent = `★ ${prod.rating} (${prod.reviews} customer reviews)`;
  document.getElementById("modalProductPrice").textContent = `$${prod.price.toFixed(2)}`;
  document.getElementById("modalProductOriginalPrice").textContent = `$${prod.originalPrice.toFixed(2)}`;
  document.getElementById("modalProductDiscount").textContent = `${discountPct}% OFF`;
  document.getElementById("modalProductDescription").textContent = prod.description;

  // Features list
  const featuresList = document.getElementById("modalProductFeatures");
  if (featuresList && prod.features) {
    featuresList.innerHTML = prod.features.map(f => `<li><i class="bi bi-check2 text-purple me-2"></i>${f}</li>`).join("");
  }

  // Tags
  const tagsContainer = document.getElementById("modalProductTags");
  if (tagsContainer) {
    const styleTags = (prod.style || []).map(s => `<span class="badge bg-purple-subtle text-purple me-1">${s}</span>`).join("");
    const purposeTags = (prod.purpose || []).map(p => `<span class="badge bg-secondary me-1">${p}</span>`).join("");
    tagsContainer.innerHTML = styleTags + purposeTags;
  }

  // Quantity input reset
  const qtyInput = document.getElementById("modalProductQuantity");
  if (qtyInput) qtyInput.value = 1;

  // Modal Add to Cart Button action
  const modalAddCartBtn = document.getElementById("modalAddToCartBtn");
  if (modalAddCartBtn) {
    modalAddCartBtn.onclick = () => {
      const q = parseInt(qtyInput ? qtyInput.value : 1) || 1;
      addToCart(prod.id, q);
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    };
  }

  // Modal Wishlist Button action
  const modalWishlistBtn = document.getElementById("modalWishlistBtn");
  if (modalWishlistBtn) {
    modalWishlistBtn.innerHTML = `<i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}`;
    modalWishlistBtn.onclick = () => {
      toggleWishlist(prod.id);
      const updatedWishlisted = STATE.wishlist.includes(prod.id);
      modalWishlistBtn.innerHTML = `<i class="bi ${updatedWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${updatedWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}`;
    };
  }

  const modalInstance = new bootstrap.Modal(modalEl);
  modalInstance.show();
}

// ------------------------------------------------------------------------------
// 13. Checkout & Simulated Order Confirmation
// ------------------------------------------------------------------------------
function openCheckoutModal() {
  if (STATE.cart.length === 0) {
    showToast("Your cart is empty. Add items first!", "warning");
    return;
  }

  // Close cart offcanvas if open
  const cartOffcanvasEl = document.getElementById("cartOffcanvas");
  if (cartOffcanvasEl) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(cartOffcanvasEl);
    if (offcanvasInstance) offcanvasInstance.hide();
  }

  const { subtotal, discount, delivery, total, itemCount } = calculateCartTotals();

  // Populate order summary in checkout
  const orderSummaryItems = document.getElementById("checkoutOrderSummaryItems");
  const summarySubtotal = document.getElementById("checkoutSummarySubtotal");
  const summaryDiscount = document.getElementById("checkoutSummaryDiscount");
  const summaryDelivery = document.getElementById("checkoutSummaryDelivery");
  const summaryTotal = document.getElementById("checkoutSummaryTotal");

  if (orderSummaryItems) {
    orderSummaryItems.innerHTML = STATE.cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (!prod) return "";
      return `
        <div class="d-flex justify-content-between small text-muted mb-1">
          <span>${prod.name} × ${item.quantity}</span>
          <span class="fw-semibold text-main">$${(prod.price * item.quantity).toFixed(2)}</span>
        </div>
      `;
    }).join("");
  }

  if (summarySubtotal) summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (summaryDiscount) summaryDiscount.textContent = discount > 0 ? `-$${discount.toFixed(2)}` : "$0.00";
  if (summaryDelivery) summaryDelivery.textContent = delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`;
  if (summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;

  const checkoutModalEl = document.getElementById("checkoutModal");
  if (checkoutModalEl) {
    const checkoutModal = new bootstrap.Modal(checkoutModalEl);
    checkoutModal.show();
  }
}

function handleCheckoutSubmission(e) {
  e.preventDefault();

  const name = document.getElementById("checkoutFullName").value.trim();
  const email = document.getElementById("checkoutEmail").value.trim();
  const phone = document.getElementById("checkoutPhone").value.trim();
  const address = document.getElementById("checkoutAddress").value.trim();
  const city = document.getElementById("checkoutCity").value.trim();
  const postal = document.getElementById("checkoutPostal").value.trim();

  // Validation
  if (!name || !email || !phone || !address || !city || !postal) {
    showToast("Please fill in all required shipping fields.", "danger");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Please provide a valid email address.", "warning");
    return;
  }

  if (phone.length < 7) {
    showToast("Please provide a valid contact phone number.", "warning");
    return;
  }

  // Calculate snapshot of completed order
  const { subtotal, discount, delivery, total } = calculateCartTotals();
  const orderNumber = `QB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

  // Estimated delivery: 3 to 4 business days from today
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);
  const deliveryDateStr = deliveryDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  // Hide Checkout Modal
  const checkoutModalEl = document.getElementById("checkoutModal");
  if (checkoutModalEl) {
    const modalInstance = bootstrap.Modal.getInstance(checkoutModalEl);
    if (modalInstance) modalInstance.hide();
  }

  // Reset form
  e.target.reset();

  // Populate Order Confirmation Modal
  document.getElementById("confirmOrderNumber").textContent = orderNumber;
  document.getElementById("confirmDeliveryDate").textContent = deliveryDateStr;
  document.getElementById("confirmCustomerName").textContent = name;
  document.getElementById("confirmCustomerAddress").textContent = `${address}, ${city} - ${postal}`;
  document.getElementById("confirmOrderTotal").textContent = `$${total.toFixed(2)}`;

  // Empty cart and persistent state
  STATE.cart = [];
  STATE.couponApplied = null;
  saveCart();
  updateCartUI();

  // Show Order Confirmation Modal
  const confirmModalEl = document.getElementById("orderConfirmationModal");
  if (confirmModalEl) {
    const confirmModal = new bootstrap.Modal(confirmModalEl);
    confirmModal.show();
  }

  showToast("Order placed successfully! Thank you for choosing QuickBuy.", "success");
}
