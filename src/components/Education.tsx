import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Pursuing",
      details: [
        "Specialization in AI/ML",
        "CGPA: 8.54/10",
        "Key courses: Machine Learning, Deep Learning, Data Structures"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Completed",
      details: [
        "CGPA: 8.97/10",
        "Focus on programming fundamentals and algorithms"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-gray-600 mb-3">{edu.institution}</p>
            <ul className="list-disc list-inside text-gray-700">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;