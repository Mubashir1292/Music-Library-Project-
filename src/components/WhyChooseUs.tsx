"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
function WhyChooseUs() {
  const musicItems = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real-time Changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--cyan-500))] flex items-center justify-center text-white">
          Real-time Changes
        </div>
      ),
    },
    {
      title: "Version Control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version Control
        </div>
      ),
    },
    {
      title: "Task Management",
      description:
        "Efficiently manage tasks and projects with our intuitive task management system. Assign tasks, set deadlines, and track progress seamlessly. Keep your team organized and ensure that every project milestone is met on time.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Task Management
        </div>
      ),
    },
    {
      title: "File Sharing",
      description:
        "Share files effortlessly with your team and clients. Our platform supports secure file sharing, ensuring that your documents are always accessible to the right people. Simplify collaboration and reduce the hassle of email attachments.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          File Sharing
        </div>
      ),
    },
    {
      title: "Team Communication",
      description:
        "Stay connected with your team through our integrated communication tools. Whether it's instant messaging, video calls, or group discussions, our platform keeps everyone on the same page, no matter where they are.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] flex items-center justify-center text-white">
          Team Communication
        </div>
      ),
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain insights into your projects with our comprehensive analytics dashboard. Track progress, monitor performance, and make data-driven decisions to optimize your workflow and achieve your goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
          Analytics Dashboard
        </div>
      ),
    },
    {
      title: "Customizable Templates",
      description:
        "Save time with our customizable templates for documents, projects, and workflows. Tailor them to fit your specific needs and ensure consistency across all your projects.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--lime-500))] flex items-center justify-center text-white">
          Customizable Templates
        </div>
      ),
    },
    {
      title: "Integration with Third-Party Tools",
      description:
        "Enhance your workflow by integrating our platform with your favorite third-party tools. From project management to communication, our integrations make it easy to connect all your tools in one place.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
          Integration with Third-Party Tools
        </div>
      ),
    },
    {
      title: "Secure Data Storage",
      description:
        "Rest easy knowing your data is safe with our secure data storage solutions. We use advanced encryption and security protocols to protect your information, ensuring that your data is always secure.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--blue-500))] flex items-center justify-center text-white">
          Secure Data Storage
        </div>
      ),
    },
  ];
  return (
    <React.Fragment>
      <div>
        <StickyScroll content={musicItems} />
      </div>
    </React.Fragment>
  );
}

export default WhyChooseUs;
