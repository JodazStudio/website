import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import founder from '@/assets/images/founder.png';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const renderPicture = () => (
    <div className="flex items-start justify-center lg:justify-end lg:order-2 order-3">
      <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-muted relative rounded-2xl overflow-hidden shadow-lg transform transition-transform will-change-transform animate-slide-up-delayed">
        <img
          src={founder}
          alt={t('contact.portraitAlt', 'Portrait')}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title', 'Get In')}{' '}
            <span className="text-primary">{t('contact.titleAccent', 'Touch')}</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t(
              'contact.description',
              'We craft clear, high‑impact digital experiences—fast, secure, and accessible. Ready to transform your digital presence?'
            )}
          </p> */}
          <br className="hidden md:block" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-end">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up lg:order-1 order-2">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                {t('contact.headline', "Let's Start a Conversation")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(
                  'contact.subhead',
                  'Tell us about your goals and constraints—we’ll reply with a clear plan, timeline, and budget. No fluff, just pragmatic steps to launch and grow.'
                )}
              </p>
            </div>
            <div className="flex justify-center md:hidden">{renderPicture()}</div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.email')}</h4>
                  <p className="text-muted-foreground">jesus@jodaz.xyz</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.phone')}</h4>
                  <p className="text-muted-foreground">+58 (424) 827-0139</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('contact.location')}</h4>
                  <p className="text-muted-foreground">
                    {t('contact.locationValue', 'Remote • Worldwide')}
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Portrait / Image */}
          <div className="hidden md:flex justify-center">{renderPicture()}</div>

          {/* Contact Form */}
          {/* <Card className="bg-gradient-card border-border/50 shadow-card animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-background border-border resize-none"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
