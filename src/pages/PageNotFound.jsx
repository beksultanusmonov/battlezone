import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          404
        </p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Sahifa topilmadi !
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Bu texnik tomonlama bo'lishi mumkun
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to={'/'}
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            Asosiy sahifa
          </Link>
          <a
            href="https://t.me/beksulton_usmonov"
            class="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
