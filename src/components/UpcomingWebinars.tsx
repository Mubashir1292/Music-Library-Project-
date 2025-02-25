"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

function UpcomingWebinars() {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-teal-500 font-semibold text-xl">
            Featured Webinars
          </h2>
          <p className="text-white dark:text-white text-3xl font-bold">
            Enhance Your Musical Journey
          </p>
        </div>
        {/* Projects.. */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect hoverColor="cyan-600" items={projects} />
        </div>
      </div>
      {/* View All Button */}
      <div className="flex justify-center ">
        <Link href="/courses">
          <button className="px-4 py-2  rounded text-gray-300 bg-gray-500 hover:bg-gray-50 hover:text-gray-900">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
