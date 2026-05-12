import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="flex items-center justify-between"
      style={{
        backgroundColor: "#5C340D",
        color: "AntiqueWhite",
        padding: "1rem 1.5rem",
        marginTop: "auto",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "9999",
      }}
    >
      {/* GitHub Icon */}
      <a
        href="https://github.com/selinAbacaz/selinPortfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{
          display: "flex",
          alignItems: "center",
          color: "AntiqueWhite",
        }}
      >
        <FaGithub style={{height: "3vw", width: "3vw"}}></FaGithub>
      </a>

      {/* Center Text */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <p>
          &copy; {year} Selin Bacaz. All rights reserved.
        </p>
      </div>

      {/* Empty spacer to balance layout */}
      <div style={{ width: "28px" }} />
    </footer>
  );
}