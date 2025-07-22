// components/ServicesSection.jsx
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        color: "#333",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Text Content */}
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Our Services
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "1rem", lineHeight: "1.6" }}>
          We specialize in reliable and efficient cargo logistics solutions. Whether it's
          local freight or international shipments, our experienced team ensures safe,
          on-time delivery through robust transport and warehousing networks.
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", fontSize: "1rem" }}>
          <li>Freight & Transportation</li>
          <li>Shipping & Cargo Handling</li>
          <li>Warehousing & Distribution</li>
          <li>Supply Chain Optimization</li>
        </ul>
      </div>

      {/* Image */}
      <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
        <Image
          src="/about-worker.png"
          alt="Worker with cargo"
          width={500}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
