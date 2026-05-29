/**
 * Experience entries for the resume page.
 *
 * Skill categories are used for color coding:
 * - dry-lab: computational / programming / modeling
 * - wet-lab: experimental or biological assay knowledge
 * - biology: biological domain expertise
 * - computational: data analysis / omics pipelines
 * - general: transferable or interdisciplinary skills
 */
type SkillCategory = 'biology' | 'programming' | 'computational' | 'bioinformatics' | 'general';

interface ExperienceSkill {
  name: string;
  category: SkillCategory;
}

interface ExperienceEntry {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  skills: ExperienceSkill[];
}

const experience: ExperienceEntry[] = [
  {
    name: 'GutResearch @AmsterdamUMC',
    position: 'PhD candidate',
    url: 'https://www.gut-research.com/',
    startDate: '2024-11',
    summary:
      'Developing machine learning and bioinformatics pipelines to identify biomarkers for predicting treatment response in inflammatory bowel disease, while investigating the biological mechanisms and molecular pathways underlying heterogeneous patient outcomes.',
    skills: [
      { name: 'python', category: 'programming' },
      { name: 'R', category: 'programming' },
      { name: 'scikit-learn', category: 'computational' },
      { name: 'Pytorch', category: 'computational' },
      { name: 'DNA methylation', category: 'bioinformatics' },
      { name: 'multi-omics', category: 'bioinformatics' },
    ],
  },
  {
    name: 'Qulab @USTC',
    position: 'B.Sc. and M.Sc. Intern',
    url: 'https://qulab.ustc.edu.cn/',
    startDate: '2019-05',
    endDate: '2024-07',
    summary:
      'Gained broad research experience spanning single-cell multi-omics, spatial transcriptomics, and circulomics, encompassing both wet lab library preparation and dry lab analysis. Contributed to pipeline development, benchmarking studies, and the computational analysis and biological interpretation of high-dimensional omics datasets.',
    skills: [
      { name: 'python', category: 'programming' },
      { name: 'R', category: 'programming' },
      { name: 'Nextflow / Snakemake', category: 'bioinformatics' },
      { name: 'scRNA-seq', category: 'bioinformatics' },
      { name: 'scATAC-seq', category: 'bioinformatics' },
      { name: 'PCR', category: 'biology' },
      { name: 'cell culture', category: 'biology' },
    ],
  },
];

export default experience;
