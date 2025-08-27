
import type { Product } from '@/types';

const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Precision Scalpel Series',
    description: 'An ultra-sharp, single-use scalpel designed for maximum precision and control in delicate surgical procedures. The ergonomic handle ensures a comfortable and secure grip.',
    images: [
      'https://picsum.photos/seed/surgical_instrument_tray_1/800/800',
      'https://picsum.photos/seed/surgical_instrument_tray_2/800/800',
      'https://picsum.photos/seed/surgical_instrument_tray_3/800/800',
    ],
    price: 15.99,
    specifications: {
      'Material': 'Stainless Steel Blade, Polymer Handle',
      'Blade Size': '#11',
      'Sterility': 'Sterile, Single-Use',
      'Packaging': 'Individually wrapped',
    },
    category: 'Cutting & Dissecting',
    aiHint: 'surgical instruments tray',
  },
  {
    id: 'prod_002',
    name: 'Hemostatic Forceps',
    description: 'Locking hemostatic forceps (Kelly forceps) for clamping blood vessels and tissue. Features a durable ratchet mechanism for secure closure.',
    images: [
      'https://picsum.photos/seed/hemostatic_forceps_1/800/800',
      'https://picsum.photos/seed/hemostatic_forceps_2/800/800',
    ],
    price: 45.50,
    specifications: {
      'Material': 'German Stainless Steel',
      'Length': '5.5 inches',
      'Jaw Type': 'Curved, Serrated',
      'Autoclavable': 'Yes',
    },
    category: 'Clamping & Occluding',
    aiHint: 'hemostatic forceps',
  },
  {
    id: 'prod_003',
    name: 'Surgical Scissors Kit',
    description: 'A versatile kit including Mayo, Metzenbaum, and Iris scissors for various dissecting needs. Sharp-blunt tips for safe and effective cutting.',
    images: [
      'https://picsum.photos/seed/surgical_scissors_1/800/800',
      'https://picsum.photos/seed/surgical_scissors_2/800/800',
      'https://picsum.photos/seed/surgical_scissors_3/800/800',
    ],
    price: 120.00,
    specifications: {
      'Material': 'Tungsten Carbide Coated Stainless Steel',
      'Included Sizes': '5.5", 7", 4.5"',
      'Tip Configuration': 'Sharp/Blunt, Straight & Curved',
      'Case': 'Included leatherette case',
    },
    category: 'Cutting & Dissecting',
    aiHint: 'surgical scissors',
  },
  {
    id: 'prod_004',
    name: 'Advanced Retractor System',
    description: 'Self-retaining retractor system for providing clear visibility of the surgical field. Includes multiple blade sizes for versatility across procedures.',
    images: [
      'https://picsum.photos/seed/surgical_retractor_1/800/800',
      'https://picsum.photos/seed/surgical_retractor_2/800/800',
    ],
    price: 890.00,
    specifications: {
      'Material': 'Titanium Alloy',
      'Type': 'Self-retaining, Frame-based',
      'Blades': 'Set of 8, various depths',
      'Application': 'Abdominal, Thoracic Surgery',
    },
    category: 'Retracting & Exposing',
    aiHint: 'surgical retractor',
  },
  {
    id: 'prod_005',
    name: 'Suture Needles Pack (12-pack)',
    description: 'High-quality, sharp suture needles for smooth passage through tissue. Assorted pack includes various curvatures and point types for all suturing needs.',
    images: [
      'https://picsum.photos/seed/suture_needles_1/800/800',
      'https://picsum.photos/seed/suture_needles_2/800/800',
    ],
    price: 89.99,
    specifications: {
      'Material': '300 Series Stainless Steel',
      'Quantity': '12 needles per pack',
      'Types': 'Tapered, Cutting, Reverse Cutting',
      'Sizes': '3-0 to 5-0 compatibility',
    },
    category: 'Suturing & Stapling',
    aiHint: 'suture needles',
  },
  {
    id: 'prod_006',
    name: 'Orthopedic Bone Drill',
    description: 'A powerful and reliable cordless bone drill for orthopedic procedures. Features variable speed control and quick-release chuck for fast bit changes.',
    images: [
      'https://picsum.photos/seed/orthopedic_drill_1/800/800',
      'https://picsum.photos/seed/orthopedic_drill_2/800/800',
      'https://picsum.photos/seed/orthopedic_drill_3/800/800',
    ],
    price: 2500.00,
    specifications: {
      'Power Source': 'Rechargeable Li-ion Battery',
      'Max RPM': '1,200 RPM',
      'Torque': 'Up to 4.5 Nm',
      'Includes': 'Drill, 2 Batteries, Charger, Case',
    },
    category: 'Powered Instruments',
    aiHint: 'orthopedic drill',
  },
   {
    id: 'prod_007',
    name: 'Laparoscopic Trocar Set',
    description: 'A complete set of bladeless trocars for minimally invasive surgery. Designed to reduce fascial trauma and ensure a secure seal.',
    images: [
      'https://picsum.photos/seed/laparoscopic_trocar_1/800/800',
      'https://picsum.photos/seed/laparoscopic_trocar_2/800/800',
    ],
    price: 450.00,
    specifications: {
      'Type': 'Bladeless, Optical Tip',
      'Sizes': '5mm, 10mm, 12mm',
      'Material': 'Medical-grade polycarbonate',
      'Sterility': 'Sterile, Single-Use',
    },
    category: 'Minimally Invasive',
    aiHint: 'laparoscopic trocar',
  },
   {
    id: 'prod_008',
    name: 'Microscope',
    description: 'High-power surgical microscope for microsurgery. Provides excellent depth perception, illumination, and magnification.',
    images: [
      'https://picsum.photos/seed/surgical_microscope_1/800/800',
      'https://picsum.photos/seed/surgical_microscope_2/800/800',
    ],
    price: 15000.00,
    specifications: {
      'Magnification': '5x - 25x Zoom',
      'Illumination': 'Dual LED',
      'Mount': 'Floor Stand with Casters',
      'Features': 'Integrated HD Camera',
    },
    category: 'Viewing Instruments',
    aiHint: 'surgical microscope',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
