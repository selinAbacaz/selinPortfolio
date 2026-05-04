import "./clouds.css"


const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "absolute",
    top: -80,
    left: 0,
    width: "full",
    height: 'fit-content',
    display: "flex",
    alignItems: "flex-end",
    zIndex: 1,
    overflowX: "hidden",
    maxWidth: "100vw"
  },

  cloud: {
    width: "200px",
    height: "750px",
    borderRadius: "180px",
    marginLeft: "-60px",
    transform: "translateY(-120%)",
    animation: "dropIn 0.6s ease forwards",
  },
};

export const CloudColumns = () => {
  const columns = new Array(14).fill(0);
  const colors = ['--myYellow', '--myOrange', '--myLightGreen']

  return (
    <div style={styles.wrapper}>
      {columns.map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.cloud,
            background: `var(${colors[i] ?? '--myDarkGreen'})`,
            animationDelay: `${i * 0.08}s`, 
            
          }}
        />
      ))}
    </div>
  );
};