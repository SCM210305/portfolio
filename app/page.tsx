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
          <h3>Ongoing Project</h3>
          <p>
            ESP32-based research project involving Wi-Fi, CSI analysis,
            and embedded security.
          </p>
        </div>

        <div className="card">
          <h3>Upcoming Project</h3>
          <p>
            Planned project focusing on advanced security and automation.
          </p>
        </div>
      </section>

      <section>
        <h2>Connect With Me</h2>
        <div className="socials">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="https://leetcode.com/yourusername" target="_blank">LeetCode</a>
          <a href="https://x.com/yourusername" target="_blank">X</a>
        </div>
      </section>
    </main>
  );
}
