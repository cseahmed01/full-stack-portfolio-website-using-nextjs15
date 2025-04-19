'use client';

export default function SkillsSection() {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB'];

  return (
    <section id="skills" className="py-16 px-6">
      <h3 className="text-3xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">{skill}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
