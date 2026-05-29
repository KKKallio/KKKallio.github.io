'use client';

import Image from 'next/image';
import ContactIcons from '@/components/About/ContactIcons';
import ProfileIcons from '@/components/About/ProfileIcons';

export default function SideBar() {
  return (
    <aside className="sidebar">
      <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          priority
       />
      <header className="name">
        <h2>Ke Liu / Kallio</h2>
      </header>
      <p className="hello">
        Hello! Welcome to my page!
      </p>
      <ProfileIcons />
      <footer>
        <ContactIcons />
        <p>
          &copy; Kallio {new Date().getFullYear()}
        </p>
      </footer>
    </aside>
  );
}
