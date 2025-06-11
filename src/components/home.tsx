import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const HomePage = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        // Check for user preference in localStorage or system preference
        const isDarkMode =
            localStorage.getItem("darkMode") === "true" ||
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        setDarkMode(isDarkMode);

        // Apply the theme to the document
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", String(newDarkMode));

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl">Ibrohimjon</div>

                    <div className="flex items-center gap-6">
                        <ul className="hidden md:flex gap-6">
                            <li>
                                <a
                                    href="#hero"
                                    className="hover:text-primary transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-primary transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="hover:text-primary transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sendmessage"
                                    className="hover:text-primary transition-colors"
                                >
                                    Send a Message
                                </a>
                            </li>
                        </ul>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={
                                mobileMenuOpen ? "Close menu" : "Open menu"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu"
                            >
                                <line
                                    x1="4"
                                    x2="20"
                                    y1="12"
                                    y2="12"
                                />
                                <line
                                    x1="4"
                                    x2="20"
                                    y1="6"
                                    y2="6"
                                />
                                <line
                                    x1="4"
                                    x2="20"
                                    y1="18"
                                    y2="18"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
                        <div className="container mx-auto px-4 py-4">
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a
                                        href="#hero"
                                        className="block hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="block hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="block hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="block hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#sendmessage"
                                        className="block hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Send a Message
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main content */}
            <main>
                <section
                    id="hero"
                    className="pt-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HeroSection />
                    </motion.div>
                </section>

                <section
                    id="projects"
                    className="py-20"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProjectsSection />
                    </motion.div>
                </section>

                <section
                    id="skills"
                    className="py-20 bg-muted/50"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SkillsSection />
                    </motion.div>
                </section>

                <section
                    id="contact"
                    className="py-20"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactSection />
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-muted py-8 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-muted-foreground">
                        &copy; {new Date().getFullYear()} Ibrohimjon
                        Toshtemirov. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a
                            href="https://github.com/IBO-Umbrel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                        <a
                            href="https://t.me/IBO_Umbrel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-send"
                            >
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                        </a>
                        <a
                            href="mailto:ibo.umbrella@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail"
                            >
                                <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <div className="fixed bottom-8 right-8">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    aria-label="Scroll to top"
                    className="rounded-full shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-up"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
