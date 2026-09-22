import emailjs from '@emailjs/browser';

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailFormData): Promise<{ success: boolean; error?: string }> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

  const templateParams = {
    name: data.name,
    email: data.email,
    subject: data.subject.trim() || `Portfolio Contact from ${data.name}`,
    message: data.message,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200 || response.text === 'OK') {
      return { success: true };
    }
    return { success: false, error: 'EmailJS response status: ' + response.status };
  } catch (err: unknown) {
    const errorMsg = err && typeof err === 'object' && 'text' in err
      ? String((err as { text?: string }).text)
      : err instanceof Error
      ? err.message
      : 'Failed to send message via EmailJS.';
    return { success: false, error: errorMsg };
  }
}
