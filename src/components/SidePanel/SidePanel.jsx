import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Tabs, Tab, Checkbox, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { MailOutline } from "@mui/icons-material";
import classes from "./SidePanel.module.css";
import inventoryMockData from "../../data/inventoryMockData.json";
import { useNavigate } from "react-router-dom";

function StackCard({ details = {}, selectedCard, setSelectedCard }) {
    const { cardName, cardId } = details;

    return (
        <div
            onClick={() => setSelectedCard(cardId)}
            style={{
                padding: "16px 8px 16px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                color: "#fff",
                backgroundColor:
                    selectedCard === cardId ? "#0D1B2A" : "inherit",
                border: selectedCard === cardId ? "1px solid #1976d2" : "unset",
                borderRadius: "4px",
                cursor: "pointer",
            }}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                <Checkbox
                    sx={{
                        color: "#ccc",
                        padding: 0,
                        width: "24px",
                        height: "24px",
                    }}
                    checked={selectedCard === cardId}
                />
                <div>
                    <div
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#303030",
                            marginBottom: "8px",
                            background: "#fff",
                            padding: "2px 4px",
                            borderRadius: "4px",
                        }}
                    >
                        {cardName}
                    </div>

                    <Typography variant="body2" color="white">
                        Sample Stack
                    </Typography>
                </div>
            </div>
            <IconButton sx={{ color: "#27E1C1" }}>
                <MailOutline fontSize="small" />
            </IconButton>
        </div>
    );
}

function SidePanel({
    setIsSidebarOpen = () => {},
    selectedCard,
    setSelectedCard = () => {},
}) {
    const navigate = useNavigate();

    const [tabIndex, setTabIndex] = useState(0);

    const { cities = [] } = inventoryMockData;

    const sampleData = cities[0].detailSets;

    return (
        <div className={classes.side_panel}>
            <div
                role="presentation"
                className={classes.close_button}
                style={{
                    top: "24px",
                    right: "0",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    backgroundColor: "#27e1c1",
                    zIndex: "999",
                }}
                onClick={() => {
                    setIsSidebarOpen(false);
                }}
            >
                <KeyboardDoubleArrowLeftIcon />
            </div>

            <div className={classes.header} onClick={() => navigate(-1)}>
                <KeyboardBackspaceIcon style={{ color: "#fff" }} />

                <div>Sample stack</div>
            </div>

            <Tabs
                value={tabIndex}
                onChange={(e, newValue) => setTabIndex(newValue)}
                textColor="inherit"
                TabIndicatorProps={{
                    sx: {
                        backgroundColor: "#27E1C1",
                        height: "3px",
                    },
                }}
            >
                <Tab
                    label={`BACKLOG (${sampleData.length})`}
                    sx={{ color: tabIndex === 0 ? "#27E1C1" : "#888" }}
                />
                <Tab
                    label="PENDING (0)"
                    sx={{ color: tabIndex === 1 ? "#27E1C1" : "#888" }}
                />
                <Tab
                    label="FINAL SIGN-OFF (0)"
                    sx={{ color: tabIndex === 2 ? "#27E1C1" : "#888" }}
                />
            </Tabs>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                {sampleData.map((item, index) => (
                    <StackCard
                        key={index}
                        details={item}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default SidePanel;
