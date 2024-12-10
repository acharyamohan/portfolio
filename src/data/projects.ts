import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Analysis',
    description: 'Analyzed telecom customer data to predict churn using machine learning models. Achieved 85% accuracy using Random Forest.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualization'],
    githubUrl: 'https://github.com/yourusername/churn-analysis'
  },
  {
    id: '2',
    title: 'Sales Dashboard',
    description: 'Interactive dashboard showing sales trends and insights using Python and Streamlit.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    githubUrl: 'https://github.com/yourusername/sales-dashboard',
    liveUrl: 'https://sales-dashboard.streamlit.app'
  },
  {
    id: '3',
    title: 'COVID-19 Data Analysis',
    description: 'Analyzed COVID-19 data to identify trends and patterns across different regions.',
    imageUrl: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    githubUrl: 'https://github.com/yourusername/covid-analysis'
  }
];