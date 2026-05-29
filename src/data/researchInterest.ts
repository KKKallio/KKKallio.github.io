export interface ResearchInterest {
  slug: string;
  title: string;
  summary: string;
  keywords?: string[];
  currentQuestions?: string[];
  abstractGraph?: {
    label: string;
    figureUrl: string;
  };
}

export const researchSummary = "My research interest lies in applying computational and data-driven methods to high-dimensional omics data to uncover the molecular principles underlying cellular identity, disease heterogeneity, and therapeutic response — bridging mechanistic understanding with clinically actionable insight.";

const researchInterests: ResearchInterest[] = [
  {
    slug: 'cell-state-prediction',
    title: 'Decoding Cell States through Single-Cell Multi-Omics',
    summary:
      'Decoding the molecular logic that governs cell fate decisions is central to understanding development, tissue homeostasis, and disease. Both intrinsic cellular programmes — including DNA methylation, gene expression, and chromatin accessibility — and extrinsic signals such as cytokines, cell–cell interactions, and the microenvironment converge to shape how cells transition across states. By integrating single-cell multi-omics data with computational modelling, it becomes possible to reconstruct differentiation trajectories, infer lineage relationships, and identify the key epigenetic drivers and regulators orchestrating these transitions — with direct implications for uncovering therapeutic targets in disease contexts.',
    keywords: ['Single Cell', 'Multi-Omics', 'Cell States Prediction', 'Trajectory Inference'],
    abstractGraph: {
      label: 'Modeling Cell States Through Single Cell Multi-Omics',
      figureUrl: '/research/cell-state-prediction.png',
    },
  },
  {
    slug: 'ibd-treatment-response',
    title: 'Inflammatory Bowel Disease Treatment Response',
    summary:
      'Understanding why patients with inflammatory bowel disease respond differently to the same treatment remains a fundamental clinical challenge. Addressing this requires a comprehensive, systems-level view of disease biology that goes beyond conventional clinical assessment. By collecting diverse biological specimens from longitudinal cohorts and profiling them across multiple molecular layers, the full complexity of immune dysregulation, gene expression, and microbial dynamics that shape therapeutic outcomes can be captured. Applying advanced computational frameworks to these high-dimensional data holds the potential to identify robust biomarkers and translate molecular patterns into clinically actionable predictions — ultimately supporting more precise and personalised treatment decisions.',
    keywords: ['IBD', 'Multi-Omics', 'Biomarker', 'Machine Learning', 'Prediction'],
    abstractGraph: {
      label: 'Precision Medicine Through Multi-Omics Integration and Machine Learning',
      figureUrl: '/research/ibd-treatment-response.png',
    },
  },
];

export default researchInterests;


