
import type { Product } from '@/types';

const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Precision Scalpel Series',
    description: 'An ultra-sharp, single-use scalpel designed for maximum precision and control in delicate surgical procedures. The ergonomic handle ensures a comfortable and secure grip.',
    images: [
      '/ScalpelSeries.png',
 
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
      '/Hemostatic.png',
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
      '/ScissorKit.png',
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
      '/Refractor.png',
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
      '/Needles.png',
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
      '/BoneDrill.png',
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
      '/Laparoscopic.png',
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
      '/Microscope.png',
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
  {
    id: 'prod_009',
    name: 'Adson Tissue Forceps',
    description: 'Fine-tipped forceps for grasping delicate tissues. The 1x2 teeth design provides a secure grip with minimal tissue trauma.',
    images: [
      '/AdsonForceps.png',
    ],
    price: 35.00,
    specifications: {
      'Material': 'German Stainless Steel',
      'Length': '4.75 inches',
      'Tip': '1x2 Teeth, Straight',
      'Autoclavable': 'Yes',
    },
    category: 'Grasping & Holding',
    aiHint: 'tissue forceps',
  },
  {
    id: 'prod_010',
    name: 'Mayo-Hegar Needle Holder',
    description: 'A heavy-pattern needle holder with a secure ratchet lock. The tungsten carbide jaws provide a durable, non-slip grip on needles.',
    images: [
      '/NeedleHolder.png',
    ],
    price: 95.00,
    specifications: {
      'Material': 'Stainless Steel with TC Jaws',
      'Length': '6 inches',
      'Jaw Type': 'Serrated, Straight',
      'Application': 'General Surgery',
    },
    category: 'Suturing & Stapling',
    aiHint: 'needle holder',
  },
  {
    id: 'prod_011',
    name: 'Yankauer Suction Tube',
    description: 'Standard suction instrument for clearing surgical sites of fluids. The bulbous tip is designed to minimize tissue damage.',
    images: [
      '/YankauerTube.png',
    ],
    price: 25.00,
    specifications: {
      'Material': 'Medical-grade Polymer',
      'Tip': 'Standard Bulbous Tip',
      'Sterility': 'Sterile, Single-Use',
      'Connection': 'Universal Tubing Connector',
    },
    category: 'Suction & Irrigation',
    aiHint: 'suction tube',
  },
  {
    id: 'prod_012',
    name: 'Electrosurgical Unit (ESU)',
    description: 'Advanced ESU for cutting, coagulating, and desiccating tissue with high-frequency electrical currents. Features multiple modes for procedural flexibility.',
    images: [
      '/ESU.png',
    ],
    price: 7500.00,
    specifications: {
      'Output': 'Up to 300 Watts',
      'Modes': 'Cut, Coag, Bipolar',
      'Display': 'Digital LED',
      'Safety': 'Patient Return Electrode Monitoring',
    },
    category: 'Powered Instruments',
    aiHint: 'electrosurgical unit',
  },
  {
    id: 'prod_013',
    name: 'LED Surgical Headlight',
    description: 'Bright, shadowless LED headlight for superior illumination of the surgical field. Lightweight design with an adjustable headband for comfort.',
    images: [
      '/SurgicalHeadlight.png',
    ],
    price: 1200.00,
    specifications: {
      'Light Intensity': '100,000 Lux',
      'Color Temperature': '6000K (Cool White)',
      'Battery Life': 'Up to 8 hours',
      'Weight': '250g',
    },
    category: 'Viewing Instruments',
    aiHint: 'surgical headlight',
  },
  {
    id: 'prod_014',
    name: 'Skin Stapler & Remover Kit',
    description: 'A convenient kit containing a sterile, single-use skin stapler and a stainless steel staple remover. For rapid wound closure.',
    images: [
      '/SkinStapler.png',
    ],
    price: 150.00,
    specifications: {
      'Stapler': '35 Wide Staples',
      'Remover': 'Stainless Steel, Autoclavable',
      'Includes': '1 Stapler, 1 Remover',
      'Application': 'Wound Closure',
    },
    category: 'Suturing & Stapling',
    aiHint: 'skin stapler',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
