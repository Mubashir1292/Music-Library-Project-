"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const testimonialCardsContent = [
    {
      quote:
        "This product completely changed the way I work.\nIt's efficient, user-friendly, and has saved me\nso much time! I can't imagine working without it now.",
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      quote:
        "I was skeptical at first, but after using it for a week,\nI can confidently say it's worth every penny.\nThe results have been incredible, and I'm very satisfied.",
      name: "Jane Smith",
      title: "Marketing Manager",
    },
    {
      quote:
        "The customer support is amazing! They were very helpful\nand resolved my issue in no time. I feel valued as a customer\nand would recommend this to anyone looking for great service.",
      name: "Alice Johnson",
      title: "Small Business Owner",
    },
    {
      quote:
        "I've tried many similar tools, but this one stands out\nbecause of its simplicity and powerful features.\nIt has truly made my work so much easier and more efficient.",
      name: "Michael Brown",
      title: "Graphic Designer",
    },
    {
      quote:
        "It's a game-changer for my team. We've seen a significant\nboost in productivity since we started using it.\nThe collaboration features are especially fantastic.",
      name: "Emily Davis",
      title: "Project Manager",
    },
    {
      quote:
        "The learning curve was minimal, and I was able to get\nstarted right away. Highly recommend it!\nIt's intuitive and has everything I need to succeed.",
      name: "David Wilson",
      title: "Freelance Writer",
    },
    {
      quote:
        "I love how customizable it is. It fits perfectly with my\nworkflow and has made my life so much easier.\nThe flexibility it offers is truly unmatched.",
      name: "Sarah Martinez",
      title: "Content Creator",
    },
    {
      quote:
        "The updates are frequent, and the team is always adding\nnew features. It feels like they really care about their users.\nI'm excited to see what they come up with next!",
      name: "Chris Anderson",
      title: "Data Analyst",
    },
    {
      quote:
        "It's not just a tool; it's a complete solution. I can't\nimagine going back to my old methods. It has streamlined\nmy processes and improved my overall efficiency.",
      name: "Laura Taylor",
      title: "HR Specialist",
    },
    {
      quote:
        "The pricing is very reasonable for the value it provides.\nI'm extremely satisfied with my purchase. It's a great\ninvestment for anyone looking to improve their workflow.",
      name: "James White",
      title: "Entrepreneur",
    },
  ];
  return (
    <div className="dark:bg-black h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden bg-grid-white/[0.2]">
      <h2 className="text-white text-center text-4xl my-10 font-bold">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonialCardsContent}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
