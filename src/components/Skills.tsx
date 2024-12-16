import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core AI/ML",
      skills: [
        "Machine Learning: Supervised/Unsupervised Learning",
        "Deep Learning: Neural Networks, CNN, RNN",
        "NLP: Text Processing, Sentiment Analysis",
        "Computer Vision: Image Processing, OpenCV"
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        "Languages: Python (Advanced), C++ (Intermediate)",
        "Frameworks: TensorFlow, Keras, Scikit-learn",
        "Libraries: NumPy, Pandas, Matplotlib",
        "Development: Git, VS Code, Jupyter Notebook"
      ]
    },
    {
      title: "Cloud & Deployment",
      skills: [
        "Platforms: Google Cloud (ML Pipelines), AWS",
        "Tools: Docker, REST APIs, Streamlit"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-gray-700 mb-2">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;