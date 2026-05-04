export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className=" items-center justify-center" style={{ backgroundColor: "#5C340D", color:"AntiqueWhite", 
    padding: "1rem", marginTop: "auto", textAlign: "center", bottom: "0", left: "0", width: "100%", position: "fixed", zIndex: "10" }}>
      <div className="">
        <p className="">
          &copy; {year} Selin Bacaz. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
