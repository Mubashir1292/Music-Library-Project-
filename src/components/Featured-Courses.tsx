"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface courseProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredEnabledCourses = courseData.courses.filter(
    (course: courseProps) => course.isFeatured === true
  );
  return (
    <div className="py-10 bg-gray-900">
      <div>
        <div className="text-center">
          <h1 className="text-teal-600 uppercase font-sans text-lg font-semibold tracking-wide">
            Featured Courses
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mx-3">
          {featuredEnabledCourses.map((course: courseProps, index: number) => (
            <div key={index} className="flex flex-col space-y-3 justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-white bg-zinc-900 overflow-hidden min-w-sm h-full">
                <div className="p-4 sm:p-8 flex flex-col space-y-3 items-center text-center flex-grow">
                  <h1 className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </h1>
                  <p className="text-sm text-neutral-400 dark:text-neutral-200 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/allCourses"
          className="px-4 py-3 border border-neutral-600 text-neutral-700 hover:text-neutral-900 hover:bg-gray-50 transition duration-200 bg-gray-300 text-center rounded"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
