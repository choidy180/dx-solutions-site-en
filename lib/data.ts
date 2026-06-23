export const nav = [
  ["company", "Company"],
  ["mode", "M.O.D.E."],
  ["avis", "A.V.I.S."],
  ["references", "References"],
  ["contact", "Contact"],
] as const;

export const timeline = [
  { year: "2021", title: "Rule-based AI & Automation", copy: "Built a practical base in rule-based AI and RPA, and joined KERI as a research institute company.", tags: ["Gomotec", "Korea Polytechnics"] },
  { year: "2022", title: "Machine & Deep Learning", copy: "Expanded into predictive maintenance, anomaly detection, and AI quality inspection.", tags: ["Shinsung Delta Tech", "MSS · MSIT"] },
  { year: "2023", title: "Generative AI", copy: "Connected process optimization and office intelligence with generative AI workflows.", tags: ["LG Electronics", "MOTIR"] },
  { year: "2024", title: "Physical AI", copy: "Applied PINN and edge intelligence to real manufacturing processes and equipment.", tags: ["Doosan Enerbility", "MSIT"] },
  { year: "2025", title: "AI Agents", copy: "Moved from isolated models to agents that understand equipment, process, vision, and enterprise context.", tags: ["LG EXAONE", "Manufacturing partners"] },
  { year: "2026", title: "Manufacturing AI at Scale", copy: "Extending agent-led decisions into robotics, wearables, and multi-site operations.", tags: ["Physical AI", "Robotics automation"] },
];

export const achievements = [
  { year: "2026", title: "Selected as a Physical AI PoC Best Practice", image: "/media/achievements/manufacturing-program.webp" },
  { year: "2026", title: "Received the Changwon Mayor’s Commendation", image: "/media/achievements/commendation.webp" },
  { year: "2026", title: "Won the K-Digital Innovation Grand Prize", image: "/media/achievements/future-award.webp" },
  { year: "2025", title: "Appointed to Gyeongnam’s inaugural AI Committee", image: "/media/achievements/committee.webp" },
  { year: "2024", title: "Selected as a Doosan Enerbility Best Practice", image: "/media/achievements/vision-command.webp" },
  { year: "2024", title: "Recognized as a Hyper-scale Manufacturing AI Best Practice", image: "/media/achievements/partnership.webp" },
];

export const poc = Array.from({ length: 6 }, (_, i) => ({
  image: `/media/poc/poc-${i + 1}.webp`,
  title: ["Digital twin control", "Field recognition", "Material monitoring", "Safety intelligence", "Integrated operations", "Event traceability"][i],
}));

export const modeCases = [
  {
    id: "materials", label: "Materials AI", kicker: "Material flow intelligence", title: "Track every cart from warehouse to process.",
    copy: "Vision and operational data create a live view of material movement, inventory handoffs, and process readiness without adding manual reporting work.",
    points: ["Warehouse-to-line traceability", "Real-time cart status", "Faster exception response"],
    image: "/media/platform/materials.webp", video: "/media/videos/mode-materials.mp4",
  },
  {
    id: "production", label: "Production AI", kicker: "Plan-to-actual control", title: "Find bottlenecks before they become delays.",
    copy: "Production plans, actual output, and process events are aggregated automatically so teams can identify bottlenecks and investigate root causes from one interface.",
    points: ["Automated plan-vs-actual aggregation", "Bottleneck detection", "Root-cause exploration"],
    image: "/media/platform/production.webp", video: "/media/videos/mode-production.mp4",
  },
  {
    id: "equipment", label: "Equipment AI", kicker: "Predictive maintenance", title: "Turn equipment signals into early action.",
    copy: "Sensor, inspection, and process data are combined to detect anomalies, support predictive maintenance, and preserve a complete equipment history.",
    points: ["Anomaly detection", "Predictive maintenance", "Inspection history management"],
    image: "/media/platform/equipment.webp", video: "/media/videos/mode-equipment.mp4",
  },
  {
    id: "shipping", label: "Shipping AI", kicker: "Lead-time visibility", title: "Track shipment progress without dedicated GPS hardware.",
    copy: "A driver’s mobile device and vision-based event capture provide shipment, arrival, and delay visibility while standardizing response workflows.",
    points: ["Mobile location tracking", "Arrival and delay events", "Standardized logistics response"],
    image: "/media/platform/shipping.webp", video: "/media/videos/mode-shipping.mp4",
  },
];

export const screens = [
  ["planning-board", "Production planning"], ["planning-calendar", "Calendar view"], ["production-dashboard", "KPI dashboard"],
  ["vision-inspection", "Vision inspection"], ["inspection-history", "Inspection history"], ["digital-twin", "Digital twin"],
] as const;

export const avisModes = [
  {
    id: "inspection", label: "Routine Equipment Inspection", title: "Start, record, and report inspections by voice.",
    copy: "Workers scan the equipment QR code, begin an inspection with a voice command, and convert field actions into structured records through real-time speech recognition.",
    points: ["QR and voice-based inspection start", "Digitized on-site records", "Automatic final report generation"],
    image: "/media/avis/routine-inspection.webp", video: "/media/videos/avis-inspection.mp4",
  },
  {
    id: "indicators", label: "Integrated Indicator Analysis", title: "Ask production questions in everyday language.",
    copy: "A.V.I.S. retrieves integrated production KPIs, explores the causes behind process changes, and prepares reports without navigating a complex dashboard.",
    points: ["Natural-language dashboard access", "Interactive KPI exploration", "Automated report generation"],
    image: "/media/avis/indicator-analysis.webp", video: "/media/videos/avis-indicators.mp4",
  },
];

