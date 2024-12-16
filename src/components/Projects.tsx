import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection Using AI",
      description: "Developed ML models achieving 94% accuracy in fraud detection. Implemented feature engineering and data preprocessing pipelines.",
      tech: "Python, Scikit-learn, TensorFlow, Pandas",
      link: "https://github.com/Chinmay2406/fraud-detection"
    },
    {
      title: "Instagram Summarizer Bot",
      description: "Built NLP-based content summarization system with 85% accuracy. Implemented text extraction and processing pipeline.",
      tech: "Python, NLTK, Transformers, spaCy",
      link: "https://github.com/Chinmay2406/instagram-summarizer"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <p className="text-sm text-gray-600 mb-3">Tech: {project.tech}</p>
            <a href={project.link} className="text-blue-600 hover:text-blue-800">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;