export default function Languages() {
  return (
    <>
      <div className="sm:py-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center py-5">
            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl">
              Language skills🌍
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-2 flex justify-between items-center">
              <div className="prose max-w-none text-gray-500 dark:text-gray-100">
                Korean: Advanced
              </div>
              {/* <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                (한국어 능력 시혐 - 4급)
              </dd> */}
            </li>

            <li className="py-2 flex justify-between items-center">
              <div className="prose max-w-none text-gray-500 dark:text-gray-100">
                English: Intermediate
              </div>
            </li>
            <li className="py-2 flex justify-between items-center">
              <div className="prose max-w-none text-gray-500 dark:text-gray-100">
                Russian: Native
              </div>
            </li>
            <li className="py-2 flex justify-between items-center">
              <div className="prose max-w-none text-gray-500 dark:text-gray-100">
                Uzbek: Native
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
