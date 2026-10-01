import { jsPDF } from "jspdf";
import { profile, socials } from "@/data/profile";
import { education, experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const margin = 16;
const pageBottom = 280;

export function downloadResume() {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;
  let cursorY = 17;

  const ensureSpace = (height: number) => {
    if (cursorY + height > pageBottom) {
      pdf.addPage();
      cursorY = margin;
    }
  };

  const addParagraph = (text: string, fontSize = 9, lineHeight = 4.6) => {
    pdf.setFontSize(fontSize);
    pdf.setFont("helvetica", "normal");
    const lines = pdf.splitTextToSize(text, contentWidth) as string[];
    ensureSpace(lines.length * lineHeight + 2);
    pdf.text(lines, margin, cursorY);
    cursorY += lines.length * lineHeight + 2;
  };

  const addSection = (title: string) => {
    ensureSpace(13);
    cursorY += 2;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(18, 91, 91);
    pdf.text(title.toUpperCase(), margin, cursorY);
    pdf.setDrawColor(185, 205, 201);
    pdf.line(margin, cursorY + 2, pageWidth - margin, cursorY + 2);
    cursorY += 8;
    pdf.setTextColor(35, 42, 48);
  };

  const addBullets = (items: string[]) => {
    for (const item of items) {
      const lines = pdf.splitTextToSize(`- ${item}`, contentWidth - 3) as string[];
      const lineHeight = 4.5;
      ensureSpace(lines.length * lineHeight + 1);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text(lines, margin + 2, cursorY);
      cursorY += lines.length * lineHeight + 1;
    }
  };

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(23);
  pdf.setTextColor(22, 48, 54);
  pdf.text(profile.name.toUpperCase(), pageWidth / 2, cursorY, { align: "center" });
  cursorY += 8;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.setTextColor(18, 120, 119);
  pdf.text(profile.title.toUpperCase(), pageWidth / 2, cursorY, { align: "center" });
  cursorY += 7;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8.5);
  pdf.setTextColor(65, 75, 80);
  pdf.text("akashr.offical7@gmail.com  |  +91 9739625103", pageWidth / 2, cursorY, {
    align: "center",
  });
  cursorY += 5;
  const socialLines = pdf.splitTextToSize(
    socials.map(({ label, url }) => `${label}: ${url.replace(/^https?:\/\//, "")}`).join("  |  "),
    contentWidth,
  ) as string[];
  pdf.text(socialLines, pageWidth / 2, cursorY, { align: "center" });
  cursorY += socialLines.length * 4 + 3;

  addSection("Professional Summary");
  addParagraph(profile.heroDescription);

  addSection("Technical Skills");
  for (const category of skillCategories) {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    const labelWidth = pdf.getTextWidth(`${category.title}: `);
    const skillLines = pdf.splitTextToSize(
      category.skills.join(", "),
      contentWidth - labelWidth,
    ) as string[];
    ensureSpace(skillLines.length * 4.5 + 2);
    pdf.text(`${category.title}:`, margin, cursorY);
    pdf.setFont("helvetica", "normal");
    pdf.text(skillLines[0] ?? "", margin + labelWidth, cursorY);
    cursorY += 4.5;
    for (const line of skillLines.slice(1)) {
      pdf.text(line, margin, cursorY);
      cursorY += 4.5;
    }
    cursorY += 1.5;
  }

  addSection("Experience");
  for (const role of experience) {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(`${role.role} | ${role.company}`, margin, cursorY);
    cursorY += 5;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(9);
    pdf.text(`${role.duration} internship`, margin, cursorY);
    cursorY += 5;
    addParagraph(role.description, 9, 4.5);
    if (role.internshipProjects?.length) {
      addBullets(role.internshipProjects.map((project) => `Project: ${project}`));
    }
  }

  addSection("Selected Projects");
  const selectedProjects = projects.filter((project) =>
    ["E-commerce", "gym-management", "super-mall"].includes(project.id),
  );
  for (const project of selectedProjects) {
    ensureSpace(14);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(project.title, margin, cursorY);
    cursorY += 5;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(8.5);
    const technologyLines = pdf.splitTextToSize(project.tech.join(" | "), contentWidth) as string[];
    ensureSpace(technologyLines.length * 4.2 + 2);
    pdf.text(technologyLines, margin, cursorY);
    cursorY += technologyLines.length * 4.2 + 1;
    addParagraph(project.description, 9, 4.5);
    if (project.github) {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.5);
      pdf.setTextColor(18, 120, 119);
      pdf.text(`GitHub: ${project.github}`, margin, cursorY, { maxWidth: contentWidth });
      cursorY += 5;
      pdf.setTextColor(35, 42, 48);
    }
  }

  if (education.length > 0) {
    ensureSpace(35);
  }
  addSection("Education");
  for (const item of education) {
    ensureSpace(22);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(item.degree, margin, cursorY);
    cursorY += 5;
    addParagraph("Krupanidhi College of Commerce and Management | Expected 2027", 9);
    addParagraph(`CGPA: ${item.cgpa}`, 9);
  }

  ensureSpace(28);
  addSection("Additional");
  addBullets([
    "150+ problems solved on LeetCode using Java.",
    "Participated in a cybersecurity hackathon with exposure to CTF challenges and digital forensics.",
  ]);

  const pageCount = pdf.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(125, 135, 138);
    pdf.text(`${page} / ${pageCount}`, pageWidth - margin, 287, { align: "right" });
  }

  pdf.save("Akash-R-Resume.pdf");
}