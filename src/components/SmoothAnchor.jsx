import { Link as RouterLink } from 'react-router-dom';

export function SmoothAnchor({ href, children, className = '' }) {
  if (href?.startsWith('/')) {
    return (
      <RouterLink to={href} className={className}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
