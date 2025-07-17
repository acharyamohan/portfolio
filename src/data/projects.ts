import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Crop Yield Prediction',
    description: 'The dataset represents two distinct crops with varying environmental and agricultural factors influencing crop yield. Temperature emerges as the most significant predictor, followed by rainfall, while fertilizer and macronutrient levels also play a role. The Random Forest Regressor model proves effective in predicting crop yield based on these factors. However, further analysis could explore additional variables and factors impacting crop yield',
    imageUrl: 'https://camo.githubusercontent.com/7b9c2188bbb8e30fed1e0c134f10c60d6812a258bd430d8a5c3944050e30e350/68747470733a2f2f696d672e696e2d706172742e636f6d2f726573697a653f73747269706d6574613d74727565266e6f70726f66696c653d74727565267175616c6974793d39352675726c3d687474707325334125324625324673332d65752d776573742d312e616d617a6f6e6177732e636f6d2532466173736574732e696e2d706172742e636f6d253246746563686e6f6c6f676965732532466865616465722d696d616765732532463261567632747754595739715a474768507278775f41646f626553746f636b5f3234313930363035332e6a7065672677696474683d31323030266865696768743d383230',
    tags: ['Python', 'numpy', 'matplotlib', 'Pandas', 'seaborn'],
    githubUrl: 'https://github.com/professortate/cropYieldPrediction.git'
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