import { assetUrl } from '../src/utils/assetUrl';

export type NewsCategory = 'Conference' | 'Publication' | 'Grant' | 'Award';

export interface NewsItem {
  id: string;
  category: NewsCategory;
  date: string;
  isoDate: string;
  title: string;
  description: string;
  details?: string;
  featuredImage?: string;
  location?: string;
  linkText?: string;
  linkUrl?: string;
  internalLink?: string;
  pdfUrl?: string;
  citation?: string;
}

export interface CalendarEvent {
  date: number;
  month: number;
  year: number;
  title: string;
  time: string;
  category: string;
}

export interface D3MatEdition {
  id: string;
  edition: string;
  year: string;
  date: string;
  location: string;
  title: string;
  description: string;
  curriculum: string[];
  tools: string[];
  image: string;
  websiteUrl: string;
  brochureUrl?: string;
  certificatesUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    id: '10',
    category: 'Conference',
    date: 'September 25, 2026',
    isoDate: '2026-09-25',
    title: 'D³Mat 2026: 1st Workshop on Computational Materials Modelling and Atomistic Simulations',
    description:
      'The LASER Group hosted the inaugural Digital Discovery and Design of Materials (D³Mat) workshop at PSG Institute of Advanced Studies, featuring invited lectures and practical sessions in density functional theory using Quantum ESPRESSO.',
    location: 'PSG Institute of Advanced Studies, Coimbatore',
    featuredImage: 'https://d3mat-ws.github.io/media/gallery/group-01.jpg',
    linkText: 'Open workshop portal',
    linkUrl: 'https://d3mat-ws.github.io/',
    internalLink: '/d3mat',
    pdfUrl: 'https://d3mat-ws.github.io/documents/D3Mat-Brochures.pdf',
  },
  {
    id: '9',
    category: 'Publication',
    date: 'August 20, 2026',
    isoDate: '2026-08-20',
    title:
      'Published in ACS Applied Engineering Materials: Star shaped donor acceptor organic molecule and gCN heterostructures',
    description:
      'Collaborative study employing DFT electronic structure calculations to resolve interfacial charge transfer across gCN and TRZ heterostructures for solar hydrogen evolution.',
    linkText: 'Read paper at ACS',
    linkUrl: 'https://doi.org/10.1021/acsaenm.6c00868',
    citation:
      'Sathiyan, G., Kumaresan, G., Venkatesan, G., Devasia, S., Sakthivel, P., Banerjee, N., Nair, R. G., & Das, A. (2026). Rational Design of Star-Shaped Donor−Acceptor Organic Small-Molecule/GCN Heterostructures. ACS Applied Engineering Materials.',
  },
  {
    id: '8',
    category: 'Publication',
    date: 'July 06, 2026',
    isoDate: '2026-07-06',
    title:
      'Published in RSC Reaction Chemistry and Engineering: Selective hydrogen production over Pd Ag alloy catalysts',
    description:
      'First principles catalytic surface modelling explaining selective formic acid dehydrogenation over palladium silver nanoparticle alloys.',
    linkText: 'Read paper at RSC',
    linkUrl:
      'https://pubs.rsc.org/re/article-abstract/doi/10.1039/d6re00134c/1280407/Ultra-high-selectivity-for-hydrogen-production?redirectedFrom=fulltext',
    pdfUrl: assetUrl('/pdfs/2026_RSC_RCE.pdf'),
    citation:
      'Blessy, S., Anupreethi, A., Devasia, S., Pavul Raj, R., Selvakumar, R., Jun, Z., & Johnravindar, D. (2026). Ultra-High Selectivity for Hydrogen Production from Formic Acid Over Pd–Ag Alloy Catalysts. Reaction Chemistry & Engineering.',
  },
  {
    id: '7',
    category: 'Conference',
    date: 'June 25, 2026',
    isoDate: '2026-06-25',
    title:
      'Invited lecture on machine learning interatomic potentials: Closing the gap between scale and accuracy',
    description:
      'Delivered at the Six Day Faculty Development Program on Material Science in the Era of AI and Recent Trends.',
    location: 'SIMAT, Palakkad, Kerala',
    details:
      'Technical lecture introducing faculty and doctoral researchers to machine learning interatomic potentials (MLIPs), graph neural network descriptors for crystal structures, and bridging DFT precision to large supercell dynamics.',
    linkText: 'Read session notes',
  },
  {
    id: '6',
    category: 'Conference',
    date: 'February 03, 2026',
    isoDate: '2026-02-03',
    title:
      'Invited talk on atomic potentials and autonomous discovery in energy materials',
    description:
      'Presented at the International Conference on Advanced Materials for Innovation and Sustainability (ICAMIS 2026).',
    location: 'MES Asmabi College, Thrissur, Kerala',
    details:
      'Keynote session examining automated DFT screening pipelines, active learning loops, and computational identification of lead free optoelectronic compounds.',
    linkText: 'Read session notes',
  },
  {
    id: '1',
    category: 'Publication',
    date: 'December 01, 2025',
    isoDate: '2025-12-01',
    title:
      'Published in ACS Applied Optical Materials: Surface roughened silver wires with uniform plasmonic hotspots',
    description:
      'Collaborative experimental and DFT investigation of silver nanowire plasmonic field enhancement for sensitive SERS detection.',
    linkText: 'Read paper at ACS',
    linkUrl: 'https://pubs.acs.org/doi/abs/10.1021/acsaom.5c00517',
    pdfUrl: assetUrl('/pdfs/2025_ACS%20ApplOptMat.pdf'),
    citation:
      'Thazhathenair, A., Prakash, O., Devasia, S., Robert, G., Kalathingal, F. T., Singh, U. B., & Ghosh, S. (2025). Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications. ACS Applied Optical Materials, 3(12), 2971-2981.',
  },
  {
    id: '2',
    category: 'Conference',
    date: 'November 27, 2025',
    isoDate: '2025-11-27',
    title: 'ICSTEE 2025 International Conference at PSG Institute of Advanced Studies',
    description:
      'PSG Institute of Advanced Studies organized the three day International Conference on Sustainable Technologies for Energy and Environment.',
    location: 'PSG IAS, Coimbatore',
    details:
      'International symposium bringing together materials researchers across sustainable photovoltaics, electrochemical energy storage, and computational condensed matter physics.',
    linkText: 'Read session notes',
  },
  {
    id: '3',
    category: 'Publication',
    date: 'September 08, 2025',
    isoDate: '2025-09-08',
    title:
      'Published in Journal of Physics and Chemistry of Solids: Hole transport layers for Cu2FeSnS4 solar cells',
    description:
      'Device simulation study examining how heterojunction interface defect states govern practical efficiency limits in earth abundant Cu2FeSnS4 absorbers.',
    linkText: 'Read on ScienceDirect',
    linkUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0022369725006468',
    pdfUrl: assetUrl('/pdfs/2025_JPCS_scaps.pdf'),
    citation:
      'Raj, M. K. J., Mohanta, K., Devasia, S., & Priyadarshini, B. G. (2025). Optimization of hole transport layers for Cu2FeSnS4 solar cells via SCAPS-1D simulation. Journal of Physics and Chemistry of Solids, 208, 113193.',
  },
  {
    id: '4',
    category: 'Publication',
    date: 'April 10, 2025',
    isoDate: '2025-04-10',
    title:
      'Published in Applied Surface Science: High aspect ratio ZnO nanorods for PEC water splitting',
    description:
      'Integrated experimental and first principles study connecting ZnO nanorod facet energetics to improved photoelectrochemical hydrogen evolution.',
    linkText: 'Read on ScienceDirect',
    linkUrl: 'https://www.sciencedirect.com/science/article/pii/S0169433225008748',
    pdfUrl: assetUrl('/pdfs/2025_ApplSurfSci_znonrds.pdf'),
    citation:
      'Das, A., Devasia, S., Banerjee, N., & Nair, R. G. (2025). High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC) Water Splitting Performances. Applied Surface Science, 699, 163160.',
  },
  {
    id: '5',
    category: 'Grant',
    date: 'March 04, 2024',
    isoDate: '2024-03-04',
    title: 'Research grant awarded under UGC DAE CSR Collaborative Research Scheme',
    description:
      'Competitive national research funding awarded by the UGC DAE Consortium for Scientific Research, India.',
    location: 'UGC DAE CSR, India',
    details:
      'Multi year collaborative grant supporting synchrotron characterization and quantum mechanical simulations of functional semiconductor materials.',
  },
];

