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
    to_email: 'akshikamishra615@gmail.com',
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email, // Ensures Akshika clicking Reply in Gmail goes directly to recruiter's email
    subject: data.subject.trim() || `Portfolio Contact from ${data.name}`,
    message: data.message,
  };

  try {
    // Primary Direct API Transmission via EmailJS Browser SDK (Pure background HTTP request, NO Mail App/Window)
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200 || response.text === 'OK') {
      return { success: true };
    }
    return { success: false, error: 'Failed to send email. API Status: ' + response.status };
  } catch (err: unknown) {
    // If EmailJS SDK fails or credentials are unconfigured, attempt direct EmailJS REST endpoint background POST
    try {
      const restResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (restResponse.ok) {
        return { success: true };
      }
    } catch {
      // Ignore fallback REST error and report standard API error
    }

    const errorMsg = err instanceof Error ? err.message : 'Failed to deliver message via EmailJS API.';
    return { success: false, error: errorMsg };
  }
}
