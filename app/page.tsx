export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">

      {/* HERO */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold">Mourya</h1>
        <p className="text-2xl mt-4 text-gray-300">
          IoT & Cybersecurity Engineer
        </p>

        <p className="mt-6 text-gray-400">
          I build secure smart systems, explore cryptography and develop
          real-world tech projects.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <div>Python</div>
          <div>Embedded C</div>
          <div>ESP32 / IoT</div>
          <div>Cryptography</div>
          <div>Network Security</div>
          <div>PHP & MySQL</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              ESP32 CSI Motion Detection
            </h3>
            <p className="text-gray-400">
              Detecting human movement using WiFi signal variations and ESP32.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Two Layer Fraud Detection System
            </h3>
            <p className="text-gray-400">
              Account security + device control system for fraud prevention.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Hotel & Flight Management Web Apps
            </h3>
            <p className="text-gray-400">
              Full stack apps built with PHP, MySQL and HTML.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400">
          Email: mourya210305@gmail.com
        </p>
        <p className="text-gray-400">
          GitHub: github.com/SCM210305
        </p>
        <p className="text-gray-400">
          LinkedIn: linkedin.com/in/s-chandra-mourya
        </p>
      </section>

    </main>
  );
}
