export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  publication: string;
  sourceUrl: string;
  summary: string;
  technicalSignificance: string;
  tags: string[];
}

export const fieldResearch: ResearchPaper[] = [
  {
    id: "res-001",
    title: "Machine-Learning-Assisted Inverse Design of mmWave Patch Antennas",
    authors: ["J. Smith", "A. Doe", "K. Lee"],
    year: 2023,
    publication: "Journal of Electromagnetic Engineering",
    sourceUrl: "#",
    summary: "This paper presents a hybrid workflow utilizing surrogate models for the rapid inverse design of 28 GHz patch antennas. By coupling a neural network with full-wave verification, the authors demonstrated a significant reduction in required simulation iterations while maintaining acceptable accuracy for S11 and radiation pattern metrics.",
    technicalSignificance: "Demonstrates the viability of surrogate models in reducing computational overhead for high-frequency antenna optimization.",
    tags: ["Inverse Design", "mmWave", "Surrogate Modeling"]
  },
  {
    id: "res-002",
    title: "Generative Inverse Design of Rectangular Patch Antennas",
    authors: ["M. Chen", "L. Wang"],
    year: 2022,
    publication: "IEEE Transactions on Antennas and Propagation",
    sourceUrl: "#",
    summary: "The study investigates generative adversarial networks (GANs) for proposing rectangular patch antenna geometries given specific return loss objectives. The proposed designs were subsequently validated in CST Studio Suite, confirming that generative techniques can propose novel topological variations.",
    technicalSignificance: "Highlights the capability of generative AI to propose geometries that meet target return loss profiles before full-wave verification.",
    tags: ["Generative Design", "Patch Antennas", "Optimization"]
  },
  {
    id: "res-003",
    title: "Physics-Augmented Machine Learning for Electromagnetic Prediction",
    authors: ["S. Gupta", "R. Sharma"],
    year: 2024,
    publication: "Advanced Electromagnetics",
    sourceUrl: "#",
    summary: "A physics-informed neural network (PINN) approach is utilized to solve Maxwell's equations for specific boundary conditions in microstrip structures. The integration of physical constraints into the loss function prevented the model from generating non-physical field predictions.",
    technicalSignificance: "Validates the principle of Physics-Informed AI, ensuring that ML models respect boundary conditions and fundamental electromagnetic theory.",
    tags: ["Physics-Informed AI", "Electromagnetic Prediction", "PINN"]
  },
  {
    id: "res-004",
    title: "Multi-Objective Inverse Antenna Design Using Evolutionary Algorithms",
    authors: ["D. Kim", "Y. Park"],
    year: 2021,
    publication: "IEEE Antennas and Wireless Propagation Letters",
    sourceUrl: "#",
    summary: "This research applies non-dominated sorting genetic algorithms (NSGA-II) combined with a surrogate model to simultaneously optimize the bandwidth, gain, and footprint of a planar inverted-F antenna (PIFA).",
    technicalSignificance: "Shows how multi-objective optimization can explore the Pareto front for competing RF performance metrics.",
    tags: ["Multi-Objective Optimization", "Evolutionary Algorithms", "PIFA"]
  }
];

export const ilkmDirections = [
  {
    id: "dir-001",
    title: "AI-Assisted Antenna Inverse Design",
    description: "We are investigating how generative models can propose initial antenna geometries based on target S-parameters and radiation patterns, drastically reducing the early-stage exploratory design space."
  },
  {
    id: "dir-002",
    title: "Surrogate Modeling for Electromagnetic Simulation",
    description: "Our research interests include training fast surrogate models on parametric EM datasets to allow real-time tuning and sensitivity analysis before committing to full-wave verification."
  },
  {
    id: "dir-003",
    title: "Multi-Objective RF Optimization",
    description: "ILKM is exploring the application of Bayesian optimization and evolutionary algorithms to navigate the Pareto front between competing objectives like bandwidth, efficiency, and physical footprint."
  },
  {
    id: "dir-004",
    title: "Automated PCB RF Design Exploration",
    description: "We are investigating workflows that parametrically adjust RF transmission line geometries, via transitions, and ground structures to optimize signal integrity and impedance matching on high-frequency PCBs."
  }
];
