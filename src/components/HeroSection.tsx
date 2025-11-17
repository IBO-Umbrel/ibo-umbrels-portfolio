import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  roles?: string[];
  bio?: string;
  email?: string;
  phone?: string;
  telegram?: string;
  github?: string;
  avatarUrl?: string;
}

const HeroSection = ({
  name = "Ibrohimjon Toshtemirov",
  roles = ["Full-stack Engineer", "Web Developer", "Mobile App Developer"],
  bio = "I am a full-stack developer with 3 years of personal experience. I build web, mobile, and desktop applications using tools like React.js, Expo, Express.js, and more. I'm currently studying Software Engineering at Millat Umidi University.",
  email = "ibo.umbrella@gmail.com",
  phone = "+998951309955",
  telegram = "https://t.me/umbrella_ibo",
  github = "https://github.com/IBO-Umbrel",
  avatarUrl = "/me.jpg",
}: HeroSectionProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start order-2 md:order-1">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.h1>

          <motion.div
            className="h-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h2
              className="text-xl md:text-2xl text-primary font-medium"
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {bio}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button variant="default" asChild>
              <a href={`mailto:${email}`}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="mr-2 h-4 w-4" />
              <a
                href={`mailto:${email}`}
                className="hover:text-primary transition-colors"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="mr-2 h-4 w-4" />
              <a
                href={`tel:${phone}`}
                className="hover:text-primary transition-colors"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <ExternalLink className="mr-2 h-4 w-4" />
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Telegram
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 from-primary to-primary/50 rounded-full blur-md opacity-75" style={{backgroundImage: "url(/me.jpg)"}}></div>
            <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-background relative">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="text-4xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
