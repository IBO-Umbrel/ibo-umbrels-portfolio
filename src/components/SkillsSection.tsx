import React from "react";
import { motion } from "framer-motion";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Frameworks/Tools",
    skills: [
      { name: "React", level: 90 },
      { name: "React Native + Expo", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Tauri", level: 60 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories = defaultCategories,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical expertise and proficiency levels across various
              technologies and tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col h-full"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">
                      {category.title}
                    </h3>
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            {/* <Badge variant="outline">{skill.level}%</Badge> */}
                          </div>
                          {/* <Progress value={skill.level} className="h-2" /> */}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Git",
                "GitHub",
                "Responsive Design",
                "UI/UX",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
