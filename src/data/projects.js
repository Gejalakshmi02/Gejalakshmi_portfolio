export const categories = [
  'All',
  'Data Analytics',
  'Machine Learning',
  'IoT',
  'Web Development',
]

export const projects = [
  {
    id: 'blinkit-sales',
    title: 'BlinkIT Sales Analysis',
    category: 'Data Analytics',
    tags: ['Data Analytics'],
    description:
      'An interactive Power BI dashboard built to analyze grocery sales performance across outlets, products, locations, and other business dimensions.',
    tech: ['Power BI', 'Power Query', 'DAX'],
    features: [
      'Cleaned and transformed data using Power Query',
      'Created KPI cards and DAX measures',
      'Analyzed outlet and product-level sales performance',
      'Added interactive filters and slicers for data exploration',
    ],
    github: 'https://github.com/Gejalakshmi02/BlinkIT-Sales-Analysis-PowerBI',
    demo: null,
    accent: 'signal',
    featured: true,
  },

  {
    id: 'restaurant-analytics',
    title: 'Restaurant Analytics Web Application',
    category: 'Data Analytics',
    tags: ['Data Analytics', 'Web Development'],
    description:
      'A Flask-based restaurant analytics application built using a large Zomato dataset to explore ratings, cuisines, costs, locations, and ordering patterns.',
    tech: ['Python', 'Pandas', 'Flask', 'HTML', 'CSS', 'Matplotlib'],
    features: [
      'Cleaned and processed 41,000+ restaurant records',
      'Analyzed ratings, cuisines, costs, and locations',
      'Explored online ordering and table booking patterns',
      'Integrated Google Maps for restaurant location context',
    ],
    github: 'https://github.com/Gejalakshmi02',
    demo: null,
    accent: 'violet',
    featured: true,
  },

  {
    id: 'fake-news-detection',
    title: 'Fake News Detection',
    category: 'Machine Learning',
    tags: ['Machine Learning', 'Web Development'],
    description:
      'A machine learning web application that classifies news articles as real or fake using text preprocessing, TF-IDF vectorization, and a Passive Aggressive Classifier.',
    tech: [
      'Python',
      'Flask',
      'Scikit-learn',
      'TF-IDF',
      'PassiveAggressiveClassifier',
    ],
    features: [
      'Preprocessed and cleaned news text',
      'Converted text into numerical features using TF-IDF',
      'Built a Passive Aggressive Classifier for classification',
      'Created a Flask interface for making predictions',
    ],
    github: 'https://github.com/Gejalakshmi02',
    demo: null,
    accent: 'signal',
    featured: true,
  },

  {
    id: 'gas-leakage',
    title: 'Gas Leakage Detection & Alert System',
    category: 'IoT',
    tags: ['IoT'],
    description:
      'An IoT-based safety system that detects gas leakage and automatically triggers alerts and safety actions when the gas level crosses a defined threshold.',
    tech: ['MQ-2 Sensor', 'NodeMCU / ESP', 'Servo Motor', 'Buzzer'],
    features: [
      'Monitored gas concentration in real time',
      'Triggered automatic servo-based valve shutoff',
      'Activated buzzer and fan during gas detection',
      'Sent alerts when the gas level crossed the threshold',
    ],
    github: 'https://github.com/Gejalakshmi02',
    demo: null,
    accent: 'violet',
    featured: false,
  },
]