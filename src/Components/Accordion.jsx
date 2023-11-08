
const Accordion = () => {
    return (
        <div>
           <h4 className="text-3xl mx-auto w-fit dark:text-white font-bold py-5 mb-5 border-b-2 border-black dark:border-white">Frequently asked question</h4>
           <div className="space-y-4">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 dark:bg-gray-800 dark:text-white text-gray-900"
    >
      <h2 className="font-medium">
      Q1: What services does JobNext offer?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed dark:text-white text-gray-700">
    A1: JobNext offers a range of services, including web development, digital marketing, and graphics design. We provide job opportunities and resources in these fields, connecting talented professionals with businesses in need.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4  dark:bg-gray-800 dark:text-white text-gray-900"
    >
      <h2 className="font-medium">
      Q2: How can I apply for job listings on JobNext?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="mt-4 px-4  dark:text-white leading-relaxed text-gray-700">
    A2: Applying for job listings on JobNext is simple. Just create an account, browse through our job listings, and submit your application through our platform. You can also customize your profile and receive job alerts tailored to your preferences.
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex  dark:bg-gray-800 dark:text-white cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">
      Q3: Are there any fees for using JobNext's services?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="mt-4 px-4  dark:text-white leading-relaxed text-gray-700">
    A3: JobNext is committed to helping job seekers and employers connect. We offer free registration and browsing of job listings. There are no hidden fees for job seekers. Employers may have different subscription plans, but job seekers can access our services without charge.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex  dark:bg-gray-800 dark:text-white cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">
      Q4: Is JobNext's platform user-friendly and secure?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="mt-4 px-4  dark:text-white leading-relaxed text-gray-700">
    A4: Yes, JobNext's platform is designed with user-friendliness and security in mind. We prioritize user data protection and provide a seamless experience for both job seekers and employers. Your information is safe with us.
    </p>
  </details>
</div>
 
        </div>
    );
};

export default Accordion;