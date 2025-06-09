import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formState).toString()
      });

      setFormStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:ibo.umbrella@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      ibo.umbrella@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href="tel:+998951309955"
                      className="hover:text-primary transition-colors"
                    >
                      +998 95 130 9955
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                    </svg>
                    <a
                      href="https://t.me/umbrella_ibo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Telegram: @umbrella_ibo
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/IBO-Umbrel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/IBO-Umbrel
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm currently open to freelance opportunities and
                    collaborations.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/IBO-Umbrel"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://t.me/umbrella_ibo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                        </svg>
                        Telegram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

                {formStatus === "success" && (
                  <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {formStatus === "error" && (
                  <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      There was an error sending your message. Please try again
                      later.
                    </AlertDescription>
                  </Alert>
                )}

                <form name="contact" className="space-y-4" method="POST" onSubmit={handleSubmit} data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
