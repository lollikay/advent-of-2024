// Simple client-side functionality
interface SiteConfig {
  name: string;
  version: string;
}

class StaticSite {
  private config: SiteConfig;

  constructor(config: SiteConfig) {
    this.config = config;
    this.init();
  }

  private init(): void {
    console.log(`${this.config.name} v${this.config.version} loaded`);
    this.setupEventListeners();
    this.addInteractivity();
  }

  private setupEventListeners(): void {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  private addInteractivity(): void {
    // Add click animation to cards
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => {
          card.classList.remove('clicked');
        }, 200);
      });
    });

    // Add simple fade-in animation for cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
    });
  }
}

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StaticSite({
    name: 'My Static Site',
    version: '1.0.0'
  });
});

// Add some CSS classes for animations
const style = document.createElement('style');
style.textContent = `
  .card.clicked {
    transform: scale(0.98) !important;
  }
  
  .card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .card.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);