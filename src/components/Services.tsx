import { Globe, Search, Database, Smartphone, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description:
        'We build fast, accessible websites tailored to your brand—SEO‑ready, easy to update, and designed to convert on every device.',
      features: ['Responsive Design', 'Custom Development', 'CMS Integration'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Increase organic traffic with data‑backed SEO: research, technical fixes, and content that ranks and drives qualified leads.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO'],
    },
    // {
    //   icon: Database,
    //   title: 'CRM Solutions',
    //   description:
    //     'Implement a CRM that fits your sales flow—centralized leads, automated touchpoints, and dashboards that surface what matters.',
    //   features: ['Lead Management', 'Automation', 'Analytics'],
    // },
    {
      icon: Smartphone,
      title: 'Web Applications',
      description:
        'Custom web apps that scale—clean APIs, secure auth, and intuitive UX that turns complex workflows into one click.',
      features: ['Custom Apps', 'API Integration', 'User Experience'],
    },
    {
      icon: Zap,
      title: 'Automation',
      description:
        'Automate repetitive tasks across your stack to save hours—connect tools, orchestrate data, and keep teams in sync.',
      features: ['Workflow Automation', 'Process Optimization', 'Integration'],
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Digital Marketing',
    //   description:
    //     'Full‑funnel campaigns that blend content, social, and analytics to grow awareness and convert visitors into customers.',
    //   features: ['Social Media', 'Content Strategy', 'Campaign Management'],
    // },
  ];

  return (
    <section id="scroll" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title', 'What We')}{' '}
            <span className="text-primary">{t('services.titleAccent', 'Offer')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t(
              'services.description',
              'From websites and apps to SEO and automation, we deliver end‑to‑end digital solutions that ship fast, scale smoothly, and drive results.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t(`services.items.${index}.title`, service.title)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t(`services.items.${index}.description`, service.description)}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {t(`services.items.${index}.features.${i}`, feature)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
