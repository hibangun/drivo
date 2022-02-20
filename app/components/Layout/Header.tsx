import { Link } from 'remix'

export default function Header() {
  return (
    <nav className="shadow-sm">
      <div className="flex justify-between items-center p-6">
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className="flex items-center space-x-10 text-xl">
          <Link to="/">
            <svg
              width="128"
              height="29"
              viewBox="0 0 128 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.6927 28.6902H64.7734L68.2089 8.29883H72.1283L68.6927 28.6902Z"
                fill="#EF4941"
              />
              <path
                d="M76.0476 8.2959C71.7135 8.2959 67.6175 11.8018 66.8905 16.1261C66.1634 20.4504 69.0767 23.9538 73.4057 23.9538C77.7346 23.9538 81.8358 20.4504 82.5628 16.1261C83.2898 11.8018 80.374 8.2959 76.0476 8.2959ZM74.0662 20.0412C71.903 20.0412 70.4438 18.287 70.8073 16.1261C71.1708 13.9653 73.2214 12.211 75.3871 12.211C77.5529 12.211 79.0095 13.9627 78.646 16.1261C78.2825 18.2895 76.2294 20.0412 74.0662 20.0412Z"
                fill="#EF4941"
              />
              <path
                d="M86.0111 28.6902H82.0918L85.5298 8.29883H89.4492L86.0111 28.6902Z"
                fill="#EF4941"
              />
              <path
                d="M93.3682 8.2959C89.0392 8.2959 84.9381 11.8018 84.2085 16.1261C83.4789 20.4504 86.3973 23.9538 90.7262 23.9538C95.0552 23.9538 99.1538 20.4504 99.8731 16.1261C100.593 11.8018 97.6946 8.2959 93.3682 8.2959ZM91.3867 20.0412C89.221 20.0412 87.7643 18.287 88.1278 16.1261C88.4914 13.9653 90.5419 12.211 92.7051 12.211C94.8683 12.211 96.3275 13.9627 95.964 16.1261C95.6005 18.2895 93.5499 20.0412 91.3867 20.0412Z"
                fill="#EF4941"
              />
              <path
                d="M112.282 18.2691C112.106 18.48 111.915 18.6767 111.708 18.8572C110.881 19.5995 109.814 20.0198 108.703 20.0412C106.537 20.0412 105.078 18.287 105.444 16.1261C105.81 13.9653 107.858 12.211 110.021 12.211C112.184 12.211 113.646 13.9627 113.28 16.1261C113.192 16.6432 113.011 17.1403 112.748 17.594H116.813C116.985 17.1172 117.115 16.6259 117.199 16.1261C117.929 11.8018 115.011 8.2959 110.682 8.2959C106.353 8.2959 102.254 11.8018 101.525 16.1261C100.795 20.4504 103.713 23.9538 108.042 23.9538C110.229 23.9123 112.33 23.0967 113.971 21.6523C114.535 21.1723 115.044 20.6321 115.489 20.0412L112.282 18.2691Z"
                fill="#EF4941"
              />
              <path
                d="M116.511 17.5939H101.716L102.211 14.6582H117.007L116.511 17.5939Z"
                fill="#EF4941"
              />
              <path
                d="M121.441 23.9568H117.522L120.164 8.29883H124.081L121.441 23.9568Z"
                fill="#EF4941"
              />
              <path
                d="M128 8.2959L118.843 16.1261L128 8.2959ZM122.762 16.1261C123.126 13.9627 125.176 12.211 127.34 12.211L128 8.2959C123.681 8.2959 119.585 11.8018 118.843 16.1261H122.762ZM122.762 16.1261L127.67 10.2445L122.762 16.1261Z"
                fill="#EF4941"
              />
              <path
                d="M48.5835 23.9572H44.6641L48.2046 2.44824H52.211L48.5835 23.9572Z"
                fill="#EF4941"
              />
              <path
                d="M55.1422 8.2959C49.2542 8.2959 46.7121 11.8018 45.9851 16.1287L44.6641 23.9538H48.5835L50.0683 15.1493C50.2227 14.3437 50.6465 13.6145 51.2703 13.0811C51.894 12.5477 52.6806 12.2418 53.5012 12.2135C55.1243 12.2135 56.2199 13.528 55.946 15.1493L54.4612 23.9564H58.378L60.0292 14.1698C60.5771 10.9247 58.4011 8.2959 55.1422 8.2959Z"
                fill="#EF4941"
              />
              <path
                d="M63.9363 23.9568H60.0195L62.6588 8.29883H66.5782L63.9363 23.9568Z"
                fill="#EF4941"
              />
              <path
                d="M65.229 6.41363C66.3289 6.41363 67.2207 5.52289 67.2207 4.4241C67.2207 3.32531 66.3289 2.43457 65.229 2.43457C64.129 2.43457 63.2373 3.32531 63.2373 4.4241C63.2373 5.52289 64.129 6.41363 65.229 6.41363Z"
                fill="#EF4941"
              />
              <path
                d="M42.176 7.88743C41.3056 6.7827 39.849 6.22011 38.2669 6.22011C36.7309 6.22011 35.1949 6.95405 35.1949 8.59324C35.1949 10.1736 36.5184 10.8283 38.5383 11.6466L38.6509 11.6926C41.0368 12.6465 44.0064 13.833 44.0064 17.541C44.0267 18.4604 43.8309 19.3716 43.4348 20.2017C43.0387 21.0317 42.4532 21.7574 41.7255 22.3205C40.3738 23.3869 38.5383 23.9776 36.5568 23.9776C35.2219 23.9854 33.8998 23.7167 32.6741 23.1885C31.4483 22.6603 30.3454 21.8842 29.4349 20.9089L29.3223 20.7862L32.2125 17.9016L32.3328 18.0474C32.8794 18.6999 33.5611 19.2262 34.331 19.59C35.1009 19.9538 35.9407 20.1464 36.7923 20.1545C38.3283 20.1545 40.0077 19.4539 40.0077 17.9169C40.0077 16.5156 38.4717 15.8712 36.6797 15.1168L36.4851 15.0349C34.2631 14.1041 31.2192 12.8255 31.2192 8.94101C31.2192 4.66531 34.8647 2.42773 38.4666 2.42773H38.5383C41.0215 2.42773 43.2205 3.33299 44.8461 5.21767L42.176 7.88743Z"
                fill="#EF4941"
              />
              <path
                d="M1.59277 7.17325H25.2062L25.5851 4.78223H3.98381L1.59277 7.17325Z"
                fill="#EF4941"
              />
              <path
                d="M8.50162 0.256328L6.36914 2.38907H26.0095L26.2655 0.785676C26.2806 0.688279 26.2745 0.58876 26.2475 0.493957C26.2205 0.399155 26.1733 0.311317 26.109 0.23648C26.0448 0.161643 25.9652 0.101582 25.8755 0.0604236C25.7858 0.0192651 25.6883 -0.00201454 25.5896 -0.00195299H9.1237C8.89038 -0.00106386 8.66684 0.0917504 8.50162 0.256328Z"
                fill="#EF4941"
              />
              <path
                d="M19.884 11.9555L17.4929 9.56445H1.59277L3.9838 11.9555H19.884Z"
                fill="#EF4941"
              />
              <path
                d="M6.36914 14.3467L8.76018 16.7377H24.6604L22.2693 14.3467H6.36914Z"
                fill="#EF4941"
              />
              <path
                d="M24.684 19.1289H1.06026L0.666016 21.5199H22.2929L24.684 19.1289Z"
                fill="#EF4941"
              />
              <path
                d="M0.271384 23.9131L0.015384 25.4884C-0.00133531 25.5887 0.00400387 25.6915 0.0310308 25.7895C0.0580577 25.8875 0.106125 25.9785 0.171893 26.0562C0.237662 26.1338 0.319557 26.1962 0.41189 26.239C0.504223 26.2818 0.604782 26.3041 0.706584 26.3042H17.1495C17.3824 26.3037 17.6058 26.2118 17.7715 26.0484L19.904 23.9131H0.271384Z"
                fill="#EF4941"
              />
            </svg>
          </Link>
        </ul>
        <div className="flex items-center space-x-2">
          <span>
            Hello, <strong className="text-red-500">Shipper User</strong>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
      </div>
    </nav>
  )
}
