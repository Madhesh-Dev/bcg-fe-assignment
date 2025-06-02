import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./DetailsPage.module.css";
import FloatingChatIcon from "./FloatingChatIcon";
import SidePanel from "@/components/SidePanel/SidePanel";
import DetailedView from "@/components/DetailedView/DetailedView";
import inventoryMockData from "../../data/inventoryMockData.json";
import { useParams } from "react-router-dom";

function DetailsPage() {
    const { cities = [] } = inventoryMockData;

    const params = useParams();

    const [isMobile, setIsMobile] = useState(false);

    const sidebarWidth = isMobile ? "100vw" : "360px";

    const sampleData = cities.find((city) => city.id === params.id).detailSets;

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedCard, setSelectedCard] = useState(sampleData[0]?.cardId);

    let animationClass = "collapsed";

    if (isSidebarOpen) {
        animationClass = "open";
    }

    const filteredSelectedData = sampleData.find(
        (card) => card.cardId === selectedCard
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");

        const handleChange = () => setIsMobile(mediaQuery.matches);

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    }, [isMobile]);

    return (
        <div className={classes["details-page-container"]}>
            <motion.div
                className={`${classes.chat_feed} ${
                    !isSidebarOpen ? classes.collapsed : ""
                }`}
                initial={false}
                animate={animationClass}
                variants={{
                    open: {
                        width: sidebarWidth,
                        height: "100%",
                        borderRadius: "0px",
                        padding: 0,
                        maxHeight: "unset",
                        minHeight: "unset",
                        x: 0,
                    },
                    collapsed: {
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        borderRight: "unset",
                        maxHeight: "unset",
                        zIndex: "999999",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                }}
            >
                {isSidebarOpen && (
                    <div className={classes.side_panel}>
                        <div className={classes.overlay_text} />
                        <SidePanel
                            setIsSidebarOpen={setIsSidebarOpen}
                            setSelectedCard={setSelectedCard}
                            selectedCard={selectedCard}
                            sampleData={sampleData}
                        />
                    </div>
                )}
                {!isSidebarOpen && (
                    <div
                        className={classes.chat_icon_container}
                        role="presentation"
                        onClick={() => {
                            setIsSidebarOpen(true);
                        }}
                    >
                        <FloatingChatIcon />
                    </div>
                )}
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    marginLeft: !isSidebarOpen ? "0px" : sidebarWidth,
                    width: !isSidebarOpen
                        ? "100%"
                        : `calc(100% - ${sidebarWidth})`,
                    maxHeight: "calc(100vh - 42px)",
                    overflowY: "auto",
                }}
                transition={{
                    marginLeft: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: !isSidebarOpen ? 0.25 : 0,
                    },
                    width: {
                        duration: 0,
                        delay: !isSidebarOpen ? 0.25 : 0,
                    },
                }}
            >
                <DetailedView
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    filteredSelectedData={filteredSelectedData}
                />
            </motion.div>
        </div>
    );
}

export default DetailsPage;
