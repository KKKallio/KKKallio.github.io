import SideBar from './SideBar'; 

interface PageWrapperProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode; 
  mainClassName?: string;
}

export default function PageWrapper({
  children,
  sidebar,
  mainClassName,
}: PageWrapperProps) {
  return (
    <div className="page-container">
      <div className="page-layout-wrapper">
        
        {sidebar && (
          <aside className="sidebar-desktop">
            <SideBar />
          </aside>
        )}

        <main className={['page-main', mainClassName].filter(Boolean).join(' ')}>
          {children}
        </main>
      </div>

      {sidebar && (
        <nav className="sidebar-mobile">
          <SideBar />
        </nav>
      )}
    </div>
  );
}
