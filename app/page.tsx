export default function Home() {
  return (
    <main className="container">
      <h1>S Chandra Mourya</h1>
      <p>B.Tech in IoT & Cybersecurity</p>

      <section>
        <h2>Projects & Achievements</h2>

        <div className="card">
          <h3>Java Mini Project</h3>
          <p>
            Hotel Management System using JDBC, MySQL, and Java Swing.
          </p>
        </div>

        <div className="card">
          <h3>Ongoing Research Project</h3>
          <p>
            ESP32-based project involving Wi-Fi communication, CSI analysis,
            and embedded security concepts.
          </p>
        </div>

        <div className="card">
          <h3>Upcoming Work</h3>
          <p>
            Advanced security-focused automation project integrating IoT
            and system-level protection.
          </p>
        </div>
      </section>

      <section>
        <h2>Connect With Me</h2>
        <div className="socials">
          <a
            href="https://github.com/SCM210305"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/s-chandra-mourya"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/Mourya_210305"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          <a
            href="https://x.com/Mourya210305"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </section>
    </main>
  );
}
