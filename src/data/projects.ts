import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Crop Yield Prediction',
    description:
      'The dataset represents two distinct crops with varying environmental and agricultural factors influencing crop yield. Temperature emerges as the most significant predictor, followed by rainfall, while fertilizer and macronutrient levels also play a role. The Random Forest Regressor model proves effective in predicting crop yield based on these factors. However, further analysis could explore additional variables and factors impacting crop yield',
    imageUrl:
      'https://camo.githubusercontent.com/7b9c2188bbb8e30fed1e0c134f10c60d6812a258bd430d8a5c3944050e30e350/68747470733a2f2f696d672e696e2d706172742e636f6d2f726573697a653f73747269706d6574613d74727565266e6f70726f66696c653d74727565267175616c6974793d39352675726c3d687474707325334125324625324673332d65752d776573742d312e616d617a6f6e6177732e636f6d2532466173736574732e696e2d706172742e636f6d253246746563686e6f6c6f676965732532466865616465722d696d616765732532463261567632747754595739715a474768507278775f41646f626553746f636b5f3234313930363035332e6a7065672677696474683d31323030266865696768743d383230',
    tags: ['Python', 'numpy', 'matplotlib', 'Pandas', 'seaborn'],
    githubUrl: 'https://github.com/professortate/cropYieldPrediction.git',
  },
  {
    id: '2',
    title: 'Job Fraud Detector',
    description:
      'Job Fraud Detector is an AI-powered Streamlit web application designed to help users identify potentially fraudulent job postings. The app empowers job seekers, recruiters, and analysts to upload job datasets, analyze postings using both rule-based heuristics and machine learning, and visualize results via interactive dashboards. With features for model training and real-time prediction on new data, this tool aims to increase safety and transparency in the online job market.',
    imageUrl:
      'https://github.com/acharyamohan/job-fraud-detector/raw/6dcf52a4f1deb425d428a1c57dcc6b0d49b9e9e4/dash_board_overview.png',
    tags: [
      'Python',
      'Streamlit',
      'Pandas',
      'Plotly',
      'scikit-learn',
      'joblib',
      'numpy',
    ],
    githubUrl: 'https://github.com/acharyamohan/job-fraud-detector.git',
    liveUrl: 'https://job-fraud-detector.streamlit.app/',
  },
{
  id: '3',
  title: 'Movie Management System',
  description:
    'This project involves the design and development of a Movie Management System using Python, with SQLite as the backend database and Tkinter for the graphical user interface. The system allows users to manage movie data efficiently through features such as adding, viewing, updating, and deleting records. Key highlights of the project include: - A well-structured SQLite database to store and organize movie details. - Full CRUD (Create, Read, Update, Delete) functionality for data manipulation. - A clean and user-friendly Tkinter GUI that enhances user interaction. - Modular design principles for better scalability and maintainability.',
  imageUrl:
    'https://github.com/acharyamohan/Movie_Management_System/blob/main/Movie_store_ER.png?raw=true',
  tags: ['Python', 'SQLite', 'Tkinter', 'CRUD', 'GUI'],
  githubUrl: 'https://github.com/acharyamohan/Movie_Management_System.git',
}

];
