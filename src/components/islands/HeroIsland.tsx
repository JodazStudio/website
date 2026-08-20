// src/components/islands/HeroIsland.tsx
// React Island — the whole landing: founder profile rendered over the
// ColorBends animation, sized to fit a single viewport.
import ColorBends from '@/components/ColorBends';

interface Social {
  href: string;
  label: string;
  path: string;
}

interface Props {
  name: string;
  role: string;
  bio: string;
  photoSrc: string;
  photoAlt: string;
  socials: Social[];
}

const HeroIsland = ({ name, role, bio, photoSrc, photoAlt, socials }: Props) => (
  <section className="min-h-[100dvh] bg-slate-900 overflow-hidden relative">
    <div className="absolute inset-0 bg-black opacity-50 w-full h-full z-0">
      <ColorBends colors={['#4833e6']} noise={0.15} />
    </div>
    <div className="profile on-hero relative z-10" data-theme="dark">
      <div className="profile-main">
        <div className="profile-intro animate-slide-up-delayed">
          <h1 className="display">{name}</h1>
          <p className="mono profile-role">{role}</p>
          <p className="profile-bio">{bio}</p>
          <div className="profile-social">
            {socials.map(({ href, label, path }) => (
              <a
                key={href}
                className="btn"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'me noopener noreferrer' : undefined}
                aria-label={label}
                title={label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                  <path fill="currentColor" d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="profile-photo animate-slide-up-delayed" style={{ animationDelay: '0.2s' }}>
          <img src={photoSrc} alt={photoAlt} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroIsland;
