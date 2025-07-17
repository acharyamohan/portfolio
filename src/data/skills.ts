export interface SkillCategory {
  category: string;
  skills: string[];


}

export const skills: SkillCategory[] = [
    {
    category: 'MATHEMATICS',
    skills: ['Linear Algebra', 'Multiple Variables', 'Probability' ,'RBasic Optimization Techniques', 'Introduction to Estimation Theory'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'MATLAB' ,'R', 'Scala'],
  },
  {
    category: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'LibROSA', 'OpenCv', 'Exploratory Data Analysis (EDA)'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn','NLP'],
  },
  {
    category: 'Tools',
    skills: ['Jupyter Notebook', 'Git', 'Streamlit', 'Microsoft Excel'],
  },
];
