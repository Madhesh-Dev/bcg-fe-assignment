import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./DetailsPage.module.css";
import FloatingChatIcon from "./FloatingChatIcon";
import SidePanel from "@/components/SidePanel/SidePanel";
import DetailedView from "@/components/DetailedView/DetailedView";
import inventoryMockData from "../../data/inventoryMockData.json";

function DetailsPage() {
    const { cities = [] } = inventoryMockData;

    const sampleData = cities[0].detailSets;

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedCard, setSelectedCard] = useState(sampleData[0]?.cardId);

    let animationClass = "collapsed";

    if (isSidebarOpen) {
        animationClass = "open";
    }

    const filteredSelectedData = sampleData.find(
        (card) => card.cardId === selectedCard
    );

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
                        width: "360px",
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
                    marginLeft: !isSidebarOpen ? "0px" : "360px",
                    width: !isSidebarOpen ? "100%" : "calc(100% - 360px)",
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
