import { assetUrl } from '../src/utils/assetUrl';

export interface Publication {
  id: number;
  year: number;
  type: 'Journal' | 'Conference';
  category: string;
  title: string;
  authors: string;
  journal: string;
  details: string;
  viewLink?: string;
  pdfLink?: string;
}

export const publicationsData: Publication[] = [
  // 2026
  {
    id: 38,
    year: 2026,
    type: 'Journal',
    category: 'Hydrogen evolution',
    title:
      'Rational Design of Star-Shaped Donor−Acceptor Organic Small-Molecule/GCN Heterostructures for Superior Photocatalytic Hydrogen Evolution and Photoelectrocatalytic Water Splitting Applications',
    authors:
      'Sathiyan, Govindasamy, Gayathri Kumaresan, Geetha Venkatesan, Sebin Devasia, Pachagounder Sakthivel, Nisha Banerjee, Ranjith G. Nair, and Abinash Das',
    journal: 'ACS Applied Engineering Materials',
    details: '2026',
    viewLink: 'https://doi.org/10.1021/acsaenm.6c00868',
  },
  {
    id: 37,
    year: 2026,
    type: 'Journal',
    category: 'Hydrogen production',
    title:
      'Ultra-High Selectivity for Hydrogen Production from Formic Acid Over Pd–Ag Alloy Catalysts',
    authors:
      'Blessy S, Anupreethi A, S Devasia, Pavul Raj R, Selvakumar R, Jun Z, Johnravindar D',
    journal: 'Reaction Chemistry & Engineering',
    details: '2026',
    viewLink:
      'https://pubs.rsc.org/re/article-abstract/doi/10.1039/d6re00134c/1280407/Ultra-high-selectivity-for-hydrogen-production?redirectedFrom=fulltext',
    pdfLink: assetUrl('/pdfs/2026_RSC_RCE.pdf'),
  },
  // 2025
  {
    id: 36,
    year: 2025,
    type: 'Journal',
    category: 'Plasmonics',
    title:
      'Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications',
    authors:
      'Thazhathenair, A., Prakash, O., Devasia, S., Robert, G., Kalathingal, F. T., Singh, U. B., & Ghosh, S.',
    journal: 'ACS Applied Optical Materials',
    details: 'Vol. 3 (12), pp. 2971 to 2981',
    viewLink: 'https://pubs.acs.org/doi/abs/10.1021/acsaom.5c00517',
    pdfLink: assetUrl('/pdfs/2025_ACS%20ApplOptMat.pdf'),
  },
  {
    id: 1,
    year: 2025,
    type: 'Journal',
    category: 'Solar cells',
    title:
      'Optimization of Hole Transport Layers for Cu2FeSnS4 Solar Cells via SCAPS-1D Simulation: Investigating the Impact of Interface Defects on Practical Efficiency Limits',
    authors: 'MK Jyolsna Raj, Kallol Mohanta, S. Devasia, B Geetha Priyadarshini',
    journal: 'Journal of Physics and Chemistry of Solids',
    details: 'Vol. 208, 113193',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0022369725006468',
    pdfLink: assetUrl('/pdfs/2025_JPCS_scaps.pdf'),
  },
  {
    id: 2,
    year: 2025,
    type: 'Journal',
    category: 'Water splitting',
    title:
      'High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC) Water Splitting Performances and Efficient Photocatalytic Hydrogen Evolution: An Integrated Experimental and DFT Studies',
    authors: 'A Das, S. Devasia, Nisha Banerjee, RG Nair',
    journal: 'Applied Surface Science',
    details: 'Vol. 699, 163160',
    viewLink: 'https://www.sciencedirect.com/science/article/pii/S0169433225008748',
    pdfLink: assetUrl('/pdfs/2025_ApplSurfSci_znonrds.pdf'),
  },
  // 2024
  {
    id: 3,
    year: 2024,
    type: 'Journal',
    category: 'Photocatalysis',
    title:
      'An experimental and theoretical validation of dual role of Fe on improving the photocatalytic performance of doped mixed phase titania',
    authors: 'SK Nikhil, GR Nair, A Das, S. Devasia, RG Nair',
    journal: 'Advanced Powder Technology',
    details: 'Vol. 35 (11), 104683',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0921883124003595',
    pdfLink: assetUrl('/pdfs/2024_AdvPowTech.pdf'),
  },
  {
    id: 4,
    year: 2024,
    type: 'Journal',
    category: 'Thermoelectrics',
    title:
      'Enhancing thermoelectric properties of spinel ZnFe2O4 by Ni substitution through electron hopping mechanism',
    authors:
      'John N., Davis N., Roshan J.C., Hussain S., S. Devasia, Srinivasan B., Ashok A.M.',
    journal: 'Ceramics International',
    details: 'Vol. 50 (22), pp. 45251 to 45262',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0272884224038239',
    pdfLink: assetUrl('/pdfs/2024_Ceram.%20Inter.pdf'),
  },
  {
    id: 5,
    year: 2024,
    type: 'Journal',
    category: 'Sensors',
    title:
      'Characterisation of Sn-Cl co-doped β-Ga2O3 thin films deposited via spray pyrolysis and their application in UV detector devices',
    authors: 'R Raphael, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Sensors and Actuators A: Physical',
    details: 'Vol. 376, 115546',
    viewLink: 'https://www.sciencedirect.com/science/article/pii/S0924424724005405',
    pdfLink: assetUrl('/pdfs/2024_SenActu_Ga2O3.pdf'),
  },
  {
    id: 6,
    year: 2024,
    type: 'Journal',
    category: 'Photodetectors',
    title:
      'In situ grown Bi2S3 nanorods in Cs3Bi2I9 thin films as broadband self-driven photodetector with improved photostability',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan',
    journal: 'Optical Materials',
    details: 'Vol. 152, 115532',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0925346724007158',
    pdfLink: assetUrl('/pdfs/2024_OpticalMat.pdf'),
  },
  // 2023
  {
    id: 7,
    year: 2023,
    type: 'Journal',
    category: 'Photodetectors',
    title: 'Ultrasonically sprayed Cs3Bi2I9 thin film based self-powered photodetector',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan',
    journal: 'Materials Chemistry and Physics',
    details: 'Vol. 296, 127295',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0254058423000032',
  },
  // 2022
  {
    id: 8,
    year: 2022,
    type: 'Journal',
    category: 'Sensors',
    title:
      'Effect of substrate temperature on the properties of spray deposited Ga2O3 thin films, for solar blind UV detector applications',
    authors: 'R. Raphael, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Optical Materials',
    details: 'Vol. 133, 112915',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0925346722009491',
  },
  {
    id: 9,
    year: 2022,
    type: 'Conference',
    category: 'Nanomaterials',
    title:
      'Bismuth sulfide nanorods decorated cesium bismuth iodide composite thin films by ultrasonic spray pyrolysis',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XV International Conference on Surfaces, Materials and Vacuum',
    details: 'Puerto Vallarta, Mexico, September 2022 (Oral)',
  },
  {
    id: 10,
    year: 2022,
    type: 'Conference',
    category: 'Perovskites',
    title:
      'Perovskite-inspired Cs3Bi2I9 films via ultrasonic spray for self-powered photodetectors',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XXX International Materials Research Congress (IMRC)',
    details: 'Cancun, Mexico, August 2022 (Oral)',
  },
  // 2021
  {
    id: 11,
    year: 2021,
    type: 'Journal',
    category: 'Perovskites',
    title:
      'In situ crystallization of 0D perovskite derivative Cs3Bi2I9 thin films via ultrasonic spray',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A.A. Martinez, B. Krishnan',
    journal: 'Journal of Alloys and Compounds',
    details: 'Vol. 893, 162294',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S092583882103704X',
  },
  {
    id: 12,
    year: 2021,
    type: 'Journal',
    category: 'Photovoltaics',
    title:
      'Monoclinic AgSbS2 thin films for photovoltaic applications: Computation, growth and characterization approaches',
    authors:
      'A. Nadukkandy, S. Devasia, P. Abraham, S. Shaji, D.A. Avellaneda, J.A. Aguilar-Martínez et al.',
    journal: 'Materials Science in Semiconductor Processing',
    details: 'Vol. 135, 106074',
    viewLink: 'https://www.sciencedirect.com/science/article/pii/S1369800121004194',
  },
  {
    id: 13,
    year: 2021,
    type: 'Journal',
    category: 'Thin films',
    title:
      'Photosensitive antimony triiodide thin films by rapid iodization of chemically deposited antimony sulfide',
    authors:
      'A.A. Ramachandran, B. Krishnan, S. Devasia, D.A. Avellaneda, M.I. Mendivil Palma et al.',
    journal: 'Materials Research Bulletin',
    details: 'Vol. 142, 111382',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0025540821001793',
  },
  {
    id: 14,
    year: 2021,
    type: 'Journal',
    category: 'Photodetectors',
    title:
      'Metal–semiconductor–metal visible photodetector based on Al-doped (Cd:Zn)S nano thin films by hydrothermal synthesis',
    authors: 'J. Mathew, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Optik',
    details: 'Vol. 241, 166878',
    viewLink: 'https://www.sciencedirect.com/science/article/pii/S0030402621005805',
  },
  {
    id: 15,
    year: 2021,
    type: 'Conference',
    category: 'Thin films',
    title:
      'Effect of source-substrate distance on the transparent electrode properties of spray pyrolysed aluminium doped zinc oxide thin films',
    authors: 'S. Devasia, P.V. Athma, Rakhy Raphael, E.I. Anila',
    journal: 'Materials Today: Proceedings',
    details: 'ISSN 2214 7853',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785321067109',
  },
  {
    id: 16,
    year: 2021,
    type: 'Conference',
    category: 'Perovskites',
    title:
      'Ultrasonically spray deposited cesium bismuth iodide thin films: Structure, morphology and photophysical properties',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XXIX International Materials Research Congress (IMRC)',
    details: 'Cancun, Mexico, August 2021 (Oral)',
    viewLink: 'https://www.sciencedirect.com/science/article/pii/S0030402621005805',
  },
  {
    id: 17,
    year: 2021,
    type: 'Conference',
    category: 'Optoelectronics',
    title:
      'Ultrasonic Spray deposited BiI3 thin films for Optoelectronic applications, Progress and promises in chemical sciences',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'PPCS 2021',
    details: 'Christ University, Bengaluru, India, March 2021 (Oral)',
  },
  // 2020
  {
    id: 18,
    year: 2020,
    type: 'Journal',
    category: 'Optoelectronics',
    title:
      'Tin antimony sulfide (Sn6Sb10S21) thin films by heating chemically deposited Sb2S3/SnS layers: Studies on the structure and their optoelectronic properties',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A.A. Martinez, B. Krishnan',
    journal: 'Journal of Alloys and Compounds',
    details: 'Vol. 827, 154256',
    viewLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0925838820306198',
    pdfLink: assetUrl('/pdfs/2020_jallcom.pdf'),
  },
  {
    id: 19,
    year: 2020,
    type: 'Conference',
    category: 'Simulation',
    title: 'Ab initio simulations to ultrasonically sprayed thin films of bismuth triiodide',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: '12th International Conference on Hybrid and Organic Photovoltaics (HOPV20)',
    details: 'Online, May 2020 (Poster)',
  },
  {
    id: 20,
    year: 2020,
    type: 'Conference',
    category: 'Simulation',
    title: 'Bismuth triiodide: Ab initio simulations to spray-cast thin films',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'RSC Digital Conference',
    details: 'March 2020 (Poster)',
  },
  // 2019
  {
    id: 21,
    year: 2019,
    type: 'Journal',
    category: 'Optoelectronics',
    title:
      'Spectral and nonlinear optical characterization of blue light emitting gahnite nanorods synthesized through radiation assisted sol-gel method',
    authors: 'P. J. Joffy, V. G. Sreeja, S. Devasia, E. I. Anila',
    journal: 'Solid State Sciences',
    details: 'Vol. 96, 105947',
  },
  {
    id: 22,
    year: 2019,
    type: 'Journal',
    category: 'Semiconductors',
    title:
      'Controlling the zinc oxide unipolarity through dual acceptor doping for spray-cast homojunction diode',
    authors: 'S. Devasia, P. V. Athma, E. I. Anila',
    journal: 'Materials Letters',
    details: 'Vol. 238, pp. 112 to 115',
    viewLink: 'https://doi.org/10.1016/j.matlet.2018.11.168',
  },
  {
    id: 23,
    year: 2019,
    type: 'Conference',
    category: 'Materials',
    title: 'A Study on the Emergence of P-Type Behaviour in Sr-Cu-O Mixed Phase Systems',
    authors: 'A. Mariya Thomas, S. Salam, M. C. Santhoshkumar, S. Devasia, E. I. Anila',
    journal: 'Journal of Physics: Conference Series',
    details: 'Vol. 1172, 012008',
    viewLink: 'https://doi.org/10.1088/1742-6596/1172/1/012008',
  },
  {
    id: 24,
    year: 2019,
    type: 'Conference',
    category: 'Optoelectronics',
    title:
      'Bismuth triiodide: Ab-initio simulations to spray cast thin films for optoelectronic applications',
    authors:
      'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan',
    journal: 'Scientia',
    details: 'Vol. 15, pp. 98 to 111',
  },
  // 2018
  {
    id: 25,
    year: 2018,
    type: 'Journal',
    category: 'Thin films',
    title:
      'Post-deposition thermal treatment of sprayed ZnO:Al thin films for enhancing the conductivity',
    authors: 'S. Devasia, P. V. Athma, M. Shaji, M. C. S. Kumar, E. I. Anila',
    journal: 'Physica B: Condensed Matter',
    details: 'Vol. 533, pp. 83 to 89',
    viewLink: 'https://doi.org/10.1016/j.physb.2017.12.062',
    pdfLink: assetUrl('/pdfs/2018_physb.pdf'),
  },
  {
    id: 26,
    year: 2018,
    type: 'Conference',
    category: 'Materials',
    title:
      'Tuning the surface morphology of aluminium doped zinc oxide thin films by arrayed nanorods through chemical growth process',
    authors: 'S. Devasia, E. I. Anila',
    journal: 'AIP Conference Proceedings',
    details: 'Vol. 1942, 080018',
    viewLink: 'https://doi.org/10.1063/1.5028852',
  },
  {
    id: 27,
    year: 2018,
    type: 'Conference',
    category: 'Materials',
    title:
      'Synthesis and characterization of photoconducting (Cd:Zn)S thin films by hydrothermal assisted chemical bath deposition',
    authors: 'J. Mathew, S. Devasia, E. I. Anila',
    journal: 'AIP Conference Proceedings',
    details: 'Vol. 1942, 080080',
    viewLink: 'https://doi.org/10.1063/1.5028914',
  },
  // 2017
  {
    id: 28,
    year: 2017,
    type: 'Conference',
    category: 'Materials',
    title:
      'Tuning the surface morphology of aluminium doped zinc oxide thin films by arrayed nanorods through chemical growth process',
    authors: 'Sebin Devasia, E I Anila',
    journal: 'DAE Solid State Physics Symposium',
    details: 'BARC, Mumbai, December 2017 (Poster)',
  },
  {
    id: 29,
    year: 2017,
    type: 'Conference',
    category: 'Materials',
    title:
      'Highly conductive and transparent ZnO:Al thin film by spray pyrolysis for transparent electronics',
    authors: 'Sebin Devasia, P V Athma, Dr. E.I. Anila',
    journal: 'AMPC 2017',
    details: 'NIT Tiruchirappalli, February 2017 (Poster)',
  },
  // 2016
  {
    id: 30,
    year: 2016,
    type: 'Conference',
    category: 'Materials',
    title:
      'Investigation on the Structural, Electrical and Transmitting properties of Aluminium doped ZnO thin films',
    authors: 'S. Devasia, P V Athma, Anumol Jose, E I Anila',
    journal: 'IOP Conference Series: Materials Science and Engineering',
    details: 'Vol. 149, 012077',
    viewLink: 'https://doi.org/10.1088/1757-899X/149/1/012077',
  },
  {
    id: 31,
    year: 2016,
    type: 'Conference',
    category: 'Optics',
    title:
      'Nonlinear optical characterization of graphite oxide thin film by open aperture Z-scan technique',
    authors: 'V G Sreeja, Ajina Cheruvalathu, S. Devasia, E I Anila',
    journal: 'AIP Conference Proceedings',
    details: 'Vol. 1731, 080023',
    viewLink: 'https://doi.org/10.1063/1.4947901',
  },
  {
    id: 32,
    year: 2016,
    type: 'Conference',
    category: 'Materials',
    title:
      'An investigation on the structural, electrical and transparent properties of aluminium doped ZnO thin films',
    authors: 'S. Devasia, P.V. Athma, E.I. Anila',
    journal: 'IConAMMA 2016',
    details: 'Amrita School of Engineering, July 2016 (Oral)',
  },
  {
    id: 33,
    year: 2016,
    type: 'Conference',
    category: 'Nanophotonics',
    title: 'National Workshop on Nanophotonics',
    authors: 'S. Devasia',
    journal: 'CUSAT Cochin and SPIE CUSAT Student Chapter',
    details: 'March 2016 (Poster)',
  },
  // 2015
  {
    id: 34,
    year: 2015,
    type: 'Journal',
    category: 'Semiconductors',
    title:
      'Investigation on P-N dual acceptor doped p-type ZnO thin films and subsequent growth of pencil-like nanowires',
    authors: 'R. Amiruddin, S. Devasia, K. Mohammedali, M. C. Santhosh Kumar',
    journal: 'Semiconductor Science and Technology',
    details: 'Vol. 30, 035009',
    viewLink: 'https://doi.org/10.1088/0268-1242/30/3/035009',
    pdfLink: assetUrl('/pdfs/2015_SST.pdf'),
  },
  // 2014
  {
    id: 35,
    year: 2014,
    type: 'Conference',
    category: 'Nanophotonics',
    title: 'Low resistive P,N dual acceptor doped p-type ZnO thin films',
    authors: 'S. Devasia',
    journal: 'National Conference on Nanophotonics (NCNP 2014)',
    details: 'Bharathidasan University, March 2014 (Oral)',
  },
];
