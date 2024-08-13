export default function Awards() {
  return (
    <>
      <div className="sm:py-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center py-5">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Awards & Achievements🏆
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-2 flex flex-col sm:flex-row justify-between items-center sm:items-center text-center sm:text-left">
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                Scholar in the 5th Daewoong AI-Big Data Global Scholarship
                Program
              </div>
              <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                <time dateTime="2020-11-11T00:00:00.000Z">
                  2023/06 - 2023/12
                </time>
              </dd>
            </li>
            <li className="py-2 flex flex-col sm:flex-row justify-between items-center sm:items-center text-center sm:text-left">
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                86th Leetcode Biweekly Contest - Top 15% (Solved 3/4 algorithmic
                problem)
              </div>
              <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                <time dateTime="2020-11-11T00:00:00.000Z">2022/09</time>
              </dd>
            </li>
            <li className="py-2 flex flex-col sm:flex-row justify-between items-center sm:items-center text-center sm:text-left">
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                JJU Software Bootcamp - 전자출결 시스템
              </div>
              <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                <time dateTime="2020-11-11T00:00:00.000Z">2021/11</time>
              </dd>
            </li>
            <li className="py-2 flex flex-col sm:flex-row justify-between items-center sm:items-center text-center sm:text-left">
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                Microsoft sponsored volunteer "Code Of Hour" - Inha University
                in Tashkent(UIT)
              </div>
              <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                <time dateTime="2020-11-11T00:00:00.000Z">2018-05</time>
              </dd>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
