import React from "react";
const FQAPage = () => {
  return (
    <div>
      <div className="overflow-x-auto pb-16 pt-5 shadow px-28 mt-5 mb-5">
        <div className="fqa-header text-center mt-5 mb-5">
          <h4 className="mb-2">FAQ</h4>
          <h1 className="text-2xl mb-5 font-bold">
            Frequently Asked Questions
          </h1>
          {/* --------------------------------------form search bar start---------------------------------- */}
          
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ...."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          {/* --------------------------------------form search bar end---------------------------------- */}
        </div>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            ইলেকট্রনিক টোল কালেকশন (ইটিসি) সিস্টেম কি?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              ইলেকট্রনিক টোল কালেকশন (ETC) সিস্টেম হচ্ছে টোল সংগ্রহের একটি
              স্বয়ংক্রিয় ব্যবস্থা যেখানে যানবাহনসমূহ টোল প্লাজা অতিক্রমকালে
              যানবাহন হতে স্বয়ংক্রিয় পদ্ধতিতে টোল আদায় করা হয়।
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            ফাস্ট ট্র্যাক লেন কাকে বলে?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              ফাস্ট ট্র্যাক লেন হল আলাদা একটি লেন, যা আপনাকে নিরবিচ্ছিন্ন
              ভ্রমণের সুবিধা প্রদান করে এবং স্বয়ংক্রিয়ভাবে আপনার গাড়ির টোল
              পরিশােধে সহায়তা করে।
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">আরএফআইডি ট্যাগ কি</summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              রেডিও ফ্রিকুয়েন্সি আইডেনটিফিকেশন এর সংক্ষিপ্ত রূপ হচ্ছে আরএফআইডি।
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            ইলেকট্রনিক টোল কালেকশন (ইটিসি) সিস্টেমে কিভাবে টোল আদায় করা হয়?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              ইলেকট্রনিক টোল কালেকশন (ইটিসি) সিস্টেমে স্বয়ংক্রিয় পদ্ধতিতে টোল
              সংগ্রহ করা হয়। রেজিস্ট্রেশনের পর বিআরটিএ কর্তৃক গাড়ীর সামনের
              গ্লাসে একটি আরএফআইডি ট্যাগ সংযােজন করে দেয়া হয় এবং ব্যবহারকারীকে
              একটি একাউন্ট নম্বর দেয়া হয়। টোল প্লাজা অতিক্রমকালে উক্ত আরএফআইডি
              ট্যাগ রিডিং এর মাধ্যমে ইলেকট্রনিক টোল কালেকশন (ইটিসি) লেন
              ব্যবহারকারীর একাউন্ট থেকে টোলের টাকা স্বয়ংক্রিয়ভাবে। কেটে নেয়া
              হয়।
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            ইলেকট্রনিক টোল কালেকশন (ইটিসি) সেবা কিভাবে পাওয়া যাবে?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              গাড়ীর রেজিস্ট্রেশনের সময় সামনের গ্লাসে (উইন্ডশিল্ডে) বিআরটিএ
              থেকে লাগানাে আরএফআইডি ট্যাগ ব্যবহার করে ইটিসির জন্য রেজিস্ট্রশন
              করার মাধ্যমে ইলেকট্রনিক টোল কালেকশন (ইটিসি) সেবা পাওয়া যাবে।
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FQAPage;
