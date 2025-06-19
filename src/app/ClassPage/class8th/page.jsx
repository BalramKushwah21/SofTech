import Header from "@/Components/header";
import Link from "next/link";
import "../all-class.css";

export default function Class8th() {
  return (
    <div className="class8-container">
      <Header />

      <main className="class8-main">
        <section className="class8-welcome">
          <h1 className="class8-title">Welcome to Class 8th 📚</h1>
          <p className="class8-subtitle">
            A new chapter begins — dive into your subjects, explore knowledge, and rise higher!
          </p>
        </section>

        <section className="class8-grid">
          {[
            { name: "Science", color: "green-bg" },
            { name: "Mathematics", color: "yellow-bg" },
            { name: "English", color: "pink-bg" },
            { name: "Social Science", color: "red-bg" },
            { name: "Hindi", color: "purple-bg" },
            { name: "Computer", color: "indigo-bg" },
          ].map((subject) => (
            <div key={subject.name} className={`subject-card ${subject.color}`}>
              <h2 className="subject-title">{subject.name}</h2>
              <p className="subject-desc">
                Explore chapters, notes, videos, and practice questions.
              </p>
              <Link href="/Notes/class8th" className="subject-link">
                Start Learning
              </Link>
            </div>
          ))}
        </section>
      </main>

      <footer className="class8-footer">
        © {new Date().getFullYear()} Career Coaching | Class 8th Portal
      </footer>
    </div>
  );
}
