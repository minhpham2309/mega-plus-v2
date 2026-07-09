import { Leaf, Package, Truck, Ship, FileText, MapPin, Mail, Phone, Clock, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const productsList = [
    {
      id: 1,
      title: "Fresh Young Coconut",
      description: "Sustainably harvested, perfectly sweet, and prepped for extended shelf life during transit.",
      badge: "BESTSELLER",
      badgeColor: "bg-[#F59E0B]",
      bgColor: "bg-[#A7F3D0]",
      icon: "🥥",
      feature: "Cold Chain Ready"
    },
    {
      id: 2,
      title: "Premium Vietnamese Rice",
      description: "High-yield, fragrant, and globally certified rice varieties tailored for large-scale import.",
      badge: "PREMIUM",
      badgeColor: "bg-[#16A34A]",
      bgColor: "bg-[#FEF08A]",
      icon: "🌾",
      feature: "Global Certified"
    },
    {
      id: 3,
      title: "Fresh Tropical Fruits",
      description: "Hand-selected seasonal fruits, temperature-controlled from farm to destination.",
      badge: null,
      bgColor: "bg-[#FEF3C7]",
      icon: "🍍",
      feature: "Seasonal Selection"
    },
    {
      id: 4,
      title: "IQF Frozen Fruits",
      description: "Individually Quick Frozen at the source to lock in nutrients, flavor, and texture.",
      badge: "IQF",
      badgeColor: "bg-[#3B82F6]",
      bgColor: "bg-[#DBEAFE]",
      icon: "🧊",
      feature: "Industrial Grade"
    },
    {
      id: 5,
      title: "Soft Dried Fruits",
      description: "Processed using advanced dehydration technology, ideal for retail packaging.",
      badge: null,
      bgColor: "bg-[#FFEDD5]",
      icon: "🥭",
      feature: "Extended Shelf Life"
    }
];

export const servicesList = [
    {
      id: 1,
      icon: Leaf,
      title: "Agricultural Product Export",
      description: "Reliable, high-volume sourcing of premium Vietnamese goods with quality guarantees and competitive pricing.",
      features: ["Direct farm partnerships", "Quality certification"]
    },
    {
      id: 2,
      icon: Package,
      title: "OEM / ODM Private Labeling",
      description: "Custom packaging solutions designed to meet your brand's retail specifications and market requirements.",
      features: ["Custom branding", "Flexible packaging"]
    },
    {
      id: 3,
      icon: Truck,
      title: "International Logistics",
      description: "Secure, temperature-controlled freight forwarding tailored for perishable and dry agricultural goods.",
      features: ["Cold chain management", "Real-time tracking"]
    },
    {
      id: 4,
      icon: Ship,
      title: "Global Shipping Coordination",
      description: "Seamless ocean and air freight management, customs clearance, and port-to-door delivery worldwide.",
      features: ["Multi-modal transport", "Customs expertise"]
    },
    {
      id: 5,
      icon: FileText,
      title: "Import-Export Consulting",
      description: "Expert guidance on tariffs, trade compliance, documentation, and regulatory requirements.",
      features: ["Regulatory compliance", "Documentation support"]
    }
];

export const partnerLogos = [
    "https://i.pinimg.com/1200x/62/6b/ef/626befa7c05b04e14b8151265e8cd464.jpg",
    "https://i.pinimg.com/1200x/36/6e/60/366e600dc86c28b1e8f08e611f01a8d2.jpg",
    "https://tienvietexpress.com/wp-content/uploads/2020/10/bang-gia-gui-hang-tnt.jpg",
    "https://i.pinimg.com/736x/4f/d8/34/4fd834b4684285db8a968982188b7032.jpg",
    "https://i.pinimg.com/1200x/c9/e5/b3/c9e5b3ff5caec4895b9b6e73108a947b.jpg",
    "https://i.pinimg.com/1200x/ec/5b/00/ec5b0035b31ebec16106ea043a38eda3.jpg",
    "https://i.pinimg.com/1200x/29/c3/65/29c365f7be441296f820e595d47ad278.jpg",
    "https://i.pinimg.com/1200x/0f/44/ad/0f44adbd0f0935d39e56231ead3c0a34.jpg",
    "https://i.pinimg.com/736x/69/c5/a1/69c5a158d55a591b00349c048855d994.jpg",
    "https://i.pinimg.com/736x/70/4f/93/704f93ff575ab0f81f79af0f663f41d6.jpg",
    "https://i.pinimg.com/736x/bf/dc/8f/bfdc8f1b9de0ae05feb716f96c43066e.jpg",
    "https://i.pinimg.com/1200x/a2/82/68/a28268227b74e42f39e9280794d127dd.jpg",
    "https://nguyendang.net.vn/wp-content/uploads/2021/03/Hang-tau-hapag-lloyd-Hapag-Lloyd-AG.jpg"
];

export const contactInfo = [
  { icon: MapPin, title: 'Head Office', desc: '55 Bis Nguyen Van Thu, Tan Dinh Ward\nHo Chi Minh City, Vietnam' },
  { icon: Mail, title: 'Email Us', desc: 'info@megaplusvn.com\nsales@megaplusvn.com' },
  { icon: Phone, title: 'Call Us', desc: '+84 707793068\n+84 708697920' },
  { icon: Clock, title: 'Business Hours', desc: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 12:00 PM' }
];

export const qualityBadges = [
  { icon: ShieldCheck, label: 'ISO 22000' },
  { icon: Award, label: 'HACCP' },
  { icon: Leaf, label: 'GlobalGAP' },
  { icon: CheckCircle, label: 'FDA' }
];

export const qualityStats = [
  { val: '100%', label: 'Traceability' },
  { val: '24/7', label: 'Quality Monitoring' },
  { val: '50+', label: 'Quality Checkpoints' },
  { val: '0%', label: 'Compromise' }
];
