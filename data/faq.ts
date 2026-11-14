export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'affiliation',
    question: 'How is the LASER Group connected across PSGIAS and PSGiTech?',
    answer:
      'Dr. Sebin Devasia coordinates research and teaching across PSG Institute of Advanced Studies (Peelamedu campus, housing the Nano Lab) and PSG Institute of Technology and Applied Research (Neelambur campus) in Coimbatore. Scholars and collaborators benefit from both computational modeling clusters and thin film fabrication facilities.',
  },
  {
    id: 'internships',
    question: 'Who can apply for Masters dissertations or summer internships?',
    answer:
      'Motivated undergraduate and postgraduate students in Physics, Materials Science, Chemistry, or Chemical Engineering can apply for semester dissertation projects or research internships in DFT calculations, machine learning potentials, or thin film synthesis.',
  },
  {
    id: 'phd',
    question: 'Are PhD positions open in the laboratory?',
    answer:
      'We welcome inquiries from candidates holding a Masters degree in Physics, Materials Science, or allied areas, particularly candidates with national fellowships or strong interest in electronic structure theory, MLIPs, and optoelectronic devices.',
  },
  {
    id: 'software',
    question: 'Which simulation packages and methods are used daily?',
    answer:
      'Our computational pipeline centers on Quantum ESPRESSO for plane wave DFT calculations, neural network interatomic potentials for disordered supercells, SCAPS 1D for solar cell heterojunctions, and VESTA, XCrySDen, BURAI, and Python scientific libraries.',
  },
  {
    id: 'collaboration',
    question: 'Do you partner with experimental labs for theoretical support?',
    answer:
      'Yes. Several of our recent papers in ACS Applied Engineering Materials, RSC Reaction Chemistry and Engineering, and Applied Surface Science come from joint studies where our DFT band alignments, adsorption energies, and charge density maps explain experimental catalysis and SERS measurements.',
  },
  {
    id: 'd3mat',
    question: 'What is the D³Mat Workshop series?',
    answer:
      'Digital Discovery and Design of Materials (D³Mat) is our recurring workshop hosted at PSG Institute of Advanced Studies to train students and early career researchers in crystal structure modeling and practical first principles simulations.',
  },
  {
    id: 'contact',
    question: 'What should I include when writing to join or collaborate?',
    answer:
      'Send an email to seb@psgias.ac.in or sebin@psgitech.ac.in with your CV and a short paragraph describing the material system, method, or thesis window you have in mind. Every serious academic inquiry receives a direct reply.',
  },
];