export const labEvents: CalendarEvent[] = [
  { date: 25, month: 9, year: 2026, title: 'D³Mat 2026 Workshop at PSG IAS', time: '09:00 IST · Hybrid', category: 'Workshop' },
  { date: 20, month: 8, year: 2026, title: 'ACS Applied Engineering Materials paper', time: 'Journal release', category: 'Publication' },
  { date: 6, month: 7, year: 2026, title: 'RSC Reaction Chemistry & Engineering paper', time: 'Journal release', category: 'Publication' },
  { date: 25, month: 6, year: 2026, title: 'Invited lecture at SIMAT Kerala', time: '09:30 IST · Palakkad', category: 'Talk' },
  { date: 3, month: 2, year: 2026, title: 'Keynote at ICAMIS 2026', time: '10:00 IST · Thrissur', category: 'Conference' },
  { date: 1, month: 12, year: 2025, title: 'ACS Applied Optical Materials paper', time: 'Journal release', category: 'Publication' },
  { date: 27, month: 11, year: 2025, title: 'ICSTEE 2025 opening session', time: '09:00 IST · PSG IAS', category: 'Conference' },
  { date: 8, month: 9, year: 2025, title: 'JPCS solar cell paper published', time: 'Journal release', category: 'Publication' },
  { date: 10, month: 4, year: 2025, title: 'Applied Surface Science paper published', time: 'Journal release', category: 'Publication' },
];

export const d3matEditions: D3MatEdition[] = [
  {
    id: 'd3mat-2026',
    edition: '1st Edition',
    year: '2026',
    date: 'September 25, 2026',
    location: 'PSG Institute of Advanced Studies, Coimbatore (Hybrid)',
    title: 'D³Mat 2026: Workshop on Computational Materials Modelling and Atomistic Simulations',
    description:
      'An intensive full day training program introducing undergraduate, postgraduate, and doctoral researchers to Kohn Sham density functional theory, periodic crystal construction, and practical electronic structure calculations.',
    curriculum: [
      'Foundations of Kohn Sham density functional theory, exchange correlation functionals, and plane wave basis sets',
      'Building unit cells, surfaces, and low dimensional supercells from crystallographic information files',
      'Running self consistent field, structural relaxation, electronic band structure, and density of states workflows',
      'Visualizing charge density isosurfaces and interpreting calculated results alongside experimental spectra',
    ],
    tools: ['Quantum ESPRESSO', 'BURAI', 'VESTA', 'XCrySDen'],
    image: 'https://d3mat-ws.github.io/media/gallery/group-01.jpg',
    websiteUrl: 'https://d3mat-ws.github.io/',
    brochureUrl: 'https://d3mat-ws.github.io/documents/D3Mat-Brochures.pdf',
    certificatesUrl: 'https://d3mat-ws.github.io/certificates.html',
  },
];
