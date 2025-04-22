import React, { useEffect, useState } from "react";

const MarketChange = ({setactivepage}) => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        fetch("/MarketTrend.json")
        .then((res) => res.json())
        .then((data) => setMarketData(data))
        .catch((error) => console.error("Error loading data:", error));
    }, []);
 
    return (
        <>
            <header>
            <button
        onClick={() => setactivepage("home")}
        style={{
            marginBottom: "20px",
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
            }}
        >
        ← Back to Home
    </button>
            </header>
            <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Market Change Overview</h2>
            <table style={{
                width: "80%",
                margin: "20px auto",
                borderCollapse: "collapse"
            }}>
                <thead>
                <tr style={{ backgroundColor: "#444", color: "white" }}>
                    <th style={{ padding: "10px", border: "1px solid #333" }}>Crop Name</th>
                    <th style={{ padding: "10px", border: "1px solid #333" }}>Price (₹)</th>
                    <th style={{ padding: "10px", border: "1px solid #333" }}>Trend</th>
                    <th style={{ padding: "10px", border: "1px solid #333" }}>Volume (kg)</th>
                </tr>
                </thead>
                <tbody>
                {marketData.map((item, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}>
                    <td style={{ padding: "10px", border: "1px solid #333" }}>{item.crop_name}</td>
                    <td style={{ padding: "10px", border: "1px solid #333" }}>{item.price}</td>
                    <td style={{ padding: "10px", border: "1px solid #333" }}>
                        {item.trend === "upward" && (
                            <span style={{ color: "green", display: "flex", alignItems: "center", gap: "5px" }}>
                            <img src="increase.png" alt="up" style={{ width: "25px", height: "20px" }} />
                            Upward
                            </span>
                        )}
                        {item.trend === "downward" && (
                            <span style={{ color: "red", display: "flex", alignItems: "center", gap: "5px" }}>
                            <img src="decrease.png" alt="down" style={{ width: "25px", height: "20px" }} />
                            Downward
                            </span>
                        )}
                        {item.trend === "stable" && (
                            <span style={{ color: "gray" }}>➖ Stable</span>
                        )}
                    </td>


                    <td style={{ padding: "10px", border: "1px solid #333" }}>{item.volume}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>

    );
};

export default MarketChange;
