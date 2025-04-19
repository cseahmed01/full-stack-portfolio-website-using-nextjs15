'use client';

export default function EducationSection() {
  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Educational Qualifications</h3>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              Master of Science (M.Sc) in Computer Science
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              University of Dhaka<br />
              <span className="italic">2019 – 2021</span><br />
              CGPA: 3.85/4.00
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Specialized in Artificial Intelligence and Software Engineering.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              Bachelor of Science (B.Sc) in Computer Science & Engineering
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Bangladesh University of Engineering and Technology (BUET)<br />
              <span className="italic">2015 – 2019</span><br />
              CGPA: 3.75/4.00
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Major coursework included Data Structures, Algorithms, and Networking.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              Higher Secondary Certificate (HSC)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Dhaka College<br />
              <span className="italic">2013 – 2015</span><br />
              GPA: 5.00/5.00
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Science Group under Dhaka Education Board.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              Secondary School Certificate (SSC)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Ideal School and College, Dhaka<br />
              <span className="italic">2011 – 2013</span><br />
              GPA: 5.00/5.00
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Science Group under Dhaka Education Board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
