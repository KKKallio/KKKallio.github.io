import Link from 'next/link';
import routes from '@/data/navigation';
import styles from '@/styles/page/not-found.module.css';

export default function NotFound() {
  const suggestedRoutes = routes.filter((route) => !route.home).slice(0, 4);

  return (
    <article className="post" id="not-found">
      <div className={styles.card}>
        <div className={styles.code}>404</div>
        <h2>Page not found</h2>
        <p className="summary">
          This page may have moved, been renamed, or not been created yet. Try one of the main sections below.
        </p>
        <div className={styles.actions}>
          <Link href="/">Home</Link>
          {suggestedRoutes.map((route) => (
            <Link key={route.path} href={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
