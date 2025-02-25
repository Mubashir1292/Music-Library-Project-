import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black py-5">
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:md-grid-4 md:grid-cols-4 gap-8 px-4 sm:px-7 text-gray-400 py-10">
        {/* About us */}
        <div className="flex flex-col space-y-6">
          <h2 className="hover:text-white transition-colors duration-300 font-bold">
            About Us
          </h2>
          <p>
            Music School is a premier institution dedicated to teaching music
            and science of music.we teach the best way to create the music and
            enjoy life.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col space-y-6">
          <h2 className="hover:text-white transition-colors duration-300 font-bold">
            Quick Links
          </h2>
          <div className="flex flex-col">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* Follow Us */}
        <div className="flex flex-col space-y-6">
          <h2 className="hover:text-white transition-colors duration-300 font-bold">
            Follow Us
          </h2>
          <div className="flex flex-col">
            <Link href="/home">Facebook</Link>
            <Link href="/about">Twitter</Link>
            <Link href="/courses">Instagram</Link>
          </div>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col space-y-6">
          <h2 className="hover:text-white transition-colors duration-300 font-bold">
            Contact Us
          </h2>
          <div className="flex flex-col">
            <p>Somewhere on earth</p>
            <p>
              <strong>Email:</strong>mubashirliaqat72@gmail.com
            </p>
            <p>
              <strong>Phone:</strong>923059055087
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-base">
        {" "}
        ® 2025 Music School. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
