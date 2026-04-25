  import Aafee from "../images/CombainedProduct/dallas-drbond.png";
  import Banner from "../images/Banner.jpeg";
  import Ceramikha from "../images/Ceramikha.png";
  import ceramikhaBanner from "../images/ceramikhaBanner.jpeg";
  import DallasGroutPlus from "../images/GroutPlus.png";
  import DallasWallutty from "../images/CombainedProduct/DallasWallutty.png";
  import DallasDrM1Bond from "../images/DallasDrM1Bond.jpeg";
  import DallasGypsumPlasty from "../images/DallasGypsmPlasty.png";
  import DallasReadyPlaster from "../images/CombainedProduct/DallasReadyPlasty.png";
  import DallasTileAdhensive from "../images/DallasTileAdhensive.png";
  import MatrixGypsmBond from "../images/matrixgypsmbond.png";
  import Matrixgyp from "../images/matrixgypMatrix.png";
  import matrixprodct from "../images/matrixprodct.png";
  import matricxprod from "../images/matricxprod.png";
  import mackado from "../images/mackado.png";

  const flexibleServiceOptions = [
    {
      title: "Option 1: Full Service (Material + Labour)",
      description: "We provide complete wall plastering solutions with our trained professionals, site supervisors, and qualified engineers, using Dallas Waterproof Wall-Plaster.",
      points: [
        "Charged per square foot",
        "Quick, clean, and reliable execution"
      ]
    },
    {
      title: "Option 2: Material Supply Only",
      description: "If you have your own team, you can purchase our Dallas Waterproof Wall-Plaster separately.",
      points: [
        "Available in 30kg and 50kg bags",
        "Factory-direct pricing"
      ]
    }
  ];
  const flexibleServiceMatrixOptions = [
    {
      title: "Option 1: Full Service (Material + Labour)",
      description: "We provide complete wall plastering solutions with our trained professionals, site supervisors, and qualified engineers, using International gypsum plaster.",
      points: [
        "Charged per square foot",
        "Quick, clean, and reliable execution"
      ]
    },
    {
      title: "Option 2: Material Supply Only",
      description: "If you have your own team, you can purchase our International gypsum plaster separately.",
      points: [
        "Available in 30kg and 50kg bags",
        "Factory-direct pricing"
      ]
    }
  ];

  const nextGenFeatures_GypsumPlaster = [
    "3X Waterproof & Weather-Resistant",
    "Supreme White, Smooth Finish",
    "Quick-Set – No Curing, No Cracks",
    "No Special Tools or Skilled Labour",
    "Saves Time & Labour Costs",
    "Factory Direct – No Middlemen",
    "Lifetime Warranty & Support",
    "Safe for Children & Families – Green Building Friendly",
    "Made with Imported Materials & Eco Binders",
    "Lightweight, Fire-Resistant & Lab-Tested"
  ];

  const nextGenFeatures_TileAdhesive = [
    "Next-Gen Polymer-Enhanced Adhesive for Tiles",
    "Strong Grip with 3X Bonding Strength",
    "Suitable for Floor & Wall Tiles.",
    "Weatherproof, Crack-Resistant & Anti-Slip",
    "Ready to Use – Just Mix with Water",
    "No Shrinkage, No Hollow Sound",
    "Saves Time, Labour & Material Costs",
    "Ideal for Bathrooms, Kitchens, Exteriors & Interiors",
    "Strong Scientific backroud & Quality Testing"
  ];

  const nextGenFeatures_WallPlaster = [
    "Next Gen / International Standards",
    "3X Waterproof & Weather-Proof",
    "Ready to Use – Just Add Water",
    "No Special Tools or Labour",
    "Saves Time & Costs",
    "Crack-Free, Shrink-Free Finish",
    "Factory Direct – No Middlemen",
    "Lifetime Warranty & Support",
    "Strong Scientific backround",
    "Made with River Sand, Quartz & Clinker",
    "Reduces Heat & Fungal Growth"
  ];

  const nextGenFeatures_SupremeGyplast = [
    "International Standard",
    "3X Waterproof & Weather-Proof",
    "No Special Tools or Labour",
    "Cuts Time & Costs",
    "Lifetime Warranty",
    "After-Sales Support",
    "Factory Direct – No Middlemen",
    "Strong Scientific Backroud",
    "Supreme White",
    "Uses Imported raw-materials , Modern Green Binders etc."
  ];

  const nextGenFeatures_WallPutty = [
    "International Standard",
    "3X Waterproof & Weather-Proof",
    "No Special Tools or Labour",
    "Cuts Time & Costs",
    "Lifetime Warranty",
    "After-Sales Support",
    "Factory Direct – No Middlemen",
    "Strong Scientific Backroud",
    "Supreme White",
    "Uses Imported raw-material , white Clinker , Binders etc"
  ];
  
  const nextGenFeatures_Generic = [
    "High Performance Formulation",
    "Eco-Friendly Composition",
    "Long-Lasting Durability",
    "Easy Application Process",
    "Cost-Effective Solution",
    "Quality Assured"
  ];

  // Next-Gen features specific to waterproofing/primer
  const nextGenFeatures_PrimerWaterproofing = [
    "Advanced Polymer Technology",
    "Excellent Penetration & Sealing",
    "Prevents Dampness & Efflorescence",
    "Enhances Adhesion of Topcoats",
    "Breathable & Flexible Film",
    "UV Resistant for Exterior Use"
  ];

  // Next-Gen features specific to grouting
  const nextGenFeatures_Grout = [
    "Waterproof & Stain Resistant Formula",
    "Durable & Long-Lasting Color",
    "Resistant to Mildew & Fungal Growth",
    "Easy to Clean & Maintain",
    "High Compressive Strength",
    "Flexible & Crack-Resistant"
  ];

  // Next-Gen features specific to water treatment
  const nextGenFeatures_WaterTreater = [
    "Optimizes Water Quality for Construction",
    "Improves Workability of Mixes",
    "Reduces Water Consumption",
    "Enhances Bonding Strength",
    "Prevents Efflorescence & Leaching",
    "Eco-Friendly & Non-Toxic"
  ];

  // Next-Gen features specific to ceramic solutions
  const nextGenFeatures_Ceramic = [
    "High-Performance Ceramic Binders",
    "Exceptional Hardness & Durability",
    "Superior Aesthetic Finish",
    "Scratch & Abrasion Resistant",
    "Easy to Apply & Polish",
    "Weatherproof for All Climates"
  ];

  // Default brochure data to apply to products
  const defaultBrochures = [
    { language: "Tamil", url: "/brochures/tamil.pdf" },
    { language: "Malayalam", url: "/brochures/malayalam.pdf" },
    { language: "Telugu", url: "/brochures/telugu.pdf" },
    { language: "Kannada", url: "/brochures/kannada.pdf" },
    { language: "English", url: "/brochures/English.pdf" },
  ];

  export const wallPlasterTechData = [
    { property: "Product Name", value: "Ready Wall Plaster (Waterproof Wall Plaster)", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1001", isCode: "" },
    { property: "Appearance", value: "Smooth, off-grey paste", isCode: "" },
    { property: "Density", value: "1.6 g/cm³", isCode: "IS 12269:2013" },
    { property: "Thickness", value: "Minimum 12 mm", isCode: "" },
    { property: "Pot Life", value: "1-2 hours", isCode: "" },
    { property: "Setting Time", value: "24-48 hours", isCode: "" },
    { property: "Water Resistance", value: "> 95%", isCode: "IS 3085:1986" },
    { property: "Compressive Strength", value: "> 9.5 MPa (after 28 days)", isCode: "IS 4031:1988" },
    { property: "Tensile Strength", value: "> 2.5 MPa", isCode: "IS 5816:1999" },
    { property: "Thermal Conductivity", value: "0.1 - 0.2 W/m·K", isCode: "IS 3362:1985" },
    { property: "pH Level", value: "7 - 9", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
    { property: "Fire Resistance", value: "Non-combustible (Class A)", isCode: "IS 3808:2009" },
    { property: "Coverage", value: "1.5 - 2.0 m² per kg (at 12 mm thickness)", isCode: "" },
    { property: "Drying Time", value: "6-8 hours (surface dry)", isCode: "" },
    { property: "Working Temperature", value: "5°C to 40°C", isCode: "" },
  ];
  export const gypMatrixTechData = [
    { property: "Product Name", value: "GypMATRIX International Waterproof Gypsum Plaster", isCode: "" },
    { property: "Manufacturer", value: "Matrix Wallcare Pvt Ltd", isCode: "" },
    { property: "Product Code", value: "4001", isCode: "" },
    { property: "Appearance", value: "Fine, off-white powder", isCode: "" },
    { property: "Binder Base", value: "High-purity gypsum with waterproof polymers", isCode: "" },
    { property: "Bulk Density", value: "850 – 950 kg/m³", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Water Demand", value: "65–70% by weight", isCode: "" },
    { property: "Pot Life (Workability Time)", value: "25 – 30 minutes", isCode: "" },
    { property: "Initial Setting Time", value: "7 – 10 minutes", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Final Setting Time", value: "15 – 20 minutes", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Coverage (10–12 mm thickness)", value: "1 bag (25 kg) covers approx. 20–22 sq. ft.", isCode: "" },
    { property: "Recommended Thickness", value: "8–12 mm (walls), 6–8 mm (ceilings)", isCode: "" },
    { property: "Compressive Strength (7 days)", value: "≥ 7.5 N/mm²", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Flexural Strength", value: "≥ 3.0 N/mm²", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Bond Strength to Substrate", value: "≥ 0.8 N/mm²", isCode: "IS 15477:2019" },
    { property: "Thermal Conductivity", value: "0.35 – 0.40 W/mK", isCode: "IS 3362:1985" },
    { property: "Fire Resistance", value: "> 2 hours at 750°C", isCode: "IS 3808:2009" },
    { property: "Water Absorption (Ordinary Gypsum)", value: "18–20%", isCode: "" },
    { property: "Water Absorption (GypMATRIX)", value: "≤ 6% (3X more waterproof)", isCode: "IS 3085:1986" },
    { property: "Capillary Water Rise", value: "< 3 mm after 24 hrs", isCode: "" },
    { property: "Moisture Resistance", value: "Class MR ≥ 85 (Excellent)", isCode: "" },
    { property: "Application Temperature Range", value: "+5°C to +45°C", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
  ];

  // Matrix-specific next-gen features
  const nextGenFeatures_GypMatrix = [
    "3X Waterproof Protection – Advanced Polymers Technology",
    "International Quality Standards",
    "Ready-to-Use – No Curing Required",
    "Smooth, Paint-Ready Finish – No Wall Putty Needed",
    "Green Building Certified – Eco-Friendly & Non-Toxic",
    "Fire-Resistant & Heat-Insulating Properties",
    "Lightweight Yet 3X Stronger than Ordinary Gypsum",
    "Fast-Setting Technology – Speeds Up Projects",
    "No Shrinkage or Cracks – Lifetime Protection",
    "Superior Durability Compared to Traditional Plasters"
  ]
  export const wallPuttyTechData = [
    { property: "Product Name", value: "Dallas Wall Putty", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1002", isCode: "" },
    { property: "Appearance", value: "Fine white powder", isCode: "" },
    { property: "Pot Life", value: "2-3 hours", isCode: "" },
    { property: "Drying Time (per coat)", value: "4-6 hours", isCode: "" },
    { property: "Coverage", value: "1.0 - 1.2 m²/kg per coat (at 1.5 mm thickness)", isCode: "" },
    { property: "Adhesion Strength", value: "> 1.0 MPa", isCode: "IS 15477:2019" },
    { property: "Water Resistance", value: "Excellent", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
    { property: "VOC Content", value: "Very low", isCode: "" },
  ];

  export const gypsumPlasterTechData = [
    { property: "Product Name", value: "Dallas Gypsum Plaster", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1003", isCode: "" },
    { property: "Appearance", value: "White powder", isCode: "" },
    { property: "Setting Time (Initial)", value: "10-15 minutes", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Setting Time (Final)", value: "25-30 minutes", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Compressive Strength", value: "> 4.0 MPa (after 7 days)", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Flexural Strength", value: "> 2.0 MPa", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Density (Dry)", value: "900 - 1000 kg/m³", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Coverage", value: "2.5 - 3.0 kg/m² per 10mm thickness", isCode: "" },
    { property: "Shelf Life", value: "6 months", isCode: "" },
  ];

  export const groutPlusTechData = [
    { property: "Product Name", value: "Dallas Grout Plus", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1004", isCode: "" },
    { property: "Appearance", value: "Colored powder", isCode: "" },
    { property: "Pot Life", value: "30-45 minutes", isCode: "" },
    { property: "Setting Time", value: "24 hours", isCode: "" },
    { property: "Compressive Strength", value: "> 20 MPa (after 28 days)", isCode: "IS 4031" },
    { property: "Flexural Strength", value: "> 5 MPa (after 28 days)", isCode: "IS 4031" },
    { property: "Water Absorption", value: "< 0.5%", isCode: "IS 15477:2019" },
    { property: "Shrinkage", value: "Negligible", isCode: "" },
    { property: "pH Level", value: "8-10", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
  ];

  export const tileAdhesiveTechData = [
    { property: "Product Name", value: "Dallas Tile Adhesive", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1005", isCode: "" },
    { property: "Appearance", value: "Grey powder", isCode: "" },
    { property: "Pot Life", value: "2-3 hours", isCode: "" },
    { property: "Open Time", value: "20-30 minutes", isCode: "IS 15477:2019" },
    { property: "Adjustability Time", value: "15-20 minutes", isCode: "" },
    { property: "Tensile Adhesion Strength", value: "> 1.5 MPa (after 28 days)", isCode: "IS 15477:2019" },
    { property: "Slip Resistance", value: "< 0.5 mm", isCode: "IS 15477:2019" },
    { property: "Coverage", value: "5-6 kg/m² (for 3mm bed thickness)", isCode: "" },
    { property: "Shelf Life", value: "6 months", isCode: "" },
  ];

  export const waterTreaterTechData = [
    { property: "Product Name", value: "Dallas Watertreater", isCode: "" },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1006", isCode: "" },
    { property: "Appearance", value: "Clear to pale yellow liquid", isCode: "" },
    { property: "pH Level", value: "7.0 - 8.5", isCode: "" },
    { property: "Specific Gravity", value: "1.0 - 1.05", isCode: "" },
    { property: "Dosage (typical)", value: "1-2% by weight of cement", isCode: "" },
    { property: "Chlorine Content", value: "Nil", isCode: "IS 456" },
    { property: "Shelf Life", value: "24 months", isCode: "" },
    { property: "VOC Content", value: "Zero", isCode: "" },
  ];

  export const drM1BondTechData = [
    { property: "Product Name", value: "Dr. M1 Bond", isCode: "" },
    { property: "Manufacturer", value: "Dr. Proof / Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "2001", isCode: "" },
    { property: "Appearance", value: "Viscous liquid", isCode: "" },
    { property: "Elongation at Break", value: "> 200%", isCode: "ASTM D412" },
    { property: "Tensile Strength", value: "> 1.0 MPa", isCode: "ASTM D412" },
    { property: "Water Immersion Adhesion", value: "Excellent", isCode: "ASTM D7234" },
    { property: "Drying Time (per coat)", value: "4-6 hours", isCode: "" },
    { property: "Coverage", value: "0.5 - 0.75 kg/m² per coat", isCode: "" },
    { property: "VOC Content", value: "Low", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
  ];

  export const ceramikhaGypsumPlasterTechData = [
    { property: "Product Name", value: "Ceramikha Gypsum Plaster", isCode: "" },
    { property: "Manufacturer", value: "Ceramikha / Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "3001", isCode: "" },
    { property: "Appearance", value: "White powder", isCode: "" },
    { property: "Setting Time (Initial)", value: "15-20 minutes", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Compressive Strength", value: "> 4.5 MPa (after 7 days)", isCode: "IS 2542 (Part 1/Sec 1)" },
    { property: "Hardness", value: "High", isCode: "" },
    { property: "Coverage", value: "2.3 - 2.8 kg/m² per 10mm thickness", isCode: "" },
    { property: "Fire Resistance", value: "Non-combustible", isCode: "IS 3808" },
    { property: "Shelf Life", value: "6 months", isCode: "" },
  ];

  // --- END: NEW TECHNICAL DATA TABLES FOR OTHER PRODUCTS ---


  export const dallasProducts = [
    {
      id: "wall-plaster",
      category: "Dallas",
      name: "Ready Wall Plaster",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
          productTagline: "Next-Gen DampProof Wall Plaster",
      image: DallasReadyPlaster,
      icon: "🏗️",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹520/bag",
      savings: "₹70 per bag",
      mainProducts: ["Ready Plast Waterproof Formula", "Self-curing Technology"],
      features: ["Ready Plast Waterproof Formula", "Self-curing Technology", "3X Waterproof & Weather-Proof"], // Added features
      packageContents: [
        "Waterproof Wall Plaster Bag (30 KG)",
        "Waterproof 2X Plaster Bag (50 KG) for bathroom & other highly dampen areas",
        "Waterproof Liquid (for lintel area from DrProof)",
        "Dallas Waterproof Grout (50 KG)",
        "Dallas Watertreater (20-Litre Container)",
      ],
      applicationSteps: [
        "Fill a 200-litre drum with clean water",
        "Add 2 litres of Dallas Watertreater to the water and mix gently",
        "Measure the required amount of Dallas Ready Wall Plaster and gradually add 16–20% of the prepared water mixture",
        "Mix thoroughly until a uniform consistency is achieved",
        "Apply using standard plastering techniques",
        "Allow to cure for 24-48 hours for optimal strength",
      ],
      specialFeatures: [
        "No special tools or skilled labor required",
        "Reduces labor and overall plastering costs",
        "Surprise gift included in every Dallas bag",
        "Lifetime guarantee on waterproof performance",
        "Self-curing technology",
        "Crack-resistant formula",
      ],
      benefits: [
        "No special tools required",
        "Reduces labor costs",
        "Lifetime guarantee",
        "Superior adhesion",
        "Weather resistant",
        "Crack-resistant formula",
      ],
      hasTechData: true,
      techData: wallPlasterTechData, // Already correctly assigned
      warranty: "Lifetime Guarantee",
      deliveryTime: "2-3 days",
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_WallPlaster,
      brochures: defaultBrochures,
    },
    {
      id: "wall-putty",
      name: "Wall Putty",
      category: "Dallas",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
      productTagline: "Next-Gen DampProof Wall Putty",
      image: DallasWallutty,
      icon: "🎨",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹640/bag",
      savings: "₹320 per bag",
      discount: "50% OFF",
      features: ["Supreme White Finish", "Dampproof Formula", "Smooth Texture"],
      packageContents: [
        "Dallas Waterproof Wallputty bag (40 KG)",
        "Dallas Watertreater (10 or 20-Litre Container)",
        "Surprise gift awaits in your Dallas bag",
        "Application guide and tools",
      ],
      applicationSteps: [
        "Step 1: Fill a 200-liter drum with clean water and add 2 liters of Dallas Watertreater, mix gently",
        "Step 2: Use the same W-Treated Water to mix with Dallas grout preparation for consistent grout mixture",
        "Step 3: Measure required Dallas Wall Putty and gradually add 28–30% of the prepared W-Treated Water",
        "Step 4: Paint/spray wall with Special Wall Putty Grout, let set, then apply Dallas Wall Putty (2-3 coats)",
        "Step 5: Allow each coat to dry completely before applying the next",
      ],
      benefits: [
        "Superior adhesion",
        "Damp resistance",
        "Easy application",
        "Long-lasting finish",
        "Excellent coverage",
        "Smooth texture",
      ],
      specialOffer: "Dallas offers its waterproof wall putty at a 50% discount off the Maximum Retail Price (MRP)",
      warranty: "5 Year Guarantee",
      deliveryTime: "1-2 days",
      hasTechData: true, 
      techData: wallPuttyTechData, 
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_WallPutty,
      brochures: defaultBrochures,
    },

    {
      id: "gypsum-plaster",
      name: "Gypsum Plaster",
      category: "Dallas",
        productTagline: "Next-Gen DampProof Gypsum Plaster",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
      image: DallasGypsumPlasty,
      icon: "🔧",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹450/bag",
      savings: "₹70 per bag",
      features: ["High-quality Gypsum", "Superior Adhesion", "Smooth Finish"],
      benefits: [
        "Excellent adhesion",
        "Professional finish",
        "Easy to work with",
        "Durable results",
        "Cost-effective",
        "Environmentally friendly",
      ],
      packageContents: [
        "Premium Gypsum Plaster (25 KG bag)",
        "Mixing guide and ratio chart",
        "Quality assurance certificate",
      ],
      applicationSteps: [ 
        "Ensure surface is clean and free from loose particles.",
        "Mix plaster with recommended water ratio to form a smooth paste.",
        "Apply evenly using a trowel.",
        "Finish to desired smoothness.",
        "Allow to dry completely (no curing required)."
      ],
      specialFeatures: [ 
        "Lightweight formulation",
        "Crack-resistant",
        "Fire-resistant properties",
        "Sound insulation benefits"
      ],
      warranty: "2 Year Guarantee",
      deliveryTime: "2-3 days",
      hasTechData: true,
      techData: gypsumPlasterTechData, 
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_GypsumPlaster,
      brochures: defaultBrochures,
    },
    {
      id: "grout-plus",
      name: "Grout Plus",
      category: "Dallas",
      productTagline: "Next-Gen DampProof Grout Plus",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
      image: DallasGroutPlus,
      icon: "🔲",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹350/bag",
      savings: "₹70 per bag",
      features: ["Waterproof Grout Formula", "Stain Resistant", "Color Consistency"],
      benefits: [
        "Long-lasting color",
        "Easy maintenance",
        "Professional finish",
        "Water resistance",
        "Durability",
        "Versatile application",
      ],
      packageContents: [
        "Waterproof Grout (25 KG bag)",
        "Color consistency guide",
        "Application tools",
      ],
      applicationSteps: [ // Added placeholder
        "Ensure tile joints are clean and dry.",
        "Mix grout powder with water to a smooth, workable paste.",
        "Apply grout into joints using a rubber float.",
        "Remove excess grout with a damp sponge.",
        "Allow to cure as per instructions before foot traffic."
      ],
      specialFeatures: [ // Added placeholder
        "Anti-fungal and anti-bacterial properties",
        "Shrinkage-compensated formula",
        "Wide range of color options",
        "Suitable for interior and exterior use"
      ],
      warranty: "5 Year Guarantee",
      deliveryTime: "1-2 days",
      hasTechData: true, // Changed to true
      techData: groutPlusTechData, // Assigned new tech data
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_Grout, // Used specific next-gen features
      brochures: defaultBrochures,
    },
    {
      id: "tile-adhesive",
      name: "Tile Adhesive",
      category: "Dallas",
          productTagline: "Next-Gen DampProof Tile Adhesive",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",

      image: DallasTileAdhensive,
      icon: "🔧",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹480/bag",
      savings: "₹60 per bag",
      features: ["High Bond Strength", "Water Resistant", "Anti-Slip Formula"],
      benefits: [
        "Superior adhesion",
        "Crack resistance",
        "Weather proof",
        "Easy application",
        "Cost effective",
        "Professional grade",
      ],
      packageContents: [
        "Tile Adhesive (25 KG bag)",
        "Mixing ratio guide",
        "Application notched trowel",
      ],
      applicationSteps: [
        "Prepare surface: clean, level, and dry.",
        "Mix adhesive powder with water to a consistent paste.",
        "Apply adhesive using a notched trowel.",
        "Press tiles firmly into the adhesive.",
        "Allow to set before grouting."
      ],
      specialFeatures: [
        "Suitable for various tile types (ceramic, porcelain, vitrified)",
        "Ideal for both floor and wall applications",
        "Long open time for easier adjustments",
        "High shear strength for secure bonding"
      ],
      warranty: "3 Year Guarantee",
      deliveryTime: "2-3 days",
      hasTechData: true, // Changed to true
      techData: tileAdhesiveTechData, // Assigned new tech data
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_TileAdhesive,
      brochures: defaultBrochures,
    },
    {
      id: "water-treater",
      name: "Watertreater",
      category: "Dallas",
          productTagline: "Next-Gen DampProof Water Treater",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
      image: Aafee,
      icon: "🌊",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹850/10L", // Added placeholder
      savings: "₹150/10L", // Added placeholder
      discount: "Custom discounts available", // Added placeholder
      features: ["Water Modification System", "Enhanced Workability", "Improved Mix Quality"],
      benefits: [
        'Ideal for home interior walls. ',
  'Three times (3X) more waterproof, strong, and durable ',
  'Green Building, healthy living. ',
  'Heat-resistant, safe, lightweight, fire proof. ',
  'Fast-setting, smooth, Eco-friendly. Speed up Project. ',
  'No curing, No shrinkage, or Cracks. ',


        // "Improves bonding",
        // "Better material flow",
        // "System integration",
        // "Quality assurance",
        // "Extended working time",
        // "Reduced water consumption",
      ],
      packageContents: [
        "Water Treater Solution (10L or 20L)",
        "Measuring cup included",
        "Usage instructions",
      ],
      applicationSteps: [
        
        "Fill clean water into an empty container (Use 2% McG watertreater by adding 2 litre McG in 200 litre water.",
  "Add Aafee Gypsum Plaster 1.5 kg with 1 Ltr of Water in the ratio 3: 2 ",
  "Mix thoroughly to achieve a thick creamy paste ",
  "Surface should be dry, stable, level and clean ",
  "Apply the mixed paste to create a surface level ",
  "Initial Setting 7-9 min ",
  "Final Setting 20 - 25 min ",
  "For application on interior surfaces only",


        // "Dilute Watertreater with water as per specific product instructions.",
        // "Use the treated water for mixing with Dallas products (e.g., plaster, putty, grout).",
        // "Ensure consistent mixing ratios for optimal results.",
        // "Store unused Watertreater in a cool, dry place.",
        // "Follow safety guidelines during handling."
      ],
      specialFeatures: [ // Added placeholder
        "Optimizes hydration of cementitious materials",
        "Reduces efflorescence",
        "Enhances durability of finished surface",
        "Non-toxic and environmentally safe"
      ],
      warranty: "1 Year Quality Guarantee",
      deliveryTime: "Same day",
      hasTechData: true, // Changed to true
      techData: waterTreaterTechData, // Assigned new tech data
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_WaterTreater, // Used specific next-gen features
      brochures: defaultBrochures,

    // ... (previous product properties)

  comparisonTable: {
    headers: [
      "Material", // Add 'Material' to headers
      "Green Building",
      "Reducing Heat",
      "Direct Application",
      "Line & Smooth Level",
      "Finish",
      "Time Saving",
      "Quality Assurance",
      "Water Curing",
      "Shrinkage Cracks",
    ],
    rows: [
      {
        "Material": "Aafee Gypsum Plaster", // Direct mapping
        "Green Building": "Yes",
        "Reducing Heat": "Yes",
        "Direct Application": "Yes",
        "Line & Smooth Level": "Yes",
        "Finish": "Yes",
        "Time Saving": "Yes",
        "Quality Assurance": "Yes",
        "Water Curing": "Don't Require",
        "Shrinkage Cracks": "Don't Occur",
      },
      {
        "Material": "Sand Cement Plaster", // Direct mapping
        "Green Building": "No",
        "Reducing Heat": "No",
        "Direct Application": "Yes",
        "Line & Smooth Level": "-",
        "Finish": "-",
        "Time Saving": "-",
        "Quality Assurance": "-",
        "Water Curing": "Needed",
        "Shrinkage Cracks": "High Risk",
      },
    ],
  },
  
      },
  ];
  // Matrix Wallcare Product Configuration
  // Add this to your existing products data structure
    
  export const matrixProducts = [
    {
      id: "gypmatrix-gypsum",
      name: "GypMATRIX",
        detailsImage: matricxprod, 
      category: "Matrix",
      productTagline: "International Quality • 3X Stronger • 3X Waterproof",
      tagline: "International gypsum plaster ",
      image:matrixprodct, 
      icon: "🔬",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹580/bag",
      savings: "₹90 per bag",
      discount: "Bulk Order Benefits",
      features: ["3X Waterproof Protection", "International Quality", "Ready-to-Use Formula"],
      benefits: [
        "3X waterproof protection",
        "No curing required",
        "Paint-ready smooth finish",
        "Green building certified",
        "Fire-resistant properties",
        "Lightweight yet strong",
        "Fast-setting technology",
        "No shrinkage or cracks",
        "Heat-insulating",
        "Eco-friendly & non-toxic"
      ],
      specialFeatures: [
        "Advanced polymer chemistry formulation",
        "International grade damp-proof technology",
        "Scientific research-backed product",
        "Superior alternative to traditional plasters",
        "Modern construction solution",
        "Professional-grade performance"
      ],
      packageContents: [
        "GypMATRIX Gypsum Plaster (25 KG bag)",
        "Technical application guide",
        "Quality assurance certificate",
        "Product performance guarantee"
      ],
      applicationSteps: [
        "Ensure surface is clean, dry, and free from dust or loose particles",
        "Mix GypMATRIX with 65-70% clean water by weight to form a smooth paste",
        "Apply uniformly using a trowel to achieve 8-12mm thickness for walls",
        "Level and smooth the surface while the material is workable (25-30 minutes)",
        "Allow to set completely (15-20 minutes final setting time)",
        "Surface is ready for direct painting - no putty required"
      ],
      usageAreas: [
        "Home interiors: walls and ceilings",
        "Commercial and institutional projects",
        "Decorative surfaces requiring premium finish",
        "Modern damp-proof construction",
        "Green building projects"
      ],
      warranty: "Lifetime Damp-Proof Guarantee",
      deliveryTime: "2-3 days",
      hasTechData: true,
      techData: gypMatrixTechData,
      flexibleServiceOptions: flexibleServiceMatrixOptions,
      nextGenFeatures: nextGenFeatures_GypMatrix,
      brochures: defaultBrochures,
      matrixBanner: "MatrixBanner", // You'll need to add the actual banner image
      description: `
  GypMATRIX Gypsum Plaster represents the pinnacle of modern wall care technology. Developed by Matrix Wallcare Pvt Ltd, this international-grade, damp-proof gypsum plaster is engineered to be 3 times more effective than ordinary gypsum plaster.

  What sets GypMATRIX apart is its advanced polymer chemistry that delivers 3X waterproof protection while maintaining the ease of application that gypsum is known for. Unlike traditional sand-cement plaster, GypMATRIX requires no curing, sets quickly, and provides a smooth, paint-ready finish that eliminates the need for wall putty.

  This isn't just another construction material – it's a scientifically engineered solution that combines international quality standards with practical benefits. The advanced polymers reduce water absorption drastically, from the typical 18-20% of ordinary gypsum to just ≤6%, making it truly 3X more waterproof.

  GypMATRIX is Green Building certified, ensuring it's 100% eco-friendly and non-toxic – making it safe for your family while contributing to sustainable construction practices. Its fire-resistant and heat-insulating properties add an extra layer of safety and comfort to your home.

  With Matrix Wallcare's commitment to innovation-driven solutions and scientific research, GypMATRIX delivers on the promise of next-generation wall care that's stronger, more durable, and environmentally responsible. Choose GypMATRIX for construction that's built for the future.
  `,
      
      comparisonTable: {
        headers: [
          "Material",
          "Waterproof Rating",
          "Curing Required",
          "Setting Time",
          "Finish Quality",
          "Putty Requirement",
          "Fire Resistance",
          "Green Certified",
          "Strength Factor",
          "Durability"
        ],
        rows: [
          {
            "Material": "GypMATRIX Gypsum Plaster",
            "Waterproof Rating": "3X (≤6% absorption)",
            "Curing Required": "No",
            "Setting Time": "15-20 minutes",
            "Finish Quality": "Paint-Ready Smooth",
            "Putty Requirement": "Not Required",
            "Fire Resistance": ">2 hours at 750°C",
            "Green Certified": "Yes",
            "Strength Factor": "3X Stronger",
            "Durability": "Lifetime Protection"
          },
          {
            "Material": "Ordinary Gypsum Plaster",
            "Waterproof Rating": "Standard (18-20%)",
            "Curing Required": "No",
            "Setting Time": "20-30 minutes",
            "Finish Quality": "Good",
            "Putty Requirement": "Usually Required",
            "Fire Resistance": "Standard",
            "Green Certified": "Basic",
            "Strength Factor": "Standard",
            "Durability": "Good"
          },
          {
            "Material": "Sand Cement Plaster",
            "Waterproof Rating": "Basic",
            "Curing Required": "Yes (7-28 days)",
            "Setting Time": "24-48 hours",
            "Finish Quality": "Requires Putty",
            "Putty Requirement": "Always Required",
            "Fire Resistance": "Variable",
            "Green Certified": "No",
            "Strength Factor": "Traditional",
            "Durability": "Crack Risk"
          }
        ]
      }
    },{

            id: "gypmatrix-gypsum-plaster",
      name: "Gypsum Bond",
      detailsImage: matricxprod, 
      category: "Matrix",
      productTagline: "International Quality • 3X Stronger • 3X Waterproof",
      tagline: "International gypsum plaster ",
      image:matrixprodct, // You'll need to add the actual image import
      icon: "🔬",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹580/bag",
      savings: "₹90 per bag",
      discount: "Bulk Order Benefits",
      features: ["3X Waterproof Protection", "International Quality", "Ready-to-Use Formula"],
      benefits: [
        "3X waterproof protection",
        "No curing required",
        "Paint-ready smooth finish",
        "Green building certified",
        "Fire-resistant properties",
        "Lightweight yet strong",
        "Fast-setting technology",
        "No shrinkage or cracks",
        "Heat-insulating",
        "Eco-friendly & non-toxic"
      ],
      specialFeatures: [
        "Advanced polymer chemistry formulation",
        "International grade damp-proof technology",
        "Scientific research-backed product",
        "Superior alternative to traditional plasters",
        "Modern construction solution",
        "Professional-grade performance"
      ],
      packageContents: [
        "GypMATRIX Gypsum Plaster (25 KG bag)",
        "Technical application guide",
        "Quality assurance certificate",
        "Product performance guarantee"
      ],
      applicationSteps: [
        "Ensure surface is clean, dry, and free from dust or loose particles",
        "Mix GypMATRIX with 65-70% clean water by weight to form a smooth paste",
        "Apply uniformly using a trowel to achieve 8-12mm thickness for walls",
        "Level and smooth the surface while the material is workable (25-30 minutes)",
        "Allow to set completely (15-20 minutes final setting time)",
        "Surface is ready for direct painting - no putty required"
      ],
      usageAreas: [
        "Home interiors: walls and ceilings",
        "Commercial and institutional projects",
        "Decorative surfaces requiring premium finish",
        "Modern damp-proof construction",
        "Green building projects"
      ],
      warranty: "Lifetime Damp-Proof Guarantee",
      deliveryTime: "2-3 days",
      hasTechData: true,
      techData: gypMatrixTechData,
    flexibleServiceOptions: flexibleServiceMatrixOptions,
      nextGenFeatures: nextGenFeatures_GypMatrix,
      brochures: defaultBrochures,
      matrixBanner: "MatrixBanner", // You'll need to add the actual banner image
      description: `
  GypMATRIX Gypsum Plaster represents the pinnacle of modern wall care technology. Developed by Matrix Wallcare Pvt Ltd, this international-grade, damp-proof gypsum plaster is engineered to be 3 times more effective than ordinary gypsum plaster.

  What sets GypMATRIX apart is its advanced polymer chemistry that delivers 3X waterproof protection while maintaining the ease of application that gypsum is known for. Unlike traditional sand-cement plaster, GypMATRIX requires no curing, sets quickly, and provides a smooth, paint-ready finish that eliminates the need for wall putty.

  This isn't just another construction material – it's a scientifically engineered solution that combines international quality standards with practical benefits. The advanced polymers reduce water absorption drastically, from the typical 18-20% of ordinary gypsum to just ≤6%, making it truly 3X more waterproof.

  GypMATRIX is Green Building certified, ensuring it's 100% eco-friendly and non-toxic – making it safe for your family while contributing to sustainable construction practices. Its fire-resistant and heat-insulating properties add an extra layer of safety and comfort to your home.

  With Matrix Wallcare's commitment to innovation-driven solutions and scientific research, GypMATRIX delivers on the promise of next-generation wall care that's stronger, more durable, and environmentally responsible. Choose GypMATRIX for construction that's built for the future.
  `,
      
      comparisonTable: {
        headers: [
          "Material",
          "Waterproof Rating",
          "Curing Required",
          "Setting Time",
          "Finish Quality",
          "Putty Requirement",
          "Fire Resistance",
          "Green Certified",
          "Strength Factor",
          "Durability"
        ],
        rows: [
          {
            "Material": "GypMATRIX Gypsum Plaster",
            "Waterproof Rating": "3X (≤6% absorption)",
            "Curing Required": "No",
            "Setting Time": "15-20 minutes",
            "Finish Quality": "Paint-Ready Smooth",
            "Putty Requirement": "Not Required",
            "Fire Resistance": ">2 hours at 750°C",
            "Green Certified": "Yes",
            "Strength Factor": "3X Stronger",
            "Durability": "Lifetime Protection"
          },
          {
            "Material": "Ordinary Gypsum Plaster",
            "Waterproof Rating": "Standard (18-20%)",
            "Curing Required": "No",
            "Setting Time": "20-30 minutes",
            "Finish Quality": "Good",
            "Putty Requirement": "Usually Required",
            "Fire Resistance": "Standard",
            "Green Certified": "Basic",
            "Strength Factor": "Standard",
            "Durability": "Good"
          },
          {
            "Material": "Sand Cement Plaster",
            "Waterproof Rating": "Basic",
            "Curing Required": "Yes (7-28 days)",
            "Setting Time": "24-48 hours",
            "Finish Quality": "Requires Putty",
            "Putty Requirement": "Always Required",
            "Fire Resistance": "Variable",
            "Green Certified": "No",
            "Strength Factor": "Traditional",
            "Durability": "Crack Risk"
          }
        ]
      }
  
    }
  ];
  export const drProofProducts = [
    {
      id: "dr-proof-m1-bond",
      name: "Weather Proof",
      category: "Dr. Proof",
          productTagline: "Next-Gen DampProof M1 Bond",
      tagline: "India's 1st Next-Gen DampProof Dr. Proof",

      image: DallasDrM1Bond,
      icon: "💧",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹250/L", // Added placeholder
      savings: "₹50 per litre", // Added placeholder
      discount: "Bulk Order Benefits", // Added placeholder
      features: ["Liquid Membranes", "Protective Coatings", "Crack Bridging"],
      benefits: [
        "Seamless protection",
        "UV resistance",
        "Flexible application",
        "Professional grade",
        "Long-term durability",
        "Multiple surface compatibility",
      ],
      specialFeatures: [
        "Professional installation service available",
        "Customized solutions for unique requirements",
        "Technical consultation included",
        "Crack Bridging Technology",
        "Chemical Resistance",
        "UV Stable Formula",
      ],
      packageContents: [
        "Liquid Membrane System",
        "Professional application kit",
        "Technical consultation",
        "Installation guide",
      ],
      applicationSteps: [ 
        "Clean and prepare the surface, ensuring it's dry and free of contaminants.",
        "Apply the first coat of Dr. M1 Bond evenly with a brush or roller.",
        "Allow to dry as per instructions, then apply a second coat if required.",
        "Ensure proper ventilation during application.",
        "Conduct a water ponding test for final verification (if applicable)."
      ],
      warranty: "10 Year Guarantee",
      deliveryTime: "3-5 days",
      hasTechData: true, 
      techData: drM1BondTechData, 
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_PrimerWaterproofing, // Used specific next-gen features
      brochures: defaultBrochures,
    },
  ];

  export const ceramikhaProducts = [
    {
      id: "ceramikha-gypsum-plaster",
      name: "Gypsum Plaster",
      category: "Ceramikha",
      productTagline: "Next-Gen DampProof Ceramikha Gypsum Plaster",
      tagline: "Green Building, Safer Homes, Healthier Children",
      image: Ceramikha,
      icon: "🏺",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹550/bag",
      savings: "₹80 per bag",
      discount: "Custom Discounts",
      features: ["Ceramic Technology", "High Durability", "Smooth Finish"],
      benefits: [
        "Premium quality",
        "Low maintenance",
        "Aesthetic value",
        "Durability",
        "Weather resistance",
        "Cost effective",
      ],
      specialFeatures: [
        "Advanced ceramic formulation",
        "Superior aesthetic appeal",
        "Long-lasting performance",
        "Weather resistant coating",
      ],
      packageContents: [
        "Ceramic coating system",
        "Application kit",
        "Color guide",
        "Maintenance instructions",
      ],
      applicationSteps: [
        "Prepare surface by cleaning and leveling.",
        "Mix Ceramikha Gypsum Plaster with water to a consistent paste.",
        "Apply uniformly using appropriate tools.",
        "Ensure proper drying and finishing for optimal results.",
        "Follow product specific guidelines for best performance.",
      ],
      warranty: "5 Year Guarantee",
      deliveryTime: "3-5 days",
      hasTechData: true,
      techData: ceramikhaGypsumPlasterTechData,
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_Ceramic,
      brochures: defaultBrochures, 
      ceramikhaBanner:ceramikhaBanner,
          description: ` 
        
  Gypsum plaster is well-known for its practical benefits cost efficiency, no curing, and no need for cement, sand, or wall putty. But its most important advantage is often overlooked: It’s a core part of the Green Building concept. Its primary value lies in being 100% toxin-free and environmentally safe.


  This isn’t just an alternative to cement-sand plaster it’s a completely different class of material. Strength like rock or water resistance like plastic may sound impressive, but they don't qualify as Green Building certified. Only scientifically enhanced, eco-friendly materials like gypsum plaster can offer 100x more protection for your home especially when it comes to the health of your family. Everything else falls behind. If you truly love your family, ask yourself   are you protecting them from hidden toxins and unseen long-term harm? Health is our greatest wealth, and the well-being of our women and children is our real strength.


  Choose the Green Building concept for your home’s interiors   and give your loved ones the safety they deserve. Only international-standard Gypsum Plaster can truly offer this level of protection. That’s why we created CERAMIkha   a scientifically crafted product, developed by expert scientists with International standards. It’s far from ordinary. This is an imported, scientifically enhanced, high-performance plaster expertly engineered to ensure 100% safety for women and children.

  `,
      // -------------------------
    },
  ];
  export const mackadoProducts = [
    {
      id: "Mackado",
      name: "Mackado",
      category: "Ceramikha",
      productTagline: "Next-Gen DampProof Ceramikha Gypsum Plaster",
      tagline: "Green Building, Safer Homes, Healthier Children",
      image: Ceramikha,
      icon: "🏺",
      price: "For bulk order discount upto 40 %",
      originalPrice: "₹550/bag",
      savings: "₹80 per bag",
      discount: "Custom Discounts",
      features: ["Ceramic Technology", "High Durability", "Smooth Finish"],
      benefits: [
        "Premium quality",
        "Low maintenance",
        "Aesthetic value",
        "Durability",
        "Weather resistance",
        "Cost effective",
      ],
      specialFeatures: [
        "Advanced ceramic formulation",
        "Superior aesthetic appeal",
        "Long-lasting performance",
        "Weather resistant coating",
      ],
      packageContents: [
        "Ceramic coating system",
        "Application kit",
        "Color guide",
        "Maintenance instructions",
      ],
      applicationSteps: [
        "Prepare surface by cleaning and leveling.",
        "Mix Ceramikha Gypsum Plaster with water to a consistent paste.",
        "Apply uniformly using appropriate tools.",
        "Ensure proper drying and finishing for optimal results.",
        "Follow product specific guidelines for best performance.",
      ],
      warranty: "5 Year Guarantee",
      deliveryTime: "3-5 days",
      hasTechData: true,
      techData: ceramikhaGypsumPlasterTechData,
      flexibleServiceOptions: flexibleServiceOptions,
      nextGenFeatures: nextGenFeatures_Ceramic,
      brochures: defaultBrochures, 
      ceramikhaBanner:ceramikhaBanner,
          description: ` 
        
  Gypsum plaster is well-known for its practical benefits cost efficiency, no curing, and no need for cement, sand, or wall putty. But its most important advantage is often overlooked: It’s a core part of the Green Building concept. Its primary value lies in being 100% toxin-free and environmentally safe.


  This isn’t just an alternative to cement-sand plaster it’s a completely different class of material. Strength like rock or water resistance like plastic may sound impressive, but they don't qualify as Green Building certified. Only scientifically enhanced, eco-friendly materials like gypsum plaster can offer 100x more protection for your home especially when it comes to the health of your family. Everything else falls behind. If you truly love your family, ask yourself   are you protecting them from hidden toxins and unseen long-term harm? Health is our greatest wealth, and the well-being of our women and children is our real strength.


  Choose the Green Building concept for your home’s interiors   and give your loved ones the safety they deserve. Only international-standard Gypsum Plaster can truly offer this level of protection. That’s why we created CERAMIkha   a scientifically crafted product, developed by expert scientists with International standards. It’s far from ordinary. This is an imported, scientifically enhanced, high-performance plaster expertly engineered to ensure 100% safety for women and children.

  `,
      // -------------------------
    },
  ];

  export const allProducts = [
    ...dallasProducts,
    ...drProofProducts,
    ...matrixProducts,
    ...ceramikhaProducts,
  ];

  // Hero slider data for the main products page
  export const heroSlides = [
    {
      image: Banner, // Use the imported Banner variable
      title: "Lifetime Guaranteed Protection",
      subtitle: "Advanced Engineering Meets Quality",
    },
    {
      image: Banner, // Use the imported Banner variable
      title: "Factory Direct Pricing",
      subtitle: "Superior Performance, Unmatched Value",
    },
    {
      image: Banner, // Use the imported Banner variable
      title: "Trusted by 10,000+ Customers",
      subtitle: "Quality Construction Solutions Since 2015",
    },
  ];

  // Data for brand categories on the main products page
  export const brandCategories = [
    {
      id: "dallas",
      name: "Dallas",
      tagline: "Next-Gen Wallcare. Global Quality.",
      image: Banner,
      description: "India's leading waterproof construction materials",
    },
    {
      id: "Ceramikha",
      name: "Ceramikha",
      tagline: "Next-Gen Wallcare. Global Quality.",
      image: Ceramikha,
      description: "High-quality ceramic and finishing products",
    },
    {
      id: "drproof",
      name: "Dr. Proof",
      tagline: "Next-Gen Wallcare. Global Quality.",
      image: DallasDrM1Bond,
      description: "Professional waterproofing solutions",
    },
  ];