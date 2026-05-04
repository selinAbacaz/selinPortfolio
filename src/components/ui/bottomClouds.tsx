import "./clouds.css";

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "flex-start",
    zIndex: 1,
    overflowX: "hidden",
    maxWidth: "100vw",
  },

  cloud: {
    width: "200px",
    height: "80vh",
    borderTopRightRadius: "180px",
    borderTopLeftRadius: "180px",
    backgroundColor: "var(--myDarkGreen)",
    marginLeft: "-60px",
    
  },
};

export const BottomClouds = () => {
  const columns = new Array(14).fill(0);


  return (
    <div style={styles.wrapper}>
      {columns.map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.cloud,
            
          }}
        />
      ))}
    </div>
  );
};