export const workflow = [
  { step: "01", title: "Field Recognition", copy: "The worker scans a product or equipment QR code with a wearable device.", image: "/media/avis/field-recognition.webp" },
  { step: "02", title: "AI Vision Analysis", copy: "The camera feed identifies the defect location and type.", image: "/media/avis/vision-analysis.webp" },
  { step: "03", title: "SLM Action Guide", copy: "The agent explains likely causes and guides standard corrective actions.", image: "/media/avis/action-guide.webp" },
  { step: "04", title: "Result & History", copy: "Photos, video, and action details are stored for future traceability.", image: "/media/avis/history-management.webp" },
] as const;

export const wearable = [
  { title: "AI Defect Traceback", copy: "Voice-query root-cause analysis, corrective action guidance, and automated report generation.", poster: "/media/avis/wearable-demo.webp", video: "/media/videos/avis-defect-traceback.mp4" },
  { title: "AI Idle Time Management", copy: "Recognizes idle-time events to support line balancing and faster operational response.", poster: "/media/avis/wearable-demo.webp", video: "/media/videos/avis-idle-time.mp4" },
  { title: "AI Time Check", copy: "Captures task timing through a wearable workflow and connects observations to process analysis.", poster: "/media/avis/time-check-demo.webp", video: "/media/videos/avis-time-check.mp4" },
];

export const cycle = [
  ["Input", 8.8], ["Fasten 1", 11.2], ["Fasten 2", 12.3], ["Auto 1", 15.9],
  ["Assembly 1", 14.3], ["Assembly 2", 22.2], ["Auto 2", 13.3], ["Assembly 3", 17.8],
] as const;

export const refs = [
  [1,2022,"Predictive Maintenance","Process anomaly detection"],
  [2,2023,"AI Quality Inspection","Multi-variant parts modularization / integrated AI inspection"],
  [3,2023,"Predictive Maintenance","Equipment anomaly detection / tool breakage prediction"],
  [4,2023,"Process Optimization","Defect prediction & condition optimization for laminating equipment"],
  [5,2023,"Process Optimization","Defect prediction & condition optimization for aluminum alloy casting"],
  [6,2023,"Process Optimization","Full-line defect prediction and root-cause analysis"],
  [7,2023,"AI Vision Inspection","Electrode defect prediction / welding condition optimization"],
  [8,2023,"Process Optimization","ICT process defect root-cause / pass-rate analysis"],
  [9,2023,"Process Optimization","Injection equipment process optimization / safety incident prediction"],
  [10,2024,"Process Optimization","Eco-friendly injection equipment / ESG operations optimization"],
  [11,2024,"Defect Traceback","Production-line defect root-cause analysis & remediation guidance"],
  [12,2024,"Process Optimization","Automated welding defect inspection system"],
  [13,2024,"Process Optimization","Generative AI-based intelligent Supply Chain Control Tower (AI-SCCT)"],
  [14,2024,"Process Optimization","Generative AI-based optimal production planning"],
  [15,2024,"Process Optimization","ICT inspection / process optimization"],
  [16,2024,"Office Intelligence","Generative AI-based toxic-clause detection in ITB proposals"],
  [17,2024,"Office Intelligence","Generative AI-based work intelligence service ‘BusinessAI’"],
  [18,2024,"Process Optimization","Per-process optimization models for three client companies"],
  [19,2025,"Process Optimization","sLM-equipped edge device / production logistics predictive response system"],
  [20,2025,"AI Robotics Automation","Meister robot for AC component braze welding"],
  [21,2025,"Office Intelligence","Generative AI patient intake automation / personalized prevention and benefits system"],
  [22,2025,"Process Optimization","Per-process optimization models for three client companies"],
  [23,2025,"Physical AI","PINN model PoC for plastic injection molding"],
  [24,2025,"Predictive Maintenance","Agent-based equipment anomaly detection & predictive maintenance"],
  [25,2025,"Predictive Maintenance","Agent-based FDC and equipment history management"],
  [26,2025,"Predictive Maintenance","Agent-based AI vision inspection & automation system"],
  [27,2025,"Predictive Maintenance","Agent-based injection quality history management & automation"],
  [28,2026,"AI Robotics Automation","Laser marking and loading/unloading robot system for gear-cutting automation"],
] as const;

export const contact = {
  email: "dx_sales@dx-solutions.co.kr",
  phone: "+82 55 601 9300",
  tel: "+82556019300",
  website: "https://www.dx-solutions.co.kr/",
  hq: "Room 102, 19 Bulmosan-ro 24beon-gil, Seongsan-gu, Changwon-si, Gyeongsangnam-do, Republic of Korea",
  branch: "Rooms 809 & 1014, Tech Building, SK Technopark, 50 Wanam-ro, Seongsan-gu, Changwon-si, Gyeongsangnam-do, Republic of Korea",
};
