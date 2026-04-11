import React, { useState } from 'react';

interface ContactFormProps {
  lang?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ lang = 'en' }) => {
  const [status, setStatus] = useState<'' | 'success' | 'error' | 'sending'>('');

  const labels = {
    en: {
      name: "Full Name",
      email: "Email Address",
      message: "How can I help you?",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again."
    },
    es: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      message: "¿Cómo puedo ayudarte?",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Algo salió mal. Por favor intenta de nuevo."
    }
  };

  const t = lang === 'es' ? labels.es : labels.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Example endpoint - user should update this with their Formspree/Resend URL
      // const response = await fetch('https://formspree.io/f/your-id', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // Simulating success for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} class="space-y-4 w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium text-foreground/80 ml-1">{t.name}</label>
          <input
            required
            type="text"
            name="name"
            placeholder="John Doe"
            class="w-full px-4 py-3 bg-white border-2 border-border rounded-none focus:ring-0 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-foreground/80 ml-1">{t.email}</label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@example.com"
            class="w-full px-4 py-3 bg-white border-2 border-border rounded-none focus:ring-0 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
          />
        </div>
      </div>
      
      <div class="space-y-2">
        <label class="text-sm font-medium text-foreground/80 ml-1">{t.message}</label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="..."
          class="w-full px-4 py-3 bg-white border-2 border-border rounded-none focus:ring-0 focus:border-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
        ></textarea>
      </div>

      <button
        disabled={status === 'sending'}
        type="submit"
        class={`w-full py-4 rounded-none font-bold transition-all shadow-glow ${
          status === 'sending' ? 'bg-primary/50' : 'bg-primary hover:bg-primary/90'
        } text-white uppercase tracking-widest`}
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>

      {status === 'success' && (
        <p class="text-green-500 text-sm font-medium text-center animate-fade-in">{t.success}</p>
      )}
      {status === 'error' && (
        <p class="text-destructive text-sm font-medium text-center animate-fade-in">{t.error}</p>
      )}
    </form>
  );
};

export default ContactForm;
